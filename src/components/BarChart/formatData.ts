import { Product } from "noneconomic";
import { months } from '../../utils/days';

const formatData = (products: Product[], label: string) => {

  const product = products.find(product => product.name === label)

  if(!product) return null;

  const productData = product.data

  const currentYear = productData[productData.length -1];
  const lastYear = productData[productData.length -2];
  
  const data = currentYear.homologa.map((homologa: number, index: number) => {
    
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

  return data;
}

export default formatData;