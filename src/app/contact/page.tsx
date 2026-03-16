import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Luxury Trip India for customized itineraries, general inquiries or 24/7 dedicated support.",
};

export default function ContactPage() {
  return (
    <div className="bg-luxury-cream min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-luxury-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Get In Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-dark mb-6">Contact Us</h1>
          <p className="text-luxury-gray text-lg">
            Our luxury travel experts are available 24/7. Reach out via WhatsApp, phone, or email to start planning your dream journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-luxury-gold/10">
            <h2 className="font-serif text-3xl font-bold text-luxury-dark mb-8">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-luxury-gray mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-shadow bg-gray-50/50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-gray mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-shadow bg-gray-50/50" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-shadow bg-gray-50/50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-shadow bg-gray-50/50" placeholder="+1 234 567 890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 transition-shadow bg-gray-50/50" placeholder="Tell us about your dream trip..."></textarea>
              </div>
              <button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-luxury-gold/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-12 lg:pl-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-luxury-dark mb-8">Contact Information</h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mr-6 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Corporate Head Office</h4>
                    <p className="text-luxury-gray text-sm leading-relaxed">
                      New Delhi, India<br/>
                      Serving global travellers seamlessly.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mr-6 shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">24/7 Hotlines</h4>
                    <div className="flex flex-col space-y-2 mt-2">
                       <a href="tel:+919999995475" className="text-luxury-gray hover:text-luxury-gold transition-colors font-medium">+91 99999 95475</a>
                       <a href="tel:18005705475" className="text-luxury-gray hover:text-luxury-gold transition-colors font-medium">1800 570 5475 (Toll Free)</a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mr-6 shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Support</h4>
                    <a href="mailto:info@luxurytripindia.com" className="text-luxury-gray hover:text-luxury-gold transition-colors block mt-2 font-medium">info@luxurytripindia.com</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-luxury-dark rounded-3xl text-white relative overflow-hidden h-[300px]">
               <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-[#25D366]/20 to-luxury-dark z-0"></div>
               <div className="relative z-10 flex flex-col justify-center h-full">
                 <h3 className="font-serif text-2xl font-bold mb-4">Fastest Way to Book</h3>
                 <p className="text-gray-300 text-sm mb-8 leading-relaxed">Skip the forms and chat directly with our travel experts on WhatsApp for an instant response.</p>
                 <a href="https://api.whatsapp.com/send?phone=919999995475&text=Hi,%20I%20would%20like%20to%20plan%20a%20luxury%20trip." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg">
                   Chat on WhatsApp
                 </a>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
