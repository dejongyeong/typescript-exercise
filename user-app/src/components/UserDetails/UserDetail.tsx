import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Button, Card } from "antd";
import IUser from "../../types/Users";

interface IUserDetailProps {
  user: IUser | null;
}

export default function UserDetail({ user }: IUserDetailProps): JSX.Element {
  const navigate = useNavigate();
  const title = _.isNull(user) ? null : `${user.first_name} ${user.last_name}`;
  const content = _.isNull(user) ? (
    <p>User Not Found</p>
  ) : (
    <>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Gender:</span> {user.gender}
      </p>
      <p>
        <span>Company:</span> {user.company.name}
      </p>
      <p>
        <span>Department:</span> {user.company.department}
      </p>
    </>
  );

  return (
    <div>
      <Card title={title}>{content}</Card>
      <Button type='primary' onClick={() => navigate(-1)} size='middle'>
        Back
      </Button>
    </div>
  );
}
