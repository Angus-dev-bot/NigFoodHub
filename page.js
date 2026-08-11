import { useEffect, useState } from 'react'

export default function Home() {
  const [foods] = useState([
    {
      "id": 1,
      "name": "Ama Food House",
      "location": "Dutse, Jigawa",
      "cuisine": "Northern Food"
    },
    {
      "id": 2, 
      "name": "Chicken Republic", 
      "location": "Kano",
      "cuisine": "Fast Food"
    }
  ])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">NigFoodHub 🍜</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {foods.map(food => (
          <div key={food.id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{food.name}</h2>
            <p>{food.location}</p>
            <p className="text-sm text-gray-500">{food.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  )
}