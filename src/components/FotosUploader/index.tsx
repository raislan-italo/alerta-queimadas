import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Camera } from "lucide-react";
import { Input } from "../ui/input";

interface Props {
  onFotoChange: (files: File[]) => void;
  fotos: File[];
}

export default function FotosUploader({ onFotoChange, fotos }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(evento.target.files || []);

    // Limitar 3 fotos
    if (newFiles.length + fotos.length > 3) {
      alert("Você pode enviar no máximo 3 fotos");
      return;
    }

    onFotoChange([...fotos, ...newFiles]);
  };

  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 border-2 border-[#acd137] hover:bg-[#acd137] hover:text-black transition-all duration-300 py-6"
      >
        <Camera className="w-6 h-6" />
        Tirar foto ou enviar
      </Button>

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        multiple
        onChange={handleFileChange}
      />

      <p className="text-sm text-gray-600">
        Máx: 3 fotos. Fotos adicionadas: {fotos.length}
      </p>

      <div className="flex gap-2 flex-wrap">
        {fotos.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Foto ${index + 1}`}
            className="w-20 h-20 object-cover rounded shadow border"
          />
        ))}
      </div>
    </div>
  );
}
