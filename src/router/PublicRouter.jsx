import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutAuth } from "../layout/auth/LayoutAuth";
import { Login } from "../pages/auth/Login";

export const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutAuth />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
