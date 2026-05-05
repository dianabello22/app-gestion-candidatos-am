import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Candidates from "../pages/Candidates";
import Offers from "../pages/Offers";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "candidates/",
        element: <Candidates />,
      },
      {
        path: "offers/",
        element: <Offers />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
];
