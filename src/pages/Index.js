import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
function Index() {
  return (
    <div className="container">
      <Link className="btn-1" style={{ textDecoration: "none" }} to="/login">
        Espace Fournisseur
      </Link>

      <Link
        className="btn-2"
        style={{ textDecoration: "none" }}
        to="/loginclient"
      >
        Espace client
      </Link>
    </div>
  );
}

export default Index;
