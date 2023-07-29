import React, { useState } from "react";
import { Form, TableComponent } from "../../components";
import { Button, Modal } from "antd";
import { User } from "../../components/Table";
import { useForm } from "antd/es/form/Form";
import { useTableState } from "../../hooks/useTableState";
import { useTableDispatch } from "../../hooks/useTableDispatch";
import { ActionPoints } from "../../context/types/action.enum";

export const TablePage = () => {
  const users = useTableState();
  const dispatch = useTableDispatch();

  const [modalData, setModalData] = useState<User | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [modalForm] = useForm();
  const showModal = (user: User) => {
    setModalData(user);
    setModalVisible(true);
  };
  const handleDeleteUser = (record: User) => {};
  const handleEditUser = (userData: User) => {};

  const handleAddUser = (user: User) => {
    dispatch({ type: ActionPoints.ADDUSER, payload: user });
  };
  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() =>
          showModal({
            name: "",
            date: "",
            value: null,
            id: (users.length + 1).toString(),
          })
        }
      >
        Add
      </Button>
      <TableComponent
        users={users}
        handleDeleteUser={handleDeleteUser}
        showModal={showModal}
      />
      <Modal
        title="Edit user"
        open={isModalVisible}
        okText={"confirm"}
        onCancel={() => setModalVisible(false)}
        onOk={() => {
          modalForm.validateFields().then((values) => {
            modalForm.resetFields();
            // handleEditUser(values);
            handleAddUser(values);
          });
        }}
      >
        <Form initialValues={modalData} form={modalForm} />
      </Modal>
    </>
  );
};
