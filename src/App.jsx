import React from 'react'
import Home from './pages/home'
import IdeaFulfill from './pages/IdeaFulfill'
import TheNewMoney from './pages/theNewMoney'
import EnhancePro from './pages/enhancepro'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path:"/aboutus",
  //   element: <AboutUs />
  // },
  // {
  //   path:"/contact",
  //   element: <Contact />
  // },
  {
    path:"/ideafulfill",
    element: <IdeaFulfill />
  },
  {
    path:"/thenewmoney",
    element: <TheNewMoney />
  },
  {
    path:"/enhancepro",
    element: <EnhancePro />
  },
  // {
  //   path:"/enhancepro",
  //   element: <EnhancePro />
  // },
  {
    path: "/",
    element: <Home/>,
  },
]);

const App = () => (
  <RouterProvider router={router} />
  )

export default App