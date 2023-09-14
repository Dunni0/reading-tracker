import React, { useContext } from "react";
import {BookContext} from "../context/BookContext"
import BookDeets from "./BookDeets";

export default function Booklist() {

  const { books } = useContext(BookContext)

        return books.length ? (
            <div className="book-list" >
            <ul >
                {books.map((book) => {
                  return(
                    <BookDeets book={book} key={book.id} />
                  )
                })}
            </ul>
            </div>
        ): (
          <div className="note2"> okay. so, how long till you get a new book?? 👀 </div>
        )
}
 