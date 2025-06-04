'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Item {
  id: string;
  title: string;
  imageUrl: string;
  type: 'anime' | 'manga' | 'manhwa';
}

interface CarouselProps {
  items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 cursor-pointer"
          onClick={() => router.push(`/details/${item.id}`)}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={450}
            className="rounded hover:scale-105 transition"
          />
          <h3 className="text-center mt-2">{item.title}</h3>
          {session && (
            <div className="text-center text-xs text-green-500">Rate & Comment available</div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
