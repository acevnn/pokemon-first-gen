import styles from "./HeaderNavigationMobile.module.scss";

export const useHeaderNavigation = () => {
  const classes = {
    headerNavigation: styles["header-navigation"],
    headerNavigationToggle: styles["header-navigation__toggle"],
    headerNavigationNavListItem: styles["header-navigation__list-item"],
  };

  return { classes };
};
