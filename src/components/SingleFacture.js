import React, { useState, useEffect, useCallback } from "react";
import "../css/SingleConso.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleFacture() {
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
  const { id } = useParams();
  const clientFacture = consomations.map((clientFacture) =>
    clientFacture.user.id == id ? (
      <div className="box123" key={clientFacture.id}>
        Facture du mois: {clientFacture.mois}{" "}
      </div>
    ) : null
  );
  const clientFacture2 = consomations.map((clientFacture) =>
    clientFacture.user.id == id ? (
      <div
        className="boxx"
        style={
          clientFacture.status
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        key={clientFacture.id}
      >
        {" "}
        {clientFacture.status ? <div> géré </div> : <div>Non géré</div>}{" "}
      </div>
    ) : null
  );
  const client = clients.map((client) =>
    client.id == id ? (
      <div className="description" key={client.id}>
        <h3>
          {" "}
          {client.gender === "Male" ? (
            <strong> M </strong>
          ) : (
            <strong>Mme</strong>
          )}{" "}
          {" " + client.lastname + " " + client.firstname}{" "}
        </h3>{" "}
        <br/> <h3> Client depuis le {Date(client.created_at)} </h3>{" "}
        <h3> Numéro du client: {client.NClient} </h3>{" "}
        <h3> Numéro du contrat: {client.NContract} </h3>{" "}
        <h3> Addresse: {client.adresse} </h3>{" "}
      </div>
    ) : null
  );
  return (
    <div
    >
      <div> {client} </div>{" "}
      <div className="grid-container"> {clientFacture} </div>{" "}
      <div className="grid-container2"> {clientFacture2} </div>{" "}
    </div>
  );
}

export default SingleFacture;
