import { setSearchQuery } from "../../redux/shopSlice";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const searchQuery = useAppSelector((store) => store.shop.searchQuery);
  const { md } = useBreakpoint();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (page !== "1") {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }

    if (location.pathname !== "/") navigate("/");

    queryClient.cancelQueries({ queryKey: ["search"] });
    dispatch(setSearchQuery(e.target.value));
  }

  function handleClearSearchQuery() {
    dispatch(setSearchQuery(""));
  }

  function handleOpenSearch() {
    if (md) return;
    setIsSearchOpen(true);
  }

  useEffect(() => {
    if (isSearchOpen) inputRef.current?.focus();
  }, [isSearchOpen]);

  return (
    <div className="flex items-center">
      {!md && (
        <button
          onClick={handleOpenSearch}
          className="cursor-pointer p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          <HiMagnifyingGlass className="w-5 h-5" />
        </button>
      )}

      {!md && (
        <AnimatePresence mode="wait">
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.2, type: "tween" }}
              className="fixed inset-x-0 top-0 z-50 flex items-center gap-3 bg-slate-700 px-5 py-5 shadow-xl"
            >
              <HiMagnifyingGlass className="w-5 h-5 shrink-0 text-slate-300" />
              <input
                ref={inputRef}
                onFocus={handleClearSearchQuery}
                onChange={handleOnChange}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                name="search"
                type="text"
                placeholder="Search products..."
                autoComplete="off"
                value={searchQuery}
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearchQuery}
                  className="cursor-pointer shrink-0 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="cursor-pointer shrink-0 p-1 text-slate-300 hover:text-white transition-colors"
              >
                <HiOutlineXMark className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {md && (
        <div className="relative flex items-center">
          <HiMagnifyingGlass className="pointer-events-none absolute left-3 w-4 h-4 text-slate-400" />
          <input
            onFocus={handleClearSearchQuery}
            onChange={handleOnChange}
            className="w-52 rounded-lg border border-white/20 bg-white/10 py-2 pl-9 pr-9 text-sm text-white placeholder:text-slate-400 transition-colors focus:border-white/40 focus:bg-white/15 focus:outline-none"
            name="search"
            type="text"
            placeholder="Search products..."
            autoComplete="off"
            value={searchQuery}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearchQuery}
              className="cursor-pointer absolute right-2.5 p-0.5 text-slate-400 hover:text-white transition-colors"
            >
              <HiOutlineXMark className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
