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
