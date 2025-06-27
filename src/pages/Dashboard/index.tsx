import React, { useEffect, useState } from "react";
import http from "../../http";
import FocoMunicipio from "../../interfaces/IFocoMunicipio";
import Destaques from "../../components/Destaques";
import GraficoBarras from "../../components/GraficoBarras";
import MainDashboard from "../../components/MainDashboard";
import Footer from "../../components/Footer";
import InfoErro from "../../components/InfoErro";
import { Cardio } from "ldrs/react";
import "ldrs/react/Cardio.css";
import Header from "../../components/HeaderDashboard";

export default function Dashboard() {
  // Estados
  const [dados, setDados] = useState<FocoMunicipio[]>([]); // Variável para os dados obtidos da API
  const [totalFocos, setTotalFocos] = useState(0);
  const [erro, setErro] = useState(false); // Variável para validação da conexão com a API
  const [carregando, setCarregando] = useState(true); // Variável para definir o carregamento

  // Faz uma requisição para a API de focos no Maranhão
  useEffect(() => {
    // Tenta se conectar com a API
    http
      .get<{ total: number; dados: FocoMunicipio[] }>("/focos-ma")
      .then((resposta) => {
        setDados(resposta.data.dados);
        setTotalFocos(resposta.data.total);
      })
      .catch(() => {
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <div className=" bg-gray-50 min-h-screen">
      <Header />
      <MainDashboard>
        {carregando ? (
          <div className="flex flex-col items-center justify-center py-50 text-gray-700">
            <Cardio size="120" stroke="10" speed="1" color="green" />
            <p className="mt-4 text-2xl font-medium">Só um momento...</p>
          </div>
        ) : erro ? (
          <InfoErro aoTentarNovamente={() => window.location.reload()} />
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-red-800">Destaques</h1>
            <Destaques dados={dados} />

            <div className="flex flex-col gap-6 mt-4">
              <GraficoBarras dados={dados} total={totalFocos} />
            </div>
          </>
        )}
      </MainDashboard>

      <Footer />
    </div>
  );
}
