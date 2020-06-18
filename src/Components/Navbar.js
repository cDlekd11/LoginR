import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="mx-auto">
          <a href="/" className="navbar-brand">
            BussinesToFace
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
