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
                            <th>{book.id}</th>
                            <th>{book.titulo}</th>
                            <th>{book.autor}</th>
                            <th>{book.edicion}</th>
                        </tr>
                     )                  
                     )}             
                </tbody>
            </table>
        </>
     );
}
 
export default BookList;