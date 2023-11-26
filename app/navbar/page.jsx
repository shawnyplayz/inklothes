"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLogo from "../../public/Artboard.svg";
import Essentials from "../../essentials.json";
import { BsSearch, BsBag } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { Button, Dropdown, Menu } from "antd";
import "./navbar.css";
function Navbar(props) {
  // const items = [
  //   {
  //     key: "3",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.luohanacademy.com"
  //       >
  //         3rd menu item
  //       </a>
  //     ),
  //   },
  // ];
  const menuStyle = {
    // Your custom styles here
    backgroundColor: "#f0f0f0",
    border: "1px solid #d9d9d9",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  };

  const menu = (
    <Menu style={menuStyle} className="custom-menu">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  const [openCategories, setOpenCategories] = useState(false);
  const [result, setResult] = useState(null);
  useEffect(() => {
    setResult(props?.content?.navbarCategories);
  }, [props?.content]);

  const navbarOptions = [
    {
      link: "/catalogue",
      icon: <BsSearch />,
      tooltip: "Search Product",
    },
    {
      link: "/profile",
      icon: <RxAvatar />,
      tooltip: "Profile",
    },
    {
      link: "/favourites",
      icon: <AiOutlineHeart />,
      tooltip: "Favourites",
    },
    {
      link: "/cart",
      icon: <BsBag />,
      tooltip: "Cart",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200  text-2xl ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-24">
        <div className="flex gap-12 justify-center items-center font-normal">
          <Link href="/" className="flex items-center">
            <Image
              src={NavLogo}
              className="h-fit"
              alt="logo"
              loading="eager"
              priority={true}
              style={{
                height: "70px",
                verticalAlign: "middle",
                width: "147px",
                transform: "scale(6.5)",
              }}
            />
            {/* <span className="self-center text-3xl font-bold whitespace-nowrap">
              {Essentials.name}
            </span> */}
          </Link>
          <div className="flex gap-2 -mt-4 font-semibold text-xl">
            Categories
            <div className="">
              <Button
                onClick={() => setOpenCategories(!openCategories)}
                className="border-none text-xl p-0 font-extrabold hover:cursor-pointer"
              >
                <AiOutlineDown />
              </Button>
              <div
                className={`text-black -ml-48 absolute bg-gray-50 min-w-fit shadow-lg z-10 rounded-xl mt-3 ${
                  openCategories ? "block" : "hidden"
                } lg:items-center`}
              >
                <div className="flex flex-row p-4 gap-10">
                  {/* Categories */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold my-2">Categories</div>
                    <ul className="flex flex-col p-2">
                      {result?.categories?.map((el) => (
                        <>
                          <li className="text-black text-base my-1 hover:transform hover:scale-110 hover:transition-transform hover:cursor-pointer">
                            {el}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                  {/* Themes */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold my-2">Themes</div>
                    <ul className="flex flex-col p-2">
                      {result?.theme?.map((el) => (
                        <>
                          <li className="text-black text-base my-1  hover:transform hover:scale-110 hover:transition-transform hover:cursor-pointer">
                            {el.genre}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                  {/* Skin Tone */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold my-2">Skin Tone</div>
                    <ul className="flex flex-col p-2">
                      {result?.skinTone?.map((el) => (
                        <>
                          <li className="text-black text-base my-1 hover:transform hover:scale-110 hover:transition-transform hover:cursor-pointer">
                            {el?._id}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <Dropdown
              menu={{ menu }}
              placement="bottomRight"
              arrow
              open={openCategories}
            >
              <Button
                onClick={() => setOpenCategories(!openCategories)}
                className="border-none text-xl p-0 font-extrabold"
              >
                <AiOutlineDown />
              </Button>
            </Dropdown> */}
          </div>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className=" open:navbar-default inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!open ? "hidden" : "w-full"} md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            {navbarOptions.map((el) => (
              <li className="font-extrabold">
                <Link
                  href={el.link}
                  className="block py-2 mx-1 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  {el.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
