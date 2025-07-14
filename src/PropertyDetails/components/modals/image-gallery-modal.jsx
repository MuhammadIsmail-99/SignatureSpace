"use client"

// Use standard <img> for gallery images
import { CustomModal } from "../custom-modal"
import "../../styles/modals/image-gallery-modal.css"

export function ImageGalleryModalContent({ onClose, images }) {
  return (
    <CustomModal isOpen={true} onClose={onClose} title="All Photos" className="max-w-4xl">
      <div className="image-gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="image-gallery-item">
            <img
              src={img.image || "/placeholder.svg"}
              alt={img.caption || `Property image ${index + 1}`}
              className="object-cover"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </CustomModal>
  )
}
