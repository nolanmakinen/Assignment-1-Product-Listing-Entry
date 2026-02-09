//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onDelete }) {
  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>

      {items.length === 0 ? (
        <div className="alert alert-secondary">No products available.</div>
      ) : (
        items.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}