import React from 'react';

const bookTableRow = (props)=>{
    const {title,author,category,price,sellerName,sellerEmail,_id} = props.book;
    return(
        <tr>
            <th scope="row">{_id}</th>
            <td>{title}</td>
            <td>{author}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>
                <div className="btn-group" role="group">
                    <button type="button" onClick={props.showEditForm.bind(this,props.book)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this,_id)} className="btn btn-danger">Delete</button>
                </div>
            </td>

        </tr>
    )
}

export default bookTableRow;