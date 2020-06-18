import React from "react";
import Logo from "../Images/Logo.png";
import ImgDefault from "../Images/sad.png";
import "./Style/cData.css";

class cData extends React.Component {
  render() {
    //basicamente carga los datos enviados atraves de variables que fueron enviados de NewUserData.
    return (
      <div className="Data">
        <div className="Data_header">
          <img src={Logo} className="Data_Logo" alt="Logo de la conferencia" />
        </div>
        <div className="Data_section-name">
          <img className="Data_avatar" src={ImgDefault} alt="Avatar" />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Data_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Data_footer">#BussinesToFace</div>
      </div>
    );
  }
}

export default cData;
