import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logoFooter from "@/assets/img/logoDesafio5-2.png";

export default function Footer() {
  return (
    <footer className="bg-[#082916] text-gray-200 pt-12 pb-6 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo e Descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logoFooter} alt="Logo alerta florestas" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed">
            Monitoramento inteligente para proteção ambiental.
          </p>
        </div>
    
        {/* Links Úteis */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-white">Links úteis</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-400 transition-colors">Início</Link></li>
            <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link></li>
            <li><Link to="/denuncia" className="hover:text-green-400 transition-colors">Denuncie já!</Link></li>
            <li><Link to="/sobre" className="hover:text-green-400 transition-colors">Sobre</Link></li>
          </ul>
        </div>

        {/* Fontes de Dados */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-white">Fontes de Dados</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400 transition-colors">IBGE</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Brasil.IO</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">INPE</a></li>
          </ul>
        </div>

        {/* Contato e redes */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 text-white">Contato</h4>
          <p className="text-sm mb-4">contato@alertafloresta.com.br</p>
          <div className="flex gap-4 text-xl">
            <a href="mailto:contato@alertafloresta.com.br" className="hover:text-green-400 transition-colors">
              <FaEnvelope />
            </a>
            <a href="https://github.com/desafio-05-trilhas/front-end" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 Alerta Florestas — Todos os direitos reservados
      </div>
    </footer>
  );
}
