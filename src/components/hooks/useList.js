import { useState, useEffect } from 'react'
import { fetchData } from '../helpers/fetchData'

export const useList = (endpoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  /* useEffect executes when endpoint element is loaded and each time change */
  useEffect(() => {
    fetchData(endpoint)
      .then(res => {
        setData(res.data.slice(0, 6))
        setIsLoading(res.isLoading)
      })
  }, [endpoint])

  return {
    data,
    isLoading
  }
}