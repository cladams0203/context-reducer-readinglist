import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'


export function Book(props) {
    const { title, author, id, genre } = props.item
    const { removeBook } = useContext(BookContext)
    return (
        <div>
            <h3>Title: {title} </h3>
            <p>Author: {author} </p>
            <p>Genre: {genre} </p>
            <button onClick={() => removeBook(id)}>Remove Book</button>
        </div>
    )
}