import { useRouter } from 'next/router';
import React from 'react';

import nikestore from '../../public/assets/portfolio/nikestore.png';

import musicweb from '../../public/assets/portfolio/musicweb.png';

import realsandshows from '../../public/assets/portfolio/realsandshows.png';

import responsivetodolist from '../../public/assets/portfolio/responsivetodolist.png';

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

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
  
  const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

  export async function getStaticPaths() {
    const paths = portfolios.map((p) => ({
      params: { id: p.url },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const portfolio = getPortfolioFrom(params.id);
  
    return {
      props: { portfolio },
    };
  }


const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {

  return <div className="h-fit w-full text-center">
    <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
        <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
            <BiChevronLeft size={25} /> back
            </div>
        </Link>
        </div>
         <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
         {title}
            </h1>
            <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
            <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-center md:text-left my-4 text-2xl font-bold">
                Description
            </h2>
            <p>In this repository, you can find front-end websites created with HTML, CSS, JavaScript, 
                react/react native, and tailwind CSS in this repository. You may see this front-end 
                project right now.This website was specifically created for web development projects only.
            </p>   
            <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-sky-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/easyans">
            <div className="group flex items-center justify-center my-8 bg-sky-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>

    </div>
  </div>
};

export default OnePortfolio;
