import React, { useState } from "react";
import { useQuery } from "react-query";
import UserService from "../../services/UserService";
import IUser from "../../types/Users";
import Error from "../Error";
import Loading from "../Loading";
import List from "./List";

export default function UsersList(): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);

  // useQuery has the same results of useEffect
  const { isLoading, isError } = useQuery<IUser[], Error>(
    "query-users",
    async () => UserService.getUsers(),
    {
      enabled: true,
      onSuccess: (res) => {
        setUsers(res);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return <List users={users} />;
}
