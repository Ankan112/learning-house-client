import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Blog from './pages/Blog/Blog';
import Courses from './pages/Courses/Courses';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ])
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
