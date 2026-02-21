import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";
import { useAllProducts } from "./useAllProducts";
import { useSearchProducts } from "./useSearchProducts";
import { useSearchParams } from "react-router";
import Pagination from "../../ui/Pagination";

function Shop() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const page = Number(searchParams.get("page")) || 1;
  const query = useSelector((store) => store.shop.searchQuery);

  const { data, isLoading } = useAllProducts({ category, page });

  const { searchedProducts, isSearching } = useSearchProducts({ query, page });

  if (isLoading || isSearching) return <Spinner />;

  let products = data.products;
  let numPages = Math.ceil(data.total / 8);

  if (query) {
    products = searchedProducts.products;
    numPages = Math.ceil(searchedProducts.total / 8);
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem product={product} id={product.id} key={product.id} />
          ))
        ) : (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
      {numPages > 1 && <Pagination numPages={numPages} />}
    </div>
  );
}

export default Shop;
