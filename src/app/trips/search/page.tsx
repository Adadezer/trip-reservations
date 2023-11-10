'use client'

import TripItem from '@/components/TripItem';
import { Trip } from '@prisma/client';
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

async function Trips() {
  const [trips, setTrips] = React.useState<Trip[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${searchParams.get("text") ?? ""}&startDate=${searchParams.get("startDate")}&budget=${searchParams.get("budget")}`
      );

      const data = await response.json();

      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center p-5">
      <h1 className="text-primaryDarker font-semibold text-xl">
        Viagens Encontradas
      </h1>
      <h2 className="text-grayPrimary font-medium mb-5">
        {trips.length > 0
          ? "Listamos as melhores viagens pra você!"
          : "Nenhum resultado encontrado de acordo com sua pesquisa! =("
        }
      </h2>

      <div className="flex flex-col gap-4">
        {trips?.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default Trips