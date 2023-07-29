export function formatDateToISO(dateString: Date): string {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear().toString().padStart(4, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
