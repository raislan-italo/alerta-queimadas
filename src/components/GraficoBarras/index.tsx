import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Info } from "lucide-react";
import FocoMunicipio from "../../interfaces/IFocoMunicipio";
import { useState } from "react";

interface GraficoBarrasProps {
  dados: FocoMunicipio[];
  total: number;
}

export default function GraficoBarras({ dados, total }: GraficoBarrasProps) {
  const top25 = dados

  // Controle manual para abrir no hover
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl w-full font-[Poppins] relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold pl-2 md:pl-4 text-gray-800">
          Total de Focos: <span className="text-[#e62e00]">{total}</span>
        </h2>

        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger asChild>
            <button
              onMouseEnter={() => setOpenPopover(true)}
              onMouseLeave={() => setOpenPopover(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#8c8c8c] text-white hover:bg-[#cc2900] transition-all shadow-md cursor-pointer"
              aria-label="Informações sobre focos"
            >
              <Info className="w-5 h-5" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="max-w-xs p-4 bg-[#fff8f5] text-[#333] border border-[#e62e00] rounded-xl shadow-xl font-[Poppins]"
            sideOffset={8}
          >
            <p className="text-sm">
              <strong className="text-[#e62e00]">Focos de queimadas</strong> são pontos de calor detectados por satélites. Eles indicam locais com fogo ativo ou calor anormal, podendo ser incêndios florestais ou queimadas agrícolas.
            </p>
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full h-[500px] sm:h-[800px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={top25}
            margin={{
              top: 10,
              right: 10,
              left: 30,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f2" />
            <XAxis
              dataKey="municipio"
              angle={-40}
              textAnchor="end"
              interval={1}
              tick={{
                fill: "#333",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            />
            <YAxis tick={{ fill: "#333", fontFamily: "Poppins", fontSize: 12 }} />
            <RechartsTooltip
              contentStyle={{
                background: "#e62e00",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="focos" radius={[4, 4, 0, 0]}>
              {top25.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#b30000" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
