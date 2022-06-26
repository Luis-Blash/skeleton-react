import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutAuth } from "../layout/auth/LayoutAuth";
import { Login } from "../pages/auth/Login";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { AuthRoot } from "./types";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path={AuthRoot.reset}  element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
};
