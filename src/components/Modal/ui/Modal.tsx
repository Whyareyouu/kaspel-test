import React from "react";
import { Modal as ModalWindow } from "antd";
import { Portal } from "../../Portal";

export const Modal = () => {
  return (
    <Portal>
      <ModalWindow></ModalWindow>
    </Portal>
  );
};
