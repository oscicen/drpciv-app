import questions from "../api/questions";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SKIP_QUESTION = "SKIP_QUESTION";

export const answerQuestion = payload => {
  return {
    type: ANSWER_QUESTION,
    payload
  };
};

const initialState = {
  onTime: true,
  timeLeft: 30,
  currentQuestion: 0,
  correct: 0,
  wrong: 0
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      const isUnanswered = action.payload.every(item => {
        return !item.valid;
      });
      const answerToCheck = questions[state.currentQuestion].answers;
      const isCorretct = action.payload.every((item, index) => {
        return item.valid === answerToCheck[index].valid;
      });
      if (!isUnanswered) {
        if (isCorretct) {
          return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            correct: state.correct + 1
          };
        } else {
          return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            wrong: state.wrong + 1
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
