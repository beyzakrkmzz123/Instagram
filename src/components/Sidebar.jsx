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
import { useTranslation } from "react-i18next";
import LanguagePopup from "./LanguagePopup";
import { useState } from "react";
const Sidebar = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="w-[250px] h-screen border-r border-gray-800 fixed top-0 left-0 bg-black text-white px-6 py-8">
      <div className="text-2xl font-bold mb-10">Instagram</div>

      <div className="space-y-5">
        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <IoMdHome />
          </div>
          <div>
            <div>{t("home")}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2 ">
          <div className="text-3xl">
            <IoSearch />
          </div>
          <div>
            <div>{t("search")}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <BiMoviePlay />
          </div>
          <div>{t("reels")}</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <TbMessageCircle />
          </div>
          <div>{t("messages")}</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <FaRegHeart />
          </div>
          <div>
            <div>{t("notifications")}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <CgAddR />
          </div>
          <div>
            <div>{t("create")}</div>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2"
            onClick={() => setShowPopup(!showPopup)}
          >
            <div className="text-3xl">
              <CgProfile />
            </div>
            <div>{t("profile")}</div>
          </div>
          {showPopup && <LanguagePopup onClose={() => setShowPopup(false)} />}
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <IoReorderThreeOutline />
          </div>
          <div>{t("more")}</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-gray-300 hover:bg-gray-800 rounded-lg p-2">
          <div className="text-3xl">
            <HiOutlineSquares2X2 />
          </div>
          <div>{t("metaProducts")}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
