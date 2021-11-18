import React, {  useState } from 'react'
import BarChartGraph from '../BarChart'
import formatData from '../BarChart/formatData'
import { useData } from '../BarChart/useData'

import CategoryButton, { CategoryData } from '../CategoryButton'

const categoryIds = [
  'products1',
  'products2',
  'products3',
  'products4',
  'products5',
  'products6',
  'products7',
  'products8',
  'products9',
  'products10',
  'products11',
  'products12',
]

const Products = () => {
  const [ category, setCategory ] = useState('')
  const [ categoryData, setCategoryData ] = useState<CategoryData[]>()

  const [ categoryId, setCategoryId ] = useState('products1')

  const data = useData()
  
  if (!data) {
    return <pre>Loading...</pre>;
  }

  const category1Data = formatData(data, 'Produtos alimentares e bebidas não alcoólicas');
  const category2Data = formatData(data, 'Bebidas alcoólicas e tabaco');
  const category3Data = formatData(data, 'Habitação, água, electricidade, gás e outros combustíveis');
  const category4Data = formatData(data, 'Vestuário e calçado');
  const category5Data = formatData(data, 'Mobiliário, artigos de decoração, equipamento doméstico e manutenção corrente da habitação');
  const category6Data = formatData(data, 'Saúde');
  const category7Data = formatData(data, 'Transportes');
  const category8Data = formatData(data, 'Comunicações');
  const category9Data = formatData(data, 'Lazer, recreação e cultura');
  const category10Data = formatData(data, 'Educação');
  const category11Data = formatData(data, 'Restaurantes, hotéis, cafés e similares ');
  const category12Data = formatData(data, 'Bens e serviços diversos');

  

  const activeCategoryId = (categoryId: string) => {
    return categoryIds.find(id => id === categoryId)
  }

  return (
    <div 
      style={{padding: '7vw'}}
      className="flex flex-col items-center md:flex-row bg-blue-light"
    >
      <div className="w-2/5">
      {
        (category1Data) && (
          <CategoryButton 
            category="Produtos alimentares e bebidas não alcoólicas"
            categoryData={category1Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category6Data) && (
          <CategoryButton 
            category="Saúde"
            categoryData={category6Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category3Data) && (
          <CategoryButton 
            category="Habitação, água, electricidade, gás e outros combustíveis"
            categoryData={category3Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category7Data) && (
          <CategoryButton 
            category="Transportes"
            categoryData={category7Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category5Data) && (
          <CategoryButton 
            category="Mobiliário, artigos de decoração, equipamento doméstico e manutenção corrente da habitação"
            categoryData={category5Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category2Data) && (
          <CategoryButton 
            category="Bebidas alcoólicas e tabaco"
            categoryData={category2Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category4Data) && (
          <CategoryButton 
            category="Vestuário e calçado"
            categoryData={category4Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category8Data) && (
          <CategoryButton 
            category="Comunicações"
            categoryData={category8Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category9Data) && (
          <CategoryButton 
            category="Lazer, recreação e cultura"
            categoryData={category9Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category10Data) && (
          <CategoryButton 
            category="Educação"
            categoryData={category10Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category11Data) && (
          <CategoryButton 
            category="Restaurantes, hotéis, cafés e similares"
            categoryData={category11Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      {
        (category12Data) && (
          <CategoryButton 
            category="Bens e serviços diversos"
            categoryData={category12Data}
            setCategory={setCategory}
            setCategoryData={setCategoryData}
            isActive={activeCategoryId}
            setCategoryId={setCategoryId}
          />
        )
      }
      </div>
      
      <div className="w-3/5">
        <p className="font-bold text-center mb-5 mx-4 text-lg">
          {category}
        </p>
        {
          (!categoryData && category1Data) && (<BarChartGraph data={category1Data} />)
        }
        {
          categoryData && (<BarChartGraph data={categoryData} />)
        }
      </div>
    </div>
  )
}

export default Products