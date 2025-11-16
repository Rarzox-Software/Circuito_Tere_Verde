import { useState } from "react";
import { MockStore } from "./MockStore.ts";

export default function LoginPage() {

  const store = MockStore.getInstance();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    store.login(login, senha);
  }

  return (
    <div>
      <h2>Login</h2>

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

      <button onClick={fazerLogin}>Entrar</button>
    </div>
  );
}
