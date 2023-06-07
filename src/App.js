
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Details from './component/Details/Details';
import Main from './component/Main/Main';
import Home from './component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/shows/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
        }
      ]
    }
  ])
  
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
