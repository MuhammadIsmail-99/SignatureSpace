"use client"

import { Search } from "lucide-react"
import { CustomModal } from "../custom-modal"
import "../../styles/modals/all-about-stay-modal.css"

export function AllAboutStayModalContent({ onClose, description }) {
  return (
    <CustomModal isOpen={true} onClose={onClose} title="All about this stay" className="max-w-2xl">
      <div className="all-about-stay-modal-content">
        <h3 className="all-about-stay-section-title">About this stay</h3>
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input type="text" placeholder="Search description" className="search-input" />
        </div>
        <p className="description-paragraph">{description}</p>
        <p className="policy-text">Property policy: the primary guest must be at least 25 years old</p>
      </div>
    </CustomModal>
  )
}
