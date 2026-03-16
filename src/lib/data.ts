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
  type?: "image" | "video";
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
    name: "Haircut",
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
      "Expert beard sculpting and shaping to define your look.",
    duration: "30 min",
    price: "100 MDL",
    featured: true,
  },
  {
    id: "cut-beard",
    name: "Haircut & Beard Combo",
    description:
      "The complete package — full haircut paired with beard trim and shape. Best value for the full look.",
    duration: "75 min",
    price: "300 MDL",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g6",
    src: "/gallery/photo6.jpg",
    alt: "Textured fringe with mid fade",
    width: 1027,
    height: 1280,
  },
  {
    id: "g12",
    src: "/gallery/signature-cut.mp4",
    alt: "Signature cut",
    width: 9,
    height: 16,
    type: "video",
  },
  {
    id: "g5",
    src: "/gallery/photo5.jpg",
    alt: "Textured crop with low drop fade",
    width: 857,
    height: 1280,
  },
  {
    id: "g2",
    src: "/gallery/photo8.jpg",
    alt: "Clean skin fade",
    width: 600,
    height: 900,
  },
  {
    id: "g7",
    src: "/gallery/photo7.jpg",
    alt: "Textured crop with drop fade",
    width: 827,
    height: 1280,
  },
   {
    id: "g1",
    src: "/gallery/video33.mp4",
    alt: "Barber at work",
    width: 9,
    height: 16,
    type: "video",
  },
   {
    id: "g4",
    src: "/gallery/video44.mp4",
    alt: "Barber at work",
    width: 9,
    height: 16,
    type: "video",
  },
  {
    id: "g8",
    src: "/gallery/photo4.jpg",
    alt: "Kids textured cut with undercut neckline",
    width: 844,
    height: 1280,
  },
  {
    id: "g11",
    src: "/gallery/barber-at-work.mp4",
    alt: "Barber at work",
    width: 9,
    height: 16,
    type: "video",
  },

  {
    id: "g13",
    src: "/gallery/precision-cut.mp4",
    alt: "Precision cut",
    width: 9,
    height: 16,
    type: "video",
  },
    {
    id: "g3",
    src: "/gallery/photo1.jpg",
    alt: "Scissors precision on a skin fade",
    width: 600,
    height: 700,
  },
  {
    id: "g14",
    src: "/gallery/fresh-fade.mp4",
    alt: "Fresh fade",
    width: 9,
    height: 16,
    type: "video",
  },
  {
    id: "g15",
    src: "/gallery/custom-styling.mp4",
    alt: "Custom Styling",
    width: 9,
    height: 16,
    type: "video",
  },
  {
    id: "g16",
    src: "/gallery/clean-finish.mp4",
    alt: "Clean finish",
    width: 9,
    height: 16,
    type: "video",
  },
  {
    id: "g17",
    src: "/gallery/high-fade.mp4",
    alt: "High Fade",
    width: 9,
    height: 16,
    type: "video",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Nikita Ceban",
    role: "Master Barber & Founder",
    bio: "With 15 years behind the chair, Nikita brings old-school craft and modern flair to every cut.",
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
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d679.8532016208417!2d28.833060269633815!3d47.032129912277604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAxJzU1LjciTiAyOMKwNTAnMDEuMyJF!5e0!3m2!1sen!2s!4v1773613307542!5m2!1sen!2s";

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
