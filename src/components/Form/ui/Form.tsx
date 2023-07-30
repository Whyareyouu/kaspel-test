import { Form as AntdForm, FormInstance, Input } from "antd";
import React, { FC, useEffect } from "react";
import { User } from "../../Table";

interface FormProps {
  form: FormInstance<any>;
  initialValues: User | null;
}

export const Form: FC<FormProps> = ({ form, initialValues }) => {
  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
    });
  }, [initialValues, form]);
  return (
    <AntdForm form={form} initialValues={initialValues || {}}>
      <AntdForm.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Введмите имя!" }]}
      >
        <Input />
      </AntdForm.Item>
      {/*<AntdForm.Item*/}
      {/*  label="Date"*/}
      {/*  name="date"*/}
      {/*  rules={[{ required: true, message: "Выберите дату!" }]}*/}
      {/*>*/}
      {/*  <DatePicker />*/}
      {/*</AntdForm.Item>*/}
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
