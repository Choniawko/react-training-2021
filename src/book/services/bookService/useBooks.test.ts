import { renderHook, act } from "@testing-library/react-hooks";
import { useBooks } from "./useBooks";

describe("useBooks", () => {
  const books = [
    { id: 1, authors: "Author #1", title: "Title #1" },
    { id: 2, authors: "Author #2", title: "Title #2" },
  ];
  it("finds all books'", () => {
    // given
    const bookToCheck = { id: 1, authors: "Author #1", title: "Title #1" };
    // when
    const { result } = renderHook(() => useBooks(books));
    // then
    const data = result.current.findAll();
    expect(data[0].title).toEqual(bookToCheck.title);
  });
  it("updates an existing book", () => {
    // given
    const bookToSave = { id: 1, authors: "Some author", title: "Some title" };

    // when
    const { result } = renderHook(() => useBooks(books));
    // then
    act(() => {
      result.current.save(bookToSave);
    });
    const savedBook = result.current.findAll().find(({ id }) => id === bookToSave.id);
    // then
    expect(savedBook?.id).toBe(bookToSave.id);
    expect(savedBook?.authors).toBe(bookToSave.authors);
    expect(savedBook?.title).toBe(bookToSave.title);
  });
  it("finds a book", () => {
    // given
    const book = { id: 2, authors: "Author #2", title: "Title #2" };
    // when
    const { result } = renderHook(() => useBooks(books));
    const foundBook = result.current.findOne(book.id);
    // then
    expect(foundBook.id).toBe(book.id);
    expect(foundBook.authors).toBe(book.authors);
    expect(foundBook.title).toBe(book.title);
  });
  it("saves a new book", () => {
    // given
    const bookToSave = { authors: "Some author", title: "Some title" };
    // when
    const { result } = renderHook(() => useBooks(books));
    act(() => {
      result.current.saveNew(bookToSave);
    });
    const newBook = result.current.findAll().find(({ title }) => title === bookToSave.title);
    //then
    expect(newBook?.id).toBeDefined();
    expect(result.current.findAll().length).toBe(books.length + 1);
    expect(newBook?.title).toBe(bookToSave.title);
  });
});
