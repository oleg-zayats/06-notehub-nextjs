import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

export interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) {
  return (
    <div className={css.pagination}>
      <ReactPaginate
      className={css.paginateLst}
        forcePage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={(item) => onPageChange(item.selected + 1)}
        containerClassName={css.container}
        pageClassName={css.page}
        pageLinkClassName={css.pageLink}
        previousClassName={css.prev}
        nextClassName={css.next}
        breakClassName={css.break}
        activeClassName={css.active}
        disabledClassName={css.disabled}
        previousLabel="<"
        nextLabel=">"
      />
    </div>
  );
}