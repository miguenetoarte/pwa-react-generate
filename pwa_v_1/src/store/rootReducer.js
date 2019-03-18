import {combineReducers} from "redux";
import auth from "./auth/reducer";
import ui from "./ui/reducer";

export default combineReducers({
    auth,
    ui
});