"use client"
import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { CalendarDisplay } from "./calendar-display"
import "../styles/custom-date-picker.css"

export function CustomDatePicker({ date, setDate, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="custom-date-picker">
      <button type="button" className="date-picker-button" onClick={() => setIsOpen(!isOpen)}>
        <div className="date-picker-button-content">
          <CalendarIcon className="date-picker-button-icon" />
          <span className={date ? "date-picker-button-text" : "date-picker-button-text placeholder"}>
            {date ? format(date, "PPP") : placeholder}
          </span>
        </div>
        <ChevronDown className={`date-picker-arrow-icon ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <div className="date-picker-popover">
          <CalendarDisplay
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              setIsOpen(false)
            }}
            initialFocus
          />
        </div>
      )}
    </div>
  )
}
