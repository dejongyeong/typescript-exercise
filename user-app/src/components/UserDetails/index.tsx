import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import _ from "lodash";
import UserService from "../../services/UserService";
import IUser from "../../types/Users";

export default function UserDetails(): JSX.Element {
  const params = useParams();
  const [user, setUser] = useState<IUser>();

  // useQuery has the same results of useEffect
  const { isLoading, isError } = useQuery<IUser, Error>(
    "query-user-by-id",
    async () => UserService.getUserById(params.id),
    {
      enabled: true,
      retry: 0,
      onSuccess: (res) => {
        setUser(res);
      },
    }
  );

  return (
    <div>
      <h1>User Details</h1>
      {_.isEmpty(user) ? "User Not Found" : JSON.stringify(user)}
    </div>
  );
}
