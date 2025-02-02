import styles from "./HeaderNav.module.scss";

export function useHeaderNav() {
  const classes = {
    headerNav: styles["header-nav"],
    headerNavList: styles["header-nav__list"],
  };

  return { classes };
}
