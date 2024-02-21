import React from "react";

export default function Page2() {
  return (
    <div className="container mx-auto bg-neutral-900">
      <p className="pl-158px pb-8 text-xl text-zinc-400 Regular">About</p>
      <div className="text-white flex justify-around Light">
        <p className="text-white text-xl text-left">
          I were given a task of
          <br />
          developing a<br />
          Augmented Reality
          <br />
          appliction inside Kelly
          <br />
          Tarlton's Sea Life
        </p>
        <p className="text-white text-xl text-center">
          This app provide an
          <br />
          alternative experiance of <br />
          reading the information
          <br />
          displays inside Kelly
          <br />
          Tralton's Sea Life.
        </p>
        <p className="text-white text-xl text-right">
          Scanning AR posters
          <br />
          unlocks information
          <br />
          Cards.
        </p>
      </div>
      <div>
        <div className="flex h-auto gradiant-radial pt-28 pb-64">
          <img
            className="w-80 relative left-850px"
            src=".\src\assets\media\iPhone 12 Pro-1.png"
          />
          <img
            className="w-80 relative left-72 top-40 z-10"
            src=".\src\assets\media\iPhone 12 Pro-2.png"
          />
          <img
            className="w-80 relative right-64"
            src=".\src\assets\media\iPhone 12 Pro.png"
          />
        </div>
        <div className="pb-10">
          <h1 className="text-white text-center text-xl Regular">
            Refine your experiance in Kelly Tarlton's Sea Life with a<br />
            interactive AR experiance.
          </h1>
        </div>
      </div>
    </div>
  );
}
