import IFocoMunicipio from "../../interfaces/IFocoMunicipio";
import Marquee from "react-fast-marquee";
import mapaIcon from "@/assets/img/ilustracaoMapa.svg";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Props {
  dados: IFocoMunicipio[];
}

export default function Destaques({ dados }: Props) {
  const top10 = dados.slice(0, 10);

  const abrirGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Marquee pauseOnHover speed={100} gradient={false} direction="right">
      <div className="flex gap-6 py-4 mb-10">
        {top10.map((item, index) => (
          <Card
            key={index}
            onClick={() => abrirGoogleMaps(item.latitude, item.longitude)}
            className="w-50 cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] hover:from-[#ffefef] hover:to-[#ffeaea] shadow-md hover:shadow-red-300"
            title="Clique para ver no mapa"
          >
            <CardContent className="flex flex-col items-center p-4">
              <img
                src={mapaIcon}
                alt="Ícone mapa"
                className="w-30 mx-auto mb-10 drop-shadow-md"
              />
              <CardTitle className="text-center font-[Poppins] text-gray-800">
                {item.municipio}
              </CardTitle>
              <CardDescription className="text-red-600 text-sm text-center font-[Poppins] mb-1">
                Foco de calor: <span className="font-bold">{item.focos}</span>
              </CardDescription>
              <CardDescription className="text-gray-600 text-sm text-center font-[Poppins]">
                {item.percentual}%
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Marquee>
  );
}
