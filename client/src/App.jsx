import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// In the main demo {BrowserRouter, Route, Link} has been used. Re-wrote with createBrowserRouter and RouterProvider
import { Home, CreatePost, Root } from './pages';

const App = () => {
    const router = createBrowserRouter([
      { path:'/',
        element:<Root />,
        children:[
          {index:true,element:<Home/>},
          {path:'/create-post',element:<CreatePost/>}
        ]
      }
    ]);
    return (
      <RouterProvider router={router}></RouterProvider>
    );
  }

export default App;