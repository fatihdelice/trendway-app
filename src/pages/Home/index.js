import React from 'react'
import ProductList from '../../components/ProductList'

export default function Home({ searchTerm }) {
    return (
        <div>
            <h1>All Products</h1>
            <ProductList searchTerm={searchTerm} />
        </div>
    )
}
