import React from 'react';
import Input from './input';

const Form = (props)=>{
    return(
        <form onSubmit={props.handler}>
            <h4>{props.isEditForm ? "Editing book: " : "Add book: "}</h4>
            <div className="form-group">
                <Input name="title"
                       placeholder="Enter Title"
                       labelName="Title: "
                       handleChange={props.handleChange}
                       value={props.book.title}/>
                <Input name="author"
                       placeholder="Enter Author"
                       labelName="author: "
                       handleChange={props.handleChange}
                       value={props.book.author}/>
                <Input name="category"
                       placeholder="Enter Category"
                       labelName="Category: "
                       handleChange={props.handleChange}
                       value={props.book.category}/>
                <Input name="price"
                       placeholder="Enter Price"
                       labelName="Price: "
                       handleChange={props.handleChange}
                       value={props.book.price}/>
                <Input name="sellerName"
                       placeholder="Enter Seller Name"
                       labelName="Seller Name: "
                       handleChange={props.handleChange}
                       value={props.book.sellerName}/>
                <Input name="sellerEmail"
                       placeholder="Enter Seller Email"
                       labelName="Seller Email: "
                       handleChange={props.handleChange}
                       value={props.book.sellerEmail}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;