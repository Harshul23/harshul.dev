import React from 'react'
import { Inter } from "next/font/google";
import ProjectCard from './project-card';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const Projects = () => {
  return (
    <div className='h-[90vh] w-full flex flex-col justify-center gap-12 text-4xl font-bold py-8 px-12'>
      <span className='uppercase'>So far I build ...</span>

      <div className='flex flex-col justify-evenly items-center gap-8 h-full w-full'>
        <ProjectCard name="Hello"/>
      </div>
    </div>
  )
}

export default Projects
