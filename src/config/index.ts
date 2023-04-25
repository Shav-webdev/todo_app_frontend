const isProd = process.env.NODE_ENV === 'production';

export const config = {
  API_URL: isProd
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL,
  WS_API_URL: isProd
    ? process.env.REACT_APP_PROD_WS_API_URL
    : process.env.REACT_APP_DEV_WS_API_URL,
};
