export function keyValueChange(obj) {
  const arr = Object.entries(obj);
  if (arr.length === 0) {
    return 0;
  }

  const result = {};
  arr.forEach(([key, value]) => {
    result[value] = key;
  });
  return result;
}
