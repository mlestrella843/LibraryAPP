import React from 'react'

const BookList = ({books, setListUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res)) 

        setListUpdated(true)
    }

    return ( 
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edition</th>
                    </tr>
                </thead>
                <tbody>             
                     {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.titulo}</td>
                            <td>{book.autor}</td>
                            <td>{book.edicion}</td>
                            <td>
                                <div className='mb-3'>
                                    <button onClick={() => handleDelete(book.id)} className='btn btn-danger'>Delete</button>

                                </div>
                            </td>
                        </tr>
                     )                  
                     )}             
                </tbody>
            </table>
        </>
     );
}
 
export default BookList;