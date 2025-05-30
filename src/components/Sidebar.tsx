import { CATEGORIES } from "../constants/category";
import type { CategoryType } from "../types/category";

interface SidebarProp {
  selectedSidebarCategory: CategoryType | "All";
  setSelectedSidebarCategory: React.Dispatch<
    React.SetStateAction<CategoryType | "All">
  >;
}

const Sidebar = ({
  setSelectedSidebarCategory,
  selectedSidebarCategory,
}: SidebarProp) => {
  const handleSidebarClick = (selected: CategoryType | "All") => {
    setSelectedSidebarCategory(selected);
  };
  return (
    <div className="h-full">
      <ul className="menu bg-pink-100 rounded-box hidden md:block w-56 h-full">
        <li>
          <div
            className={
              selectedSidebarCategory === "All" ? "text-pink-500 font-bold" : ""
            }
            onClick={() => handleSidebarClick("All")}
          >
            All
          </div>
        </li>
        {CATEGORIES.map((c) => (
          <li>
            <div
              className={
                selectedSidebarCategory === c ? "text-pink-500 font-bold" : ""
              }
              onClick={() => handleSidebarClick(c)}
            >
              {c}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
