import { useState, useEffect } from 'react'
import { json } from 'd3'

const jsonUrl = 'http://localhost:3002/files/inflation/maputo.json'

export type Inflation = {
  year: number
  mensal: number[],
  homologa: number[]
}

export const useData = () => {
  const [data, setData] = useState<Inflation | null>(null);

  useEffect(() => {
    json(jsonUrl).then((inflation: any) => { 

      const yearInflation: Inflation = inflation.filter((yearInflation: Inflation) => {
        return yearInflation.year === 2019
      })[0]

      setData(yearInflation)
    });

  }, []);


  return data;
};