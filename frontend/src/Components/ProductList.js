import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/product-list');
                const result = await response.json();
                console.log(result);
                setProducts(result);
            } catch (error) {
                console.warn('API Not Found', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                        <li>S no</li>
                        <li>Name</li>
                        <li>company</li>
                        <li> price</li>
                        <li>category</li>
                    </ul>
                {products.map((item,index) => (
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li> {item.company}</li>
                        <li> {item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                ))}
           
        </div>
    );
};

export default ProductList;
