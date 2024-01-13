import { useState } from "react";
import Provider from "../Provider";
import AllyContext from "./AllyContext";
import AllyContextType from "./AllyContextType";

export default function AllyProvider({ children }) {
  const [allies, setAllies] = useState([]);
  return (
    <AllyContext.Provider value={{ allies: [], setAllies }}>
      {children}
    </AllyContext.Provider>
  );
}
