import React, { useState, useEffect, useCallback } from "react";
import "../css/Factures.css";
import Pdf from "react-to-pdf";

import axios from "axios";
function Factures() {
  const [consomations, setConsomations] = useState([]);
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

  const monthsList = consomations.map((month) => {
    const ref = React.createRef();
    console.log(month.id - 1);
    return (
      <div>
        <div className="">
          <div className="mockupee1">
            <h1 className="titles ">
              Facture du mois: <br /> {month.mois} <br />
            </h1>
            <img className="iconm " src={month.id - 1 + ".png"} alt="dd " />
            <Pdf
              targetRef={ref}
              key={month.id}
              filename={"Facture" + " " + month.mois + ".pdf"}
            >
              {({ toPdf }) => (
                <div id="btn" onClick={toPdf}>
                  <span className="noselect ">Download</span>
                  <div id="circle"></div>
                </div>
              )}
            </Pdf>
          </div>
        </div>
        <div
          key={month.id}
          style={{
            position: "absolute",
            right: "5000px",
            textAlign: "center",
            width: "40%",
          }}
          ref={ref}
        >
          <h1 style={{ width: "100%" }}>
            Facture de {month.mois} {month.annee}
          </h1>
          <h2>Consomations du mois: {month.consomation} KWH</h2>
          <h2>Prix Hors Tax: {month.prixHT} dh</h2>
          <h2>TVA: {month.TVA} dh</h2>
          <h2>Prix TTC: {month.prixTTC} dh</h2>
        </div>
      </div>
    );
  });
  return <div className="mockupeefle">{monthsList}</div>;
}

export default Factures;
