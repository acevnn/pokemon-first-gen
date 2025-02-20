import styles from "./Header.module.scss";

export function useHeader() {
  const classes = {
    header: styles.header,
    headerLogo: styles["header__logo"],
    headerNav: styles["header__nav-links"],
    headerSearch: styles["header__search"],
    headerSearchIcon: styles["header__search-icon"],
    headerSearchInput: styles["header__search-input"],
    headerText: styles["header__text"],
    headerLogoWrapper: styles["header__logo-wrapper"],
    headerMobile: styles["header__mobile"],
    headerSearchToggle: styles["header__icon-toggle"],
    headerInputToggle: styles["header__input-toggle"],
  };
  return { classes };
}
