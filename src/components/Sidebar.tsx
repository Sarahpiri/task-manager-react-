import { CATEGORIES } from "../constants/category";

const Sidebar = () => {
  return (
    <div className="h-full">
      <ul className="menu bg-pink-100 rounded-box hidden md:block w-56 h-full">
        <li>
          <div className="text-pink-500 font-bold">All</div>
        </li>
        {CATEGORIES.map((c) => (
          <li>
            <a className="">{c}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
