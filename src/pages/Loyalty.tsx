import { Crown, Star, Gift, Calendar, Trophy, Users, Phone, MessageSquare, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

const Loyalty = () => {

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
    name: "Ashish Sharma",
    tier: "Maharaja Elite",
    memberId: "RH-ELITE-008",
    points: 7420,
    nextMilestonePoints: 10000, // Points needed for a complimentary luxury suite night
    totalStays: 14,
    memberSince: "2022",
    butler: {
      name: "Rajesh Singh",
      role: "Royal Butler",
      contact: "+91 141 234 9900",
      status: "Available"
    },
    upcomingReservations: [
      {
        id: 1,
        type: "Stay",
        name: "Royal Maharaja Suite",
        date: "Oct 15 - Oct 18, 2026",
        detail: "3 Nights (Jaipur Literature Festival)",
        status: "Confirmed",
        butlerAssigned: true
      },
      {
        id: 2,
        type: "Spa",
        name: "Soma Ayurvedic Wellness",
        date: "Oct 16, 2026 - 11:00 AM",
        detail: "90 min Shirodhara Massage",
        status: "Confirmed",
        butlerAssigned: false
      }
    ],
    recentActivity: [
      { date: "May 2026", activity: "Stayed 2 nights at Heritage Palace Room", points: "+500" },
      { date: "May 2026", activity: "Dining credit at Suvarna Mahal", points: "+180" },
      { date: "Mar 2026", activity: "Royal Spa Treatment & Yoga Session", points: "+120" },
      { date: "Jan 2026", activity: "Stayed 3 nights at Maharaja Suite", points: "+750" }
    ]
  };

  const exclusiveOffers = [
    {
      id: 1,
      title: "Jaipur Literature Festival Special",
      discount: "VIP Lounge Access",
      description: "Complimentary access to the exclusive LitFest speaker lounge for Maharaja Elite members.",
      validUntil: "Oct 20, 2026",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
    },
    {
      id: 2,
      title: "Royal Culinary Masterclass",
      discount: "Complimentary",
      description: "Private Rajasthani culinary session with our executive chef.",
      validUntil: "Nov 30, 2026",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
    },
    {
      id: 3,
      title: "Soma Spa Revitalization",
      discount: "30% OFF",
      description: "Exclusive discounts on our rare Himalayan salt-stone therapies.",
      validUntil: "Dec 15, 2026",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory-sand jaipur-motif pt-24 pb-20">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-antique-gold via-royal-maroon to-antique-gold"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-royal-maroon font-bold bg-palace-beige/50 px-4 py-1.5 rounded-full border border-palace-beige">
            Maharaja Club Portal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-maroon mt-3">
            Khamaghani & Welcome, Ashish ji
          </h1>
          <p className="text-charcoal-ink/75 max-w-xl mx-auto mt-2 font-serif italic text-sm md:text-base">
            "At Raj Heritage, hospitality is not a service, it is our sacred dharma."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Membership Card & Butler */}
          <div className="space-y-8 lg:col-span-1">
            
            {/* Maharaja Elite Gold Card */}
            <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#F5D893] via-[#C9A45C] to-[#8A6726] text-charcoal-ink shadow-luxury-gold border border-antique-gold/40 flex flex-col justify-between h-64 md:h-72 select-none group hover:shadow-luxury-hover transition-all duration-500">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-royal-maroon/70">Loyalty Club</p>
                  <h3 className="font-serif text-2xl font-bold tracking-wide mt-0.5 text-royal-maroon">Maharaja Elite</h3>
                </div>
                <div className="bg-royal-maroon text-white p-2.5 rounded-2xl border border-antique-gold/25 shadow-md">
                  <Crown className="h-6 w-6 text-antique-gold" />
                </div>
              </div>

              {/* Card Body */}
              <div>
                <p className="text-[9px] uppercase tracking-widest font-semibold text-royal-maroon/60">Guest Name</p>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-royal-maroon tracking-wide">Ashish Sharma</h2>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-end border-t border-royal-maroon/10 pt-4 mt-2">
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-semibold text-royal-maroon/60">Member ID</p>
                  <p className="font-mono text-xs font-bold text-royal-maroon/90 tracking-widest">RH-ELITE-008</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-widest font-semibold text-royal-maroon/60">VIP Tier Level</p>
                  <p className="text-xs font-bold text-royal-maroon/95 uppercase tracking-wider">Level 3 (Lifetime)</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Block */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige/60">
              <h2 className="font-serif text-lg font-bold text-royal-maroon mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-antique-gold" />
                <span>Points Ledger</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ivory-sand/40 p-4 rounded-xl border border-palace-beige/30 text-center">
                  <span className="text-3xl font-bold text-royal-maroon">{memberData.points.toLocaleString()}</span>
                  <p className="text-[10px] uppercase font-bold text-charcoal-ink/60 mt-1">Available Points</p>
                </div>
                <div className="bg-ivory-sand/40 p-4 rounded-xl border border-palace-beige/30 text-center">
                  <span className="text-3xl font-bold text-peacock-teal">{memberData.totalStays}</span>
                  <p className="text-[10px] uppercase font-bold text-charcoal-ink/60 mt-1">Royal Visits</p>
                </div>
              </div>

              {/* Milestone Progress */}
              <div className="mt-6 pt-4 border-t border-palace-beige/30">
                <div className="flex justify-between text-xs text-charcoal-ink/75 mb-2 font-medium">
                  <span>Progress to Complimentary Stay Night</span>
                  <span className="text-royal-maroon font-bold">{memberData.points} / {memberData.nextMilestonePoints}</span>
                </div>
                <div className="w-full bg-palace-beige/50 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-antique-gold to-royal-maroon h-full rounded-full transition-all duration-700"
                    style={{ width: `${(memberData.points / memberData.nextMilestonePoints) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-charcoal-ink/60 mt-2 text-right">
                  Earn {memberData.nextMilestonePoints - memberData.points} more points to redeem a night in the Governor Suite.
                </p>
              </div>
            </div>

            {/* Concierge Butler Service Card */}
            <div className="bg-royal-maroon text-white rounded-3xl p-6 shadow-xl border border-antique-gold/25 relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none">
                <Users className="w-40 h-40" />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-antique-gold/20 p-2 rounded-xl">
                  <Users className="h-6 w-6 text-antique-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">Personal Palace Butler</h3>
                  <p className="text-xs text-antique-gold font-medium">Maharaja Club Privilege</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-serif font-bold text-antique-gold">{memberData.butler.name}</span>
                  <span className="bg-peacock-teal/40 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider">
                    {memberData.butler.status}
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  "Ashish ji, it is an honor to serve you. Please touch base below for any custom arrangements, pillow menus, or dining setups."
                </p>
              </div>

              <div className="space-y-3">
                <a 
                  href={`tel:${memberData.butler.contact}`} 
                  className="flex items-center justify-center space-x-2 w-full bg-antique-gold text-royal-maroon py-3 rounded-xl hover:bg-white hover:text-royal-maroon transition-all font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Private Desk</span>
                </a>
                <button className="flex items-center justify-center space-x-2 w-full bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all font-semibold text-xs uppercase tracking-wider border border-white/20">
                  <MessageSquare className="h-4 w-4 text-antique-gold" />
                  <span>Message via Concierge</span>
                </button>
              </div>
            </div>

          </div>

          {/* CENTER & RIGHT COLUMNS: Bookings, Activity, Offers */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Upcoming Palace Bookings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige/60">
              <h2 className="font-serif text-2xl font-bold text-royal-maroon mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-antique-gold" />
                  <span>Upcoming Royal Stays</span>
                </div>
                <span className="text-xs bg-peacock-teal/10 text-peacock-teal px-3 py-1 rounded-full border border-peacock-teal/20 font-bold">
                  {memberData.upcomingReservations.length} Active
                </span>
              </h2>

              <div className="space-y-4">
                {memberData.upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="relative p-5 bg-ivory-sand/40 hover:bg-ivory-sand/80 rounded-2xl border border-palace-beige/40 transition-all group flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          reservation.type === 'Stay' ? 'bg-royal-maroon/10 text-royal-maroon' : 'bg-antique-gold/10 text-antique-gold'
                        }`}>
                          {reservation.type}
                        </span>
                        <span className="text-emerald-600 flex items-center gap-1 text-xs font-bold">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {reservation.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-royal-maroon">{reservation.name}</h3>
                      <p className="text-xs text-charcoal-ink font-semibold flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-antique-gold" />
                        {reservation.date}
                      </p>
                      <p className="text-xs text-charcoal-ink/60">{reservation.detail}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {reservation.butlerAssigned && (
                        <div className="hidden md:flex items-center gap-2 bg-royal-maroon/5 border border-royal-maroon/10 px-3 py-1.5 rounded-xl">
                          <Crown className="h-3.5 w-3.5 text-antique-gold" />
                          <span className="text-[10px] font-bold text-royal-maroon uppercase">Butler Assigned</span>
                        </div>
                      )}
                      <button className="bg-royal-maroon hover:bg-antique-gold text-white hover:text-royal-maroon px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusive Palace Invitations */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Gift className="h-6 w-6 text-antique-gold" />
                <h2 className="font-serif text-2xl font-bold text-royal-maroon">Exclusive Maharaja Invitations</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exclusiveOffers.map((offer) => (
                  <div key={offer.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-palace-beige/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                    <div className="relative overflow-hidden h-36">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-royal-maroon text-white text-[10px] font-bold px-2 py-1 rounded border border-antique-gold/25 uppercase">
                        {offer.discount}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-base font-bold text-royal-maroon mb-1 group-hover:text-antique-gold transition-colors">
                          {offer.title}
                        </h3>
                        <p className="text-xs text-charcoal-ink/75 leading-relaxed mb-3">
                          {offer.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-palace-beige/30 flex items-center justify-between text-[10px]">
                        <span className="text-charcoal-ink/50 font-medium">Valid until {offer.validUntil}</span>
                        <button className="text-royal-maroon hover:text-antique-gold font-bold flex items-center gap-1 uppercase tracking-wider">
                          <span>Claim</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-palace-beige/60">
              <h2 className="font-serif text-xl font-bold text-royal-maroon mb-6 flex items-center gap-2">
                <Compass className="h-5.5 w-5.5 text-antique-gold" />
                <span>Loyalty Ledger History</span>
              </h2>
              <div className="space-y-3.5">
                {memberData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2.5 border-b border-palace-beige/30 last:border-b-0">
                    <div>
                      <p className="text-sm font-semibold text-charcoal-ink">{activity.activity}</p>
                      <p className="text-xs text-charcoal-ink/50">{activity.date}</p>
                    </div>
                    <span className="text-royal-maroon font-bold font-mono text-sm bg-royal-maroon/5 px-2.5 py-1 rounded-lg border border-royal-maroon/5">
                      {activity.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Member Tiers Reference - Styled under the profile */}
        <section className="mt-16 pt-12 border-t border-palace-beige/70">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-royal-maroon">Maharaja Club Tiers</h2>
            <p className="text-sm text-charcoal-ink/70 mt-1 max-w-lg mx-auto">
              Explore your lifetime progression path and the privileges unlocked at each station
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const isCurrentTier = tier.name === memberData.tier;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-3xl p-6 shadow-md border transition-all duration-300 relative ${
                    isCurrentTier 
                      ? 'border-2 border-antique-gold ring-4 ring-antique-gold/5 scale-105 md:-translate-y-2 shadow-xl' 
                      : 'border-palace-beige/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  {isCurrentTier && (
                    <span className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-antique-gold text-royal-maroon text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white">
                      Your Current Tier
                    </span>
                  )}
                  <div className={`w-12 h-12 ${tier.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-6 w-6 ${tier.color}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-royal-maroon text-center mb-1">{tier.name}</h3>
                  <p className="text-center text-xs text-charcoal-ink/60 mb-5 font-mono">{tier.points} points</p>
                  <ul className="space-y-2.5">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <Star className="h-3.5 w-3.5 text-antique-gold flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-charcoal-ink/90 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Loyalty;