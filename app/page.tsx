/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { HomeIcon, BoxIcon, PencilIcon, SendIcon, ArrowUpRightIcon, MoonIcon, SunIcon } from "lucide-react";

// Theme toggle component
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme state based on localStorage or system preference
    setIsDarkMode(
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors fixed top-2 cursor-pointer right-4"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 text-yellow-400" strokeWidth={1.5} />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-600" strokeWidth={1.5} />
      )}
    </button>
  );
};

const countries = [
  { name: "United States", emoji: "🇺🇸" },
  { name: "United Kingdom", emoji: "🇬🇧" },
  { name: "Canada", emoji: "🇨🇦" },
  { name: "Australia", emoji: "🇦🇺" },
  { name: "India", emoji: "🇮🇳" },
  { name: "Japan", emoji: "🇯🇵" },
  { name: "Germany", emoji: "🇩🇪" },
  { name: "France", emoji: "🇫🇷" },
  { name: "Singapore", emoji: "🇸🇬" },
  { name: "Other", emoji: "🌍" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [success, setSuccess] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  useEffect(() => {
    const hasJoined = localStorage.getItem('hasJoined');
    if (hasJoined === 'true') {
      setSuccess(true);
    }
  }, []);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setInvalidEmail(true);
      return;
    }

    setLoading2(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          country
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      localStorage.setItem('hasJoined', 'true');
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Failed to join waitlist. Please try again.');
    } finally {
      setLoading2(false);
    }
  };

  const links = [
    { name: "Home", icon: <HomeIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/" },
    { name: "Products", icon: <BoxIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/features" },
    { name: "Notes", icon: <PencilIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/blog" },
    { name: "Contact", icon: <SendIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/contact" },
  ];

  const products = [
    { name: "47Labs", description: "Home to all of 47labs products", href: "https://47labs.io", icon: "/logo.png" },
    { name: "PickLock", description: "Bug Bounty Marketplace for AI Era", href: "https://picklock.47labs.io", icon: "/picklock.png" },
    { name: "Techfolio", description: "No-code portfolio builder for techies", href: "https://techfolio.gg", icon: null },
    { name: "10x Next.js Starter Template", description: "Next.js (app) + tRPC + prisma + next-auth", href: "https://github.com/itsRohit47/10xdev-next", icon: null },
  ]

  const writings = [
    { title: "CS50 - Introduction to Artificial Intelligence using Python by HarvardX", href: "https://www.notion.so/CS50AI25-Notes-1b572b3003aa80889315fd68376b26e8?pvs=4", category: "Notes" },
    { title: "SQL Notes - Good to go over these in case you have an interview or something", href: "https://www.notion.so/SQL-Notes-1d772b3003aa807cbd3aeefe1f5daa0c", category: "Notes" },
    { title: "Data Structures and Algorithms", href: "https://www.notion.so/DSA-Notes-1b272b3003aa801284d4f89374b1a60a?pvs=4", category: "Notes" },
    { title: "Web Development - advanced stuff, a level above basics", href: "https://www.notion.so/DSA-Notes-1b272b3003aa801284d4f89374b1a60a?pvs=4", category: "Notes" },
    { title: "This is what i would use to start from basics of development side of technology", href: "https://www.notion.so/Dev-Resources-KickStarter-0-1-1c572b3003aa80718759dfc1749abd54?pvs=4", category: "Resources" },
    { title: "List of raw ideas, captured here and there, could become products, not sure", href: "https://www.notion.so/Raw-Ideas-13f72b3003aa80349d92d4280ee3a667?pvs=4", category: "Dumps/Ideas/Tips" },
    { title: "Lessons from building my first product, trying to sell it, and avoiding costly ($$$) mistakes", href: "https://www.notion.so/Lessons-from-Building-My-First-Product-1d972b3003aa80b1bda4f04e1be3f3b9?pvs=4", category: "Dumps/Ideas/Tips" },
  ]

  //effect to set loaded to true after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const [currentLink, setCurrentLink] = useState(links[0].name);
  return (
    <div className="flex flex-col w-full h-full ">
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex items-center justify-center h-full gap-x-3"
        >
          <div>
            <h1 className=" dark:text-white text-lg font-semibold">
              <span className="">47</span><span className="dark:text-white/70 text-black/70">Labs</span>
            </h1>
            <p className="dark:text-white/70 text-black/70">
              Build <span>•</span> Ship <span>•</span> Scale <span>•</span> Repeat
            </p>
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              className="mt-2"
            >
              {[...Array(10)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={i * 11}
                  y={0}
                  width="8"
                  height="20"
                  fill="currentColor"
                  className="dark:text-white/70 text-black/70"
                  initial={{ scaleY: 0.5 }}
                  animate={{
                    scaleY: [0.5, 1, 0.5],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1
                    }
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col h-full "
        >
          {/* <ThemeToggle /> */}
          <div className="flex flex-col w-full text-sm font-light">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-4 mb-10 pt-6"
            >
              <div className="flex">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-x-2">
                    {/* <img src={'logo.png'} alt={'logo'} className="w-12 h-12 object-cover rounded-sm" /> */}
                    <div>
                      <h1 className=" dark:text-white text-lg font-semibold">
                        <span className="">47</span><span className="dark:text-white/70 text-black/70">Labs</span>
                      </h1>
                      <p className="dark:text-white/70 text-black/70">
                        Build <span>•</span> Ship <span>•</span> Scale <span>•</span> Repeat
                      </p>
                    </div>
                  </div>

                  <h1 className="text-3xl lg:text-6xl dark:text-white  mt-10">
                    <span className="font-row-2">Hacker Lab</span> <span className="dark:text-white/80 font-thin text-sm lg:text-xl">Based in Melbourne, Australia!</span>
                  </h1>
                  <p className="dark:text-white/70 text-black text-sm mt-4">
                    47 labs is my (<a href="https://www.linkedin.com/in/itsrohitbajaj/" target="_blank" className="dark:text-white/70 dark:hover:text-white hover:underline transition-colors duration-300">@row</a>) digital home for my projects, ideas, and experiments. I like to learn, write, share, and build things. Join the waitlist to get notified when I launch something
                  </p>
                  <p className="dark:text-white/70 text-black text-sm mt-4">
                    <span className="font-semibold">Note:</span> <span className="dark:text-white/70 text-black/70">website and notes not fully backed yet, check back later ✨</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-4 mb-10"
            >
              <h3 className="text-xs font-medium dark:text-white/90">All Products</h3>
              <div className="gap-3 grid lg:grid-cols-2">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    onClick={() => window.open(product.href, '_blank')}
                    className="flex group cursor-pointer rounded-lg p-4 items-center gap-x-4 border border-gray-200 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/2 transition-colors duration-300"
                  >
                    <div>
                      <h3 className="text-sm">{product.name}</h3>
                      <p className="dark:text-white/70 text-black/70 text-xs">{product.description}</p>
                    </div>
                    <ArrowUpRightIcon className="h-5 w-5 dark:text-white/70 text-black/70 ml-auto dark:group-hover:text-white group-hover:translate-x-0 -translate-x-1 group-hover:scale-105 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col space-y-6 mb-10"
            >
              {Object.entries(writings.reduce((acc, writing) => {
                // Group writings by category
                acc[writing.category] = acc[writing.category] || [];
                acc[writing.category].push(writing);
                return acc;
              }, {} as Record<string, typeof writings>)).map(([category, items], categoryIndex) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-xs font-medium dark:text-white/90">{category}</h3>
                  {items.map((writing, index) => (
                    <motion.div
                      key={writing.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + (categoryIndex * 0.1) + (index * 0.05) }}
                      className="flex group cursor-pointer rounded-lg items-center gap-x-4 transition-colors duration-300"
                    >
                      <a href={writing.href} target="_blank" className="dark:text-white/70 text-black/70 text-sm hover:underline flex gap-x-1 items-center transition-all duration-300">{writing.title}<ArrowUpRightIcon className="h-4 w-4 dark:text-white/70 text-black/70 ml-auto dark:group-hover:text-white opacity-0  group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
            {/* email collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col space-y-2 mb-10"
            >
              <h3 className="text-xs font-medium dark:text-white/90">Join the waitlist</h3>

              {!success ? (
                <motion.p
                  initial={{ opacity: 0, y: 4, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-sm mt-2">Thanks for joining the waitlist! 🎉</motion.p>
              ) : <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-x-3 text-sm relative mt-2">
                  <div className="flex flex-col space-y-2 w-full items-center justify-center">
                    <input
                      type="text"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setInvalidEmail(e.target.value !== '' && !isValidEmail(e.target.value));
                      }}
                      className={`border ${invalidEmail ? 'border-red-500' : 'border-gray-200 dark:border-white/10'} dark:bg-white/5 bg-gray-50 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/10 transition-all duration-150`}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading2 || success}
                    className={`bg-primary dark:text-black text-nowrap text-white rounded-md px-4 py-2 ${loading2 || success ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/80 transition-colors text-nowrap duration-300'}`}
                  >
                    {loading2 ? 'API-ing' : success ? 'Joined!' : 'Join the waitlist'}
                  </button>
                </div>
              </div>}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1 }}
              className=""
            >
              <h3 className=" text-xs dark:text-white/70 text-black/70 mb-32">Built with ❤️ by <a href="https://www.linkedin.com/in/itsrohitbajaj/" target="_blank" className="dark:text-white/70 dark:hover:text-white hover:underline transition-colors duration-300">@row</a></h3>
            </motion.div>
          </div >
        </motion.div >
      )
      }
    </div >
  );
}
