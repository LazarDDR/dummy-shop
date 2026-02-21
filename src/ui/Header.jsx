import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoriesMenu } from "../redux/shopSlice";
import Search from "../features/shop/Search";
import UserMenu from "../features/user/UserMenu";
import CartLink from "../features/cart/CartLink";
import logo from "../assets/logo/dummy-shop-high-resolution-logo-transparent.png";

function Header() {
  const dispatch = useDispatch();
  const { showCategories } = useSelector((store) => store.shop);

  function handleToggleCategories() {
    dispatch(toggleCategoriesMenu());
  }

  return (
    <header className="header">
      <div className="menu-search-container">
        <button onClick={handleToggleCategories}>
          {showCategories ? (
            <HiOutlineXMark className="header-icon" />
          ) : (
            <HiOutlineBars3 className="header-icon" />
          )}
        </button>

        <Search />
      </div>
      <Link to="/" className="header-logo-box">
        <img className="header-logo" src={logo} alt="" />
      </Link>
      <div className="user-cart-container">
        <UserMenu />
        <CartLink />
      </div>
    </header>
  );
}

export default Header;
