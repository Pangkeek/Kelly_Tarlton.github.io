import React from "react";
import Icon3 from './Icon3.png'

export default function Navbar(){
    return (
    <div className='mx-auto bg-black flex py-1 items-center justify-center'>
        <p className='text-white Medium text-2xl'>Pangki</p>
        <img className='size-16 h-auto mx-4' src={Icon3}/>
        <p className='text-white Medium text-2xl'>quieto</p>
    </div>)
}