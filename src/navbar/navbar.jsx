"use client"

import { useState, useEffect } from "react"
import "./navbar.css"
import logo from "../assets/logo.png" // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.navbar`)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Monthly Properties", href: "#monthly" },
    { name: "Daily Properties", href: "#daily" },
    { name: "List Property (Owner)", href: "#list-property" },
    { name: "Blog", href: "#blog" },
  ]

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbarContainer">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Signature Space" className="logoImage" />
        </a>

        {/* Desktop Navigation */}
        <ul className="navLinks">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="navLink">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="/signin" className="profileIcon desktopOnly">
          <i className="fa-solid fa-user"></i>
        </a>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobileNavLinks">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="mobileNavLink" onClick={closeMenu}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
