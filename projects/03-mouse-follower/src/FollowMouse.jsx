import React from 'react'
import { useState, useEffect } from 'react'

export function FollowMouse() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Agregando la bolita que sigue el cursor
  useEffect(() => {
    const handleMove = e => {
      const { clientX, clientY } = e
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    window.addEventListener('pointermove', handleMove)

    // Se ejecuta cuando se desmonta el componente o cada vez que cambian las dependencias.
    // Se ejecuta antes de que vuelva a ejecutarse el codigo del useEffect.
    return () => {
      console.log('Cleanup effect')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // Ocultando el cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  })

  return (
    <>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          display: `${enabled ? 'block' : 'none'}`,
        }}
        className='bolita'
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}
