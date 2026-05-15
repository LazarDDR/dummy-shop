import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";
import { selectTotalQuantity } from "../../redux/selectors/cartSelectors";
import { useAppSelector } from "../hooks/useAppSelector";

function CartLink() {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <Link
      to="/cart"
      className="relative flex items-center p-1.5 rounded-lg hover:bg-white/10 transition-colors"
    >
      <HiOutlineShoppingCart className="w-5 h-5" />
      {totalQuantity > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

export default CartLink;
