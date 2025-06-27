import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#082916] text-white px-6 py-4 flex justify-between items-center shadow relative">
      <div>
        <img src="/src/assets/img/logo.svg" alt="Logo do projeto" />
      </div>

      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuAberto ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${
            menuAberto ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuAberto ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`${
          menuAberto ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-[#082916] flex-col items-center gap-4 py-4 md:static md:flex md:flex-row md:gap-4 md:bg-transparent md:w-auto`}
      >
        <Link
          to="/"
          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm border border-[#ACD137] ${
            location.pathname === "/"
              ? "bg-[#585D35]"
              : "bg-[#082916]"
          }`}
        >
          <img
            src="/src/assets/icons/home.svg"
            alt="Icone home"
            className="w-6 h-6"
          />
          Início
        </Link>
        <Link
          to="/dashboard"
          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm border border-[#ACD137] ${
            location.pathname === "/dashboard"
              ? "bg-[#585D35]"
              : "bg-[#082916]"
          }`}
        >
          <img
            src="/src/assets/icons/dashboard.svg"
            alt="Icone dashboard"
            className="w-6 h-6"
          />
          Dashboard
        </Link>
        <Link
          to="/sobre"
          className={`px-3 py-1 rounded-lg text-sm border border-[#ACD137] ${
            location.pathname === "/sobre"
              ? "bg-[#585D35]"
              : "bg-[#082916]"
          }`}
        >
          Sobre
        </Link>
        <div className="ml-0 md:ml-4 text-xl ">
          <img
            src="/src/assets/icons/user.svg"
            alt="Icone usuário"
            className="w-8 h-8"
          />
        </div>
      </nav>
    </header>
  );
}
