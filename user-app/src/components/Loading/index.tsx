import React from "react";
import "./Loading.css";
import { Spin } from "antd";

export default function Loading(): JSX.Element {
  return (
    <div className='LoadingContainer'>
      <Spin tip='Loading...' size='large' />
    </div>
  );
}
