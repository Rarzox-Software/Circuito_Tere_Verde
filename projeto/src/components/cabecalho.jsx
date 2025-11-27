import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import { MockStore } from "../dados/MockStore";

export default function Cabecalho() {

  const store = MockStore.getInstance();
  const navigate = useNavigate();
  const location = useLocation();

  const [logado, setLogado] = useState(store.estaLogado());

  // Detecta login/logout
  useEffect(() => {
    store.subscribe(() => {
      setLogado(store.estaLogado());
    });
  }, []);

  const estaNaPaginaPostagens = location.pathname === "/postagens";

  function sair() {
    store.logout();
    navigate("/");
  }

  return (
    <header className="flex justify-between items-center w-full p-4 lg:px-20 bg-primary text-white">

      <Link to="/">
        <Logo className="cursor-pointer" />
      </Link>

      <div className="flex gap-4 items-center">

        {logado && (
          <>
            {/* Só aparece se NÃO estiver na página de postagens */}
            {!estaNaPaginaPostagens && (
              <Link to="/postagens">Postagens</Link>
            )}

            <button onClick={sair}>Sair</button>
          </>
        )}

        {!logado && (
          <Link to="/login">Login</Link>
        )}

      </div>
    </header>
  );
}
