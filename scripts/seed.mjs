import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const IMG_BASE = "https://api.bedouintrails.com/storage/uploads/images";

async function main() {
  console.log("Seeding database...");

  // ── Sliders ──
  await prisma.slider.createMany({
    data: [
      {
        image: `${IMG_BASE}/traps/BiMd5LvV283OEjmEPqcPGoFQrENuGNAWzrgP5w8W.jpg`,
        titleEn: "Experience the Real Safari",
        titleAr: "عِش تجربة السفاري الحقيقية",
        descriptionEn: "Embark on an extraordinary journey to the heart of the desert, where golden dunes and enchanting oases await you.",
        descriptionAr: "انطلق في رحلة استثنائية إلى قلب الصحراء، حيث الكثبان الذهبية والواحات الساحرة في انتظارك.",
      },
      {
        image: `${IMG_BASE}/traps/fDmghMgUBmH3f8ROHjb7CA36s3Rmn5i6ibowS3UX.jpg`,
        titleEn: "White Desert Adventures Await",
        titleAr: "مغامرات الصحراء البيضاء في انتظارك",
        descriptionEn: "Discover the stunning chalk formations of Egypt's White Desert under a blanket of stars.",
        descriptionAr: "اكتشف التكوينات الطباشيرية المذهلة في الصحراء البيضاء بمصر تحت سماء مرصّعة بالنجوم.",
      },
      {
        image: `${IMG_BASE}/traps/LaM35tO0GLA1dbUokK4ec0ztk6JNE7bnf0dyBqs7.jpg`,
        titleEn: "Explore Egypt's Western Desert",
        titleAr: "استكشف الصحراء الغربية بمصر",
        descriptionEn: "From the Black Desert to Crystal Mountain, experience the untouched beauty of Egypt's wilderness.",
        descriptionAr: "من الصحراء السوداء إلى جبل الكريستال، عِش جمال البرية المصرية البِكر.",
      },
    ],
  });
  console.log("✓ Sliders created");

  // ── Trips (Traps) ──
  const trips = [
    { nameEn: "Siwa Oasis 3 Days 2 Nights", nameAr: "واحة سيوة 3 أيام وليلتين", slug: "siwa-oasis-3-days-2-nights", duration: 3, fromEn: "Siwa Oasis", fromAr: "واحة سيوة", toEn: "Downtown Cairo", toAr: "وسط القاهرة", img: "BiMd5LvV283OEjmEPqcPGoFQrENuGNAWzrgP5w8W.jpg", descEn: "A 3-day adventure through Siwa Oasis, exploring salt lakes, ancient ruins, and the Great Sand Sea.", descAr: "مغامرة 3 أيام في واحة سيوة، لاستكشاف البحيرات المالحة والآثار القديمة وبحر الرمال الأعظم." },
    { nameEn: "2 Day 1 Night Program in Fayoum Oasis", nameAr: "برنامج يومين وليلة في واحة الفيوم", slug: "2-day-1-night-program-in-fayoum-oasis", duration: 2, fromEn: "Fayoum Oasis", fromAr: "واحة الفيوم", toEn: "Cairo", toAr: "القاهرة", img: "28KTW9XgN3CKHVaz0HlMfJ70ClFeNpxrAN6VSc8D.jpg", descEn: "A quick escape to Fayoum Oasis, featuring Wadi El Rayan waterfalls and desert landscapes.", descAr: "رحلة سريعة إلى واحة الفيوم، تشمل شلالات وادي الريان والمناظر الصحراوية." },
    { nameEn: "One Night in the Black and White Desert", nameAr: "ليلة واحدة في الصحراء السوداء والبيضاء", slug: "one-night-in-the-black-and-white-desert", duration: 2, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "8Y9zxwfey3J3bW55pEcu4EYSbeVf50MIZXQk7l9d.jpg", descEn: "A 2-day trip from Cairo to the Black and White Desert with overnight camping under the stars.", descAr: "رحلة يومين من القاهرة إلى الصحراء السوداء والبيضاء مع تخييم ليلي تحت النجوم." },
    { nameEn: "Two Nights Camping in the Black and White Desert", nameAr: "ليلتا تخييم في الصحراء السوداء والبيضاء", slug: "two-nights-camping-in-the-black-and-white-desert", duration: 3, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "fDmghMgUBmH3f8ROHjb7CA36s3Rmn5i6ibowS3UX.jpg", descEn: "3 days exploring the Black Desert, Crystal Mountain, and the White Desert with two nights of desert camping.", descAr: "3 أيام لاستكشاف الصحراء السوداء وجبل الكريستال والصحراء البيضاء مع ليلتين من التخييم." },
    { nameEn: "Black and White Desert and Djara Cave", nameAr: "الصحراء السوداء والبيضاء وكهف الجارة", slug: "black-and-white-desert-and-jar-cave", duration: 3, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "LaM35tO0GLA1dbUokK4ec0ztk6JNE7bnf0dyBqs7.jpg", descEn: "A 3-day journey through Egypt's most stunning desert landscapes including the prehistoric Djara Cave.", descAr: "رحلة 3 أيام عبر أجمل المناظر الصحراوية في مصر بما في ذلك كهف الجارة التاريخي." },
    { nameEn: "3 Nights in the Black and White Desert and Khara Cave", nameAr: "3 ليالٍ في الصحراء السوداء والبيضاء وكهف الخارة", slug: "3-nights-in-the-black-and-white-desert-and-khara-cave", duration: 4, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "Ed3lAYBRXjGJkVPCqCvRfaJBgzDDnjukWXNTUyAh.jpg", descEn: "A 4-day deep desert expedition visiting the Black Desert, White Desert, and ancient Khara Cave.", descAr: "رحلة استكشافية 4 أيام في عمق الصحراء تشمل الصحراء السوداء والبيضاء وكهف الخارة القديم." },
    { nameEn: "3 Nights and 4 Days in Siwa Oasis", nameAr: "3 ليالٍ و4 أيام في واحة سيوة", slug: "3-nights-and-4-days-in-siwa-oasis", duration: 4, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Siwa Oasis", toAr: "واحة سيوة", img: "AlPkCdNT91B9PY6gpSuxT8ie9JEn3X94sCcMcvJJ.jpg", descEn: "4 days discovering Siwa's salt lakes, hot springs, ancient Oracle Temple, and the Great Sand Sea.", descAr: "4 أيام لاكتشاف بحيرات سيوة المالحة والينابيع الساخنة ومعبد الوحي وبحر الرمال الأعظم." },
    { nameEn: "The Five Oases of Egypt", nameAr: "واحات مصر الخمس", slug: "the-five-oases-of-egypt", duration: 7, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Luxor", toAr: "الأقصر", img: "FsvDaCwA8aeBnNE7x6q5u069zVkWBRCK7nUJuLil.jpg", descEn: "A 7-day epic journey across all five Egyptian oases from Cairo to Luxor through the Western Desert.", descAr: "رحلة ملحمية 7 أيام عبر واحات مصر الخمس من القاهرة إلى الأقصر عبر الصحراء الغربية." },
    { nameEn: "4 Nights in the Black and White Desert", nameAr: "4 ليالٍ في الصحراء السوداء والبيضاء", slug: "4-nights-in-the-black-and-white-desert", duration: 5, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "tf0SaHNxlylOYoNHcG0sJV6YYoR3XevVIVbtWsHr.jpg", descEn: "A 5-day immersive desert safari through the Black Desert, Crystal Mountain, and White Desert.", descAr: "سفاري صحراوي غامر 5 أيام عبر الصحراء السوداء وجبل الكريستال والصحراء البيضاء." },
    { nameEn: "Desert Silence (Walking and Camels)", nameAr: "«صمت الصحراء» (مشي وجمال)", slug: "desert-silence-walking-and-camels", duration: 5, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "608hruf7sW1N2ukwpTex1Hi30JLpxu1UWEnOd21l.jpg", descEn: "A 5-day meditative desert trek combining camel riding and walking through pristine desert landscapes.", descAr: "رحلة تأمّلية 5 أيام في الصحراء تجمع بين ركوب الجمال والمشي عبر مناظر صحراوية بِكر." },
    { nameEn: "Oases, the White Desert and Cairo", nameAr: "الواحات والصحراء البيضاء والقاهرة", slug: "oases-the-white-desert-and-cairo", duration: 13, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "4cvkeUQFFNxGVOjvNCb4uFpP5MElvTat3c0yzjAb.jpg", descEn: "A 13-day comprehensive tour of Egypt's oases, the White Desert, and Cairo's cultural highlights.", descAr: "جولة شاملة 13 يومًا في واحات مصر والصحراء البيضاء والمعالم الثقافية في القاهرة." },
    { nameEn: "Walking and Meditation Trip", nameAr: "رحلة المشي والتأمل", slug: "walking-and-meditation-trip", duration: 6, fromEn: "Cairo", fromAr: "القاهرة", toEn: "Return to Cairo", toAr: "العودة إلى القاهرة", img: "2IVXWSJLHTDRodz4Y2ITNXkj5GlakQlAZWYmKRik.jpg", descEn: "A 6-day spiritual desert retreat combining guided walks, yoga, and meditation in the Western Desert.", descAr: "خلوة روحية 6 أيام في الصحراء تجمع بين المشي الموجّه واليوغا والتأمل في الصحراء الغربية." },
  ];

  for (const t of trips) {
    const trap = await prisma.trap.create({
      data: {
        nameEn: t.nameEn, nameAr: t.nameAr, slug: t.slug, duration: t.duration,
        interfaceFromEn: t.fromEn, interfaceFromAr: t.fromAr,
        interfaceToEn: t.toEn, interfaceToAr: t.toAr,
        descriptionEn: t.descEn, descriptionAr: t.descAr,
        status: "active", countPeople: 0,
      },
    });
    await prisma.gallery.create({
      data: { trapId: trap.id, image: `${IMG_BASE}/traps/${t.img}` },
    });
  }
  console.log(`✓ ${trips.length} trips created`);

  // ── About Us ──
  const aboutSections = [
    {
      titleEn: "Welcome to Bedouin Trails", titleAr: "مرحبًا بكم في بدوين ترايلز",
      descriptionEn: "Discover the stunning White Desert scenery and Bedouin culture. Experience starlit nights, therapeutic springs, and hidden valleys in Egypt's Western Desert.",
      descriptionAr: "اكتشف مناظر الصحراء البيضاء الخلابة وثقافة البدو. عِش ليالٍ مرصّعة بالنجوم وينابيع علاجية ووديان مخفية في الصحراء الغربية بمصر.",
      image: `${IMG_BASE}/about/32AoM572wkXbq9UmROJCHoeoa9ebc0LrVduQn216.jpg`,
    },
    {
      titleEn: "Why Choose Us", titleAr: "لماذا تختارنا",
      descriptionEn: "We are an award-winning team with extensive experience, modern equipment, strict safety standards, and a money-back guarantee for cancellations. Our professional Bedouin guides ensure an authentic desert experience.",
      descriptionAr: "نحن فريق حائز على جوائز مع خبرة واسعة ومعدات حديثة ومعايير سلامة صارمة وضمان استرداد الأموال. مرشدونا البدو المحترفون يضمنون تجربة صحراوية أصيلة.",
      image: `${IMG_BASE}/about/uhumJG2ccUUg3oPyU8RrbeDC5GubtnokVwcz6hYG.jpg`,
    },
    {
      titleEn: "Our Story", titleAr: "قصتنا",
      descriptionEn: "Bedouin Trails features a multilingual team speaking 14 languages and 75+ certified tour guides in Egyptology. We offer group and individual trips, guide services, hotel bookings, transport, and custom packages.",
      descriptionAr: "يضم فريق بدوين ترايلز متحدثين بـ14 لغة وأكثر من 75 مرشدًا سياحيًا معتمدًا في علم المصريات. نقدم رحلات جماعية وفردية وخدمات إرشاد وحجوزات فنادق ونقل وباقات مخصصة.",
      image: `${IMG_BASE}/about/ec2eJGVLJWuQr2FziF1ABa5ImwVFfG5waWnvN5gm.jpg`,
    },
  ];
  await prisma.aboutUs.createMany({ data: aboutSections });
  console.log("✓ About Us sections created");

  // ── FAQ ──
  const faqs = [
    { qEn: "Is the White Desert and Egyptian Desert safe?", qAr: "هل الصحراء البيضاء والصحراء المصرية آمنة؟", aEn: "Yes, the Western Egyptian Desert — including the White Desert, Black Desert, and Bahariya Oasis — is a safe tourist destination with a long history. Bedouin Trails follows strict safety protocols: modern 4x4 vehicles with regular maintenance, guides trained in first aid, satellite communication equipment, and operations only during safe weather seasons.", aAr: "نعم، الصحراء الغربية المصرية — بما في ذلك الصحراء البيضاء والصحراء السوداء وواحة الباهرية — وجهة سياحية آمنة ذات تاريخ طويل. تتبع بدوين ترايلز بروتوكولات سلامة صارمة: سيارات دفع رباعي حديثة مع صيانة دورية، ومرشدون مدربون على الإسعافات الأولية، ومعدات اتصال عبر الأقمار الصناعية." },
    { qEn: "What distinguishes Bedouin Trails from other operators?", qAr: "ما الذي يميز بدوين ترايلز عن غيرها؟", aEn: "Three key differences: authentic Bedouin experiences with local expert guides (not just drivers), completely private trips (never mixing strangers), and unique offerings like multi-day camel safaris with meditation and Cairo-Luxor desert routes.", aAr: "ثلاثة فوارق رئيسية: تجارب بدوية أصيلة مع مرشدين محليين خبراء (وليسوا مجرد سائقين)، ورحلات خاصة بالكامل (لا نخلط الغرباء أبدًا)، وعروض فريدة مثل رحلات الجمال المتعددة الأيام مع التأمل ومسارات القاهرة-الأقصر الصحراوية." },
    { qEn: "What is the best time to visit the Egyptian desert?", qAr: "ما أفضل وقت لزيارة الصحراء المصرية؟", aEn: "October to May is the ideal season with moderate temperatures (15–28°C daytime, 5–15°C nights), clear skies for stargazing, and perfect conditions for hiking. Summer months exceed 45°C, making physical activity difficult.", aAr: "من أكتوبر إلى مايو هو الموسم المثالي مع درجات حرارة معتدلة (15-28 درجة نهارًا، 5-15 ليلًا)، وسماء صافية لمراقبة النجوم، وظروف مثالية للمشي. أشهر الصيف تتجاوز 45 درجة مئوية." },
    { qEn: "What are the typical desert trip durations?", qAr: "ما المدد النموذجية لرحلات الصحراء؟", aEn: "Options range from quick weekend escapes (2 days) to medium adventures (3–4 days) to full immersion (6–7 days). Popular choices include two-day White/Black Desert trips, three-day Siwa tours, and six-day camel safaris.", aAr: "تتراوح الخيارات من عطلات نهاية أسبوع سريعة (يومان) إلى مغامرات متوسطة (3-4 أيام) إلى انغماس كامل (6-7 أيام). تشمل الخيارات الشائعة رحلات الصحراء البيضاء والسوداء يومين، وجولات سيوة 3 أيام." },
    { qEn: "How far is the White Desert from Cairo?", qAr: "كم تبعد الصحراء البيضاء عن القاهرة؟", aEn: "About 500 km from Cairo with a 4-5 hour drive in a private 4x4, including strategic rest stops along the route through the Black Desert and Crystal Mountain.", aAr: "حوالي 500 كم من القاهرة مع 4-5 ساعات بالسيارة في دفع رباعي خاص، بما في ذلك محطات استراحة على طول الطريق عبر الصحراء السوداء وجبل الكريستال." },
    { qEn: "What should I pack for a desert safari?", qAr: "ماذا يجب أن أحزم لرحلة سفاري صحراوية؟", aEn: "Light, loose layers covering arms and legs, warm layers for cold nights, closed-toe hiking boots, SPF 50+ sunscreen, UV sunglasses, wide-brimmed hat, flashlight, reusable water bottle, and camera. We provide all food, water, camping gear, bedding, and guide services.", aAr: "ملابس خفيفة فضفاضة تغطي الذراعين والساقين، وطبقات دافئة لليالي الباردة، وأحذية مشي مغلقة، وواقي شمس SPF 50+، ونظارات شمسية، وقبعة عريضة الحافة، ومصباح يدوي، وزجاجة مياه قابلة لإعادة الاستخدام، وكاميرا. نحن نوفر جميع الطعام والمياه ومعدات التخييم." },
    { qEn: "What is the booking process?", qAr: "ما هي عملية الحجز؟", aEn: "Browse trips, click 'View Details,' then contact via WhatsApp (+20 10 02717380) or email (info@bedouintrails.com) with preferred dates, group size, and questions. A deposit (usually 20-30%) secures your spot, with balance due before departure.", aAr: "تصفح الرحلات، انقر على 'عرض التفاصيل'، ثم تواصل عبر واتساب (+20 10 02717380) أو البريد الإلكتروني مع التواريخ المفضلة وحجم المجموعة. يؤمّن إيداع (عادة 20-30%) مكانك." },
    { qEn: "Is the desert suitable for children?", qAr: "هل الصحراء مناسبة للأطفال؟", aEn: "Yes! Day trips and shorter adventures (2 days) suit ages 5-6+. Multi-day camping trips recommend age 8+. Pacing and activities adjust for families. Camel riding and sand sledding delight kids.", aAr: "نعم! الرحلات النهارية والمغامرات القصيرة (يومان) تناسب الأعمار 5-6+. رحلات التخييم المتعددة الأيام يُنصح بها للأعمار 8+. يتم تعديل الإيقاع والأنشطة للعائلات." },
  ];
  await prisma.commonQuestion.createMany({
    data: faqs.map((f) => ({ questionEn: f.qEn, questionAr: f.qAr, answerEn: f.aEn, answerAr: f.aAr })),
  });
  console.log(`✓ ${faqs.length} FAQs created`);

  // ── Blogs ──
  const blog1 = await prisma.blog.create({
    data: {
      slug: "egypt-desert-safari-cost-budget-guide",
      titleEn: "Egypt Desert Safari Cost: How Much Does a Desert Trip Really Cost?",
      titleAr: "تكلفة سفاري صحراء مصر: كم تكلّف الرحلة الصحراوية فعلاً؟",
      contentEn: "<h2>Desert Safari Pricing Guide</h2><p>White Desert 2-day private tour: $150-250 per person. White & Black Desert 3-day: $250-400 per person. 7-day camel trekking: $900-1,500 per person. 7-day deep desert crossing: $1,200-2,500 per person.</p><p>All trips include hotel pickup/drop-off from Cairo, 4x4 vehicles, professional guides, all meals, camping equipment, national park fees, and satellite communication for safety.</p>",
      contentAr: "<h2>دليل أسعار سفاري الصحراء</h2><p>جولة الصحراء البيضاء يومين خاصة: 150-250 دولار للفرد. الصحراء البيضاء والسوداء 3 أيام: 250-400 دولار للفرد. رحلة الجمال 7 أيام: 900-1500 دولار للفرد.</p><p>جميع الرحلات تشمل الاستلام والتوصيل من فندق القاهرة، سيارات دفع رباعي، مرشدين محترفين، جميع الوجبات، ومعدات التخييم.</p>",
      excerptEn: "A comprehensive guide to Egyptian desert safari costs, from budget-friendly to premium experiences.",
      excerptAr: "دليل شامل لتكلفة سفاري الصحراء المصرية، من الخيارات الاقتصادية إلى التجارب الفاخرة.",
      author: "Bedouin Trails Team",
      isPublished: true,
      publishedAt: new Date(),
    },
  });

  const blog2 = await prisma.blog.create({
    data: {
      slug: "is-egypt-desert-safe-to-visit",
      titleEn: "Is Egypt's Desert Safe? Honest Answers from Expert Desert Guides (2026)",
      titleAr: "هل صحراء مصر آمنة؟ دليل صادق من مرشدين محلّيين خبراء",
      contentEn: "<h2>Safety in Egypt's Western Desert</h2><p>The Western Desert in Egypt, including the White Desert National Park, has an excellent tourism safety record with zero security incidents affecting tourists over 15 years.</p><p>Vehicle safety: Toyota Land Cruisers with experienced Bedouin drivers, regular maintenance, and satellite phones for deep desert routes. Health: dehydration preventable through 3-4 liters daily water. October-April is the optimal season.</p>",
      contentAr: "<h2>السلامة في الصحراء الغربية بمصر</h2><p>تتمتع الصحراء الغربية في مصر، بما في ذلك محمية الصحراء البيضاء، بسجل ممتاز في السلامة السياحية مع عدم وجود حوادث أمنية أثرت على السياح لأكثر من 15 عامًا.</p><p>سلامة المركبات: تويوتا لاند كروزر مع سائقين بدو ذوي خبرة وصيانة دورية وهواتف أقمار صناعية.</p>",
      excerptEn: "Honest safety guide for Egypt's Western Desert from local Bedouin guides with 15+ years of experience.",
      excerptAr: "دليل صادق للسلامة في الصحراء الغربية المصرية من مرشدين بدو محليين بخبرة تزيد عن 15 عامًا.",
      author: "Bedouin Trails Team",
      isPublished: true,
      publishedAt: new Date(),
    },
  });
  console.log("✓ 2 blogs created");

  console.log("\n✅ Database seeded successfully!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
