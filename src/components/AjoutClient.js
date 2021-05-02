import React, { useState } from "react";
import "../css/Form.css";
import axios from "axios";
function AjoutClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [adresse, setAdresse] = useState("");
  const [NContract, setNContract] = useState(0);
  const [NClient, setNClient] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      adresse: adresse,
      NClient: parseInt(NClient),
      NContract: parseInt(NContract),
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="grid_time">
        <div>
          <h3 class="addtext">Nom:</h3>
          <input
            className="addfield"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
          <div>
          <h3 class="addtext">Prenom :</h3>
          <input
            className="addfield"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        
        <div>
          <h3 class="addtext">Email : </h3>
          <input
            className="addfield"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      
        <div>
          <h3 class="addtext">Mot de passe :</h3>
          <input
            className="addfield"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="grid_time2">
        <div>
          <h3 className="addtext">Gender :</h3>
          <select
            name="gender"
            className="addfield"
            onChange={(e) => setGender(e.target.value)}
            id="gender"
          >
            <option value="Male">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <h3 className="addtext">N°Client :</h3>
          <input
            className="addfield"
            type="number"
            onChange={(e) => setNClient(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">N°Contact :</h3>
          <input
            className="addfield"
            type="number"
            onChange={(e) => setNContract(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">Adresse :</h3>
          <input
            className="addfield"
            type="text"
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>
      </div>
      <button className="bott" type="submit">
        Submit
      </button>
    </form>
  );
}
export default AjoutClient;
