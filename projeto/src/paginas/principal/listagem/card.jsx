import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardPostagem({ postagem, className }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{postagem.titulo}</CardTitle>
        <CardDescription>{postagem.descricao}</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <img src={postagem.foto} className="max-w-2xs"></img>
      </CardContent>
      <CardFooter>
        <p>{postagem.dataPostagem.toLocaleString('pt-BR', { timezone: 'UTC' })}</p>
      </CardFooter>
    </Card>
  )
}