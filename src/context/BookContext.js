import React, { createContext, useEffect, useState } from "react";
import {v1 as uuidv1} from "uuid"

export const BookContext = createContext()

const BookContextProvider = (props)=> {
  
    const [books, setBooks] = useState(
    //   [ 
    //     {title: "the name of the wind", author: "patrick torthfuss", id:1},
    //     {title: "the final empire", author: "brandon saderson", id:2},
    //  ],
     () => {
      const localData = localStorage.getItem("books")
      return localData ? JSON.parse(localData) : []
    } )

    // adds to localstorage
    useEffect(() => {
       localStorage.setItem("books", JSON.stringify(books))
    }, [books]) 

    // adds a new book
    const addBook = (title, author) =>  {
        setBooks([...books, {title, author, id: uuidv1()}])
    }

    // removes book
    const removeBook = (id) =>{
         setBooks(books.filter(book => book.id !== id))
    }

  return (
    <BookContext.Provider value={{books, removeBook, addBook}}>
         {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider