import React, { useState, useEffect } from "react";
import axios from "axios";
import Canvas from "../components/Canvas";
import "../css/SideBar.css";
function Home() {
  const [consomations, setConsomations] = useState([]);
  const [paid, setPaid] = useState([]);
  const [notPaid, setNotPaid] = useState([]);
  const [reclamations, setReclamations] = useState([]);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });

  const fetchConsomations = async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/conso"
    );
    console.log(data.data);
    setConsomations(data.data);
  };
  const fetchReclamations = async () => {
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/rec"
    );

    setReclamations(data.data);
  };
  useEffect(() => {
    fetchConsomations();
    fetchReclamations();
  }, []);

  for (let i = 0; i < consomations.length; i++) {
    if (consomations[i].status) {
      paid.push(consomations[i]);
    } else {
      notPaid.push(consomations[i]);
    }
  }
  return (
    <div>
      <div className="mockupflex">
        <div className="mockup1">
          <h1 className="titles ">
            Total des factures <br />
          </h1>
          <img className="iconm" src="tout.png" alt="dd " />
          <h1 className="mini">{consomations.length} factures</h1>
        </div>

        <div className="mockup2 ">
          <h1 className="titles ">Les factures payées</h1>
          <img className="iconm2" src="regle.png" alt="dd " />
          <h1 className="mini">{paid.length / 2} factures</h1>
        </div>
      </div>
      <div className="mockup3 ">
        <Canvas />
      </div>
      <div className="mockupflex2 ">
        <div className="mockup4 ">
          <h1 className="titles ">
            Les factures <br /> non payées{" "}
          </h1>
          <img className="iconm4" src=" unpaid.png " alt="dd " />
          <h1 className="mini">{notPaid.length / 2} factures</h1>
        </div>
        <div className="mockup5 ">
          <h1 className="titles ">Réclammation</h1>
          <img className="iconm5" src="réclamation.png " alt="dd " />
          <h1 className="mini">{reclamations.length} réclamation</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
