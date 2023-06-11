import React from 'react'
import { Products } from './components/Products'
import { products } from './mocks/products.json'

export function App() {
  return <Products products={products} />
}
