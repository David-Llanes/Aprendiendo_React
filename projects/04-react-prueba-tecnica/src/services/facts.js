const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Creamos un metodo que haga una llamada a la api y regrese el fact
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data

  return fact
}

/* 
Asi seria sin async await
export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
*/
