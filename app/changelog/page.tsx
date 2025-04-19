/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from "react";
import Logo from "../_components/logo";
import { motion } from "framer-motion"


async function getGithubCommits() {
    try {
        const response = await fetch("https://api.github.com/repos/itsRohit47/47labs.io/commits");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching commits:", error);
        return [];
    }
}

export default function Changelog() {
    const [commits, setCommits] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommits = async () => {
            setLoading(true);
            const data = await getGithubCommits();
            setCommits(data);
            setLoading(false);
        };

        fetchCommits();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full h-full"
        >
            <Logo />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col gap-4 mt-10"
            >
                <h4 className="text-sm font-semibold dark:text-white/90">Latest Commits</h4>
                {loading ? (
                    <div className="text-sm dark:text-white/70">Loading commits...</div>
                ) : (
                    <ul className="list-none list-inside">
                        {commits.map((commit: any, index: number) => (
                            <motion.li
                                key={commit.sha}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                className="flex items-center gap-x-4 text-sm dark:text-white/70"
                            >
                                <div className="text-xs text-gray-500">
                                    {new Date(commit.commit.author.date).toLocaleString("en-AU", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "2-digit"
                                    }).replace(/\//g, '.')}
                                </div>
                                <div className="line-clamp-1 col-span-2 w-full">
                                    {commit.commit.message}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </motion.div>
    );
}