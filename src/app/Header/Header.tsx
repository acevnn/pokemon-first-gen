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
  const { isMobile } = useBreakpoints();

  return (
    <>
      <header className={`${classes.header} container`}>
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

        {!isMobile && (
          <>
            <div className={classes.headerLogoWrapper}>
              <Link href="/">
                <Image width={48} height={48} src={PokeLogo} alt="Pokéball" />
                <p className={classes.headerText}>Pokemon</p>
              </Link>
            </div>
          </>
        )}

        <div className={classes.headerSearch}>
          {/*<IconSearch className={`${classes.headerSearchIcon} ${toggle ? `${classes.headerSearchToggle}` : ''}`} />*/}
          <SearchPokemon />
        </div>
      </header>
      {!isMobile && <HeaderNav />}
    </>
  );
}

export default Header;
