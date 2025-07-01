import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IFormDenuncia from "@/interfaces/IFormDenuncia";
import FotosUploader from "@/components/FotosUploader";
import DateTimePicker from "@/components/DateTimePicker";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function FormDenuncia() {
  const [form, setForm] = useState<IFormDenuncia>({
    estado: "",
    cidade: "",
    local: "",
    dataHora: "",
    descricao: "",
    fotos: [],
    anonimo: false,
    nome: "",
    email: "",
  });

  const [data, setData] = useState<Date | undefined>();
  const [hora, setHora] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              <CardTitle className="text-2xl text-[#3f6b0d]">Denuncie uma queimada</CardTitle>
              <p className="text-gray-600 text-sm">Contribua para proteger nossas florestas!</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Estado</Label>
                    <Input
                      name="estado"
                      placeholder="Informe seu estado"
                      value={form.estado}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-[#acd137]"
                    />
                  </div>
                  <div>
                    <Label>Cidade</Label>
                    <Input
                      name="cidade"
                      placeholder="Informe a cidade"
                      value={form.cidade}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-[#acd137]"
                    />
                  </div>
                </div>

                <div>
                  <Label>Local da ocorrência</Label>
                  <Input
                    name="local"
                    placeholder="Informe o local da ocorrência"
                    value={form.local}
                    onChange={handleInputChange}
                    required
                    className="transition-all focus:ring-2 focus:ring-[#acd137]"
                  />
                </div>

                <DateTimePicker date={data} setDate={setData} time={hora} setTime={setHora} />

                <div>
                  <Label>Descrição</Label>
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
                  <Label>Fotos (opcional)</Label>
                  <FotosUploader 
                    fotos={form.fotos}
                    onFotoChange={(newFotos) => setForm((prev) => ({...prev, fotos: newFotos}))}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    id="anonimo"
                    checked={form.anonimo}
                    onCheckedChange={(checked: boolean) =>
                      setForm((prev) => ({ ...prev, anonimo: checked }))
                    }
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
                      <Label>Nome</Label>
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
                      <Label>Email</Label>
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
                  className="bg-[#3f6b0d] text-white hover:bg-[#acd137] hover:text-black transition-all duration-300 mt-2"
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
