import MainNavItem from "./MainNavItem";

function MainNav() {
  return (
    <nav className="p-6">
      <ul className="flex flex-col gap-2">
        <MainNavItem path="/dashboard" label="Home" />
        <MainNavItem path="/pages" label="Pages" />
        <MainNavItem path="/links" label="Links" />
      </ul>
    </nav>
  );
}

export default MainNav;
