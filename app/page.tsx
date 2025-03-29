'use client'
import { motion } from "framer-motion"
import { useState, useEffect } from "react";

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

  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center h-dvh space-y-4 max-w-xl mx-auto">
      <span className=" text-sm lg:text-base text-center px-4 py-2 bg-gradient-to-r from-gray-100 to-stone-500 inline-block text-transparent bg-clip-text">
        studio.47labs.io <span>•</span> Launching Soon ✨
      </span>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-8xl lg:text-[250px] font-extrabold text-white/80"
      >
        47Labs
      </motion.div>
      <div className="flex flex-col items-center space-y-4 w-full text-sm font-light justify-center p-4">
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
            <span className="text-white/50 text-xs text-center">
              By clicking Join Waitlist, you agree to our <a href="/pp" className="text-white/50 hover:text-white/100">Privacy Policy</a>
            </span>
          </>
        ) : (
          <div className="text-white text-center space-y-2 relative mt-4">
            <div className="h-10 w-10 bg-white blur-3xl rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            <h3 className="text-xl font-bold">Thanks for joining! 🎉</h3>
            <div className="space-y-4">
              <p className="text-white/70 text-center">Please join our community to get early access and product insights 🔥</p>
              <div className="flex space-x-4 justify-center">
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
      </div>

      <div className="text-white/50 flex space-x-2 absolute bottom-4 flex-wrap justify-center text-xs items-center w-full mx-auto max-w-80">
        <a
          href="theory"
          className="text-white/50 hover:text-white/100"
        >
          The Theory
        </a>

        <a
          href="team"
          className="text-white/50 hover:text-white/100"
        >
          The Team
        </a>

        <a
          href="https://x.com/fortysevenlabs"
          target="_blank"
          className="text-white/50 hover:text-white/100"
        >
          Folllow 47Labs on X
        </a>
        <a
          href="https://discord.gg/fortysevenlabs"
          target="_blank"
          className="text-white/50 hover:text-white/100"
        >
          Join the Community
        </a>

        <a
          href="/pp"
          className="text-white/50 hover:text-white/100"
        >
          Privacy Policy
        </a>
      </div>
    </motion.div>
  );
}
