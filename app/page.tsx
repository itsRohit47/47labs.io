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
  const [loading, setLoading] = useState(false);
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

  const [currentLink, setCurrentLink] = useState(links[0].name);
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }} className="pb-32">
      <div className="flex flex-col w-full text-sm font-light justify-center">
        <div className="flex gap-x-4 items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">47<span className="text-white/70">Labs</span></h1>
            <p className="text-white/70">
              Build <span>•</span> Ship <span>•</span> Scale <span>•</span> Repeat
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {links.map((link) => (
              <motion.div
                onClick={() => setCurrentLink(link.name)}
                key={link.name}
                className={`flex relative group items-center gap-x-2 cursor-pointer hover:text-white transition-all duration-300 px-3 py-2 rounded-lg ${link.name === currentLink ? " bg-white/10 " : "text-white/70 hover:bg-white/5"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                layout
                title={link.name === currentLink ? '' : link.name} // Simple tooltip
              >
                {link.icon}
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: link.name === currentLink ? "auto" : 0,
                    opacity: link.name === currentLink ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className={`overflow-hidden whitespace-nowrap ${link.name === currentLink ? "block" : "hidden"} text-xs`}
                >
                  {link.name}
                </motion.span>
                {link.name !== currentLink && (
                  <div className="absolute hidden group-hover:block px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                    {link.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* hero */}
        <div className="flex flex-col space-y-4 my-10 ">
          <div className="flex">
            <div className="flex flex-col space-y-4 w-full">
              <h1 className="text-3xl lg:text-6xl text-white font-row-2">
                <span className="">Hacker Lab</span> <span className="text-white/80 font-light font-row">based in Melbourne, Australia!</span>
              </h1>
              <p className="text-xs lg:text-sm w-fit px-4 py-2 bg-white/5 text-primary rounded-lg">
                ⚠️ Website is under construction. Last updated on 2025-04-18 
              </p>
              {/* <div className="mt-4">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg text-sm bg-white text-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/90 transition-colors duration-300"
                >
                  Join Waitlist
                </button>
              </div> */}
            </div>
          </div>

        </div>
        <div className="flex flex-col space-y-4 mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-row font-bold text-white/80">
              Recent Work
            </h1>
            <a href="/products" className="text-xs text-white/70 hover:text-white transition-colors duration-300">
              View all <ArrowUpRightIcon className="h-4 w-4 inline-block" strokeWidth={1.5} />
            </a>
          </div>
          <div className="gap-4 flex flex-col">
            {products.map((product) => (
              <div key={product.name}
                onClick={() => window.open(product.href, '_blank')}
                className="flex group cursor-pointer   rounded-lg p-4 items-center gap-x-4 border border-white/10 hover:bg-white/2 transition-colors duration-300">
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
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col space-y-4 mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-row font-bold text-white/80">
              Join the Waitlist
            </h1>

          </div>
          {!success ? (
            <>
              <form className="grid lg:grid-cols-2 gap-4 w-full text-xs">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg px-4 py-3 outline-none  border-white/10 w-full bg-white/5 focus:bg-white/10 transition-colors duration-300 hover:bg-white/10 [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgba(255,255,255,0.05)_inset]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg px-4 py-3 outline-none border-white/10 w-full bg-white/5 focus:bg-white/10 transition-colors duration-300 hover:bg-white/10 [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgba(255,255,255,0.05)_inset]"
                />
              </form>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border rounded-lg px-4 py-3 text-xs outline-none border-white/10 w-full bg-white/5 focus:bg-white/10 transition-colors duration-300 hover:bg-white/10 appearance-none"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.emoji} {country.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSubmit}
                className="px-4 py-3 rounded-lg w-full bg-white text-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white/90 transition-colors duration-300"
                disabled={!email || !name || !country || loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-black/80 border"></div>
                  </div>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </>
          ) : (
            <div className="text-white space-y-2 relative mt-4">
              <div className="h-10 w-10 bg-white blur-3xl rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
              <h3 className="text-xl font-bold">Thanks for joining! 🎉</h3>
              <div className="space-y-4">
                <p className="text-white/70">Please join the community to get early access and product insights 🔥</p>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/fortysevenlabs"
                    target="_blank"
                    className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Follow on X
                  </a>
                  <a
                    href="https://discord.gg/fortysevenlabs"
                    target="_blank"
                    className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          )}
        </div> */}
        <div>
          <h3 className="text-xs text-white/70">Built with ❤️ by <a href="https://www.linkedin.com/in/itsrohitbajaj/" target="_blank" className="text-white/70 hover:text-white transition-colors duration-300">@row</a></h3>
        </div>
      </div>
    </motion.div>
  );
}
