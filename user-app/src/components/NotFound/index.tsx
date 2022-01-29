import React from "react";
import "./NotFound.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { PageNotFoundSvg } from "../../assets/svgs/PageNotFoundSvg";

export default function NotFound(): JSX.Element {
  return (
    <div className='NotFoundContainer'>
      <PageNotFoundSvg width={300} height={300} />
      <b>It seems this page may have been lost in space.</b>
      <Link to='/'>
        <Button type='primary' size='small'>
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
