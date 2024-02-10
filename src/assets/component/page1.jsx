import React from "react";

export default function Page1() {
  return (
    <div className="container mx-auto relative overflow-hidden flex">
      <div className="h-screen w-1/2 bg-neutral-900 flex flex-col	items-center justify-center z-40">
        <img
          className="size-96"
          src=".\src\assets\media\Icon3.png"
          alt="logo"
        />
        <h1 className="text-white text-7xl">
          Kelly Tarlton's
          <br />
          Teasure Hunt
        </h1>
        <p className="text-white text-xl mt-9">
          Let's Start Hunting Augmented Reality Sea Life!
        </p>
      </div>
      <div className="h-screen w-1/2 flex items-center justify-center">
        <img
          className="-rotate-60deg absolute left-580px -top-52 w-520px h-auto"
          src=".\src\assets\media\iPhone 12 Pro-19.png"
        />
        <img
          className="-rotate-60deg w-520px h-auto absolute -top-52 left-980px"
          src=".\src\assets\media\iPhone 12 Pro-10.png"
        />
        <img
          className="w-270px h-auto -rotate-31deg absolute -top-20 left-1550px"
          src=".\src\assets\media\iPhone 12 Pro-1.png"
        />
        <img
          className="-rotate-31deg w-270px h-auto absolute top-420px right-56"
          src=".\src\assets\media\iPhone 12 Pro-3.png"
        />
        <img
          className="-rotate-60deg w-520px h-auto absolute top-96 -right-72"
          src=".\src\assets\media\iPhone 12 Pro-12.png"
        />
        <img className='-rotate-31deg w-270px h-auto absolute -bottom-363px right-440px' src='.\src\assets\media\iPhone 12 Pro-2.png'/>
      </div>
    </div>
  );
}
