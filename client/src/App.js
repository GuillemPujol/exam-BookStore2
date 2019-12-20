import React from 'react';
import bookAPI from './bookAPI';
import bookTable from './Components/bookTable';
import Form from './Components/form';
import Message from './Components/message';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      books : [],
      isEditForm : false,
      book : {
        title : "",
        author : "",
        category : "",
        price : "",
        sellerName: "",
        sellerEmail: ""
      },
      message : ""
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  componentDidMount(){
    bookAPI.getbooks().then(data=>{
      console.log(data);
      this.setState({books : data.response})});
  }

  resetForm(){
    this.setState({
      book: {
        firstName : "",
        lastName : "",
        salary : "",
        job : ""
      }
    });
  }

  handleChange(e){
    this.setState({
      book : {
        ...this.state.book,
        [e.target.name] : e.target.value
      }
    });
  }

  showEditForm(book){
    this.setState({isEditForm : true, book : book});
  }

  async deleteHandler(id){
    const deleteData = await bookAPI.deletebook(id);
    const message = deleteData.message;
    if(message.msgError){
      this.setState({message});
    }
    else{
      const data = await bookAPI.getbooks();
      this.setState({message,books : data.response})
    }
  }

  async updateHandler(e){
    e.preventDefault();
    const updateData = await bookAPI.updatebook(this.state.book);
    const message = updateData.message;
    if(message.msgError){
      this.setState({message});
    }
    else{
      const data = await bookAPI.getbooks();
      this.setState({message,books : data.response})
    }
    this.setState({isEditForm: false});
    this.resetForm();
  }

  async addHandler(e){
    e.preventDefault();
    const postData = await bookAPI.createbook(this.state.book);
    const message = postData.message;
    if(message.msgError){
      this.setState({message});
    }
    else{
      const data = await bookAPI.getbooks();
      this.setState({message,books : data.response});
    }
    this.resetForm();
  }

  renderbookTable(){
    if(this.state.books.length > 0){
      return(
          <bookTable books={this.state.books}
                         deleteHandler={this.deleteHandler}
                         showEditForm={this.showEditForm}/>
      );
    }
    return null;
  }

  renderForm(){
    return(
        <Form isEditForm={this.state.isEditForm}
              book={this.state.book}
              handleChange={this.handleChange}
              handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
    );
  }

  renderMessage(){
    if(this.state.message === "")
      return null;
    return(
        <Message message={this.state.message}/>
    );
  }

  render(){
    return(
        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            {this.renderbookTable()}
            {this.renderForm()}
            {this.renderMessage()}
          </div>
          <div className="col"></div>
        </div>
    )
  }
}

export default App;