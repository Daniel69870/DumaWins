"use client"

import React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Camera, ArrowLeft, RotateCw } from "lucide-react"

// Photo data with minimal info - no descriptive text
const photoData = {
  places: [
    {
      id: 1,
      src: "/photos/places/01.png",
      alt: "Photo 01",
      title: "01",
    },
    {
      id: 2,
      src: "/photos/places/02.jpg",
      alt: "Photo 02",
      title: "02",
    },
    {
      id: 3,
      src: "/photos/places/03.png",
      alt: "Photo 03",
      title: "03",
    },
    {
      id: 4,
      src: "/photos/places/04.jpg",
      alt: "Photo 04",
      title: "04",
    },
    {
      id: 5,
      src: "/photos/places/05.png",
      alt: "Photo 05",
      title: "05",
    },
  ],
  misc: [
    {
      id: 11,
      src: "/photos/misc/A01.jpg",
      alt: "Photo A01",
      title: "A01",
    },
    {
      id: 12,
      src: "/photos/misc/A02.png",
      alt: "Photo A02",
      title: "A02",
    },
    {
      id: 13,
      src: "/photos/misc/A03.jpg",
      alt: "Photo A03",
      title: "A03",
    },
    {
      id: 14,
      src: "/photos/misc/A04.png",
      alt: "Photo A04",
      title: "A04",
    },
    {
      id: 15,
      src: "/photos/misc/A05.jpg",
      alt: "Photo A05",
      title: "A05",
    },
  ],
}

const categories = [
  { id: "places", name: "Places", description: "Locations and destinations" },
  { id: "misc", name: "Misc", description: "Everything else" },
]

type ViewState = "categories" | "loading" | "photos"
type CategoryId = keyof typeof photoData

// Helper function to get file extension
const getFileExtension = (filename: string): string => {
  return filename.substring(filename.lastIndexOf(".") + 1).toUpperCase()
}

