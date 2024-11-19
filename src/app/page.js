"use client";

import React, {useState} from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = target.offPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
    {/* navbar start */}
    <header className="bg-white shadow-md shadow-blue-400 top-0 left-0 w-full flex items-center z-10 fixed">
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-lg text-black block py-6">nadiaindira</a>
                </div>
                <div className="flex items-center px-4">
                <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${
                  menuOpen ? "hamburger-active" : ""
                }`}
                onClick={toggleMenu}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

                    <nav id="nav-menu" className={`absolute right-4 top-full ${
                      menuOpen ? "" : "hidden"
                      } w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg shadow-blue-400 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
                    >           
                          <ul className="block lg:flex">
                            <li className="group">
                                <a href="#home" onClick={(e) => {
                                  e.preventDefault();
                                  handleScroll("home");
                                }}
                                className="text-base text-black py-2 mx-8 flex group-hover:text-slate-500">Home</a>
                            </li>
                            <li className="group">
                                <a href="#about" onClick={(e) => {
                                  e.preventDefault();
                                  handleScroll("about");
                                }} 
                                className="text-base text-black py-2 mx-8 flex group-hover:text-slate-500">About</a>
                            </li>
                            <li className="group">
                                <a href="#project" onClick={(e) => {
                                  e.preventDefault();
                                  handleScroll("project");
                                }} 
                                className="text-base text-black py-2 mx-8 flex group-hover:text-slate-500">Projects</a>
                            </li>
                            <li className="group">
                                <a href="#certificate" onClick={(e) => {
                                  e.preventDefault();
                                  handleScroll("certificate");
                                }} 
                                className="text-base text-black py-2 mx-8 flex group-hover:text-slate-500">Certificates</a>
                            </li>
                            <li className="group">
                                <a href="#contact" onClick={(e) => {
                                  e.preventDefault();
                                  handleScroll("contact");
                                }}
                                className="text-base text-black py-2 mx-8 flex group-hover:text-slate-500">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
     </header>

    {/* navbar end */}


    {/* home start */}
    <section id="home" className="pt-36 flex flex-col justify-center items-center">
      <Image src="/img/i.png" width={150} height={150} alt="n" className="rounded-full aspect-square m-auto" />

      <div className="flex flex-col gap-2 mt-6 items-center">
      <h1 className="font-bold text-3xl ">NADIA INDIRA</h1>
      <p className="font-semibold text-lg bg-gradient-to-r from-linear to-gray-500 text-transparent bg-clip-text">FrontEnd Dev</p>
      </div>

      <div className="flex flex-col gap-2 mt-8 px-6">
        <div className='flex items-center gap-2'>
          <Image src="/icon-education.svg" alt="education" width={35} height={35} className="" />
          <p className="font-semibold text-lg bg-gradient-to-r from-linear to-gray-500 text-transparent bg-clip-text">Education</p>
        </div>

        <div className="flex flex-wrap bg-white border border-blue-800 shadow-md shadow-blue-800 w-full lg:w-[460px] h-[98px] lg:h-[59px] rounded-full px-4 lg:px-0 py-2 lg:py-0">
          <Image src="/img/favicon.png" alt="logo" width={58} height={58} className="lg:-translate-x-2" />
          <div className="mt-1">
            <h1 className="font-bold text-black text-base ml-2">SMKN 1 MAJALENGKA</h1>
            <p className="font-light text-black ml-2">Rekayasa Perangkat Lunak</p>
          </div>
          <p className="font-light text-black lg:mt-1 ml-16 lg:ml-14">2022 - Now</p>
        </div>
      </div>

    <div className="flex flex-wrap gap-4 justify-center">
      <div className="bg-white border border-blue-800 shadow-md shadow-blue-800 w-20 h-8 mt-10  rounded-full">
        <p className="text-black text-base ml-4 mt-1">HTML</p>
      </div>
      <div className="bg-white border border-blue-800 shadow-md shadow-blue-800 w-20 h-8 mt-10 rounded-full">
        <p className="text-black text-base ml-5 mt-1">CSS</p>
      </div>
      <a href="https://nodejs.org/en/" className="bg-white border border-blue-800 hover:opacity-80 shadow-md shadow-blue-800 w-28 h-8 mt-10 rounded-full">
        <p className="text-black text-base ml-6 mt-1">node JS</p>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="bg-white border border-blue-800 hover:opacity-80 shadow-md shadow-blue-800 w-28 h-8 mt-10 rounded-full">
        <p className="text-black text-base ml-4 mt-1">JavaScript</p>
      </a>
      <a href="https://reactjs.org/" className="bg-white border border-blue-800 shadow-md shadow-blue-800 w-20 h-8 mt-10 hover:opacity-80 rounded-full">
        <p className="text-black text-base ml-4 mt-1">React</p>
      </a>
      <a href="https://github.com/" className="bg-white border border-blue-800 shadow-md shadow-blue-800 w-24 h-8 mt-10 hover:opacity-80 rounded-full">
        <p className="text-black text-base ml-6 mt-1">Github</p>
      </a>
    </div> 
    </section>
    {/* home end */}

    {/* about start */}
    <div id="about" className="flex flex-col gap-2 mt-20 items-center">
        <h2 className="font-bold text-3xl">About Me</h2>
        <p className="font-semibold text-sm bg-gradient-to-r from-linear to-gray-500 text-transparent bg-clip-text">Get to know me</p>
        <p className="text-center text-sm w-full mt-4 md:w-[700px]">Saya, Nadia Indira Putri Rohmah, adalah seorang siswi di SMKN 1 Majalengka yang
                        saat ini mengambil jurusan Rekayasa Perangkat Lunak (RPL). Saya dikenal dengan
                        panggilan Nadia atau Indir. Saya dikenal sebagai pribadi yang mungkin
                        peduli terhadap orang terdekat, mudah beradaptasi dalam berbagai situasi,
                        dan berusaha untuk mencapai tujuan yang telah ditetapkan juga melakukan yang
                        terbaik.</p>
    </div>
    {/* about end */}

    {/* project start */}
    <div id="project" className="flex flex-col gap-2 mt-20 items-center">
      <h2 className="font-bold text-3xl">Projects</h2>
      <p className="font-semibold text-sm bg-gradient-to-r from-linear to-gray-500 text-transparent bg-clip-text">Some of my Work</p>
    </div>

    <div className="flex flex-wrap justify-center gap-5 mt-10">
      <div className="bg-white w-[280px] h-[360px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/apt.png" alt="apt" width={1200} height={1800} className="rounded-xl shadow-md shadow-blue-800" />
        <h1 className="text-black font-bold text-sm ml-3 mt-2 ">PERSONAL TASK - ZENLYTICS</h1>
        <p className="text-sm mt-2 ml-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti exercitationem sint harum ipsam cum.</p>
      <div className="flex items-center justify-center text-black bg-white w-28 h-7 text-center text-sm ml-3 mt-4 border border-blue-800 shadow-md shadow-blue-800 rounded-lg hover:opacity-80">
        <a href="https://aplikasi-personal-task.vercel.app/">selengkapnya</a>
      </div>
      </div>
      <div className="bg-white w-[280px] h-[360px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/sbw2.png" alt="sb" width={1100} height={1800} className="rounded-xl shadow-md shadow-blue-800" />
        <h1 className="text-black font-bold text-sm ml-3 mt-2 ">SIMPLE BLOG - WANDER</h1>
        <p className="text-sm mt-2 ml-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti exercitationem sint harum ipsam cum.</p>
      <div className="flex items-center justify-center text-black bg-white w-28 h-7 text-center text-sm ml-3 mt-4 border border-blue-800 shadow-md shadow-blue-800 rounded-lg hover:opacity-80">
        <a href="https://sawala-blog.vercel.app">selengkapnya</a>
      </div>
      </div>
    </div>
    {/* project end */}

    {/* certificate start */}
    <div id="certificate" className="flex flex-col gap-2 mt-20 items-center">
      <h2 className="font-bold text-3xl">Certificates</h2>
      <p className="font-semibold text-sm bg-gradient-to-r from-linear to-gray-500 text-transparent bg-clip-text">Several Certificates</p>
    </div>

    <div className="flex flex-wrap justify-center gap-5 mt-10">
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/kurin.png" alt="kurin" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">KUNJUNGAN INDUSTRI</h2>
        <p className="text-sm text-black mt-2 ml-3">Gamelab Indonesia</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/118OANXRmElqvLBhc5ewz_j-SIICELUvb/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/gamelab1.png" alt="gamelab1" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">HTML, CSS, DAN JAVASCRIPT</h2>
        <p className="text-sm text-black mt-2 ml-3">Gamelab Indonesia</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/1CU7eOboYRCP-OUDUGRYLXVFQs_34cqGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/gamelab2.png" alt="gamelab2" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">NODEJS DAN MYSQL</h2>
        <p className="text-sm text-black mt-2 ml-3">Gamelab Indonesia</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/13aFiHPu6VGmfgr8gqAf_gcvfUIhJYLnp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/gamelab3.png" alt="gamelab3" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">NODEJS DAN MONGODB</h2>
        <p className="text-sm text-black mt-2 ml-3">Gamelab Indonesia</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/1GdOzlsvvlsGzcMHDaJVJFr7Tn-hn1z7r/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/simbus-ptn.png" alt="simbus-ptn" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">E-SERTIFIKAT SIMBUS PTN</h2>
        <p className="text-sm text-black mt-2 ml-3">Webinar Yapindo</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/1lTGrB4oeZ3zybN4DopyNnEkH9aZHMn9A/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
      <div className="bg-white w-[280px] h-[260px] border border-blue-800 shadow-lg shadow-blue-800 rounded-xl">
        <Image src="/img/K3.png" alt="k3" width={890} height={280} className="rounded-xl shadow-md shadow-blue-800" />
        <h2 className="text-black font-bold text-sm ml-3 mt-2 ">E-LEARNING K3</h2>
        <p className="text-sm text-black mt-2 ml-3">Pembelajaran Platform Digital</p>
        <div className="relative">
          <a href="https://drive.google.com/file/d/15OW2rtyy-FSeHlnWKcWDXamC9j19fevl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Image src="/send.svg" alt="send" width={35} height={35} className="absolute bottom-1 right-3 hover:opacity-80" />
          </a>
        </div>
      </div>
    </div>
    {/* certificate end */}

    {/* contact me start */}
    <div id="contact" className="flex flex-col gap-2 mt-20 items-center">
      <h2 className="font-bold text-3xl">Contact Me</h2>
    </div>
    
    <div className="flex flex-wrap gap-5 mt-10 m-auto bg-white w-full max-w-md h-auto p-6 border border-blue-800 shadow-lg shadow-blue-800 rounded-lg">
    <form action="#" method="POST" className="flex flex-col space-y-5 w-full">
        <div>
        <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
          Name
        </label>
          <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="block w-full rounded-md border border-blue-800 p-3 text-gray-900 shadow-md placeholder:text-gray-300"
          placeholder="your name"
          />
        </div>

        <div>
        <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
          Email address
        </label>
          <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="block w-full rounded-md border border-blue-800 p-3 text-gray-900 shadow-md placeholder:text-gray-300"
          placeholder="your email"
          />
        </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
          Message
        </label>
        < textarea
          id="message"
          name="message"
          required
          className="block w-full rounded-md border border-blue-800 p-3 text-gray-900 shadow-md placeholder:text-gray-300"
          placeholder="your message"
          rows="4"
          />
        </div>
        
          <button type="submit" className="w-full rounded-md bg-blue-800 text-white p-3 font-semibold hover:bg-blue-700">
            send
          </button>
    </form>
    </div> 
    {/* contact me end */}

    {/* footer start */}
    <hr className="m-auto gap-2 mt-24 border-t border-blue-800" />
    
      <div className="flex items-center justify-between my-8 ms-32">
      <p className="font-medium text-xs text-slate-500">© 2024 Nadia Indira All rights reserved.</p>
      <div className="flex me-32">
       {/* Tiktok  */}
        
       <a href="https://tiktok.com/@dirapt_" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-blue-800 text-slate-800 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
       <svg role="img" width="20" className="fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
       </a>
        
       {/* Instagram */}

       <a href="https://instagram.com/indirpr._" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-blue-800 text-slate-800 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
       <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
       </a>
      
       {/* Linkedin */}
       
       <a href="https://linkedin.com/in/nadia. ipr" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-blue-800 text-slate-800 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
       <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
       </a>

       {/* Github */}

       <a href="https://github.com/Indir8" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-blue-800 text-slate-800 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
        <Image src="/icon-github.svg" alt="icon-github" width={20} height={20} />
       </a>
       </div>
      </div>

    {/* footer end */}

    </>
  );
}
