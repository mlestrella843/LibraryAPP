
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Form from './components/Form';

function App() {
  const [book, setBook] = useState( {
      titulo: '',
      autor: '',
      edicion: 0
  })

  const [books, setBooks] = useState([]);

  const [listUpdate, setListUpdated] = useState(false);

  useEffect( () => {
    const getBooks = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setBooks(res)) 
    }
    getBooks()
    setListUpdated(false)
  }, [listUpdate]);
  
  return ( 
      <>
        <Navbar brand='Library App'/>
        <div className='container'>
          <div className='row'>           
            <div className='col-7'>
                <h2 style={{textAlign:'center'}}>Book List</h2>
                <BookList book={book} books={books} setListUpdated={setListUpdated}/>
            </div>
            <div className='col-5'>
                 <h2 style={{textAlign:'center'}}>Book Form</h2>
                 <Form book={book} setBook={setBook}/>
            </div>         
          </div>
        </div>     
      </>
  );
}

export default App;
