"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import "../styles/custom-select.css"

export function CustomSelect({ label, value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (optionValue) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className="custom-select">
      {label && <label className="select-label">{label}</label>}
      <button
        type="button"
        className="select-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="select-button-text">{options.find((opt) => opt.value === value)?.label || placeholder}</span>
        <ChevronDown className={`select-button-icon ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <ul className="select-options" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className="select-option-item"
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
