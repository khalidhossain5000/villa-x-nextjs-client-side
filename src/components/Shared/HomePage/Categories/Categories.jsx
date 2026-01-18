'use client'

import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
import { useSearchParams } from 'next/navigation'
const Categories = () => {
  
  return (
    <section className='max-w-8xl mx-auto'>
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            // selected={category === item.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Categories
