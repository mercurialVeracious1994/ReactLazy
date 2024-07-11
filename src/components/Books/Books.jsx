import isEmpty from "lodash/isEmpty";
import Book from "./Book";
import booksList from "../../data/books.json";

const Books = () => {
    return !isEmpty(booksList) && (
        <div className="books-container">
            {booksList.map(book => {
                return <Book title={book.title} key={book.id}/>
            })}
        </div>
    );
};

export default Books;
