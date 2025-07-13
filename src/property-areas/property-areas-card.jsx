"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import downtownImage from "../assets/downtown.jpg" 
import lakeTowerImage from "../assets/Lake tower.jpg"
import marinaImage from "../assets/Marina.jpg"
import beachResidenceImage from "../assets/beach res.jpg"

export default function SimpleAreasCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const areas = [
    { name: "City Walk", image: "./public/downtown.jpg" },
    { name: "Emaar Beachfront", image: "/placeholder.svg?height=300&width=300" },
    { name: "Palm Jumeirah", image: "/placeholder.svg?height=300&width=300" },
    { name: "Bluewaters Island", image: "/placeholder.svg?height=300&width=300" },
    { name: "Downtown Dubai", image: "/placeholder.svg?height=300&width=300" },
  ]

  const nextSlide = () => {
    if (currentSlide < areas.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const getTranslateValue = () => {
    return `translateX(-${currentSlide * 100}%)`;
  };

  return (
    <div className="carousel-container">
      <style jsx>{`
        .carousel-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #f8f9fa;
        }

        .carousel-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 40px;
        }

        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: white;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .carousel-content {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .area-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 280px;
          transition: transform 0.3s ease;
        }

        .area-card:hover {
          transform: translateY(-5px);
        }

        .area-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 4px solid #CBA135;
          box-shadow: 0 8px 20px rgba(203, 161, 53, 0.3);
        }

        .area-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .properties-button {
          background-color: #CBA135;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .properties-button:hover {
          background-color: #b8941f;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(203, 161, 53, 0.4);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: #CBA135;
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .nav-button:hover {
          background-color: #b8941f;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-button.prev {
          left: 1px;
        }

        .nav-button.next {
          right: 1px;
        }

        .nav-button.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ddd;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .indicator.active {
          background-color: #CBA135;
        }

        @media (max-width: 768px) {
          .carousel-container {
            padding: 20px 10px;
          }

          .carousel-title {
            font-size: 2rem;
          }

          .carousel-wrapper {
            padding: 20px;
          }

          .area-card {
            min-width: 240px;
          }

          .area-image {
            width: 150px;
            height: 150px;
          }

          .area-name {
            font-size: 1.2rem;
          }

          .properties-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .nav-button {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .carousel-title {
            font-size: 1.8rem;
          }

          .area-card {
            min-width: 200px;
          }

          .area-image {
            width: 120px;
            height: 120px;
          }

          .area-name {
            font-size: 1rem;
          }

          .properties-button {
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .nav-button {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>

      <h2 className="carousel-title">Areas of Our Homes</h2>

      <div className="carousel-wrapper">
        <button
          className={`nav-button prev ${currentSlide === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-content" style={{ transform: getTranslateValue() }}>
          <div className="area-card">
            <img src={downtownImage} alt="DUbai Downtown" className="area-image" />
            <h3 className="area-name">Dubai Downtown</h3>
            <button className="properties-button">View properties</button>
          </div>

          <div className="area-card">
            <img src={lakeTowerImage} alt="Lake Tower" className="area-image" />
            <h3 className="area-name">Lake Tower</h3>
            <button className="properties-button">View properties</button>
          </div>

          <div className="area-card">
            <img src={marinaImage} alt="MArina" className="area-image" />
            <h3 className="area-name">Marina</h3>
            <button className="properties-button">View properties</button>
          </div>

          <div className="area-card">
            <img src={beachResidenceImage} alt="Beach Residency" className="area-image" />
            <h3 className="area-name">Beach Residency</h3>
            <button className="properties-button">View properties</button>
          </div>
        </div>

        <button
          className={`nav-button next ${currentSlide === areas.length - 1 ? "disabled" : ""}`}
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-indicators">
        {areas.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
