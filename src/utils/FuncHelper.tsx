export function Add_Comma(data: any) {
  const number = new Number(data);
  return String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
}
