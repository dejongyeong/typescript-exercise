import React from "react";
import IUser from "../../types/Users";
import "./List.css";

interface IListProps {
  users: IUser[];
}

export default function List({ users }: IListProps): JSX.Element {
  return (
    <div className='ListContainer'>
      <h1>User List</h1>
      I&apos;m a List.. starting<p>{JSON.stringify(users)}</p>
    </div>
  );
}
