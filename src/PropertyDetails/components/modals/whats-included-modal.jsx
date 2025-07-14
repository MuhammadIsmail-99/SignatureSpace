"use client"
import { CustomModal } from "../custom-modal"
import {
  Activity,
  Utensils,
  Shirt,
  Tv,
  Mountain,
  Waves,
  Building,
  Tent,
  ComputerIcon as Blender,
  Footprints,
  GuitarIcon as Golf,
  FireExtinguisher,
  BellRing,
  BedDouble,
  WashingMachine,
  AirVent,
  Wifi,
  Microwave,
  CookingPot,
  PawPrint,
  CigaretteIcon as Smoking,
  UtensilsCrossed,
  Bike,
  Sun,
  Trees,
  GlassWaterIcon as Water,
  Cctv,
  ParkingSquare,
  Dumbbell,
} from "lucide-react"
import "../../styles/modals/whats-included-modal.css"

export function WhatsIncludedModalContent({ onClose, features }) {
  const featureMap = {
    cctv: { name: "CCTV", icon: Cctv },
    parking: { name: "Parking", icon: ParkingSquare },
    gym: { name: "Gym", icon: Dumbbell },
    washing_machine: { name: "Washing machine", icon: WashingMachine },
    air_conditioning: { name: "Air conditioning", icon: AirVent },
    wifi: { name: "Wifi", icon: Wifi },
    microwave: { name: "Microwave", icon: Microwave },
    kitchen: { name: "Kitchen", icon: CookingPot },
    pet_friendly: { name: "Pet friendly", icon: PawPrint },
  }

  const displayedFeatures = Object.keys(features || {}).filter((key) => features[key] && featureMap[key])

  const amenities = [
    { name: "Leisure activities", icon: Activity },
    { name: "Restaurant", icon: Utensils },
    { name: "Dryer", icon: Shirt },
    { name: "DVD player", icon: Tv },
    { name: "Panoramic view", icon: Mountain },
    { name: "Waterfront", icon: Waves },
    { name: "Courtyard", icon: Building },
    { name: "Beach access", icon: Tent },
    { name: "Blender", icon: Blender },
    { name: "Mini golf", icon: Footprints },
    { name: "Surfing", icon: Waves },
    { name: "Water view", icon: Water },
    { name: "Golf", icon: Golf },
    { name: "Fire extinguisher", icon: FireExtinguisher },
    { name: "Smoke alarm", icon: BellRing },
    { name: "Bed linen (free)", icon: BedDouble },
  ]

  const outdoorSpaces = [
    { name: "Balcony/patio", icon: Sun },
    { name: "Garden", icon: Trees },
    { name: "Bike storage", icon: Bike },
  ]

  const safetyFeatures = [
    { name: "Contactless check-in/-out", icon: Footprints },
    { name: "First aid kit", icon: BellRing },
  ]

  const policies = [
    { name: "No pets", icon: PawPrint },
    { name: "No smoking", icon: Smoking },
    { name: "No parties", icon: UtensilsCrossed },
  ]

  return (
    <CustomModal isOpen={true} onClose={onClose} title="What's included" className="max-w-2xl">
      <div className="whats-included-modal-content">
        {displayedFeatures.length > 0 && (
          <>
            <h3 className="whats-included-section-title">Property Features</h3>
            <div className="whats-included-features-grid">
              {displayedFeatures.map((key, index) => {
                const feature = featureMap[key]
                if (!feature) return null
                const Icon = feature.icon
                return (
                  <div key={index} className="whats-included-feature-item">
                    <Icon className="whats-included-feature-icon" />
                    <span>{feature.name}</span>
                  </div>
                )
              })}
            </div>
          </>
        )}

        <h3 className="whats-included-section-title mt-4">General Amenities</h3>
        <div className="whats-included-features-grid">
          {amenities.map((item, index) => (
            <div key={index} className="whats-included-feature-item">
              <item.icon className="whats-included-feature-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <h3 className="whats-included-section-title mt-4">Outdoor spaces</h3>
        <div className="whats-included-features-grid">
          {outdoorSpaces.map((item, index) => (
            <div key={index} className="whats-included-feature-item">
              <item.icon className="whats-included-feature-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <h3 className="whats-included-section-title mt-4">Your safety first</h3>
        <div className="whats-included-features-grid">
          {safetyFeatures.map((item, index) => (
            <div key={index} className="whats-included-feature-item">
              <item.icon className="whats-included-feature-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <h3 className="whats-included-section-title mt-4">Policies</h3>
        <div className="whats-included-features-grid">
          {policies.map((item, index) => (
            <div key={index} className="whats-included-feature-item">
              <item.icon className="whats-included-feature-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </CustomModal>
  )
}
