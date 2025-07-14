import React from "react"
// Use standard <img> for images
import { Link } from "react-router-dom"
import { useState } from "react"
import {
  Star,
  CheckCircle,
  Wifi,
  Microwave,
  CookingPot,
  PawPrint,
  CigaretteIcon as Smoking,
  WashingMachine,
  AirVent,
  MapPin,
  Info,
  CreditCard,
  Cctv,
  ParkingSquare,
  Dumbbell,
} from "lucide-react"

import { CustomSelect } from "./components/custom-select"
import { CustomDatePicker } from "./components/custom-date-picker"
import { AgentInfoCard } from "./components/agent-info-card"
import { ImageGalleryModalContent } from "./components/modals/image-gallery-modal"
import { WhatsIncludedModalContent } from "./components/modals/whats-included-modal"
import { AllAboutStayModalContent } from "./components/modals/all-about-stay-modal"
import { LocationMapModalContent } from "./components/modals/location-map-modal"
import { CalendarDisplay } from "./components/calendar-display"
import "./styles/page.css"

export default function Component() {
  const [isImageGalleryOpen, setImageGalleryOpen] = useState(false)
  const [isWhatsIncludedOpen, setWhatsIncludedOpen] = useState(false)
  const [isAllAboutStayOpen, setAllAboutStayOpen] = useState(false)
  const [isLocationMapOpen, setLocationMapOpen] = useState(false)

  const [checkInDate, setCheckInDate] = useState(undefined)
  const [checkOutDate, setCheckOutDate] = useState(undefined)
  const [guests, setGuests] = useState("2")

  // Dummy data aligned with API structure
  const dummyProperty = {
    id: 1,
    title: "Luxury Villa",
    description: `Welcome to Sea Paradise Cottage! This traditional, well-maintained, welcoming, and comfortably furnished beach bungalow with open style living and dining spaces was newly renovated throughout for 2020! Fresh paint, new kitchen, new walls and floors throughout, wall-mounted flat screen TV in the living area as well as a flat screen TV in each bedroom (living area offers Smart TV with streaming apps), new blinds throughout, new ceiling fans, and much more! This location offers beautiful Atlantic Ocean views! Wake up early and relish in the beauty of sunrise over the ocean from either ocean-facing bedroom, take in the salt-air breezes and gorgeous seaside vista from the ocean-side covered porch complete with rocking chairs for your enjoyment or the newly added open sundeck over the front dune, or relax on the street side open deck to take in magnificent sunsets over Topsail Sound. To keep in touch with family and friends not lucky enough to be with you at Topsail Beach, make use of the complimentary high speed internet access available.

    This charming cottage offers a perfect blend of classic beach house charm and modern amenities. The open-concept living and dining area is perfect for family gatherings, with plenty of natural light and comfortable seating. The fully equipped kitchen boasts new appliances and ample counter space, making meal preparation a breeze. Each bedroom is a cozy retreat, featuring comfortable beds and a flat-screen TV for your entertainment.

    Step outside onto the ocean-side covered porch and enjoy the gentle sea breeze while relaxing in a rocking chair. The newly added open sundeck over the front dune provides an ideal spot for sunbathing and enjoying panoramic ocean views. For those who prefer a different view, the street-side open deck offers stunning sunsets over Topsail Sound.

    The cottage is conveniently located near local attractions, restaurants, and shops, ensuring you have everything you need for a memorable vacation. Whether you're looking for a relaxing beach getaway or an adventurous exploration of the coast, Sea Paradise Cottage is the perfect home base.

    Property policy: the primary guest must be at least 25 years old. Guests are expected to respect the property and local community guidelines. No loud parties or events are permitted. Check-in is at 4:00 PM and check-out is at 10:00 AM. Early check-in or late check-out may be available upon request and for an additional fee. Please contact the host for any special requests or questions regarding your stay.`,
    address: "123 Beach Road, Topsail Beach, NC, United States",
    price: 500000,
    currency: "USD",
    room_booking: true,
    total_rooms: 5,
    room_price: 269,
    is_available: true,
    available_from: "2025-07-01",
    available_to: "2025-08-01",
    guests: 10, // Max guests allowed
    pet_friendly: true,
    children: 5, // Max children allowed
    location: { lat: 34.400000000000006, lng: -77.61799999999999 },
    overview: { bedrooms: 3, bathrooms: 2, sqft: 3500 },
    features: {
      cctv: true,
      parking: true,
      gym: false,
      washing_machine: true,
      air_conditioning: true,
      wifi: true,
      microwave: true,
      kitchen: true,
      // Add other features as boolean flags
    },
    images: [
      { id: 1, image: "/placeholder.svg?height=600&width=800", caption: "Main view" },
      { id: 2, image: "/placeholder.svg?height=300&width=400", caption: "Living room" },
      { id: 3, image: "/placeholder.svg?height=300&width=400", caption: "Bedroom" },
      { id: 4, image: "/placeholder.svg?height=300&width=400", caption: "Kitchen" },
      { id: 5, image: "/placeholder.svg?height=300&width=400", caption: "Bathroom" },
      { id: 6, image: "/placeholder.svg?height=300&width=400", caption: "Outdoor patio" },
      { id: 7, image: "/placeholder.svg?height=300&width=400", caption: "Beach access" },
      { id: 8, image: "/placeholder.svg?height=300&width=400", caption: "Dining area" },
      { id: 9, image: "/placeholder.svg?height=300&width=400", caption: "Another bedroom" },
      { id: 10, image: "/placeholder.svg?height=300&width=400", caption: "Front exterior" },
    ],
    agents: [{ id: 1, name: "Jane Doe", email: "jane@example.com", phone: "+1234567890", properties: [1] }],
    reviews: [],
    bookings: [],
  }

  const dummyAgent = dummyProperty.agents[0]

  const propertyImages = dummyProperty.images
  const shortDescription =
    dummyProperty.description.length > 200
      ? dummyProperty.description.substring(0, 200) + "..."
      : dummyProperty.description

  const guestOptions = Array.from({ length: dummyProperty.guests }).map((_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1} ${i === 0 ? "guest" : "guests"}`,
  }))

  const childrenOptions = Array.from({ length: dummyProperty.children + 1 }).map((_, i) => ({
    value: `${i}`,
    label: `${i} ${i === 1 ? "child" : "children"}`,
  }))

  return (
    <div className="page-container">
      <div className="main-content-wrapper">
        {/* Left Column - Images and Main Details */}
        <div className="left-column">
          {/* Main Image Grid */}
          <div className="image-grid">
            <div className="main-image-wrapper">
              <img
                src={propertyImages[0]?.image || "/placeholder.svg?height=600&width=800"}
                alt={propertyImages[0]?.caption || "Product Image"}
                className="object-cover"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {propertyImages.slice(1, 5).map((img, index) => (
              <div key={index} className="thumbnail-image-wrapper">
                <img
                  src={img.image || "/placeholder.svg?height=300&width=400"}
                  alt={img.caption || `Product Image ${index + 2}`}
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
            {propertyImages.length > 5 && (
              <div className="thumbnail-image-wrapper">
                <img
                  src={propertyImages[4]?.image || "/placeholder.svg?height=300&width=400"}
                  alt={propertyImages[4]?.caption || "Product Image"}
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
                <button className="photos-button" onClick={() => setImageGalleryOpen(true)}>
                  +{propertyImages.length - 4} photos
                </button>
                {isImageGalleryOpen && (
                  <ImageGalleryModalContent onClose={() => setImageGalleryOpen(false)} images={propertyImages} />
                )}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="property-details-section">
            <h1 className="property-title">
              {dummyProperty.title} - {dummyProperty.guests} guests, {dummyProperty.overview.bedrooms} bedrooms,{" "}
              {dummyProperty.overview.bathrooms} bathrooms
            </h1>
            <p className="property-address">
              <MapPin className="w-4 h-4" />
              {dummyProperty.address}
            </p>
            <div className="property-features-grid">
              <div className="feature-item">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="feature-text">All the essentials you need</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="feature-text">Secure booking</span>
              </div>
              <div className="feature-description">Free WiFi, Air conditioning and more</div>
              <div className="feature-description">Your payment data is always protected</div>
            </div>

            <div className="separator" />

            {/* What's included section */}
            <div className="grid gap-2">
              <h2 className="section-header">What's included</h2>
              <div className="whats-included-grid">
                {dummyProperty.features.washing_machine && (
                  <div className="whats-included-item">
                    <WashingMachine className="whats-included-icon" />
                    Washing machine
                  </div>
                )}
                {dummyProperty.features.wifi && (
                  <div className="whats-included-item">
                    <Wifi className="whats-included-icon" />
                    Wifi
                  </div>
                )}
                {dummyProperty.features.air_conditioning && (
                  <div className="whats-included-item">
                    <AirVent className="whats-included-icon" />
                    Air conditioning
                  </div>
                )}
                {dummyProperty.features.microwave && (
                  <div className="whats-included-item">
                    <Microwave className="whats-included-icon" />
                    Microwave
                  </div>
                )}
                {dummyProperty.pet_friendly ? (
                  <div className="whats-included-item">
                    <PawPrint className="whats-included-icon" />
                    Pet friendly
                  </div>
                ) : (
                  <div className="whats-included-item">
                    <PawPrint className="whats-included-icon" />
                    No pets
                  </div>
                )}
                <div className="whats-included-item">
                  <Smoking className="whats-included-icon" />
                  No smoking
                </div>
                {dummyProperty.features.kitchen && (
                  <div className="whats-included-item">
                    <CookingPot className="whats-included-icon" />
                    Kitchen
                  </div>
                )}
                {dummyProperty.features.cctv && (
                  <div className="whats-included-item">
                    <Cctv className="whats-included-icon" />
                    CCTV
                  </div>
                )}
                {dummyProperty.features.parking && (
                  <div className="whats-included-item">
                    <ParkingSquare className="whats-included-icon" />
                    Parking
                  </div>
                )}
                {dummyProperty.features.gym && (
                  <div className="whats-included-item">
                    <Dumbbell className="whats-included-icon" />
                    Gym
                  </div>
                )}
              </div>
              <button className="show-more-button" onClick={() => setWhatsIncludedOpen(true)}>
                Show more
              </button>
              {isWhatsIncludedOpen && (
                <WhatsIncludedModalContent
                  onClose={() => setWhatsIncludedOpen(false)}
                  features={dummyProperty.features}
                />
              )}
            </div>

            <div className="separator" />

            {/* Rooms section */}
            <div className="grid gap-2">
              <h2 className="section-header">Rooms</h2>
              <div className="rooms-grid">
                <div className="room-card">
                  <div className="room-card-title">
                    {dummyProperty.overview.bedrooms} bedroom{dummyProperty.overview.bedrooms !== 1 ? "s" : ""}
                  </div>
                  <div className="room-card-description">1 King bed</div> {/* Placeholder */}
                </div>
                <div className="room-card">
                  <div className="room-card-title">
                    {dummyProperty.overview.bathrooms} bathroom{dummyProperty.overview.bathrooms !== 1 ? "s" : ""}
                  </div>
                  <div className="room-card-description">Full bathroom</div> {/* Placeholder */}
                </div>
              </div>
              <div className="additional-rooms-text">
                Additional rooms: 1 living room, {dummyProperty.overview.sqft} sqft
              </div>
            </div>

            <div className="separator" />

            {/* All about this stay section */}
            <div className="grid gap-2">
              <h2 className="section-header">All about this stay</h2>
              <p className="description-text">{shortDescription}</p>
              <button className="show-more-button" onClick={() => setAllAboutStayOpen(true)}>
                Show more
              </button>
              {isAllAboutStayOpen && (
                <AllAboutStayModalContent
                  onClose={() => setAllAboutStayOpen(false)}
                  description={dummyProperty.description}
                />
              )}
            </div>

            <div className="separator" />

            {/* Location section */}
            <div className="grid gap-2">
              <h2 className="section-header">Location</h2>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                {dummyProperty.address}
              </div>
              <div className="map-preview-wrapper">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Map preview"
                  className="object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
                <button className="show-map-button" onClick={() => setLocationMapOpen(true)}>
                  Show on map
                </button>
                {isLocationMapOpen && (
                  <LocationMapModalContent
                    onClose={() => setLocationMapOpen(false)}
                    location={dummyProperty.location}
                  />
                )}
              </div>
            </div>

            <div className="separator" />

            {/* Reviews section */}
            <div className="grid gap-2">
              <h2 className="section-header">Reviews</h2>
              <div className="reviews-empty-state">
                <Star className="star-icon" />
                <p className="reviews-text">No reviews (yet)</p>
                <p className="reviews-subtext">This home is new or hasn't been reviewed yet.</p>
              </div>
            </div>

            <div className="separator" />

            {/* Availability section */}
            <div className="grid gap-2">
              <h2 className="section-header">Availability</h2>
              <button className="show-more-button">Choose dates for accurate prices</button>
              <CalendarDisplay
                mode="range"
                selected={{ from: checkInDate, to: checkOutDate }}
                onSelect={(range) => {
                  setCheckInDate(range?.from)
                  setCheckOutDate(range?.to)
                }}
                className="rounded-md border border-gray-200"
              />
              <div className="guests-section">
                <h2 className="section-header">Guests</h2>
                <div className="guests-select-wrapper">
                  <div className="guest-select-item">
                    <CustomSelect
                      label="Adults (18 and older)"
                      value={guests}
                      onChange={setGuests}
                      options={guestOptions}
                      placeholder="Select"
                    />
                  </div>
                  <div className="guest-select-item">
                    <CustomSelect
                      label="Children (0-17)"
                      value={dummyProperty.children.toString()}
                      onChange={() => {}} // No-op for dummy data
                      options={childrenOptions}
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="separator" />

            {/* Payment and Cancellation */}
            <div className="payment-cancellation-grid">
              <div className="info-card">
                <h2 className="info-card-title">Available payment methods</h2>
                <p className="info-card-text">Pay directly to the host.</p>
                <p className="info-card-text">This host accepts:</p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Credit or debit card
                </div>
                <button className="info-card-link">Show more</button>
              </div>
              <div className="info-card">
                <h2 className="info-card-title">Cancellation policy</h2>
                <p className="info-card-text">
                  The cancellation policy for this rental is mentioned in the terms and conditions.
                </p>
                <button className="info-card-link">Show details</button>
              </div>
            </div>

            <div className="separator" />

            {/* Good to know */}
            <div className="payment-cancellation-grid">
              <div className="info-card">
                <h2 className="info-card-title">Good to know</h2>
                <h3 className="font-medium text-sm">House rules</h3>
                <ul className="info-card-list">
                  <li>Check-in from 04:00PM</li>
                  <li>Check-out until 10:00AM</li>
                  <li>{dummyProperty.pet_friendly ? "Pets allowed" : "No pets"}</li>
                  <li>No smoking</li>
                </ul>
              </div>
              <div className="info-card">
                <h3 className="font-medium text-sm">Host info</h3>
                <p className="info-card-text">
                  This home is provided by a professional host. This host has committed to practicing products or
                  services that comply with the applicable rules of Union law.
                </p>
                <button className="info-card-link">Read the provider's T&Cs</button>
              </div>
            </div>

            <div className="separator" />

            {/* How can we help? */}
            <div className="help-card">
              <h2 className="info-card-title">How can we help?</h2>
              <p className="info-card-text">
                Visit our{" "}
                <a href="#" className="info-card-link">
                  Help Center
                </a>{" "}
                to find answers to frequently asked questions. If you have any more questions, our Customer Support team
                will be happy to help you.
              </p>
              <p className="info-card-text">Home ID: {dummyProperty.id}</p>
              <button className="help-card-button">Get support</button>
            </div>

            <div className="separator" />

            <button className="report-concern-button">
              <Info className="icon" />
              Report a legal concern
            </button>
          </div>
        </div>

        {/* Right Column - Price Card and Agent Info */}
        <div className="right-column">
          {/* Price Card */}
          <div className="price-card">
            <div className="price-card-header">
              <p className="price-card-message">Choose dates for accurate prices</p>
            </div>
            <div className="price-card-content">
              <div className="date-guest-selection">
                <CustomDatePicker date={checkInDate} setDate={setCheckInDate} placeholder="Check-in" />
                <CustomDatePicker date={checkOutDate} setDate={setCheckOutDate} placeholder="Check-out" />
                <CustomSelect
                  value={guests}
                  onChange={setGuests}
                  options={guestOptions}
                  placeholder="2 guests"
                  className="col-span-2"
                />
              </div>

              <button className="check-availability-button">Check availability</button>
              <div className="price-per-night">
                <span>Price per night</span>
                <span className="amount">
                  from {dummyProperty.currency}
                  {dummyProperty.room_price}
                </span>
              </div>
              <div className="separator my-2" />
              <div className="payment-methods-info">
                This host accepts: <CreditCard className="icon" />
              </div>
            </div>
          </div>

          {/* Agent Info Card */}
          <AgentInfoCard agent={dummyAgent} />
        </div>
      </div>

      {/* Still looking section */}
      <div className="still-looking-section">
        <h2 className="still-looking-title">Still looking for the right stay?</h2>
        <Link to="/">
          <button className="keep-searching-button">Keep searching</button>
        </Link>
      </div>
    </div>
  )
}
