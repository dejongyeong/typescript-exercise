import React from "react";
import IUser from "../../types/Users";
import Header from "../Header";
import "./List.css";

interface IListProps {
  users: IUser[];
}

export default function List({ users }: IListProps): JSX.Element {
  return (
    <div className='ListContainer'>
      <Header title='User List' />
      I&apos;m a List.. starting<p>{JSON.stringify(users)}</p>
    </div>
  );
}
