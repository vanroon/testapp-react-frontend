import axios from 'axios';
const BOOK_REST_API_URL = 'http://localhost:8888/books'

class BookService{
    getBooks(){
        return axios.get(BOOK_REST_API_URL);
    }
}
export default new BookService();