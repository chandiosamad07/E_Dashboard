import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/product-list');
            const result = await response.json();
            if (Array.isArray(result)) {
                setProducts(result);
            } else {
                console.warn('API did not return an array:', result);
                setProducts([]); 
            }
        } catch (error) {
            console.warn('API Not Found', error);
        }
    };

    const deleteProduct= async(id)=>{
        let result = await fetch(`http://localhost:5000/delete/${id}`,{
            method:'Delete'
        })
        result = await result.json();
        if(result){
            fetchData();
        }
       
    }
    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                        <li>S no</li>
                        <li>Name</li>
                        <li>company</li>
                        <li> price</li>
                        <li>category</li>
                        <li>Operation</li>
                    </ul>
                {products.map((item,index) => (
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li> {item.company}</li>
                        <li> {item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <Link to={'/update/'+item._id}>Update</Link> 
                        </li>
                        
                    </ul>
                ))}
           
        </div>
    );
};

export default ProductList;
