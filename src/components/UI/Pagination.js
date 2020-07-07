import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNos = [];
    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNos.push(i);
    }    
    return (
        <nav className="mt-5 mb-5" aria-label="...">
            <ul className="pagination justify-content-center">
                {pageNos.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
