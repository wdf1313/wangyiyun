const deveBaseURL="http://123.207.32.32:9001";
const proBaseURL="http://production.org";
export const  BASE_URL=process.env.NODE_ENV ==='development' ? deveBaseURL:proBaseURL;
export  const TIMEOUT =5000;
