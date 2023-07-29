export interface User {
  key: string;
  name: string;
  date: string | Date; // Исправить на date
  value: number | null;
}
