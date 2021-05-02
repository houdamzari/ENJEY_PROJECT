import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Nav.css";
function Nav() {
  let history = useHistory();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    console.log(search);
    if (search === "facture") {
      history.push("/factures");
    } else if (search === "consomation") {
      history.push("/consomations");
    } else if (search === "reclamation") {
      history.push("/reclamations");
    } else if (search === "faq") {
      history.push("/faq");
    } else if (search === "dashboard") {
      history.push("/dashboard");
    } else {
      alert("not working");
    }
  };
  return (
    <div>
      <div className="navbar">
        <img className="siicon" src="/si.png" alt="ll " />

        <div className="navbar2">
          <form onSubmit={handleSubmit} role="search " className="formo">
            <label htmlFor="search" className="searchLabel">
              Search for stuff
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              autoFocus
              required
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <button className="sea" type="submit">
              Go
            </button>
          </form>
        </div>

        <div className="dot "></div>
      </div>
    </div>
  );
}

export default Nav;
