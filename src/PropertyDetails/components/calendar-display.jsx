"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { useState, useEffect } from "react"
import "../styles/calendar-display.css" // Custom overrides

export function CalendarDisplay({ className, classNames, showOutsideDays = true, ...props }) {
  const [numberOfMonths, setNumberOfMonths] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumberOfMonths(1)
      } else {
        setNumberOfMonths(2)
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`rdp ${className || ""}`}
      classNames={{
        months: "rdp-months",
        month: "rdp-month",
        caption: "rdp-caption",
        caption_label: "rdp-caption_label",
        nav: "rdp-nav",
        nav_button: "rdp-nav_button",
        nav_button_previous: "rdp-nav_button_previous",
        nav_button_next: "rdp-nav_button_next",
        table: "rdp-table",
        head_row: "rdp-head_row",
        head_cell: "rdp-head_cell",
        row: "rdp-row",
        cell: "rdp-cell",
        day: "rdp-day",
        day_range_start: "rdp-day_range_start",
        day_range_end: "rdp-day_range_end",
        day_selected: "rdp-day_selected",
        day_today: "rdp-day_today",
        day_outside: "rdp-day_outside",
        day_disabled: "rdp-day_disabled",
        day_range_middle: "rdp-day_range_middle",
        day_hidden: "rdp-day_hidden",
        ...(classNames || {}),
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      numberOfMonths={numberOfMonths} // Use responsive number of months
      {...props}
    />
  )
}
