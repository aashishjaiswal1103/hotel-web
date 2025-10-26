import React, { useState } from 'react';
import { Crown, Star, Gift, Calendar, Trophy, Users, Phone, Mail } from 'lucide-react';

const Loyalty = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const memberTiers = [
    {
      name: "Royal Guest",
      icon: Crown,
      color: "text-palace-beige",
      bgColor: "bg-palace-beige/20",
      points: "0 - 999",
      benefits: ["Welcome drink", "Late checkout", "Room upgrade (subject to availability)", "Complimentary Wi-Fi"]
    },
    {
      name: "Heritage Member",
      icon: Star,
      color: "text-antique-gold",
      bgColor: "bg-antique-gold/20",
      points: "1,000 - 4,999",
      benefits: ["All Royal Guest benefits", "Priority reservations", "15% spa discount", "Complimentary breakfast", "Heritage tour"]
    },
    {
      name: "Maharaja Elite",
      icon: Trophy,
      color: "text-royal-maroon",
      bgColor: "bg-royal-maroon/20",
      points: "5,000+",
      benefits: ["All Heritage Member benefits", "Butler service", "Airport transfers", "25% dining discount", "Exclusive events access", "Personal concierge"]
    }
  ];

  const memberData = {
    name: "Sarah Johnson",
    tier: "Heritage Member",
    points: 2450,
    nextTierPoints: 2550,
    totalStays: 8,
    memberSince: "2023",
    upcomingReservations: [
      {
        id: 1,
        type: "Room",
        name: "Royal Maharaja Suite",
        date: "March 15, 2025",
        nights: 3,
        status: "Confirmed"
      },
      {
        id: 2,
        type: "Spa",
        name: "Ayurvedic Wellness Package",
        date: "March 16, 2025",
        duration: "3 hours",
        status: "Confirmed"
      }
    ],
    recentActivity: [
      { date: "Jan 2025", activity: "Stayed 2 nights", points: "+500" },
      { date: "Dec 2024", activity: "Spa treatment", points: "+150" },
      { date: "Nov 2024", activity: "Dining experience", points: "+100" },
      { date: "Oct 2024", activity: "Heritage tour", points: "+75" }
    ]
  };

  const exclusiveOffers = [
    {
      id: 1,
      title: "Heritage Weekend Escape",
      discount: "30% OFF",
      description: "Exclusive member pricing on weekend stays",
      validUntil: "March 31, 2025",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
    },
    {
      id: 2,
      title: "Royal Spa Experience",
      discount: "25% OFF",
      description: "Complimentary treatments for Maharaja Elite members",
      validUntil: "April 15, 2025",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
    },
    {
      id: 3,
      title: "Cultural Evening Package",
      discount: "Free Upgrade",
      description: "Traditional dinner with folk performance",
      validUntil: "May 1, 2025",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 bg-ivory-sand">
        {/* Header */}
        <div className="bg-royal-maroon text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Crown className="h-16 w-16 text-antique-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Royal Loyalty Program</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our exclusive loyalty program and enjoy royal privileges, 
              personalized service, and unforgettable experiences
            </p>
          </div>
        </div>

        {/* Login/Signup Section */}
        <section className="py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-palace-beige">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-2">Member Login</h2>
                <p className="text-charcoal-ink/70">Access your royal privileges</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-ink mb-2">Email Address</label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-ink mb-2">Password</label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="w-full px-4 py-3 border border-palace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-antique-gold"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-royal-maroon text-white py-3 rounded-lg hover:bg-royal-maroon/90 transition-colors duration-300 font-medium"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-charcoal-ink/70">
                  Not a member yet?{' '}
                  <button className="text-antique-gold hover:text-royal-maroon transition-colors duration-300 font-medium">
                    Join Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-16 bg-palace-beige/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-4">Membership Tiers</h2>
              <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto">
                Discover the exclusive benefits and privileges of each membership level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberTiers.map((tier, index) => {
                const IconComponent = tier.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-palace-beige hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`h-8 w-8 ${tier.color}`} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-royal-maroon text-center mb-2">{tier.name}</h3>
                    <p className="text-center text-charcoal-ink/70 mb-6">{tier.points} points</p>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <Star className="h-4 w-4 text-antique-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-charcoal-ink">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Earn Points */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-royal-maroon mb-8">How to Earn Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-palace-beige">
                <div className="w-12 h-12 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-antique-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">Stay with Us</h3>
                <p className="text-sm text-charcoal-ink/70">Earn 10 points per ₹100 spent on accommodation</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-palace-beige">
                <div className="w-12 h-12 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-antique-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">Spa & Wellness</h3>
                <p className="text-sm text-charcoal-ink/70">Earn 5 points per ₹100 spent on spa treatments</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-palace-beige">
                <div className="w-12 h-12 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-antique-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">Dining</h3>
                <p className="text-sm text-charcoal-ink/70">Earn 5 points per ₹100 spent on dining</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-palace-beige">
                <div className="w-12 h-12 bg-antique-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-antique-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-royal-maroon mb-2">Special Events</h3>
                <p className="text-sm text-charcoal-ink/70">Bonus points for participating in heritage activities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-royal-maroon text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <Crown className="h-12 w-12 text-antique-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold mb-4">Join the Royal Family</h2>
            <p className="text-xl text-white/90 mb-8">
              Start earning points and enjoying exclusive privileges today
            </p>
            <button className="bg-antique-gold text-white px-8 py-4 rounded-full hover:bg-antique-gold/90 transition-colors duration-300 font-medium">
              Become a Member
            </button>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 141 234 5678</span>
              </div>
              <span>or</span>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>loyalty@rajheritage.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Member Dashboard
  return (
    <div className="min-h-screen pt-20 bg-ivory-sand">
      {/* Header */}
      <div className="bg-royal-maroon text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold mb-2">Welcome back, {memberData.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="bg-antique-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {memberData.tier}
                </span>
                <span className="text-white/80">Member since {memberData.memberSince}</span>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Points & Progress */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige">
              <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-6">Your Points</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-antique-gold mb-2">{memberData.points.toLocaleString()}</div>
                  <div className="text-sm text-charcoal-ink/70">Current Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-royal-maroon mb-2">{memberData.totalStays}</div>
                  <div className="text-sm text-charcoal-ink/70">Total Stays</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-peacock-teal mb-2">{memberData.nextTierPoints - memberData.points}</div>
                  <div className="text-sm text-charcoal-ink/70">Points to Next Tier</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-sm text-charcoal-ink/70 mb-2">
                  <span>Progress to Maharaja Elite</span>
                  <span>{Math.round((memberData.points / memberData.nextTierPoints) * 100)}%</span>
                </div>
                <div className="w-full bg-palace-beige rounded-full h-2">
                  <div 
                    className="bg-antique-gold h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(memberData.points / memberData.nextTierPoints) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Upcoming Reservations */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige">
              <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-6">Upcoming Reservations</h2>
              <div className="space-y-4">
                {memberData.upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-4 bg-palace-beige/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-charcoal-ink">{reservation.name}</h3>
                      <p className="text-sm text-charcoal-ink/70">{reservation.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-antique-gold text-white px-3 py-1 rounded-full text-xs">
                        {reservation.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige">
              <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {memberData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-palace-beige last:border-b-0">
                    <div>
                      <p className="font-medium text-charcoal-ink">{activity.activity}</p>
                      <p className="text-sm text-charcoal-ink/70">{activity.date}</p>
                    </div>
                    <span className="text-antique-gold font-medium">{activity.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exclusive Offers */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige">
              <h2 className="font-serif text-xl font-bold text-royal-maroon mb-6">Exclusive Offers</h2>
              <div className="space-y-4">
                {exclusiveOffers.map((offer) => (
                  <div key={offer.id} className="border border-palace-beige rounded-lg overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-charcoal-ink text-sm">{offer.title}</h3>
                        <span className="bg-antique-gold text-white px-2 py-1 rounded text-xs font-medium">
                          {offer.discount}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-ink/70 mb-2">{offer.description}</p>
                      <p className="text-xs text-charcoal-ink/50">Valid until {offer.validUntil}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;