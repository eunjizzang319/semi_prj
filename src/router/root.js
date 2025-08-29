import { Children, lazy, Suspense } from "react";
const { createBrowserRouter } = require("react-router-dom");
const Main = lazy(() => import("../pages/MainPage"));
const User = lazy(() => import("../pages/UserPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Join = lazy(() => import("../pages/JoinPage"));
const UserUpdate = lazy(() => import("../pages/UserUpdatePage"));

//Suspense 중지 , Main Component 가져오기 전에는  Loading 을 띄운다
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "user",
    element: (
      <Suspense fallback={null}>
        <User />
      </Suspense>
    ),
  },
  {
    path: "user/update",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UserUpdate />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={null}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "join",
    element: (
      <Suspense fallback={null}>
        <Join />
      </Suspense>
    ),
  },
]);

export default root;
