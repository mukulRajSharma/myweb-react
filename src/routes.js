import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Education from './pages/Education';
// import Login from './pages/Login';
import NotFound from './pages/Page404';
// import Register from './pages/Register';
import Products from './pages/Products';
import About from './pages/About';
import Sandbox from './pages/Sandbox';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'about', element: <About /> },
        { path: 'education', element: <Education /> },
        { path: 'work', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'Sandbox', element: <Sandbox />}
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/about" /> },
        // { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/about" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
