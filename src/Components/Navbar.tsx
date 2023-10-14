import { useState, useEffect } from "react";
import Style from "@/styles/Nav.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import {AiFillInstagram} from 'react-icons/ai'; 
import {BsFacebook} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleClose = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className="w-full relative ease-all duration-200 bg-white border-b-2 border-gray-200 flex justify-around py-5 items-center md:py-8">
        <div className="text-2xl ease-all duration-200 text-blue-600">
          <Link href={"/"}>Kodeara</Link>
        </div>
        <div className=" ease-all duration-200 hidden gap-8 items-center justify-center sm:flex">
          <Link href={"/"} className="px-1 ">
            Home
          </Link>
          <Link href={"/"} className="px-1 ">
            Templates
          </Link>
          <Link href={"/blog"} className=" px-1">
            Blogs
          </Link>
        </div>
        <div className="  flex justify-center items-center ease-all duration-200 bg-white p-2 btn-shadow text-blue-700 rounded-full">
          <button onClick={handleClose}>
            <FiMenu size={23} />
          </button>
        </div>
        {openNav ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute z-50 flex-col ease-all duration-200 bg-white top-0 flex gap-10 text-gray-500 items-center justify-center left-0 right-0 bottom-0 w-full h-screen "
          >
            <div className="  flex flex-col gap-1  mt-[-12%] md:flex-row md:gap-6 ">
              <Link href={"/"} className="py-2 text-xl">
                <h1>Home</h1>
              </Link>
              <Link href={"/blog"} className="py-2 text-xl flex items-center gap-1">
                <h1>Blog</h1> <IoIosArrowDown className="text-gray-800" />
              </Link>
              <Link href={"/"} className="py-2 text-xl flex items-center gap-1">
                <h1>Templates</h1> <IoIosArrowDown className="text-gray-800" />
              </Link>
              <Link href={"/"} className="py-2 text-xl">
                <h1>About</h1>
              </Link>
              <Link href={"/"} className="py-2 text-xl">
                <h1>Contact</h1>
              </Link>
            </div>
            <div className=" ease-all duration-200  flex gap-5 relative top-[100px]">
            <div className=" flex justify-center items-center bg-white p-2 btn-shadow text-blue-700 rounded-full">
              <button onClick={handleClose}>
                <AiFillLinkedin size={23} />
              </button>
            </div>
           
              <div className=" flex justify-center items-center bg-white p-2 btn-shadow text-blue-700 rounded-full">
                <button onClick={handleClose}>
                  <AiFillTwitterSquare size={23} />
                </button>
              </div>
              <div className=" flex justify-center items-center bg-white p-2 btn-shadow text-blue-700 rounded-full">
                <button onClick={handleClose}>
                  <AiFillInstagram size={23} />
                </button>
              </div>
              <div className=" flex justify-center items-center bg-white p-2 btn-shadow text-blue-700 rounded-full">
                <button onClick={handleClose}>
                  <BsFacebook  size={23} />
                </button>
              </div>
              
            </div>

            <div className="text-2xl absolute top-10 right-10 md:top-[33px] md:right-[186px] flex justify-center items-center bg-white p-2 btn-shadow text-blue-700 rounded-full">
              <button className="" onClick={handleClose}>
                <RxCross1 />
              </button>
            </div>
            <div className="text-2xl absolute top-10 left-10 md:top-[34px] md:left-[186px] text-blue-600">
              <Link href={"/"}>Kodeara</Link>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
