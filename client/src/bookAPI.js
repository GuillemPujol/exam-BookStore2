export default {
    getBooks : ()=>{
        return fetch('/book')
                .then(res => res.json())
                .then(data => data);
    },
    deleteBook : (_id)=>{
        return fetch(`/book/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    updateBook : (book)=>{
        return fetch(`/book/${book._id}`,
                    {method : "put",
                     body: JSON.stringify(book),
                     headers : {
                         "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createBook : (book)=>{
        return fetch(`/book`,
            {method : 'post',
            body: JSON.stringify(book),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}