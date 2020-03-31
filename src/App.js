import React, { useReducer } from 'react';

import './App.css';
import { AddBook } from './components/AddBook'
import { BookContainer } from './components/BookContainer'
import { BookContext } from './context/BookContext'
import { v4 as uuidv4 } from 'uuid'
import { bookReducer, ADD_BOOK, REMOVE_BOOK } from './reducers/bookReducer'


function App() {
  const [book, dispatch] = useReducer(bookReducer, [{
    id:uuidv4(),
    title: 'Armada',
    author: 'Ernest Cline',
    genre: 'Sci-Fi'
  }])
  const addBook = (input) => {
    const newBook = {...input, id: uuidv4()}
    dispatch({type: ADD_BOOK, payload: newBook})
  }
  const removeBook = (input) => {
    dispatch({type: REMOVE_BOOK, payload: input})
  }
 
  return (
    <div className="App">
      <BookContext.Provider value={{book, addBook, removeBook}}>
      <AddBook />
      <BookContainer />
      </BookContext.Provider>
    </div>

  );
}

export default App;
