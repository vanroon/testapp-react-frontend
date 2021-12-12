import React from 'react'
import bookService from '../services/BookService'
import {Navbar} from 'react-bootstrap'
import MUIDataTable from "mui-datatables";


class BookComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = { books: []};
    }

    componentDidMount(){
        bookService.getBooks().then((Response)=>{
          this.setState({books: Response.data})
        });

     }


    render(){
        const data = this.state.books.map.book
        const columns = [
          {
            name: "id",
            label: 'id',
            options : {
              filter: false,
              sort: true,
            }
          },
          {
            name: "book name",
            label: "book name",
            options: {
              filter: false,
              sort: true,
            }
          },
          {
            name: "book author",
            label: "book author",
            options: {
              filter: false,
              sort: true,
            }
   }    ,
   {
         name: "price",
         label: "price",
         options: {
           filter: false,
           sort: true,
         }
   }
    ];
    const options = {
        onRowClick: book => {
            if(book){
                const jo = "var"
            }
        }
    }
    const name = "oioi"
        return(
        <div>
            {/* <Navbar bg="info" variant="dark" >
                <Navbar.Brand href="#">Book App</Navbar.Brand>
            </Navbar> */}
            {/* <MUIDataTable
                title = {"jo"}
                data = {data}
                columns = {columns}
                options = {options}
                /> */}
            <h1 className="text-center mt-5 ">List {name} of Books</h1>
            <div className="container mt-2">
            <table className="table table-bordered border-info">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Book Name</th>
                    <th>Book Author</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map(books =>
                                <tr key = {books.id}>
                                        <td>{books.id}</td>
                                        <td>{books.bookName}</td>
                                        <td>{books.authorName}</td>
                                        <td>{books.price}</td>
                                </tr>
                        )
                    }
                </tbody>

            </table>
            </div>
        </div>
        )
    }
}
export default BookComponent