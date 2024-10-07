import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navItems = ["Home", "Recipe", "About", "Search"];

  return (
    <div className="z-50">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end space-x-8 ">
              <label className="input input-bordered items-center gap-2 hidden lg:flex">
                <input type="text" className="grow" placeholder="Search" />
                <FaSearch className="text-gray-300" />
              </label>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow -ml-16 lg:hidden"
                >
                  {navItems.map((item) => (
                    <li key={item}>
                      <a href="">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
