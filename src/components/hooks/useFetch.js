import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [request, setRequest] = useState({
    data: null,
    isLoading: true,
    error: null
  })

  const getUsers = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setRequest({
        data,
        isLoading: false,
        error: null
      })
    } catch (err) {
      setRequest({
        data: null,
        isLoading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getUsers()
  }, [url])

  return {
    ...request
  }
}