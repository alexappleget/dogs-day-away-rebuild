"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent } from "../Card/card";
import { cn } from "@/lib/utils";

const carouselImages = [
  "https://dogsdayawaytx.com/wp-content/uploads/2023/06/mouth.webp",
  "https://dogsdayawaytx.com/wp-content/uploads/2021/03/LML_3273-scaled.jpg",
  "https://dogsdayawaytx.com/wp-content/uploads/2017/02/13412974_1187694881281891_9012951800295268205_n.jpg",
  "https://dogsdayawaytx.com/wp-content/uploads/2017/02/11168394_958516834199698_2269538829015254493_n.jpg",
  "https://dogsdayawaytx.com/wp-content/uploads/2017/02/12239546_1057350467649667_8679615489491607994_n.jpg",
];

export const AutoCarousel = ({ className }: { className?: string }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={cn("w-2/3 lg:w-3/4", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="h-52 md:h-[450px]">
                <CardContent className="flex items-center justify-center h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
