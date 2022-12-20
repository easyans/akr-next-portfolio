import React from "react";

import { MdExpandMore } from "react-icons/md";

import nikestore from '../public/assets/portfolio/nikestore.png'

import musicweb from '../public/assets/portfolio/musicweb.png'

import realsandshows from '../public/assets/portfolio/realsandshows.png'

import responsivetodolist from '../public/assets/portfolio/responsivetodolist.png'
import Link from "next/link";
import Image from "next/image";




const Portfolio = () => {

   const portfolio = [
    {
        id: 1,
        title: 'nikestore app',
        imageSrc: nikestore,
        url: 'nikestore'
    },
    {
        id: 2,
        title: 'musicweb',
        imageSrc: musicweb,
        url: 'musicweb'
    },
    {
        id: 3,
        title: 'realsandshows',
        imageSrc: realsandshows,
        url: 'realsandshows'
    },
    {
        id: 4,
        title: 'responsivetodolist',
        imageSrc: responsivetodolist,
        url: 'responsivetodolist'
    },
   ];


   return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-lg">
        In this portfolio, you may find front-end websites created with HTML,CSS, js, tailwind, react and react native .To see more of my portfolio projects, visit my GitHub page like data structure projects and more
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolio.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;