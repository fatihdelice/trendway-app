import React from 'react'
import Card from './Card'

import data from '../api/data.json'

export default function ProductList({ searchTerm }) {
  const filteredData = data.filter((val) => {
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='grid grid-cols-2 gap-2'>
      {
        filteredData.map((item) => {
          return (
            <div key={item.id}>
              <Card
                item={item}
              />
            </div>
          )
        })
      }
    </div>
  )
}
