import "../css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Factures from "../pages/Factures";
import Consomations from "../pages/Consomations";
import Reclamations from "../pages/Reclamations";
import FAQ from "../pages/FAQ";
import Login from "../components/Login";
import LoginClient from "../components/LoginClient";
import SingleConso from "../components/SingleConso";
import VerifyConso from "../components/VerifyConso";
import SingleRec from "../components/SingleRec";
import DashForni from "../pages/DashForni";
import ClientForni from "../pages/ClientForni";
import ConsoForni from "../pages/ConsoForni";
import ModifForni from "../pages/ModifForni";
import FactureForni from "../pages/FactureForni";
import ReclamtionForni from "../pages/ReclamtionForni";
import AjoutClient from "../components/AjoutClient";
import ModifClient from "../components/ModifClient";
import SingleFacture from "../components/SingleFacture";
import Index from "../pages/Index";
import useToken from "./useToken";
function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/loginclient">
              <LoginClient setToken={setToken} />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <SideBar />
          <Nav />
          <Switch>
            <Route path="/factures">
              <Factures />
            </Route>
            <Route path="/dashforni">
              <DashForni />
            </Route>
            <Route path="/clientgestion">
              <ClientForni />
            </Route>
            <Route path="/facturegestion">
              <FactureForni />
            </Route>
            <Route path="/reclamationgestion">
              <ReclamtionForni />
            </Route>
            <Route path="/consomationgestion">
              <ConsoForni />
            </Route>
            <Route path="/ajoutclient">
              <AjoutClient />
            </Route>
            <Route path="/modificationclient">
              <ModifForni />
            </Route>
            <Route path="/singlefacture/:id">
              <SingleFacture />
            </Route>
            <Route path="/singleconsomation/:id">
              <SingleConso />
            </Route>
            <Route path="/singlerec/:id">
              <SingleRec />
            </Route>
            <Route path="/modif/:id">
              <ModifClient />
            </Route>
            <Route path="/verify/:id">
              <VerifyConso />
            </Route>
            <Route path="/consomations">
              <Consomations />
            </Route>
            <Route path="/reclamations">
              <Reclamations />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/dash">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
