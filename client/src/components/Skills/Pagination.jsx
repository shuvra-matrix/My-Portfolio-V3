import styles from "./Pagination.module.css";

const PaginationComponent = ({
  children,
  currnetPage,
  index,
  paginationHandel,
}) => {
  const paginationHandler = () => {
    paginationHandel(index + 1);
  };

  return (
    <div
      onClick={paginationHandler}
      className={`${styles["pagination-main"]} ${currnetPage === index + 1 ? styles["pagination-selected"] : ""}`}
    >
      <p>{children}</p>
    </div>
  );
};
export default PaginationComponent;
