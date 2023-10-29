'use client';
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skill from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Sleepy from './Components/Sleepy/Sleepy'
import {InstanceOptions} from 'locomotive-scroll'
import PreLoader from './Components/Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  // interface CustomOptions extends InstanceOptions {
  //   smartphone: {
  //     breakpoint: number;
  //     smooth: boolean;
  //     getDirection: boolean;
  //   };
  // }

  // const options: CustomOptions = {
  //   smooth: true,
  //   getDirection: true,
  //   smartphone: {
  //     breakpoint: 0,  // Adjust the breakpoint value accordingly
  //     smooth: true,
  //     getDirection: true
  //   }
  // };

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
      {
        isLoading && <PreLoader/>
      }
      </AnimatePresence>
      <Intro />
      <About />
      <Projects />
      <Sleepy/>
      <Skill/>
      <Footer/>
    </main>
  )
}
