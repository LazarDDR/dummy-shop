import { useDispatch } from "react-redux";
import { decItemQty, incItemQty, removeCartItem } from "../../redux/cartSlice";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router";
import toast from "react-hot-toast";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const { thumbnail, title, discountPercentage, quantity, id, price } = product;

  const discountedTotal = Number(
    (price * quantity * (1 - discountPercentage / 100)).toFixed(2),
  );

  if (!quantity) return null;

  function handleRemoveCartItem() {
    dispatch(removeCartItem(id));

    toast.success(
      <span>
        <strong>{title}</strong> removed from cart
      </span>,
      {
        icon: "🗑️",
      },
    );
  }

  function handleIncQty() {
    dispatch(incItemQty(id));
  }

  function handleDecQty() {
    dispatch(decItemQty(id));
  }

  return (
    <div className="cart-item">
      <Link to={`/product-details/${id}`} className="cart-img-box">
        <img src={thumbnail} alt="" />
      </Link>
      <Link to={`/product-details/${id}`} className="cart-item-title">
        {title}
      </Link>

      <div className="cart-qty-inputs-box">
        <div className="cart-qty-inputs">
          <button onClick={handleDecQty} className="cart-qty-btn">
            &#8722;
          </button>
          <input
            className="cart-qty-input"
            type="number"
            name="quantity"
            value={quantity}
            readOnly
          ></input>
          <button onClick={handleIncQty} className="cart-qty-btn">
            &#43;
          </button>
        </div>
      </div>

      <p className="cart-item-price">$ {discountedTotal}</p>

      <div>
        <button className="cart-remove-btn" onClick={handleRemoveCartItem}>
          <HiMiniXMark className="cart-icon" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
