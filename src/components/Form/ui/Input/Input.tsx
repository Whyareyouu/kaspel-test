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
  type,
  min,
  max,
}) => {
  return (
    <Space direction="vertical">
      <AntdInput
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />
      <Typography.Text type="danger">{error}</Typography.Text>
    </Space>
  );
};
