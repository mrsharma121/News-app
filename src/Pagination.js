import React from 'react';
import './pagination.css';

export const Pagination = ( { postsPerPage, totalPosts, paginate, currentPage } ) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
console.log(currentPage)
    return (
        <div>
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className = {currentPage === number? "selected-Page-item" : "selected-page-Number"
        }>
            <a onClick={() => paginate(number)} href= '!#'
             className= {currentPage === number? "selectedPage" : "pageNumber"
             } >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
        </div>
    )
}
