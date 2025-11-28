import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import BotaoParque from "../botaoParque"

import LogoSerraOrgaos from '../../../assets/logo-serra-orgaos.svg?react'
import LogoMontanhasTeresopolis from '../../../assets/logo-montanhas-teresopolis.svg?react'
import LogoTresPicos from '../../../assets/logo-tres-picos.svg?react'

import { MockStore } from "../../../dados/MockStore.ts";

export default function FiltrosListagem({ retornoFiltro }) {
  const store = MockStore.getInstance();

  const [filtroSelecionado, setFiltroSelecionado] = useState("SOBRE");
  const [parqueSelecionado, setParqueSelecionado] = useState("Parque Nacional da Serra dos Órgãos");

  const botoes = [
    "SOBRE",
    "EVENTOS",
    "TRILHAS",
    "CACHOEIRAS",
    "BIODIVERSIDADE"
  ];

  const parques = [
    { label: "Parque Nacional da Serra dos Órgãos", logo: <LogoSerraOrgaos /> },
    { label: "Parque Natural Municipal Montanhas de Teresópolis", logo: <LogoMontanhasTeresopolis /> },
    { label: "Parque Estadual dos Três Picos", logo: <LogoTresPicos /> }
  ];

  useEffect(() => {
    retornoFiltro(store.getPostagensPorTipo(filtroSelecionado));
  }, [filtroSelecionado, retornoFiltro, store]);

  return (
    <>
      <div className="w-full md:w-3/4 lg:w-3/6 flex justify-center">
        {parques.map(({ label, logo }, index) => (
          <BotaoParque
            key={index}
            logo={logo}
            selecionado={parqueSelecionado === label}
            onClick={() => setParqueSelecionado(label)}
          >
            {label}
          </BotaoParque>
        ))}
      </div>
      <div className="p-2 rounded-md bg-secondary flex flex-wrap justify-center gap-2 space-between w-full">
        {botoes.map((label, index) => (
          <Button
            key={index}
            onClick={() => setFiltroSelecionado(label)}
            variant={filtroSelecionado === label ? "selected" : "default"}
          >
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}