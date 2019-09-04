import { connect } from "react-redux";

import QuestionsTest from "./QuestionsTest";

const mapStateToProps = state => {
  return {
    currentQuestion: state.questions.currentQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: () => {
      dispatch({ type: "ANSWER_QUESTION" });
      dispatch({ type: "CLEAR_ANSWER" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsTest);
