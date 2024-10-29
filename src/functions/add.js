function add(item, previous) {
  const index = previous.findIndex((listItem) => listItem.toDo === item);
  if (index !== -1 || item.length === 0) return previous;
  return [...previous, { toDo: `${item}`, isCompleted: false }];
}

export { add };
