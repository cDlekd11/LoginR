import React from "react";
import CUsersD from "../Components/cUsersD";

class UsersR extends React.Component {
  render() {
    return (
      <div className="Principal">
        <div className="container">
          <div className="row">
            <div className="Principal__col col-12 col-md-12 ">
              <CUsersD />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersR;
