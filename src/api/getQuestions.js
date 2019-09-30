import axios from "axios";

const getQuestions = () => {
  return axios.get("http://www.mocky.io/v2/5d91fd3b310000ee9210cc6f");
};

export default getQuestions;
