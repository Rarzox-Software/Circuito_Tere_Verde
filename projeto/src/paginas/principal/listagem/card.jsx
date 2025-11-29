import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function formatText(text) {
  return text.split("\n").map((line, i) => (
    <>
      {line}
      <br key={i} />
    </>
  ));
}

export default function CardPostagem({ postagem, className, ...props }) {
  return (
    <Card
      className={className}
      {...props}
    >
      <CardHeader>
        <CardTitle>
          {postagem.titulo}
        </CardTitle>

        <CardContent>
          <img src={postagem.foto} className="max-w-2xs"></img>
        </CardContent>

        <CardDescription>
          {formatText(postagem.descricao)}
        </CardDescription>

        {/* <CardAction>Card Action</CardAction> */}

      </CardHeader>

      <CardFooter>
        <p>{postagem.dataPostagem.toLocaleString('pt-BR', { timezone: 'UTC' })}</p>
      </CardFooter>
      
    </Card>
  )
}