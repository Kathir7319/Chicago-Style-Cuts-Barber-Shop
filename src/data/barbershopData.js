export const shopInfo = {
  name: "Chicago Style Cuts Barber Shop",
  shortName: "Chicago Style Cuts",
  tagline: "Sharp Cuts. Classic Craft. Cary's Trusted Neighborhood Barber Shop.",
  subheadline: "From precision skin fades and classic tapers to detailed beard grooming, our 11-chair shop delivers consistent, top-rated service seven days a week.",
  address: {
    street: "750 E Chatham St (Suite B)",
    city: "Cary",
    state: "NC",
    zip: "27511",
    full: "750 E Chatham St (Suite B), Cary, NC 27511",
    note: "Convenient free parking right out front",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.9620585223326!2d-78.76632482343808!3d35.79099897255152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf4805c879d71%3A0x6b1aaee8df78995a!2s750%20E%20Chatham%20St%20b%2C%20Cary%2C%20NC%2027511!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    directionsUrl: "https://maps.google.com/?q=750+E+Chatham+St+Suite+B,+Cary,+NC+27511"
  },
  phone: "(919) 377-2866",
  phoneRaw: "9193772866",
  email: "arafatzaed1@hotmail.com",
  recommendedDomain: "chicagostylecuts.com",
  stationsCount: 11,
  ratingGoogle: 4.6,
  reviewsCountGoogle: "1,034+",
  ratingYelp: 4.5,
  walkInsPolicy: "Walk-ins are always welcome across our 11 stations. Prefer a specific time or barber? Call (919) 377-2866.",
  hours: [
    { day: "Monday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Tuesday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Wednesday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Thursday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Friday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Saturday", open: "10:00 AM", close: "7:00 PM", openHour: 10, closeHour: 19 },
    { day: "Sunday", open: "10:00 AM", close: "5:00 PM", openHour: 10, closeHour: 17 }
  ],
  trustBadges: [
    { label: "4.6-Star Google Rating", detail: "1,030+ Local Reviews" },
    { label: "11 Barber Stations", detail: "Minimal Wait Times" },
    { label: "Walk-Ins & Appointments", detail: "Seven Days a Week" },
    { label: "Open 7 Days", detail: "Evenings & Weekends" }
  ]
};

export const servicesData = [
  {
    id: "mens-haircut",
    name: "Men’s Haircut",
    price: "$25",
    description: "Tailored scissor cut, taper, or skin fade finished with a clean neck lineup and style.",
    popular: true,
    features: [
      "Custom consultation for your head shape & style",
      "Precision scissor work, taper, or zero/skin fade",
      "Crisp hairline & neck razor/edger lineup",
      "Finished with premium styling product"
    ]
  },
  {
    id: "kids-haircut",
    name: "Kids’ Haircut",
    price: "$25",
    description: "Patient, clean, and stylish haircuts for young gentlemen of all ages.",
    popular: false,
    features: [
      "Patient, friendly barbers experienced with kids",
      "Modern fades, buzz cuts, or classic boys' styles",
      "Gentle neck clean-up",
      "Booster seats & family-welcoming atmosphere"
    ]
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Lineup",
    price: "$15 – $20",
    description: "Precision beard shaping, length balancing, and razor-sharp cheek and neck edging.",
    popular: true,
    features: [
      "Beard debulking & symmetry sculpt",
      "Sharp razor/trimmer cheek lines & neckline",
      "Mustache detailing & lip line clearance",
      "Beard oil or conditioning balm finish"
    ]
  },
  {
    id: "hair-color",
    name: "Hair Color",
    price: "$35",
    description: "Natural-looking gray blending or full color application for a refreshed look.",
    popular: false,
    features: [
      "Subtle gray blending or full coverage",
      "Natural undertones matching your hair shade",
      "Conditioning rinse & scalp wash",
      "Long-lasting, fade-resistant formula"
    ]
  }
];

