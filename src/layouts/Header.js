import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default Header;
