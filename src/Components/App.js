import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import DashBoard from "../Pages/NewUserData";
import UsuariosR from "../Pages/UsersR";
import UsuariosD from "../Pages/UsersD";
import Layout from "./Layout";
import NotFound from "../Pages/NotFound";

import "../global.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Usuarios/Registrados" component={UsuariosR} />
          <Route exact path="/Usuarios/Desconocidos" component={UsuariosD} />
          <Route exact path="/DashBoard/User/:id" component={DashBoard} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
