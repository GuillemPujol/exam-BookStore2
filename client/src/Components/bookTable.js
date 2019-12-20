import React from 'react';
import BookTableRow from './BookTableRow';

const BookTable = (props)=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Seller Name</th>
                    <th scope="col">Seller Email</th>
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