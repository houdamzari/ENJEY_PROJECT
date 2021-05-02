import React, { useState, useEffect, useCallback } from "react";
import "../css/RecForni.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
function SingleFacture() {
  let history = useHistory();
  const [consomations, setConsomations] = useState([]);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  const fetchConsomations = useCallback(async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/rec"
    );
    console.log(data.data);
    setConsomations(data.data);
  });
  useEffect(() => {
    fetchConsomations();
  }, []);
  const singleRec = (id) => {
    history.push(`/singlerec/${id}`);
  };
  const clientReclamation = consomations.map((clienrec) => (
    <h2
      className="regridd"
      key={clienrec.id}
      onClick={() => singleRec(clienrec.id)}
    >
      id :{clienrec.id}
      <br />
      Suject: {clienrec.suject} Status:
      {clienrec.status ? <div>vérifié</div> : <div>Non vérifié</div>}
      Full Name: {clienrec.user.firstname + " " + clienrec.user.lastname}
    </h2>
  ));

  return <div className="regrid">{clientReclamation}</div>;
}

export default SingleFacture;
