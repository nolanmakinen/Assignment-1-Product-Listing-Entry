//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

import React, { useState } from 'react'

// TODO: Use useState to manage a model with fields:
// { name: '', price: '', stock: '', description: '' }
// TODO: Create a validate() that sets an errors object and returns boolean:
// - All fields required
// - price: number with up to 2 decimals, >= 0
// - stock: non-negative integer
// TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)

export default function ProductForm({ onSubmit }) {
  const [model, setModel] = useState({
    name: '',
    price: '',
    stock: '',
    description: ''
  })

  const [errors, setErrors] = useState({})

  function validate() {
    const validationErrors = {}

    if (!model.name.trim()) validationErrors.name = 'Required'
    if (!model.description.trim()) validationErrors.description = 'Required'

    if (model.price === '') {
      validationErrors.price = 'Required'
    } else if (
      !/^\d+(\.\d{1,2})?$/.test(model.price) ||
      Number(model.price) < 0
    ) {
      validationErrors.price = 'Must be more than 0 with up to 2 decimals'
    }

    if (model.stock === '') {
      validationErrors.stock = 'Required'
    } else if (!/^\d+$/.test(model.stock)) {
      validationErrors.stock = 'Must be 1 or more'
    }

    setErrors(validationErrors)
    return Object.keys(validationErrors).length === 0
  }

  function handleChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value

    setModel({ ...model, [inputName]: inputValue })
  }

  function handleSubmit(event) {
    event.preventDefault()

    // console.log the model before saving
    console.log('Submitting:', model)

    if (!validate()) return

    // call onSubmit with normalized data
    onSubmit({
      name: model.name.trim(),
      price: Number(model.price),
      stock: Number(model.stock),
      description: model.description.trim()
    })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* TODO: Controlled input (value, onChange) and inline error */}
        <input
          name="name"
          value={model.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO */}
        <input
          name="price"
          value={model.price}
          onChange={handleChange}
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
        />
        <div className="form-text">Format: 12.34</div>
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO */}
        <input
          name="stock"
          value={model.stock}
          onChange={handleChange}
          className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
        />
        {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO */}
        <textarea
          name="description"
          rows="3"
          value={model.description}
          onChange={handleChange}
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">
          Save Product
        </button>
      </div>
    </form>
  )
}