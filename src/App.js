import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Blog from './pages/Blog/Blog';
import CheckOut from './pages/CheckOut/CheckOut';
import Courses from './pages/Courses/Courses';
import CoursesInfo from './pages/CoursesInfo/CoursesInfo';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
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
        element: <Courses></Courses>,
        loader: () => {
          return fetch('https://server-final-project.vercel.app/courses');
        }

      },
      {
        path: '/courses/:id',
        element: <CoursesInfo></CoursesInfo>,
        loader: ({ params }) => {
          return fetch(`https://server-final-project.vercel.app/courses/${params.id}`);
        }

      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`https://server-final-project.vercel.app/checkout/${params.id}`);
        }

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
