import React from 'react';

const Paginate = (props) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalItems/props.itemsPerPage); i++ ) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)
  return ( <nav aria-label="Page navigation example">
             <ul className="pagination">
              {pageNumbers.map((number, index) => {
                return (
                  <li key={index}>
                    <a  onClick={(event) => {
                          event.preventDefault()
                          props.pageSelected(number)}}
                        href="/"
                        className="page-link"
                        >{number}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
  )
};

export default Paginate;
