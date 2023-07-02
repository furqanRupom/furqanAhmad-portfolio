"use client";
import { FaHome, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { usePathname } from "next/navigation";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navSmallLinks = [
    {
      path: "#home",
      name: <FaHome />,
    },
    {
      path: "#about",
      name: <FaUser />,
    },
    {
      path: "#skills",
      name: <HiViewGridAdd />,
    },
    {
      path: "#projects",
      name: <GoProjectSymlink />,
    },
    {
      path: "#contact",
      name: <GrContactInfo />,
    },
  ];

  const navLinks = [
    {
      path: "#home",
      name: "Home",
    },
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#skills",
      name: "Skills",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];

  return (
    <div className="z-20 flex justify-center lg:justify-around lg:backdrop-blur-md lg:fixed lg:w-full mx-auto">
      <h3 className="hidden lg:block text-5xl text-center lg:text-left py-5  font-bold text-white f">
        FAV
      </h3>

      {/* mobile devices */}

      <nav className="lg:hidden fixed bg-slate-900/75  bottom-0 w-full z-30">
        <ul className="flex w-full justify-center space-x-5 backdrop-blur-lg p-3">
          {navSmallLinks.map(({ path, name }) => (
            <li
              className={
                path === pathname
                  ? "text-white  p-3 rounded-full text-xl cursor-pointer"
                  : "text-white text-xl ring p-2 rounded-md cursor-pointer ring-purple-900 hover:text-purple-500"
              }
              key={path}
            >
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}

              >
                {name}
              </Link>
              {/* <Link scroll={false} href={path}>
                {name}
              </Link> */}
            </li>
          ))}
        </ul>
      </nav>

      {/*  larger devices */}

      <nav className="hidden lg:block ">
        <ul className="flex w-full justify-center space-x-5 backdrop-blur-lg p-3 ">
          {navLinks.map(({ path, name }) => (
            <li
              className={
                path === pathname
                  ? "text-white bg-red-500 p-3  text-xl cursor-pointer"
                  : "text-white text-xl p-2 rounded-md cursor-pointer  hover:text-purple-500 duration-200"
              }
              key={path}
            >
                  <Link
                to={path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                activeClass="text-purple-500"

              >
                {name}
              </Link>
              {/* <Link scroll={false} href={path}>
                {name}
              </Link> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
