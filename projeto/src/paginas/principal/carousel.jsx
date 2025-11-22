import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CustomCarousel() {
  return (
    <Carousel
      className="w-full relative mx-auto overflow-hidden"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}>
      <CarouselContent className="overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              Teste <br />
              teste
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-50" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-50" />
    </Carousel>
  )
}
