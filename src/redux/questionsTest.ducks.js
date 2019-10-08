import { call, put, takeLatest } from "redux-saga/effects";

import questions from "../api/questions";
import getQuestions from "../api/getQuestions";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SKIP_QUESTION = "SKIP_QUESTION";
export const SET_COUNTDOWN = "SET_COUNTDOWN";

export const GET_QUESTIONS_REQUESTED = "GET_QUESTIONS_REQUESTED";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILED = "GET_QUESTIONS_FAILED";

export const answerQuestion = payload => {
  return {
    type: ANSWER_QUESTION,
    payload
  };
};

export const getQuestionData = () => ({ type: GET_QUESTIONS_REQUESTED });

export function* workerQuestions(action) {
  try {
    const qData = yield call(
      getQuestions,
      "http://www.mocky.io/v2/5d91fd3b310000ee9210cc6f"
    );
    yield put({ type: GET_QUESTIONS_SUCCESS, payload: qData.data });
  } catch (error) {
    yield put({ type: GET_QUESTIONS_FAILED, payload: error.message });
  }
}

export function* watcherQuestions() {
  yield takeLatest(GET_QUESTIONS_REQUESTED, workerQuestions);
}

const unanswered = questions.map(item => item.id);
const startQuestion = questions[0].id;

const initialState = {
  data: [],
  error: "",
  isLoading: false,
  onTime: true,
  timeLeft: {
    min: 3,
    sec: 0,
    on: true
  },
  unanswered,
  currentQuestion: startQuestion,
  correct: [],
  wrong: []
};

export const testReducer = (state = initialState, action) => {
  const nextQuestion =
    state.unanswered.indexOf(state.currentQuestion) + 1 >=
    state.unanswered.length
      ? state.unanswered[0]
      : state.unanswered[state.unanswered.indexOf(state.currentQuestion) + 1];

  switch (action.type) {
    case ANSWER_QUESTION:
      const isUnanswered = action.payload.every(item => !item.valid);
      const answerToCheck = questions.find(
        item => item.id === state.currentQuestion
      ).answers;
      const isCorrect = action.payload.every(
        (item, index) => item.valid === answerToCheck[index].valid
      );
      if (!isUnanswered) {
        if (isCorrect) {
          return {
            ...state,
            unanswered: state.unanswered.filter(
              item => item !== state.currentQuestion
            ),
            currentQuestion: nextQuestion,
            correct: [...state.correct, state.currentQuestion]
          };
        } else {
          return {
            ...state,
            unanswered: state.unanswered.filter(
              item => item !== state.currentQuestion
            ),
            currentQuestion: nextQuestion,
            wrong: [...state.wrong, state.currentQuestion]
          };
        }
      } else {
        return state;
      }
    case SKIP_QUESTION:
      return {
        ...state,
        currentQuestion: nextQuestion
      };
    case SET_COUNTDOWN:
      if (state.timeLeft.min > 0) {
        if (state.timeLeft.sec > 0) {
          return {
            ...state,
            timeLeft: {
              ...state.timeLeft,
              sec: state.timeLeft.sec - 1
            }
          };
        } else if (state.timeLeft.sec === 0) {
          return {
            ...state,
            timeLeft: {
              ...state.timeLeft,
              min: state.timeLeft.min - 1,
              sec: 59
            }
          };
        }
      } else if (state.timeLeft.min === 0 && state.timeLeft.sec > 1) {
        return {
          ...state,
          timeLeft: {
            ...state.timeLeft,
            sec: state.timeLeft.sec - 1
          }
        };
      } else {
        return {
          ...state,
          timeLeft: {
            ...state.timeLeft,
            sec: state.timeLeft.sec - 1,
            on: false
          }
        };
      }
      break;
    case GET_QUESTIONS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false
      };
    case GET_QUESTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
