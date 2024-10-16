import { Children, createContext, useContext, useReducer } from "react";

const ParsedContext = createContext();

const initialState = {
  parsedData: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, parsedData: action.payload };
    default:
      return state;
  }
};

export const ParsedDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ParsedContext.Provider value={{ state, dispatch }}>
      {children}
    </ParsedContext.Provider>
  );
};

export const useParsedData = () => useContext(ParsedContext);
