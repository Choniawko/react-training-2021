import { useState } from "react";
import { Book } from "../../book";
import { BookService } from "./BookContext";

export const useBooks = (initBooks: Book[]) => {
  const [books, setBooks] = useState<Book[]>(initBooks);
  const findAll: BookService["findAll"] = () => books;
  const findOne: BookService["findOne"] = (id) => {
    const book = books.find((book) => book.id === id);
    if (!book) throw new Error(`book with id: ${id} not found`);
    return book;
  };
  const save: BookService["save"] = (bookToSave) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === bookToSave.id ? bookToSave : book)),
    );
    return bookToSave;
  };
  const saveNew: BookService["saveNew"] = (bookToSave) => {
    const newBook = { ...bookToSave, id: books.length + 1 };
    setBooks((prevBooks) => [...prevBooks, newBook]);
    return newBook;
  };
  return {
    findAll,
    findOne,
    save,
    saveNew,
  };
};
