export function solution(strA, strB) {
    if (!strA || strA.length === 0 || !strB || strB.length === 0) {
      return 0;
    }
    return strA.endsWith(strB);
  }