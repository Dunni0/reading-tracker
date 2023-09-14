import React, {useContext, useState} from 'react'
import { BookContext } from '../context/BookContext'

export default function BookForm() {
   const {addBook} = useContext(BookContext)
   const[title, setTitle] = useState("")
   const[author, setAuthor] = useState("")

   const handleSubmit = (e) =>{
    e.preventDefault()
    addBook(title, author)
    setTitle("")
    setAuthor("")
   }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        className = "title"
         type="text"
         placeholder='what are you reading?'
         value={title}
         onChange={(e)=>setTitle(e.target.value.toLowerCase())} required />

        <input 
        className="author"
         type="text"
         placeholder='who are you reading?'
         value={author}
         onChange={(e)=>setAuthor(e.target.value.toLowerCase())} required />

         <input className='button' type = "submit" value="add book +" />
    </form>
  )
}
