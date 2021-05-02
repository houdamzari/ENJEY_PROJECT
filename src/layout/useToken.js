import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = tokenString;
    console.log(userToken);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
    console.log(userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
