import React, { useMemo } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import MainMenu from '../layouts/MainMenu';

// 메인 화면
const MainPage = () => {
  const authUser = useMemo(() => {
    try {
      return JSON.parse(sessionStorage.getItem('authUser') || 'null');
    } catch {
      return null;
    }
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <MainMenu />

      {/* 로그인 아이디 표시 영역 */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        {authUser ? (
          <div className="mb-4 p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-800">
            <span className="font-semibold">현재 로그인 ID:</span> {authUser.id}
          </div>
        ) : (
          <div className="mb-4 p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-600">
            로그인 후 이용해 주세요.
          </div>
        )}
      </div>

      {/* 메인 배너 */}
      <div
        className="flex items-center justify-center h-80 bg-cover bg-center text-white text-3xl font-bold"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1400x350/000000/FFFFFF?text=Modern+Promo+Banner')",
        }}
      >
        2025 NEW COLLECTION
      </div>
      {/* 추천 상품 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold border-l-4 border-black pl-3 mb-6 text-gray-900">
          추천 상품
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: '상품 1', price: '₩29,900' },
            { name: '상품 2', price: '₩49,900' },
            { name: '상품 3', price: '₩19,900' },
            { name: '상품 4', price: '₩99,900' },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${p.name}`}
                alt={p.name}
                className="w-full rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-900">
                  {p.name}
                </h3>
                <p className="text-black font-bold">{p.price}</p>
                <button className="inline-block mt-3 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                  장바구니
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
