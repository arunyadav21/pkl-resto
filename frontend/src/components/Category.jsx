import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const baseUrl=  import.meta.env.VITE_API_BASE_URL;
    

    const fetchCategory = async () => {
        const url = import.meta.env.VITE_API_BASE_URL;
        try {
            const response = await fetch(`${url}/Categories`);
            const data = await response.json();
            setCategory(data);
            console.log("Fetched Data", data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategory();
        console.log("Base Url; ", import.meta.env.VITE_API_BASE_URL);
    }, []);

    const nextSlide = () => {
        // Check if we've reached the end (showing last possible set of items)
        if (slide >= categories.length - 8) return;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide === 0) return;
        setSlide(slide - 3);
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-5 item-center justify-between'>
                    <div className='text-[25px] font-bold'>
                        What's On Your Mind
                    </div>
                    <div className='flex'>
                        <div className='cursor-pointer flex justify-center items-center 
                        w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                            <FaArrowLeft />
                        </div>
                        <div className='cursor-pointer flex justify-center items-center 
                        w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex overflow-hidden'>
                    <div className='flex transition-transform duration-300' 
                         style={{ transform: `translateX(-${slide * (150 + 26)}px)` }}>
                        {categories.map((cat, index) => {
                            return (
                                <div key={index} className='w-[150px] shrink-0 mx-2'>
                                    <img src={`${baseUrl}/images/` + cat.image} alt={cat.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr  className='my-6 border[1px]'/>
            </div>
        </>
    );
}

export default Category;