import React from "react";
import CUsersR from "../Components/cUsersR";
import ListUsers from "../DataBase/db.json";

class UsersR extends React.Component {
  render() {
    return (
      <div className="Principal">
        <div className="container">
          <div className="row">
            <div className="Principal__col col-12 col-md-12 ">
              <CUsersR Users={ListUsers.Usuarios} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersR;
