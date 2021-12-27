import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import image1 from '../images/1.jfif';

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([
        { id: uuidv4(), name: 'ABC', productId: 21, description: "The best Product", status: "A", price: "140 Rs.", discount: "10%" },
        { id: uuidv4(), name: 'PQR', productId: 22, description: "The best Product", status: "A", price: "120 Rs.", discount: "10%" },
        { id: uuidv4(), name: 'MNP', productId: 23, description: "The best Product", status: "A", price: "50 Rs.", discount: "10%" },
        { id: uuidv4(), name: 'DEF', productId: 24, description: "The best Product", status: "A", price: "180 Rs.", discount: "10%" }
    ])

    const sortedProducts = products.sort((a, b) => (a.name < b.name ? -1 : 1));

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('products')))
    }, [])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    })

    const addProduct = (name, productId, description, status, price, discount) => {
        setProducts([...products, { id: uuidv4(), name, productId, description, status, price, discount }])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map((product) => product.id === id ? updatedProduct : product))
    }

    return (
        <ProductContext.Provider value={{ sortedProducts, addProduct, deleteProduct, updateProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;