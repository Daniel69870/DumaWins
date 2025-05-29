"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Filter } from "lucide-react"

// Sample photo data - replace with your actual photos
const samplePhotos = [
  // Nature Photos
  {
    id: 1,
    src: "/photos/nature/sunset-mountain.jpg",
    alt: "Sunset over mountain range",
    category: "nature",
    title: "Mountain Sunset",
  },
  {
    id: 2,
    src: "/photos/nature/forest-path.png",
    alt: "Peaceful forest walking path",
    category: "nature",
    title: "Forest Trail",
  },
  {
    id: 3,
    src: "/photos/nature/lake-reflection.jpeg",
    alt: "Lake with mountain reflections",
    category: "nature",
    title: "Lake Reflection",
  },

  // Portrait Photos
  {
    id: 4,
    src: "/photos/portraits/headshot-john.jpg",
    alt: "Professional headshot",
    category: "portraits",
    title: "Professional Headshot",
  },
  {
    id: 5,
    src: "/photos/portraits/family-portrait.png",
    alt: "Family portrait session",
    category: "portraits",
    title: "Family Portrait",
  },
  {
    id: 6,
    src: "/photos/portraits/graduation-photo.jpeg",
    alt: "Graduation ceremony photo",
    category: "portraits",
    title: "Graduation Day",
  },

  // Event Photos
  {
    id: 7,
    src: "/photos/events/wedding-ceremony.jpg",
    alt: "Wedding ceremony moment",
    category: "events",
    title: "Wedding Ceremony",
  },
  {
    id: 8,
    src: "/photos/events/birthday-party.png",
    alt: "Birthday celebration",
    category: "events",
    title: "Birthday Celebration",
  },
  {
    id: 9,
    src: "/photos/events/corporate-event.jpeg",
    alt: "Corporate event photography",
    category: "events",
    title: "Corporate Event",
  },

  // Architecture Photos
  {
    id: 10,
    src: "/photos/architecture/modern-building.jpg",
    alt: "Modern architectural design",
    category: "architecture",
    title: "Modern Architecture",
  },
  {
    id: 11,
    src: "/photos/architecture/historic-bridge.png",
    alt: "Historic bridge structure",
    category: "architecture",
    title: "Historic Bridge",
  },
  {
    id: 12,
    src: "/photos/architecture/city-skyline.jpeg",
    alt: "City skyline at dusk",
    category: "architecture",
    title: "City Skyline",
  },
]

const categories = [
  { id: "all", name: "All Photos", color: "purple" },
  { id: "nature", name: "Nature", color: "green" },
  { id: "portraits", name: "Portraits", color: "blue" },
  { id: "events", name: "Events", color: "pink" },
  { id: "architecture", name: "Architecture", color: "orange" },
]

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof samplePhotos)[0] | null>(null)

  const filteredPhotos =
    selectedCategory === "all" ? samplePhotos : samplePhotos.filter((photo) => photo.category === selectedCategory)

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category?.color || "purple"
  }

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colorMap = {
      purple: isSelected
        ? "bg-purple-600 text-white border-purple-600"
        : "border-purple-500 text-purple-400 hover:bg-purple-500/20",
      green: isSelected
        ? "bg-green-600 text-white border-green-600"
        : "border-green-500 text-green-400 hover:bg-green-500/20",
      blue: isSelected
        ? "bg-blue-600 text-white border-blue-600"
        : "border-blue-500 text-blue-400 hover:bg-blue-500/20",
      pink: isSelected
        ? "bg-pink-600 text-white border-pink-600"
        : "border-pink-500 text-pink-400 hover:bg-pink-500/20",
      orange: isSelected
        ? "bg-orange-600 text-white border-orange-600"
        : "border-orange-500 text-orange-400 hover:bg-orange-500/20",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.purple
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant="outline"
            className={`transition-all duration-300 ${getColorClasses(
              category.color,
              selectedCategory === category.id,
            )}`}
          >
            <Filter className="h-4 w-4 mr-2" />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Photo Count */}
      <div className="text-center">
        <p className="text-slate-400">
          Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" && (
            <span className="ml-1">
              in{" "}
              <span className="text-purple-400 font-medium">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </span>
            </span>
          )}
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-slate-900/50 border border-slate-600 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-lg">{photo.title}</h3>
              <p className="text-sm text-slate-300 capitalize">{photo.category}</p>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Camera className="h-5 w-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <Camera className="h-16 w-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-400 mb-2">No photos found</h3>
          <p className="text-slate-500">Try selecting a different category</p>
        </div>
      )}

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
              <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
              <p className="text-slate-300 capitalize">{selectedPhoto.category}</p>
            </div>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
