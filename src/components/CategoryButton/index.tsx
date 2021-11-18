import { useState } from "react"

export type CategoryData = {
  name: string
  homologa: number
}

interface Props {
  category: string
  categoryData: CategoryData[]
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData[] | undefined>>
  isActive: (categoryId: string) => string | undefined
  setCategoryId: React.Dispatch<React.SetStateAction<string>>
}

const CategoryButton: React.FC<Props> = ({
  category, 
  categoryData, 
  setCategoryData, 
  setCategory,
  isActive,
  setCategoryId,
}) => {

  return (
    <button
      type='button'
      className={`
        w-full block border border-gray-300 p-2 text-left mb-2 rounded cursor-pointer
        hover:bg-white hover:shadow-lg hover:border-transparent
        ${ isActive('') ? 'bg-white shadow-lg border-transparent' : ''}
      `}
      onClick={() => {
        setCategory(category)
        setCategoryData(categoryData)
        setCategoryId('products3')
      }}
    >
      { category }
    </button>
  )
}

export default CategoryButton