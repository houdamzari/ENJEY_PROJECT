import React, { useState, useEffect, useCallback } from "react";
import "../css/SideBar.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function SingleRec() {
  const [rec, setRec] = useState([]);
  const [status, setStatus] = useState();
  const data = {
    status: status,
  };
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  const fetchRec = useCallback(async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/rec"
    );
    console.log(data.data);
    setRec(data.data);
  });
  useEffect(() => {
    fetchRec();
  }, []);
  const verifyHandler = (id) => {
    setStatus(true);
    authAxios
      .patch(`http://127.0.0.1:8000/api/client/rec/${id}`, data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const { id } = useParams();
  const clientReclamation = rec.map((clientRec) =>
    clientRec.id == id ? (
      <div>
        <div id="lenom">
          <h5
            style={{
              fontWeight: "lighter",
              fontSize: "15px",
              fontFamily: "Open sans",
            }}
          >
            {" "}
            &nbsp;&nbsp;&nbsp; Nom complet :
            {clientRec.user.lastname + " " + clientRec.user.firstname}
          </h5>
        </div>
        <div id="lesujet">
          <h5
            style={{
              fontWeight: "lighter",
              fontSize: "15px",
              fontFamily: "Open sans",
            }}
          >
            {" "}
            &nbsp;&nbsp;&nbsp; Sujet :{clientRec.suject}
          </h5>
        </div>
        <div id="lareclammation">
          <h5
            style={{
              fontWeight: "lighter",
              fontSize: "15px",
              fontFamily: "Open sans",
            }}
          >
            {" "}
            <br /> &nbsp;&nbsp;&nbsp; La réclammation : {clientRec.message}
          </h5>
        </div>
        <button id="leboutton" onClick={() => verifyHandler(clientRec.id)}>
          vérifier
        </button>
      </div>
    ) : null
  );

  return <div className="">{clientReclamation}</div>;
}

export default SingleRec;
