import React from "react";
import "./Error.css";
import { ServerDownSvg } from "../../assets/svgs/ServerDownSvg";

export default function Error(): JSX.Element {
  return (
    <div className='ErrorContainer'>
      <ServerDownSvg width={300} height={300} />
      <h3>Server Error...</h3>
    </div>
  );
}
