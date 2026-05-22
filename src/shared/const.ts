export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Car Rental Data and Configuration
export const WHATSAPP_NUMBER = "0561577142";
export const PHONE_NUMBER = "0561577142";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/oUKTXtt1YJyf4DJ49";

export interface Car {
  id: string;
  name: string;
  category: "economy" | "sedan" | "suv" | "sport";
  pricePerDay: number;
  image: string;
}

export const CARS: Car[] = [
  // Economy
  {
    id: "nissan-sentra",
    name: "Nissan Sentra",
    category: "economy",
    pricePerDay: 80,
    image: "/images/nissan_sentra_c0ac0ef1.png",
  },
  {
    id: "kia-rio",
    name: "Kia Rio",
    category: "economy",
    pricePerDay: 75,
    image: "/images/kia_rio_46e28dcc.png",
  },
  {
    id: "kia-soul",
    name: "Kia Soul",
    category: "economy",
    pricePerDay: 85,
    image: "/images/kia_soul_2b49d2c7.png",
  },

  // Sedan
  {
    id: "nissan-altima",
    name: "Nissan Altima",
    category: "sedan",
    pricePerDay: 120,
    image: "/images/nissan_altima_4c17a7eb.png",
  },
  {
    id: "chrysler-300",
    name: "Chrysler 300",
    category: "sedan",
    pricePerDay: 150,
    image: "/images/chrysler_300_a3784031.png",
  },

  // SUV
  {
    id: "kia-telluride",
    name: "Kia Telluride EX V6",
    category: "suv",
    pricePerDay: 180,
    image: "/images/kia_telluride_cd885965.png",
  },
  {
    id: "chevrolet-trax",
    name: "Chevrolet Trax",
    category: "suv",
    pricePerDay: 140,
    image: "/images/chevrolet_trax_42821ed9.png",
  },

  // Sport
  {
    id: "red-mustang",
    name: "Red Mustang",
    category: "sport",
    pricePerDay: 250,
    image: "/images/red_mustang_034a9d34.png",
  },
  {
    id: "black-mustang",
    name: "Black Mustang",
    category: "sport",
    pricePerDay: 250,
    image: "/images/black_mustang_a477522d.png",
  },
];

export const CATEGORY_CONFIG = {
  economy: {
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    label: "Economy",
  },
  sedan: {
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    label: "Sedan",
  },
  suv: {
    color: "from-green-500 to-green-600",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    label: "SUV",
  },
  sport: {
    color: "from-red-500 to-orange-600",
    textColor: "text-red-600",
    bgColor: "bg-red-50",
    label: "Sport",
  },
};

export const REVIEWS = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    rating: 5,
    comment: "Excellent service! The car was clean and well-maintained. Highly recommended!",
    date: "2024-04-15",
  },
  {
    id: 2,
    name: "Fatima Al Naqbi",
    rating: 5,
    comment: "Very affordable prices and friendly staff. Will definitely rent again!",
    date: "2024-04-10",
  },
  {
    id: 3,
    name: "Mohammed Al Mazrouei",
    rating: 4,
    comment: "Great experience. Quick booking process and reliable vehicles.",
    date: "2024-04-05",
  },
  {
    id: 4,
    name: "Layla Al Ketbi",
    rating: 5,
    comment: "Best car rental in Ajman! Professional service and competitive rates.",
    date: "2024-03-28",
  },
  {
    id: 5,
    name: "Hassan Al Suwaidi",
    rating: 5,
    comment: "Smooth rental experience from start to finish. Highly satisfied!",
    date: "2024-03-20",
  },
];
