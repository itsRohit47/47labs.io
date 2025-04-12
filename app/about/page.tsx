/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export default function About() {
    return (
        <motion.div className="h-full max-w-3xl mx-auto space-y-4 w-full pt-20 pb-44 flex flex-col"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>

            <div className='flex items-center justify-between gap-x-4 w-full'>
                <a href='/' className="text-white/50 hover:text-white/100 text-xs flex items-center ">
                    <ChevronLeftIcon className="inline-block w-5 h-5" /> Back Home
                </a>
                <a href='team' className="text-white/50 hover:text-white/100 text-xs flex items-center ">
                    The Team <ChevronRightIcon className="inline-block w-5 h-5" />
                </a>
            </div>
            <h1 className="text-2xl lg:text-4xl font-thin w-full ">
                47Labs is a <span className='font-serif font-semibold text-white'>Hacker Lab</span> where we build cool stuff, mostly related to solving difficult technology problems using Artificial Intelligence and software!
            </h1>
            <p className="w-full">
                At its core, 47Labs is a software company that focuses on building cool and innovative projects. Its essentially an experiment lab to try and solve difficult Digital/Technical problems with the porwer of software. Few topic we are interested in are as follows:
            </p>
            <p className="w-full">
                Impact of Quantam computing and Artificial Intelligence on Security of Software, Effectiveness of AI in Software Development, AI-Powered Software Development.
            </p>
            <Image src={"/logo.png"} alt="The Theory" className="max-w-3xl h-80 mx-auto object-cover " width={1000} height={1000} />
            <p className="w-full">
                We are also interested in building a community of like-minded individuals who are interested in the same topics. We believe that by working together, we can achieve more than we could alone.
            </p>
            <p className="w-full">
                In the lab at the moment we are working on to build a product called picklock, a security platform for early stage startups. The platform is designed to help startups secure their software and data from the ground up. We are also working on a few other projects that we will be announcing soon.
            </p>
            <Image src={"/picklock.jpeg"} alt="The Theory" className="max-w-3xl h-auto mx-auto object-cover " width={1000} height={1000} />
            <p>
                To be continued...
            </p>
        </motion.div>
    )
}