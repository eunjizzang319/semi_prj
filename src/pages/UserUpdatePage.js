import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainMenu from "../layouts/MainMenu";
import Footer from "../layouts/Footer";
import { shopUsers } from "../data/shopUsers";
import UserPage from "./UserPage";

const UserUpdatePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(shopUsers);
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((i) => ({ ...i, [name]: value }));
  };

  const saveHandler = (e) => {
    alert("회원 정보가 성공적으로 저장되었습니다.");
    setUser(shopUsers);
    // <UserPage />;
  };

  return (
    <div>
      <div className="bg-white font-sans min-h-screen">
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
                <label style={{ margin: 10 }}>
                  아이디:
                  <input
                    type="text"
                    value={user.id}
                    onChange={changeHandler}
                    className="font-semibold"
                  />
                </label>
                <br />
                <label style={{ margin: 10 }}>
                  이름:
                  <input
                    type="text"
                    value={user.name}
                    onChange={changeHandler}
                    className="font-semibold"
                  />
                </label>
                <br />
                <label style={{ margin: 10 }}>
                  이메일:
                  <input
                    type="text"
                    value={user.email}
                    onChange={changeHandler}
                    className="font-semibold"
                  />
                </label>
                <br />
                <label style={{ margin: 10 }}>
                  연락처:
                  <input
                    type="text"
                    value={user.num}
                    onChange={changeHandler}
                    className="font-semibold"
                  />
                </label>
                <br />
              </div>
            )}
            <div className="mt-4">
              <Link
                to="update"
                onClick={saveHandler}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                회원정보 저장하기
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserUpdatePage;
