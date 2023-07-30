import React, { FC, InputHTMLAttributes } from "react";
import { Input as AntdInput, Space } from "antd";
import { Typography } from "antd";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  name,
  value,
  error,
}) => {
  return (
    <Space direction="vertical">
      <AntdInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
      />
      <Typography.Text type="danger">{error}</Typography.Text>
    </Space>
  );
};
