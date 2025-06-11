import React, { useEffect, useState } from 'react';
import Card from './Card.jsx'; // ✅ REQUIRED import

function OnlineDelivery() {
  const [data, setData] = useState([]);

  

  const fetchTopRestaurant = async () => {
    try {
      const url = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${url}/top-restaurant-chains`);
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto mb-[100px]'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          Restaurants with online food delivery in Panchkula
        </div>
      </div>

      <div className='grid grid-cols-4 gap-3'>
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>
      <hr  className='my-6 border[1px]'/>
    </div>
  );
}

export default OnlineDelivery;
