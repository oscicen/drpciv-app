import axios from "axios";

const getQuestions = url => {
  return axios.get(url);
};

export default getQuestions;
