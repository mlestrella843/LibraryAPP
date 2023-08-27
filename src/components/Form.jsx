import React from 'react'

const Form = () => {
  return ( 
    <> 
        <form>
            <div className='mb-3'>
                <label htmlFor='title'className='form-label'>Title</label>
                <input type='text' id='title' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='author'className='form-label'>Author</label>
                <input type='text' id='author' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='edition'className='form-label'>Edition</label>
                <input type='number' id='edition' className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>   
    </>
  )
}

export default Form;
