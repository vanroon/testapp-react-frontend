import React from 'react'
import bookService from '../services/BookService'
import {Navbar} from 'react-bootstrap'


class BookComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            books:[]
        }
    }
    componentDidMount(){
        bookService.getBooks().then((Response)=>{
            this.setState({books:Response.data})
        });

    }
    render(){
        return(
        <div>
            <Navbar bg="info" variant="dark" >
                <Navbar.Brand href="#">Book App</Navbar.Brand>
            </Navbar>
            <h1 className="text-center mt-5 ">List of Books</h1>
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
                        this.state.books.map(
                            books =>
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
// import React from 'react'
// import bookService from '../services/BookService.js'
// import {Navbar} from 'react-bootstrap'


// class BookComponent extends React.Component{

//     constructor(props){
//         super(props)
//         this.state ={
//             books:[]
//         }
//     }
//     componentDidMount(){
//         bookService.getBooks().then((Response)=>{
//             this.setState({books:Response.data})
//         });

//     }
//     render(){
//         return(
//         <div>
//             <Navbar bg="info" variant="dark" >
//                 <Navbar.Brand href="#">Book App</Navbar.Brand>
//             </Navbar>
//             <h1 className="text-center mt-5 ">List of Books</h1>
//             <div className="container mt-2">
//             <table className="table table-bordered border-info">
//                 <thead>
//                     <tr>
//                     <th>Id</th>
//                     <th>Book Name</th>
//                     <th>Book Author</th>
//                     <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.books.map(
//                             books =>
//                                 <tr key = {books.id}>
//                                         <td>{books.id}</td>
//                                         <td>{books.bookName}</td>
//                                         <td>{books.authorName}</td>
//                                         <td>{books.price}</td>
//                                 </tr>
//                         )
//                     }
//                 </tbody>

//             </table>
//             </div>
//         </div>
//         )
//     }
// }
// export default BookComponent