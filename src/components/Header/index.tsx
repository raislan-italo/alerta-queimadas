import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import logoHeader from "@/assets/img/logo3.png";
import homeIcon from "@/assets/icons/home.svg";
import dashboardIcon from "@/assets/icons/dashboard.svg";
import denunciaIcon from "@/assets/icons/denuncia.svg";
import sobreIcon from "@/assets/icons/sobre.svg";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Verificar se usuário está logado (localStorage/sessionStorage)
  useEffect(() => {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    setUsuarioLogado(!!token);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    // Limpar dados de autenticação
    localStorage.removeItem("authToken");
    localStorage.removeItem("usuario");
    setUsuarioLogado(false);
    navigate("/");
    window.location.reload();
  };

  return (
      <header className="bg-[#082916] text-white px-6 py-4 flex justify-between items-center shadow relative z-50 font-main text-e">
        <div className="w-80 ">
          <img src={logoHeader} alt="Logo do projeto"/>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuAberto ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              menuAberto ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              menuAberto ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        <nav
          className={`${
            menuAberto ? "flex" : "hidden"
          } absolute top-16 left-0 w-full bg-[#082916] flex-col items-center gap-4 py-4
        md:static md:flex md:flex-row md:gap-4 md:bg-transparent md:w-auto`}
        >
          {[ 
            { to: "/", label: "Início", icon: homeIcon },
            { to: "/dashboard", label: "Dashboard", icon: dashboardIcon },
            { to: "/sobre", label: "Sobre", icon: sobreIcon },
            { to: "/denuncia", label: "Denuncie", icon: denunciaIcon },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm border border-[#ACD137] transition-all duration-300 ease-in-out hover:bg-[#ACD137] hover:text-black hover:scale-105  ${
                location.pathname === link.to ? "bg-[#585D35]" : "bg-[#082916]"
              }`}
            >
              {link.icon && (
                <img
                  src={link.icon}
                  alt={`Ícone ${link.label.toLowerCase()}`}
                  className="w-4 h-4"
                />
              )}
              {link.label}
            </Link>
          ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="cursor-pointer transition-transform duration-300 hover:scale-110 border rounded-full border-[#ACD137] px-2 py-2">
              <FaUser className="w-6 h-6 text-white hover:text-[#ACD137] transition-colors duration-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 bg-[#082916] text-white border border-[#ACD137] rounded-md shadow-lg animate-fade-in text-center"
            sideOffset={8}
            align="end"
            alignOffset={-20}
          >
            {usuarioLogado ? (
              <>
                <DropdownMenuItem className="px-4 py-2 hover:bg-[#ACD137] hover:text-black cursor-pointer rounded transition-all">
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-[#ACD137] hover:text-black cursor-pointer rounded transition-all">
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-[#ACD137] hover:text-black cursor-pointer rounded transition-all">
                  Minhas denúncias
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="px-4 py-2 hover:bg-[#ACD137] hover:text-black cursor-pointer rounded transition-all"
                  onClick={handleLogout}
                >
                  Sair
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem
                className="px-4 py-2 hover:bg-[#ACD137] hover:text-black cursor-pointer rounded transition-all"
                onClick={handleLogin}
              >
                Fazer login
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}