import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StoryBar = () => {
  const scrollRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("senin");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-black py-4 text-white">
      <div className="flex gap-6 px-10 mb-4 select-none border-b border-gray-700">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab("senin")}
          onKeyDown={(e) => {
            if (e.key === "Enter") setActiveTab("senin");
          }}
          className={`text-sm pb-1 cursor-pointer transition-colors duration-200 ${
            activeTab === "senin" ? "font-semibold" : "hover:text-gray-300"
          }`}
        >
          Senin İçin
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab("takip")}
          onKeyDown={(e) => {
            if (e.key === "Enter") setActiveTab("takip");
          }}
          className={`text-sm pb-1 cursor-pointer transition-colors duration-200 ${
            activeTab === "takip" ? "font-semibold" : "hover:text-gray-300"
          }`}
        >
          Takip Ettiklerin
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-hidden space-x-4 px-10">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-1 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-black p-1">
                <img
                  src={`https://i.pravatar.cc/150?img=${(user.id % 70) + 1}`}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-xs mt-1 w-16 text-center truncate select-text">
              {user.name.split(" ")[0]}
            </div>
          </div>
        ))}
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => scroll("left")}
        onKeyDown={(e) => {
          if (e.key === "Enter") scroll("left");
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-60 p-2 rounded-full z-10 hover:bg-opacity-80 cursor-pointer"
      >
        <FaChevronLeft className="text-white text-xl" />
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => scroll("right")}
        onKeyDown={(e) => {
          if (e.key === "Enter") scroll("right");
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-60 p-2 rounded-full z-10 hover:bg-opacity-80 cursor-pointer"
      >
        <FaChevronRight className="text-white text-xl" />
      </div>
    </div>
  );
};

export default StoryBar;
