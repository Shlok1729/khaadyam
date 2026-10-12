export interface ProductVariant {
  id: string;
  weight: string; // "100 g", "250 g", "500 g"
  weightGrams: number;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  kannadaTitle: string;
  familyId: string;
  tagline: string;
  ammaNote: string;
  goesWith: string[];
  variants: ProductVariant[];
  ingredients: string;
  accentColor: string;
  inStock: boolean;
  featured?: boolean;
}

export interface FoodFamily {
  id: string;
  slug: string;
  name: string;
  kannadaName: string;
  accentColor: string;
  description: string;
  kannadaDescription: string;
}

export interface MealPlate {
  id: string;
  slug: string;
  title: string;
  kannadaTitle: string;
  description: string;
  kannadaDescription: string;
  price: number;
  colors: [string, string, string];
  includedProductIds: string[];
  suggestedAddonId: string;
}

export interface SubscriptionBox {
  id: string;
  title: string;
  kannadaTitle: string;
  description: string;
  monthlyPrice: number;
  itemsCount: number;
  itemsSummary: string;
  accentColor: string;
}

export interface CustomerMemory {
  id: string;
  quote: string;
  kannadaQuote?: string;
  author: string;
  city: string;
  relation: string;
}

export const FOOD_FAMILIES: FoodFamily[] = [
  {
    id: "chutney-pudi",
    slug: "chutney-pudi",
    name: "Chutney Pudi",
    kannadaName: "ಚಟ್ನಿ ಪುಡಿ",
    accentColor: "#C99436",
    description: "Dry roasted seed and lentil powders for idli, dosa, and hot steamed rice with ghee.",
    kannadaDescription: "ಇಡ್ಲಿ, ದೋಸೆ ಮತ್ತು ಬಿಸಿ ಅನ್ನಕ್ಕೆ ಸವಿಯುವ ಪರಿಮಳದ ಪುಡಿಗಳು.",
  },
  {
    id: "chutney-gojju",
    slug: "chutney-gojju",
    name: "Chutney & Gojju",
    kannadaName: "ಚಟ್ನಿ ಮತ್ತು ಗೊಜ್ಜು",
    accentColor: "#506D41",
    description: "Slow-simmered tangy, sweet, and spicy preserves made with tamarind, jaggery, and native greens.",
    kannadaDescription: "ಹುಳಿ, ಸಿಹಿ, ಖಾರದ ಸಾಂಪ್ರದಾಯಿಕ ಗೊಜ್ಜುಗಳು.",
  },
  {
    id: "uppinakayi",
    slug: "uppinakayi",
    name: "Uppinakayi",
    kannadaName: "ಉಪ್ಪಿನಕಾಯಿ",
    accentColor: "#B45431",
    description: "Cold-pressed gingelly oil pickles matured in earthen Bharanis using heritage family brine.",
    kannadaDescription: "ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ಮಾಗಿಸಿದ ಸಾಂಪ್ರದಾಯಿಕ ಉಪ್ಪಿನಕಾಯಿ.",
  },
  {
    id: "bath-pudi",
    slug: "bath-pudi-masala",
    name: "Bath Pudi & Masala",
    kannadaName: "ಭಾತ್ ಪುಡಿ ಮತ್ತು ಮಸಾಲಾ",
    accentColor: "#764D30",
    description: "Hand-pounded regional spices for authentic Davangere Benne Dosa, Bisi Bele Bath, and Saaru.",
    kannadaDescription: "ಕೈಕುಟ್ಟಿದ ಅಸಲಿ ಮಸಾಲೆ ಮತ್ತು ಪರಿಮಳದ ಭಾತ್ ಪುಡಿಗಳು.",
  },
  {
    id: "sandige-happala",
    slug: "sandige-happala",
    name: "Sandige & Happala",
    kannadaName: "ಸಂಡಿಗೆ ಮತ್ತು ಹಪ್ಪಳ",
    accentColor: "#C3B59F",
    description: "Sun-dried ash gourd, rice dough, and sago crisps made traditionally on summer terraces.",
    kannadaDescription: "ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಗರಿಗರಿ ಸಂಡಿಗೆ, ಹಪ್ಪಳಗಳು.",
  },
  {
    id: "kurukalu",
    slug: "kurukalu",
    name: "Kurukalu",
    kannadaName: "ಕುರುಕಲು",
    accentColor: "#302A25",
    description: "Crisp, stone-ground savory snacks like Nippattu, Kodbale, and roasted spiced grains.",
    kannadaDescription: "ಸಂಜೆಯ ಚಹಾಗೆ ಜೊತೆಯಾಗುವ ಗರಿಗರಿ ತಿಂಡಿಗಳು.",
  },
  {
    id: "sihi",
    slug: "sihi",
    name: "Sihi",
    kannadaName: "ಸಿಹಿ",
    accentColor: "#2F3F6F",
    description: "Festive sweets, stone-ground laddu mixes, and pure organic jaggery payasa bases.",
    kannadaDescription: "ಹಬ್ಬದ ದಿನಗಳ ಸವಿಯಾದ ಶುದ್ಧ ಸಿಹಿ ತಿನಿಸುಗಳು.",
  },
  {
    id: "malts-health",
    slug: "malts-health-mixes",
    name: "Malts & Health Mixes",
    kannadaName: "ಪೋಷಣೆ ಮತ್ತು ಮಾಲ್ಟ್",
    accentColor: "#663F52",
    description: "Sprouted finger millet (Ragi), whole pulses, and nuts roasted slowly for daily nourishment.",
    kannadaDescription: "ಮೊಳಕೆ ಕಟ್ಟಿದ ರಾಗಿ ಮತ್ತು ಧಾನ್ಯಗಳ ಶುದ್ಧ ಪೌಷ್ಟಿಕ ಆಹಾರ.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "gurellu-pudi",
    slug: "gurellu-chutney-pudi",
    title: "Gurellu Chutney Pudi",
    kannadaTitle: "ಗುರೆಳ್ಳು ಚಟ್ನಿ ಪುಡಿ",
    familyId: "chutney-pudi",
    tagline: "Roasted Niger seed, Byadgi chilli & garlic",
    ammaNote:
      "ಗುರೆಳ್ಳನ್ನು ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಪರಿಮಳ ಬರುವವರೆಗೆ ಹುರಿದು, ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿ ಜೊತೆ ಕುಟ್ಟಿದ್ದು. ಬಿಸಿ ಅನ್ನಕ್ಕೆ ತುಪ್ಪ ಬೆರೆಸಿ ತಿಂದರೆ ಬೇರೇನೂ ಬೇಡ.",
    goesWith: ["Hot steamed rice & cow ghee", "Jowar rotti", "Curd rice"],
    variants: [
      { id: "gur-100", weight: "100 g", weightGrams: 100, price: 110 },
      { id: "gur-250", weight: "250 g", weightGrams: 250, price: 240, originalPrice: 275 },
      { id: "gur-500", weight: "500 g", weightGrams: 500, price: 450, originalPrice: 550 },
    ],
    ingredients: "Niger seeds (Gurellu), Byadgi dry chillies, Garlic, Cumin, Curry leaves, Sea salt.",
    accentColor: "#C99436",
    inStock: true,
    featured: true,
  },
  {
    id: "shenga-pudi",
    slug: "shenga-chutney-pudi",
    title: "Shenga Chutney Pudi",
    kannadaTitle: "ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
    familyId: "chutney-pudi",
    tagline: "Golden groundnut, crisp curry leaf & hing",
    ammaNote:
      "ದಾವಣಗೆರೆಯ ನಾಟಿ ಕಡಲೆಕಾಯಿ. ಸಿಪ್ಪೆ ತೆಗೆದು ಹದವಾಗಿ ಹುರಿದು ತಯಾರಿಸಿದ ಪುಡಿ. ಇಡ್ಲಿ, ದೋಸೆಗೆ ಎಣ್ಣೆ ಅಥವಾ ಮೊಸರು ಬೆರೆಸಿ ನೆಂಚಿಕೊಳ್ಳಿ.",
    goesWith: ["Davangere Benne Dosa", "Thalipeeth", "Hot Paddu"],
    variants: [
      { id: "she-100", weight: "100 g", weightGrams: 100, price: 95 },
      { id: "she-250", weight: "250 g", weightGrams: 250, price: 210, originalPrice: 235 },
      { id: "she-500", weight: "500 g", weightGrams: 500, price: 390, originalPrice: 470 },
    ],
    ingredients: "Native Groundnuts (Shenga), Byadgi chillies, Tamarind, Jaggery, Asafoetida (Hing), Salt.",
    accentColor: "#C99436",
    inStock: true,
    featured: true,
  },
  {
    id: "agase-pudi",
    slug: "agase-beeja-pudi",
    title: "Agase Beeja Chutney Pudi",
    kannadaTitle: "ಅಗಸೆ ಬೀಜದ ಚಟ್ನಿ ಪುಡಿ",
    familyId: "chutney-pudi",
    tagline: "Nutrient-dense roasted flaxseeds & dry garlic",
    ammaNote:
      "ಆರೋಗ್ಯಕ್ಕೆ ಅಗಸೆ ಬೀಜ ಅತಿ ಶ್ರೇಷ್ಠ. ಪ್ರತಿದಿನ ಊಟದ ಮೊದಲ ತುತ್ತಿಗೆ ಒಂದು ಚಮಚ ತುಪ್ಪದೊಂದಿಗೆ ಸವಿಯಿರಿ.",
    goesWith: ["Morning Rice porridge", "Chapati with ghee", "Ragi Rotti"],
    variants: [
      { id: "aga-100", weight: "100 g", weightGrams: 100, price: 120 },
      { id: "aga-250", weight: "250 g", weightGrams: 250, price: 260 },
      { id: "aga-500", weight: "500 g", weightGrams: 500, price: 490 },
    ],
    ingredients: "Flaxseeds (Agase), Dry red chillies, Garlic cloves, Cumin, Curry leaves, Rock salt.",
    accentColor: "#C99436",
    inStock: true,
  },
  {
    id: "mavina-gojju",
    slug: "mavinakayi-menasinakai-gojju",
    title: "Mavinakayi Gojju",
    kannadaTitle: "ಮಾವಿನಕಾಯಿ ಮೆಣಸಿನಕಾಯಿ ಗೊಜ್ಜು",
    familyId: "chutney-gojju",
    tagline: "Sour green mango, whole mustard & organic jaggery",
    ammaNote:
      "ಮಾವಿನಕಾಯಿಯ ಹುಳಿ, ಬೆಲ್ಲದ ಸಿಹಿ ಮತ್ತು ಮೆಣಸಿನಕಾಯಿಯ ಖಾರ ಸಮತೋಲನವಾಗಿ ಸೇರಿದಾಗ ನಾಲಿಗೆಗೆ ಹಬ್ಬ.",
    goesWith: ["Curd rice", "Akki Rotti", "Hot poori"],
    variants: [
      { id: "mvg-100", weight: "100 g", weightGrams: 100, price: 130 },
      { id: "mvg-250", weight: "250 g", weightGrams: 250, price: 285 },
      { id: "mvg-500", weight: "500 g", weightGrams: 500, price: 530 },
    ],
    ingredients: "Raw Country Mango, Organic Jaggery, Green chillies, Mustard seeds, Fenugreek, Sesame oil.",
    accentColor: "#506D41",
    inStock: true,
    featured: true,
  },
  {
    id: "amtekai-uppinakayi",
    slug: "kadu-amtekayi-uppinakayi",
    title: "Kaadu Amtekayi Uppinakayi",
    kannadaTitle: "ಕಾಡು ಅಮ್ತೆಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ",
    familyId: "uppinakayi",
    tagline: "Wild Indian Hog Plum matured in cold-pressed oil",
    ammaNote:
      "ಮಲೆನಾಡ ಕಾಡಿನ ಅಮ್ತೆಕಾಯಿ. ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ಮೂರು ತಿಂಗಳು ಉಪ್ಪಿನಲ್ಲಿ ಮಾಗಿಸಿ ಹದವಾಗಿ ಒಗ್ಗರಣೆ ಕೊಟ್ಟದ್ದು.",
    goesWith: ["Rice ganji on a rainy day", "Curd rice", "Majjige huli anna"],
    variants: [
      { id: "amt-100", weight: "100 g", weightGrams: 100, price: 140 },
      { id: "amt-250", weight: "250 g", weightGrams: 250, price: 310 },
      { id: "amt-500", weight: "500 g", weightGrams: 500, price: 580 },
    ],
    ingredients: "Wild Hog Plums (Amtekai), Cold-pressed Gingelly Oil, Stone ground mustard, Byadgi chilli, Sea salt.",
    accentColor: "#B45431",
    inStock: true,
    featured: true,
  },
  {
    id: "bisi-bele-bath-pudi",
    slug: "davangere-bisi-bele-bath-pudi",
    title: "Davangere Bisi Bele Bath Pudi",
    kannadaTitle: "ದಾವಣಗೆರೆ ಬಿಸಿಬೇಳೆ ಭಾತ್ ಪುಡಿ",
    familyId: "bath-pudi",
    tagline: "Kapok buds, stone flower, cinnamon & 14 spices",
    ammaNote:
      "ಮರಾಠಿ ಮೊಗ್ಗು ಮತ್ತು ಕಲ್ಲು ಹೂವಿನ ಪರಿಮಳವೇ ಈ ಪುಡಿಯ ಜೀವ. ಮನೆಯಲ್ಲಿ ಮಾಡಿದಾಗ ಇಡೀ ಬೀದಿಗೆ ಕಂಪು ಹರಡುತ್ತದೆ.",
    goesWith: ["Traditional Bisi Bele Bath", "Khara Pongal", "Vegetable Khichdi"],
    variants: [
      { id: "bbb-100", weight: "100 g", weightGrams: 100, price: 125 },
      { id: "bbb-250", weight: "250 g", weightGrams: 250, price: 275 },
      { id: "bbb-500", weight: "500 g", weightGrams: 500, price: 510 },
    ],
    ingredients: "Coriander seeds, Byadgi chillies, Cinnamon, Cloves, Kapok buds, Stone flower, Chana dal, Fenugreek.",
    accentColor: "#764D30",
    inStock: true,
    featured: true,
  },
  {
    id: "boodu-kumbhala-sandige",
    slug: "boodu-kumbhala-sandige",
    title: "Boodu Kumbhala Sandige",
    kannadaTitle: "ಬೂದು ಕುಂಬಳಕಾಯಿ ಸಂಡಿಗೆ",
    familyId: "sandige-happala",
    tagline: "Sun-dried ash gourd and spiced urad dal pearls",
    ammaNote:
      "ಕುಂಬಳಕಾಯಿಯ ನೀರು ಬಸಿದು, ಉದ್ದಿನ ಬೇಳೆಯೊಂದಿಗೆ ರುಬ್ಬಿ ಎಳೆ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಸಂಡಿಗೆ. ಕರಿದಾಗ ನಾಲಿಗೆಯಲ್ಲಿ ಕರಗುತ್ತದೆ.",
    goesWith: ["Saaru Anna (Rasam Rice)", "Majjige Saaru", "Tomato Bath"],
    variants: [
      { id: "bks-100", weight: "100 g", weightGrams: 100, price: 115 },
      { id: "bks-250", weight: "250 g", weightGrams: 250, price: 250 },
      { id: "bks-500", weight: "500 g", weightGrams: 500, price: 470 },
    ],
    ingredients: "Ash gourd, Urad dal, Green chillies, Asafoetida, Cumin, Salt.",
    accentColor: "#C3B59F",
    inStock: true,
  },
  {
    id: "nippattu-crunch",
    slug: "davangere-kai-nippattu",
    title: "Davangere Kai Nippattu",
    kannadaTitle: "ದಾವಣಗೆರೆ ಕೈ ನಿಪ್ಪಟ್ಟು",
    familyId: "kurukalu",
    tagline: "Hand-pressed rice crackers with crushed peanuts & curry leaves",
    ammaNote:
      "ಅಜ್ಜಿಯ ಕಾಲದ ಹದ. ಕೈಯಲ್ಲೇ ತಟ್ಟಿ, ಕಾದ ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆಯಲ್ಲಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದ ನಿಪ್ಪಟ್ಟು. ಸಂಜೆಯ ಕಾಫಿ ಜೊತೆ ಹೇಳಿಮಾಡಿಸಿದ ತಿನಿಸು.",
    goesWith: ["Evening Filter Coffee", "Sulaimani Chai", "Dry Chutney dip"],
    variants: [
      { id: "nip-100", weight: "100 g", weightGrams: 100, price: 85 },
      { id: "nip-250", weight: "250 g", weightGrams: 250, price: 195 },
      { id: "nip-500", weight: "500 g", weightGrams: 500, price: 370 },
    ],
    ingredients: "Rice flour, Roasted peanuts, Fried gram, Sesame seeds, Dry chillies, Curry leaves, Groundnut oil.",
    accentColor: "#302A25",
    inStock: true,
    featured: true,
  },
  {
    id: "rave-unde",
    slug: "kempu-sajjige-rave-unde",
    title: "Kempu Sajjige Rave Unde",
    kannadaTitle: "ಕೆಂಪು ಸಜ್ಜಿಗೆ ರವೆ ಉಂಡೆ",
    familyId: "sihi",
    tagline: "Golden semolina, fresh coconut, dry fruits & pure cow ghee",
    ammaNote:
      "ತುಪ್ಪದಲ್ಲಿ ಘಮಘಮಿಸುವಂತೆ ಹುರಿದ ರವೆ, ತುರಿದ ಕೊಬ್ಬರಿ ಮತ್ತು ಯಾಲಕ್ಕಿ ಸುವಾಸನೆ. ಪ್ರತಿಯೊಂದು ಉಂಡೆಯಲ್ಲೂ ಹಬ್ಬದ ಅನುಭವ.",
    goesWith: ["Festive Thali", "Afternoon sweet treat", "Travel box"],
    variants: [
      { id: "rav-100", weight: "100 g", weightGrams: 100, price: 120 },
      { id: "rav-250", weight: "250 g", weightGrams: 250, price: 270 },
      { id: "rav-500", weight: "500 g", weightGrams: 500, price: 510 },
    ],
    ingredients: "Fine semolina (Chiroti Rava), Pure Cow Ghee, Grated dry coconut, Sugar, Cardamom, Cashews, Raisins.",
    accentColor: "#2F3F6F",
    inStock: true,
  },
  {
    id: "ragi-malt-poshane",
    slug: "sprouted-ragi-badam-malt",
    title: "Mulaike Ragi & Badam Malt",
    kannadaTitle: "ಮೊಳಕೆ ರಾಗಿ ಮತ್ತು ಬಾದಾಮಿ ಮಾಲ್ಟ್",
    familyId: "malts-health",
    tagline: "Sun-sprouted Ragi, Mamra almonds, green cardamom",
    ammaNote:
      "ಮೊಳಕೆ ಕಟ್ಟಿ ಹುರಿದ ರಾಗಿ ಜೀರ್ಣಕ್ಕೆ ಸುಲಭ, ರಕ್ತಕ್ಕೆ ಬಲ. ಬೆಳಿಗ್ಗೆ ಬೆಚ್ಚಗಿನ ಹಾಲಿನಲ್ಲಿ ಅಥವಾ ಮಜ್ಜಿಗೆಯಲ್ಲಿ ಬೆರೆಸಿ ಕುಡಿಯಿರಿ.",
    goesWith: ["Warm A2 Cow Milk", "Morning fresh Majjige (Buttermilk)"],
    variants: [
      { id: "rag-100", weight: "100 g", weightGrams: 100, price: 135 },
      { id: "rag-250", weight: "250 g", weightGrams: 250, price: 300 },
      { id: "rag-500", weight: "500 g", weightGrams: 500, price: 560 },
    ],
    ingredients: "Sprouted Finger Millet (Ragi), Whole Almonds, Cardamom, Roasted gram.",
    accentColor: "#663F52",
    inStock: true,
    featured: true,
  },
];

