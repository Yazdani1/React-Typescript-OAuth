import axios from "axios";
import { API_URL, headerConfig } from "../services/Config";

/****************************************/
/*********Get User Info     *************/
/****************************************/

export const getUserInfo = async () => {
  const res = await axios.get(API_URL + "/auth/login/success", {
    withCredentials: true,
  });
  return res;
};

/****************************************/
/*********Get User Post     *************/
/****************************************/

export const getUserPosts = async () => {
  const res = await axios.get(API_URL + "/api/get-posts", headerConfig());
  return res;
};
