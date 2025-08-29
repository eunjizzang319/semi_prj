import React from "react";
import { Link } from "react-router-dom";

const JoinPage = () => {
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

      {/* 회원가입 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-[450px] p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">회원가입</h2>

            <form className="text-left space-y-4">
              {/* 이름 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 아이디 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  아이디
                </label>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 생년월일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  생년월일
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 휴대폰 번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  휴대폰 번호
                </label>
                <input
                  type="tel"
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 주소 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주소
                </label>
                <input
                  type="text"
                  placeholder="주소를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 약관 동의 */}
              <div className="mt-6">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-black border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    [필수] 이용약관에 동의합니다.
                  </span>
                </label>
                <div className="mt-2 p-3 border border-gray-300 rounded-lg h-24 overflow-y-auto text-sm text-gray-600 bg-gray-50">
                  여기에 이용약관 내용을 넣으시면 됩니다. <br />
                  회원은 사이트를 이용함에 있어 법령과 공공질서에 위배되는
                  행위를 하여서는 아니됩니다...
                </div>
              </div>

              {/* 가입 완료 버튼 */}
              <Link
                to="/login"
                type="submit"
                className="w-full py-3 mt-6 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                가입 완료
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black text-gray-300 text-center py-6 mt-12">
        <p>ⓒ 2025 SEMIP. All rights reserved.</p>
        <p className="mt-1">고객센터: 1234-5678 | 이메일: help@shop.com</p>
      </footer>
    </div>
  );
};

export default JoinPage;
