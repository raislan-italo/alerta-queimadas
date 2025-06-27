import IFocoMunipio from "../../interfaces/IFocoMunicipio";

interface Props {
  dados: IFocoMunipio[];
}

export default function Destaques({ dados }: Props) {
  const top5 = dados.slice(0, 5);

  const abrirGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 mb-8">
      {top5.map((item, index) => (
        <div
          key={index}
          onClick={() => abrirGoogleMaps(item.latitude, item.longitude)}
          className="bg-white p-4 rounded-xl shadow cursor-pointer hover:scale-105 transition"
          title="Clique para ver no mapa"
        >
          <img src="/src/assets/img/ilustracaoMapa.svg" alt="mapa" className="w-25 mx-auto mb-2" />
          <p className="font-bold text-center font-[Poppins]">{item.municipio}</p>
          <p className="text-red-600 text-sm text-center font-[Poppins]">Foco de calor: {item.focos}</p>
          <p className="text-gray-600 text-sm text-center font-[Poppins]">Percentual: {item.percentual}%</p>
        </div>
      ))}
    </div>
  );
}