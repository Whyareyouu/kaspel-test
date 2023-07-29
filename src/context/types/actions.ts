import { ActionPoints } from "./action.enum";
import { User } from "../../components/Table/types/Table";

export type TActions =
  | { type: ActionPoints.ADDUSER; payload: User }
  | { type: ActionPoints.CHANGEUSER; payload: User };
