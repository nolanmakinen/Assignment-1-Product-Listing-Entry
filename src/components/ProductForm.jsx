import React from 'react'

// TODO: Use useState to manage a model with fields:
// { name: '', price: '', stock: '', description: '' }
// TODO: Create a validate() that sets an errors object and returns boolean:
// - All fields required
// - price: number with up to 2 decimals, >= 0
// - stock: non-negative integer
// TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)

export default function ProductForm({ onSubmit }){
  // const [model, setModel] = ...
  // const [errors, setErrors] = ...

  function handleSubmit(e){
    e.preventDefault()
    // console.log('Submitting:', model)
    // if (!validate()) return
    // onSubmit({ name: ..., price: Number(...), stock: Number(...), description: ... })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* TODO: Controlled input (value, onChange) and inline error */}
        <input className="form-control" />
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO */}
        <input className="form-control" />
        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO */}
        <input className="form-control" />
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO */}
        <textarea className="form-control" rows="3"></textarea>
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save Product</button>
      </div>
    </form>
  )
}
