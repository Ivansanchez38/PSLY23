import { icons } from "../data/icons";
import { navItems1, navItems2, navItemsSmall } from "../data/nav-items";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-20 px-10 z-[100] text-base apply border-b-transparent border-b border-solid">
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
                className="mr-[.75vw] p-1 pr-[10px] font-semibold text-sm"
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
              className="mr-[.75vw] p-1 ml-1 font-semibold text-sm"
            >
              <a href="#" title={item}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
