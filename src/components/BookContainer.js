import React, { useContext } from 'react'
import { Book } from './Book'
import { BookContext } from '../context/BookContext'


export function BookContainer() {
    const { book } = useContext(BookContext)

    return(
        <div>
            <h2>Reading List</h2>
            {book.map(item => {
                return <Book item={item} key={item.id}/>
            })}        
        </div>
        )
}