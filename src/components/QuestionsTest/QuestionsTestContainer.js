import { connect } from "react-redux";
import { answerQuestion } from "../../redux/questionsTest.ducks";

import QuestionsTest from "./QuestionsTest";

const mapStateToProps = state => {
  return {
    questionState: state.questions,
    isTestEnded:
      state.questions.unanswered.length !== 0 && state.questions.timeLeft.on
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: payload => {
      dispatch(answerQuestion(payload));
      dispatch({ type: "CLEAR_ANSWER" });
    },
    skipQuestion: () => {
      dispatch({ type: "SKIP_QUESTION" });
      dispatch({ type: "CLEAR_ANSWER" });
    },
    tick: () => dispatch({ type: "SET_COUNTDOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsTest);
