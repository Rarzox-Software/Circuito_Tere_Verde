import { useState } from "react";
import { MockStore } from "./MockStore.ts";

export default function CadastroAdminPage() {

  const store = MockStore.getInstance();

  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function salvar() {
    store.addAdministrador(nome, login, senha);

    // opcional: limpar campos
    setNome("");
    setLogin("");
    setSenha("");
  }

  return (
    <div>
      <h2>Cadastrar Administrador</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br />

      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      /><br />

      <button onClick={salvar}>Salvar Administrador</button>
    </div>
  );
}
