import { connect } from "react-redux";
import { answerQuestion } from "../../redux/questionsTest.ducks";

import QuestionsTest from "./QuestionsTest";

const mapStateToProps = state => {
  return {
    currentQuestion: state.questions.currentQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: payload => {
      dispatch(answerQuestion(payload));
      dispatch({ type: "CLEAR_ANSWER" });
    },
    skipQuestion: () => dispatch({ type: "SKIP_QUESTION" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsTest);
