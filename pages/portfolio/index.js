import React from "react";

import nikestore from '../../public/assets/portfolio/nikestore.png';

import musicweb from '../../public/assets/portfolio/musicweb.png';

import realsandshows from '../../public/assets/portfolio/realsandshows.png';

import responsivetodolist from '../../public/assets/portfolio/responsivetodolist.png';
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";


export const getStaticProps = async () => {
  const portfolios = [
    {
       id: 1,
            title: 'nikestore app',
            imageSrc: nikestore,
            url: 'nikestore',
    },
    {
       id: 2,
            title: 'musicweb',
            imageSrc: musicweb,
            url: 'musicweb',
    },
    {
      id: 3,
            title: 'realsandshows',
            imageSrc: realsandshows,
            url: 'realsandshows',
    },
    {
       id: 4,
            title: 'responsivetodolist',
            imageSrc: responsivetodolist,
            url: 'responsivetodolist',
    },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
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
      </div>
    </div>
  );
};

export default PortfoliosRoute;