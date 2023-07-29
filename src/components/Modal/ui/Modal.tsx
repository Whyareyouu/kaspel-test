import { FC, ReactNode } from "react";
import { Modal as ModalWindow } from "antd";
import { Portal } from "../../Portal";
import { ModalFuncProps } from "antd/es/modal/interface";

type ModalProps = {
  children: ReactNode;
} & ModalFuncProps;

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <Portal>
      <ModalWindow {...props}>{children}</ModalWindow>
    </Portal>
  );
};
