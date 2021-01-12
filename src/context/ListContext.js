import { useContext, createContext, useState } from "react";

export const ListContext = createContext(null);

export const useList = () => {
  return useContext(ListContext);
};

export default function ListProvider({ children, listValue }) {
  const [lists, setLists] = useState(listValue);
  const [addedList, setAddedList] = useState("");

  return (
    <ListContext.Provider value={[lists, setLists, addedList, setAddedList]}>
      {children}
    </ListContext.Provider>
  );
}
