import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layouts/Header';
import MainMenu from '../layouts/MainMenu';
import Footer from '../layouts/Footer';

// 회원가입 화면
// 화면 작동 순서 : 검증 → 저장(shopUsers/joinTemp) → 알림 → 폼 초기화 → 로그인으로 이동
const initialForm = {
  name: '',
  id: '',
  password: '',
  password2: '',
  email: '',
  birth: '',
  phone: '',
  address: '',
  agree: false,
};

const JoinPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      alert('이용약관에 동의해주세요.');
      return;
    }
    if (!form.name || !form.id || !form.password || !form.password2) {
      alert('필수 항목을 입력해주세요.');
      return;
    }
    if (form.password !== form.password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 기존 사용자 목록 불러오기
    let users = [];
    try {
      const raw = sessionStorage.getItem('shopUsers');
      users = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }

    // uno 자동 증가
    const nextUno = users.length
      ? Math.max(...users.map((u) => u.uno || 0)) + 1
      : 1;

    // 저장할 사용자 객체 (cart는 빈 배열로 시작)
    const savedUser = {
      uno: nextUno,
      id: form.id,
      name: form.name,
      password: String(form.password),
      email: form.email,
      birth: form.birth, // YYYY-MM-DD
      num: form.phone, // 기존 스키마 호환용
      phone: form.phone, // 현재 폼 필드명도 함께 보관
      address: form.address,
      cart: [],
    };

    // 세션 저장
    const updated = [...users, savedUser];
    sessionStorage.setItem('shopUsers', JSON.stringify(updated)); // 전체 사용자 목록
    sessionStorage.setItem('joinTemp', JSON.stringify(savedUser)); // 방금 가입자

    // 안내 → 초기화 → 로그인 이동
    alert('가입을 환영합니다!');
    setForm(initialForm);
    navigate('/login', {
      state: { fromJoin: true, name: savedUser.name, email: savedUser.email },
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      <MainMenu />
      {/* 회원가입 섹션 */}
      <section className="relative z-10 bg-white py-20">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-xl rounded-xl w-[450px] p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">회원가입</h2>

            {/* onSubmit 연결 */}
            <form className="text-left space-y-4" onSubmit={onSubmit}>
              {/* 이름 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={form.name}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 아이디 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  아이디
                </label>
                <input
                  name="id"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={form.id}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={form.password}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  비밀번호 확인
                </label>
                <input
                  name="password2"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  value={form.password2}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={form.email}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 생년월일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  생년월일
                </label>
                <input
                  name="birth"
                  type="date"
                  value={form.birth}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 휴대폰 번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  휴대폰 번호
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="010-1234-5678"
                  value={form.phone}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 주소 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주소
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="배송지 주소를 입력하세요"
                  value={form.address}
                  onChange={changeHandler}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* 약관 동의 */}
              <div className="mt-6">
                <label className="flex items-start space-x-2">
                  <input
                    name="agree"
                    type="checkbox"
                    value={form.agree}
                    onChange={changeHandler}
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
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              >
                가입 완료
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JoinPage;
