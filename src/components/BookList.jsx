import React from 'react'

const BookList = ({books}) => {
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
                                    <button className='btn btn-danger'>Delete</button>

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