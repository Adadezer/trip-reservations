import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center bg-walterWhite p-5'>
      <Image src='/Trip_Logo.png' width={40} height={15} alt="logo Full Stack Week" />
      <p className='text-sm font-medium mt-1 text-primaryDarker'>Todos os direitos reservados</p>
    </div>
  )
}

export default Footer