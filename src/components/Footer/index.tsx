import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logoFooter from "@/assets/img/logoDesafio5-2-2.png";

export default function Footer() {
  return (
    <footer className="bg-[#082916] text-gray-200 pt-12 pb-6 px-6 font-[Poppins] static">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logoFooter}
            alt="Logo alerta florestas"
            className="w-38 mb-4"
          />
          <p className="text-center md:text-left text-sm font-[Poppins]">
            Monitoramento inteligente para proteção ambiental.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">
            Links úteis
          </h4>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/denuncia"
                className="hover:text-green-400 transition-colors"
              >
                Denuncie já!
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="hover:text-green-400 transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">
            Fontes de Dados
          </h4>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            <li>
              <a
                href="https://www.ibge.gov.br/cidades-e-estados/ma.html"
                className="hover:text-green-400 transition-colors"
              >
                IBGE
              </a>
            </li>
            <li>
              <a
                href="https://www.neoenergia.com/w/queimadas-no-brasil-por-que-devemos-nos-preocupar-"
                className="hover:text-green-400 transition-colors"
              >
                Neoenergia
              </a>
            </li>
            <li>
              <a
                href="https://terrabrasilis.dpi.inpe.br/queimadas/bdqueimadas/"
                className="hover:text-green-400 transition-colors"
              >
                INPE
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">Contato</h4>
          <p className="text-sm mb-3 text-center md:text-left">
            alertafloresta@gmail.com.br
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/desafio-05-trilhas/front-end"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 font-[Poppins]">
        © 2025 Alerta Florestas — Todos os direitos reservados.
      </div>
    </footer>
  );
}
