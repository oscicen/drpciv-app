export const ANSWER_QUESTION = "ANSWER_QUESTION";

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
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    default:
      return state;
  }
};
