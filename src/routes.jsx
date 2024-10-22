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
import { meMiddleware } from '../middleware.js';
import { me } from './api.js';
import { createUserAction, loginAction, registerAction } from '../actions.js';
import { authenticateLoader } from '../loaders.jsx';

export default createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    handle:meMiddleware,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => me()
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'connect',
        element: <Connect />,
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
      },
      {
        path: 'create-user',
        element: <CreateUser />,
        action:createUserAction,
      },
      {
        path: 'login',
        element: <Login />,
        action:loginAction,
      },
      {
        path: 'authenticate',
        element: <Authenticate />,
        loader:authenticateLoader,
      },
    ],
  },
]);
