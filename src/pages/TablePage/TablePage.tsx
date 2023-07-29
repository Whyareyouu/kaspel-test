import React, { ChangeEvent, useState } from "react";
import { Form, Modal, Search, TableComponent } from "../../components";
import { Button } from "antd";
import { User } from "../../components/Table";
import { useForm } from "antd/es/form/Form";
import { useTableState } from "../../hooks/useTableState";
import { useTableDispatch } from "../../hooks/useTableDispatch";
import { ActionPoints } from "../../context/types/action.enum";

export const TablePage = () => {
  const users = useTableState();
  const dispatch = useTableDispatch();

  const [searchText, setSearchText] = useState<string>("");

  const [modalData, setModalData] = useState<User | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [modalForm] = useForm();

  const showModal = (user: User) => {
    setModalData(user);
    setModalVisible(true);
  };

  const handleDeleteUser = (user: User) => {
    dispatch({ type: ActionPoints.DELETEUSER, payload: user.key });
  };
  const handleEditUser = (user: User) => {
    dispatch({
      type: ActionPoints.CHANGEUSER,
      payload: { user, id: modalData!.key }, //maybe fix !
    });
    setModalVisible(false);
  };

  const handleAddUser = (user: Omit<User, "id">) => {
    const newUser = { ...user, id: (users.length + 1).toString() };
    dispatch({ type: ActionPoints.ADDUSER, payload: newUser });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = users.filter((user) =>
    Object.values(user).some((value) => {
      return value.toString().toLowerCase().includes(searchText.toLowerCase());
    })
  );

  return (
    <>
      <Search value={searchText} onChange={handleSearch} />
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() =>
          //@ts-ignore fix
          showModal({
            name: "",
            date: "",
            value: 0,
          })
        }
      >
        Add
      </Button>
      <TableComponent
        users={filteredData}
        handleDeleteUser={handleDeleteUser}
        showModal={showModal}
      />
      <Modal
        title={modalData?.key ? "Edit Data" : "Add Data"}
        open={isModalVisible}
        okText={"confirm"}
        onCancel={() => setModalVisible(false)}
        onOk={() => {
          modalForm.validateFields().then((values) => {
            modalForm.resetFields();
            modalData?.key ? handleEditUser(values) : handleAddUser(values);
          });
        }}
      >
        <Form initialValues={modalData} form={modalForm} />
      </Modal>
    </>
  );
};
