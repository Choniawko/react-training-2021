import { useState } from "react";
import { Label } from "./BookDetails.css";

export const BookDetails = () => {
  const [currentBook] = useState({
    id: 1,
    title: "Example Book",
    authors: "John Example",
  });
  return (
    <div className='container'>
      <form>
        <div className='form-group row'>
          <Label className='col-sm-2 col-form-Label' htmlFor='authors'>
            Authors:
          </Label>
          <div className='col-sm-10'>
            <p className='form-control-plaintext' id='authors'>
              {currentBook.authors}
            </p>
          </div>
        </div>
        <div className='form-group row'>
          <Label className='col-sm-2 col-form-Label' htmlFor='title'>
            Title:
          </Label>
          <div className='col-sm-10'>
            <p className='form-control-plaintext' aria-label='title' id='title'>
              {currentBook.title}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
