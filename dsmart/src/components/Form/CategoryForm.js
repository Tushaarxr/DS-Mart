import React from 'react'

const CategoryForm = ({handleSubmit,value,setValue}) => {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
          <input type="text" className="form-control" placeholder='Enter new Category' value={value} onChange={(e)=>setValue(e.target.value)}></input>
          
        </div>
        
      
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}

export default CategoryForm