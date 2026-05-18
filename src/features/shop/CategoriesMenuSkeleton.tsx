import { motion } from "motion/react";

const ITEM_WIDTHS = [
  "w-3/4",
  "w-full",
  "w-2/3",
  "w-5/6",
  "w-1/2",
  "w-4/5",
  "w-3/4",
  "w-2/3",
];

function CategoriesMenuSkeleton() {
  return (
    <>
      <div className="px-4 py-4 border-b border-slate-100">
        <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
      </div>

      <ul className="flex flex-col gap-0.5 p-2">
        <li className="px-3 py-2">
          <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
        </li>
        {ITEM_WIDTHS.map((w, i) => (
          <li key={i} className="px-3 py-2">
            <div className={`h-5 ${w} animate-pulse rounded bg-slate-200`} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoriesMenuSkeleton;
