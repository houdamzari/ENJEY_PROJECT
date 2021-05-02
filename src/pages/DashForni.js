import React from "react";
import { useHistory } from "react-router-dom";

import "../css/FDash.css";
function DashForni() {
  let history = useHistory();
  return (
    <div>
      <div class="mockupflexx">
        <div
          class="mockup11"
          onClick={() => {
            history.push("/ajoutclient");
          }}
        >
          <h1 class="titless ">
            Ajout client <br />
          </h1>
          <img class="iconm" src=" ./add.png " alt="dd " />
        </div>

        <div
          class="mockup22 "
          onClick={() => {
            history.push("/modificationclient");
          }}
        >
          <h1 class="titless ">
            Modification des <br /> clients existants
          </h1>
          <img class="iconm2" src=" ./edit.png " alt="dd " />
        </div>
      </div>

      <div class="mockupflexx2 ">
        <div
          class="mockup33 "
          onClick={() => {
            history.push("/facturegestion");
          }}
        >
          <h1 class="titless ">
            Gestion des <br /> factures
          </h1>
          <img class="iconm3" src=" ./gestion.png " alt="dd " />
        </div>
        <div
          class="mockup44"
          onClick={() => {
            history.push("/consomationgestion");
          }}
        >
          <h1 class="titless">
            Vérification des
            <br /> consommations{" "}
          </h1>
          <img class="iconm4" src=" ./verification.png " alt="dd " />
        </div>
      </div>
    </div>
  );
}

export default DashForni;
