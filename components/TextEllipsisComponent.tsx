// elide a string if it's longer than a certain length
// so we don't blow out the styling with a really
// long string
export default function TextEllipsisComponent(
  text: string,
  maxLength: number = 30,
) {
  return (
    <span title={text}>
      {text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}
    </span>
  );
}
