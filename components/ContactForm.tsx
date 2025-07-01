"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  MapPin,
  Users,
  Camera,
  Mail,
  Phone,
  User,
  MessageCircle,
  DollarSign,
} from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guestCount: "",
    description: "",
    location: "",
    eventDate: "",
    // service is omitted
    budget: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Require at least name and phone
    if (!formData.name || !formData.phone) {
      alert("Please fill at least Name and Phone before sending via WhatsApp.")
      return
    }
    setLoading(true)

    // Build WhatsApp message lines WITHOUT `service`
    const lines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email || "-"}`,
      `Phone: ${formData.phone}`,
      `Guest Count: ${formData.guestCount || "-"}`,
      `Event Date: ${formData.eventDate || "-"}`,
      `Location: ${formData.location || "-"}`,
      `Description: ${formData.description || "-"}`,
      // service omitted
      `Budget: ${formData.budget || "-"}`,
    ]
    const message = lines.join("\n")
    const encoded = encodeURIComponent(message)
    const phoneNumber = "918308094739" // your WhatsApp number
    // Use wa.me link so mobile opens app directly
    const waLink = `https://wa.me/${phoneNumber}?text=${encoded}`

    // Redirect in same tab
    window.location.href = waLink

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      guestCount: "",
      description: "",
      location: "",
      eventDate: "",
      budget: "",
    })
    // Show temporary notice
    setSuccess(true)
    setTimeout(() => setSuccess(false), 5000)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4" style={{ backgroundColor: "#eee1d0" }}>
      <div className="max-w-4xl mx-auto" style={{ backgroundColor: "#eee1d0" }}>
        {/* Header Section */}
        <div className="text-center mb-12" style={{ backgroundColor: "#eee1d0" }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <Camera className="w-8 h-8 text-amber-700" />
          </div>
          {/* Heading uses font-heading */}
  <h1 className="text-4xl font-serif text-gray-900 mb-4">
  Let Team VSPF capture your story
</h1>
<p className="text-xl font-serif text-gray-600 max-w-2xl mx-auto leading-relaxed">
  Tell us about your special day, and we'll create timeless memories that you'll treasure forever.
</p>

        </div>

        {/* Success Message */}
        {success && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Redirecting to WhatsApp... Please send the message there to complete.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              {/* Centered heading and subtitle */}
              <h2 className="text-2xl font-heading  text-gray-900 flex items-center justify-center gap-3">
                <User className="w-6 h-6 text-amber-700" />
                Personal Information
              </h2>
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email (optional) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email (optional)
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                  placeholder="+91XXXXXXXXXX"
                />
              </div>
            </div>

            {/* Event Details Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading  text-gray-900 flex items-center justify-center gap-3">
                <User className="w-6 h-6 text-amber-700" />
                Event details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Event Date */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Event Date *
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                  />
                </div>
                {/* Guest Count */}
                <div className="space-y-2">
                  <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Estimated Guest Count *
                  </Label>
                  <Input
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                    placeholder="e.g., 150 guests"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Event Location *
                </Label>
                <Input
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                  placeholder="City, Venue name (if known)"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Tell us about your Event *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg resize-none"
                  placeholder="Describe your event, style preferences, special moments you want captured, etc."
                />
              </div>
            </div>

            {/* Budget Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Label className="text-sm font-medium text-gray-700">What is your budget? (optional)</Label>
                <div className="grid gap-3">
                  {[
                    "₹1,00,000 to ₹1,50,000",
                    "₹1,50,000 to ₹2,00,000",
                    "₹2,00,000 to ₹3,00,000",
                  ].map((range) => (
                    <label key={range} className="group cursor-pointer">
                      <div
                        className={`flex items-center p-3 rounded-lg border-2 transition-all duration-200 ${formData.budget === range
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-amber-300"
                          }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={range}
                          checked={formData.budget === range}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`font-medium ${formData.budget === range ? "text-amber-900" : "text-gray-700"}`}>
                          {range}
                        </span>
                        <div
                          className={`ml-auto w-4 h-4 rounded-full border-2 ${formData.budget === range ? "border-amber-500 bg-amber-500" : "border-gray-300"
                            }`}
                        >
                          {formData.budget === range && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Preparing WhatsApp...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </div>

            {/* Footer Text */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                We'll respond to your inquiry within 2-5 hours via WhatsApp. Can't wait? Call us directly!
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
