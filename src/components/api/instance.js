import axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // 网易云api：跨域请求,在所有请求带上 xhrFields: { withCredentials: true }
  timeout: 1000 * 5,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    Message.error({ message: "请求超时!" });
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { status } = response;
    if (status === 200) {
      return response;
    } else if (status === 301) {
      Message.error({ message: "请先登录!" });
      // router.replace({
      //     path: 'login'
      // })
      return false;
    } else {
      return false;
    }
  },
  function (error) {
    // 对响应错误做点什么
    Message.error({
      message: error.response.data.message || "Error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default instance;
