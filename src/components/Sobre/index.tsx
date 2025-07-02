import logoSobre from "@/assets/img/LogoSobre.png"
import { useNavigate } from "react-router-dom"

export default function SobreAlerta() {
    const navigate = useNavigate();

    return (
        <div className=" min-h-screen flex flex-col md:flex-row items-center justify-between p-8 md:p-20 gap-10 bg-gradient-to-r from-green-100 to-green-50 font-[Poppins]">
            
            {/* Texto */}
            <div className="max-w-xl flex flex-col gap-5 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800">Sobre o Alerta Floresta</h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    O <span className="font-semibold text-green-700">Alerta Floresta</span> é uma plataforma digital que conecta tecnologia e consciência ambiental para prevenir queimadas no Brasil. 
                    Voltado a cidadãos, educadores e gestores, oferece dados atualizados, ferramentas de denúncia e conteúdos educativos. 
                    Nosso propósito é inspirar atitudes responsáveis e fortalecer a cultura de preservação das nossas florestas.
                </p>
                <button
                    className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={ () => {navigate("/denuncia")}}
                >
                    Faça sua denúncia
                </button>
            </div>

            {/* Logo com interação */}
            <div className="w-64 md:w-80 relative group">
                <img
                    src={logoSobre}
                    alt="Logo Alerta Floresta"
                    className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-500 to-green-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                ></div>
            </div>

        </div>
    )
}
