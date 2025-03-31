/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
export default function Theory() {
    return (
        <motion.div className="max-w-3xl mx-auto py-16 px-4 text-center"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>
            <a href='/' className="text-white/50 hover:text-white/100 mb-4 text-sm">
                Home
            </a>
            <h1 className="text-2xl lg:text-4xl font-thin mb-8">47Labs.io</h1>
            <section className="mb-8">
                <p className="text-gray-300">
                    At its core, 47Labs is a software company that focuses on building cool and innovative projects. Its essentially an experiment lab for me to try out new ideas and technologies. We are currently working on two main projects that are in the early stages of development:
                </p>
                <div className="text-gray-300 text-sm lg:text-base mt-10 space-y-2">
                    <p>
                        jam.47labs.io - discover music and connect with others
                    </p>
                    <p>
                        studio.47labs.io - ai powered software development studio
                    </p>
                </div>
                <div className="text-gray-300 text-sm lg:text-base mt-10">
                    <a className='hover:text-white underline' href='/'>Join our waitlist</a> to be the first to know when we launch these projects. We are excited to share our journey with you and hope you will join us on this adventure!
                </div>
                {/* <img src="/theory1.png" alt="The Theory" className="w-full h-auto mb-4" /> */}
            </section>
        </motion.div>
    )
}