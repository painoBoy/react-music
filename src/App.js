import React from "react";
import AppHeader from "components/header";
import AppFooter from "components/footer";
import { renderRoutes } from "react-router-config";
import routes from "@/routes";
import { HashRouter } from 'react-router-dom';
import "./app.css";

export default function App() {
  return (
    <>
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
    </>
  );
}
