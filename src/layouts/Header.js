import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800 shadow-sm">
        <div className="text-2xl font-bold">SEMIP</div>

        {/* 상단 메뉴 */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-200 font-medium hover:text-white"
          >
            로그인
          </Link>
          <Link
            to="/join"
            className="text-gray-200 font-medium hover:text-white"
          >
            회원가입
          </Link>
          <Link
            to="/cart"
            className="text-gray-200 font-medium hover:text-white"
          >
            장바구니
          </Link>
        </div>
      </div>

      {/* 메인 메뉴 */}
      <nav className="bg-white shadow border-b border-gray-200">
        <ul className="flex justify-center">
          {[
            { name: "Top", path: "top" },
            { name: "Bottom", path: "bottom" },
            { name: "Outer", path: "outer" },
            { name: "Acc", path: "acc" },
            { name: "Event", path: "event" },
            { name: "My Page", path: "user" },
          ].map((menu) => (
            <li key={menu.path}>
              <Link
                to={`/${menu.path}`}
                className="block px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
