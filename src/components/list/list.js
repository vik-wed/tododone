export default function List({ listItems }) {
  return (
    <ul>
      {listItems?.map((listItem) => (
        <li key={listItem}>{listItem}</li>
      ))}
    </ul>
  );
}
