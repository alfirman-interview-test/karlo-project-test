export default function getStringDate(string) {
  const event = new Date(string || "");
  return event.toDateString();
}
