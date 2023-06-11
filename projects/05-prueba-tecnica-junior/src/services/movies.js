//const API_URL_SEARCH_BY_TITLE = `https://www.omdbapi.com/?apikey=6d2d4cf5&s=${title}`

const API_KEY = '6d2d4cf5'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()

    // Arreglo de objetos. Cada objeto es una pelicula
    const movies = json?.Search

    // Regresa el mismo arreglo de objetos con las claves cambiadas
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (e) {
    throw new Error('Error searching movies ...')
  }
}
