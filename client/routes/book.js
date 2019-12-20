const express = require('express');
const bookRouter = express.Router();
const book = require('../model/book');

/*** Read ***/
bookRouter.get('/',(req,res)=>{
    book.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                    msgBody : "Unable to get books",
                    msgError : true
                }});
        else{
            res.status(200).json({response});
        }

    });
});

/*** Create ***/
bookRouter.post('/',(req,res)=>{
    const book = new book(req.body);
    book.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                    msgBody : "Unable to add book",
                    msgError : true
                }});
        else
            res.status(200).json({message:{
                    msgBody: "Successfully Added book",
                    msgError : false
                }});
    });
});

/*** Delete ***/
bookRouter.delete('/:id',(req,res)=>{
    book.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                    msgBody : "Unable to Delete book",
                    msgError : true
                }});
        else
            res.status(200).json({message:{
                    msgBody: "Successfully Deleted book",
                    msgError : false
                }});
    });
});

/*** Update ***/
bookRouter.put('/:id',(req,res)=>{
    book.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                    msgBody : "Unable to Update book",
                    msgError : true
                }});
        else
            res.status(200).json({message:{
                    msgBody: "Successfully Updated book",
                    msgError : false
                }});
    });
});

module.exports = bookRouter;