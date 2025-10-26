import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Send, Feather } from 'lucide-react'; // Added Feather for a touch of elegance

const Contact = () => {
  // Contact details
  const contactInfo = {
    addressLine1: "Royal Palace Road",
    addressLine2: "Jaipur, Rajasthan 302001",
    phone: "+91 141 234 5678",
    email: "info@rajheritage.com",
  };

  // Social links
  const socialLinks = [
    { name: 'Instagram', Icon: Instagram, url: '#' }, // Replace #
    { name: 'Facebook', Icon: Facebook, url: '#' },
    { name: 'Twitter', Icon: Twitter, url: '#' },
  ];

  // Basic form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will connect with you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-20 bg-ivory-sand relative overflow-hidden">
        {/* Subtle Background Element (Optional - Decorative) */}
        {/* <div className="absolute top-1/4 left-0 -translate-x-1/2 opacity-10 pointer-events-none" aria-hidden="true">
             <Feather className="text-palace-beige w-64 h-64 rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 opacity-10 pointer-events-none" aria-hidden="true">
            <Feather className="text-palace-beige w-64 h-64 -rotate-12" />
        </div> */}

      {/* Header Section - Refined Look */}
      <div className="relative isolate overflow-hidden bg-royal-maroon pt-24 pb-20 text-center shadow-xl"> {/* Added isolate */}
        {/* Background Subtle Pattern (Optional) */}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#gradient-contact)" fillOpacity="0.4" /> {/* Adjusted opacity */}
          <defs>
            <radialGradient id="gradient-contact">
              <stop stopColor="#C9A45C" /> {/* Antique Gold */}
              <stop offset={1} stopColor="#7B2D26" /> {/* Royal Maroon */}
            </radialGradient>
          </defs>
        </svg>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Ensure content is above gradient */}
          {/* <Feather className="h-16 w-16 text-antique-gold mx-auto mb-6 opacity-80" /> */}
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight">Reach Out to Royalty</h1> {/* Changed Title */}
          <p className="text-xl md:text-2xl text-ivory-sand/90 max-w-3xl mx-auto font-light leading-relaxed">
            Whether inquiring about reservations or planning a bespoke event, our concierge awaits your correspondence.
          </p>
        </div>
      </div>

      {/* Main Content Area - Single Column, Enhanced Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24"> {/* Increased vertical padding & spacing */}

        {/* Section 1: Direct Contact Information - Card Style */}
        <section className="bg-white rounded-xl shadow-lg border border-palace-beige/60 p-8 md:p-10 transition-shadow hover:shadow-xl">
          <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-8 text-center">Contact Details</h2>
          <div className="space-y-8 max-w-lg mx-auto text-charcoal-ink/90">
             {/* Address */}
            <div className="flex items-center space-x-5 group">
              <div className="bg-antique-gold/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-antique-gold flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-lg text-charcoal-ink">{contactInfo.addressLine1}</p>
                <p className="text-base text-charcoal-ink/80">{contactInfo.addressLine2}</p>
              </div>
            </div>
             {/* Phone */}
            <div className="flex items-center space-x-5 group">
              <div className="bg-antique-gold/10 p-3 rounded-full">
                 <Phone className="h-6 w-6 text-antique-gold flex-shrink-0" />
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-royal-maroon transition-colors duration-300 text-lg font-medium">{contactInfo.phone}</a>
            </div>
             {/* Email */}
            <div className="flex items-center space-x-5 group">
               <div className="bg-antique-gold/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-antique-gold flex-shrink-0" />
               </div>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-royal-maroon transition-colors duration-300 text-lg font-medium">{contactInfo.email}</a>
            </div>
          </div>
        </section>

         {/* Section 2: Map - Framed */}
        <section>
             <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-8 text-center">Our Location</h2>
             <div className="rounded-xl overflow-hidden shadow-lg border-2 border-palace-beige/80 aspect-video max-w-3xl mx-auto transition-shadow hover:shadow-xl">
                {/* Embed Google Map Iframe Here */}
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.48911079366!2d75.7884813150495!3d26.91974798312175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ed2a890e7b%3A0x6299b92f75a7a8d!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1678886568101!5m2!1sen!2sin" // **REPLACE THIS URL**
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Raj Heritage Location"
                 ></iframe>
             </div>
        </section>

        {/* Section 3: Contact Form - Enhanced Card Style */}
        <section className="bg-gradient-to-br from-white via-ivory-sand/20 to-palace-beige/10 rounded-2xl shadow-xl p-8 md:p-12 border border-palace-beige/60 transition-shadow hover:shadow-2xl"> {/* Gradient background */}
          <h2 className="font-serif text-3xl font-bold text-royal-maroon mb-8 text-center">Send An Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            {/* Input Fields - Floating Label Concept (CSS intensive, simplified here) */}
             {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: ' ' }, // Placeholder is space for effect
                { id: 'email', label: 'Email Address', type: 'email', placeholder: ' ' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: ' ' },
              ].map(field => (
                <div key={field.id} className="relative"> {/* Added relative positioning */}
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder} // Keep placeholder for accessibility and effect base
                    className="peer w-full px-4 py-3 bg-white border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold/70 focus:border-transparent transition-colors duration-200 placeholder-transparent" // Added peer, placeholder-transparent
                  />
                   {/* Floating Label */}
                  <label
                     htmlFor={field.id}
                     className="absolute left-4 -top-2.5 bg-gradient-to-b from-white via-white to-transparent px-1 text-xs text-charcoal-ink/70 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal-ink/50 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-antique-gold" // Styling for floating effect
                   >
                     {field.label} *
                   </label>
                </div>
              ))}
            {/* Textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder=" " // Space placeholder
                className="peer w-full px-4 py-3 bg-white border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold/70 focus:border-transparent transition-colors duration-200 resize-none placeholder-transparent"
              ></textarea>
               <label
                   htmlFor="message"
                   className="absolute left-4 -top-2.5 bg-gradient-to-b from-white via-white to-transparent px-1 text-xs text-charcoal-ink/70 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal-ink/50 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-antique-gold"
               >
                   Message *
               </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-royal-maroon text-white py-3 px-6 rounded-lg hover:bg-antique-gold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-antique-gold" // Added focus state
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        {/* Section 4: Social Media (Repeated for emphasis or alternative placement) */}
         <section className="text-center pt-8">
             <h3 className="font-serif text-2xl font-semibold text-charcoal-ink/80 mb-6">Stay Connected</h3>
            <div className="flex space-x-10 justify-center">
            {socialLinks.map(({ name, Icon, url }) => (
                <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Raj Heritage on ${name}`}
                className="text-charcoal-ink/60 hover:text-antique-gold transform hover:scale-125 transition-all duration-300"
                >
                <Icon className="h-7 w-7" />
                </a>
            ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;