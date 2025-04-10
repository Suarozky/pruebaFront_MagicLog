import { IoMdSearch } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import Link from "next/link";

export default function PrincipalNavbar() {
  return (
    <>
      {/* Versión Desktop (visible en lg: en adelante) */}
      <div className="hidden lg:flex justify-center items-center mt-5">
        <div
          style={{ fontFamily: "Righteous" }}
          className="h-24 w-[1200px] bg-white shadow-sm flex items-center px-6 rounded-3xl tracking-widest"
        >
          <nav className="flex items-center w-full justify-between">
            {/* Izquierda */}
            <div className="flex items-center gap-5 w-1/3 justify-start">
              <Link href="/" className="text-gray-800 text-lg font-semibold">
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-800 text-lg font-semibold"
              >
                product
              </Link>
              <Link
                href="/store"
                className="text-gray-800 text-lg font-semibold"
              >
                Store
              </Link>
            </div>

            {/* Centro */}
            <div className="flex justify-center w-1/3">
              <img
                src="/logo/logoNavBar.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Derecha */}
            <div className="flex items-center gap-6 justify-end w-1/3">
              <Link href="/" className="text-gray-800 text-lg font-semibold">
                <IoMdSearch className="text-gray-800 text-xl" />
              </Link>
              <Link
                href="/login"
                className="text-gray-800 text-lg font-semibold"
              >
                <HiUser className="text-gray-800 text-xl" />
              </Link>
              <Link
                href="/profile"
                className="text-gray-800 text-lg font-semibold"
              >
                <div className="h-8 w-8 bg-[#FFA52F] rounded-full flex justify-center items-center text-sm">
                  0
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Versión Mobile (visible hasta lg:) */}
      <div className="lg:hidden flex justify-center items-center mt-5 px-4 w-full">
        <div
          style={{ fontFamily: "Righteous" }}
          className="h-16 bg-white shadow-sm flex items-center px-4 rounded-3xl tracking-widest w-full max-w-md"
        >
          <nav className="flex items-center w-full justify-between">
            {/* Logo centrado */}
            <div className="flex justify-center w-full">
              <img
                src="/logo/logoNavBar.svg"
                alt="Logo"
                className="h-6 w-auto"
              />
            </div>

            {/* Menú hamburguesa (opcional) o iconos */}
            <div className="flex items-center gap-4">
              <Link href="/store" className="text-gray-800">
                <IoMdSearch className="text-gray-800 text-lg" />
              </Link>
              <Link href="/login" className="text-gray-800">
                <HiUser className="text-gray-800 text-lg" />
              </Link>
              <Link href="/profile" className="text-gray-800">
                <div className="h-6 w-6 bg-[#FFA52F] rounded-full flex justify-center items-center text-xs">
                  0
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
