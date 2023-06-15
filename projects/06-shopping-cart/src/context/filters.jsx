import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

/* 
Para poder trabajar con useContext hay 3 pasos.
1: Crear el contexto
2: Proveer el contexto
3: Usar el contexto
*/
