//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

// TODO: Implement localStorage-based persistence using JSON.parse / JSON.stringify.
// Use this key for storage:
export const STORAGE_KEY = 'a1_products'; // Key used for localStorage

// TODO: return an array of products from localStorage (or [] if none)
export function getAllProducts() { // Returns all products from localStorage
  const raw = localStorage.getItem(STORAGE_KEY) 
  return raw ? JSON.parse(raw) : [] // If no products it turns an empty array
}

// TODO: persist a product into storage
export function addProduct(product) { // Adds new product to localStorage
  const products = getAllProducts() // Accesses the products
  products.push(product) // Adds the new product after the existing products
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products)) // Updates the array with the new product
}

// TODO: remove a product by id and persist
export function removeProduct(id) { // Removes a product from localStorage
  const products = getAllProducts().filter(product => product.id !== id) // Filters using the product id
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}