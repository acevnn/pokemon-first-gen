import styles from "./Footer.module.scss";

export function useFooter() {
  const classes = {
    footer: styles.footer,
    footerContent: styles["footer__content"],
    footerLogo: styles["footer__logo"],
    footerNav: styles["footer__nav"],
    footerSocial: styles["footer__social"],
    footerCopy: styles["footer__copy"],
  };
  return { classes };
}
