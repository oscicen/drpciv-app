import React from "react";

import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import questions from "../../api/questions";

const QuestionTest = ({ currentQuestion, nextQuestion, skipQuestion }) => {
  return (
    <CurrentQuestionContainer
      question={questions[currentQuestion]}
      nextQuestion={nextQuestion}
      skipQuestion={skipQuestion}
    />
  );
};

export default QuestionTest;
