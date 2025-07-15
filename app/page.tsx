"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Globe, Gamepad2, ExternalLink } from "lucide-react"
import SnakeGame from "./components/snake-game"
import PhotoGallery from "./components/photo-gallery"
import PasswordProtectedLinks from "./components/password-protected-links"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

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
      {/* Comet Background Layer - Behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Subtle comets in the far background */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full opacity-20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(45deg)`,
              animation: `comet-streak ${10 + Math.random() * 8}s linear infinite ${Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Static Starfield - No Movement */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Stars Layer 1 - Completely static */}
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`star1-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() > 0.95 ? "2px" : "1px",
                height: Math.random() > 0.95 ? "2px" : "1px",
                backgroundColor: Math.random() > 0.9 ? "#ff8080" : "#ffffff",
                opacity: 0.2 + Math.random() * 0.8,
              }}
            />
          ))}
        </div>

        {/* Stars Layer 2 - Completely static */}
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`star2-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() > 0.9 ? "1px" : "0.5px",
                height: Math.random() > 0.9 ? "1px" : "0.5px",
                backgroundColor: Math.random() > 0.8 ? "#ff6060" : "#ffffff",
                opacity: 0.2 + Math.random() * 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header - No rocket icon */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-red-500/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
              DUMA
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("game")}
              className="text-sm text-gray-300 hover:text-red-400 transition-colors"
            >
              Game
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-gray-300 hover:text-red-400 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("links")}
              className="text-sm text-gray-300 hover:text-red-400 transition-colors"
            >
              Links
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-gray-300 hover:text-red-400 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Planet and Rings Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 z-10">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          {/* Central Planet with Enhanced Textures - KEEP THE SAME */}
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
            <div className="absolute inset-0 border border-red-400/40 rounded-full"></div>
            <div className="absolute inset-1 border border-red-300/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Button positioned at top of ring */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-reverse-spin-slow">
                  <Button
                    onClick={() => scrollToSection("game")}
                    className="relative bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 border border-red-400 shadow-lg shadow-red-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/70 active:scale-95"
                  >
                    <Gamepad2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Game
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/4 w-1 h-1 bg-red-400 rounded-full"></div>
              <div className="absolute bottom-0 right-1/3 w-0.5 h-0.5 bg-red-300 rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-1 h-1 bg-red-500 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Ring 2 - Gallery Button (Middle orbit) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-white/40 rounded-full"></div>
            <div className="absolute inset-2 border border-white/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              {/* Button positioned at right of ring */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-spin-slow">
                  <Button
                    onClick={() => scrollToSection("gallery")}
                    className="relative bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 border border-white/40 shadow-lg shadow-white/20 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/30 active:scale-95"
                  >
                    <Camera className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Gallery
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <div className="absolute top-1/4 left-0 w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-0.5 h-0.5 bg-white/40 rounded-full"></div>
              <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-white/70 rounded-full"></div>
              <div className="absolute top-0 right-1/4 w-0.5 h-0.5 bg-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Ring 3 - Links Button (New ring) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 md:w-[420px] md:h-[420px] pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-red-300/40 rounded-full"></div>
            <div className="absolute inset-2 border border-red-200/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              {/* Button positioned at left of ring */}
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-spin-slow">
                  <Button
                    onClick={() => scrollToSection("links")}
                    className="relative bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 border border-red-400 shadow-lg shadow-red-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/70 active:scale-95"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Links
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <div className="absolute top-1/4 left-0 w-1 h-1 bg-red-400 rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-0.5 h-0.5 bg-red-300 rounded-full"></div>
              <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-red-500 rounded-full"></div>
              <div className="absolute top-0 right-1/4 w-0.5 h-0.5 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Ring 4 - Contact Button (Outer orbit) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[480px] md:h-[480px] pointer-events-none">
            {/* Ring Visual */}
            <div className="absolute inset-0 border border-red-400/40 rounded-full"></div>
            <div className="absolute inset-3 border border-red-300/20 rounded-full"></div>

            {/* Orbiting Button Container */}
            <div className="absolute inset-0 animate-spin-slow">
              {/* Button positioned at bottom of ring */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                {/* Counter-rotation to keep button upright */}
                <div className="animate-reverse-spin-slow">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="relative bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 border border-red-400 shadow-lg shadow-red-500/50 group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/70 active:scale-95"
                  >
                    <Globe className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>

            {/* Ring Particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-1/3 left-0 w-1 h-1 bg-red-400 rounded-full"></div>
              <div className="absolute bottom-1/3 right-0 w-0.5 h-0.5 bg-red-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-0 right-1/3 w-0.5 h-0.5 bg-red-400 rounded-full"></div>
              <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-red-300 rounded-full"></div>
            </div>
          </div>

          {/* Outer Asteroid Belt */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[580px] md:h-[580px] pointer-events-none">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 border border-red-400/20 rounded-full animate-pulse pointer-events-none"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-white/20 rounded-full animate-pulse pointer-events-none"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 md:w-[420px] md:h-[420px] border border-red-300/20 rounded-full animate-pulse pointer-events-none"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[480px] md:h-[480px] border border-red-400/20 rounded-full animate-pulse pointer-events-none"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Title and Description */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-red-400 to-red-600">
            Welcome to DUMA
          </h1>
          <p className="text-gray-300 max-w-md mx-auto">
            Explore our interactive platform with games, galleries, and more
          </p>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-20 px-4 relative scroll-mt-20 z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
              Snake Game
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Navigate your snake and collect energy orbs to grow and increase your score!
            </p>
          </div>

          <SnakeGame />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 relative scroll-mt-20 z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white">
              Photo Gallery
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse through our collection of photos organized by categories.
            </p>
          </div>

          <PhotoGallery />
        </div>
      </section>

      {/* Links Section - Pssst */}
      <section id="links" className="py-20 px-4 relative scroll-mt-20 z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white">
              Links
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access our curated collection of useful links and resources.
            </p>
          </div>

          <PasswordProtectedLinks />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative scroll-mt-20 z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-white">
              Contact
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Get in touch with us for any inquiries or collaborations.</p>
          </div>

          <div className="max-w-md mx-auto bg-black/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm text-white"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-500/30 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
                DUMA
              </span>
            </div>
            <div className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} DUMA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
