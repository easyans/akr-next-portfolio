import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          Hello, my name is Aakash raj, and I am a front-end developer who is slightly obsessed with the quality of my code. 
          I am pursuing a Bachelor of Technology degree at SRM University. 
          I have spent two years developing and creating software. Currently, 
          I enjoy developing online applications with technologies such as React, Tailwind, Next JS, Angular, and GraphQL, based on my previous experiences. 
          The following programming languages and tools are familiar to me: You can ask me about the development tools I use to construct my projects, including HTML, CSS, JS, React Native, Node.js, and others. 
          Even if im learning Flutter at present. An amusing fact about me is. I consider myself to be obsessed with learning about new technologies
          </p>
          
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;