import { combineReducers } from "redux";
import { sliderReducer } from "./sliderReducer";
import { footerReducer } from "./footerReducer";

export const rootReducer = combineReducers({
  sliders: sliderReducer, footer:footerReducer
});
