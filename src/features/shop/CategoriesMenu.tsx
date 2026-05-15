import Spinner from "../../ui/Spinner";
import CategoryItem from "./CategoryItem";
import { useCategoriesList } from "./useCategoriesList";
import { setSearchQuery, toggleCategoriesMenu } from "../../redux/shopSlice";
import { useNavigate, useSearchParams } from "react-router";
import { motion } from "motion/react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useIsLargeDesktop } from "../hooks/useIsLargeDesktop";
import { useAppDispatch } from "../hooks/useAppDispatch";

type CategoriesMenuProps = {
  showCategoriesFinal: boolean;
};

function CategoriesMenu({ showCategoriesFinal }: CategoriesMenuProps) {
  const { categories, isLoading } = useCategoriesList();
  const isLargeDesktop = useIsLargeDesktop();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const outsideRef = useOutsideClick<HTMLUListElement>(() => {
    if (!isLargeDesktop) dispatch(toggleCategoriesMenu());
  });

  const ref = isLargeDesktop ? null : outsideRef;
  const navigate = useNavigate();

  function handleAllProductsCat() {
    searchParams.delete("category");
    setSearchParams(searchParams);
    dispatch(setSearchQuery(""));

    navigate("/");
  }

  if (isLoading) return null;

  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.2, type: "tween" }}
        className="flex! flex-col! divide-y! divide-slate-300! bg-slate-200! z-2! h-full py-3! absolute left-0"
        key="categories-menu"
        ref={ref}
      >
        {isLoading ? (
          <div className="categories-menu-spinner">
            <Spinner />
          </div>
        ) : (
          <>
            <li onClick={handleAllProductsCat}>
              <button className="text-slate-700 text-sm py-0.5 px-6 w-full text-left font-bold tracking-widest uppercase">
                All products
              </button>
            </li>

            {categories &&
              categories.map((category) => (
                <CategoryItem category={category} key={category.slug} />
              ))}
          </>
        )}
      </motion.ul>
      {showCategoriesFinal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="categories-menu-overlay"
        ></motion.div>
      )}
    </>
  );
}

export default CategoriesMenu;
