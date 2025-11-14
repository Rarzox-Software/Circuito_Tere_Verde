import React from "react"
import { Link } from "react-router-dom"

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center w-full p-4 lg:px-20 bg-primary text-white">
      <h1 className="text-2xl font-bold">Circuito Terê Verde</h1>
      <div className="flex gap-2">
        <Link to='/'>Principal</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/login'>login</Link>
      </div>
    </header>
  )
}