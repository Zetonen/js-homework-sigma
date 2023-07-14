export function doesBrickFit(a, b, c, w, h) {
  if (!a || !b || !c || !w || !h) {
    return 0;
  }
  if ((a <= w && b <= h) || (a <= h && b <= w)) {
    return true;
  } else if ((a <= w && c <= h) || (a <= h && c <= w)) {
    return true;
  } else if ((b <= w && c <= h) || (b <= h && c <= w)) {
    return true;
  }

  return false;
}
