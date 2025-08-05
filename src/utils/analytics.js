import ReactGA from 'react-ga';

ReactGA.initialize('UA-295022509-3');

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};