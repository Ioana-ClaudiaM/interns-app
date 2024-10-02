import { createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import HomePage from './pages/HomePage.jsx'
import Contact from './pages/Contact.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])