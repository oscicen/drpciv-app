import { connect } from "react-redux";

import CurrentQuestion from "./CurrentQuestion";
import { setAnswer, clearAnswer } from "../../../redux/currentQuestion.ducks";

const mapStateToProps = state => {
  return {
    answer: state.answer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAnswer: answer => dispatch(setAnswer(answer)),
    clearSelected: () => dispatch(clearAnswer()),
    sendAnswer: () => dispatch(clearAnswer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestion);
