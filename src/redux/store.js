import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { testReducer, watcherQuestions } from "./questionsTest.ducks";
import { answerReducer } from "./currentQuestion.ducks";

const reducer = combineReducers({
  questions: testReducer,
  answer: answerReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherQuestions);

export default store;
