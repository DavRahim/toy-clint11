import React, { useContext } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Regiser from '../Home/Login/Regiser';
import Login from '../Home/Login/Login';
import Home from '../Home/Home';
import AllToys from '../Home/AllToys/AllToys';
import AddToy from '../AddToy/AddToy';
import MyToy from '../MyToy/MyToy';
import Update from '../Update/Update';
import Details from '../Home/Details/Details';
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivetRouter from './PrivetRouter';
import ShowModal from '../Home/AllToys/ShowModal';
import Question from '../Question/Question';


 
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Regiser></Regiser>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addtoys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/mytoys",
        element: (
          <PrivetRouter>
            <MyToy></MyToy>
          </PrivetRouter>
        ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://toy-server-ten.vercel.app/toys/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRouter>
            <Details></Details>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-server-ten.vercel.app/toy-car/${params.id}`),
      },
      {
        path: "/alldetail/:id",
        element: (
          <PrivetRouter>
            <ShowModal></ShowModal>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-server-ten.vercel.app/toys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Question></Question>,
      },
    ],
  },
]);


export default router;