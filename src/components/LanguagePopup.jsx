import React from "react";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";

const LanguagePopup = ({ onClose }) => {
  const { i18n, t } = useTranslation();
  const iconColor = "black";

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    onClose();
  };

  return (
    <div className="absolute right-4 bottom-full mb-4 bg-white rounded-lg shadow-md w-56 p-4 z-50 border border-gray-200">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md p-2">
        <CgProfile size={20} color={iconColor} />
        <div className="text-sm font-medium text-gray-800">
          {t("accountsettings")}
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md p-2">
        <GrLanguage size={20} color={iconColor} />
        <div className="text-sm font-medium text-gray-800">{t("language")}</div>
      </div>

      <div className="flex mb-4">
        <div
          onClick={() => handleLanguageChange("tr")}
          className={`flex-1 text-center cursor-pointer border rounded-md py-1 text-sm font-medium ${
            i18n.language === "tr"
              ? "bg-black text-white border-black"
              : "bg-gray-100 text-gray-700 border-transparent"
          }`}
        >
          Türkçe
        </div>
        <div
          onClick={() => handleLanguageChange("en")}
          className={`flex-1 text-center cursor-pointer border rounded-md py-1 text-sm font-medium ml-2 ${
            i18n.language === "en"
              ? "bg-black text-white border-black"
              : "bg-gray-100 text-gray-700 border-transparent"
          }`}
        >
          English
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md p-2">
        <IoLogOutOutline size={20} color={iconColor} />
        <div className="text-sm font-medium text-gray-800">{t("logout")}</div>
      </div>
    </div>
  );
};

export default LanguagePopup;
