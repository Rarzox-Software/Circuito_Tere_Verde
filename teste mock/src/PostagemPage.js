import { useState } from "react";
import { MockStore } from "./MockStore.ts";
import { Parque, TipoPostagem, ListaParques, ListaTipos } from "./Enumerations.ts";

export default function PostagemPage() {

  const store = MockStore.getInstance();

  const [parque, setParque] = useState(Parque.PNSO);
  const [tipo, setTipo] = useState(TipoPostagem.Trilhas);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(""); 

  function handleFoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setFoto(url);
  }

  function salvar() {
    store.addPostagem({
      parque,
      tipo,
      titulo,
      descricao,
      foto,  
      dataInicio: undefined,
      dataFim: undefined
    });
  }

  return (
    <div>
      <h2>Criar Postagem</h2>

      <select value={parque} onChange={(e) => setParque(e.target.value)}>
        {ListaParques.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
      <br />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        {ListaTipos.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <br />

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></textarea>
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={handleFoto}
      />
      <br />

      {foto && <img src={foto} width={150} alt="preview" />}

      <br />

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
