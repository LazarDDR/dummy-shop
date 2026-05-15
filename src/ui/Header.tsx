import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router";
import { hideCategoriesMenu, toggleCategoriesMenu } from "../redux/shopSlice";
import Search from "../features/shop/Search";
import UserMenu from "../features/user/UserMenu";
import CartLink from "../features/cart/CartLink";
import logo from "../assets/logo/dummy-shop-high-resolution-logo-transparent.png";
import { useBreakpoint } from "../features/hooks/useBreakpoint";
import { useEffect } from "react";
import { useAppSelector } from "../features/hooks/useAppSelector";
import { useAppDispatch } from "../features/hooks/useAppDispatch";

function Header() {
  const dispatch = useAppDispatch();
  const { showCategories } = useAppSelector((store) => store.shop);
  const { "3xl": isLargeDesktop } = useBreakpoint();

  function handleToggleCategories() {
    dispatch(toggleCategoriesMenu());
  }

  useEffect(() => {
    isLargeDesktop && dispatch(hideCategoriesMenu());
  }, [isLargeDesktop, dispatch]);

  return (
    <header className="bg-slate-700 text-white px-5 py-4 shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!isLargeDesktop && (
            <button
              onClick={handleToggleCategories}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {showCategories ? (
                <HiOutlineXMark className="w-5 h-5" />
              ) : (
                <HiOutlineBars3 className="w-5 h-5" />
              )}
            </button>
          )}

          <Search />
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img className="h-10 w-auto" src={logo} alt="Dummy Shop" />
        </Link>

        <div className="flex items-center gap-3">
          <UserMenu />
          <CartLink />
        </div>
      </div>
    </header>
  );
}

export default Header;
