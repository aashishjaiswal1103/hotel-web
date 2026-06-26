import { Link } from 'react-router-dom';
import { Star, Award, Crown, Sparkles } from 'lucide-react';

const Home = () => {

  const featuredRooms = [
    {
      id: 1,
      name: "Royal Maharaja Suite",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      price: "₹45,000",
      features: ["Palace View", "Private Terrace Jharokha", "24/7 Royal Butler Desk"]
    },
    {
      id: 2,
      name: "Heritage Palace Room",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "₹25,000",
      features: ["Antique Furnishings", "Courtyard Views", "Carved Jali Screens"]
    },
    {
      id: 3,
      name: "Colonial Governor Suite",
      image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
      price: "₹35,000",
      features: ["British Heritage Decor", "Victorian Bathrooms", "High Tea Service"]
    }
  ];

  const experiences = [
    {
      title: "Pink City Walk",
      image: "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg",
      description: "Discover Jaipur's majestic forts, local markets, and hidden gems with our historian."
    },
    {
      title: "Royal Rajput Dining",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      description: "Savor traditional Rajasthani Lal Maas and Dal Baati under hand-painted palace domes."
    },
    {
      title: "Soma Ayurvedic Spa",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      description: "Indulge in holistic therapies and yoga rituals designed for ancient royal lineages."
    },
    {
      title: "Folk & Puppetry Nights",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      description: "Witness traditional Rajasthani Kalbeliya dance and puppet shows in the grand courtyard."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-sand">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-ink/70 via-royal-maroon/50 to-charcoal-ink/65"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-up">
            <p className="font-['Great_Vibes'] text-4xl md:text-5xl text-antique-gold mb-3 tracking-wide select-none drop-shadow-md">
              Padharo Mhare Des
            </p>
            <Crown className="h-14 w-14 text-antique-gold mx-auto mb-5" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-wide">
              Welcome to <br />
              <span className="text-antique-gold animate-gold-shimmer">Raj Heritage</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Step into an era of regal splendor where Jaipur's pink city aesthetics meet signature Rajput hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rooms"
                className="bg-royal-maroon text-white px-8 py-4 rounded-full hover:bg-royal-maroon/90 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
              >
                Explore Rooms
              </Link>
              <Link
                to="/packages"
                className="border-2 border-antique-gold text-antique-gold px-8 py-4 rounded-full hover:bg-antique-gold hover:text-white transition-all duration-300 transform hover:scale-105 font-medium backdrop-blur-sm"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Sparkles className="h-8 w-8 text-antique-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-4">Royal Chambers</h2>
          <p className="text-base md:text-lg text-charcoal-ink/75 max-w-2xl mx-auto font-light">
            Stay in historic rooms adorned with Rajasthani block prints, carved jharokhas, and antique furnishings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-3xl overflow-hidden shadow-luxury-gold hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between border border-palace-beige/40">
              <div className="relative overflow-hidden jharokha-arch h-72 m-4 mb-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-royal-maroon mb-2">{room.name}</h3>
                  <div className="flex items-center justify-between mb-4 border-b border-palace-beige/30 pb-3">
                    <span className="text-2xl font-bold text-antique-gold">{room.price}</span>
                    <span className="text-xs text-charcoal-ink/65 uppercase tracking-widest font-semibold">per night</span>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2.5">
                        <Star className="h-4 w-4 text-antique-gold flex-shrink-0" />
                        <span className="text-sm text-charcoal-ink/85">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/rooms/${room.id}`}
                  className="block w-full bg-royal-maroon text-white text-center py-3.5 rounded-xl hover:bg-antique-gold hover:text-royal-maroon transition-all duration-300 font-semibold uppercase text-xs tracking-wider shadow-md"
                >
                  View Sanctuary
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Soul of Jaipur (Cultural Story) */}
      <section className="py-24 bg-terracotta text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none jaipur-motif"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-serif italic text-lg text-palace-beige">The Pink City Legend</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-wide leading-tight">
                Built from Terracotta Clay & Golden Sunsets
              </h2>
              <p className="text-white/95 leading-relaxed font-light text-base md:text-lg">
                In 1876, Maharaja Ram Singh painted the entire city of Jaipur in this warm terracotta-pink hue to welcome the royal guests. It was the color of hospitality, warm hearts, and ancient earth.
              </p>
              <p className="text-white/90 leading-relaxed font-light text-sm md:text-base">
                At Raj Heritage, we preserve this very spirit of hospitality. From our traditional Jharokha window arches to the hand-carved Jali screens and block-printed linens, every corner of our palace whispers tales of Rajput chivalry and timeless artistry.
              </p>
              <div className="pt-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 border border-palace-beige text-palace-beige hover:bg-white hover:text-royal-maroon px-8 py-3.5 rounded-full transition-all duration-300 font-semibold uppercase text-xs tracking-wider shadow-md"
                >
                  <span>Discover Our History</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            {/* Visual Jharokha Frame Showcase */}
            <div className="relative flex justify-center">
              <div className="w-80 h-[450px] bg-white/10 p-4 rounded-3xl border border-white/20 shadow-2xl relative">
                <div className="w-full h-full jharokha-arch overflow-hidden relative shadow-inner">
                  <img
                    src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg"
                    alt="Jaipur Palace Arch View"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-royal-maroon/20 mix-blend-color-burn"></div>
                </div>
                {/* Decorative label */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-royal-maroon text-white text-[11px] font-bold py-1.5 px-4 rounded-full border border-antique-gold/30 uppercase tracking-widest">
                  Hawa Mahal View
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Award className="h-8 w-8 text-antique-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mb-4">Royal Experiences</h2>
          <p className="text-base md:text-lg text-charcoal-ink/75 max-w-2xl mx-auto font-light">
            Immerse yourself in the rich culture and traditions of Rajasthan through our carefully curated experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="jharokha-arch h-96 overflow-hidden relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <h3 className="font-serif text-xl font-bold mb-1.5">{experience.title}</h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-royal-maroon text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none jaipur-motif"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <Crown className="h-12 w-12 text-antique-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto font-light">
            Subscribe to receive exclusive offers, local guides, and updates from Raj Heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-antique-gold border border-white/20 backdrop-blur-sm text-sm"
            />
            <button className="bg-antique-gold text-royal-maroon hover:bg-white hover:text-royal-maroon px-8 py-3.5 rounded-full transition-all duration-300 font-bold uppercase text-xs tracking-wider shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;