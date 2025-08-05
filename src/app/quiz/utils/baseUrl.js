
export const BASE_URL = () => {
   
    if (process.env.REACT_APP_ENV === 'production') {
      return process.env.REACT_APP_PROD_API_URL;
    } else {
      return process.env.REACT_APP_DEV_API_URL;
    }
  };

  
export const LOGIN_URL = () => {
    if (process.env.REACT_APP_ENV === 'production') {
      return process.env.REACT_APP_LOGIN_PROD_BASE_URL;
    } else {
      return process.env.REACT_APP_LOGIN_DEV_BASE_URL;
    }
  };
  