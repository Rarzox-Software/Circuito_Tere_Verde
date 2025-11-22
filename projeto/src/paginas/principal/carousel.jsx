import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { MockStore } from "../../dados/MockStore.ts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CustomCarousel() {
  
  const store = MockStore.getInstance(); // acessa dados mocado
  const postagens = store.getUltimasPostagens();  // pega as 5 últimas Postagens
  
  return (
    <Carousel
      className="w-3/4 min-h-60"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {postagens.map((post) => (
          <CarouselItem key={post.id}>
            <div className="p-4 bg-white rounded-xl shadow-md min-h-40">
              <h2 className="text-xl font-bold text-primary">{post.titulo}</h2>
              <p className="text-gray-700 mt-2">{post.descricao}</p>
              <img src={post.foto} className="w-100 h-100 object-cover rounded-lg mx-auto" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
