import React from "react";
import "../css/ClientForni.css";
import { useHistory } from "react-router-dom";

function ClientForni() {
  let history = useHistory();
  return (
    <div class="MM">
      <div
        class="M 1"
        onClick={() => {
          history.push("/ajoutclient");
        }}
      >
        <img src="addclient.png" />
        <h4 id="Titles">
          Ajouter <br /> un client
        </h4>
      </div>
      <div
        class="M 2"
        onClick={() => {
          history.push("/modificationclient");
        }}
      >
        <img src="editclient.png" />
        <h4 id="Titles">
          Modifier un <br /> client existant
        </h4>
      </div>
    </div>
  );
}

export default ClientForni;
