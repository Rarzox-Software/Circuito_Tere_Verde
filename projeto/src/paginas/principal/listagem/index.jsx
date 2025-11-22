import { useState, useCallback } from "react"
import FiltrosListagem from "./filtros"
import CardPostagem from "./card"

import { MockStore } from "../../../dados/MockStore.ts";

export default function Listagem() {
  const store = MockStore.getInstance();
  const [postagens, setPostagens] = useState(store.getTodasPostagens());

  const retornoFiltro = useCallback((lista) => {
    setPostagens(lista);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <FiltrosListagem retornoFiltro={retornoFiltro} />
      {postagens.map((post) => (
        <CardPostagem key={post.id} postagem={post} />
      ))}
    </div>
  )
}