export const MEAL_PLATES: MealPlate[] = [
  {
    id: "idli-morning",
    slug: "idli-morning",
    title: "Idli/dosa morning",
    kannadaTitle: "ಇಡ್ಲಿ/ದೋಸೆ ಬೆಳಿಗ್ಗೆ",
    description: "A podi, a chutney, a spoon of ghee.",
    kannadaDescription: "ಬಿಸಿ ಇಡ್ಲಿ ಅಥವಾ ದೋಸೆ, ಎರಡು ವಿಧದ ಚಟ್ನಿ ಪುಡಿ ಮತ್ತು ಶುದ್ಧ ತುಪ್ಪದ ರುಚಿ.",
    price: 360,
    colors: ["#C99436", "#506D41", "#302A25"],
    includedProductIds: ["shenga-pudi", "gurellu-pudi", "nippattu-crunch"],
    suggestedAddonId: "amtekai-uppinakayi",
  },
  {
    id: "hot-rice-ghee",
    slug: "hot-rice-ghee",
    title: "Hot rice and ghee",
    kannadaTitle: "ಬಿಸಿ ಅನ್ನ, ತುಪ್ಪ",
    description: "What Amma serves when you walk in tired.",
    kannadaDescription: "ದಣಿದು ಮನೆಗೆ ಬಂದಾಗ ತಟ್ಟೆಗೆ ಬೀಳುವ ಮೊದಲ ಮಮತೆಯ ತುತ್ತು.",
    price: 395,
    colors: ["#C99436", "#B45431", "#764D30"],
    includedProductIds: ["gurellu-pudi", "amtekai-uppinakayi", "bisi-bele-bath-pudi"],
    suggestedAddonId: "boodu-kumbhala-sandige",
  },
  {
    id: "tea-time",
    slug: "tea-time",
    title: "Tea time",
    kannadaTitle: "ಚಹಾ ಸಮಯ",
    description: "Crisp, small, and gone too fast.",
    kannadaDescription: "ಸಂಜೆಯ ಸಂಭಾಷಣೆಗೆ ಗರಿಗರಿ ನಿಪ್ಪಟ್ಟು ಮತ್ತು ರವೆ ಉಂಡೆಯ ಸಿಹಿ.",
    price: 340,
    colors: ["#302A25", "#2F3F6F", "#C3B59F"],
    includedProductIds: ["nippattu-crunch", "rave-unde", "boodu-kumbhala-sandige"],
    suggestedAddonId: "shenga-pudi",
  },
  {
    id: "festival-table",
    slug: "the-festival-table",
    title: "The festival table",
    kannadaTitle: "ಹಬ್ಬದ ಊಟ",
    description: "Everything a festival plate needs.",
    kannadaDescription: "ಬಾಳೆ ಎಲೆಯ ಮೇಲೆ ಸಾಲಾಗಿ ಜೋಡಿಸುವ ಹಬ್ಬದ ಸಂಭ್ರಮ.",
    price: 520,
    colors: ["#2F3F6F", "#B45431", "#663F52"],
    includedProductIds: ["bisi-bele-bath-pudi", "amtekai-uppinakayi", "rave-unde"],
    suggestedAddonId: "mavina-gojju",
  },
  {
    id: "for-the-journey",
    slug: "for-the-journey",
    title: "For the journey",
    kannadaTitle: "ಪ್ರಯಾಣಕ್ಕೆ",
    description: "Packs that travel well, for the one leaving home.",
    kannadaDescription: "ಊರು ಬಿಟ್ಟು ಹೋಗುವ ಮಕ್ಕಳಿಗೆ ಅಮ್ಮ ಬ್ಯಾಗಲ್ಲಿ ಇಡುವ ನೆನಪುಗಳು.",
    price: 430,
    colors: ["#764D30", "#C99436", "#506D41"],
    includedProductIds: ["shenga-pudi", "nippattu-crunch", "mavina-gojju"],
    suggestedAddonId: "agase-pudi",
  },
  {
    id: "nourish",
    slug: "nourish",
    title: "Nourish",
    kannadaTitle: "ಪೋಷಣೆ",
    description: "Malts and mixes, simply made.",
    kannadaDescription: "ಶರೀರಕ್ಕೆ ನೈಸರ್ಗಿಕ ಶಕ್ತಿ ಕೊಡುವ ಶುದ್ಧ ಮೊಳಕೆ ಧಾನ್ಯಗಳ ರಕ್ಷೆ.",
    price: 380,
    colors: ["#663F52", "#506D41", "#C3B59F"],
    includedProductIds: ["ragi-malt-poshane", "agase-pudi", "boodu-kumbhala-sandige"],
    suggestedAddonId: "gurellu-pudi",
  },
];

