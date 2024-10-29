function complete(item, previous) {
  const index = previous.findIndex((listItem) => listItem.toDo === item);
  if (index !== -1) {
    const updatedList = [...previous];
    updatedList[index] = {
      ...updatedList[index],
      isCompleted: !updatedList[index].isCompleted,
    };
    return updatedList;
  }
  return previous;
}

export { complete };
