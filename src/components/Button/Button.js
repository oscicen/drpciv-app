import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ value, isActive, handleClick, params }) => {
  return (
    <button
      onClick={() => handleClick(params)}
      className={isActive ? "active" : null}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

export default Button;
