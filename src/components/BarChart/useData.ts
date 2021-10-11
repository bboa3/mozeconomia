import { useState, useEffect } from 'react'
import { json } from 'd3'
import { Product } from "noneconomic";

const jsonUrl = 'http://localhost:3002/files/inflation/nacional.json'

export const useData = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    json(jsonUrl).then((inflation: any) => { 

      const products = inflation.products;
      
      setData(products)
    });

  }, []);

  return data;
  
};