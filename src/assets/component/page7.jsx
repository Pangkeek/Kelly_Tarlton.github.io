import React from "react";

export default function Page7() {
  return (
    <div>
      <div className="container mx-auto bg-[#21211e] pb-14 rounded-b-3xl">
        <div className="flex">
          <div className="w-1/2 pl-158px">
            <p className="text-zinc-400 text-2xl pb-6 Regular">Solution</p>
            <p className="text-white text-xl Light">
              This AR app then offer a solution of offering a<br />
              alternative experience of reading the information
              <br />
              display, by playing a game of finding and scanning
              <br />
              AR to gain access to info cards. This solution helps
              <br />
              kids and children to enjoy reading the info's on
              <br />
              the Teasure Hunt backgrounds of Kelly Tarlton's
              <br />
              career to the app.
            </p>
          </div>
          <div className="w-1/2 pl-158px">
            <p className="text-zinc-400 text-2xl pb-6 Medium">
              Gap in the Market
            </p>
            <p className="text-white text-xl Light">
              I fond that there's gap on Kelly Tarlton's Sea Life
              <br />
              current information display, as it outdated and
              <br />
              isn't quite appealing for the target consumer of
              <br />
              Kelly Tarlton.
            </p>
          </div>
        </div>
        <div className='flex items-end justify-between'>
            <img className='w-52 object-cover h-full ml-72' src='.\src\assets\media\iPhone 12 Pro-5.png'/>
            <img className='w-267px object-cover h-full ' src='.\src\assets\media\iPhone 12 Pro-4.png'/>
            <img className='w-365px object-cover h-full mr-72' src='.\src\assets\media\iPhone 12 Pro-3.png'/>
        </div>
      </div>
    </div>
  );
}
