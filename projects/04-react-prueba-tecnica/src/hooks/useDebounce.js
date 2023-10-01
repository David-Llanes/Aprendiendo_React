import { useRef } from 'react'

export function useDebounce() {
  const timeoutID = useRef(null)

  const debounce = (func, delay) => {
    return () => {
      clearTimeout(timeoutID.current)
      timeoutID.current = setTimeout(() => {
        func()
      }, delay)
    }
  }

  return { debounce }
}

// let timeoutID;
// export const debounce = (func, delay) => {
//   return () => {
//     clearTimeout(timeoutID)
//     timeoutID = setTimeout(() => {
//       func()
//     }, delay)
//   }
// }
