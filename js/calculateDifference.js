export function calculateDifference(things, insurance) {
  const prices = Object.values(things);
  if (prices.length === 0) {
    return 0;
  }
  const totalPrice = prices.reduce((total, val) => total + val, 0);
  if (totalPrice <= insurance) {
    return 0;
  }
  return totalPrice - insurance;
}
