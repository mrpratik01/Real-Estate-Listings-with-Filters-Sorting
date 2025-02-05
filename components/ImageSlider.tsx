// ImageSlider.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageSliderProps {
  images: string[];
  linkHref: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, linkHref }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
      <Link href={linkHref} className="block w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Property Image ${currentIndex + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </Link>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
      >
        ▶
      </button>
    </div>
  );
};

export default ImageSlider;