import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function FiltrosListagem() {
  const [selected, setSelected] = useState("SOBRE");

  const botoes = [
    "SOBRE",
    "EVENTOS",
    "TRILHAS",
    "CACHOEIRAS",
    "BIODIVERSIDADE"
  ];

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