import React ,{useState}from 'react'

const AddProduct = () => {
    const [name ,setName]=useState('')
    const [price ,setPrice]= useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')

    const addproduct =()=>{
        console.log(name,price,category,company)
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type='text' placeholder='enter product name' className='input'  value={name} onChange={(e)=>setName(e.target.value)}/>    
        <input type='text' placeholder='enter product price' className='input' value={price} onChange={(e)=>setPrice(e.target.value)}/> 
        <input type='text' placeholder='enter product category' className='input'value={category} onChange={(e)=>setCategory(e.target.value)}/> 
        <input type='text' placeholder='enter product company' className='input'value={company} onChange={(e)=>setCompany(e.target.value)}/> 
       <button className='button' onClick={addproduct}>Add Product</button>
        </div>
  )
}

export default AddProduct