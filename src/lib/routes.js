import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Rewards from "../components/Rewards";
import Dashboard from "../components/dashboard";
import Register from "../components/Login/register";
import AdminManager from "../components/users";
import NotApproved from "../components/users/notapproved";
export const ROOT = "/";
export const PROTECTED ="/protected";
export const REWARDS = "/protected/rewards";
export const REGISTER = "/register";
export const LOGIN = "/login";
export const NOTAPPROVED = "/notapproved";
export const USERS = "/protected/users";
export const router = createBrowserRouter([
  { path: REGISTER, element: <Register />},
  { path: ROOT, element: <Login />},
  { path: NOTAPPROVED, element: <NotApproved />},
  { path: LOGIN, element: <Login /> },
    {
      
        path: PROTECTED,
        element: <Layout />,
        children: [
          {
            path: PROTECTED,
            element: <Dashboard />,
          },
          {
            path: USERS,
            element: <AdminManager />,
          },
        ],
      },
]);