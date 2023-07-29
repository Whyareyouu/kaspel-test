import React from "react";
import { TableStateContext } from "../context/TableContext";

export function useTableState() {
  const context = React.useContext(TableStateContext);
  if (context === undefined) {
    throw new Error("useTableState must be used within a TableStateContext");
  }
  return context;
}
