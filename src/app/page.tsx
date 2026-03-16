import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Map } from "lucide-react";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex justify-center w-full z-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop"
            alt="India Landscape - Taj Mahal"
            fill
            priority
            className="object-cover object-center scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/70 via-luxury-dark/50 to-luxury-cream"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full pt-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6 animate-[fadeIn_1s_ease-out]">
            Experience the vibrant soul of India
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg max-w-5xl animate-[slideUp_1s_ease-out]">
            Discover the <span className="text-luxury-gold font-normal italic">Magic</span> of Incredible India
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl font-light tracking-wide animate-[slideUp_1.2s_ease-out]">
            Curated luxury tours, spiritual yatras, and cultural journeys tailored for standard and premium travelers globally.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-[slideUp_1.4s_ease-out]">
            <Link href="/tours" className="bg-luxury-gold hover:bg-white hover:text-luxury-gold text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-xl shadow-luxury-gold/20 flex items-center justify-center text-lg">
              Explore Packages <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center text-lg">
              Plan Custom Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-luxury-cream border-b border-luxury-gold/10 relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 xl:px-12">
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-dark">Premium Experiences</h3>
            <p className="text-luxury-gray text-sm">Finest accommodations and seamless luxury transport across all our destinations.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4 md:border-l md:border-r border-luxury-gold/10">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
              <Map className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-dark">Curated Itineraries</h3>
            <p className="text-luxury-gray text-sm">Expertly designed tours optimizing your cultural, spiritual, and adventure highlights.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-dark">Trusted & Verified</h3>
            <p className="text-luxury-gray text-sm">Government approved agency delivering uncompromising safety and quality since inception.</p>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Handpicked Journeys</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-dark">Featured Tour Packages</h2>
            </div>
            <Link href="/tours" className="mt-6 md:mt-0 text-luxury-gold font-semibold hover:text-luxury-dark transition-colors flex items-center underline-offset-4 hover:underline">
              View All Tours <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-24 bg-luxury-dark text-luxury-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-dark via-luxury-gold to-luxury-dark"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm mb-3 block">About Luxury Trip India</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Your Gateway to the Heart of India.</h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Whether you seek the spiritual awakening of the Char Dham Yatra, the architectural brilliance of the Golden Triangle, or the serene valleys of Himachal, we craft unforgettable memories. 
              </p>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Our personalized service, deep local expertise, and commitment to affordable luxury sets us apart as India's premier travel agency.
              </p>
              <Link href="/about" className="inline-flex items-center text-white bg-white/10 hover:bg-luxury-gold px-8 py-4 rounded-full transition-colors font-medium border border-white/20">
                Discover Our Story
              </Link>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <Image 
                src="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=800&auto=format&fit=crop" 
                alt="Indian Culture" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-luxury-dark/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
