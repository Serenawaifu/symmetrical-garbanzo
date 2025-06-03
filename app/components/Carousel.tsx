// app/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="relative group">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={450}
            className="rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            onClick={() => {
              // Navigate to detailed page
              window.location.href = `/details/${item.id}`;
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-b-lg">
            {item.title}
          </div>
          {session && (
            <div className="absolute top-2 right-2">
              <button className="bg-blue-500 text-white rounded p-1">Rate</button>
              <button className="bg-green-500 text-white rounded p-1 ml-2">Comment</button>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
