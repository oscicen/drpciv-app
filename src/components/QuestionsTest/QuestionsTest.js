import React from "react";

import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import Ending from "./CurrentQuestion/Ending";
import questions from "../../api/questions";

const QuestionTest = ({
  questionState,
  nextQuestion,
  skipQuestion,
  isTestEnded
}) => {
  const question = questions.find(
    item => item.id === questionState.currentQuestion
  );
  return (
    <div>
      <div>
        <p>
          Întrebări {questionState.unanswered.length} din {questions.length},{" "}
          {questionState.correct.length} corecte {questionState.wrong.length}{" "}
          greşite. Timp rămas: {questionState.timeLeft}
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
