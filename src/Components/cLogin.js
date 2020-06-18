import React from "react";
import "./Style/cLogin.css";
import Dato_Usuario from "../DataBase/db.json";
import { Link, Redirect } from "react-router-dom";

class cLogin extends React.Component {
  //definimos el state
  state = {
    User: "",
    Password: "",
    userExist: false,
  };

  // se remplaza los valores del state con su respectivo nombre
  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //Aqui evitamos la recarga de la pagina y realizamos el recorrido
  //de la db.json comparandolos con los datos del estado. si existe
  //el usuario cambiaremos el estado de la variable userExist a true
  handleSubmit = (e) => {
    e.preventDefault();
    Dato_Usuario.Usuarios.map((Usuario) => {
      if (
        Usuario.Usuario === this.state.User &&
        Usuario.Contraseña === this.state.Password
      ) {
        console.log("Usuario Encontrado");
        this.setState({
          userExist: true,
        });
      }
    });
  };

  render() {
    return (
      <div className="container-logign100" id="loco">
        <div className="wrap-login100">
          <div className="login100-form-title backgroundHeader">
            <span className="login100-form-title-1">Iniciar Sesion</span>
          </div>
          <form className="login100-form" onClick={this.handleSubmit}>
            <div className="wrap-input100">
              <span className="label-input100">Username :</span>
              <input
                id="prueba"
                onChange={this.handleChangeInput}
                type="text"
                className="input100"
                name="User"
                placeholder="Ingrese su nombre de Usuario"
                value={this.state.User}
              />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100">
              <span className="label-input100">Password :</span>
              <input
                onChange={this.handleChangeInput}
                type="password"
                className="input100"
                name="Password"
                placeholder="Ingrese su contraseña"
                value={this.state.Password}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Iniciar</button>
            </div>
          </form>
        </div>

        <div>
          <Link to="/Usuarios/Desconocidos" className="btn btn-success B_UserD">
            Lista de Usuario sin Registrar
          </Link>
          <Link to="/Usuarios/Registrados" className="btn btn-success B_UserR">
            Lista de Usuarios Registrados
          </Link>
        </div>

        {/* Aqui llamaremos al valor userExist , si este es verdadero nos redireccionara al otra pagina
        enviando como parametro el user  - caso contrario este no realizara ninguna accion*/}
        {this.state.userExist ? (
          <Redirect to={`/DashBoard/User/${this.state.User}`}></Redirect>
        ) : null}
      </div>
    );
  }
}

export default cLogin;
