import React, { useState } from "react";
import { useQuery } from "react-query";
import UserService from "../../services/UserService";
import IUser from "../../types/Users";

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

  return (
    <div>
      <h1>User List</h1>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}
