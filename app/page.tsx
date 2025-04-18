/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { HomeIcon, BoxIcon, PencilIcon, SendIcon, ArrowUpRightIcon } from "lucide-react";

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
  const [success, setSuccess] = useState(false);

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
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);
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
      setLoading(false);
    }
  };

  const links = [
    { name: "Home", icon: <HomeIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/" },
    { name: "Products", icon: <BoxIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/features" },
    { name: "Notes", icon: <PencilIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/blog" },
    { name: "Contact", icon: <SendIcon className="h-4 w-4" strokeWidth={1.5} />, href: "/contact" },
  ];

  const products = [
    { name: "PickLock", description: "Bug Bounty Marketplace for AI Era", href: "https://picklock.47labs.io", icon: "/picklock.png" },
    { name: "47Labs", description: "Home to all of 47labs products", href: "https://47labs.io", icon: "/logo.png" },
    { name: "Techfolio", description: "No-code portfolio builder for tech professionals", href: "https://techfolio.gg", icon: null },
  ]

  //effect to set loaded to true after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const [currentLink, setCurrentLink] = useState(links[0].name);
  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex items-center justify-center h-screen"
        >
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white/80 border"></div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-32"
        >
          <div className="flex flex-col w-full text-sm font-light justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-4 mb-10"
            >
              <div className="flex">
                <div className="flex flex-col w-full">
                  <h1 className=" text-white text-lg">
                    <span className="">47</span><span className="text-white/70">Labs</span>
                  </h1>
                  <p className="text-white/70">
                    Build <span>•</span> Ship <span>•</span> Scale <span>•</span> Repeat
                  </p>
                  <h1 className="text-3xl lg:text-6xl text-white font-row-2 mt-10">
                    <span className="">Hacker Lab</span> <span className="text-white/80 font-semibold text-xl font-row">based in Melbourne, Australia!</span>
                  </h1>
                  <p className="text-white/70 text-sm mt-4">
                    47 labs is my personal hacking lab where i try out new ideas and build products that i think can help the community. I am a solo hacker and i love to build things that can help others.
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
              <div className="gap-3 flex flex-col">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    onClick={() => window.open(product.href, '_blank')}
                    className="flex group cursor-pointer rounded-lg p-4 items-center gap-x-4 border border-white/10 hover:bg-white/2 transition-colors duration-300"
                  >
                    {product.icon ? (
                      <img src={product.icon} alt={product.name} className="w-10 h-10 object-cover rounded-sm" />
                    ) : (
                      <BoxIcon className="w-10 h-10 text-white/80 p-2 bg-white/10 rounded-sm" strokeWidth={1.5} />
                    )}
                    <div>
                      <h3 className="text-sm">{product.name}</h3>
                      <p className="text-white/70 text-xs">{product.description}</p>
                    </div>
                    <ArrowUpRightIcon className="h-5 w-5 text-white/70 ml-auto group-hover:text-white group-hover:translate-x-0 -translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-xs text-white/70">Built with ❤️ by <a href="https://www.linkedin.com/in/itsrohitbajaj/" target="_blank" className="text-white/70 hover:text-white transition-colors duration-300">@row</a></h3>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
