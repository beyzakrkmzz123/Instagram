import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      search: "Search",
      reels: "Reels",
      messages: "Messages",
      notifications: "Notifications",
      create: "Create",
      profile: "Profile",
      more: "More",
      metaProducts: "Meta's Other Products",
      logout: "Logout",
      language: "Language",
      likes: "likes",
      comments: "Comments",
      addComment: "Add A Comment...",
      seconds: "s",
      minutes: "min",
      hours: "h",
      ago: "ago",
      forYou: "For You",
      following: "Following",
      loading: "Loading...",
      noName: "No name",
      switch: "Switch",
      suggestionsForYou: "Suggestions For You",
      seeAll: "See All",
      followedBy: "Followed by {{company}}",
      follow: "Follow",
      footerLinks1: "About . Help . Press . API . Careers . Privacy",
      footerLinks2: "Terms . Locations . Language . Meta Verified",
      accountsettings: "Account Settings",
      logout: "Logout",
    },
  },
  tr: {
    translation: {
      home: "Ana Sayfa",
      search: "Ara",
      reels: "Reels",
      messages: "Mesajlar",
      notifications: "Bildirimler",
      create: "Oluştur",
      profile: "Profil",
      more: "Daha Fazla",
      metaProducts: "Meta'nın Diğer Ürünleri",
      logout: "Çıkış Yap",
      language: "Dil",
      likes: "beğenme",
      comments: "Yorum",
      addComment: "Yorum Yap...",
      seconds: "s",
      minutes: "dk",
      hours: "saat",
      ago: "önce",
      forYou: "Senin İçin",
      following: "Takip Ettiklerin",
      loading: "Yükleniyor...",
      noName: "İsim yok",
      switch: "Geçiş Yap",
      suggestionsForYou: "Senin İçin Önerilenler",
      seeAll: "Tümünü Gör",
      followedBy: "{{company}} takip ediyor",
      follow: "Takip Et",
      footerLinks1:
        "Hakkında . Yardım . Basın . API . İş Fırsatları . Gizlilik",
      footerLinks2: "Koşullar . Konumlar . Dil . Meta Verified",
      accountsettings: "Hesap Ayarları",
      logout: "Çıkış",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
        "cookie",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
