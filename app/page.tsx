"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Upload,
  CheckCircle,
  Clock,
  Users,
  Award,
  Truck,
  Palette,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ChiragFWebsite() {
function useCountUp(to: number, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const increment = to / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [to, duration])
  return count
}
 const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

const years = useCountUp(20)
const turnover = useCountUp(10, 1000)
const clients = useCountUp(150, 1800)

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = form[0].value;
  const email = form[1].value;
  const phone = form[2].value;
  const city = form[3].value;
  const requirement = form[4].value;
  const quantity = form[5].value;
  const message = form[6].value;

  const subject = encodeURIComponent("New Inquiry from Website");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nRequirement: ${requirement}\nQuantity: ${quantity}\nMessage:\n${message}`
  );

  window.location.href = `mailto:chiragfashion77@gmail.com?subject=${subject}&body=${body}`;
};

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-navy-900">CHIRAG F.</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-red-600 transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-red-600 transition-colors">
                Clients
              </Link>
              <Link href="#why-choose" className="text-gray-700 hover:text-red-600 transition-colors">
                Why Choose Us
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.jpg?height=1080&width=1920&opacity=0.5"
            alt="CHIRAG FASHION Manufacturing Factory"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">CHIRAG FASHION</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Comfort, Quality, and Durability Since 2001
          </p>
            <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = "/product"}
            >
            Explore Our Products
            </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
  <div className="flex justify-center items-center gap-2 mb-4">
    <h2 className="text-5xl font-bold text-gray-900">Our Products</h2>
    <a href="/product">
      <ArrowTopRightOnSquareIcon className="w-6 h-6 mt-5 text-gray-900 hover:text-blue-600 cursor-pointer" />
    </a>
  </div>
  
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Specialized manufacturing for institutional uniforms with uncompromising quality
  </p>
</div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* School Uniforms */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/shirt.jpg?height=320&width=600"
                  alt="School Uniforms"
                  fill
                  className=""
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">School Uniforms</CardTitle>
                <CardDescription className="text-lg">
                  Premium quality school uniforms designed for comfort and durability. Available in various styles,
                  colors, and sizes to meet institutional requirements. Made with breathable fabrics that maintain their
                  shape and color after multiple washes.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Medical Aprons */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-80">
                <Image 
                src="/apron.jpg?height=320&width=600" 
                alt="Medical Aprons" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Medical Aprons</CardTitle>
                <CardDescription className="text-lg">
                  Professional medical aprons for medical colleges and healthcare institutions. Crafted with
                  high-quality, easy-to-clean fabrics that meet hygiene standards. Designed for functionality with
                  proper fit and professional appearance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-xl text-gray-700 leading-relaxed">
                Since 2001, CHIRAG F. has been dedicated to delivering high-quality institutional uniforms to clients
                across India. We focus on comfort, discipline, and professional stitching that reflects trust and
                quality in every thread.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-red-600 mb-2">20+</div> */}
                <div className="text-3xl font-bold text-red-600 mb-2">{hasMounted ? years : 20}+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-red-600 mb-2">1 Cr+</div> */}
                <div className="text-3xl font-bold text-red-600 mb-2">{hasMounted ? turnover : 10} M+</div>
                <div className="text-gray-600">Annual Turnover</div>
              </div>
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-red-600 mb-2">150+</div> */}
                <div className="text-3xl font-bold text-red-600 mb-2">{hasMounted ? clients : 150}+</div>
                <div className="text-gray-600">Satisfied Retailers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">We proudly serve schools and institutions across Bihar</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Delivery Locations</h3>
                <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
                <iframe
          title="Delivery Map"
          className="w-full h-[550px] rounded-xl -mt-16"
          style={{ border: "none"  }}
          src="https://www.google.com/maps/d/u/0/embed?mid=1H4mv0Spzhx2khiGFc7M6ySBFrypsKsA&ehbc=2E312F&noprof=1"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Siwan", "Patna", "Motihari", "Hajipur", "Buxer", "Sonpur", "Sheikpura", "Muner"].map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50 rounded-2xl">
                <p className="text-red-800 font-medium">
                  We proudly serve schools and institutions across Bihar with reliable delivery services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Your trusted partner for institutional uniform manufacturing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">Bulk Manufacturing</CardTitle>
              <CardDescription>
                Specialized in bulk manufacturing for schools and institutions with capacity to handle large orders
              </CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">Timely Delivery</CardTitle>
              <CardDescription>
                Guaranteed timely delivery with our efficient production and logistics system
              </CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">Huge Inventory</CardTitle>
              <CardDescription>Ready-to-ship inventory ensuring quick fulfillment of urgent orders</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">Customization</CardTitle>
              <CardDescription>Complete customization options including logos, sizes, and fabric types</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">1 Cr+ Annual Turnover</CardTitle>
              <CardDescription>
                Proven track record with substantial business volume and financial stability
              </CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="mb-3">20+ Years of Trust</CardTitle>
              <CardDescription>Two decades of consistent quality and reliable service in the industry</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for bulk orders and inquiries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send Inquiry</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <Input placeholder="Your city" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Requirement Type *</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option value="">Select requirement type</option>
                      <option value="school-uniforms">School Uniforms</option>
                      <option value="medical-aprons">Medical Aprons</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity *</label>
                    <Input placeholder="Approximate quantity needed" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                    <Textarea
                      placeholder="Please describe your specific requirements, customization needs, delivery timeline, etc."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label
  htmlFor="file-upload"
  className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors block"
>
  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
  <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
  <input
    id="file-upload"
    name="file"
    type="file"
    className="hidden"
    accept=".png,.jpg,.jpeg,.pdf"
  />
</label>

                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 79797 44207</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">chiragfashion77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-600">+91 93341 85387</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium">Factory Address</p>
                      <p className="text-gray-600">
                        CHIRAG Fsahion
                        <br />
                        Sadar Gali, Patna-08, Bihar, India 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-red-50 border-red-200">
                <CardContent className="px-0 pt-0">
                  <h3 className="font-semibold text-red-800 mb-2">Business Hours</h3>
                  <div className="space-y-1 text-sm text-red-700">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-sans text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and processes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-400 rounded-2xl px-6 shadow-lg">
                <AccordionTrigger className="text-left font-semibold">Do you take single orders?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  No, we only deal in bulk orders. Our minimum order quantity varies by product type, but we specialize
                  in large-scale manufacturing for institutions, schools, and wholesale buyers. This allows us to
                  maintain competitive pricing and ensure consistent quality across large volumes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-400  rounded-2xl px-6 shadow-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer product customization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, we offer comprehensive customization services including:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Custom logos and embroidery</li>
                    <li>Various fabric types and colors</li>
                    <li>Size modifications and special fits</li>
                    <li>Custom designs based on your requirements</li>
                    <li>Institutional branding and badges</li>
                  </ul>
                  Our design team works closely with clients to ensure the final product meets their exact
                  specifications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-400 rounded-2xl px-6 shadow-lg">
                <AccordionTrigger className="text-left font-semibold">What is your delivery timeline?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Our standard delivery timeline is 1-2 weeks from order confirmation. However, this may vary based on:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Order quantity and complexity</li>
                    <li>Customization requirements</li>
                    <li>Seasonal demand</li>
                    <li>Delivery location</li>
                  </ul>
                  For urgent orders, we offer expedited production. We always provide realistic
                  timelines and keep you updated throughout the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-400 rounded-2xl px-6 shadow-lg">
                <AccordionTrigger className="text-left font-semibold">Can we get a sample?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, we provide samples for bulk orders. Our sample policy includes:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Free samples for orders above certain quantities</li>
                    <li>Custom samples with your specifications</li>
                    <li>Sample delivery within 3-5 business days</li>
                    <li>Multiple size and color options available</li>
                  </ul>
                  Samples help ensure you're completely satisfied with the quality and fit before placing your bulk
                  order.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CHIRAG F.</h3>
              <p className="text-gray-300 mb-4">
                Quality institutional uniforms since 2001. Your trusted partner for bulk manufacturing.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-white border-white">
                  Est. 2001
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  1 Cr+ Turnover
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#products" className="block text-gray-300 hover:text-white transition-colors">
                  Our Products
                </Link>
                <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#why-choose" className="block text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
                <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +91 79797 44207</p>
                <p>Email: chiragfashion77@gmail.com</p>
                <p>Sadar Gali, Patna-08, Bihar, India</p>
                <p>GSTIN: 10AAIPE3668A1ZE </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} CHIRAG F. All rights reserved. | Bulk Uniform Manufacturing Since 2001
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  )
}