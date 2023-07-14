export function averages(arr) {
    if (!arr || arr.length <= 1) {
      return 0;
    }
    const average = [];
    for (let i = 0; i < arr.length - 1; i += 1) {
      average.push((arr[i] + arr[i + 1]) / 2);
    }
    return average;
  }