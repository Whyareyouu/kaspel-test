export interface User {
  id: string;
  name: string;
  date: string | Date; // Исправить на date
  value: number | null;
}
