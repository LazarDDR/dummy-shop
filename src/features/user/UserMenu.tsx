import {
  HiMiniChevronDown,
  HiMiniChevronUp,
  HiMiniUserCircle,
} from "react-icons/hi2";
import { Link } from "react-router";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useState } from "react";
import { useLogout } from "../authentication/useLogout";
import { useOutsideClick } from "../hooks/useOutsideClick";

function UserMenu() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { currentUser, isLoading } = useCurrentUser();
  const logout = useLogout();

  const fullName = currentUser
    ? `${currentUser.firstName} ${currentUser.lastName}`
    : "";

  function handleUserMenu() {
    setUserMenuOpen((prev) => !prev);
  }

  function handleLogout() {
    logout();
  }

  const ref = useOutsideClick<HTMLDivElement>(() => setUserMenuOpen(false));

  if (isLoading) return null;

  return (
    <div ref={ref} className="relative">
      {currentUser ? (
        <>
          <button
            onClick={handleUserMenu}
            className="flex items-center gap-1.5 rounded-lg p-1 hover:bg-white/10 transition-colors"
          >
            <img
              className="w-7 h-7 rounded-full object-cover ring-2 ring-white/20"
              src={currentUser.image}
              alt=""
            />
            <p className="hidden" data-first={currentUser.firstName}>
              {fullName}
            </p>
            {userMenuOpen ? (
              <HiMiniChevronUp className="w-3.5 h-3.5 text-slate-300" />
            ) : (
              <HiMiniChevronDown className="w-3.5 h-3.5 text-slate-300" />
            )}
          </button>

          {userMenuOpen && (
            <ul className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-slate-100 bg-white py-1 shadow-lg">
              <li>
                <Link
                  to="/user"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <Link
          to="/login"
          className="flex items-center p-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <HiMiniUserCircle className="w-6 h-6" />
          <p className="hidden">Log in</p>
        </Link>
      )}
    </div>
  );
}

export default UserMenu;
