export function adjacentNumbers(arr) {
  if (!arr || arr.length === 0 || arr.length % 2 !== 0) {
    return 0;
  }
  const sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);

  const b = [];
  const c = [];
  for (let i = 0; i < sortArr.length; i += 2) {
    b.push(sortArr[i]);
    c.push(sortArr[i + 1]);
  }
  return {
    b,
    c,
  };
}
