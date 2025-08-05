import React, { useEffect, useState } from "react";

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="text-sm text-white w-[320px] px-2">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/150?img=${users[0]?.id + 20}`}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-semibold">
              {users[0]?.username || "Yükleniyor..."}
            </div>
            <div className="text-gray-400">{users[0]?.name || "İsim yok"}</div>
          </div>
        </div>
        <div className="text-blue-500 font-semibold text-xs cursor-pointer">
          Geçiş Yap
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-400 font-semibold text-sm">
          Senin için önerilenler
        </div>
        <div className="text-white text-xs font-semibold cursor-pointer">
          Tümünü Gör
        </div>
      </div>

      {users.slice(1, 6).map((user) => (
        <div key={user.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img
              src={`https://i.pravatar.cc/150?img=${user.id + 20}`}
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-white font-semibold text-sm">
                {user.username}
              </div>
              <div className="text-gray-400 text-xs">
                {user.company.name} takip ediyor
              </div>
            </div>
          </div>
          <div className="text-blue-500 text-xs font-semibold cursor-pointer">
            Takip Et
          </div>
        </div>
      ))}

      <div className="text-gray-500 text-xs mt-10 leading-5">
        <p>Hakkında . Yardım . Basın . API . İş Fırsatları . Gizlilik</p>
        <p>Koşullar . Konumlar . Dil . Meta Verified</p>
        <p className="mt-3"> 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default Suggestions;
