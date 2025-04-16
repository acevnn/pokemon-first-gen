'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import { useState } from 'react';
import { getImageBackVariants, getImageFrontVariants } from '@/utils/constants';
import { PokemonSprites } from '@/types/pokemonTypes';
import Image from 'next/image';

interface Props {
  sprites: PokemonSprites;
}

export default function PokemonSlider({ sprites }: Props) {
  const [toggle, setToggle] = useState(false);

  const frontVariants = getImageFrontVariants(sprites);
  const backVariants = getImageBackVariants(sprites);

  function toggleBackView() {
    setToggle((prev) => !prev);
  }

  const filteredImages = frontVariants.filter((img) => !!img.src);
  const filteredImagesBackView = backVariants.filter((img) => !!img.src);

  return (
    <>
      {!toggle ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {filteredImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{img.label}</p>
                <Image
                  src={img.src ?? ''}
                  alt={img.label}
                  width={150}
                  height={150}
                  style={{
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {filteredImagesBackView.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{img.label}</p>
                <Image
                  src={img.src ?? ''}
                  alt={img.label}
                  width={150}
                  height={150}
                  style={{
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    maxHeight: '100%',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {filteredImagesBackView.length > 0 && <button onClick={toggleBackView}>Toggle back view</button>}
    </>
  );
}
