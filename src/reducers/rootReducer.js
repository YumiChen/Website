import reducer from "./reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    img: reducer
  });

module.exports = rootReducer;