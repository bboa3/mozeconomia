import Image from 'next/Image'
import { useEffect, useState } from 'react'

const getWindowsDimensions = () => {
  const { innerWidth: width, innerHeight: height} = window

  return { 
    width,
    height
  }
}

const BGImage = () => {
  const [ width, setWidth ] = useState<number>()
  const [ height, setHeight ] = useState<number>()

  useEffect(() => {
    const {width, height} = getWindowsDimensions()

    setWidth(width)

    setHeight(height)
  }, [])

  useEffect(() => {
    const resizeHandler = () => {
      const {width, height} = getWindowsDimensions()

      setWidth(width)

      setHeight(height)
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      return window.removeEventListener('resize', resizeHandler)
    }
  })

  if(width && height) {
    return (
      <input 
      
      />
    )
  }
}

export default BGImage