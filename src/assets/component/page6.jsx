import React from "react";

export default function Page6() {
  return (
    <div className="container mx-auto bg-[#21211e] pb-5">
      <div>
        <p className="text-zinc-400 text-2xl pb-6 Regular pl-158px">Problem</p>
      </div>
      <div className="flex">
        <div className="w-1/2 pl-158px">
          <p className="text-white text-xl Light pb-12">
            Through my research i find that the current
            <br />
            information display in Kelly Tarlton's Sea Life is
            <br />
            outdated and overwhelming, the experience could
            <br />
            be improve upon for kids and children's interact.
          </p>
          <img src='.\src\assets\media\bord1.png'/>
        </div>
        <div className="w-1/2">
          <img src='.\src\assets\media\bord2.png'/>
          <p className="text-zinc-400 text-xl Light text-right pr-40 pt-3">Current information display in Kelly Tarlton's Sea Life</p>
        </div>
      </div>
    </div>
  );
}
