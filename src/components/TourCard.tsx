import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] transition-all duration-300 border border-luxury-gold/10">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-luxury-cream/90 backdrop-blur-sm px-3 py-1 rounded-full border border-luxury-gold/50 shadow-sm">
          <span className="text-xs font-semibold text-luxury-dark uppercase tracking-wider">{tour.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-luxury-dark mb-3 line-clamp-1 group-hover:text-luxury-gold transition-colors">
          {tour.title}
        </h3>
        
        <p className="text-luxury-gray text-sm line-clamp-2 mb-6">
          {tour.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-luxury-gold/10 pt-4">
          <div className="flex items-center text-luxury-gray text-sm">
            <Clock className="w-4 h-4 mr-2 text-luxury-gold" />
            <span className="font-medium">{tour.duration}</span>
          </div>
          
          <Link href={`/tours/${tour.slug}`} className="inline-flex items-center justify-center text-luxury-gold font-semibold text-sm hover:text-luxury-gold-dark transition-colors">
            Explore <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
