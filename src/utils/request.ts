const service = axios.create({ timeout: 5000 });

// service.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 添加请求拦截器
service.interceptors.request.use(
  function (config: any) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response: any) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error: any) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
