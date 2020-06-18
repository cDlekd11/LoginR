import React from "react";
import { connect } from "react-redux";
import { showUsers } from "../Redux/Actions";
import { Link } from "react-router-dom";

// conectamos nuestro componente con el almacen de redux importando connect

class Box extends React.Component {
  componentWillMount() {
    //cuando el componente se cargue llamos a las propiedades de show ursers
    this.props.showUsers();
  }

  //funcion para recorrer cada dato de los datos existente y renderizarlos en pantalla
  renderUsersList() {
    return this.props.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container margin-container">
          <h4>Lista de usuarios</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>{this.renderUsersList()}</tbody>
          </table>
          <Link to="/" className="btn btn-primary">
            Atras
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
// realizamos un mapeo del state de redux que nos devolvera los datos atravez de users
function mapStateToProps(state) {
  return {
    users: state.user.list,
  };
}
// enviamos la funcion mapStateToProps y nuestra aplicacion
//tambien accion showUsers para usarlo como una propiedad mas de nuestro componente
export default connect(mapStateToProps, { showUsers })(Box);
