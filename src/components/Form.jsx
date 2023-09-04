import React from 'react'

const Form = ( { book, setBook }) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let { titulo, autor, edicion } = book;

    const handleSubmit = () => {
        edicion = parseInt(edicion, 10);
        //data validation
        if( titulo === '' || autor === '' || edicion <= 0 ){
            alert("Todos los campos son obligatorios");
        }

    }



  return ( 
    <> 
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='title'className='form-label'>Title</label>
                <input name="titulo" onChange={handleChange} type='text' id='title' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='author'className='form-label'>Author</label>
                <input name="autor" onChange={handleChange} type='text' id='author' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='edition'className='form-label'>Edition</label>
                <input name="edicion" onChange={handleChange} type='number' id='edition' className='form-control'/>
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>   
     </>
  );
}

export default Form;
