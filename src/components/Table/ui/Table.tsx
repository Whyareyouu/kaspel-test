import React, { useState } from "react";
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { User } from "../types/Table";

const { Column } = Table;

export const TableComponent = () => {
  const [data, setData] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      date: "2023-07-25",
      value: 42,
    },
    {
      id: "2",
      name: "Jane Smith",
      date: "2023-07-26",
      value: 78,
    },
  ]);

  const handleDeleteUser = (record: User) => {
    setData((prev) => prev.filter((user) => user.id !== record.id));
  };

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }}>
        Add
      </Button>
      <Table dataSource={data} pagination={false}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Value" dataIndex="value" key="value" />
        <Column
          title="Actions"
          key="actions"
          render={(record) => (
            <span>
              <Button icon={<EditOutlined />} style={{ marginRight: 8 }}>
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
    </div>
  );
};
