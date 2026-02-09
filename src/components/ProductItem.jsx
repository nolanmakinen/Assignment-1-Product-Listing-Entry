//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

import React from 'react'

export default function ProductItem({ product, onDelete }) {
  const { name, price, stock, description } = product

  return (
    // Bootstrap card for displaying a product
    <div className="card h-100 shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Stock: {stock}
        </h6>
        <p className="card-text">{description}</p>
        <span className="badge bg-success mb-2">Price: ${price.toFixed(2)}</span>
        <div className="mt-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}