import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Search, TableComponent, Modal, Form } from "../../components";
import { Button } from "antd";
import { User } from "../../components/Table";
import { useTableState } from "../../hooks/useTableState";
import { useTableDispatch } from "../../hooks/useTableDispatch";
import { ActionPoints } from "../../context/types/action.enum";
import { formatDateToISO } from "./lib/formatDate";
import { validateUser } from "./lib/validator";

export const TablePage = () => {
  const users = useTableState();
  const dispatch = useTableDispatch();

  const [searchText, setSearchText] = useState<string>("");

  const [modalData, setModalData] = useState<User | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  //test
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<Record<keyof User, string> | null>(null);
  const showModal = (user: User) => {
    setModalData(user);
    setModalVisible(true);
    setEditingUser(user);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
    setEditingUser(null);
  };

  const handleDeleteUser = (user: User) => {
    dispatch({ type: ActionPoints.DELETEUSER, payload: user.key });
  };
  const handleEditUser = (user: User) => {
    dispatch({
      type: ActionPoints.CHANGEUSER,
      payload: { user, id: modalData!.key },
    });
    closeModal();
  };

  const handleAddUser = (user: Omit<User, "id">) => {
    const newUser = {
      ...user,
      key: (users.length + 1).toString(),
      date: formatDateToISO(user.date),
    };
    dispatch({ type: ActionPoints.ADDUSER, payload: newUser });
    closeModal();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    //@ts-ignore
    if (editingUser) setErrors(validateUser(editingUser));
  }, [editingUser]);

  const checkToValidFields = useCallback(() => {
    if (errors) {
      return Object.values(errors).length !== 0;
    }
  }, [errors]);

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
        onCancel={() => closeModal()}
        onOk={
          () =>
            modalData?.key
              ? handleEditUser(editingUser!) // fix
              : handleAddUser(editingUser!) // fix
        }
        okButtonProps={{
          disabled: checkToValidFields(),
        }}
      >
        <Form
          initialValues={editingUser}
          setEditingUser={setEditingUser}
          errors={errors}
        />
      </Modal>
    </>
  );
};
