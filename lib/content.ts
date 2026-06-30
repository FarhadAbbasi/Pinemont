// Placeholder copy. CLEARLY MARKED so it's easy to swap with final brand copy.
// Imagery comes from /lib/assets.ts. None of this content is final.
import { Wifi, Car, Coffee, Utensils, Wind, BellRing, Mountain, Sparkles, ShieldCheck, Plug } from "lucide-react";

export const BRAND = {
  name: "Pinemont",
  tagline: "Where Every Detail Meets Luxury",
  scriptAccent: "Welcome to",
  address: "Pinemont Drive, Mountain Ridge",
  phone: "+00 000 000 0000",
  email: "stay@pinemont.example",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Gallery", href: "#gallery" },
  { label: "Decor", href: "#decor" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#location" },
] as const;

export const AMENITIES = [
  { icon: Wifi,        title: "High-Speed Wi-Fi",       body: "Seamless connectivity everywhere." },
  { icon: Coffee,      title: "Complimentary Breakfast", body: "Designed for unmatched relaxation." },
  { icon: Car,         title: "Secure Parking",         body: "Ample, safe parking facilities." },
  { icon: Sparkles,    title: "Daily Housekeeping",     body: "Ensures spotless during your stay." },
  { icon: Wind,        title: "Climate Control",        body: "Heated rooms in winter, cool in summer." },
  { icon: BellRing,    title: "24/7 Room Service",      body: "Personalized assistance anytime." },
  { icon: Mountain,    title: "Mountain Views",         body: "Unobstructed peaks from every floor." },
  { icon: Utensils,    title: "Tea Service",            body: "Relax with soothing tea service." },
  { icon: Plug,        title: "Backup Power",           body: "Uninterrupted energy assurance." },
  { icon: ShieldCheck, title: "Safety First",           body: "Safety and privacy guaranteed." },
] as const;

export type Room = {
  name: string;
  desc: string;
  price: string;
  featured?: boolean;
};

export const ROOMS: readonly Room[] = [
  { name: "Standard Room",       desc: "Cozy retreat designed for solo travellers and couples.",                price: "PKR 10,500" },
  { name: "Deluxe Room",         desc: "Spacious deluxe room with stylish interior and relaxing environment.", price: "PKR 14,500" },
  { name: "Deluxe Plus",         desc: "Upgraded deluxe with private balcony and valley view.",                price: "PKR 18,500" },
  { name: "Executive Room",      desc: "Designed for unmatched relaxation and remote work comfort.",           price: "PKR 22,500" },
  { name: "Family Suite",        desc: "Two-room suite ideal for families up to six guests.",                  price: "PKR 28,500" },
  { name: "Presidential Suite",  desc: "Top-floor flagship with panoramic mountain views.",                    price: "PKR 33,000", featured: true },
];

export const CUISINES = [
  { name: "Local Kitchen",  body: "Spicy biryani, creamy curries, and hot tandoori — real desi taste in every bite." },
  { name: "Italian Kitchen",body: "Homemade pasta, crispy pizzas, and rich sauces — pure Italian love on your plate." },
  { name: "Asian Kitchen",  body: "Sushi, stir-fries, and Thai curries — all your Asian favorites under one roof." },
  { name: "Continental",    body: "Hearty breakfasts, fresh salads, and grills with mountain-air appetites in mind." },
] as const;

export const DECOR_PACKAGES = [
  { name: "Anniversary Room Decoration", body: "Romantic candles, rose petals, and bespoke setup for two." },
  { name: "Birthday Room Decoration",    body: "Balloons, banners, and a private cake reveal in your suite." },
  { name: "Valentine's Decoration",      body: "Couples-only suite styling with a candle-lit dinner option." },
] as const;

export const TESTIMONIALS = [
  { name: "Sara A.",     stars: 5, body: "Clean rooms, friendly staff, and great value for money. Will definitely return." },
  { name: "Daniel R.",   stars: 5, body: "Great location, clean rooms, parking and amazing staff. Breakfast was the highlight." },
  { name: "Aisha K.",    stars: 5, body: "Mountain views from our balcony made the trip unforgettable. Room service was a 10/10." },
  { name: "Owen M.",     stars: 4, body: "Excellent stay overall. The candlelight dinner setup they arranged was a perfect surprise." },
  { name: "Hira F.",     stars: 5, body: "Five-star comfort with genuinely warm hospitality — rare to find both." },
  { name: "Liam T.",     stars: 5, body: "Quiet, clean, and incredibly relaxing. Already planning the next trip." },
] as const;

export const FAQS = [
  { q: "What are check-in and check-out times?", a: "Check-in starts at 2:00 PM and check-out is by 12:00 PM. Early check-in and late check-out are subject to availability." },
  { q: "Does Pinemont offer free breakfast?",    a: "Yes, complimentary breakfast is included with every room booking." },
  { q: "Is Wi-Fi available throughout the hotel?", a: "Yes, 24/7 high-speed Wi-Fi covers all rooms, the lobby, restaurant, and outdoor terrace." },
  { q: "Is room service available 24/7?",        a: "Yes — our kitchen and front desk are staffed around the clock." },
  { q: "What payment methods do you accept?",    a: "Cash, bank transfers, and debit/credit cards (Visa, Mastercard)." },
  { q: "What is your cancellation policy?",      a: "Free cancellation up to 48 hours before check-in on standard bookings. Festive-season bookings may carry different terms." },
  { q: "Do you have parking?",                   a: "Yes, complimentary on-site parking with valet assistance is available for all guests." },
  { q: "Can I request early check-in or late check-out?", a: "Yes — please notify us at the time of booking and we will confirm based on the day's occupancy." },
] as const;

export const SEO_PARAGRAPHS = [
  "Pinemont is a placeholder name for an upcoming mountain-retreat property. This block is reserved for the long-form SEO paragraph that summarises the location, the room types, and the on-site amenities for search engines. Replace this copy with the final marketing brief once it is signed off.",
  "This second paragraph should describe what makes the property distinctive — the dining concept, the family-friendly suites, the seasonal experiences, and the proximity to key landmarks. Keep one or two internal links here pointing to the rooms category and contact pages.",
] as const;
