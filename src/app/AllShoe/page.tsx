'use client';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AllShoe = () => {
  const { data: session } = useSession();
  // console.log(session);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const loadShoes = async () => {
      const res = await fetch('http://localhost:3000/AllShoe/api/get-all');
      const data = await res.json();
      setShoes(data);
    };
    loadShoes();
  }, []);

  return (
    <div className='mt-20 bg-green-500'>
      <h1>All Shoe:{shoes?.length}</h1>
    </div>
  );
};

export default AllShoe;