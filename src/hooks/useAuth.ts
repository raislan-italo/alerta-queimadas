import { useState, useEffect } from "react";

interface Usuario {
  nome: string;
  email: string;
  role?: string;
  id?: string;
  loggedIn: boolean;
}

export default function useAuth() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("ecodenunciaUser");

    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  function login(userData: Usuario, token: string) {
    const newUser = {
      ...userData,
      loggedIn: true,
      token,
    };
    localStorage.setItem("ecodenunciaUser", JSON.stringify(newUser));
    setUsuario(newUser);
  }

  function logout() {
    localStorage.removeItem("ecodenunciaUser");
    setUsuario(null);
    window.location.reload();
  }

  return { usuario, login, logout };
}