export default function PhotoGallery() {
  const [viewState, setViewState] = useState<ViewState>("categories")
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [lastAngle, setLastAngle] = useState(0)
  const wheelRef = useRef<HTMLDivElement>(null)

  const handleCategorySelect = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId)
    setViewState("loading")
    setWheelRotation(0)
  }

  const handleBackToCategories = () => {
    setViewState("categories")
    setSelectedCategory(null)
    setWheelRotation(0)
  }

  // Calculate angle from center of wheel to mouse position
  const getAngleFromCenter = useCallback((clientX: number, clientY: number) => {
    if (!wheelRef.current) return 0

    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = clientX - centerX
    const deltaY = clientY - centerY

    return Math.atan2(deltaY, deltaX) * (180 / Math.PI)
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      const angle = getAngleFromCenter(e.clientX, e.clientY)
      setLastAngle(angle)
    },
    [getAngleFromCenter],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return

      const currentAngle = getAngleFromCenter(e.clientX, e.clientY)
      let deltaAngle = currentAngle - lastAngle

      // Handle angle wrap-around
      if (deltaAngle > 180) deltaAngle -= 360
      if (deltaAngle < -180) deltaAngle += 360

      setWheelRotation((prev) => {
        const newRotation = Math.max(0, Math.min(360, prev + deltaAngle))

        // Check if we've reached 100% (360 degrees)
        if (newRotation >= 360 && prev < 360) {
          setTimeout(() => {
            setViewState("photos")
          }, 500)
        }

        return newRotation
      })

      setLastAngle(currentAngle)
    },
    [isDragging, lastAngle, getAngleFromCenter],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch events for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0]
      setIsDragging(true)
      const angle = getAngleFromCenter(touch.clientX, touch.clientY)
      setLastAngle(angle)
    },
    [getAngleFromCenter],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()

      const touch = e.touches[0]
      const currentAngle = getAngleFromCenter(touch.clientX, touch.clientY)
      let deltaAngle = currentAngle - lastAngle

      // Handle angle wrap-around
      if (deltaAngle > 180) deltaAngle -= 360
      if (deltaAngle < -180) deltaAngle += 360

      setWheelRotation((prev) => {
        const newRotation = Math.max(0, Math.min(360, prev + deltaAngle))

        // Check if we've reached 100% (360 degrees)
        if (newRotation >= 360 && prev < 360) {
          setTimeout(() => {
            setViewState("photos")
          }, 500)
        }

        return newRotation
      })

      setLastAngle(currentAngle)
    },
    [isDragging, lastAngle, getAngleFromCenter],
  )

  // Add event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  const progress = (wheelRotation / 360) * 100

  // Category Selection View
  if (viewState === "categories") {
    return (
      <div className="space-y-12">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light mb-4 text-white">Select Collection</h3>
          <p className="text-gray-400 text-sm">Supports JPG, PNG, WEBP, GIF, and BMP formats</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-2xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-1 group relative bg-black/30 border border-gray-700/50 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="p-12 text-center">
                <h4 className="text-2xl font-light text-white mb-3">{category.name}</h4>
                <p className="text-gray-400 mb-8 text-sm">{category.description}</p>
                <p className="text-xs text-gray-500 mb-8">{photoData[category.id as CategoryId].length} items</p>
                <Button
                  onClick={() => handleCategorySelect(category.id as CategoryId)}
                  className="bg-red-900 hover:bg-red-800 text-white border border-red-700 hover:border-red-600 transition-all duration-300"
                >
                  View
                </Button>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Loading View with Interactive Wheel
  if (viewState === "loading" && selectedCategory) {
    const category = categories.find((cat) => cat.id === selectedCategory)
    const cometAngle = wheelRotation - 90 // Start from top
    const radius = 140
    const cometX = Math.cos((cometAngle * Math.PI) / 180) * radius
    const cometY = Math.sin((cometAngle * Math.PI) / 180) * radius

    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] space-y-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light mb-2 text-white">Loading {category?.name}</h3>
          <p className="text-gray-400 text-sm mb-4">Turn the wheel to load photos</p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <RotateCw className="h-4 w-4" />
            <span className="text-xs">Click and drag to rotate</span>
          </div>
        </div>

        {/* Interactive Wheel */}
        <div className="relative">
          <div
            ref={wheelRef}
            className={`relative w-80 h-80 rounded-full border-4 border-gray-700/50 bg-black/30 backdrop-blur-sm cursor-grab ${
              isDragging ? "cursor-grabbing" : ""
            } select-none`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            {/* Wheel Progress Fill */}
            <div
              className="absolute inset-1 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, 
                  rgba(220, 38, 38, 0.3) 0deg, 
                  rgba(153, 27, 27, 0.3) ${wheelRotation}deg, 
                  transparent ${wheelRotation}deg, 
                  transparent 360deg)`,
              }}
            />

            {/* Wheel Notches */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-gray-600 rounded-full"
                style={{
                  top: "10px",
                  left: "50%",
                  transformOrigin: "50% 150px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              />
            ))}

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Comet following the wheel */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              transform: `translate(-50%, -50%) translate(${cometX}px, ${cometY}px)`,
            }}
          >
            <div className="relative">
              {/* Comet Head */}
              <div className="w-6 h-6 bg-gradient-to-r from-white via-red-200 to-red-300 rounded-full shadow-lg shadow-red-400/50"></div>

              {/* Comet Tail */}
              <div
                className="absolute top-1/2 w-16 h-1 bg-gradient-to-r from-white/80 via-red-300/60 to-transparent rounded-full"
                style={{
                  left: "-16px",
                  transform: `translateY(-50%) rotate(${cometAngle + 180}deg)`,
                  transformOrigin: "16px 50%",
                }}
              ></div>
              <div
                className="absolute top-1/2 w-12 h-0.5 bg-gradient-to-r from-red-200/70 via-red-400/50 to-transparent rounded-full"
                style={{
                  left: "-12px",
                  transform: `translateY(-50%) rotate(${cometAngle + 180}deg)`,
                  transformOrigin: "12px 50%",
                }}
              ></div>

              {/* Comet Particles */}
              {progress > 10 && (
                <>
                  <div
                    className="absolute w-1 h-1 bg-red-300 rounded-full animate-pulse"
                    style={{ left: "-8px", top: "4px" }}
                  ></div>
                  <div
                    className="absolute w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse"
                    style={{ left: "-12px", top: "8px", animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                    style={{ left: "-16px", top: "6px", animationDelay: "1s" }}
                  ></div>
                </>
              )}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-3xl font-light text-white mb-2">{Math.round(progress)}%</div>
            <div className="text-gray-400 text-sm">
              {progress < 25 && "Keep turning..."}
              {progress >= 25 && progress < 50 && "Getting there..."}
              {progress >= 50 && progress < 75 && "Almost halfway..."}
              {progress >= 75 && progress < 95 && "Nearly complete..."}
              {progress >= 95 && progress < 100 && "So close..."}
              {progress >= 100 && "Loading complete! 🌟"}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Photos View
  if (viewState === "photos" && selectedCategory) {
    const photos = photoData[selectedCategory]
    const category = categories.find((cat) => cat.id === selectedCategory)

    return (
      <div className="space-y-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handleBackToCategories}
            className="bg-gray-700 hover:bg-gray-600 text-white border-none shadow-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <h3 className="text-2xl font-light text-white">{category?.name}</h3>
            <p className="text-gray-400 text-sm">{photos.length} items</p>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-black/30 border border-gray-700/50 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    console.error(`Failed to load image: ${photo.src}`)
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>

              {/* Format Badge */}
              <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {getFileExtension(photo.src)}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-light text-lg">{photo.title}</h3>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-light text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-gray-300 text-sm capitalize">{selectedCategory}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedPhoto(null)
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-light bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return null
}
