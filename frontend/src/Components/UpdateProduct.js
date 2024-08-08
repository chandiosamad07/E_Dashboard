import React ,{useState}from 'react'

const UpdateProduct = () => {
    const [name ,setName]=useState('')
    const [price ,setPrice]= useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const[error ,setError]=useState(false)
    
    const update = async()=>{
      console.log(name,price,category,company)
    }
  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input type='text' placeholder='enter product name' className='input'  value={name} onChange={(e)=>setName(e.target.value)}/>    
        {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
        <input type='text' placeholder='enter product price' className='input' value={price} onChange={(e)=>setPrice(e.target.value)}/> 
        {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
        <input type='text' placeholder='enter product category' className='input'value={category} onChange={(e)=>setCategory(e.target.value)}/> 
        {error && !category && <span className='invalid-input'>Enter Valid category</span>}
        <input type='text' placeholder='enter product company' className='input'value={company} onChange={(e)=>setCompany(e.target.value)}/> 
        {error && !company && <span className='invalid-input'>Enter Valid company</span>}
        
       <button className='button' onClick={update}>Update Product</button>
        </div>
  )
}

export default UpdateProduct