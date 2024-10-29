function remove(item, previous) {
  const index = previous.findIndex((listItem) => listItem.toDo === item);
  if (index !== -1) {
    return [...previous.slice(0, index), ...previous.slice(index + 1)];
  } else {
    return [...previous];
  }
}

export { remove };
