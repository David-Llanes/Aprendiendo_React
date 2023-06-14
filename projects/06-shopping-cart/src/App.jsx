import React from 'react'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilter'
import { Products } from './components/Products'
import { Header } from './components/Header'

export function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}
//<Header changeFilters={setFilters} />
