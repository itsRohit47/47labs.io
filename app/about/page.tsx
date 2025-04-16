/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export default function About() {
    return (
        <motion.div className="h-full max-w-3xl mx-auto space-y-4 w-full pt-6 px-2 pb-44 flex flex-col"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>

            <div className='flex items-center justify-between gap-x-4 w-full'>
                <a href='/' className="text-white/80 hover:text-white/100 text-xs flex items-center ">
                    <ChevronLeftIcon className="inline-block w-5 h-5" /> Back Home
                </a>
                <a href='team' className="text-white/80 hover:text-white/100 text-xs flex items-center ">
                    The Team <ChevronRightIcon className="inline-block w-5 h-5" />
                </a>
            </div>
            <div className='space-y-4 px-4'>
                <h1 className="text-2xl lg:text-4xl font-thin w-full ">
                    47Labs is a <span className='font-serif font-semibold text-white'>Hacker Lab</span>...
                </h1>
                <p className="w-full">
                    The idea behind 47Labs is to try and experiment building software products that in some sense solve real world problems. Its more of my hobby thing, where i try to build things that i find interesting and useful. I am not looking to build a billion dollar company (atleast for now), but rather a small team of like-minded individuals who are interested in the same topics.
                </p>
                <Image src={"/logo.png"} alt="The Theory" className="w-full max-h-44 lg:max-h-80 h-full mx-auto object-cover " width={1000} height={1000} />
                <p className="w-full">
                    We are also interested in building a community of like-minded individuals who are interested in the same topics. We believe that by working together, we can achieve more than we could alone.
                </p>
            </div>
        </motion.div>
    )
}