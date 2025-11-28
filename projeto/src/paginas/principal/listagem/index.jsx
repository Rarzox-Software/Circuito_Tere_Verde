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
    <>
      <FiltrosListagem retornoFiltro={retornoFiltro} />
      <div className="flex flex-col gap-2 w-full">
        {postagens.map((post) => (
          <CardPostagem key={post.id} postagem={post} />
        ))}
      </div>
    </>
  )
}