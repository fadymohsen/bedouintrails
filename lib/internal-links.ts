/**
 * Internal linking map between trips (trap slugs) and blogs (blog slugs).
 * Each trip links to 3 relevant blogs; each blog links to 3 relevant trips.
 */

// Trip slug → 3 blog slugs
export const tripToBlogs: Record<string, string[]> = {
  // Fayoum
  "2-days-fayoum-oasis-program": [
    "fayoum-oasis-travel-guide",
    "egypt-desert-safari-first-timer-guide",
    "white-desert-egypt-winter-travel-guide",
  ],
  // Black & White Desert 2-day
  "2-days-black-white-desert-camping": [
    "white-desert-egypt-ultimate-guide",
    "bahariya-oasis-white-desert-2-day-itinerary",
    "white-desert-camping-egypt",
  ],
  // Siwa 3-day
  "3-days-siwa-oasis-program": [
    "siwa-oasis-travel-guide",
    "siwa-oasis-egypt-ultimate-guide",
    "how-to-plan-egypt-desert-safari",
  ],
  // Black & White Desert 3-day camp
  "3-days-black-and-white-desert-camp": [
    "white-desert-egypt-ultimate-guide",
    "crystal-mountain-egypt-guide",
    "white-desert-camping-egypt",
  ],
  // Black & White Desert + Jara Cave 3-day
  "3-days-black-and-white-desert-jara-cave-camp": [
    "al-jara-cave-djara-cave-egypt-guide",
    "white-desert-egypt-ultimate-guide",
    "jara-cave-egypt-prehistoric-rock-art",
  ],
  // Black & White Desert + Bahariya 3-day
  "3-days-black-white-desert-bahariya-oasis-program": [
    "bahariya-oasis-egypt-guide",
    "black-desert-vs-white-desert-egypt",
    "white-desert-camping-egypt",
  ],
  // Siwa 4-day culture tour
  "4-days-siwa-oasis-desert-culture-tour": [
    "siwa-oasis-travel-guide",
    "siwa-oasis-egypt-ultimate-guide",
    "bedouin-culture-egypt-desert",
  ],
  // Black & White Desert + Fayoum 4-day
  "4-days-black-and-white-desert-fayoum-oasis-program": [
    "fayoum-oasis-travel-guide",
    "white-desert-egypt-ultimate-guide",
    "black-desert-egypt-guide",
  ],
  // 5-day camel trekking
  "5-day-white-desert-camel-trekking-camping-expedition": [
    "camel-safari-egypt-guide",
    "desert-trekking-egypt-sahara-hiking-tour",
    "white-desert-camping-egypt",
  ],
  // 5-day hiking
  "5-days-hiking-program": [
    "desert-hiking-trekking-egypt-guide",
    "desert-trekking-egypt-sahara-hiking-tour",
    "what-to-pack-egypt-desert-safari",
  ],
  // 5-day Black/White/Jara/Bahariya
  "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program": [
    "al-jara-cave-djara-cave-egypt-guide",
    "bahariya-oasis-egypt-guide",
    "black-desert-egypt-guide",
  ],
  // 7-day Western Desert camp
  "7-days-western-desert-camp": [
    "white-desert-egypt-ultimate-guide",
    "al-jara-cave-djara-cave-egypt-guide",
    "4x4-desert-safari-egypt",
  ],
  // 8-day hiking
  "8-days-hiking-program": [
    "desert-hiking-trekking-egypt-guide",
    "desert-trekking-egypt-sahara-hiking-tour",
    "stargazing-egypt-desert",
  ],
  // 8-day camel
  "8-days-camel-program": [
    "camel-safari-egypt-guide",
    "desert-hiking-trekking-egypt-guide",
    "bedouin-culture-egypt-desert",
  ],
  // 8-day Egypt adventure
  "8-days-egypt-adventure-journey": [
    "oasis-circle-egypt-complete-guide",
    "siwa-oasis-egypt-ultimate-guide",
    "fayoum-oasis-travel-guide",
  ],
  // 13-day grand journey
  "13-days-grand-egypt-desert-oases-journey": [
    "oasis-circle-egypt-complete-guide",
    "siwa-oasis-travel-guide",
    "white-desert-egypt-ultimate-guide",
  ],
};

