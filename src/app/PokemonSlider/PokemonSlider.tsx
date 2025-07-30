'use client';

import 'swiper/css/bundle';
import { useState } from 'react';
import { getImageBackVariants, getImageFrontVariants } from '@/utils/constants';
import { PokemonSprites } from '@/types/pokemonTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {filteredImages.map((img, idx) => {
          console.log('items loaded', img);
          return (
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
          );
        })}
      </Swiper>
      <button className={styles.btn} onClick={() => setToggle((prev) => !prev)}>
        {toggle ? 'Show Front View' : 'Show Back View'}
      </button>
    </>
  );
}
