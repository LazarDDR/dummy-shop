import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/shopSlice";
import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const searchQuery = useSelector((store) => store.shop.searchQuery);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnChange(e) {
    if (page != "1") {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }

    if (location.pathname != "/") navigate("/");

    queryClient.cancelQueries({ queryKey: ["search"] });
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <div className="search-box">
      <HiMagnifyingGlass className="header-icon header-icon-search" />
      <input
        onChange={handleOnChange}
        className="search-input"
        name="search"
        type="text"
        placeholder="Search"
        autoComplete="off"
        value={searchQuery}
      />
    </div>
  );
}

export default Search;
