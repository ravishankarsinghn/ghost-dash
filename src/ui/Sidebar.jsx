import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="bg-white border-r-[1px] border-slate-300 row-[1/-1]  flex flex-col  ">
      <Logo />
      <MainNav />
    </div>
  );
}

export default Sidebar;
