// ─── Form (Formspree) ────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → sign up free
// 2. Create a new form → copy the ID (e.g. "xpwzabcd")
// 3. Replace the placeholder below with your real ID
export const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // ← replace this

// ─── Business Info ───────────────────────────────────────────────────────────
// UPDATE THESE before going live
export const BUSINESS = {
  name:        "Daniel Saldivar Landscaping",
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
    // Man mowing a residential lawn — replace with real job photo
    image:       "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "landscaping-design",
    icon:        "Leaf",
    title:       "Landscaping Design",
    description:
      "Custom landscape plans that blend beauty with function — from native plant beds to full outdoor living transformations.",
    features:    ["Custom design plans", "Native plant selection", "Irrigation planning", "Hardscape integration"],
    // Garden path with stone pavers and lush plantings
    image:       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "maintenance",
    icon:        "Wrench",
    title:       "Seasonal Maintenance",
    description:
      "Year-round care packages that handle everything — mulching, pruning, clean-ups, and storm prep so you never have to lift a finger.",
    features:    ["Spring & fall clean-ups", "Mulch installation", "Tree & shrub pruning", "Leaf removal"],
    // Pruning / garden maintenance scene
    image:       "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id:          "irrigation",
    icon:        "Droplets",
    title:       "Irrigation & Drainage",
    description:
      "Smart irrigation systems and drainage solutions designed to save water and protect your investment in every season.",
    features:    ["Sprinkler installation", "Drip systems", "French drain solutions", "Smart controller upgrades"],
    // Sprinkler system spraying grass
    image:       "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
  },
] as const;

// ─── Gallery ─────────────────────────────────────────────────────────────────
// All photos: free Unsplash images — replace with real project photos for best results
export const GALLERY_IMAGES = [
  {
    id: 1,
    // Wide manicured backyard — hero gallery slot
    src:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    alt:   "Manicured backyard lawn — San Antonio residential project",
    label: "Lawn Renovation",
    span:  "col-span-2 row-span-2",
  },
  {
    id: 2,
    // Lush garden with stone pathway and plants
    src:   "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    alt:   "Stone pathway through native plant garden",
    label: "Garden Design",
    span:  "",
  },
  {
    id: 3,
    // Stone paver patio / hardscape outdoor living
    src:   "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80",
    alt:   "Custom stone paver patio with outdoor seating",
    label: "Hardscape & Patio",
    span:  "",
  },
  {
    id: 4,
    // Sprinkler system in action on green lawn
    src:   "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    alt:   "Irrigation sprinkler system installation",
    label: "Irrigation System",
    span:  "",
  },
  {
    id: 5,
    // Expansive green park-like backyard
    src:   "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
    alt:   "Full backyard transformation — before and after",
    label: "Backyard Transformation",
    span:  "col-span-2",
  },
  {
    id: 6,
    // Colorful Texas-style flower beds and plantings
    src:   "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=600&q=80",
    alt:   "Seasonal flower beds and colorful plantings",
    label: "Seasonal Planting",
    span:  "",
  },
  {
    id: 7,
    // Tree canopy / mature tree landscaping
    src:   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    alt:   "Mature tree trimming and canopy management",
    label: "Tree Service",
    span:  "",
  },
  {
    id: 8,
    // Outdoor living space — fire pit / entertaining area
    src:   "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
    alt:   "Outdoor living space with fire pit and stone seating",
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
