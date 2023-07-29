import { Form as AntdForm, DatePicker, Input } from "antd";
import React from "react";
//@ts-ignore
export const Form = ({ form, initialValues }) => {
  return (
    <AntdForm form={form} initialValues={initialValues}>
      <AntdForm.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Введмите имя!" }]}
      >
        <Input />
      </AntdForm.Item>
      <AntdForm.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Выберите дату!" }]}
      >
        <DatePicker />
      </AntdForm.Item>
      <AntdForm.Item
        label="Value"
        name="value"
        rules={[{ required: true, message: "Введите числовое значение!" }]}
      >
        <Input type="number" />
      </AntdForm.Item>
    </AntdForm>
  );
};
