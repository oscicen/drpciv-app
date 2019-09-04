import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ name, isActive, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(name)}
      className={isActive ? "active" : null}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

export default Button;
