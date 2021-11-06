import { createContext, FC, useContext } from "react";
import { Book, BookProperties } from "../../book";
import { useBooks } from "./useBooks";

export interface BookService {
  findAll: () => Book[];
  findOne: (id: number) => Book;
  save: (bookToSave: Book) => Book;
  saveNew: (book: BookProperties) => Book;
}

const initBooks = [
  { id: 1, authors: "Author #1", title: "Title #1" },
  { id: 2, authors: "Author #2", title: "Title #2" },
];

export const BookContext = createContext<BookService>({} as BookService);

export const BookProvider: FC = (props) => {
  return <BookContext.Provider value={useBooks(initBooks)}>{props.children}</BookContext.Provider>;
};
export const useBookService = () => {
  return useContext(BookContext);
};
