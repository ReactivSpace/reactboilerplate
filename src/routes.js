import Base from './components/Base.js';
import HomePage from './components/HomePage.js';
import DashboardPage from './containers/DashboardPage.js';
import SchedulePage from './components/Schedule.js';
import MetricPage from './components/Metric.js';
import UploadPage from './components/Upload.js';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
    path: '/upload',
    component:UploadPage
  },
  {
    path:'/metrics',
    component:MetricPage
  },
{
path:'/schedule',
component: SchedulePage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
