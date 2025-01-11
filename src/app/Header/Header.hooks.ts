import styles from "./Header.module.scss";

export function useHeader() {
  const classes = {
    header: styles.header,
    headerLogo: styles["header__logo"],
    headerNav: styles["header__nav-links"],
    headerSearch: styles["header__search"],
  };
  return { classes };
}
