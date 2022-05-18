import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/login" replace />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        // {
        //   path: "messages",
        //   element: <DashboardMessages />,
        // },
        // { path: "tasks", element: <DashboardTasks /> },
      ],
    },
  ]);

  return element;
};

export default App;
