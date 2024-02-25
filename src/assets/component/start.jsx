import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Start(){
    
  useEffect(() => {
    AOS.init();
  }, []);

    return (
        <div className='container mx-auto bg-[#21211e] rounded-t-3xl'>
            <h1 className='text-center text-white text-7xl py-32 Medium'>Let's start Hunting!</h1>
        </div>
    )
}