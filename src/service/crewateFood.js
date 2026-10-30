import axios from "axios";

export const createFood = async (data) => {
  const result = await axios.post("./api/createFood", data);
  return result.data;
};
