export function difference(arrA, arrB) {
  if (!arrA || arrA.length === 0 || !arrB || arrB.length === 0) {
    return 0;
  }
  const result = [...arrA];
  arrB.forEach((e) => {
    if (!result.includes(e)) {
      result.push(e);   
    }
  });
  return result;
}
