import "@/styles/globals.scss/";
import styles from "./page.module.scss";
import React from "react";

export default function HomePage() {
  return (
    <section className={`${styles.hero__wrapper} container`}>
      <h1 className={styles["hero__heading"]}>
        Discover, learn and catch them all!
      </h1>
      <p className={styles["hero"]}>Scroll endlessly through your favorite</p>
      <button>Explore now!</button>
    </section>
  );
}
