import { Input } from "antd";
import React, { ChangeEvent, FC } from "react";
import { User } from "../../Table";
import "./Form.styles.css";
interface FormProps {
  initialValues: User | null;
  setEditingUser: (e: any) => void; // maybe fix any
  errors?: Record<keyof User, string> | null;
}

export const Form: FC<FormProps> = ({
  initialValues,
  setEditingUser,
  errors,
}) => {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingUser((prev: Partial<User>) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingUser((prev: Partial<User>) => ({
      ...prev,
      date: e.target.value,
    }));
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingUser((prev: Partial<User>) => ({
      ...prev,
      value: e.target.value,
    }));
  };

  return (
    <div className="form">
      <div>
        <Input
          name="name"
          value={initialValues?.name}
          onChange={handleNameChange}
          placeholder="Введите имя"
        />
        <span>{errors?.name}</span>
      </div>
      <div>
        <Input
          name="date"
          value={initialValues?.date as string}
          onChange={handleDateChange}
          type={"date"}
          placeholder="yyyy/mm/dd"
        />
        <span>{errors?.date}</span>
      </div>
      <div>
        <Input
          name="value"
          value={initialValues?.value}
          onChange={handleValueChange}
          placeholder="Введите числовое значение"
        />
        <span>{errors?.value}</span>
      </div>
    </div>
  );
};
