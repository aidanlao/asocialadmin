import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Rewards from "../components/Rewards";
import Dashboard from "../components/dashboard";
export const ROOT = "/";
export const PROTECTED ="/protected";
export const REWARDS = "/protected/rewards";
export const LOGIN = "/login";
export const router = createBrowserRouter([
  { path: ROOT, element: <Login />},
  { path: LOGIN, element: <Login /> },
    {
      
        path: PROTECTED,
        element: <Layout />,
        children: [
          {
            path: PROTECTED,
            element: <Dashboard />,
          },
        ],
      },
]);