import { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { Book } from "../../book";
import { Label } from "./BookDetails.css";

export interface Props {
  initBook: Book;
  onBookChange: (book: Book) => void;
}

export const BookDetails = (props: Props) => {
  const [book, setBook] = useState<Book>(props.initBook);
  useEffect(() => {
    setBook(props.initBook);
  }, [props.initBook]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (props.onBookChange) {
      props.onBookChange(book);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group row'>
          <Label htmlFor='authors' className='col-sm-3 col-form-label'>
            Authors:
          </Label>
          <div className='col-sm-9'>
            <input
              id='authors'
              name='authors'
              type='text'
              className='form-control'
              value={book.authors}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <Label htmlFor='title' className='col-sm-3 col-form-label'>
            Title:
          </Label>
          <div className='col-sm-9'>
            <input
              id='title'
              name='title'
              type='text'
              className='form-control'
              value={book.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <div className='offset-sm-3 col-sm-9'>
            <button className='btn btn-primary'>Apply</button>
          </div>
        </div>
      </form>
    </div>
  );
};
