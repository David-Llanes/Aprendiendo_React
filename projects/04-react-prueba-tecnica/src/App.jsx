import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { useDebounce } from './hooks/useDebounce'

// Componente
export function App() {
  // Recuperar el random fact usando custom hook
  const { fact, refreshFact } = useCatFact()
  // Recuperar la imagen segun la primer palabra del fact con un custom hook
  const { imageUrl } = useCatImage({ fact })
  const { debounce } = useDebounce()

  const debouncedRefreshFact = debounce(refreshFact, 500)

  const handleClick = async () => {
    // Llamar a la funcion del hook useCatFact pata actualizar el estado de fact
    debouncedRefreshFact()
  }

  return (
    <main>
      <h1>App de gatitos XD</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen generada automaticamente con la primer palabra de ${fact}`}
        />
      )}
    </main>
  )
}

// NOTAS:

// El split nos regresa un array.
// Split() toma como segundo parametro cuantos valores del array queremos que nos regrese, comenzando desde el inicio.
// const firstWord = fact.split(' ', 3).join(' ') Primeras 3 palabras
// Es lo mismo que poner fact.split(' ').slice(0,3).join(' ')
// const firstWord = fact.split(' ')[0] Primer palabra
