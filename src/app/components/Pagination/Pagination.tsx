import { usePagination } from "./Pagination.hooks";
import "./Pagination.module.scss";

export type PaginationProps = {
  currentPage: number;
  pageSize: number;
  items: number;
  onPageChange: (currentPage: number) => void;
  className?: string;
};

export const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(items / pageSize);
  const { classes } = usePagination();

  if (pagesCount === 1) return null;
  if (items === 0 || pageSize === 0) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={classes.paginationWrapper}>
      <ul className={classes.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? classes.pageItemActive : classes.pageItem
            }
          >
            <button
              aria-current={page === currentPage ? "page" : undefined}
              className={classes.pageLink}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
