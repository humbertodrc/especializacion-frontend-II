import { useEffect, useState } from 'react'
import { Result } from '../types/pokemon.types'
import { getData } from '../service/getData'

const useApi = () => {
  const [data, setData] = useState<Result[]>([])

  useEffect(() => {
    getData().then((data) => setData(data.results))
  }, [])

  return {data}
}

export default useApi;