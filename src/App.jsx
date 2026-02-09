//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

import React, { useMemo, useState, useEffect } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import { getAllProducts, addProduct, removeProduct } from './storage/productStorage'

export default function App(){
  // TODO: start with [] and consider hydrating from storage once storage helpers are implemented
  const [items, setItems] = useState([])

  // Optional: toggle between views; start on 'list'
  const [view, setView] = useState('list') // 'list' | 'form'

  useEffect(() => { // Loads the products in localStorage
    setItems(getAllProducts())
  }, [])

  // TODO: compute total from items
  const total = useMemo(() => items.length, [items]) // Figures out the number of products

  function handleCreate(data){ // Creating new products
    // TODO: validate (in the form), persist to storage, then update state
    // Example flow (do not copy/paste): create id, add to storage, reload items
    // setItems(...)
    // setView('list')

    const product = { // Product gets a unique id 
      id: Date.now(),
      ...data
    }

    addProduct(product) // Saves product to localStorage
    setItems(getAllProducts()) // Gets the updated prodcuts
    setView('list') // Sets the view back to the list so you can see that the product was added
    console.log('Create product:', data) // Console log
  }

  function handleDelete(id){
    // TODO: remove from storage, then update state
    removeProduct(id) // Removes the product from localStorage
    setItems(getAllProducts()) // Gets the updated prodcuts
    console.log('Delete product:', id) // Console log
  }

  return (
    <div className="container py-3">
      <header className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 m-0">My Web Shop</h1>
        <div className="btn-group">
          <button className={`btn btn-sm btn-${view==='list'?'primary':'outline-primary'}`} onClick={() => setView('list')}>
            Product List ({total})
          </button>
          <button className={`btn btn-sm btn-${view==='form'?'primary':'outline-primary'}`} onClick={() => setView('form')}>
            Add Product
          </button>
        </div>
      </header>

      {view === 'form' ? (
        <ProductForm onSubmit={handleCreate} />
      ) : (
        <ProductList items={items} onDelete={handleDelete} />
      )}
    </div>
  )
}
