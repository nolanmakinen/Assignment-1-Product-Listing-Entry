//Name: Nolan Makinen
//Date: 2026-02-08
//Assignment 1: Product Listing & Entry

// TODO: Implement localStorage-based persistence using JSON.parse / JSON.stringify.
// Use this key for storage:
export const STORAGE_KEY = 'a1_products';

// TODO: return an array of products from localStorage (or [] if none)
export function getAllProducts() {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

// TODO: persist a product into storage
export function addProduct(product) {
  const products = getAllProducts()
  products.push(product)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

// TODO: remove a product by id and persist
export function removeProduct(id) {
  const products = getAllProducts().filter(product => product.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}