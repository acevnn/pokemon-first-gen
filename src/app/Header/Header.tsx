'use client';

import React from 'react';
import Link from 'next/link';
import './Header.module.scss';
import { useHeader } from '@/app/Header/Header.hooks';
import Image from 'next/image';
import PokeLogo from '@/Images/poke-logo.svg';
import { HeaderNavigationMobile } from '@/app/components/HeaderNavigationMobile/HeaderNavigationMobile';
import { HeaderNav } from '@/app/components/HeaderNav/HeaderNav';
import useBreakpoints from '@/utils/grid';
import SearchPokemon from '@/app/SearchPokemon/SearchPokemon';

function Header() {
  const { classes } = useHeader();
  const { isMobile, isDesktop } = useBreakpoints();
  // console.log('isMobile: ', isMobile, 'isTablet :', isTablet, 'isDesktop :', isDesktop);

  return (
    <>
      <header className={classes.header}>
        {isMobile && (
          <div className={classes.headerMobile}>
            <div className={classes.headerLogoWrapper}>
              <Link href="/">
                <Image width={48} height={48} src={PokeLogo} alt="Pokéball" priority />
              </Link>
            </div>
            <HeaderNavigationMobile />
          </div>
        )}

        {isDesktop && (
          <>
            <div className={classes.headerLogoWrapper}>
              <Link href="/">
                <Image width={48} height={48} src={PokeLogo} alt="Pokéball" />
                <p className={classes.headerText}>Pokemon</p>
              </Link>
            </div>
            <HeaderNav />
          </>
        )}
        <SearchPokemon />
      </header>
    </>
  );
}

export default Header;
