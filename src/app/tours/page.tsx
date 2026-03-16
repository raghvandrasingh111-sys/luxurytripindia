import { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Browse our handpicked luxury tour packages across India. Find the perfect cultural, spiritual, or adventure trip.",
};

export default function ToursPage() {
  return (
    <div className="bg-luxury-cream min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Discover India</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-dark mb-6">Our Tour Packages</h1>
          <p className="text-luxury-gray text-lg">
            Immerse yourself in the rich tapestry of India with our expertly curated tours. From the snow-capped Himalayas to the spiritual Ghats of Varanasi.
          </p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-4">
          <button className="px-6 py-2 bg-luxury-dark text-white rounded-full font-medium text-sm transition-colors border-2 border-transparent">All Tours</button>
          <button className="px-6 py-2 bg-white text-luxury-dark rounded-full font-medium text-sm transition-colors border-2 border-luxury-gold hover:border-luxury-gold-dark hover:bg-luxury-gold/5">Cultural</button>
          <button className="px-6 py-2 bg-white text-luxury-dark rounded-full font-medium text-sm transition-colors border-2 border-luxury-gold hover:border-luxury-gold-dark hover:bg-luxury-gold/5">Spiritual</button>
          <button className="px-6 py-2 bg-white text-luxury-dark rounded-full font-medium text-sm transition-colors border-2 border-luxury-gold hover:border-luxury-gold-dark hover:bg-luxury-gold/5">Adventure</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
