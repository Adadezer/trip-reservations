import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function QuickSearch() {
  return (
    <div className='container mx-auto p-5'>
      <div className='flex items-center'>
        <div className='w-full h-[1px] bg-grayLighter'></div>
        <h2 className='whitespace-nowrap text-grayLighter font-medium px-5'>Tente Pesquisar por</h2>
        <div className='w-full h-[1px] bg-grayLighter'></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Link href={'/trips/search?text=hotel'} className='flex flex-col items-center hover:text-primary transition-all'>
            <Image width={35} height={35} src='/hotel-icon.png' alt='imagem hotel' />
            <p className='text-sm text-grayPrimary'>Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href={'/trips/search?text=fazenda'} className='flex flex-col items-center hover:text-primary transition-all'>
            <Image width={35} height={35} src='/farm-icon.png' alt='imagem fazenda' />
            <p className='text-sm text-grayPrimary'>Fazenda</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href={'/trips/search?text=chalé'} className='flex flex-col items-center hover:text-primary transition-all'>
            <Image width={35} height={35} src='/cottage-icon.png' alt='imagem chalé' />
            <p className='text-sm text-grayPrimary'>Chalé</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link href={'/trips/search?text=pousada'} className='flex flex-col items-center hover:text-primary transition-all'>
            <Image width={35} height={35} src='/inn-icon.png' alt='imagem pousada' />
            <p className='text-sm text-grayPrimary'>Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuickSearch