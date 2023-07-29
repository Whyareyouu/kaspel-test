import React from "react";
import { User } from "../components/Table/types/Table";
import { reducer } from "./reducer";
import { TActions } from "./types/actions";

export const TableStateContext = React.createContext<User[] | undefined>(
  undefined
);
export const TableDispatchContext = React.createContext<
  React.Dispatch<TActions> | undefined
>(undefined);

type TableProviderProps = {
  children: React.ReactNode;
};

const initialState: User[] = [
  {
    key: "1",
    name: "John Doe",
    date: "2023-05-23",
    value: 42,
  },
  {
    key: "2",
    name: "Jane Smith",
    date: "2023-07-25",
    value: 78,
  },
];

function TableProvider({ children }: TableProviderProps): React.JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <TableStateContext.Provider value={state}>
      <TableDispatchContext.Provider value={dispatch}>
        {children}
      </TableDispatchContext.Provider>
    </TableStateContext.Provider>
  );
}

export default TableProvider;
