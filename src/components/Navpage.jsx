const Navpage = (props) => {
  const handlePrevious = () => {
    props.setPage(props.page - 1);
  };

  const handleNext = () => {
    props.setPage(props.page + 1);
  };

  return (
    <header className="d-flex justify-content-between align-items-center">
      {props.page === 1 ? (
        <button className="btn btn-secondary" disabled>
          Previous Page
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handlePrevious}>
          Previous Page
        </button>
      )}

      <p>Page: {props.page}</p>

      <button className="btn btn-primary" onClick={handleNext}>
        Next Page
      </button>
    </header>
  );
};

export default Navpage;
