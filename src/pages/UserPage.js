import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { shopUsers } from "../data/shopUsers";
import MainMenu from "../layouts/MainMenu";
import Footer from "../layouts/Footer";

const UserPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(shopUsers);
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((i) => ({ ...i, [name]: value }));
  };

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* 상단 헤더 */}
      <header className="bg-black text-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SEMIP</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-200 hover:text-white">
            홈
          </Link>
          <Link to="/cart" className="text-gray-200 hover:text-white">
            장바구니
          </Link>
          <Link to="/login" className="text-gray-200 hover:text-white">
            로그아웃
          </Link>
        </nav>
      </header>

      <MainMenu />

      {/* 메인 컨테이너 */}
      <main className="max-w-5xl mx-auto p-6">
        {/* 회원 정보 카드 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">회원 정보</h2>
          {user && (
            <div className="mb-4 p-3 border rounded text-gray-800">
              <p>
                <span className="font-semibold">아이디:</span> {user.id}
              </p>
              <p>
                <span className="font-semibold">이름:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">이메일:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">연락처:</span> {user.num}
              </p>
            </div>
          )}
          <div className="mt-4">
            <Link
              to="update"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              회원정보 수정
            </Link>
          </div>
        </div>
      </main>

      {/* 주문 내역 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">주문 내역</h2>
        {user && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-3">주문번호</th>
                <th className="p-3">상품명</th>
                <th className="p-3">가격</th>
                <th className="p-3">상태</th>
              </tr>
            </thead>
            <tbody>
              {user.cart.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3">{item.orderNo}</td>
                  <td className="p-3">{item.productName}</td>
                  <td className="p-3">{item.price}</td>
                  <td
                    className={`p-3 font-semibold ${
                      item.state === "배송 완료"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.state}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 배송지 관리 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">배송지 관리</h2>
        <p className="mb-2 text-gray-800">
          <span className="font-semibold">기본 배송지:</span> 서울시 성남구
          분당동 123-4
        </p>
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          배송지 변경
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default UserPage;
