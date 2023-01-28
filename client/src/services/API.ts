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
/********* Post     *************/
/****************************************/

export interface CreatePostProps {

  title: string;

}

export const createPost = async(props:CreatePostProps)=>{

  const res = await axios.post(API_URL + "/api/create-post",{...props},headerConfig());
  return res;

}


export const getUserPosts = async () => {
  const res = await axios.get(API_URL + "/api/get-posts", headerConfig());
  return res;
};
