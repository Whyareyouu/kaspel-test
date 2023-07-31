import { ActionPoints } from "./types/action.enum";
import { TActions } from "./types/actions";
import { User } from "../../components/Table";

export const reducer = (state: User[], action: TActions) => {
  switch (action?.type) {
    case ActionPoints.ADDUSER:
      return [...state, action.payload];
    case ActionPoints.DELETEUSER:
      return state.filter((user) => user.key !== action.payload);
    case ActionPoints.CHANGEUSER:
      return state.map((user) =>
        user.key === action.payload.id
          ? { ...user, ...action.payload.user }
          : user
      );
    default:
      return state;
  }
};
