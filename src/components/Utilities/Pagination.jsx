const Pagination = ({ page, setPage, pagination }) => {
  const lastPage = pagination?.last_visible_page;

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="text-color-primary flex justify-center items-center text-xl gap-4 py-4 px-2">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
