'use client'

import Button from '@/components/Button';
import { Trip } from '@prisma/client';
import { loadStripe } from '@stripe/stripe-js';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { toast } from 'react-toastify';

function TripConfirmation({params}: {params: {tripId: string}}) {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();
  
  const { status } = useSession();

  const searchParams = useSearchParams();
  
  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trips/check`, {
        method: 'POST',
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get('startDate'),
          endDate: searchParams.get('endDate')
        })
      })

      const res = await response.json();
      
      if (res?.error) {
        return router.push('/');
      }

      setTrip(res.trip);
      setTotalPrice(res.totalPrice);
    }

    if(status === 'unauthenticated') {
      router.push('/');
    }

    fetchTrip()
  }, [params.tripId, router, searchParams, status]);

  if (!trip) return null;

  const handleBuyClick = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
          guests: Number(searchParams.get("guests")),
          totalPrice,
          coverImage: trip.coverImage,
          name: trip.name,
          description: trip.description
        })
      ),
    });

    if(!res.ok){
      toast.error('Ocorreu um erro ao realizar a reserva', { position: 'top-center' });
    }

    const {sessionId} = await res.json();

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

    await stripe?.redirectToCheckout({sessionId});
    // router.push('/');
    toast.success('Reserva realizada com sucesso!', { position: 'top-center' });
  };

  const startDate = new Date(searchParams.get('startDate') as string);
  const endDate = new Date(searchParams.get('endDate') as string);
  const guests = searchParams.get('guests');

  
  return (
    <div className="container mx-auto p-5 lg:max-w-[600px]">
      <h1 className="font-semibold text-xl text-primaryDarker">Sua viagem</h1>
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt={`imagem da ${trip.name}`}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary">{trip.location}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center border-b border-grayLighter border-solid pb-5 gap-3"></div>

        <h3 className="font-semibold text-lg text-primaryDarker mt-3">
          Informações sobre o preço
        </h3>

        <div className="flex justify-between mt-1">
          <p className="font-medium text-primaryDarker">Total:</p>
          <p className="font-medium">R${totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col mt-5 text-primaryDarker">
        <h3 className='font-semibold'>Data</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, "dd 'de' MMM", { locale: ptBR })}</p>
          {"-"}
          <p>{format(endDate, "dd 'de' MMM", { locale: ptBR })}</p>
        </div>

        <h3 className='font-semibold mt-5'>Hóspedes</h3>
        <p>{guests} hóspedes</p>

        <Button className='mt-5' onClick={handleBuyClick}>Finalizar Compra</Button>
      </div>
    </div>
  );
}

export default TripConfirmation