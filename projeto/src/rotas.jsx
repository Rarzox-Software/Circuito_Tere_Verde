import { Routes, Route } from 'react-router-dom';
import Principal from './paginas/principal';
import Sobre from './paginas/sobre';
import Login from './paginas/login';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}