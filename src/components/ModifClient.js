import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "../css/SideBar.css";
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
  const [data, setData] = useState([]);
  const { id } = useParams();
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
    data.map((datasingle) => {
      if (datasingle.id == id) {
        setData(datasingle);
      }
    });
  });
  useEffect(() => {
    fetchClients();
  }, []);
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
    authAxios
      .patch(`http://127.0.0.1:8000/api/client/users/${id}`, data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  console.log(data);
  return (
    <form className="" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid_time">
      <div>
          <h3 className="addtext">Firstname :</h3>
          <input
            className="addfield"
            type="text"
            placeholder={data.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">Lastname :</h3>
          <input
            className="addfield"
            type="text"
            placeholder={data.lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">Adresse mail :</h3>
          <input
            className="addfield"
            type="text"
            placeholder={data.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <h3 className="addtext">Mot de passe :</h3>
          <input
            className="addfield"
            type="password"
            placeholder={data.password}
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
            placeholder={data.gender}
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
            placeholder={data.NClient}
            onChange={(e) => setNClient(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">N°Contact :</h3>
          <input
            className="addfield"
            type="number"
            placeholder={data.NContract}
            onChange={(e) => setNContract(e.target.value)}
          />
        </div>
        <div>
          <h3 className="addtext">Adresse :</h3>
          <input
            className="addfield"
            type="text"
            placeholder={data.adresse}
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
