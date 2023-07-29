import { ActionPoints } from "./action.enum";
import { User } from "../../components/Table";

export type TActions =
  | { type: ActionPoints.ADDUSER; payload: User }
  | { type: ActionPoints.CHANGEUSER; payload: { user: User; id: string } }
  | { type: ActionPoints.DELETEUSER; payload: string };
