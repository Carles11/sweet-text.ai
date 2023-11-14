'use client'

import { useState, useEffect } from 'react'

interface Category {
  id: string
  label: string
}

const categoriesData = [
  { id: 'all', label: 'All' },
  { id: 'email', label: 'Email' },
  { id: 'science', label: 'Science' },
  { id: 'products', label: 'Products' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'social-media', label: 'Social Media' },
]

// @ts-ignore
const CategoriesList = ({ onSelectedCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('all')

  useEffect(() => {
    onSelectedCategory(selectedCategoryId)
  }, [selectedCategoryId])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-start my-6">
      {categoriesData.map((category: Category) => (
        <button
          key={category.id}
          className={`cursor-pointer border inline-flex items-center justify-center mr-2 mb-2 px-3.5 py-1 text-sm font-medium rounded-full ${
            selectedCategoryId === category.id
              ? 'border-blue-400 bg-blue-400 text-white hover:bg-opacity-100'
              : 'border-gray-300 bg-white text-gray-600 hover:text-gray-800 hover:shadow hover:ring-gray-200'
          }`}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

export default CategoriesList
