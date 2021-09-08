import { createContext } from "react";
import UserStore from "./store/UserStore";

export const Context = createContext({user: new UserStore()})