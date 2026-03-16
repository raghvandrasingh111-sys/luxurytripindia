import Link from "next/link";
import { Phone, Mail, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-luxury-cream/90 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-luxury-gray border-b border-luxury-gold/10">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@luxurytripindia.com" className="flex items-center hover:text-luxury-gold transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@luxurytripindia.com
            </a>
            <a href="tel:+919999995475" className="flex items-center hover:text-luxury-gold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 99999 95475
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs uppercase tracking-wider font-semibold">Government Approved</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-luxury-dark tracking-tight">
              LUXURY 
              <span className="text-luxury-gold ml-2">TRIP INDIA</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-luxury-dark hover:text-luxury-gold transition-colors uppercase text-sm tracking-wide">Home</Link>
            <Link href="/about" className="font-medium text-luxury-dark hover:text-luxury-gold transition-colors uppercase text-sm tracking-wide">About Us</Link>
            <Link href="/tours" className="font-medium text-luxury-dark hover:text-luxury-gold transition-colors uppercase text-sm tracking-wide">Tour Packages</Link>
            <Link href="/contact" className="font-medium text-luxury-dark hover:text-luxury-gold transition-colors uppercase text-sm tracking-wide">Contact</Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a href="https://api.whatsapp.com/send?phone=919999995475&text=Hi" target="_blank" rel="noopener noreferrer" className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md shadow-luxury-gold/20">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-luxury-dark hover:text-luxury-gold transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
