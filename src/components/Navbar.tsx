
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tight">
          Better Dream <span className="text-accent">Foundation</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            About Us
          </a>
          <a href="#programs" className="text-sm font-medium hover:text-accent transition-colors">
            Our Programs
          </a>
          <a href="#impact" className="text-sm font-medium hover:text-accent transition-colors">
            Our Impact
          </a>
          <a href="#team" className="text-sm font-medium hover:text-accent transition-colors">
            Our Team
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
          <Button
            variant="primary"
            size="sm"
            className="ml-2"
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
          >
            Donate Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/40 py-4">
          <nav className="container flex flex-col space-y-4">
            <a
              href="#about"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#programs"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Programs
            </a>
            <a
              href="#impact"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Impact
            </a>
            <a
              href="#team"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-sm font-medium py-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              fullWidth
            >
              Donate Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
