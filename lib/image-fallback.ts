/**
 * Utility to map remote database image URLs to local assets.
 * This allows the site to run fully offline without relying on remote API storage.
 */
export function getLocalFallbackImage(src: string | null | undefined): string {
  if (!src) return "/img/adventure.webp";

  if (src.startsWith("http://") || src.startsWith("https://")) {
    // Hash the URL to select a local fallback image consistently
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
      hash = src.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const fallbacks = [
      "/img/adventure.webp",
      "/img/adventure1.webp",
      "/img/adventure3.webp",
      "/img/adventure4.webp",
      "/img/bg.webp",
      "/img/camel-ride.webp",
      "/img/camel-ride1.webp",
      "/img/events.webp",
      "/img/faq-bg.webp",
      "/img/faq-img.webp",
      "/img/godl.webp",
      "/img/quad-bike.webp",
      "/img/salt-lake.webp",
      "/img/western-desert-hero.webp"
    ];
    
    const index = Math.abs(hash) % fallbacks.length;
    return fallbacks[index];
  }
  
  return src;
}
