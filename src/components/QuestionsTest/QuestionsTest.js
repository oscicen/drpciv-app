import React, { useEffect } from "react";

import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import Ending from "./CurrentQuestion/Ending";
import questions from "../../api/questions";

const QuestionTest = ({
  questionState,
  nextQuestion,
  skipQuestion,
  isTestEnded,
  tick
}) => {
  useEffect(() => {
    if (questionState.timeLeft.on && questionState.unanswered.length !== 0) {
      var timerID = setInterval(() => tick(), 1000);

      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

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
  );
};

export default QuestionTest;
