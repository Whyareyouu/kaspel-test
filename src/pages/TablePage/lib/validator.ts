import { User } from "../../../components/Table";

export function validateUser(user: User) {
  const errors: Record<string, string> = {};

  // Проверка поля 'name'
  if (!user?.name || typeof user?.name !== "string") {
    errors.name = 'Поле "name" должно быть непустой строкой';
  }

  // Проверка что поле "name" строка
  if (!!Number(user?.name)) {
    errors.name = 'Поле "name" должно быть строкой';
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
    user?.value.toString().length === 0
  ) {
    errors.value = 'Поле "value" должно быть непустой строкой';
  }

  return errors;
}
