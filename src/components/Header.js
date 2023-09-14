import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function Header () {

    const { books } = useContext(BookContext)
   
        return (
            <div>
                <h1> my reading list. </h1>
                <p className="note"> currently, you have {books.length} book(s) to get through...</p>
            </div>
        );
}
 