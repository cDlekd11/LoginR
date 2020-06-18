import React from "react";
import { Link } from "react-router-dom";

class cDataForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  /* Recibimos la variable OnChange que guarda el evento handleChange este permite que cada vez que el input realize una accion los dato ingresado se le envian al evento la cual actualizara el state del NewUserData.Permitiendo haci rederizar los nuevos datos en pantalla gracias a las datos enviadas por el formValues */

  render() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Ingresar nuevos datos :</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label>Nombres</label>
              <input
                onChange={this.props.onChange}
                name="firstName"
                type="text"
                className="form-control"
                value={this.props.formValues.firstName}
              />
            </div>
            <div className="form-group">
              <label>Apellidos</label>
              <input
                onChange={this.props.onChange}
                name="lastName"
                type="text"
                className="form-control"
                value={this.props.formValues.lastName}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.props.onChange}
                name="email"
                type="email"
                className="form-control"
                value={this.props.formValues.email}
              />
            </div>

            <div className="form-group">
              <label>Trabajo</label>
              <input
                onChange={this.props.onChange}
                name="jobTitle"
                type="text"
                className="form-control"
                value={this.props.formValues.jobTitle}
              />
            </div>

            <div className="form-group">
              <label>Twitter</label>
              <input
                onChange={this.props.onChange}
                name="twitter"
                type="text"
                className="form-control"
                value={this.props.formValues.twitter}
              />
            </div>

            <Link to="/" className="btn btn-primary">
              Atras
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default cDataForm;