export const barbersData = [
  {
    name: "Zayed",
    role: "Owner & Master Barber",
    experience: "15+ Years Experience",
    bio: "Known by longtime Cary regulars for precision fades, attention to detail, and welcoming hospitality. Zayed established Chicago Style Cuts to bring authentic big-city craft to the Triangle.",
    specialties: ["Precision Skin Fades", "Hot Towel Shaves", "Scissor Craft", "Beard Sculpting"],
    station: "Station 1",
    avatarBg: "from-amber-600 to-amber-900"
  },
  {
    name: "Samir",
    role: "Senior Barber",
    experience: "9+ Years Experience",
    bio: "A customer favorite with an eye for razor-sharp lineups and seamless skin blends. Samir excels at matching classic barbershop techniques with today's trending street cuts.",
    specialties: ["Low/Mid/High Fades", "Razor Lineups", "Taper Cuts", "Pompadours"],
    station: "Station 2",
    avatarBg: "from-blue-600 to-slate-900"
  },
  {
    name: "Zee",
    role: "Master Stylist & Barber",
    experience: "8+ Years Experience",
    bio: "Renowned for his precision beard shaping, hot towel detail, and friendly persona. Clients trust Zee for consistent symmetry and immaculate line work every visit.",
    specialties: ["Beard Sculpting", "Skin Fades", "Textured Crops", "Neckline Edging"],
    station: "Station 3",
    avatarBg: "from-emerald-700 to-gray-900"
  },
  {
    name: "Steven",
    role: "Classic Cut Specialist",
    experience: "10+ Years Experience",
    bio: "Master of both traditional scissor craft and modern fades. Steven takes extra time to understand exact customer preferences so you walk out feeling 100% confident.",
    specialties: ["Business Cuts", "Classic Scissor Work", "Tapers", "Natural Gray Blending"],
    station: "Station 4",
    avatarBg: "from-indigo-600 to-gray-900"
  },
  {
    name: "Amini",
    role: "Precision Barber",
    experience: "7+ Years Experience",
    bio: "Known for quick, clean, and patient service. Amini is exceptionally skilled with kids' haircuts and sharp geometric lineups that stay clean for weeks.",
    specialties: ["Kids Haircuts", "Clean Lineups", "Drop Fades", "Comb-Overs"],
    station: "Station 5",
    avatarBg: "from-cyan-700 to-slate-900"
  },
  {
    name: "Bulat",
    role: "Modern Trend Specialist",
    experience: "8+ Years Experience",
    bio: "Delivering crisp, modern styling for all hair textures. Bulat's speed and meticulous scissor-over-comb finish make his chair one of the most requested on the floor.",
    specialties: ["Textured Fades", "Scissor-over-comb", "Beard Balancing", "Hard Parts"],
    station: "Station 6",
    avatarBg: "from-rose-700 to-zinc-900"
  }
];

export const reviewsData = [
  {
    author: "Local Google Reviewer",
    role: "Verified Google Review",
    rating: 5,
    date: "Recent",
    tag: "Fades & Fast Service",
    text: "Hands down the best barbershop in Cary. With 11 chairs, I rarely wait long even as a walk-in, and the fade is always spotless."
  },
  {
    author: "Verified Customer",
    role: "Google Reviewer",
    rating: 5,
    date: "1 month ago",
    tag: "Hospitality & Value",
    text: "Zayed and his team treat everyone like family. Great prices, super clean shop, and they actually listen to how you want your hair cut."
  },
  {
    author: "Cary Parent",
    role: "Local Father & Longtime Client",
    rating: 5,
    date: "2 months ago",
    tag: "Kids Haircuts",
    text: "Been bringing my son here for years. Every barber is patient, skilled, and consistent every single visit."
  },
  {
    author: "Marcus T.",
    role: "Google 5-Star Review",
    rating: 5,
    date: "3 weeks ago",
    tag: "Beard Trim & Lineup",
    text: "Stopped in on my lunch break without an appointment. Was seated in less than 5 minutes. Best beard lineup and skin taper I've had in North Carolina, hands down."
  },
  {
    author: "David R.",
    role: "Local Guide (140+ reviews)",
    rating: 5,
    date: "Recent",
    tag: "Consistency & Craft",
    text: "Consistent quality is hard to find, but Chicago Style Cuts nails it every single time. $25 for a master cut in Cary is unmatched value nowadays."
  },
  {
    author: "Ahmed K.",
    role: "Google Reviewer",
    rating: 5,
    date: "2 months ago",
    tag: "11 Chairs & Zero Wait",
    text: "Great atmosphere, respectful crew, and they keep the shop immaculate. Love that they're open 7 days a week including Sunday afternoon!"
  }
];

export const faqsData = [
  {
    q: "Do I need an appointment, or are walk-ins welcome?",
    a: "Walk-ins are warmly welcome 7 days a week! With 11 chairs staffed by experienced barbers, our wait times are minimal. If you have a preferred barber or tight schedule, feel free to call ahead at (919) 377-2866."
  },
  {
    q: "What is your pricing for haircuts and beard grooming?",
    a: "Men's haircuts and Kids' haircuts are $25. Beard trims and razor lineups range from $15 to $20. Hair color and gray blending is $35. Combo cuts and beards can be requested directly in the chair."
  },
  {
    q: "Where are you located and is there parking?",
    a: "We are at 750 E Chatham St (Suite B), Cary, NC 27511. There is plenty of free, convenient storefront parking right outside our front door."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, all major Credit/Debit Cards, and popular digital contactless payments for your convenience."
  },
  {
    q: "Do you cut all hair types and textures?",
    a: "Yes! Every barber on our team has years of hands-on experience with all hair textures, curl patterns, straight hair, thick hair, and classic or trendy styles."
  }
];
