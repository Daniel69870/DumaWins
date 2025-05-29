"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Camera, Globe, Gamepad2 } from "lucide-react"
import SnakeGame from "./components/snake-game"
import PhotoGallery from "./components/photo-gallery"

export default function Home() {
  // Function to handle navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Fix for initial hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      // Remove the # character
      const id = window.location.hash.substring(1)
      // Wait a moment for the page to fully render
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        {/* Stars Layer 1 */}
        <div className="absolute inset-0 animate-pulse">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Stars Layer 2 - Twinkling */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-purple-400 animate-pulse" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              DUMA
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("game")}
              className="text-sm text-slate-300 hover:text-purple-400 transition-colors"
            >
              Game
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-slate-300 hover:text-purple-400 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-slate-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Planet and Rings Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {/* Central Planet with Enhanced Textures */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 shadow-2xl shadow-purple-500/50 animate-pulse">
            {/* Planet Base Layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-600/60"></div>

            {/* Continent/Land Masses */}
            <div className="absolute top-4 left-6 w-8 h-6 rounded-full bg-green-600/70 transform rotate-12"></div>
            <div className="absolute top-8 right-4 w-6 h-4 rounded-full bg-green-700/60 transform -rotate-45"></div>
            <div className="absolute bottom-6 left-8 w-10 h-5 rounded-full bg-green-600/50 transform rotate-45"></div>
            <div className="absolute bottom-8 right-6 w-4 h-6 rounded-full bg-green-700/70"></div>

            {/* Ocean/Water Areas */}
            <div className="absolute top-6 left-12 w-6 h-8 rounded-full bg-blue-400/80 transform rotate-30"></div>
            <div className="absolute bottom-10 right-8 w-8 h-6 rounded-full bg-blue-500/70 transform -rotate-15"></div>

            {/* Craters */}
            <div className="absolute top-12 left-4 w-3 h-3 rounded-full bg-gray-700/60 shadow-inner"></div>
            <div className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-gray-600/50 shadow-inner"></div>
            <div className="absolute top-16 right-12 w-2.5 h-2.5 rounded-full bg-gray-700/70 shadow-inner"></div>

            {/* Atmospheric Glow */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-blue-300/30 to-transparent"></div>

            {/* Cloud Layer */}
            <div className="absolute top-3 left-8 w-12 h-4 rounded-full bg-white/20 blur-sm transform rotate-12"></div>
            <div className="absolute bottom-8 right-4 w-8 h-3 rounded-full bg-white/15 blur-sm transform -rotate-30"></div>
            <div className="absolute top-14 right-6 w-10 h-3 rounded-full bg-white/25 blur-sm"></div>

            {/* Polar Ice Caps */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 rounded-full bg-white/60"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-2.5 rounded-full bg-white/50"></div>
          </div>

          {/* Ring 1 - Game Button (Closest orbit) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-purple-400/40 rounded-full"></div>
            <div className="absolute inset-1 border border-purple-300/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Button positioned at top of ring */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-reverse-spin-slow">
                  <Button
                    onClick={() => scrollToSection("game")}
                    className="relative bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 border border-purple-400 shadow-lg shadow-purple-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/70 active:scale-95"
                  >
                    <Gamepad2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Game
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/4 w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-0 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-1 h-1 bg-purple-500 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Ring 2 - Gallery Button (Middle orbit) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-blue-400/40 rounded-full"></div>
            <div className="absolute inset-2 border border-blue-300/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              {/* Button positioned at right of ring */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-spin-slow">
                  <Button
                    onClick={() => scrollToSection("gallery")}
                    className="relative bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 border border-blue-400 shadow-lg shadow-blue-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/70 active:scale-95"
                  >
                    <Camera className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Gallery
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <div className="absolute top-1/4 left-0 w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-0.5 h-0.5 bg-blue-300 rounded-full"></div>
              <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-blue-500 rounded-full"></div>
              <div className="absolute top-0 right-1/4 w-0.5 h-0.5 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Ring 3 - Contact Button (Outer orbit) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px] pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-pink-400/40 rounded-full"></div>
            <div className="absolute inset-3 border border-pink-300/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Button positioned at bottom of ring */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-reverse-spin-slow">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="relative bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 border border-pink-400 shadow-lg shadow-pink-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/70 active:scale-95"
                  >
                    <Globe className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-1/3 left-0 w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="absolute bottom-1/3 right-0 w-0.5 h-0.5 bg-pink-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full"></div>
              <div className="absolute bottom-0 right-1/3 w-0.5 h-0.5 bg-pink-400 rounded-full"></div>
              <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-pink-300 rounded-full"></div>
            </div>
          </div>

          {/* Outer Asteroid Belt */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[550px] md:h-[550px] pointer-events-none">
            <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-reverse-slow">
              {/* Asteroids */}
              <div className="absolute -top-0.5 left-1/6 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="absolute top-1/6 -right-0.5 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute -bottom-0.5 right-1/4 w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-0.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="absolute top-1/3 left-1/8 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/8 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-2/3 left-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* Orbital Trails */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 border border-purple-400/20 rounded-full animate-pulse pointer-events-none"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-blue-400/20 rounded-full animate-pulse pointer-events-none"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px] border border-pink-400/20 rounded-full animate-pulse pointer-events-none"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Title and Description */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Welcome to DUMA
          </h1>
          <p className="text-slate-300 max-w-md mx-auto">
            Explore our interactive platform with games, galleries, and more
          </p>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-20 px-4 relative scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Snake Game
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Navigate your snake and collect energy orbs to grow and increase your score!
            </p>
          </div>

          <SnakeGame />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 relative scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Photo Gallery
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse through our collection of photos organized by categories.
            </p>
          </div>

          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Contact
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get in touch with us for any inquiries or collaborations.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-slate-900/50 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/30 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Rocket className="h-5 w-5 text-purple-400" />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                DUMA
              </span>
            </div>
            <div className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} DUMA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
