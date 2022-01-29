import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import _ from "lodash";
import IUser from "../../types/Users";
import UserService from "../../services/UserService";
import UserDetail from "./UserDetail";

export default function User(): JSX.Element {
  const params = useParams();
  const [user, setUser] = useState<IUser[]>([]);

  // useQuery has the same results of useEffect
  const { isLoading, isError } = useQuery<IUser[], Error>(
    "query-user-by-id",
    // it returns an empty array if no users were found
    async () => UserService.getUserById(params.id),
    {
      enabled: true,
      retry: 0,
      onSuccess: (res) => {
        setUser(res);
      },
    }
  );

  // return JSX element
  return (
    <Skeleton loading={isLoading} active>
      <UserDetail user={_.isEmpty(user) || isError ? null : user[0]} />
    </Skeleton>
  );
}
