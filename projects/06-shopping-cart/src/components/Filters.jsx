import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilter'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = e => {
    const newMinPrice = e.target.value
    setFilters(prevState => ({ ...prevState, minPrice: newMinPrice }))
  }

  const handleChangeCategory = e => {
    const newCategory = e.target.value
    setFilters(prevState => ({ ...prevState, category: newCategory }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Starting price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='2000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Phones</option>
        </select>
      </div>
    </section>
  )
}
