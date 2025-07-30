// app/gallery/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

const images = [
  { src: "/product1.jpg", alt: "Product 1" },
  {src:"/apron.jpg",alt:"apron"},
  {src:"/shirt.jpg",alt:"shirt"},
  { src: "/Product2.jpg", alt: "Product 2" },
  { src: "/product3.jpg", alt: "Product 3" },
  { src: "/product4.jpg", alt: "Product 4" },
  { src: "/product5.jpg", alt: "Product 5" },
  { src: "/product6.jpg", alt: "Product 6" },
{ src: "/product7.jpg", alt: "Product 7" },
{src:"/product8.jpg",alt:"Product 8"},
{src:"/product9.jpg",alt:"Product 9"}







]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-navy-900">CHIRAG F.</div>
          <div>
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Home
            </Link>
          </div>
        </div>
      </nav>
      {/* Gallery */}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Product Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition">
                    {img.alt}
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
