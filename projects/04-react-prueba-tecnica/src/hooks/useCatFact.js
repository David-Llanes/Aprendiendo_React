import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    //getRandomFact().then(newFact => setFact(newFact))
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  // Recuperar el hecho cuando recien carga la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
