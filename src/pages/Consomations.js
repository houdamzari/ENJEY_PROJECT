import React, { useState } from "react";
import axios from "axios";
import "../css/Consomation.css";

function Consomations() {
  const [consomation, setConsomation] = useState("");
  const [mois, setMois] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      consomation: consomation,
      mois: mois,
      annee: 2021,
    };
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    authAxios
      .post("http://127.0.0.1:8000/api/client/conso", data)
      .then(({ data }) => {
        console.log(data);

        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <img className="illu" src="illu.png" alt="ll" />
        <h3 className="titleconso">
          {" "}
          &nbsp; &nbsp; &nbsp; Avec notre service MA CONSO, <br /> vous n'avez
          plus besoin de vous déplacer,
          <br /> ni d'attendre notre agent. Vous pouvez <br />à la fois
          consultez vos factures,et saisir <br />
          vos consommations d'électticité chaque fin du
          <br /> mois , tous ca depuis votre telephone mobile <br /> ou votre
          laptop.
        </h3>
      </div>{" "}
      <form className="btns" onSubmit={handleSubmit}>
        <label htmlFor="months">Choose a month:</label>
        <select
          id="months"
          name="months"
          onChange={(e) => setMois(e.target.value)}
        >
          <option value="Janvier">Mois</option>
          <option value="Janvier">Janvier</option>
          <option value="Fevrier">Fevrier</option>
          <option value="Mars">Mars</option>
          <option value="Avril">Avril</option>
          <option value="Mai">Mai</option>
          <option value="Juin">Juin</option>
        </select>

        <input
          type="text"
          placeholder=" &nbsp;  &nbsp;  &nbsp;.............KWH"
          className="kwh"
          onChange={(e) => setConsomation(e.target.value)}
        />
        <button id="but" type=" submit ">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Consomations;
