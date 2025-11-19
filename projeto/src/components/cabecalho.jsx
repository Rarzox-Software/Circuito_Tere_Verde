import React from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.svg?react'

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center w-full p-4 lg:px-20 bg-primary text-white">

      <Link to="/">
        <Logo className="cursor-pointer"/>
      </Link>

      <div className="flex gap-2">
        <Link to='/login'>login</Link>
        <Link to='/'>Adm</Link>
      </div>
    </header>
  )
}