export const SUBSCRIPTION_BOXES: SubscriptionBox[] = [
  {
    id: "everyday-box",
    title: "The Everyday Box",
    kannadaTitle: "ದಿನದ ಊಟ",
    description: "Amma's 4 core pantry essentials for daily tiffin & hot rice.",
    monthlyPrice: 840,
    itemsCount: 4,
    itemsSummary: "Gurellu Pudi (250g) + Shenga Pudi (250g) + Amtekai Pickle (250g) + Sandige (250g)",
    accentColor: "#5F252D",
  },
  {
    id: "tiffin-lovers",
    title: "The Tiffin Box",
    kannadaTitle: "ತಿಂಡಿ ಪೆಟ್ಟಿಗೆ",
    description: "Everything idli, dosa, and rotti need every morning of the month.",
    monthlyPrice: 690,
    itemsCount: 3,
    itemsSummary: "Shenga Chutney Pudi (250g) + Agase Pudi (250g) + Mavinakayi Gojju (250g)",
    accentColor: "#C99436",
  },
  {
    id: "davangere-grand",
    title: "The Davangere Feast",
    kannadaTitle: "ದಾವಣಗೆರೆ ಸಂಭ್ರಮ",
    description: "Complete 6-item traditional pantry with curries, crisps, and sweets.",
    monthlyPrice: 1250,
    itemsCount: 6,
    itemsSummary: "Bisi Bele Pudi + Gurellu Pudi + Amtekai + Nippattu + Rave Unde + Sandige",
    accentColor: "#2F3F6F",
  },
];

