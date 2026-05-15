import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";
import { selectTotalQuantity } from "../../redux/selectors/cartSelectors";
import { useAppSelector } from "../hooks/useAppSelector";

function CartLink() {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <Link to="/cart" className="cart-link">
      <HiOutlineShoppingCart className="w-7! h-7!" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

export default CartLink;
