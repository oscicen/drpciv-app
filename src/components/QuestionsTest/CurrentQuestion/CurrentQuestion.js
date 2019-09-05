import React from "react";

import Button from "../../Button";

const CurrentQuestion = ({
  question,
  answer,
  changeAnswer,
  clearSelected,
  nextQuestion,
  skipQuestion
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
            value={answer.option}
            params={answer.option}
            key={answer.option}
            handleClick={changeAnswer}
            isActive={answer.valid}
          />
        ))}
      </div>
      <Button value="Raspund mai tarziu" handleClick={skipQuestion} />
      <Button value="Sterg raspunsul" handleClick={clearSelected} />
      <Button
        value="Trimit raspunsul"
        handleClick={nextQuestion}
        params={answer}
      />
    </div>
  );
};

export default CurrentQuestion;
