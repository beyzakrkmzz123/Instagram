import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen border-r border-gray-800 fixed top-0 left-0 bg-black text-white px-6 py-8">
      <div className="text-2xl font-bold mb-10">Instagram</div>

      <div className="space-y-5">
        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <IoMdHome />
          </div>
          <div>Ana Sayfa</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2 ">
          <div className="text-3xl">
            <IoSearch />
          </div>
          <div>Ara</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <BiMoviePlay />
          </div>
          <div>Reels</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <TbMessageCircle />
          </div>
          <div>Mesajlar</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <FaRegHeart />
          </div>
          <div>Bildirimler</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <CgAddR />
          </div>
          <div>Oluştur</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <CgProfile />
          </div>
          <div>Profil</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <IoReorderThreeOutline />
          </div>
          <div>Daha Fazla</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <HiOutlineSquares2X2 />
          </div>
          <div>Meta'nın Diğer Ürünleri</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
