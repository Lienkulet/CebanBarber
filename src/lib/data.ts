export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "haircut",
    name: "Signature Haircut",
    description:
      "A precision cut tailored to your face shape and style. Includes consultation, shampoo, and finish.",
    duration: "45 min",
    price: "200 MDL",
    featured: true,
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    description:
      "Expert beard sculpting and shaping to define your look. Includes hot towel and beard oil treatment.",
    duration: "30 min",
    price: "150 MDL",
    featured: true,
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    description:
      "Classic straight-razor shave with hot towel prep, premium shaving cream, and moisturizing aftercare.",
    duration: "45 min",
    price: "250 MDL",
    featured: true,
  },
  {
    id: "kids-cut",
    name: "Kids Cut",
    description:
      "A gentle, fun haircut experience for boys under 12. Patient barbers who make kids feel at ease.",
    duration: "30 min",
    price: "120 MDL",
  },
  {
    id: "cut-beard",
    name: "Haircut & Beard Combo",
    description:
      "The complete package — full haircut paired with beard trim and shape. Best value for the full look.",
    duration: "75 min",
    price: "300 MDL",
  },
  {
    id: "fade",
    name: "Skin Fade",
    description:
      "A tight, clean skin fade blended seamlessly into your desired length on top.",
    duration: "45 min",
    price: "220 MDL",
  },
  {
    id: "color",
    name: "Hair Color / Gray Blending",
    description:
      "Natural-looking gray coverage or full color treatment using premium products.",
    duration: "60 min",
    price: "350 MDL",
  },
  {
    id: "scalp",
    name: "Scalp Treatment",
    description:
      "Invigorating scalp massage with deep-conditioning treatment to promote healthy hair growth.",
    duration: "30 min",
    price: "180 MDL",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Classic gentleman's haircut",
    width: 600,
    height: 800,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Skin fade with texture on top",
    width: 600,
    height: 900,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Sharp beard trim and shape",
    width: 600,
    height: 700,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&q=80",
    alt: "Hot towel shave in progress",
    width: 600,
    height: 800,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Taper fade haircut",
    width: 600,
    height: 750,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1622286342621-4bd5a5359a6a?w=600&q=80",
    alt: "Barbershop interior ambiance",
    width: 600,
    height: 900,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80",
    alt: "Pompadour style haircut",
    width: 600,
    height: 800,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1520338801623-dadb7f8e3d7d?w=600&q=80",
    alt: "Modern undercut style",
    width: 600,
    height: 700,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
    alt: "Textured crop haircut",
    width: 600,
    height: 850,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Marcus Ceban",
    role: "Master Barber & Founder",
    bio: "With 15 years behind the chair, Marcus brings old-school craft and modern flair to every cut.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "t2",
    name: "Andre Williams",
    role: "Senior Barber",
    bio: "Andre specializes in skin fades and beard sculpting, with a loyal clientele built over a decade.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: "t3",
    name: "Leo Santos",
    role: "Barber",
    bio: "Leo's precision and attention to detail make him a go-to for sharp fades and creative styles.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.4211280134646!2d28.83378799999999!3d47.0319666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d002a8e5177%3A0xeac744f996984144!2sCeban%20barber!5e0!3m2!1sro!2s!4v1773492483422!5m2!1sro!2s";

export const MAPS_LINK = "https://maps.app.goo.gl/HPYfNBHdDyXVtQed7";
export const BOOKING_URL =
  "https://n1387778.alteg.io/company/1322271/personal/select-master?o=";
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/cebanbarber?igsh=ZWsxM3d6NW1nd20=",
  tiktok: "https://www.tiktok.com/@cebanthebarber",
};

export const businessInfo = {
  name: "CebanBarber",
  tagline: "Precision Cuts. Timeless Style.",
  address: "Str. Ion Doncev 2, Chișinău, Moldova",
  phone: "+373 691 50 348",
  email: "hello@cebanbarber.com",
  hours: [
    { day: "Monday", hours: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
    { day: "Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
  ],
};
