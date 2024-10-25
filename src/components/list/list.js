export default function List({ listItems }) {
  return (
    <ul>
      {listItems?.map((listItem) => (
        <li>{listItem}</li>
      ))}
    </ul>
  );
}
