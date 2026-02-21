export function getDiscountedPrice(price, discountPercentage) {
  const discountedPrice = Number(
    (price * (1 - discountPercentage / 100)).toFixed(2)
  );

  return discountedPrice;
}
