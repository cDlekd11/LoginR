import axios from "axios";
// definimos en una variable el nombre de la accion
export const SHOW_USERS = "SHOW_USERS";
// esta funcion se encarga de enviar los datos de los usuario
export function showUsers() {
  return (dispatch, getState) => {
    //atravez de axios solicitamos a una api datos de los usuario para guardarlos en response
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      dispatch({
        //definimos el tipo de accion
        type: SHOW_USERS,
        //enviamos los datos de los usuario
        payload: response.data,
      });
    });
  };
}
