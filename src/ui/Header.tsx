import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router";
import { hideCategoriesMenu, toggleCategoriesMenu } from "../redux/shopSlice";
import Search from "../features/shop/Search";
import UserMenu from "../features/user/UserMenu";
import CartLink from "../features/cart/CartLink";
import logo from "../assets/logo/dummy-shop-high-resolution-logo-transparent.png";
import { useIsLargeDesktop } from "../features/hooks/useIsLargeDesktop";
import { useEffect } from "react";
import { useAppSelector } from "../features/hooks/useAppSelector";
import { useAppDispatch } from "../features/hooks/useAppDispatch";

function Header() {
  const dispatch = useAppDispatch();
  const { showCategories } = useAppSelector((store) => store.shop);
  const isLargeDesktop = useIsLargeDesktop();

  function handleToggleCategories() {
    dispatch(toggleCategoriesMenu());
  }

  useEffect(() => {
    isLargeDesktop && dispatch(hideCategoriesMenu());
  }, [isLargeDesktop, dispatch]);

  return (
    <header className="bg-slate-700! text-white! px-12 py-18">
      <div className="relative! flex! justify-between! items-center!">
        <div className="menu-search-container">
          {!isLargeDesktop && (
            <button onClick={handleToggleCategories}>
              {showCategories ? (
                <HiOutlineXMark className="w-15! h-15!" />
              ) : (
                <HiOutlineBars3 className="w-15! h-15!" />
              )}
            </button>
          )}

          <Search />
        </div>
        <Link to="/" className="absolute! left-1/2! -translate-x-1/2!">
          <img className="w-90! h-auto!" src={logo} alt="" />
        </Link>
        <div className="user-cart-container">
          <UserMenu />
          <CartLink />
        </div>
      </div>
    </header>
  );
}

export default Header;
