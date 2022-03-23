import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { token } = useSelector((state) => state.AuthReducer);

  const UseAuth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = UseAuth();

  return <> { !auth ? <Navigate to="/" /> : <Outlet />} </>;
};
export default ProtectedRoutes;
