import { createContext, useState } from 'react'

// 1. Crear el contexto. Este es el que tenemos que consumir.
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto. No deja de ser un componente "padre". Este nos provee de acceso al contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  // Lo que esta detro de value es lo que regresamos akl usar useContext
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
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
