import { MockStore } from "./MockStore.ts";

export default function ListaPostagensPage() {

  const store = MockStore.getInstance();
  const postagens = store.getTodasPostagens();

  return (
    <div>
      <h2>Postagens</h2>

      {postagens.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>{p.titulo}</h3>
          <p>{p.descricao}</p>
          <p>
            <strong>Parque:</strong> {p.parque}
          </p>
          <p>
            <strong>Tipo:</strong> {p.tipo}
          </p>
          {p.foto && <img src={p.foto} width={150} alt="foto" />}
        </div>
      ))}
    </div>
  );
}
