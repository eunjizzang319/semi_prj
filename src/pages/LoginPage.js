import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const popup = () => {
    alert("성공적으로 가입되었습니다.");
  };
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 상단 헤더 */}
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800 shadow-sm">
        <div className="text-2xl font-bold">SEMIP</div>
        <div className="flex-1 mx-8"></div>
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

      {/* 로그인 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-96 p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">로그인</h2>

            <form>
              {/* 아이디 */}
              <div className="mb-4 text-left">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  아이디
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="아이디를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 */}
              <div className="mb-4 text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  비밀번호
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 로그인 버튼 */}
              <Link
                to="/"
                onClick={popup}
                type="button"
                className="w-full py-3 mt-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                로그인
              </Link>
            </form>

            {/* 추가 링크 */}
            <div className="mt-4 text-sm text-gray-600">
              <Link to="/join" className="text-black hover:underline">
                회원가입
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <a href="#" className="text-black hover:underline">
                비밀번호 찾기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
