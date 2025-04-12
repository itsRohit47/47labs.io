/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export default function Team() {
    return (
        <motion.div className="h-full max-w-3xl mx-auto space-y-4 w-full pt-20 pb-44 flex flex-col"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>

            <div className='flex items-center justify-between gap-x-4 w-full'>
                <a href='/' className="text-white/50 hover:text-white/100 text-xs flex items-center ">
                    <ChevronLeftIcon className="inline-block w-5 h-5" /> Back Home
                </a>
                <a href='/' className="text-white/50 hover:text-white/100 text-xs flex items-center ">
                    About 47Labs <ChevronRightIcon className="inline-block w-5 h-5" />
                </a>
            </div>
            <div className='space-y-4 px-4'>
                <h1 className="text-2xl lg:text-4xl font-thin w-full ">
                    We are looking to build a team of like-minded individuals who are interested in the same topics.
                </h1>
                <p className="w-full">
                    At the moment, its only me, you can learn more about me on my Linkedin <a className='hover:text-white' href='https://www.linkedin.com/in/itsrohitbajaj/'> @itsrohitbajaj</a>. I am a software developer by trade with just over 1 year of experience working in startups and corporate environments.
                </p>
                <p className="w-full">
                    Outside of this, i come from a bussiness family and have always wanted to own an internet bussiness that solves real world problems and for that i am building 47Labs.
                </p>
                <Image src={"/about.jpg"} alt="Darknet Diaries" className="max-w-3xl h-80 mx-auto object-cover " width={1000} height={1000} />
                <p>
                    I am open to collaborations and partnerships with other companies and individuals who share our vision. If you are interested in working with us, please feel free to reach out to me on <a className='hover:text-white underline' href='https://x.com/fortysevenlabs'>X</a>
                </p>
                <p>
                    To be continued...
                </p>
            </div>
        </motion.div>
    )
}