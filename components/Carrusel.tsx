"use client";

import useEmblaCarousel from "embla-carousel-react";

type CarruselProps = {
  images: string[];
};

export default function Carrusel({ images }: CarruselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div
      className="overflow-hidden rounded-lg border border-border"
      ref={emblaRef}
    >
      <div className="flex">
        {images.map((src, index) => (
          <div key={src} className="min-w-0 flex-shrink-0 basis-full">
            <img
              src={src}
              alt={`Trabajo ${index + 1}`}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
