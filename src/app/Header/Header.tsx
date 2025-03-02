"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Header.module.scss";
import { useHeader } from "@/app/Header/Header.hooks";
import Image from "next/image";
import { HeaderNavigationMobile } from "@/app/components/HeaderNavigationMobile/HeaderNavigationMobile";
import { HeaderNav } from "@/app/components/HeaderNav/HeaderNav";
import useBreakpoints from "@/utils/grid";
import { IconSearch } from "public/assets/Icons/Search/Search";

function Header() {
  const { classes } = useHeader();
  const { isMobile } = useBreakpoints();
  const [toggle, setToggle] = useState(false);

  function handleToggleInput() {
    setToggle((prev) => !prev);
    if (toggle) {
      return true;
    }
  }

  return (
    <>
      <header className={`${classes.header} container`}>
        {isMobile && (
          <div className={classes.headerMobile}>
            <div className={classes.headerLogoWrapper}>
              <Link href="/">
                <Image
                  width={48}
                  height={48}
                  src="assets/Images/poke-logo.svg"
                  alt="Pokéball"
                  priority
                />
              </Link>
            </div>
            <HeaderNavigationMobile />
          </div>
        )}

        {!isMobile && (
          <>
            <div className={classes.headerLogoWrapper}>
              <Link href="/">
                <Image
                  width={48}
                  height={48}
                  src="assets/Images/poke-logo.svg"
                  alt="Pokéball"
                />
                <p className={classes.headerText}>Pokemon</p>
              </Link>
            </div>
          </>
        )}

        <div className={classes.headerSearch}>
          <IconSearch
            className={`${classes.headerSearchIcon} ${toggle ? `${classes.headerSearchToggle}` : ""}`}
          />
          <input
            className={`${classes.headerSearchInput} ${toggle ? `${classes.headerInputToggle}` : ""}`}
            onClick={handleToggleInput}
            onBlur={() => setToggle(false)}
            type="text"
            placeholder="Search Pokémon..."
            aria-label="Search Pokémon"
          />
        </div>
      </header>
      {!isMobile && <HeaderNav />}
    </>
  );
}

export default Header;
