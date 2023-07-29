import React from "react";
import { TableDispatchContext } from "../context/TableContext";

export function useTableDispatch() {
  const context = React.useContext(TableDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTableDispatch must be used within a TableDispatchContext"
    );
  }
  return context;
}
