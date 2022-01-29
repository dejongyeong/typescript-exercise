import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { EyeFilled } from "@ant-design/icons";
import IUser from "../../types/Users";
import Header from "../Header";
import "./List.css";

interface IListProps {
  users: IUser[];
}

export default function List({ users }: IListProps): JSX.Element {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text: string) => <b>{text}</b>,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_text: string, row: any) => (
        <Link to={{ pathname: `/users/${row.id}` }}>
          <EyeFilled />
        </Link>
      ),
    },
  ];

  return (
    <div className='ListContainer'>
      <Header title='Users' />
      <Table
        dataSource={users}
        columns={columns}
        size='small'
        rowKey={(row) => row.id}
        pagination={{ position: ["bottomRight"], showSizeChanger: false }}
      />
    </div>
  );
}
