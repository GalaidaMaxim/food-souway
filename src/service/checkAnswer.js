import axios from "axios";

export const checkAnswer = async (data) => {
  const result = await axios.post("./api/getAnswer", data);
  return result.data;
};
