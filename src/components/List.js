import Button from "./Button";

export default function List({ listItems, handleRemove, handleComplete }) {
  return (
    <ul>
      {listItems?.map((listItem) => (
        <li key={listItem}>
          {handleComplete !== undefined ? (
            <Button
              isDisabled={false}
              buttonText={"✔"}
              variant={"complete-variant"}
              onClick={() => handleComplete(listItem.toDo)}
            />
          ) : null}
          <Button
            isDisabled={false}
            buttonText={"×"}
            variant={"delete-variant"}
            onClick={() => handleRemove(listItem.toDo)}
          />
          {listItem?.toDo}
        </li>
      ))}
    </ul>
  );
}
