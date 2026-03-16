import { Metadata } from "next";
import Image from "next/image";
import { Award, Compass, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Luxury Trip India and our commitment to providing unforgettable travel experiences across the Indian subcontinent.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-dark mb-6">About Luxury Trip India</h1>
          <p className="text-luxury-gray text-lg">
            We are a Government Approved Travel Agency dedicated to bringing you the best of India. From the majestic Himalayas to the vibrant streets of Rajasthan.
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-24 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1200&auto=format&fit=crop" 
            alt="About Luxury Trip India"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Excellence</h3>
            <p className="text-luxury-gray">Over two decades of experience crafting premium travel solutions with unmatched service.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Exploration</h3>
            <p className="text-luxury-gray">We go beyond standard routes to offer deep, culturally immersive experiences across India.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Trust</h3>
            <p className="text-luxury-gray">A Government Approved agency focused on safety, reliability, and honest relationships.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
