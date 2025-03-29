/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';
export default function Theory() {
    return (
        <motion.div className="max-w-7xl mx-auto py-16 px-4 text-center"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>
            <a href='/' className="text-white/50 hover:text-white/100 mb-4 text-sm">
                Home
            </a>
            <h1 className="text-4xl font-thin mb-8">The Theory - 47Labs.io</h1>
            <section className="mb-8">
                <img src="/theory1.png" alt="The Theory" className="w-full h-auto mb-4" />
            </section>
        </motion.div>
    )
}