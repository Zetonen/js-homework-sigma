export function maxValue(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
