import React, { useState, useEffect, useCallback } from "react";
import "../css/SideBar.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
function VerifyConso() {
  let history = useHistory();
  const [consomations, setConsomations] = useState([]);
  const [clients, setClients] = useState([]);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  const fetchConsomations = useCallback(async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/conso"
    );
    console.log(data.data);
    setConsomations(data.data);
  });
  useEffect(() => {
    fetchConsomations();
  }, []);
  const fetchClients = useCallback(async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/users"
    );
    console.log(data);
    setClients(data);
  });
  useEffect(() => {
    fetchClients();
  }, []);
  const singleConso = (id) => {
    history.push(`/verify/${id}`);
  };
  const { id } = useParams();
  const clientFacture = consomations.map((clientFacture) =>
    clientFacture.id == id ? (
      <div key={clientFacture.id} onClick={() => singleConso(clientFacture.id)}>
        <div class="leboxe">Facture du mois : {clientFacture.mois}</div>{" "}
        {clientFacture.status ? (
          <div className="leboxe2">vérifié</div>
        ) : (
          <div className="leboxe2">Non Vérifié</div>
        )}
        consomation saisie le: {Date(clientFacture.created_at)}
        <div className="kindainput">{clientFacture.consomation} KWH</div>
      </div>
    ) : null
  );
  const client = clients.map((client) =>
    client.id == id ? (
      <div className="description" key={client.id}>
        <h3>
          {client.gender === "Male" ? <strong>M</strong> : <strong>Mme</strong>}{" "}
          {" " + client.lastname + " " + client.firstname}
        </h3>
        <br></br>
        <h3>Client depuis le {Date(client.created_at)}</h3>
        <h3>Numéro du client: {client.NClient}</h3>
        <h3>Numéro du contrat: {client.NContract}</h3>
        <h3>Addresse: {client.adresse}</h3>
      </div>
    ) : null
  );
  return (
    <div style={{ marginTop: "400px", marginLeft: "400px" }}>
      <div>{client}</div>
      {clientFacture}
      <br />
      <div>
        <button id="butto" type="button">
          Verifier
        </button>
      </div>
    </div>
  );
}

export default VerifyConso;
