var orderNoC = parseInt(Math.random() * 1000);

export const shopUsers = [
  {
    uno: 1,
    id: "aaa0828",
    name: "권기현",
    password: "0711",
    email: "aaa0828@test.com",
    birth: 1997 - 7 - 11,
    num: "010-1111-1111",
    address: "경기도 성남시",
    cart: [
      {
        orderNo: orderNoC,
        productName: "여름 반팔 티셔츠",
        price: "19,000",
        state: "배송 완료",
      },
      {
        orderNo: orderNoC + 1,
        productName: "여름 반바지",
        price: "29,000",
        state: "배송 완료",
      },
    ],
  },
  {
    uno: 2,
    id: "bbb0829",
    name: "곽은지",
    password: "0319",
    email: "bbb0829@test.com",
    birth: 1997 - 3 - 19,
    num: "010-2222-2222",
    address: "경기도 여주시",
    cart: [
      {
        orderNo: orderNoC,
        productName: "여름 원피스",
        price: "59,000",
        state: "배송 중",
      },
      {
        orderNo: orderNoC + 1,
        productName: "겨울 패딩",
        price: "109,000",
        state: "배송 완료",
      },
    ],
  },
  {
    uno: 3,
    id: "ccc0830",
    name: "전별",
    password: 1004,
    email: "ccc0830@test.com",
    birth: 2003 - 10 - 4,
    num: "010-3333-3333",
    address: "경기도 성남시",
    cart: [
      {
        orderNo: orderNoC,
        productName: "겨울 맨투맨",
        price: "49,000",
        state: "배송 중",
      },
      {
        orderNo: orderNoC + 1,
        productName: "청바지",
        price: "49,000",
        state: "배송 중",
      },
    ],
  },
];
