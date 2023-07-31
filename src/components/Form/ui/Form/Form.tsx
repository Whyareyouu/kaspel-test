import React, { ChangeEvent, FC } from "react";
import { User } from "../../../Table";
import "./Form.styles.css";
import { Input } from "../Input/Input";
interface FormProps {
  initialValues: User | null;
  setEditingUser: (prev: any) => void;
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
      <Input
        name="name"
        value={initialValues?.name}
        onChange={handleNameChange}
        placeholder="Введите имя"
        error={errors?.name}
      />
      <Input
        name="date"
        value={initialValues?.date as string}
        onChange={handleDateChange}
        type={"date"}
        min="1900-01-01"
        max="9999-12-31"
        placeholder="yyyy/mm/dd"
        error={errors?.date}
      />
      <Input
        name="value"
        value={initialValues?.value}
        onChange={handleValueChange}
        placeholder="Введите числовое значение"
        error={errors?.value}
        type={"number"}
      />
    </div>
  );
};
