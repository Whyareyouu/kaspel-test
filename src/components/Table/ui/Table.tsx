import React, { FC, useState } from "react";
import { Button, Table, TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { User } from "../types/Table";
import { SorterResult } from "antd/es/table/interface";
import { ColumnsType } from "antd/lib/table";

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
  const [sortedInfo, setSortedInfo] = useState<SorterResult<User>>({});
  const handleChange: TableProps<User>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setSortedInfo(sorter as SorterResult<User>);
  };

  const columns: ColumnsType<User> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "value",
      title: "Value",
      dataIndex: "value",
      sorter: (a, b) => a.value - b.value,
      sortOrder: sortedInfo.columnKey === "value" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      key: "actions",
      title: "Actions",
      render: (record: User) => {
        return (
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
        );
      },
    },
  ];

  return (
    <Table
      dataSource={users}
      columns={columns}
      pagination={false}
      onChange={handleChange}
      rowKey={(record) => record.key}
    />
  );
};
