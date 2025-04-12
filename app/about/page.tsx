/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export default function About() {
    return (
        <motion.div className="h-full"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>

            <div className='max-w-3xl mx-auto px-4 space-y-4 w-full h-full py-16 pb-44'>
                <div className='flex items-center justify-between'>
                    <a href='/' className="text-white/50 hover:text-white/100 text-sm flex items-center ">
                        <ChevronLeftIcon className="inline-block w-5 h-5" /> Back to Home
                    </a>
                    <a href='/' className="text-white/50 hover:text-white/100 text-sm flex items-center ">
                        The Team <ChevronRightIcon className="inline-block w-5 h-5" />
                    </a>
                </div>
                <h1 className="text-2xl lg:text-4xl font-thin ">
                    47Labs is a <span className='font-serif font-semibold text-white'>Hacker Lab</span> where we build cool stuff, mostly related to solving difficult technology problems using Artificial Intelligence and software!
                </h1>
                <p className="">
                    At its core, 47Labs is a software company that focuses on building cool and innovative projects. Its essentially an experiment lab to try and solve difficult Digital/Technical problems with the porwer of software. Few topic we are interested in are as follows:
                </p>
                <p className="">
                    Impact of Quantam computing and Artificial Intelligence on Security of Software, Effectiveness of AI in Software Development, AI-Powered Software Development.
                </p>
                <p className="">
                    <img src="/logo.png" alt="The Theory" className="w-full h-80 object-cover mx-auto" />
                </p>
                <p className="">
                    We are also interested in building a community of like-minded individuals who are interested in the same topics. We believe that by working together, we can achieve more than we could alone.
                </p>
                <p className="">
                    In the lab at the moment we are working on to build a product called picklock, a security platform for early stage startups. The platform is designed to help startups secure their software and data from the ground up. We are also working on a few other projects that we will be announcing soon.
                </p>
                <img src="/picklock.jpeg" alt="The Theory" className="w-full h-auto object-cover mx-auto" />
                <p>
                    To be continued...
                </p>
            </div>
        </motion.div>
    )
}