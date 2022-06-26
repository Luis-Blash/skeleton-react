import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutHome } from "../layout/LayoutHome";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { AuthRouter } from "./AuthRouter";
import { PathRoot } from "./types";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PathRoot.root} element={<LayoutHome />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={PathRoot.auth} element={<AuthRouter />} />
          <Route path={PathRoot.notfound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
