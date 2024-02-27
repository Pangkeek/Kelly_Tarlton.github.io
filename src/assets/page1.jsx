import React, { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Icon3 from './Icon3.png'
import Img19 from './iPhone 12 Pro-19.png'
import Img10 from './iPhone 12 Pro-10.png'
import Img1 from './iPhone 12 Pro-1.png'
import Img3 from './iPhone 12 Pro-3.png'
import Img12 from './iPhone 12 Pro-12.png'
import Img2 from './iPhone 12 Pro-2.png'

export default function Page1() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto relative overflow-hidden flex">
      <div className="h-screen w-1/2 bg-[#21211e] flex flex-col	items-center justify-center z-40">
        <img
          className="size-96"
          src={Icon3}
          alt="logo"
          data-aos="fade-right"
          data-aos-duration='1000'
        />
        <h1 className="text-white text-7xl Medium" data-aos="fade-down" data-aos-duration='850'>
          Kelly Tarlton's
          <br />
          Teasure Hunt
        </h1>
        <p className="text-white text-xl mt-9" data-aos="fade-down" data-aos-duration='850'>
          Let's Start Hunting Augmented Reality Sea Life!
        </p>
      </div>
      <div className="h-screen w-1/2 flex items-center justify-center">
        <img
          className="-rotate-60deg absolute left-580px -top-52 w-520px h-auto"
          src={Img19}
        />
        <img
          className="-rotate-60deg w-520px h-auto absolute -top-52 left-980px"
          src={Img10}
        />
        <img
          className="w-270px h-auto -rotate-31deg absolute -top-20 left-1550px"
          src={Img1}
        />
        <img
          className="-rotate-31deg w-270px h-auto absolute top-420px right-56"
          src={Img3}
        />
        <img
          className="-rotate-60deg w-520px h-auto absolute top-96 -right-72"
          src={Img12}
        />
        <img
          className="-rotate-31deg w-270px h-auto absolute -bottom-363px right-440px"
          src={Img2}
        />
        <img
          className="-rotate-31deg w-270px h-auto absolute right-800px"
          src={Img1}
        />
      </div>
    </div>
  );
}
