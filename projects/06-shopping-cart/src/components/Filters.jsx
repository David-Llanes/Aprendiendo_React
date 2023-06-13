import { useState } from 'react'
import './Filters.css'

export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = e => {
    const newMinPrice = e.target.value
    setMinPrice(newMinPrice)
    changeFilters(prevState => ({ ...prevState, minPrice: newMinPrice }))
  }
  const handleChangeCategory = e => {
    const newCategory = e.target.value
    changeFilters(prevState => ({ ...prevState, category: newCategory }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Starting price:</label>
        <input
          type='range'
          id='price'
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Phones</option>
        </select>
      </div>
    </section>
  )
}
