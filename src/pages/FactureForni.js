import React, { useState, useEffect, useCallback } from "react";
import "../css/List.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function FactureForni() {
  let history = useHistory();
  const [clients, setClients] = useState([]);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
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
  const singleClient = (id) => {
    history.push(`/singlefacture/${id}`);
  };
  const client = clients.map((client) =>
    client.id !== 1 ? (
      <div
        className="box"
        key={client.id}
        onClick={() => singleClient(client.id)}
      >
        {client.firstname}
      </div>
    ) : null
  );

  return (
    <div className="griid">
      <div className="wrapper">{client}</div>
    </div>
  );
}

export default FactureForni;
