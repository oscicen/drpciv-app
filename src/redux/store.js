import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { testReducer, watcherQuestions } from "./questionsTest.ducks";
import { answerReducer } from "./currentQuestion.ducks";

const reducer = combineReducers({
  questions: testReducer,
  answer: answerReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherQuestions);

export default store;
