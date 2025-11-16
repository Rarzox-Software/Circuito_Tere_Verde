import './App.css';
import { MockStore } from "./MockStore.ts";
import { useState } from 'react';

import LoginPage from './LoginPage';
import PostagemPage from './PostagemPage';
import ListaPostagensPage from './ListaPostagensPage';
import CadastroAdminPage from "./CadastroAdminPage";

function App() {

  const store = MockStore.getInstance();

  const [tela, setTela] = useState("lista");

  return (
    <div className="App">
      
      <p>Usuário logado: {store.estaLogado() ? "Sim" : "Não"}</p>

      <button onClick={() => setTela("lista")}>Postagens</button>
      <button onClick={() => setTela("postagem")}>Criar Postagem</button>
      <button onClick={() => setTela("admin")}>Cadastrar Admin</button>
      <button onClick={() => setTela("login")}>Login</button>

      <hr />

      {tela === "login" && <LoginPage />}
      {tela === "admin" && <CadastroAdminPage />}
      {tela === "postagem" && <PostagemPage />}
      {tela === "lista" && <ListaPostagensPage />}
      
    </div>
  );
}

export default App;
