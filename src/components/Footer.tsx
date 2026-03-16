import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-luxury-cream pt-16 pb-8 border-t-[6px] border-luxury-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-white">
                LUXURY <span className="text-luxury-gold">TRIP</span> INDIA
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore the best India travel packages with Luxury Trip India. We offer customized & pre-made tours for spiritual, adventure, and cultural experiences with premium services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/luxurytripindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white after:content-[''] after:block after:w-12 after:h-0.5 after:bg-luxury-gold after:mt-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> About Us</Link></li>
              <li><Link href="/tours" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> All Tours</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white after:content-[''] after:block after:w-12 after:h-0.5 after:bg-luxury-gold after:mt-2">Popular Tours</h3>
            <ul className="space-y-3">
              <li><Link href="/tours/golden-triangle-package" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Golden Triangle Tour</Link></li>
              <li><Link href="/tours/char-dham-yatra" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Char Dham Yatra</Link></li>
              <li><Link href="/tours/rajasthan-package" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Rajasthan Package</Link></li>
              <li><Link href="/tours/himachal-package" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Himachal Package</Link></li>
              <li><Link href="/tours/buddhist-circuit" className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center"><span className="mr-2 text-luxury-gold">›</span> Buddhist Circuit</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white after:content-[''] after:block after:w-12 after:h-0.5 after:bg-luxury-gold after:mt-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">New Delhi, India (Serving Global Travellers)</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col text-sm text-gray-400">
                  <a href="tel:+919999995475" className="hover:text-luxury-gold transition-colors">+91 99999 95475</a>
                  <a href="tel:18005705475" className="hover:text-luxury-gold transition-colors">1800 570 5475 (Toll Free)</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:info@luxurytripindia.com" className="text-gray-400 text-sm hover:text-luxury-gold transition-colors">info@luxurytripindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Luxury Trip India. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
