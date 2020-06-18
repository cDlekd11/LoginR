import { SHOW_USERS } from "../Actions";
//definimos el state inicial - lista vacia
const initalState = {
  list: [],
};

export function showUsers(state = initalState, action) {
  switch (action.type) {
    //aqui se define el estado dependiendo de la accion
    case SHOW_USERS:
      return Object.assign({}, state, { list: action.payload });
    // basicamente remplaza el state inicial por la list enviado  atravez del payload
    default:
      // caso contrario solo devuelve el estado inicial
      return state;
  }
}
