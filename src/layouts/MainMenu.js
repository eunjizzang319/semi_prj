import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;
