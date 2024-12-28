import styles from "./Pagination.module.scss";

export function usePagination() {
  const classes = {
    paginationWrapper: styles["pagination-wrapper"],
    pagination: styles["pagination-wrapper__pagination"],
    pageItem: styles["pagination-wrapper__item"],
    pageItemActive: styles["pagination-wrapper__item--active"],
    pageLink: styles["pagination-wrapper__link"],
  };
  return { classes };
}
