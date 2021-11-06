import { useEffect, useState } from "react";
import { Book } from "../../book";
import { useBookService } from "../../services/bookService/BookContext";
import { BookDetails } from "../BookDetails/BookDetails";

export const BookOverview = () => {
  const { findAll } = useBookService();
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    setBooks(findAll());
  }, []);
  const selectBook = (book: Book): void => {
    setSelectedBook(book);
  };
  const isBookSelected = (book: Book): boolean => book === selectedBook;

  const updateBook = (bookToUpdate: Book) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === bookToUpdate.id ? bookToUpdate : book)),
    );
    setSelectedBook(bookToUpdate);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-12'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Authors</th>
                <th scope='col'>Title</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr
                  key={book.id}
                  className={isBookSelected(book) ? "table-active" : ""}
                  onClick={() => selectBook(book)}
                >
                  <th scope='row'>{index + 1}</th>
                  <td>{book.authors}</td>
                  <td>{book.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col-md-4 col-12'>
          {selectedBook && <BookDetails initBook={selectedBook} onBookChange={updateBook} />}
        </div>
      </div>
    </div>
  );
};
