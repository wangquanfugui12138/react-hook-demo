import React, { useState, useEffect } from 'react'

function ClientWidth () {
  const [width, setWidth] = useState(window.innerWidth)
  const resizeHandle = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", resizeHandle)
    return () => {
      window.removeEventListener("resize", resizeHandle)
    }
  })
  return (
    <h1>{width}</h1>
  )
}
export default ClientWidth