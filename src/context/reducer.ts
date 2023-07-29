import { ActionPoints } from "./types/action.enum";
import { User } from "../components/Table/types/Table";
import { TActions } from "./types/actions";

export const reducer = (state: User[], action: TActions) => {
  switch (action?.type) {
    case ActionPoints.ADDUSER:
      return [...state, action.payload];
    case ActionPoints.CHANGEUSER:
      const editedUser = state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
      return editedUser;
    default:
      return state;
  }
};
