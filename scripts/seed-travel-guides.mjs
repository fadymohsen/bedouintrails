import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const GUIDES = [
  { path: "/white-desert-tour-from-cairo", translationKey: "guide_whitetour_breadcrumb", image: "/img/hero-white-desert-tour-cairo.webp", heroImage: "/img/hero-white-desert-tour-cairo.webp", sortOrder: 1 },
  { path: "/egypt-safari-tours", translationKey: "guide_safaritours_breadcrumb", image: "/img/egypt-safari-camel-trek.webp", heroImage: "/img/egypt-safari-camel-trek.webp", heroPosition: "center 70%", sortOrder: 2 },
  { path: "/bahariya-oasis", translationKey: "guide_bahariya_breadcrumb", image: "/img/bahariya-oasis-palms.webp", heroImage: "/img/bahariya-oasis-palms.webp", sortOrder: 3 },
  { path: "/black-desert-egypt", translationKey: "guide_black_breadcrumb", image: "/img/hero-black-desert.webp", heroImage: "/img/hero-black-desert.webp", sortOrder: 4 },
  { path: "/camel-trek", translationKey: "guide_camel_breadcrumb", image: "/img/camel-ride.webp", heroImage: "/img/camel-ride.webp", sortOrder: 5 },
  { path: "/desert-yoga-retreat", translationKey: "guide_yoga_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 6 },
  { path: "/multi-day-desert-trek", translationKey: "guide_trek_breadcrumb", image: "/img/hero-multi-day-trek.webp", heroImage: "/img/hero-multi-day-trek.webp", sortOrder: 7 },
  { path: "/white-desert-camping", translationKey: "guide_camping_breadcrumb", image: "/img/white-desert-camping.webp", heroImage: "/img/white-desert-camping.webp", sortOrder: 8 },
  { path: "/white-desert-safari", translationKey: "guide_wdsafari_breadcrumb", image: "/img/hero-white-desert-safari.webp", heroImage: "/img/hero-white-desert-safari.webp", sortOrder: 9 },
  { path: "/siwa-oasis-tour", translationKey: "guide_siwa_breadcrumb", image: "/img/hero-siwa-oasis.webp", heroImage: "/img/hero-siwa-oasis.webp", sortOrder: 10 },
  { path: "/jara-cave", translationKey: "guide_djara_breadcrumb", image: "/img/hero-jara-cave.webp", heroImage: "/img/hero-jara-cave.webp", sortOrder: 11 },
  { path: "/desert-trekking-egypt", translationKey: "guide_dtrek_breadcrumb", image: "/img/hero-desert-trekking.webp", heroImage: "/img/hero-desert-trekking.webp", sortOrder: 12 },
  { path: "/white-desert-egypt", translationKey: "guide_wd_breadcrumb", image: "/img/bg.webp", heroImage: "/img/bg.webp", sortOrder: 13 },
  { path: "/crystal-mountain-egypt", translationKey: "guide_crystal_breadcrumb", image: "/img/hero-crystal-mountain.webp", heroImage: "/img/hero-crystal-mountain.webp", sortOrder: 14 },
  { path: "/western-desert-egypt-guide", translationKey: "guide_western_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 15 },
  { path: "/egypt-desert-tour", translationKey: "guide_edt_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 16 },
  { path: "/sahara-hiking-egypt", translationKey: "guide_hiking_breadcrumb", image: "/img/hero-desert-trekking.webp", heroImage: "/img/hero-desert-trekking.webp", sortOrder: 17 },
  { path: "/best-time-to-visit-white-desert", translationKey: "guide_besttime_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 18 },
  { path: "/desert-safety-guide", translationKey: "guide_safety_breadcrumb", image: "/img/adventure4.webp", heroImage: "/img/adventure4.webp", sortOrder: 19 },
  { path: "/how-to-get-to-white-desert", translationKey: "guide_howto_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 20 },
  { path: "/stargazing-western-desert", translationKey: "guide_stars_breadcrumb", image: "/img/night-camp.webp", heroImage: "/img/night-camp.webp", sortOrder: 21 },
  { path: "/what-to-pack-white-desert", translationKey: "guide_packing_breadcrumb", image: "/img/adventure.webp", heroImage: "/img/adventure.webp", sortOrder: 22 },
  { path: "/white-desert-tour-cost", translationKey: "guide_cost_breadcrumb", image: "/img/white-desert-camping.webp", heroImage: "/img/white-desert-camping.webp", sortOrder: 23 },
  { path: "/white-desert-vs-wadi-rum", translationKey: "guide_compare_breadcrumb", image: "/img/western-desert-hero.webp", heroImage: "/img/western-desert-hero.webp", sortOrder: 24 },
];

async function main() {
  console.log("Seeding travel guides...");

  for (const guide of GUIDES) {
    await prisma.travelGuide.upsert({
      where: { path: guide.path },
      update: {
        image: guide.image,
        heroImage: guide.heroImage,
        heroPosition: guide.heroPosition ?? "center",
        sortOrder: guide.sortOrder,
      },
      create: {
        ...guide,
        heroPosition: guide.heroPosition ?? "center",
        visible: true,
      },
    });
    console.log(`  ✓ ${guide.path}`);
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
