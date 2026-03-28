// ─── Business Info ───────────────────────────────────────────────────────────
// UPDATE THESE before going live
export const BUSINESS = {
  name:        "Daniel Saldiver Landscaping",
  tagline:     "Transforming San Antonio Yards Into Living Works of Art",
  phone:       "(210) 555-0180",           // ← Replace with real number
  phoneHref:   "tel:+12105550180",         // ← Replace with real number
  email:       "contact@daniellandscaping.com",
  address:     "San Antonio, Texas",
  serviceArea: "Serving Greater San Antonio & surrounding areas",
  license:     "Licensed & Insured",
  years:       "10+",
  projects:    "500+",
  rating:      "5-Star",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services",     href: "#services"     },
  { label: "Gallery",      href: "#gallery"      },
  { label: "About",        href: "#about"        },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact"      },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:          "lawn-care",
    icon:        "Scissors",
    title:       "Lawn Care & Mowing",
    description:
      "Precision mowing, edging, and seasonal treatments that keep your lawn thick, green, and weed-free all year long.",
    features:    ["Weekly & bi-weekly mowing", "Edging & trimming", "Fertilization programs", "Weed control"],
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "landscaping-design",
    icon:        "Leaf",
    title:       "Landscaping Design",
    description:
      "Custom landscape plans that blend beauty with function — from native plant beds to full outdoor living transformations.",
    features:    ["Custom design plans", "Native plant selection", "Irrigation planning", "Hardscape integration"],
    image:       "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "maintenance",
    icon:        "Wrench",
    title:       "Seasonal Maintenance",
    description:
      "Year-round care packages that handle everything — mulching, pruning, clean-ups, and storm prep so you never have to lift a finger.",
    features:    ["Spring & fall clean-ups", "Mulch installation", "Tree & shrub pruning", "Leaf removal"],
    image:       "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "irrigation",
    icon:        "Droplets",
    title:       "Irrigation & Drainage",
    description:
      "Smart irrigation systems and drainage solutions designed to save water and protect your investment in every season.",
    features:    ["Sprinkler installation", "Drip systems", "French drain solutions", "Smart controller upgrades"],
    image:       "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=800&q=80",
  },
] as const;

// ─── Gallery ─────────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  {
    id: 1,
    src:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    alt:   "Lush green lawn with crisp edging",
    label: "Lawn Renovation",
    span:  "col-span-2 row-span-2",
  },
  {
    id: 2,
    src:   "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    alt:   "Beautiful garden pathway with native plants",
    label: "Garden Design",
    span:  "",
  },
  {
    id: 3,
    src:   "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=600&q=80",
    alt:   "Modern hardscape patio with stone pavers",
    label: "Hardscape & Patio",
    span:  "",
  },
  {
    id: 4,
    src:   "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=600&q=80",
    alt:   "Irrigation system installation",
    label: "Irrigation System",
    span:  "",
  },
  {
    id: 5,
    src:   "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
    alt:   "Expansive manicured backyard",
    label: "Backyard Transformation",
    span:  "col-span-2",
  },
  {
    id: 6,
    src:   "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80",
    alt:   "Vibrant flower bed with seasonal colors",
    label: "Seasonal Planting",
    span:  "",
  },
  {
    id: 7,
    src:   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    alt:   "Tree canopy and natural landscaping",
    label: "Tree Service",
    span:  "",
  },
  {
    id: 8,
    src:   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    alt:   "Outdoor living space with stone fire pit",
    label: "Outdoor Living",
    span:  "",
  },
] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id:       1,
    name:     "Maria G.",
    location: "Alamo Heights, TX",
    rating:   5,
    text:     "Daniel and his crew completely transformed my backyard. What was an overgrown mess is now the outdoor oasis I always dreamed of. Professional, on-time, and the quality shows in every detail.",
    avatar:   "MG",
  },
  {
    id:       2,
    name:     "Robert T.",
    location: "Stone Oak, TX",
    rating:   5,
    text:     "Best landscaping company in San Antonio, period. We've been using Daniel for weekly lawn care for 3 years. Never a missed appointment and the yard looks incredible every single week.",
    avatar:   "RT",
  },
  {
    id:       3,
    name:     "Jennifer L.",
    location: "Helotes, TX",
    rating:   5,
    text:     "The irrigation system Daniel installed cut my water bill by 30%. His crew is knowledgeable, courteous, and left the site spotless. Already referred him to three neighbors.",
    avatar:   "JL",
  },
  {
    id:       4,
    name:     "Carlos M.",
    location: "Boerne, TX",
    rating:   5,
    text:     "We hired Daniel to redesign our front yard curb appeal before listing our home. Real estate agent said it added $15K to our asking price. Worth every penny and more.",
    avatar:   "CM",
  },
  {
    id:       5,
    name:     "Susan W.",
    location: "Shavano Park, TX",
    rating:   5,
    text:     "Impeccable work from consultation to final clean-up. Daniel took the time to understand our vision, suggested smart upgrades within budget, and delivered beyond expectations.",
    avatar:   "SW",
  },
  {
    id:       6,
    name:     "David R.",
    location: "Leon Valley, TX",
    rating:   5,
    text:     "Had Daniel's team do a full spring clean-up and new mulch install. The transformation was immediate. My neighbors keep asking me who does my lawn. Highly recommend.",
    avatar:   "DR",
  },
] as const;

// ─── Trust Signals ────────────────────────────────────────────────────────────
export const TRUST_SIGNALS = [
  { label: "Years in Business", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Customer Rating", value: "5 ★" },
  { label: "Free Estimates", value: "Always" },
] as const;
