export function getDiscountedPrice(price: number, discountPercentage: number) {
  const discountedPrice = Number(
    (price * (1 - discountPercentage / 100)).toFixed(2),
  );

  return discountedPrice;
}

export function formatPrice(value: number): string {
  if (value >= 1000) {
    return `${+( value / 1000).toFixed(1)}K`;
  }
  return String(value);
}
