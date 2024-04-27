// 封装axios
import axios from "axios";
import { AxiosInstance } from "axios";
import { NProgress } from "nprogress";

// 修改全局axios默认配置
// Axios.defaults.timeout = 3000;
// 允许客户端发起请求时携带cookie信息，
// 此外服务端还需要是设置Access-Control-Allow-Origin，告诉浏览器允许跨域，而且这个值必须指定域名，不能设置为*
// 在响应头中，Access-Control-Allow-Credentials这个值也要设置为true
// Axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Content-Type'] = 'application/json';

type CommonRequestHeadersList =
  | "Accept"
  | "Content-Length"
  | "User-Agent"
  | "Content-Encoding"
  | "Authorization";

// multipart/form-data文件上传时需要的格式
type ContentType =
  | "text/html"
  | "text/plain"
  | "multipart/form-data"
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "application/octet-stream";
export type RawAxiosRequestHeaders = {
  [Key in CommonRequestHeadersList]:
    | string
    | string[]
    | number
    | boolean
    | null;
} & {
  "Content-Type": ContentType;
};
const Axios: AxiosInstance = axios.create({
  baseURL: "/",
  timeout: 5000,
  // 是否携带cookie信息
  withCredentials: true,
  // 默认情况下，状态码不返回200的话，不会受到返回数据，根据需要设置后台返回区间
  validateStatus: (status) => {
    return status >= 200 && status <= 500;
  },
  // 请求头配置
  // 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';
  headers: {
    // 指定了请求体的媒体类型
    "Content-Type": "application/json;charset=utf-8",
    // 请求头用于在发送请求时进行身份验证，通常在需要访问受保护资源时使用。它的值通常包含访问令牌或用户名密码。
    Authorization: "token",
    // 用于指定客户端能够接收的响应内容类型
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    // 地址栏浏览器加载进度条
    // NProgress.start();
    config.headers["Accept-Language"] =
      sessionStorage.getItem("language") || "zh-cn";

    config.headers["Cache-Control"] = "no-cache";
    // pragma与cache-control（http1.1）功能相同，兼容http1.0,已弃用，不推荐
    config.headers.Pragma = "no-cache";
    console.log("request", config);
    // 一般上传文件使用form表单，判断data是否为form对象，从而改变请求体类型
    if (config.data instanceof FormData) {
      config.headers["content-type"] = "multipart/form-data";
    }

    const token = sessionStorage.getItem("token");
    // if (!(config.url.indexOf('/users/session/') > -1 && config.method === 'post')) {
    //   config.headers.Authorization = token;
    // }
    //请求头添加token
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    console.log("request", error);
    return Promise.reject(error);
  }
);

// 用户没有网络、网速慢导致的网络超时这两种情况不会调用response,需要在请求的catch中处理
Axios.interceptors.response.use(
  (response) => {
    // NProgress.done();
    //根据响应码判断

    console.log("response", response);
    return Promise.resolve(response.data);
    // return response;
  },
  (error) => {
    console.log("response", error);
    return Promise.reject(error);
  }
);
export default Axios;
