import React from "react";
import CData from "../Components/cData";
import CDataForm from "../Components/cDataForm";

class NewUserData extends React.Component {
  // Creamos un state que tendra un objeto con datos vacios.
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  // Actualizamos los valores de los estado con su respectivo nombre

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="Principal">
        <div className="container margin-container">
          <div className="row">
            <div className="col-6">
              {/* Se realiza el envio de las variables con su respectivo elemento provenientes del state */}
              <CData
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              {/* enviamos el evento handleChange atraves de la variable onChange incluido el state dentro de la variable formValues */}
              <CDataForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserData;
