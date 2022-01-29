import React from "react";
import "./Header.css";

interface IHeaderProps {
  title: string;
}

export default function Header({ title }: IHeaderProps): JSX.Element {
  return (
    <div className='HeaderContainer'>
      <h1>{title}</h1>
    </div>
  );
}
