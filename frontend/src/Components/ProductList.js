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
        <>
            <h1>Product List</h1>
            <ul>
                {products.map((item) => (
                    <li key={item._id}>
                        <h4>Name: {item.name}</h4>
                        <h4>Company: {item.company}</h4>
                        <h4>Price: {item.price}</h4>
                        <h4>Category: {item.category}</h4>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductList;
