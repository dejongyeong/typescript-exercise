import React from "react";
import Header from "../Header";
import "./User.css";
import User from "./User";

export default function UserDetails(): JSX.Element {
  return (
    <div className='UserContainer'>
      <Header title='User Details' />
      <User />
    </div>
  );
}
