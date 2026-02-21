import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { setSearchQuery } from "../../redux/shopSlice";

function CategoryItem({ category }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, slug } = category;
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetCategory() {
    searchParams.set("category", slug);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
    dispatch(setSearchQuery(""));

    navigate(`/?${searchParams.toString()}`);
  }

  return (
    <li>
      <button onClick={handleSetCategory} className="category-item-button">
        {name}
      </button>
    </li>
  );
}

export default CategoryItem;
