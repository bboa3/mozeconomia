import { useState, useEffect } from 'react'
import { json } from 'd3'
import { months } from '../../utils/days';

const jsonUrl = 'http://localhost:3002/files/inflation/nacional.json'

export interface InflationData {
  name: string
  mensal: number
  homologa: number
}

export const useData = () => {
  const [data, setData] = useState<InflationData[] | null>(null);

  useEffect(() => {
    json(jsonUrl).then((inflation: any) => { 

      const currentYear = inflation[inflation.length -1];
      const lastYear = inflation[inflation.length -2];

      const data: InflationData[] = currentYear.homologa.map((homologa: number, index: number) => {
        const mensal: number = currentYear.mensal[index];
    
        return {
          name: `${currentYear.year} ${months[index]}`,
          mensal: mensal,
          homologa: homologa
        }
      })

      let i = 11;

      while (data.length <= 11) {
        const mensal: number = lastYear.mensal[i];
        const homologa: number = lastYear.homologa[i];

        data.unshift({
          name: `${lastYear.year} ${months[i]}`,
          mensal: mensal,
          homologa: homologa
        })

        i--
      }

      setData(data)
    });

  }, []);


  return data;
};