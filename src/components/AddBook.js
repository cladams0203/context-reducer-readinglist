import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'


export function AddBook() {
    const [form, setForm] = useState({
        title:'',
        author: '',
        genre: ''
    })
    const { addBook } = useContext(BookContext)
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            addBook(form)
            setForm({title:'', author: '', genre: ''})
        }}>
            <input name='title' value={form.title} onChange={handleChange} placeholder='Title'/>
            <input name='author' value={form.author} onChange={handleChange} placeholder='Author'/>
            <input name='genre' value={form.genre} onChange={handleChange} placeholder='Genre'/>
            <button type='submit'>Add Book</button>   
        </form>
    )
}