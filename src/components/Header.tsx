'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const {status, data} = useSession();
  
  const handleLoginClick = () => signIn();
  
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  }

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[92px] flex justify-between items-center shadow-lg lg:border-b lg:border-grayLighter">
      <Link href="/">
        <div className="flex items-center flex-row-reverse gap-2">
          <div className="font-bold text-primary">RESERVA DE VIAGENS</div>
          <div className="relative w-[80px] h-[80px]">
            <Image src="/Trip_Logo.png" alt="logo Full Stack Week" fill />
          </div>
        </div>
      </Link>

      {status === "unauthenticated" && (
        <div className="bg-white rounded-full p-3 px-5 border border-grayLighter shadow-md flex flex-col justify-center items-center">
          <button
            className="text-primary text-sm font-semibold"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            width={34}
            height={34}
            className="rounded-full"
            src={data.user.image!}
            alt={data.user.name!}
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href={"/my-trips"} onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold mx-2">
                  Minhas viagens
                </button>
              </Link>

              <button
                className="text-primary text-sm font-semibold mt-2"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header