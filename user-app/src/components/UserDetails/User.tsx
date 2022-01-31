import React from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import _ from "lodash";
import { useMachine } from "@xstate/react";
import UserDetail from "./UserDetail";
import { singleUserMachine } from "../../machine/singleUserMachine";

type TUsersParams = { id?: string | any };

export default function User(): JSX.Element {
  const params = useParams<TUsersParams>();
  const machine = singleUserMachine(params.id);
  const [state] = useMachine(machine);

  // return JSX element
  return (
    <Skeleton loading={state.matches("loading")} active>
      <UserDetail
        user={
          _.isEmpty(state.context.users) || state.matches("error")
            ? null
            : state.context.users[0]
        }
      />
    </Skeleton>
  );
}
