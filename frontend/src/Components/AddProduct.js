import React ,{useState}from 'react'

const AddProduct = () => {
    const [name ,setName]=useState('')
    const [price ,setPrice]= useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')

    const addproduct = async()=>{
        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch ("http://localhost:5000/add-product",{
          method:'post',
          body:JSON.stringify({name,price,category,company,userId}),
          headers:{
            'Content-Type':"application/json"
          }
        });
        result = await result.json();
        console.log(result)
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