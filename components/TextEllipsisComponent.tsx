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
