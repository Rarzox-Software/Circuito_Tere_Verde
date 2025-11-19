import React from "react"
import Carousel from "./carousel"
import BotaoParque from "./botaoParque"
import Listagem from "./listagem"

import LogoSerraOrgaos from '../../assets/logo-serra-orgaos.svg?react'
import LogoMontanhasTeresopolis from '../../assets/logo-montanhas-teresopolis.svg?react'
import LogoTresPicos from '../../assets/logo-tres-picos.svg?react'

export default function Principal() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Carousel />
      <div className="w-full md:w-3/4 lg:w-3/6 flex justify-between">
        <BotaoParque logo={<LogoSerraOrgaos />} />
        <BotaoParque logo={<LogoMontanhasTeresopolis />} />
        <BotaoParque logo={<LogoTresPicos />} />
      </div>
      <div>
        <Listagem />
      </div>
    </div>
  )
}