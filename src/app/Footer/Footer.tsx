import React from "react";
import Image from "next/image";
import { useFooter } from "./Footer.hooks";
import "./Footer.module.scss";
import pokeLogo from "@/Images/poke-logo.svg";

export function Footer() {
  const { classes } = useFooter();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <nav className={classes.footerNav}>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={classes.footerSocial}>
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
        </div>
        <div className={classes.footerLogo}></div>
        <p className={classes.footerCopy}>
          © 2024 First Gen Poke. All rights reserved.
          <Image
            width={48}
            height={48}
            src={pokeLogo}
            alt="Pokéball"
            priority
          />
        </p>
      </div>
    </footer>
  );
}
