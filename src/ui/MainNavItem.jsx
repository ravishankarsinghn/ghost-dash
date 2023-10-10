import { NavLink } from "react-router-dom";

function MainNavItem({ path, label }) {
  return (
    <li>
      <NavLink
        to={path}
        className=" text-base font-medium font-poppins  block px-3 py-2 rounded-md hover:bg-slate-200 active:bg-slate-200 transition-all duration-300"
      >
        {label}
      </NavLink>
    </li>
  );
}

export default MainNavItem;
