import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/SideBar.css";
function SideBar() {
  const [Fornilinks, setForniLinkList] = useState([
    { name: "Dashboard", to: "/dashforni", src: "/DD.png" },
    { name: "Factures", to: "/facturegestion", src: "/FF.png" },
    { name: "Consomations", to: "/consomationgestion", src: "/CC.png" },
    { name: "Clients", to: "/clientgestion" },
    { name: "Reclamations", to: "/reclamationgestion", src: "/RR.png" },
  ]);
  const [Clientlinks, setClientLinkList] = useState([
    { name: "Dashboard", to: "/dash", src: "/DD.png" },
    { name: "Factures", to: "/factures", src: "/FF.png" },
    { name: "Consomations", to: "/consomations", src: "/CC.png" },
    { name: "Reclamations", to: "/reclamations", src: "/RR.png" },
    { name: "F.A.Q", to: "/faq", src: "/FAQ.png" },
  ]);
  const [user, setUser] = useState("");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
  const fetchUser = useCallback(async () => {
    const { data } = await authAxios.get("http://127.0.0.1:8000/api/user");
    setUser(data.data);
  });
  useEffect(() => {
    fetchUser();
  }, []);
  const listOfLinksForni = Fornilinks.map((link) => {
    return (
      <li>
        <img className="icond" src={link.src} />
        <Link to={link.to}>{link.name}</Link>
      </li>
    );
  });
  const listOfLinksClient = Clientlinks.map((link) => {
    return (
      <li>
        <img className="icond" src={link.src} />
        <Link to={link.to}>{link.name}</Link>
      </li>
    );
  });

  if (user.id === 1) {
    return (
      <div className="sidebar">
        <div className="logoshit">
          <img className="logo" src="/logo.png" alt="logo" />
          <h1 className="logoname">ENJEY</h1>
        </div>
        <ul>
          {listOfLinksForni}
          <li>
            {" "}
            <a
              href="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="sidebar">
        <div className="logoshit">
          <img className="logo" src="logo.png" alt="logo" />
          <h1 className="logoname">ENJEY</h1>
        </div>
        <ul>
          {listOfLinksClient}
          <li>
            {" "}
            <a
              href="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
