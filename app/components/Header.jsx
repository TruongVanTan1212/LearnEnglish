import Image from "next/image"
import Link from "next/link"
import Logo from "@/app/assets/images/logo.svg"
import {FaSignOutAlt, FaUser} from "react-icons/fa"
import { GrResources } from "react-icons/gr";

const Header = () => {
  return (
      //<!-- Header -->
      <header className="bg-green-500">
      <nav className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                className="h-12 w-12" 
                src={Logo} 
                alt="Logo" 
                priority={true}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-green-700 hover:text-white"
                >
                  Giáo Viên
                </Link>
                {/*<!-- Logged In Only -->*/}
                <Link
                  href="/teachers"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-green-700 hover:text-white"
                >
                  Bog
                </Link>
                <Link
                  href="/add-room"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-green-700 hover:text-white"
                >
                  Đánh giá của Học Viên
                </Link>
                 <Link
                  href="/add-room"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-green-700 hover:text-white"
                >
                  Giới thiệu
                </Link>
              </div>
            </div>
          </div>
         {/*<!-- Right Side Menu -->*/} 
          <div className="ml-auto">     
            <div className="ml-4 flex items-center md:ml-6">
             {/*<!-- Logged Out Only -->*/} 
             <Link
                href="/register"
                className="bg-orange-400 text-white px-4 py-1 rounded-lg  mr-5
                            transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                 Đăng ký học thử ngay
              </Link>
              <Link
                href="/login"
                className="mr-3 text-gray-800 hover:text-white"
              >
                <FaUser className=" inline mr-1"/> Đăng Nhập
              </Link>
              <Link href="/my-rooms" 
                    className="mr-3 text-gray-800 hover:text-white"
              >
                <GrResources className=" inline mr-1"/> Khoá học của tôi 
              </Link>
              <Link
                href="/login"
                className="mx-3 text-gray-800 hover:text-white"
              >
                <FaSignOutAlt className=" inline mr-1"/>  Đăng Xuất
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/*<!-- Mobile menu -->*/}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>
          {/* <!-- Logged In Only -->*/}
          <Link
            href="/bookings.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/add-room.html"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