export const CUSTOMER_MEMORIES: CustomerMemory[] = [
  {
    id: "mem-1",
    quote: "Tastes like summer holidays at Ajji’s house in Davangere. The Gurellu pudi smell took me back 20 years.",
    kannadaQuote: "ಬೇಸಿಗೆ ರಜೆಯಲ್ಲಿ ಅಜ್ಜಿಯ ಮನೆಯಲ್ಲಿ ತಿಂದ ಅದೇ ರುಚಿ. ಕಣ್ಣಲ್ಲಿ ನೀರು ಬಂತು.",
    author: "Ananya K.",
    city: "Bengaluru",
    relation: "Grandmother's kitchen in Davangere",
  },
  {
    id: "mem-2",
    quote: "Living abroad in Munich, this package felt like Amma herself reached out and served hot rice with ghee.",
    kannadaQuote: "ವಿದೇಶದಲ್ಲಿದ್ದರೂ ತಾಯಿಯ ಪ್ರೀತಿ ಬಿಸಿ ಅನ್ನದ ಜೊತೆ ನೆನಪಾಯಿತು.",
    author: "Ranganath M.",
    city: "Munich / Mysuru",
    relation: "Mother's Sunday cooking",
  },
  {
    id: "mem-3",
    quote: "The Amtekai pickle has that exact earthen bharani maturation taste. No factory pickle can come close.",
    kannadaQuote: "ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ಮಾಗಿಸಿದ ಅಸಲಿ ಕಾಡಿನ ರುಚಿ.",
    author: "Sneha Hegde",
    city: "Hubballi",
    relation: "Family ancestral home",
  },
];
