import React from 'react'
import { useState } from 'react';

function SearchHeader({ search }){

  const [value, setValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    search(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value) 
  }

  return (
    <>
    <form className='containerClass' onSubmit={handleFormSubmit} >
            <div className="mb-3 mt-3 text-center">
                <label className="form-label">Aramak istediğiniz Kelimeyi Girin</label>
                <input type="text" className="form-control" value={value} onChange={handleChange}/>
                
            </div>
        </form>
      
    </>
  )
}
export default SearchHeader;