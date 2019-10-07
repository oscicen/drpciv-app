import React, { useEffect } from "react";

import Loading from "../Loading/Loading";
import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import Ending from "./CurrentQuestion/Ending";

import questions from "../../api/questions";

const QuestionTest = ({
  questionState,
  nextQuestion,
  skipQuestion,
  isTestEnded,
  tick,
  getQuestionData
}) => {
  useEffect(() => {
    if (questionState.timeLeft.on && questionState.unanswered.length !== 0) {
      var timerID = setInterval(() => tick(), 1000);

      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

  useEffect(() => {
    getQuestionData();
  }, []);

  const qqq = questionState.data;

  const question = questions.find(
    item => item.id === questionState.currentQuestion
  );
  const twoDigitsTimer = time => {
    if (time.toString().length === 1) {
      return "0" + time;
    } else {
      return time;
    }
  };

  return (
    <Loading isLoading={questionState.isLoading} error={questionState.error}>
      <div>
        <div>
          <p>
            Întrebări rămase: {questionState.unanswered.length}, din{" "}
            {questions.length}, {questionState.correct.length} corecte,
            {questionState.wrong.length} greşite. Timp rămas:{" "}
            {`${twoDigitsTimer(questionState.timeLeft.min)}:${twoDigitsTimer(
              questionState.timeLeft.sec
            )}`}
          </p>
        </div>
        {isTestEnded ? (
          <CurrentQuestionContainer
            question={question}
            nextQuestion={nextQuestion}
            skipQuestion={skipQuestion}
          />
        ) : (
          <Ending message="Test has ended." />
        )}
      </div>
    </Loading>
  );
};

export default QuestionTest;
