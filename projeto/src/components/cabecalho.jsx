import React from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.svg?react'
import Container from "./container"

export default function Cabecalho() {
  return (
    <header className="w-full bg-primary">
      <Container className="flex justify-between items-center py-4  text-white">
        <Link to="/">
          <Logo className="cursor-pointer" />
        </Link>

        <div className="flex gap-2">
          <Link to='/login'>login</Link>
          <Link to='/'>Adm</Link>
        </div>
      </Container>
    </header>
  )
}