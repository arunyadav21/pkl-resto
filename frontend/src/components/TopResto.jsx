import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from './Card.jsx';

function TopResto() {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null); // for slider scroll

  const fetchTopRestaurant = async () => {
    try {
     const url=  import.meta.env.VITE_API_BASE_URL;
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

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto mb-[100px]'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          Top Restaurants in Panchkula
        </div>
        <div className='flex'>
          <div
            className='cursor-pointer flex justify-center items-center 
              w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={scrollLeft}
          >
            <FaArrowLeft />
          </div>
          <div
            className='cursor-pointer flex justify-center items-center 
              w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'
            onClick={scrollRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className='flex gap-5 overflow-x-auto scroll-smooth no-scrollbar'
      >
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>
      <hr  className='my-6 border[1px]'/>
    </div>
  );
}

export default TopResto;
