export function loadCart() {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : { products: [] };
  } catch {
    return { products: [] };
  }
}
