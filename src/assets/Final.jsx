import React from "react";
import Navbar from './navbar'
import Intro from './intro';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Page7 from './page7';
import Outtro from './outtro'
import Start from './start';
import Copyright from './copyright';

export default function Final() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Page1 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page2 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page3 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page4 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page5 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page6 />
      <section class="container mx-auto py-10 bg-[#21211e]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page7 />
      <section class="container mx-auto py-10 bg-[#ffffff]">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Outtro />
      <Start />
      <Copyright />
    </div>
  );
}
