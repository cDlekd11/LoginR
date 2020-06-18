import React, { Component } from "react";
import CLogin from "../Components/cLogin";

class Login extends Component {
  render() {
    return (
      <div className="Principal">
        <div className="container">
          <div className="row">
            <div className="Principal__col col-12 col-md-12">
              {/* Aqui abrimos el componente login */}
              <CLogin />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
