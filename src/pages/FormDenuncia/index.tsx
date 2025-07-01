import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IFormDenuncia from "@/interfaces/IFormDenuncia";
import FotosUploader from "@/components/FotosUploader";
import DateTimePicker from "@/components/DateTimePicker";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormDenuncia() {
  const [form, setForm] = useState<IFormDenuncia>({
    estado: "MA",
    cidade: "",
    local: "",
    dataHora: "",
    descricao: "",
    fotos: [],
    anonimo: false,
    nome: "",
    email: "",
  });

  const [cidades, setCidades] = useState<{ nome: string }[]>([]);
  const [data, setData] = useState<Date | undefined>();
  const [hora, setHora] = useState("");

  useEffect(() => {
    const fetchCidades = async () => {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/MA/municipios"
        );
        setCidades(response.data);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    fetchCidades();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataFormatada = data ? data.toLocaleDateString("pt-BR") : "";
    console.log("Data:", dataFormatada);
    console.log("Hora:", hora);
    console.log("Dados da denúncia:", form);
  };

  return (
    <>
      <Header />
      <main className="py-12 px-4 max-w-3xl mx-auto font-[Poppins]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-xl border border-[#acd137] hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-[#3f6b0d]">
                Denuncie uma queimada
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Contribua para proteger nossas florestas!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2">Estado</Label>
                    <Input
                      name="estado"
                      value={form.estado}
                      readOnly
                      className="bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <Label className="mb-2">Cidade</Label>
                    <Select
                      value={form.cidade}
                      onValueChange={(value) =>
                        setForm((prev) => ({ ...prev, cidade: value }))
                      }
                    >
                      <SelectTrigger className="w-full border rounded-lg px-3 py-2 font-[Poppins] transition-all focus:ring-2 focus:ring-[#acd137] focus:border-[#acd137] cursor-pointer">
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent
                        side="bottom"
                        className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
                      >
                        {cidades.map((cidade) => (
                          <SelectItem
                            key={cidade.nome}
                            value={cidade.nome}
                            className="cursor-pointer font-[Poppins] hover:bg-[#f0f5e3] focus:bg-[#f0f5e3] transition-colors"
                          >
                            {cidade.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="mb-2">Local da ocorrência</Label>
                  <Input
                    name="local"
                    placeholder="Informe o local da ocorrência"
                    value={form.local}
                    onChange={handleInputChange}
                    required
                    className="transition-all focus:ring-2 focus:ring-[#acd137]"
                  />
                </div>

                <DateTimePicker
                  date={data}
                  setDate={setData}
                  time={hora}
                  setTime={setHora}
                />

                <div>
                  <Label className="mb-2">Descrição</Label>
                  <Textarea
                    name="descricao"
                    placeholder="Descreva a ocorrência"
                    value={form.descricao}
                    onChange={handleInputChange}
                    required
                    className="transition-all focus:ring-2 focus:ring-[#acd137]"
                  />
                </div>

                <div>
                  <Label className="mb-2">Fotos (opcional)</Label>
                  <FotosUploader
                    fotos={form.fotos}
                    onFotoChange={(newFotos) =>
                      setForm((prev) => ({ ...prev, fotos: newFotos }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    id="anonimo"
                    checked={form.anonimo}
                    onCheckedChange={(checked: boolean) =>
                      setForm((prev) => ({ ...prev, anonimo: checked }))
                    }
                    className="cursor-pointer"
                  />
                  <Label>Enviar como anônimo?</Label>
                </div>

                {!form.anonimo && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <Label className="mb-2">Nome</Label>
                      <Input
                        name="nome"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={handleInputChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-[#acd137]"
                      />
                    </div>
                    <div>
                      <Label className="mb-2">Email</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-[#acd137]"
                      />
                    </div>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="bg-[#3f6b0d] text-white hover:bg-[#acd137] hover:text-black transition-all duration-300 mt-2 cursor-pointer"
                >
                  Enviar denúncia
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
