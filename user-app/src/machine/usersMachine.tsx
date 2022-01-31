import { assign, createMachine } from "xstate";
import UserService from "../services/UserService";
import IUser from "../types/Users";

interface IUsersContext {
  users: IUser[] | [];
  error: undefined;
}

export const usersMachine = createMachine<IUsersContext>(
  {
    id: "users",
    initial: "loading",
    context: {
      users: [],
      error: undefined,
    },
    states: {
      loading: {
        invoke: {
          id: "fetchAllUsers",
          src: UserService.getUsers,
          onDone: {
            target: "success",
            actions: ["setResults"],
          },
          onError: {
            target: "failed",
            actions: ["setError"],
          },
        },
      },
      success: {},
      failed: {},
    },
  },
  {
    actions: {
      setResults: assign((_context, event: any) => ({ users: event.data })),
      setError: assign((_context, event: any) => ({ error: event })),
    },
  }
);
