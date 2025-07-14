"use client"

import { useState } from "react"
import SearchBar from "../Searchbar/search-bar.jsx"
import "./styles.css"
import logoImg from "../assets/logo.png"

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeRentalTab, setActiveRentalTab] = useState("daily")
  const [rentalImageIndexes, setRentalImageIndexes] = useState({})

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const nextSlide = () => {
    if (currentSlide < areas.length - 4) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleImageNavigation = (rentalId, direction) => {
    const currentIndex = rentalImageIndexes[rentalId] || 0
    const rental =
      activeRentalTab === "daily"
        ? dailyRentals.find((r) => r.id === rentalId)
        : monthlyRentals.find((r) => r.id === rentalId)
    const maxIndex = rental.images.length - 1

    let newIndex
    if (direction === "next") {
      newIndex = currentIndex < maxIndex ? currentIndex + 1 : currentIndex
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex
    }

    setRentalImageIndexes((prev) => ({
      ...prev,
      [rentalId]: newIndex,
    }))
  }

  const areas = [
    {
      id: 1,
      title: "Marina",
      image: require("../assets/Marina.jpg"),
    },
    {
      id: 2,
      title: "Lake view",
      image: require("../assets/Lake tower.jpg"),
    },
    {
      id: 3,
      title: "Downtown",
      image: require("../assets/downtown.jpg"),
    },
    {
      id: 4,
      title: "Beach residency",
      image: require("../assets/beach-res.jpg"),
    },
    {
      id: 5,
      title: "Suburbs",
      image: require("../assets/header-image.jpg"),
    },
    {
      id: 6,
      title: "City Center",
      image: require("../assets/logo.png"),
    },
  ]

  const dailyRentals = [
    {
      id: 1,
      images: [
        require("../assets/downtown.jpg"),
        require("../assets/Marina.jpg"),
        require("../assets/beach-res.jpg"),
      ],
      price: "From $184",
      details: "House 6 guests 3 bedrooms",
      location: "Downtown",
      rating: "4/5",
    },
    {
      id: 2,
      images: [require("../assets/Marina.jpg"), require("../assets/Lake tower.jpg")],
      price: "From $150",
      details: "Apartment 4 guests 2 bedrooms",
      location: "Marina",
      rating: "4/5",
    },
    {
      id: 3,
      images: [
        require("../assets/beach-res.jpg"),
        require("../assets/header-image.jpg"),
        require("../assets/Lake tower.jpg"),
        require("../assets/logo.png"),
      ],
      price: "From $220",
      details: "Villa 8 guests 4 bedrooms",
      location: "Beach residency",
      rating: "5/5",
    },
    {
      id: 4,
      images: [require("../assets/logo.png")],
      price: "From $95",
      details: "Studio 2 guests 1 bedroom",
      location: "City Center",
      rating: "4/5",
    },
  ]

  const monthlyRentals = [
    {
      id: 5,
      images: [
        require("../assets/downtown.jpg"),
        require("../assets/header-image.jpg"),
        require("../assets/Lake tower.jpg"),
      ],
      price: "From $2,800/month",
      details: "House 6 guests 3 bedrooms",
      location: "Downtown",
      rating: "4/5",
    },
    {
      id: 6,
      images: [require("../assets/Marina.jpg"), require("../assets/Lake tower.jpg")],
      price: "From $2,200/month",
      details: "Apartment 4 guests 2 bedrooms",
      location: "Marina",
      rating: "4/5",
    },
    {
      id: 7,
      images: [require("../assets/beach-res.jpg")],
      price: "From $3,500/month",
      details: "Villa 8 guests 4 bedrooms",
      location: "Beach residency",
      rating: "5/5",
    },
    {
      id: 8,
      images: [
        require("../assets/logo.png"),
        require("../assets/header-image.jpg"),
        require("../assets/downtown.jpg"),
      ],
      price: "From $1,800/month",
      details: "Studio 2 guests 1 bedroom",
      location: "City Center",
      rating: "4/5",
    },
  ]

  const currentRentals = activeRentalTab === "daily" ? dailyRentals : monthlyRentals

  const popularLocations = [
    { name: "Dubai Marina", type: "Monthly Rentals" },
    { name: "Jumeirah Beach Residence (JBR)", type: "Monthly Rentals" },
    { name: "Downtown Dubai", type: "Monthly Rentals" },
    { name: "Palm Jumeirah", type: "Monthly Rentals" },
    { name: "Business Bay", type: "Monthly Rentals" },
    { name: "Dubai Creek Harbour", type: "Monthly Rentals" },
    { name: "Al Barsha", type: "Monthly Rentals" },
    { name: "Dubai Silicon Oasis", type: "Monthly Rentals" },
    { name: "Jumeirah Village Circle (JVC)", type: "Monthly Rentals" },
    { name: "Arabian Ranches", type: "Monthly Rentals" },
    { name: "Mirdif", type: "Monthly Rentals" },
    { name: "Dubai Sports City", type: "Monthly Rentals" },
    { name: "International City", type: "Monthly Rentals" },
    { name: "Discovery Gardens", type: "Monthly Rentals" },
    { name: "Dubai Investment Park (DIP)", type: "Monthly Rentals" },
    { name: "Jumeirah Lakes Towers (JLT)", type: "Monthly Rentals" },
    { name: "The Greens", type: "Monthly Rentals" },
    { name: "Show more", type: "" },
  ]

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <a href="#" className="logo">
            <div className="logo-icon"><img src={logoImg} alt="Logo" /></div>
            
          </a>

          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#monthly" className="nav-link">Monthly Properties</a>
            </li>
            <li>
              <a href="#daily" className="nav-link">Daily Properties</a>
            </li>
            <li>
              <a href="#list" className="nav-link">List Property (Owner)</a>
            </li>
            <li>
              <a href="#blog" className="nav-link">Blog</a>
            </li>
          </ul>

          <div className="nav-right">
            <div className="profile-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <div className="hamburger" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#monthly" className="nav-link">Monthly Properties</a>
            </li>
            <li>
              <a href="#daily" className="nav-link">Daily Properties</a>
            </li>
            <li>
              <a href="#list" className="nav-link">List Property (Owner)</a>
            </li>
            <li>
              <a href="#blog" className="nav-link">Blog</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Search bar Section */}
      <section className="hero" style={{ backgroundImage: `url(${require("../assets/header-image.jpg")})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <SearchBar />
        </div>
      </section>

      {/* Areas Section */}
      <section className="areas-section">
        <h2 className="section-title">Areas of Our Homes</h2>
        <div className="areas-container">
          <div className="areas-wrapper">
            <div className="areas-slider" style={{ transform: `translateX(-${currentSlide * 260}px)` }}>
              {areas.map((area) => (
                <div key={area.id} className="area-card">
                  <img src={area.image || "/placeholder.svg"} alt={area.title} className="area-image" />
                  <h3 className="area-title">{area.title}</h3>
                  <button className="view-properties-btn">View properties</button>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-button prev" onClick={prevSlide} disabled={currentSlide === 0}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <button className="nav-button next" onClick={nextSlide} disabled={currentSlide >= areas.length - 4}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Rentals Section */}
      <section className="rentals-section">
        <div className="rentals-container">
          <h2 className="rentals-title">Our top vacation rentals</h2>

          {/* Rental Tabs */}
          <div className="rental-tabs">
            <button
              className={`rental-tab ${activeRentalTab === "daily" ? "active" : ""}`}
              onClick={() => setActiveRentalTab("daily")}
            >
              Daily Rentals
            </button>
            <button
              className={`rental-tab ${activeRentalTab === "monthly" ? "active" : ""}`}
              onClick={() => setActiveRentalTab("monthly")}
            >
              Monthly Rentals
            </button>
          </div>

          <div className="rentals-grid">
            {currentRentals.map((rental) => {
              const currentImageIndex = rentalImageIndexes[rental.id] || 0
              return (
                <div key={rental.id} className="rental-card">
                  <div className="rental-image-container">
                    <div className="rental-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                      {rental.images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt="Rental property"
                          className="rental-image"
                        />
                      ))}
                    </div>

                    {rental.images.length > 1 && currentImageIndex > 0 && (
                      <button className="image-nav-btn prev" onClick={() => handleImageNavigation(rental.id, "prev")}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="15,18 9,12 15,6"></polyline>
                        </svg>
                      </button>
                    )}

                    {rental.images.length > 1 && currentImageIndex < rental.images.length - 1 && (
                      <button className="image-nav-btn next" onClick={() => handleImageNavigation(rental.id, "next")}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="9,18 15,12 9,6"></polyline>
                        </svg>
                      </button>
                    )}

                    {rental.images.length > 1 && (
                      <div className="image-dots">
                        {rental.images.map((_, index) => (
                          <div
                            key={index}
                            className={`image-dot ${index === currentImageIndex ? "active" : ""}`}
                            onClick={() => setRentalImageIndexes((prev) => ({ ...prev, [rental.id]: index }))}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rental-info">
                    <div className="rental-price">{rental.price}</div>
                    <div className="rental-details">{rental.details}</div>
                    <div className="rental-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {rental.location}
                    </div>
                    <div className="rental-footer">
                      <div className="rating">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                        </svg>
                        {rental.rating}
                      </div>
                      <button className="view-deal-btn">View deal</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <button className="show-more-btn">Show more</button>
        </div>
      </section>

      {/* List Property Section */}
      <section className="list-property-section">
        <div className="list-property-container">
          <div className="list-property-overlay" style={{ backgroundImage: `url(${require("../assets/list-property-image.png")})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="list-property-content">
            <h2 className="list-property-title">Rent your property confidently with Signature Space</h2>
            <p className="list-property-description">
              With live-support, quick signup, and highly-rated guests, hosting on Vrbo can feel like a vacation.
            </p>
            <button className="list-property-btn">List your property</button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">
            Get the latest deals and exclusive offers delivered straight to your inbox. Be the first to know about new
            properties and special promotions.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Popular Locations Section */}
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>HomeToGo</h3>
              <ul className="footer-links">
                <li>
                <a href="#about" className="footer-link">About Us</a>
                </li>
                <li>
                <a href="#careers" className="footer-link">Careers</a>
                </li>
                <li>
                <a href="#investors" className="footer-link">Investors</a>
                </li>
                <li>
                <a href="#stock" className="footer-link">HomeToGo stock</a>
                </li>
                <li>
                <a href="#app" className="footer-link">App</a>
                </li>
                <li>
                <a href="#features" className="footer-link">Product features</a>
                </li>
                <li>
                <a href="#insights" className="footer-link">Insights</a>
                </li>
                <li>
                <a href="#inspiration" className="footer-link">Inspiration</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <ul className="footer-links">
                <li>
                <a href="#help" className="footer-link">Help Center and contact</a>
                </li>
                <li>
                <a href="#list" className="footer-link">List your home</a>
                </li>
                <li>
                <a href="#affiliate" className="footer-link">Become an affiliate partner</a>
                </li>
                <li>
                <a href="#press" className="footer-link">Press</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal policies</h3>
              <ul className="footer-links">
                <li>
                <a href="#terms" className="footer-link">Terms of Service</a>
                </li>
                <li>
                <a href="#privacy" className="footer-link">Privacy Policy</a>
                </li>
                <li>
                <a href="#legal" className="footer-link">Legal</a>
                </li>
                <li>
                <a href="#platform" className="footer-link">How the platform works</a>
                </li>
                <li>
                <a href="#security" className="footer-link">Security</a>
                </li>
                <li>
                <a href="#guidelines" className="footer-link">Content Guidelines</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Follow us</h3>
              <div className="social-links">
                <button type="button" className="social-link instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button type="button" className="social-link facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button type="button" className="social-link linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button type="button" className="social-link tiktok">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </button>
              </div>

              
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Signature Space. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
