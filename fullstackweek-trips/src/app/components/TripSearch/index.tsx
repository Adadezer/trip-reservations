import Input from '@/components/Input';
import React from 'react'

function TripSearch() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className='text-primary'>viagem!</span>
      </h1>
      <Input placeholder='Onde você quer ir?' />
    </div>
  )
}

export default TripSearch;