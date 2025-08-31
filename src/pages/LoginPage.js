import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MainMenu from '../layouts/MainMenu';
import Header from '../layouts/Header';
import { shopUsers as seedUsers } from '../data/shopUsers';

// 로그인 화면
const LoginPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loginForm, setLoginForm] = useState({ id: '', password: '' });
  const [welcomeMsg, setWelcomeMsg] = useState('');

  useEffect(() => {
    const raw = sessionStorage.getItem('joinTemp');
    if (raw) {
      try {
        const saved = JSON.parse(raw);
        // 가입 직후 state가 오면 환영 메시지
        if (state?.fromJoin && saved?.name) {
          setWelcomeMsg(`${saved.name}님, 가입을 환영합니다!`);
        }
        setLoginForm((p) => ({ ...p, id: saved?.id || saved?.userId || '' }));
      } catch {}
    }
  }, [state]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!loginForm.id || !loginForm.password) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    let users = [];
    const usersRaw = sessionStorage.getItem('shopUsers');
    if (usersRaw) {
      try {
        users = JSON.parse(usersRaw) || [];
      } catch {}
    }

    if (users.length === 0) users = seedUsers;

    const found = users.find(
      (u) =>
        (u.id === loginForm.id || u.userId === loginForm.id) &&
        String(u.password) === String(loginForm.password)
    );

    if (!found) {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }

    // 로그인 성공: 세션에 현재 로그인 사용자 저장
    sessionStorage.setItem('authUser', JSON.stringify(found));
    alert('성공적으로 로그인되었습니다.');
    navigate('/'); // 메인으로 이동
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      <MainMenu />

      {/* 로그인 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-96 p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">로그인</h2>
            {welcomeMsg && (
              <p className="mb-4 text-sm text-green-600">{welcomeMsg}</p>
            )}

            <form onSubmit={onSubmit}>
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
                  name="id"
                  value={loginForm.id}
                  onChange={changeHandler}
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
                  type="password"
                  id="password"
                  name="password"
                  value={loginForm.password}
                  onChange={changeHandler}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                로그인
              </button>
            </form>

            {/* 추가 링크 */}
            <div className="mt-4 text-sm text-gray-600">
              <Link to="/join" className="text-black hover:underline">
                회원가입
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              {/* 비밀번호 찾기 화면 아직 구현안함 */}
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
