"use client";

import React, { useEffect, useRef } from "react";
import { useDrawer } from "./Drawer.hooks";
import Link from "next/link";

export interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export function Drawer(props: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { classes } = useDrawer();
  const { isOpen, toggleDrawer } = props;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        toggleDrawer();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDrawer]);

  return (
    <div
      ref={drawerRef}
      className={`${classes.drawer} ${isOpen ? classes.drawerIsOpen : ""} ${!isOpen ? classes.drawerShadow : ""} `}
    >
      <ul className={classes.drawerNavList}>
        <nav className={classes.drawerHeaderNav}>
          <Link href="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link href="/PokemonList" onClick={toggleDrawer}>
            All Pokémon
          </Link>
          <Link href="/AboutUs" onClick={toggleDrawer}>
            About
          </Link>
          <Link href="/Contact" onClick={toggleDrawer}>
            Contact
          </Link>
        </nav>
      </ul>
    </div>
  );
}
