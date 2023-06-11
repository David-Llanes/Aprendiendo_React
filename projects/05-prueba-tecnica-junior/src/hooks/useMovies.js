import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/without-results.json'
import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [movieError, setMovieError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setMovieError(null)
      previousSearch.current = search

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setMovieError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Con useMemo()
  // const getMovies = useMemo(() => {
  //   return async ({ search }) => {
  //     if (search === previousSearch.current) return

  //     try {
  //       setLoading(true)
  //       setMovieError(null)
  //       previousSearch.current = search

  //       const newMovies = await searchMovies({ search })
  //       setMovies(newMovies)
  //     } catch (e) {
  //       setMovieError(e.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [])

  useEffect(() => {
    console.log('new getMovies received')
  }, [getMovies])

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  // Retornar parametro nombrado movies, pero con el valor de mappedmovies
  return { movies: sortedMovies, getMovies, loading }
}
