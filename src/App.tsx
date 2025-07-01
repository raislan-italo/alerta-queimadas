import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import Denuncia from "./pages/FormDenuncia";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={ <Home /> }/>
      <Route path="/denuncia" element={ <Denuncia/> } />
      <Route path="/sobre" element={ <Sobre /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
    </Routes>
  );
}

export default App;
