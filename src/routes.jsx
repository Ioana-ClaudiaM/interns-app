import { createBrowserRouter, redirect } from 'react-router-dom';
import About from './pages/About.jsx';
import HomePage from './pages/HomePage.jsx';
import Contact from './pages/Contact.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Register from './pages/Register.jsx';
import CreateUser from './pages/CreateUser.jsx';
import Login from './pages/Login.jsx';
import Authenticate from './pages/Authenticate.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import Connect from './pages/Connect.jsx';
import { authRedirectMiddleware, meMiddleware } from '../middleware.js';
import { createUserAction, loginAction, registerAction } from '../actions.js';
import { authenticateLoader } from '../loaders.js';

export default createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: meMiddleware,  
      },
      {
        path: 'contact',
        element: <Contact />,
        loader: meMiddleware,  
      },
      {
        path: 'about',
        element: <About />,
        loader: meMiddleware,  
      },
      {
        path: 'connect',
        element: <Connect />,
        loader: meMiddleware,  
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'register',
        element: <Register />,
        action:registerAction,
        loader: authRedirectMiddleware,  
      },
      {
        path: 'create-user',
        element: <CreateUser />,
        action:createUserAction,
        loader: authRedirectMiddleware,  
      },
      {
        path: 'login',
        element: <Login />,
        action:loginAction,
        loader: authRedirectMiddleware,  
      },
      {
        path: 'authenticate',
        element: <Authenticate />,
        action:authenticateLoader,
        loader: authRedirectMiddleware,  
      },
    ],
  },
]);
