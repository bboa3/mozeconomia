import { useState, useEffect } from 'react'
import { months } from '../../utils/days';
import { alimentares } from '../../utils/produtos';

export interface InflationData {
  name: string
  homologa: number
}

export const useData = () => {
  const [data, setData] = useState<InflationData[] | null>(null);

  useEffect(() => {
    const currentYear = alimentares[alimentares.length -1];
    const lastYear = alimentares[alimentares.length -2];
    
    const data: InflationData[] = currentYear.homologa.map((homologa: number, index: number) => {
      
      return {
        name: `${currentYear.year} ${months[index]}`,
        homologa: homologa
      }
    })
    
    let i = 11;
    
    while (data.length <= 11) {
      const homologa: number = lastYear.homologa[i];
      
      data.unshift({
        name: `${lastYear.year} ${months[i]}`,
        homologa: homologa
      })
      
      i--
    }
    
    setData(data)
  }, []);

  return data;
  
};