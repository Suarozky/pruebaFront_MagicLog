/* eslint-disable @next/next/no-img-element */
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

export default function Categories() {
  return (
    <div className="flex flex-col justify-between items-center mt-5 scale-90 bg-gray-900 rounded-3xl shadow-sm px-20 py-10">
      {/* Título + Botones de navegación */}
      <div className="flex flex-col sm:flex-row w-full justify-between items-center">
        <span
          style={{ fontFamily: "Righteous" }}
          className="text-4xl sm:text-6xl font-bold text-white"
        >
          CATEGORIES
        </span>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button className="bg-[#4A69E2] text-white flex justify-center items-center rounded-xl h-10 w-10 text-sm hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
            <IoArrowBackSharp className="text-xl" />
          </button>
          <button className="bg-[#4A69E2] text-white flex justify-center items-center rounded-xl h-10 w-10 text-sm hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
            <IoMdArrowForward className="text-xl" />
          </button>
        </div>
      </div>

      {/* Categorías */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mt-10 w-full">
        {/* Item 1 */}
        <div className="max-w-[500px] w-full">
          <div className="bg-[#F6F6F6] rounded-t-3xl overflow-hidden h-[350px] sm:h-[400px]">
            <img
              src="/product/zapatoCategory.svg"
              alt="zapato"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-4 px-2">
            <span
              style={{ fontFamily: "Righteous" }}
              className="text-2xl sm:text-4xl font-bold text-white tracking-widest"
            >
              Lifestyle <br /> Shoes
            </span>
            <button className="bg-black text-white flex justify-center items-center rounded-xl h-10 w-10 mt-2">
              <MdOutlineArrowOutward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="max-w-[500px] w-full">
          <div className="bg-[#ECEEF0] rounded-t-3xl overflow-hidden h-[350px] sm:h-[400px]">
            <img
              src="/product/zapatoCategory2.svg"
              alt="zapato"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-4 px-2">
            <span
              style={{ fontFamily: "Righteous" }}
              className="text-2xl sm:text-4xl font-bold text-white tracking-widest"
            >
              Lifestyle <br /> Shoes
            </span>
            <button className="bg-black text-white flex justify-center items-center rounded-xl h-10 w-10 mt-2">
              <MdOutlineArrowOutward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
