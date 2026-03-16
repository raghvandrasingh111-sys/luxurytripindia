import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, MapPin, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";

// Generate static params for Next.js App Router (Static Generation)
export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug);
  
  if (!tour) return { title: "Tour Not Found" };
  
  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      images: [{ url: tour.imageUrl }],
    },
  };
}

export default async function TourDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  // Generate generic structured data (JSON-LD) for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    touristType: ["Standard", "Luxury", "Premium"],
    subjectOf: {
      '@type': 'CreativeWork',
      name: `Information about ${tour.title}`
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="bg-luxury-cream min-h-screen">
        {/* Dynamic Hero */}
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <Image 
            src={tour.imageUrl} 
            alt={tour.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto max-w-7xl">
              <span className="inline-block px-4 py-1.5 bg-luxury-gold text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                {tour.category}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-md">{tour.title}</h1>
              <div className="flex items-center text-white/90 text-sm md:text-base font-medium space-x-6">
                <span className="flex items-center"><Clock className="w-5 h-5 mr-2 text-luxury-gold" /> {tour.duration}</span>
                <span className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-luxury-gold" /> Pan India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="font-serif text-3xl font-bold text-luxury-dark mb-6">Overview</h2>
                <div className="prose prose-lg text-luxury-gray max-w-none">
                  <p className="leading-relaxed">{tour.description}</p>
                  <p className="leading-relaxed mt-4">This premium package is designed for travelers who appreciate comfort and exclusivity. Enjoy expert guides, hand-picked accommodations, and seamless transfers throughout your journey with Luxury Trip India.</p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-luxury-dark mb-6 flex items-center">
                  <CheckCircle2 className="w-8 h-8 mr-3 text-luxury-gold" /> Trip Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Premium Accommodations', 'Private AC Transfers', 'Expert Local Guides', 'All Entrance Fees Included', '24/7 VIP Assistance', 'Curated Dining'].map((highlight, idx) => (
                    <li key={idx} className="flex items-center bg-white p-4 rounded-xl border border-luxury-gold/10 shadow-sm">
                      <ArrowRight className="w-4 h-4 mr-3 text-luxury-gold" />
                      <span className="text-luxury-dark font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-luxury-dark mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-luxury-gold" /> Itinerary Summary
                </h2>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-luxury-gold/10 relative">
                  <div className="absolute left-10 md:left-12 top-10 bottom-10 w-0.5 bg-luxury-gold/20 z-0"></div>
                  <div className="space-y-8 relative z-10">
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">1</div>
                      <div className="ml-6">
                        <h4 className="font-serif text-xl font-bold text-luxury-dark">Arrival & Welcome</h4>
                        <p className="text-luxury-gray mt-2 text-sm leading-relaxed">Meet our representative and transfer to your luxury hotel. Enjoy an evening of leisure to acclimatize.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">2-4</div>
                      <div className="ml-6">
                        <h4 className="font-serif text-xl font-bold text-luxury-dark">Exploration Days</h4>
                        <p className="text-luxury-gray mt-2 text-sm leading-relaxed">Guided sightseeing of primary monuments, spiritual temples, or valleys depending on your selected tour. Includes select premium dining experiences.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-md">...</div>
                      <div className="ml-6">
                        <h4 className="font-serif text-xl font-bold text-luxury-dark">Departure</h4>
                        <p className="text-luxury-gray mt-2 text-sm leading-relaxed">Checkout and transfer to the airport/station for your onward destination.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar Booking Card */}
            <div className="lg:col-span-1 border-luxury-gold/20">
              <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-24 border border-luxury-gold/20">
                <h3 className="font-serif text-2xl font-bold text-luxury-dark mb-6">Plan Your Trip</h3>
                <p className="text-luxury-gray text-sm mb-8">Get a customized quote for this exclusive package tailored exactly to your dates and preferences.</p>
                
                <a 
                  href={`https://api.whatsapp.com/send?phone=919999995475&text=Hi, I am interested in the ${tour.title} package.`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full block text-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-green-500/20 mb-4"
                >
                  Book via WhatsApp
                </a>
                
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <a 
                  href="mailto:info@luxurytripindia.com" 
                  className="w-full block text-center bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-bold py-3.5 rounded-xl transition-colors"
                >
                  Email Us
                </a>

                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-luxury-gray text-sm">Tour Code:</span>
                    <span className="font-semibold text-luxury-dark">{tour.id.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-luxury-gray text-sm">Support:</span>
                    <span className="font-semibold text-luxury-dark">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
