import Button from '@/components/Button';
import { Prisma } from '@prisma/client'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import React from 'react'
import ReactCountryFlag from 'react-country-flag';
import { toast } from 'react-toastify';

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{ include: {trip: true}}>;
  fetchReservations: () =>  void;
}

function UserReservationItem({ reservation, fetchReservations }: UserReservationItemProps) {
  const { trip } = reservation;

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {method: 'DELETE'});

    if (!res.ok) {
      return toast.error('Ocorreu um erro ao cancelar a reserva!', {position: 'top-center'});
    }

    toast.success('Reserva cancelada com sucesso!', {position: 'top-center'});

    fetchReservations();
  }
  return (
    <div>
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
            <h2 className="text-xl text-primaryDarker font-semibold"> {trip.name} </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary">{trip.location}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center border-b border-grayLighter border-solid pb-5 gap-3"></div>

        <h3 className="font-semibold text-lg text-primaryDarker mt-3"> Sobre a viagem </h3>

        <div className="flex flex-col mt-5 text-primaryDarker">
          <h3 className="text-sm">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMM", { locale: ptBR })}
            </p>
            {"-"}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMM", { locale: ptBR })}
            </p>
          </div>

          <h3 className="mt-5 text-sm">Hóspedes</h3>
          <p className="text-sm">{reservation.guests} hóspedes </p>

          <div className="flex items-center border-b border-grayLighter border-solid pb-5 gap-3"></div>
        </div>

        <h3 className="font-semibold text-lg text-primaryDarker mt-3"> Informações de pagamento </h3>

        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker text-sm">Total:</p>
          <p className="text-primaryDarker font-semibold text-sm">R${Number(reservation.totalPaid)}</p>
        </div>

        <Button variant={'danger'} className='mt-7' onClick={handleDeleteClick}>Cancelar</Button>
      </div>
    </div>
  );
}

export default UserReservationItem