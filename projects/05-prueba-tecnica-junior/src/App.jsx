import './App.css'
import { useState } from 'react'
import { Buscador } from './components/Buscador'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  // Renombrar movies a mappedMovies
  const { movies, getMovies, loading } = useMovies({ search, sort })

  return (
    <div className='container'>
      <header className='header'>
        <Buscador
          search={search}
          setSearch={setSearch}
          error={error}
          getMovies={getMovies}
          sort={sort}
          setSort={setSort}
        />
      </header>

      <main>{loading ? <p>Cargando ...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
