import Image from "next/image";
import Link from "next/link";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import {IoIosArrowForward} from 'react-icons/io';

export default function index() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <div className="w-[90%] blog-card-wrapper  my-auto mx-auto ease-all duration-200 mt-10 pt-10 p-2   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {data.map((data) => {
            return (
              <div className=" blog-card-main  w-full p-4 rounded-md  ">
                <div className=" ease-all duration-200 w-[90%] md:w-[100%] mx-auto    ">
                  <div className=" flex    gap-4 text-gray-500">
                    <p className="text-sm">August 30, 2022</p>
                    <p className="flex gap-1 items-center text-sm">
                      <GoComment /> (0)
                    </p>
                    <p className="flex items-center gap-1 text-sm">
                      <CiHeart />
                      (0)
                    </p>
                  </div>
                  <Link href="/">
                    <div className="blog-title-main ease-all duration-200 text-[20px] pt-2 md:leading-[35px] md:text-2xl  font-bold">
                      <h2 className="ease-all duration-200">
                        How To Become Better With Building In 1 Month  To Become Better
                      </h2>
                    </div>
                  </Link>
                </div>
                <Link href="/">
                  <div className="mt-4 blog-main-image w-full relative h-[300px]   overflow-hidden rounded">
                    <Image
                      className="blogs-images"
                      layout="fill"
                      objectFit="cover"
                      src="/image1.jpg"
                    />
                  </div>
                </Link>
                <div className="">
                  {/* <div className="ease-all duration-200  text-gray-500 py-5 border-b-2  border-gray-300 w-[100%] md:w-[100%] mx-auto    ">
                    <p className="text-[17px] leading-6 tracking-normal">
                      The European languages are members of the same family.
                      Their separate existence is a myth. For science, music,
                      sport, etc, Europe uses the same vocabulary. The languages
                      only differ in their grammar, their pronunciation and
                      their…
                    </p> 
                  </div>  */}
                  <div className="ease-all duration-200  flex justify-between  text-gray-500 pt-4    w-[97%] md:w-[80%] mx-auto    ">
                    <div className="hidden  md:flex gap-2  items-center">
                      <RiFacebookLine size={14} className="cursor-pointer" />
                      <RiLinkedinLine size={14} className="cursor-pointer" />
                      <FaInstagram size={13} className="cursor-pointer" />
                      <TfiTwitter size={13} className="cursor-pointer" />
                      <FaPinterestP size={13} className="cursor-pointer" />
                    </div>
                    <div className="px-3 md:px-0 blog-read-more ease-all duration-200 ">
                      <button className="flex items-center gap-1 ease-all duration-200 hover:text-blue-600 "><h1>Continue reading</h1> <IoIosArrowForward size={20} className="ease-all duration-300 mt-[.7px] read-more-arrow text-gray-500"/></button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
