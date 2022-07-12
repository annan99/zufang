// import store from "@/store";
import request from "@/utils/request";

/**
 * 获取用户信息资料
 */
export const getUserInfo = () => {
  const token = window.localStorage.getItem("hkzf");
  return request({
    method: "GET",
    url: "user",
    headers: {
      authorization: token,
    },
  });
};


