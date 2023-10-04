import { prisma } from '@/lib/prisma'
import React, { useState } from 'react'

const getTrips = async () => {
  const trips = prisma.trip.findMany({});
  return trips;
}

async function Trips() {
  const data = await getTrips();
  const data2 = await fetch("http://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  console.log({data2});
  return (
    <div>
      {data2.map((el: any) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  )
}

export default Trips