// Blog slug → 3 trip slugs
export const blogToTrips: Record<string, string[]> = {
  // White Desert guides
  "white-desert-egypt-ultimate-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "black-desert-egypt-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "black-desert-vs-white-desert-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "4-days-black-and-white-desert-fayoum-oasis-program",
  ],
  "white-desert-egypt-sunrise-sunset-photography": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "crystal-mountain-egypt-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
  ],
  "white-desert-camping-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "white-desert-vs-black-desert-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  // Siwa guides
  "siwa-oasis-travel-guide": [
    "3-days-siwa-oasis-program",
    "4-days-siwa-oasis-desert-culture-tour",
    "8-days-egypt-adventure-journey",
  ],
  "siwa-oasis-egypt-ultimate-guide": [
    "3-days-siwa-oasis-program",
    "4-days-siwa-oasis-desert-culture-tour",
    "8-days-egypt-adventure-journey",
  ],
  // Fayoum guide
  "fayoum-oasis-travel-guide": [
    "2-days-fayoum-oasis-program",
    "4-days-black-and-white-desert-fayoum-oasis-program",
    "8-days-egypt-adventure-journey",
  ],
  // Bahariya guide
  "bahariya-oasis-egypt-guide": [
    "3-days-black-white-desert-bahariya-oasis-program",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
    "2-days-black-white-desert-camping",
  ],
  // Oasis guides
  "dakhla-oasis-egypt-guide": [
    "13-days-grand-egypt-desert-oases-journey",
    "8-days-egypt-adventure-journey",
    "4-days-siwa-oasis-desert-culture-tour",
  ],
  "kharga-oasis-egypt-guide": [
    "13-days-grand-egypt-desert-oases-journey",
    "8-days-egypt-adventure-journey",
    "4-days-siwa-oasis-desert-culture-tour",
  ],
  "oasis-circle-egypt-complete-guide": [
    "13-days-grand-egypt-desert-oases-journey",
    "8-days-egypt-adventure-journey",
    "4-days-siwa-oasis-desert-culture-tour",
  ],
  // Jara Cave guides
  "al-jara-cave-djara-cave-egypt-guide": [
    "3-days-black-and-white-desert-jara-cave-camp",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
    "7-days-western-desert-camp",
  ],
  "jara-cave-egypt-prehistoric-rock-art": [
    "3-days-black-and-white-desert-jara-cave-camp",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
    "7-days-western-desert-camp",
  ],
  // Activity guides
  "camel-safari-egypt-guide": [
    "5-day-white-desert-camel-trekking-camping-expedition",
    "8-days-camel-program",
    "8-days-hiking-program",
  ],
  "sandboarding-egypt-guide": [
    "3-days-black-white-desert-bahariya-oasis-program",
    "2-days-black-white-desert-camping",
    "4-days-siwa-oasis-desert-culture-tour",
  ],
  "desert-hiking-trekking-egypt-guide": [
    "5-days-hiking-program",
    "8-days-hiking-program",
    "5-day-white-desert-camel-trekking-camping-expedition",
  ],
  "desert-trekking-egypt-sahara-hiking-tour": [
    "5-days-hiking-program",
    "8-days-hiking-program",
    "5-day-white-desert-camel-trekking-camping-expedition",
  ],
  // Photography & stargazing
  "stargazing-egypt-desert": [
    "3-days-black-and-white-desert-camp",
    "2-days-black-white-desert-camping",
    "7-days-western-desert-camp",
  ],
  "desert-photography-tips-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "7-days-western-desert-camp",
  ],
  "desert-photography-guide-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "7-days-western-desert-camp",
  ],
  // Planning & practical
  "4x4-desert-safari-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
  ],
  "how-to-plan-egypt-desert-safari": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "best-time-visit-egypt-desert": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-siwa-oasis-program",
  ],
  "what-to-pack-egypt-desert-safari": [
    "2-days-black-white-desert-camping",
    "5-days-hiking-program",
    "5-day-white-desert-camel-trekking-camping-expedition",
  ],
  "is-egypt-desert-safe-to-visit": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-siwa-oasis-program",
  ],
  "egypt-desert-safari-cost-budget-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "5-day-white-desert-camel-trekking-camping-expedition",
  ],
  "cairo-to-white-desert-transport-options": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  "how-many-days-white-desert-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "5-days-black-desert-white-desert-al-jarah-cave-and-bahariya-oasis-program",
  ],
  "private-vs-group-desert-tour-egypt": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "5-day-white-desert-camel-trekking-camping-expedition",
  ],
  // Itinerary
  "bahariya-oasis-white-desert-2-day-itinerary": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-black-white-desert-bahariya-oasis-program",
  ],
  // Special interest
  "meditation-yoga-retreat-egypt": [
    "3-days-black-and-white-desert-camp",
    "5-day-white-desert-camel-trekking-camping-expedition",
    "5-days-hiking-program",
  ],
  "family-desert-safari-egypt-guide": [
    "2-days-black-white-desert-camping",
    "2-days-fayoum-oasis-program",
    "3-days-siwa-oasis-program",
  ],
  "egypt-desert-safari-first-timer-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-siwa-oasis-program",
  ],
  "bedouin-culture-egypt-desert": [
    "5-day-white-desert-camel-trekking-camping-expedition",
    "8-days-camel-program",
    "5-days-hiking-program",
  ],
  "egypt-desert-wildlife-guide": [
    "3-days-black-and-white-desert-camp",
    "5-day-white-desert-camel-trekking-camping-expedition",
    "5-days-hiking-program",
  ],
  "white-desert-egypt-winter-travel-guide": [
    "2-days-black-white-desert-camping",
    "3-days-black-and-white-desert-camp",
    "3-days-siwa-oasis-program",
  ],
};
