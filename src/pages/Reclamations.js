import React, { useState } from "react";
import axios from "axios";
import "../css/Reclamation.css";
function Reclamations() {
  const [reclamation, setReclamation] = useState("");
  const [suject, setSuject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      suject: suject,
      message: reclamation,
    };
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    authAxios
      .post("http://127.0.0.1:8000/api/client/rec", data)
      .then(({ data }) => {
        console.log(data);

        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <img id="iconre" src="iconre.png" alt="ll " />
      </div>
      <form onSubmit={handleSubmit} className="inputss">
        <input
          className="inputsrec"
          type=" text "
          placeholder=" &nbsp; &nbsp; &nbsp; Nom complet "
        />
        <input
          className="inputsrec"
          type="text "
          placeholder=" &nbsp; &nbsp; &nbsp; Sujet de réclammation "
          onChange={(e) => setSuject(e.target.value)}
        />
        <textarea
          className="inputsss"
          type="text "
          placeholder="  &nbsp; &nbsp; &nbsp; Ecrivez votre réclammation ici ........  "
          onChange={(e) => setReclamation(e.target.value)}
        ></textarea>
        <button className="boutton" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Reclamations;
