import { Input } from "antd";
import { FC, InputHTMLAttributes, memo } from "react";

export const Search: FC<InputHTMLAttributes<HTMLInputElement>> = memo(
  ({ value, onChange }) => {
    return (
      <Input
        placeholder="Search..."
        style={{ marginBottom: 16, width: 200 }}
        value={value}
        onChange={onChange}
      />
    );
  }
);
