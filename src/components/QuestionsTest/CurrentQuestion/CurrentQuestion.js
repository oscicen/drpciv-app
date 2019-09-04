import React from "react";

import Button from "../../Button";

const CurrentQuestion = ({
  question,
  answer,
  changeAnswer,
  clearSelected,
  nextQuestion
}) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <img src={question.image} alt={question.id} />
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer.text}</li>
        ))}
      </ul>
      <div className="answer-options">
        {answer.map(answer => (
          <Button
            name={answer.option}
            key={answer.option}
            handleClick={changeAnswer}
            isActive={answer.value}
          />
        ))}
      </div>
      <Button name="Raspund mai tarziu" handleClick={nextQuestion} />
      <Button name="Sterg raspunsul" handleClick={clearSelected} />
      <Button name="Trimit raspunsul" handleClick={nextQuestion} />
    </div>
  );
};

export default CurrentQuestion;
