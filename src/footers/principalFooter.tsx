/* eslint-disable @next/next/no-img-element */
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiTiktokLogoFill } from "react-icons/pi";

export default function PrincipalFooter() {
  return (
    <div className="bg-[#4A69E2] mt-10 rounded-t-4xl rounded-b-4xl">
      {/* Upper Section */}
      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row h-auto md:h-72 bg-[#4A69E2] p-6 md:p-10 rounded-t-4xl">
        {/* Left Content */}
        <div
          style={{ fontFamily: "Righteous" }}
          className="w-full md:w-1/2 tracking-widest"
        >
          <div className="mb-6">
            <span className="block text-2xl md:text-5xl font-bold text-white">
              Join our KicksPlus
            </span>
            <span className="block text-2xl md:text-5xl font-bold text-white">
              Club & get 15% off
            </span>
          </div>
          <span className="text-white text-sm md:text-base">
            Sign up for free! Join the community
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-white text-sm rounded-lg h-12 border border-white focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto px-4"
            />
            <button className="bg-gray-900 text-white rounded-xl h-12 px-6 text-sm">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <img
            src="/logo/logoFooter.svg"
            alt="zapato"
            className="w-1/2 h-auto max-w-xs"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div className="max-w-[1250px] mx-auto w-full bg-gray-900 rounded-t-4xl rounded-b-4xl py-10 px-6">
        <div style={{ fontFamily: "Righteous" }} className="tracking-widest">
          <div className="flex flex-wrap justify-between gap-8">
            {/* About Us */}
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA52F] mb-4">
                About us
              </h2>
              <p className="text-white text-sm">
                We are the biggest hyperstore in the universe. We got you all
                covered with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA52F] mb-4">
                Categories
              </h2>
              <div className="flex flex-col space-y-2 text-white text-sm">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="hover:text-white text-gray-400"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA52F] mb-4">
                Company
              </h2>
              <div className="flex flex-col space-y-2 text-white text-sm">
                {["About us", "Contact", "Blogs"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white text-gray-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA52F] mb-4">
                Follow us
              </h2>
              <div className="flex space-x-4 text-white text-2xl">
                <a href="#">
                  <RiInstagramFill />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <AiFillTwitterCircle />
                </a>
                <a href="#">
                  <PiTiktokLogoFill />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Image */}
          <div className="mt-10">
            <img
              src="/footer.svg"
              alt="footer image"
              className="w-full h-auto rounded-b-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
