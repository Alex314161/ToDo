import {createStore} from "redux";
import {boardsStore} from "./boardsStore";

export const store = createStore(boardsStore)


