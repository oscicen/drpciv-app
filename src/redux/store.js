import { createStore, combineReducers } from "redux";

import { testReducer } from "./questionsTest.ducks";
import { answerReducer } from "./currentQuestion.ducks";

const reducer = combineReducers({
  questions: testReducer,
  answer: answerReducer
});

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
