import { useContext } from "react"
import { UsuarioContext } from "@/contexts/usuarioContext"

export default function Login() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="bg-primary text-white">Página Login</h1>
      <h1 className="bg-destructive text-white">Seu usuário é {usuario.nome}</h1>
    </div>
  )
}