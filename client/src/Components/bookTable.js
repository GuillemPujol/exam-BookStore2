import React from 'react';
import BookTableRow from './BookTableRow';

const BookTable = (props)=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
               {props.books.map(book=>{
                   return <BookTableRow key={book._id}
                                            book={book}
                                            deleteHandler={props.deleteHandler}
                                            showEditForm={props.showEditForm}/>
               })}
            </tbody>
        </table>
    )
}

export default BookTable;