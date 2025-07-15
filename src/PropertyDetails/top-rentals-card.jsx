// Top Rentals Component
import React from "react";

const TopRentalsCard = () => {
  return (
    <div className="top-rentals">
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
    </div>
  );
};

export default TopRentalsCard;
