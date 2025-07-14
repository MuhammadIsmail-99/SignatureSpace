"use client"

import { Plane, Waves, ScrollText } from "lucide-react"
import { CustomModal } from "../custom-modal"
import { useState } from "react"
import "../../styles/modals/location-map-modal.css"

export function LocationMapModalContent({ onClose, location }) {
  const [activeFilter, setActiveFilter] = useState("all")

  const exploreItems = [
    { name: "Closest coastline", distance: "50yd", type: "Water landmarks", icon: Waves },
    { name: "Wilmington International Airport", distance: "15mi", type: "Airports", icon: Plane },
    { name: "Albert J Ellis Airport", distance: "33mi", type: "Airports", icon: Plane },
    { name: "Coastal Carolina Regional Airport", distance: "60mi", type: "Airports", icon: Plane },
    { name: "Local Beach Access", distance: "100yd", type: "Water landmarks", icon: Waves },
    { name: "Topsail Beach Pier", distance: "2mi", type: "Water landmarks", icon: Waves },
    { name: "Surf City Bridge", distance: "5mi", type: "Water landmarks", icon: Waves },
    { name: "Holly Ridge Golf Course", distance: "8mi", type: "Landmarks", icon: ScrollText },
  ]

  const filteredItems = exploreItems.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "water-landmarks" && item.type === "Water landmarks") return true
    if (activeFilter === "airports" && item.type === "Airports") return true
    return false
  })

  const googleMapsEmbedUrl = location
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7999999999997!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f2b2b2b2b2b2%3A0x89a9f2b2b2b2b2b2!2sTopsail%20Beach%2C%20NC%2C%20USA!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7999999999997!2d-77.61799999999999!3d34.400000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f2b2b2b2b2b2%3A0x89a9f2b2b2b2b2b2!2sTopsail%20Beach%2C%20NC%2C%20USA!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus`

  return (
    <CustomModal isOpen={true} onClose={onClose} title="Location" className="max-w-5xl">
      <div className="location-map-modal-content">
        <div className="map-container">
          {/* Google Maps Embed */}
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            className="map-iframe"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Property Location"
          ></iframe>
          <div className="map-zoom-controls">
            <button className="zoom-button">
              <span className="sr-only">Zoom In</span>
              {"+"}
            </button>
            <div className="zoom-separator" />
            <button className="zoom-button">
              <span className="sr-only">Zoom Out</span>
              {"-"}
            </button>
          </div>
        </div>
        <div className="explore-area-sidebar">
          <h3 className="explore-area-title">EXPLORE THE AREA</h3>
          <div className="filter-toggle-group">
            <button
              className={`filter-toggle-button ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-toggle-button ${activeFilter === "water-landmarks" ? "active" : ""}`}
              onClick={() => setActiveFilter("water-landmarks")}
            >
              Water landmarks
            </button>
            <button
              className={`filter-toggle-button ${activeFilter === "airports" ? "active" : ""}`}
              onClick={() => setActiveFilter("airports")}
            >
              Airports
            </button>
          </div>
          <div className="explore-items-scroll-area">
            <div className="explore-items-grid">
              {filteredItems.map((item, index) => (
                <div key={index} className="explore-item">
                  <item.icon className="explore-item-icon" />
                  <div className="explore-item-info">
                    <div className="explore-item-name">{item.name}</div>
                    <div className="explore-item-type">{item.type}</div>
                  </div>
                  <div className="explore-item-distance">{item.distance}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  )
}
