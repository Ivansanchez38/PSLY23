import { icons } from "../data/icons";
import { navItems1, navItems2, navItemsSmall } from "../data/nav-items";

const Navbar = () => {
  return (
    <>
      <div className="w-full hidden md:flex items-center justify-between h-20 px-10 z-40 text-base apply border-b-transparent border-b border-solid">
        <div>
          <ul className="flex">
            <div className="hidden lg:flex">
              {navItems1.map((item, index) => (
                <li
                  key={index}
                  className="lg:mr-[.15vw] xl:mr-[.75vw] p-1 lg:pr-1 xl:pr-[10px] font-semibold text-sm"
                >
                  <a href="#" title={item}>
                    {item}
                  </a>
                </li>
              ))}
            </div>
            <div className="flex lg:hidden">
              {navItemsSmall.map((item, index) => (
                <li
                  key={index}
                  className="mr-[.75vw] p-1 pr-[10px] font-medium text-sm"
                >
                  <a href="#" title={item}>
                    {item}
                  </a>
                </li>
              ))}
            </div>
            <li>
              <button>
                <div className="mr-[.75vw] pt-1 pl-[10px] opacity-60">
                  {icons[0].search}
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            {navItems2.map((item, index) => (
              <li
                key={index}
                className="mr-[.75vw] p-1 ml-1 font-medium lg:font-semibold text-sm"
              >
                <a href="#" title={item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="z-50 md:hidden absolute w-full">
        <div className="flex justify-between text-white p-4">
          <ul className="flex items-center">
            <li>
              <h1 className="fill-white">{icons[0].aesopSmall}</h1>
            </li>
          </ul>
          <ul className="flex items-center space-x-6">
            <li>
              <div className="fill-white">{icons[0].search}</div>
            </li>
            <li>
              <div className="fill-white">{icons[0].heart}</div>
            </li>
            <li>
              Cart
            </li>
            <li>
              <div className="fill-white">{icons[0].hamburger}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
