import "@/styles/globals.scss/";
import styles from "./page.module.scss";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className={styles["hero__wrapper"]}>
      <h1 className={styles["hero__heading"]}>
        Discover, learn and catch them all!
      </h1>
      <p className={styles["hero"]}>Scroll endlessly through your favorite</p>
      <Link href={"./PokemonList"} className={styles["hero__cta"]}>
        Explore now!
      </Link>
    </section>
  );
}
