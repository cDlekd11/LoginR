import React from "react";
import LogoUser from "../Images/user.png";
import ImgDefault from "../Images/sad.png";
import LogoPassword from "../Images/pass.png";
import "./Style/cUsersR.css";
import { Link } from "react-router-dom";

class UserItem extends React.Component {
  render() {
    return (
      <div className="UserItem">
        <img className="UserItem_avatar" src={ImgDefault} alt="" />
        <div>
          <strong className="Name_User">
            {this.props.User.FirstName}
            {this.props.User.LastName}
          </strong>
          <div>
            <img className="Job_User" src={LogoUser} alt="" />
            {this.props.User.Usuario}
          </div>
          <div>
            <img className="Logo_Pass" src={LogoPassword} alt="" />
            {this.props.User.Contraseña}
          </div>
        </div>
      </div>
    );
  }
}

class UserList extends React.Component {
  render() {
    return (
      <div className="UserList">
        <ul className="list-unstyled">
          {this.props.Users.map((User) => {
            return (
              <li key={User.id}>
                <UserItem User={User} />
              </li>
            );
          })}
        </ul>
        <div>
          <Link to="/" className="btn btn-success B_User">
            Atras
          </Link>
        </div>
      </div>
    );
  }
}

export default UserList;
