import React, { FC } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { User } from "../types/Table";

const { Column } = Table;

interface TableComponentProps {
  users: User[];
  showModal: (user: User) => void;
  handleDeleteUser: (user: User) => void;
}

export const TableComponent: FC<TableComponentProps> = ({
  users,
  showModal,
  handleDeleteUser,
}) => {
  return (
    <Table dataSource={users} pagination={false}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Date" dataIndex="date" key="date" />
      <Column title="Value" dataIndex="value" key="value" />
      <Column
        title="Actions"
        key="actions"
        render={(record) => (
          <span>
            <Button
              icon={<EditOutlined />}
              style={{ marginRight: 8 }}
              onClick={() => showModal(record)}
            >
              Edit
            </Button>
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => handleDeleteUser(record)}
            >
              Delete
            </Button>
          </span>
        )}
      />
    </Table>
  );
};
