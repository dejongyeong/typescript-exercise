import React from "react";
import { useMachine } from "@xstate/react";
import Error from "../Error";
import Loading from "../Loading";
import List from "./List";
import { usersMachine } from "../../machine/usersMachine";

export default function UsersList(): JSX.Element {
  const [state] = useMachine(usersMachine);

  if (state.matches("loading")) {
    return <Loading />;
  }
  if (state.matches("error")) {
    return <Error />;
  }
  return <List users={state.context.users} />;
}
