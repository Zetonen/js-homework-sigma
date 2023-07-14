export function arraySorting(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  const result = [];
  let sortArr = arr.sort((a, b) => a - b);
  let arrLength = sortArr.length;
  let step = 0;
  for (let i = 0; i < arrLength; i += 1) {
    result[i - step] = sortArr[i];
    i += 1;
    result[arrLength - i + step] = sortArr[i];
    step += 1;
  }
  if (arrLength % 2 !== 0) {
    result[Math.floor(arrLength / 2)] = sortArr[arrLength - 1];
  }
  return result;
}
