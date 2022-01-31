import { assign, createMachine } from "xstate";
import UserService from "../services/UserService";
import IUser from "../types/Users";

interface IUsersContext {
  users: IUser[];
  error: undefined;
}

export const singleUserMachine = (query: string): any =>
  createMachine<IUsersContext>(
    {
      id: "userDetails",
      initial: "loading",
      states: {
        loading: {
          invoke: {
            id: "fetchSingleUser",
            src: () => UserService.getUserById(query),
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
