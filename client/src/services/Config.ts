export const API_URL = "http://localhost:5000";

// export const API_URL ="https://video-stream-platform.vercel.app/api"

export const headerConfig = () => {
  return {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  };
};
