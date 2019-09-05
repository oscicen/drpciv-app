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
  switch (action.type) {
    case ANSWER_QUESTION:
      const isUnanswered = action.payload.every(item => !item.valid);
      const answerToCheck = questions[state.currentQuestion].answers;
      const isCorretct = action.payload.every(
        (item, index) => item.valid === answerToCheck[index].valid
      );
      if (!isUnanswered) {
        if (isCorretct) {
          return {
            ...state,
            unanswered: state.unanswered.filter(
              item => item !== state.currentQuestion
            ),
            currentQuestion:
              state.unanswered[
                state.unanswered.indexOf(state.currentQuestion) + 1
              ],
            correct: [...state.correct, state.currentQuestion]
          };
        } else {
          return {
            ...state,
            unanswered: state.unanswered.filter(
              item => item !== state.currentQuestion
            ),
            currentQuestion:
              state.unanswered[
                state.unanswered.indexOf(state.currentQuestion) + 1
              ],
            wrong: [...state.wrong, state.currentQuestion]
          };
        }
      } else {
        return state;
      }
    case SKIP_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    default:
      return state;
  }
};
