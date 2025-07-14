"use client"
import { X } from "lucide-react"
import { useEffect } from "react"
import "../styles/custom-modal.css"

export function CustomModal({ isOpen, onClose, title, children, className = "" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing modal
      >
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button onClick={onClose} className="modal-close-button" aria-label="Close">
            <X className="icon" />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
