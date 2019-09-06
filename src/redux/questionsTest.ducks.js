import questions from "../api/questions";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SKIP_QUESTION = "SKIP_QUESTION";

export const answerQuestion = payload => {
  return {
    type: ANSWER_QUESTION,
    payload
  };
};

const unanswered = questions.map(item => item.id);
const startQuestion = questions[0].id;

const initialState = {
  onTime: true,
  timeLeft: 30,
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
    default:
      return state;
  }
};
