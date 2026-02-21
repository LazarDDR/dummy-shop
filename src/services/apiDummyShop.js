export async function getCategoriesList() {
  const res = await fetch("https://dummyjson.com/products/categories");

  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  const data = await res.json();

  return data;
}

export async function getAllProducts({ category, page }) {
  let URL = `https://dummyjson.com/products`;

  const limit = 8;
  let skip = limit * (page - 1);
  if (!page) skip = 0;

  if (category) URL = `${URL}/category/${category}`;

  URL = `${URL}?limit=${limit}`;

  if (skip) URL = `${URL}&skip=${skip}`;

  const res = await fetch(URL);

  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  const data = await res.json();

  return data;
}

export async function searchProducts({ query, signal, page }) {
  if (!query) return null;

  let URL = `https://dummyjson.com/products/search?q=${query}`;

  const limit = 8;
  let skip = limit * (page - 1);
  if (!page) skip = 0;

  URL = `${URL}&limit=${limit}`;

  if (skip) URL = `${URL}&skip=${skip}`;

  const res = await fetch(URL, {
    signal,
  });
  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  const data = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Product not found.");
    }
    throw new Error("Failed to fetch product.");
  }

  const data = await res.json();

  return data;
}

/// cart
export async function getUserCart(id) {
  const res = await fetch(`https://dummyjson.com/carts/user/${id}`);

  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  const data = await res.json();

  return data;
}

export async function updateUserCart({ cartId, cartProducts }) {
  const res = await fetch(`https://dummyjson.com/carts/${cartId}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge: true, // this will include existing products in the cart
      products: [cartProducts],
    }),
  });

  if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);

  const data = await res.json();

  return data;
}
