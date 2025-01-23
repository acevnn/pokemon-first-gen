import styles from "./Header.module.scss";

export function useHeader() {
  const classes = {
    header: styles.header,
    headerLogo: styles["header__logo"],
    headerNav: styles["header__nav-links"],
    headerSearch: styles["header__search"],
    headerText: styles["header__text"],
    headerLogoWrapper: styles["header__logo-wrapper"],
    visible: styles.visible,
    hidden: styles.hidden,
    headerMobile: styles["header__mobile"],
  };
  return { classes };
}
