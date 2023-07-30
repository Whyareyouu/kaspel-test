import { User } from "../../../components/Table";

export function validateUser(user: Record<keyof User, string>) {
  const errors: Record<string, string> = {};

  // Проверка поля 'name'
  if (!user?.name || typeof user?.name !== "string") {
    errors.name = 'Поле "name" должно быть непустой строкой';
  }

  // Проверка поля 'date'
  if (!user?.date || typeof user?.date !== "string") {
    errors.date = 'Поле "date" должно быть непустой строкой';
  }

  // Проверка поля 'value'
  if (
    user?.value === undefined ||
    user?.value === null ||
    typeof +user?.value !== "number" ||
    user?.value.length === 0
  ) {
    errors.value = 'Поле "value" должно быть числовым значением';
  }

  return errors;
}
