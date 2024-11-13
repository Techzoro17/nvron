import React, { useEffect, useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

const Title = () => {
    const Anoucement = [
        'Free Shipping On All Orders above Rs.1500 | Shop Now',
        'Now Book your Free consultation with our Dermatologist'
    ]

    const [anounce, setanounce] = useState(0);


    useEffect(() => {
      const intervel = setInterval(() => {
        setanounce((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }, 5000);
      // Clear the interval on component unmount
      return ()=>clearInterval(intervel);
    }, []);


  return (
    <div>
        <div className='bg-green-800  flex items-center justify-center text-white opacity-90' >
            <FaArrowLeft/>
            <h2 key={anounce} className=' font-light text-white text-sm text-center p-3 ease-in-out mx-20 fadation'>{Anoucement[anounce]}</h2>
            <FaArrowRight/>
        </div>

    </div>
  )
}

export default Title