/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
export default function Team() {
    return (
        <motion.div className="max-w-7xl mx-auto py-16 px-4 text-center "
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>
            <a href='/' className="text-white/50 hover:text-white/100 mb-4 text-sm">
                Home
            </a>
            <h1 className="text-2xl lg:text-4xl font-thin mb-8">The Team - 47Labs.io</h1>
            <img src="/team.png" alt="The Theory" className="w-72 h-auto mx-auto" />
            <a href='https://www.linkedin.com/in/itsrohitbajaj/' target='_blank' className="text-white/50 hover:text-white/100 text-sm">
                Join 47Labs
            </a>
        </motion.div>
    )
}