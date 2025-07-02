import logoSobre from "@/assets/img/LogoSobre.png"

export default function SobreAlerta() {
    return (
        <div className="flex gap-30 font-[Poppins] items-center p-20 justify-around bg-[#f0f0f0] md:flex-row flex-col">
            <div className="w-3xl flex flex-col gap-5 p-5">
                <h1 className="text-3xl font-semibold">Sobre</h1>
                    <p className="text-xl">O <span className="text-xl">Alerta Floresta</span> é uma plataforma digital voltada à conscientização, monitoramento e prevenção de queimadas no Brasil. Criado para cidadãos, educadores, estudantes e gestores públicos,
                        o site oferece informações confiáveis, dados atualizados, ferramentas de denúncia (anônima ou identificada). Nosso objetivo é mobilizar ações concretas em defesa das florestas e incentivar
                        uma cultura de preservação e responsabilidade ambiental, com o apoio da tecnologia e da participação ativa da população.
                    </p>
            </div>

            <div className="w-xl">
                <img src={logoSobre} alt="logo Alerta Floresta"/>
            </div>
        </div>
    )


}