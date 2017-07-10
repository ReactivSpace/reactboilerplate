import Base from './components/Base.js';
import HomePage from './components/HomePage.js';
import DashboardPage from './containers/DashboardPage.js';
import SchedulePage from './components/Schedule.js';
import MetricPage from './components/Metric.js';
import ProfilePage from './components/Profile.js';
import ListUserPage from './containers/UserPage.js';
import UploadPage from './components/Upload.js';
import LoginPage from './containers/LoginPage.js';
import SignUpPage from './containers/SignUpPage.js';
import FormPage from './containers/FormPage.js';
import UserFormPage from './containers/UserFormPage';
import UserRequesPage from './components/UserRequestForm.js';
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
          callback(null, LoginPage);
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
    path:'/profile',
    component:ProfilePage
  },
  {
path:'/listuser',
component:ListUserPage
  },{
    path:'form',
    component:FormPage
  },
  {
    path: 'user/:id',
    component: UserFormPage
  }

  ,
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
      Auth.deAuthenticateUserObject();
      Auth.deRoleUser();
        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
