export const SET_ANSWER = "SET_ANSWER";
export const CLEAR_ANSWER = "CLEAR_ANSWER";

export const setAnswer = answer => ({
  type: SET_ANSWER,
  payload: answer
});

export const clearAnswer = () => ({
  type: CLEAR_ANSWER
});

const initialState = [
  {
    option: "a",
    value: false
  },
  {
    option: "b",
    value: false
  },
  {
    option: "c",
    value: false
  }
];

export const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return state.map(answer => {
        if (answer.option === action.payload) {
          return {
            ...answer,
            value: !answer.value
          };
        }
        return answer;
      });
    case CLEAR_ANSWER:
      return initialState;
    default:
      return state;
  }
};
