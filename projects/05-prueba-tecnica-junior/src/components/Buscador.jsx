import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

export function Buscador({
  search,
  setSearch,
  error,
  getMovies,
  sort,
  setSort,
}) {
  // Creamos un callback para que esta funcion no se vuelva a crear con cada render
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log(search)
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = event => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  return (
    <>
      <h3>Buscador de películas</h3>
      <form className='movies-form' onSubmit={handleSubmit}>
        <input
          className='search-input'
          onChange={handleChange}
          name='query'
          value={search}
          type='text'
          placeholder='Avengers, Fast & Furious, Titanic ...'
        />
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p>{error}</p>}
    </>
  )
}

/*
NOTAS:
No deberiamos usar un useRef para recuperar el valor de cada input.
Es mejor práctica usar:
const fields = Object.fromEntries(new window.FormData(event.target))
de esa manera, recuperamos los valores de cada input en un solo objeto.

Donde: 
new window.FormData(event.target) toma como parametro el formulario que contiene todos los input.
Este regresa un objeto FormData con un metodo get('nombreDelInput) que nos permite recuperar el valor del input

Object.fromEntries(FormData) toma un objeto FormData y devuelve un objeto JavaScript que contiene pares clave-valor basados en los campos presentes en el objeto FormData.

La función Object.fromEntries() es una función estática introducida en JavaScript ES2019. Toma un iterable de pares clave-valor y devuelve un nuevo objeto formado por esos pares clave-valor. Esta función es útil para convertir arreglos o iterables en objetos JavaScript.
*/
