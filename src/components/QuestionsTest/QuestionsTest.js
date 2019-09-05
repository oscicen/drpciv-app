import React from "react";

import CurrentQuestionContainer from "./CurrentQuestion/CurrentQuestionContainer";
import questions from "../../api/questions";

const QuestionTest = ({ currentQuestion, nextQuestion, skipQuestion }) => {
  const question = questions.find(item => item.id === currentQuestion);
  return (
    <CurrentQuestionContainer
      question={question}
      nextQuestion={nextQuestion}
      skipQuestion={skipQuestion}
    />
  );
};

export default QuestionTest;
