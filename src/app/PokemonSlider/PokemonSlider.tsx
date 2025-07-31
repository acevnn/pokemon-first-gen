'use client';

import 'swiper/css/bundle';
import { useState } from 'react';
import { getImageBackVariants, getImageFrontVariants } from '@/utils/constants';
import { PokemonSprites } from '@/types/pokemonTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import styles from './PokemonSlider.module.scss';

interface Props {
  sprites: PokemonSprites;
}

export default function PokemonSlider({ sprites }: Props) {
  const [toggle, setToggle] = useState(false);

  const variants = toggle ? getImageBackVariants(sprites) : getImageFrontVariants(sprites);
  const filteredImages = variants.filter((img) => !!img.src);

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles['pokemon-slider']}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {filteredImages.map((img, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={styles['pokemon-slider__content-wrapper']}>
                <Image src={img.src ?? ''} alt={img.label} width={150} height={150} />
              </div>
              <p className={styles['pokemon-slider__label']}>{img.label}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className={styles['pokemon-slider__toggle-btn']} onClick={() => setToggle((prev) => !prev)}>
        {toggle ? 'Show Front View' : 'Show Back View'}
      </button>
    </>
  );
}
