import React from "react";

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <div>
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
