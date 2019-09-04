import React from "react";

import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import questions from "../../../api/questions";

const QuestionTest = ({ currentQuestion, nextQuestion }) => {
  return (
    <CurrentQuestionContainer
      question={questions[currentQuestion]}
      nextQuestion={nextQuestion}
    />
  );
};

export default QuestionTest;
