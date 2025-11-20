import { useState, useEffect } from "react";
import { MockStore } from "../../dados/MockStore.ts";
import { ListaParques, ListaTipos } from "../../dados/Enumerations.ts";

export default function PostagemForm({ postagem, onCancel, onSaved }) {

  const store = MockStore.getInstance();

  // ----------------- ESTADO -----------------
  const [form, setForm] = useState({
    parque: ListaParques[0],
    tipo: ListaTipos[0],
    titulo: "",
    descricao: "",
    foto: "",
    dataInicio: "",
    dataFim: ""
  });

  // ----------------- CARREGAR DADOS DA EDIÇÃO -----------------
  useEffect(() => {
    if (postagem) {
      setForm({
        parque: postagem.parque,
        tipo: postagem.tipo,
        titulo: postagem.titulo,
        descricao: postagem.descricao,
        foto: postagem.foto,
        dataInicio: postagem.dataInicio
          ? postagem.dataInicio.toISOString().substr(0, 10)
          : "",
        dataFim: postagem.dataFim
          ? postagem.dataFim.toISOString().substr(0, 10)
          : ""
      });
    }
  }, [postagem]);

  // ----------------- ATUALIZAR CAMPOS -----------------
  function atualizar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  // FOTO
  function handleFoto(e) {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setForm({ ...form, foto: url });
  }

  // ----------------- SALVAR -----------------
  function salvar() {
    const dados = {
      parque: form.parque,
      tipo: form.tipo,
      titulo: form.titulo,
      descricao: form.descricao,
      foto: form.foto,
      dataInicio: form.dataInicio ? new Date(form.dataInicio) : undefined,
      dataFim: form.dataFim ? new Date(form.dataFim) : undefined,
      dataPostagem: postagem ? postagem.dataPostagem : new Date()
    };

    if (postagem) {
      // EDIÇÃO
      store.editarPostagem(postagem.id, dados);
    } else {
      // CRIAÇÃO
      store.addPostagem(dados);
    }

    if (onSaved) onSaved();
  }

  // ----------------- UI -----------------
  return (
    <div className="bg-[#f6f3e7] p-6 rounded-xl shadow-md w-[420px]">

      <h2 className="text-2xl font-semibold text-[#1E4636] mb-5">
        {postagem ? "Editar Registro" : "Registro"}
      </h2>

      <div className="flex flex-col gap-3">

        {/* PARQUE */}
        <select
          className="input"
          value={form.parque}
          onChange={(e) => atualizar("parque", e.target.value)}
        >
          {ListaParques.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        {/* TÍTULO */}
        <input
          type="text"
          placeholder="Título"
          className="input"
          value={form.titulo}
          onChange={(e) => atualizar("titulo", e.target.value)}
        />

        {/* DESCRIÇÃO */}
        <textarea
          placeholder="Descrição"
          className="input h-24"
          value={form.descricao}
          onChange={(e) => atualizar("descricao", e.target.value)}
        />

        {/* TIPO */}
        <select
          className="input"
          value={form.tipo}
          onChange={(e) => atualizar("tipo", e.target.value)}
        >
          {ListaTipos.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* DATA INÍCIO */}
        <input
          type="date"
          className="input"
          value={form.dataInicio}
          onChange={(e) => atualizar("dataInicio", e.target.value)}
        />

        {/* DATA FIM */}
        <input
          type="date"
          className="input"
          value={form.dataFim}
          onChange={(e) => atualizar("dataFim", e.target.value)}
        />

        {/* FOTO */}
        <input
          type="file"
          accept="image/*"
          className="input"
          onChange={handleFoto}
        />

        {/* PREVIEW */}
        {form.foto && (
          <img
            src={form.foto}
            className="w-32 h-32 object-cover rounded-md self-center border"
            alt="preview"
          />
        )}

      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onCancel}
          className="font-semibold text-[#94a88a] hover:text-[#6f7f6a]"
        >
          CANCELAR
        </button>

        <button
          onClick={salvar}
          className="px-8 py-2 bg-[#1E4636] text-white rounded-md font-semibold hover:bg-[#163a2c] transition"
        >
          {postagem ? "SALVAR" : "GRAVAR"}
        </button>
      </div>
    </div>
  );
}
