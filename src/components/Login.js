import React, { Component } from "react";
import axios from "axios";
import "../css/Login.css";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://127.0.0.1:8000/api/login", data)
      .then(({ data }) => {
        if (data.data.id === 1) {
          localStorage.setItem("token", data.meta.token);
        } else {
          alert("not admin");
        }
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="container">
        <div className="loginform">
          <div className="spic"></div>
          <h4>
            {" "}
            Avec ENJEY, naviguer et
            <br />
            accéder à tous vos factures
            <br /> en un seul clique.
          </h4>
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <h3 className="adress">Adresse mail:</h3>
              <input
                className="inputs"
                type="text"
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <div>
              <h3 className="code ">Mot de passe:</h3>
              <input
                className="inputs2"
                type="password"
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button className="send" type="submit">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
