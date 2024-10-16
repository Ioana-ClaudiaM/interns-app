import { createBrowserRouter } from 'react-router-dom';
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

export default createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout/>, 
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'create-user',
        element: <CreateUser />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'authenticate',
        element: <Authenticate />,
      },
    ],
  },
]);
