import React, {useContext} from "react";
import { BookContext } from "../context/BookContext";


export default function BookDeets({book}) {
    const { removeBook } = useContext(BookContext)

  return (
    <li onClick={() => removeBook(book.id)}> book title: {book.title} <span> author: {book.author} </span></li>
  )
}
