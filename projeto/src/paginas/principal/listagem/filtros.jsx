import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { MockStore } from "../../../dados/MockStore.ts";

export default function FiltrosListagem({ retornoFiltro }) {
  const store = MockStore.getInstance(); // acessa dados mocado

  const [selected, setSelected] = useState("SOBRE");

  const botoes = [
    "TODOS", 
    "TRILHAS",
    "CACHOEIRAS",
    "BIODIVERSIDADE",
    "EVENTOS",
    "NOVIDADES",
    "ATRAÇÕES",
    "SOBRE"
  ];

  useEffect(() => {
    //retornoFiltro(store.getPostagensPorTipo(selected));
  }, [selected, retornoFiltro, store]);

  return (
    <div className="p-2 rounded-md bg-secondary flex flex-wrap justify-center gap-2">
      {botoes.map(label => (
        <Button
          key={label}
          onClick={() => setSelected(label)}
          variant={selected === label ? "selected" : "default"}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}