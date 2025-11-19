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
    <div className="flex gap-2 bg-secondary p-2 rounded-md">
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