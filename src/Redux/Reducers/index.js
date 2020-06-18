import { combineReducers } from "redux";
import { showUsers } from "./CallUsers";
// aqui se incorporan los reducers existentes en este caso solo es 1
const rootReducer = combineReducers({
  user: showUsers,
});

export default rootReducer;
