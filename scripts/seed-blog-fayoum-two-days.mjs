/**
 * Blog: Fayoum in Two Days: Your Quick Escape from Cairo's Chaos
 * Slug: fayoum-two-days-cairo-escape
 * Run with: node scripts/seed-blog-fayoum-two-days.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr = "الفيوم في يومين: هروبتك السريعة من زحمة القاهرة";

const metaTitleAr =
  "الفيوم في يومين: هروبتك السريعة من زحمة القاهرة | Bedouin Trails (2026)";

const metaDescAr =
  "دليلك إلى رحلة الفيوم في يومين — وادي الريان، بحيرة قارون، وادي الحيتان، والغابة المتحجرة، على بُعد أقل من ساعتين من القاهرة.";

const excerptAr =
  "هناك نوع محدد من الإرهاق لا يصنعه إلا زحام القاهرة. الفيوم تضم شلالات وبحيرة صحراوية وغابة متحجرة وأحد أهم مواقع الحفريات على الأرض — كل ذلك على بُعد أقل من ساعتين من العاصمة.";

const contentAr = `<p>هناك نوع محدد من الإرهاق لا يصنعه إلا زحام القاهرة. ليس إرهاقًا جسديًا — بل ضجيجًا ذهنيًا بطيئًا يتراكم بعد أسابيع من أبواق السيارات، وضوضاء الإنشاءات، وذلك الفوضى الخاصة لمدينة يعيش فيها عشرون مليون إنسان يمارسون حياتهم كلهم في آنٍ واحد. النصيحة المعتادة هي حجز تذكرة طيران إلى مكان ما و"الهروب بعيدًا". لكن قلة يدركون أن الحل قد يكون على بُعد أقل من ساعتين فقط.</p>

<p>لا يُتحدث عن الفيوم بالقدر الذي يُتحدث به عن الأهرامات أو ساحل البحر الأحمر، وهذا غريب بعض الشيء، لأنها تضم شلالات، وبحيرة صحراوية ضخمة، وغابة متحجرة، وأحد أهم مواقع الحفريات على كوكب الأرض — كل ذلك في رحلة قصيرة واحدة من العاصمة. إنه ذلك النوع من الأماكن التي يعتبرها أهل القاهرة زر إعادة ضبط موثوقًا لعطلة نهاية الأسبوع، بينما لا يسمع معظم زوار مصر لأول مرة باسمها على الإطلاق.</p>

<h2>لماذا تنجح الفيوم كرحلة قصيرة</h2>
<p>معظم وجهات مصر الكبرى تتطلب التزامًا زمنيًا حقيقيًا. الأقصر وأسوان تعنيان رحلات طيران أو قيادة طويلة. برامج الصحراء الأبعد غربًا تعني عدة أيام على الأقل حتى تستحق المسافة المقطوعة. الفيوم مختلفة — قريبة من القاهرة بما يكفي لتقف أمام شلال في بداية بعد الظهر من نفس اليوم الذي غادرت فيه، ما يجعلها أحد الأماكن القليلة في البلاد التي تنجح فيها "هروبة اليومين" فعلًا كما يُوصف لها، لا يومين يُقضى معظمهما في الذهاب والعودة.</p>
<p>هذا القرب نفسه يعني أن التباين يصلك بسرعة. تترك خلفك الزحام والخرسانة، وفي غضون نحو تسعين دقيقة فقط تجد نفسك أمام مشهد طبيعي لا يبدو أنه قريب على الإطلاق من مدينة يعيش فيها عشرون مليون إنسان.</p>

<h2>ما الذي تجده فعلًا في الفيوم</h2>
<p><strong>وادي الريان</strong> هو الوجهة الرئيسية، ولسبب وجيه. إنها منطقة محمية مبنية حول بحيرتين اصطناعيتين متصلتين بشلالات مصر الوحيدة — ليست هائلة الحجم بالمقاييس العالمية، لكنها مبهرة فعلًا وسط المحيط الصحراوي من حولها، وصوت المياه الجارية في قلب هذه الأرض يبدو شبه مربك بأفضل طريقة ممكنة. البحيرتان مقصد شهير للسباحة والتجديف والتزلج على الكثبان الرملية المحيطة بهما، والمنطقة المحمية بأكملها واحدة من أفضل الأماكن في البلاد لمشاهدة غروب الشمس فوق مياه مفتوحة محاطة بالصحراء من كل جانب آخر.</p>
<p><strong>بحيرة قارون</strong> إحدى أقدم البحيرات الطبيعية في العالم، وتقع عند حافة منخفض الفيوم. إنها محطة مهمة للطيور المهاجرة، ما يجعلها مكانًا هادئًا لكنه مكافئ فعلًا لمراقبة الطيور خارج أشهر الصيف الحار. للبحيرة طابع مالح قليلًا، سريالي قليلًا — جسم مائي مفتوح وكبير محاط بالصحراء من كل الجهات تقريبًا.</p>
<p><strong>وادي الحيتان</strong> هو ما يُدهش الزوار أكثر من أي شيء آخر. إنه موقع تراث عالمي لليونسكو يضم بعضًا من أفضل حفريات محفوظة على وجه الأرض لحيتان بدائية كانت لا تزال تمتلك أطرافًا خلفية — دليل مادي على التحول التطوري من ثدييات برية إلى مخلوقات بحرية، منتشرة عبر مشهد صحراوي قبل ملايين السنين من أن تصبح هذه الأرض صحراء أصلًا. المشي بين هياكل عظمية متحجرة بحجم الحافلات، في قلب ما هو اليوم أرض جافة تمامًا، من ذلك النوع من التجارب التي تعيد تشكيل فهمك للزمن العميق.</p>
<p><strong>الغابة المتحجرة والتشكيلات الصخرية المحيطة بها</strong> تكمل السيرة الجيولوجية الغريبة للمنطقة — جذوع أشجار قديمة تحولت إلى حجر على مدى ملايين السنين، منتشرة عبر صحراء مفتوحة، إلى جانب تشكيلات صخرية نحتتها الرياح تبدو شبه منحوتة بتصميم متعمد.</p>

<h2>كيف يسير اليومان فعليًا</h2>
<p>رحلة قصيرة كهذه تنجح بشكل أفضل ببنية مرنة لكن مقصودة. اليوم الأول عادة يُبنى حول وادي الريان — الوصول في بداية إلى منتصف بعد الظهر، وقت كافٍ لرؤية الشلالات، والنزول إلى الماء أو الصعود على الكثبان، ومشاهدة الغروب من شاطئ البحيرة قبل الاستقرار للمبيت قريبًا، غالبًا تحت سماء مظلمة فعلًا بنجوم لا وجود لها ببساطة داخل التلوث الضوئي للقاهرة. اليوم الثاني ينتقل نحو بحيرة قارون ووادي الحيتان، مع تأجيل وادي الحفريات عادة إلى ساعات الصباح الأكثر برودة قبل القيادة العائدة إلى القاهرة بعد الظهر.</p>
<p>هذا ليس برنامجًا مزدحمًا ومرهقًا. وهذا بالضبط هو المقصود. تنجح الفيوم تحديدًا لأنها لا تحاول حشر كل شيء — تمنحك يومين بلا استعجال، وتغييرًا حقيقيًا في المشهد، وطريق عودة قصيرًا بما يكفي لئلا تقضي وقت "راحتك" في التنقل.</p>

<h2>أفضل وقت للذهاب وماذا تُحضر</h2>
<p>تصلح الفيوم كوجهة تقريبًا طوال العام، وهذا جزء مما يجعلها خيار نهاية أسبوع موثوقًا، لكن الفصول الانتقالية — من الخريف حتى الربيع، تقريبًا من أكتوبر إلى أبريل — أكثر راحة فعلًا. صيف المنخفض قد يصبح شديد الحرارة نهارًا، ما يجعل ساعات الظهيرة في وادي الحيتان قاسية بشكل خاص نظرًا لقلة الظل عبر موقع الحفريات. في المقابل، صباحات الشتاء قد تكون باردة بما يكفي لتستحق اصطحاب سترة خفيفة رغم أنك على بُعد ساعتين فقط من مناخ القاهرة الأكثر اعتدالًا. بضع أساسيات عملية تصنع فرقًا كبيرًا: حذاء متين للمشي عبر تضاريس وادي الحفريات غير المستوية، وحماية من الشمس بغض النظر عن الفصل لأن الصحراء المفتوحة لا توفر ظلًا حقيقيًا، وملابس سباحة إن كانت خطة النزول إلى بحيرات وادي الريان واردة. المصورون تحديدًا يُقيّمون الفيوم عاليًا — فمزيج المياه والكثبان والتشكيلات الصخرية الغريبة في منطقة واحدة مدمجة يمنحك تنوعًا بصريًا لكل كيلومتر أكبر من أي مكان آخر قريب من القاهرة بهذا القدر.</p>

<h2>لمن تناسب هذه الرحلة فعلًا</h2>
<p>هذه الرحلة مناسبة جدًا لسكان القاهرة والمقيمين الأجانب الذين يحتاجون إعادة ضبط دون حرق أيام إجازتهم في لوجستيات السفر. كما تناسب زوار مصر لأول مرة الذين لديهم أيام قليلة إضافية قبل أو بعد برنامج أطول في وادي النيل أو الصحراء، ويريدون إضافة شيء مختلف فعلًا دون تعطيل خططهم الرئيسية. العائلات أيضًا تنجح هنا جيدًا — الإيقاع هادئ، والأنشطة تتراوح بين السلبية (الجلوس فقط بجانب الماء) والنشطة (التزلج على الرمال، التجديف)، وهناك تنوع كافٍ بحيث لا تشعر رحلة اليومين وكأنها قيادة طويلة واحدة للنظر إلى شيء واحد.</p>
<p>أما المسافرون الباحثون عن طاقة بعثة صحراوية قاسية — تريكنج بالجمال لعدة أيام أو تخييم عميق في الصحراء الغربية — فستكون الفيوم أقل ملاءمة لهم. فهي أهدأ من ذلك، أقرب إلى منتجع طبيعي مع قليل من الجيولوجيا الغريبة فعلًا، لا بعثة صحراوية حقيقية.</p>

<h2>نصيحة أخيرة: لا تُقارنها بالصحراء الغربية</h2>
<p>من السهل أحيانًا أن تدخل رحلة الفيوم بتوقعات مستعارة من برامج الصحراء الغربية الأكثر شهرة — تخييم طويل، مسافات شاسعة، عزلة كاملة. الفيوم تجربة مختلفة بطبيعتها، وأفضل طريقة للاستمتاع بها هي الدخول إليها بتوقعاتها الخاصة لا توقعات رحلة أخرى. إنها أقرب إلى محمية طبيعية مدمجة بمزيج نادر من الماء والصحراء والجيولوجيا الغريبة، لا نسخة مصغرة من بعثة صحراوية طويلة.</p>
<p>هذا بالضبط ما يجعلها إضافة ذكية لأي برنامج سفر إلى مصر، سواء كانت رحلتك الأولى أو زيارتك العاشرة: مساحة صغيرة الحجم، كبيرة التنوع، قريبة بما يكفي لتكون قرارًا سهلًا، ومختلفة بما يكفي لتستحق هذا القرار.</p>

<h2>إعادة الضبط أقرب مما تتخيل</h2>
<p>معظم من يخطط لرحلة "للهروب من كل شيء" يلجأ افتراضيًا إلى المسافة — رحلة طيران، بلد مختلف، أقصى قدر من الانفصال عن الحياة اليومية. تثبت الفيوم أن الحل الأفضل أحيانًا هو القرب المُحسَن: قريبة بما يكفي لتكون ممكنة فعلًا ضمن جدول ضيق، ومختلفة بما يكفي لتعيد ضبط ذهنك فعلًا، ومثيرة للاهتمام بما يكفي — حفريات حيتان قديمة، شلالات في قلب الصحراء، غابة متحجرة — بحيث لا تشعر بأنها جائزة ترضية بجانب وجهات مصر الأكبر والأشهر.</p>

<p>وفي النهاية، أفضل مديح يمكن أن توجَّه لرحلة كهذه ليس "لا يُصدَّق"، بل "عملي ويستحق التكرار" — وهذا بالضبط ما تقدمه الفيوم لمن يحتاج استراحة حقيقية دون أن يقلب حياته رأسًا على عقب من أجلها.</p>

<p><a href="/ar/journeys/2-days-fayoum-oasis-program"><strong>شاهد برنامج الفيوم الكامل في يومين ←</strong></a></p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "Fayoum in Two Days: Your Quick Escape from Cairo's Chaos";

const metaTitleEn =
  "Fayoum in Two Days: Your Quick Escape from Cairo's Chaos | Bedouin Trails (2026)";

const metaDescEn =
  "Your guide to a 2-day Fayoum trip — Wadi El Rayan waterfalls, Lake Qarun, Valley of the Whales, and a petrified forest, all less than two hours from Cairo.";

const excerptEn =
  "There's a specific kind of tired that only Cairo traffic can produce. Fayoum has waterfalls, a desert lake, a petrified forest, and one of the most important fossil sites on the planet — all within a single short trip from the capital.";

const contentEn = `<p>There's a specific kind of tired that only Cairo traffic can produce. It's not physical exhaustion — it's the slow mental static that builds up after weeks of car horns, construction noise, and the particular chaos of a city of twenty million people going about its business all at once. The usual advice is to book a flight somewhere and "get away." Fewer people realize the fix might be less than two hours down the road.</p>

<p>Fayoum doesn't get talked about the way the pyramids or the Red Sea coast do, and that's a little strange, because it has waterfalls, a massive desert lake, a petrified forest, and one of the most important fossil sites on the planet — all within a single short trip from the capital. It's the kind of place that locals in the know treat as a reliable weekend reset button, while most first-time visitors to Egypt never hear its name at all.</p>

<h2>Why Fayoum Works as a Short Trip</h2>
<p>Most of Egypt's major destinations ask for a real time commitment. Luxor and Aswan mean flights or long drives. The desert programs further west mean multiple days minimum just to make the distance worthwhile. Fayoum is different — it's close enough to Cairo that you can be standing at a waterfall by early afternoon on the same day you left, which makes it one of the only places in the country where a genuine "two-day escape" actually works as described, rather than being two days that are mostly spent getting there and back.</p>
<p>That proximity also means the contrast hits fast. You leave behind traffic and concrete, and within roughly ninety minutes you're looking at a landscape that doesn't feel like it belongs anywhere near a city of twenty million people.</p>

<h2>What's Actually in Fayoum</h2>
<p><strong>Wadi El Rayan</strong> is the headline attraction, and for good reason. It's a protected area built around two artificial lakes connected by Egypt's only waterfalls — not enormous by global standards, but genuinely striking set against the surrounding desert, and the sound of running water in the middle of this terrain feels almost disorienting in the best way. The lakes themselves are popular for swimming, kayaking, and sandboarding on the dunes that border them, and the whole protected area is one of the better spots in the country for watching the sun set over open water with nothing but desert on every other side.</p>
<p><strong>Lake Qarun</strong> is one of the oldest natural lakes in the world and sits at the edge of the Fayoum depression. It's a major stopover for migratory birds, which makes it a quiet but genuinely rewarding spot for birdwatching outside of the main summer heat. The lake has a slightly salty, slightly surreal quality — a large open body of water surrounded almost entirely by desert.</p>
<p><strong>Wadi Al-Hitan (Valley of the Whales)</strong> is the one that surprises people most. It's a UNESCO World Heritage Site containing some of the best-preserved fossils on Earth of early whales that still had hind legs — physical evidence of the evolutionary transition from land mammal to sea creature, scattered across a desert landscape millions of years before any of this was desert at all. Walking among fossilized skeletons the size of buses, in the middle of what is now bone-dry terrain, is the kind of thing that reframes how you think about deep time.</p>
<p><strong>The petrified forest and surrounding rock formations</strong> round out the area's strange geological resume — ancient tree trunks turned to stone over millions of years, scattered across open desert, alongside wind-carved rock formations that look almost deliberately sculpted.</p>

<h2>How the Two Days Actually Flow</h2>
<p>A short trip like this works best with a loose but intentional structure. Day one is usually built around Wadi El Rayan — arriving by early-to-mid afternoon, enough time to see the waterfalls, get on the water or into the dunes, and watch the sunset from the lakeshore before settling in for the night nearby, often under a genuinely dark sky with the kind of stars that simply don't exist within Cairo's light pollution. Day two shifts toward Lake Qarun and Wadi Al-Hitan, with the fossil valley usually saved for the cooler morning hours before the return drive to Cairo in the afternoon.</p>
<p>It's not a packed, exhausting itinerary. That's rather the point. Fayoum works precisely because it doesn't try to cram in everything — it gives you two unhurried days, a genuine change of scenery, and a trip home short enough that you're not spending your "recovery" time commuting.</p>

<h2>Best Time to Go, and What to Bring</h2>
<p>Fayoum is workable almost year-round, which is part of what makes it such a reliable weekend option, but the shoulder seasons — autumn through spring, roughly October to April — are genuinely more comfortable. Summer in the depression can get intensely hot during the day, which makes the midday hours at Wadi Al-Hitan particularly rough since there's little shade across the fossil site. Winter mornings, by contrast, can be cool enough that a light jacket is worth packing even though you're only a couple of hours from Cairo's milder microclimate. A few practical essentials go a long way: sturdy shoes for walking across the fossil valley's loose terrain, sun protection regardless of season since the open desert offers no real shade, and a swimsuit if a dip in Wadi El Rayan's lakes is on the agenda. Photographers in particular tend to rate Fayoum highly — the combination of water, dunes, and strange rock formations in a single compact area gives you more visual variety per kilometer than almost anywhere else this close to Cairo.</p>

<h2>Who This Trip Actually Suits</h2>
<p>This is a strong fit for Cairo residents and long-term expats who need a reset without burning vacation days on travel logistics. It also works well for first-time visitors to Egypt who have a few spare days before or after a longer Nile Valley or desert itinerary and want to add something genuinely different without derailing their main plans. Families tend to do well here too — the pace is gentle, the activities range from passive (just sitting by the water) to active (sandboarding, kayaking), and there's enough variety that a two-day trip doesn't feel like one long drive to look at one thing.</p>
<p>It's a weaker fit for travelers chasing hardcore desert expedition energy — multi-day camel trekking or deep Western Desert camping. Fayoum is calmer than that, closer to a nature retreat with some genuinely strange geology thrown in than a true desert expedition.</p>

<h2>The Reset That's Closer Than You Think</h2>
<p>Most people planning a trip to "get away from it all" default to distance — a flight, a different country, maximum separation from daily life. Fayoum makes the case that sometimes the better fix is proximity done right: close enough to actually be feasible on a tight schedule, different enough that it genuinely resets your head, and interesting enough — fossils of ancient whales, waterfalls in the middle of the desert, a petrified forest — that it doesn't feel like a consolation prize next to Egypt's bigger, more famous destinations.</p>

<p><a href="/en/journeys/2-days-fayoum-oasis-program"><strong>See the full 2-Day Fayoum Oasis Program →</strong></a></p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Le Fayoum en Deux Jours : Votre Escapade Rapide Loin du Chaos du Caire",
  de: "Fayoum in Zwei Tagen: Ihr Schneller Ausbruch aus dem Chaos von Kairo",
  es: "Fayum en Dos Dias: Tu Escapada Rapida del Caos de El Cairo",
  it: "Fayoum in Due Giorni: La Tua Fuga Rapida dal Caos del Cairo",
  nl: "Fayoum in Twee Dagen: Uw Snelle Ontsnapping aan de Chaos van Caïro",
  pt: "Fayum em Dois Dias: Sua Fuga Rapida do Caos do Cairo",
  zh: "法尤姆两日游：逃离开罗喧嚣的快速之旅",
};

const metaTitleI18n = {
  fr: "Le Fayoum en Deux Jours : Escapade Rapide depuis le Caire | Bedouin Trails (2026)",
  de: "Fayoum in Zwei Tagen: Schneller Ausbruch aus Kairo | Bedouin Trails (2026)",
  es: "Fayum en Dos Dias: Escapada Rapida desde El Cairo | Bedouin Trails (2026)",
  it: "Fayoum in Due Giorni: Fuga Rapida dal Cairo | Bedouin Trails (2026)",
  nl: "Fayoum in Twee Dagen: Snelle Ontsnapping uit Caïro | Bedouin Trails (2026)",
  pt: "Fayum em Dois Dias: Fuga Rapida do Cairo | Bedouin Trails (2026)",
  zh: "法尤姆两日游：从开罗出发的快速逃离 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Votre guide pour un voyage de 2 jours au Fayoum — cascades de Wadi El Rayan, lac Qarun, Vallee des Baleines et foret petrifiee, a moins de deux heures du Caire.",
  de: "Ihr Leitfaden fur einen 2-Tage-Trip nach Fayoum — Wadi El Rayan Wasserfalle, Qarun-See, Tal der Wale und versteinerter Wald, weniger als zwei Stunden von Kairo.",
  es: "Tu guia para un viaje de 2 dias a Fayum — cascadas de Wadi El Rayan, lago Qarun, Valle de las Ballenas y bosque petrificado, a menos de dos horas de El Cairo.",
  it: "La tua guida per un viaggio di 2 giorni a Fayoum — cascate di Wadi El Rayan, lago Qarun, Valle delle Balene e foresta pietrificata, a meno di due ore dal Cairo.",
  nl: "Uw gids voor een 2-daagse trip naar Fayoum — Wadi El Rayan watervallen, Qarun-meer, Vallei der Walvissen en versteend woud, op minder dan twee uur van Caïro.",
  pt: "Seu guia para uma viagem de 2 dias ao Fayum — cachoeiras de Wadi El Rayan, lago Qarun, Vale das Baleias e floresta petrificada, a menos de duas horas do Cairo.",
  zh: "法尤姆两日游指南——瓦迪拉扬瀑布、卡伦湖、鲸鱼谷和石化森林，距开罗不到两小时。",
};

const excerptI18n = {
  fr: "Il y a un type specifique de fatigue que seul le trafic du Caire peut produire. Le Fayoum a des cascades, un lac desertique, une foret petrifiee et l'un des sites fossiliferes les plus importants de la planete — le tout a moins de deux heures de la capitale.",
  de: "Es gibt eine bestimmte Art von Mudigkeit, die nur der Kairoer Verkehr erzeugen kann. Fayoum hat Wasserfalle, einen Wustensee, einen versteinerten Wald und eine der wichtigsten Fossilienstätten der Welt — alles weniger als zwei Stunden von der Hauptstadt entfernt.",
  es: "Hay un tipo especifico de cansancio que solo el trafico de El Cairo puede producir. Fayum tiene cascadas, un lago desertico, un bosque petrificado y uno de los sitios fosiles mas importantes del planeta — todo a menos de dos horas de la capital.",
  it: "C'e un tipo specifico di stanchezza che solo il traffico del Cairo puo produrre. Fayoum ha cascate, un lago desertico, una foresta pietrificata e uno dei siti fossili piu importanti del pianeta — il tutto a meno di due ore dalla capitale.",
  nl: "Er is een specifiek soort moeheid dat alleen het verkeer van Caïro kan veroorzaken. Fayoum heeft watervallen, een woestijnmeer, een versteend woud en een van de belangrijkste fossielen-vindplaatsen ter wereld — allemaal op minder dan twee uur van de hoofdstad.",
  pt: "Ha um tipo especifico de cansaco que so o transito do Cairo pode produzir. Fayum tem cachoeiras, um lago desertico, uma floresta petrificada e um dos sitios fosseis mais importantes do planeta — tudo a menos de duas horas da capital.",
  zh: "有一种特别的疲惫只有开罗的交通才能产生。法尤姆有瀑布、沙漠湖泊、石化森林和地球上最重要的化石遗址之一——一切都距首都不到两小时。",
};

const contentI18n = {
  fr: `<p>Il y a un type specifique de fatigue que seul le trafic du Caire peut produire. Ce n'est pas de l'epuisement physique — c'est un bruit mental lent qui s'accumule apres des semaines de klaxons, de bruit de chantier et du chaos particulier d'une ville de vingt millions d'habitants. Le conseil habituel est de prendre un avion pour "s'evader". Peu de gens realisent que la solution pourrait etre a moins de deux heures de route.</p>

<p>Le Fayoum n'est pas mentionne comme les pyramides ou la cote de la Mer Rouge, et c'est un peu etrange, car il possede des cascades, un immense lac desertique, une foret petrifiee et l'un des sites fossiliferes les plus importants de la planete — le tout en un seul court trajet depuis la capitale.</p>

<h2>Pourquoi le Fayoum Fonctionne comme Court Sejour</h2>
<p>La plupart des grandes destinations egyptiennes demandent un reel investissement en temps. Le Fayoum est different — assez proche du Caire pour se retrouver devant une cascade en debut d'apres-midi le jour meme du depart.</p>

<h2>Ce que le Fayoum Offre Reellement</h2>
<p><strong>Wadi El Rayan</strong> est l'attraction principale. C'est une zone protegee autour de deux lacs artificiels relies par les seules cascades d'Egypte. <strong>Le lac Qarun</strong> est l'un des plus anciens lacs naturels au monde. <strong>Wadi Al-Hitan (Vallee des Baleines)</strong> est un site du patrimoine mondial de l'UNESCO avec des fossiles de baleines primitives. <strong>La foret petrifiee</strong> complete le profil geologique unique de la region.</p>

<h2>Comment se Deroulent les Deux Jours</h2>
<p>Le premier jour est generalement consacre a Wadi El Rayan — arrivee en debut d'apres-midi, cascades, activites nautiques ou dunes, coucher de soleil depuis la rive. Le deuxieme jour se tourne vers le lac Qarun et Wadi Al-Hitan, avec la vallee des fossiles reservee aux heures fraiches du matin avant le retour au Caire.</p>

<h2>Meilleure Periode et Quoi Apporter</h2>
<p>Le Fayoum est praticable presque toute l'annee, mais les saisons intermediaires — d'octobre a avril — sont plus confortables. Prevoyez des chaussures solides, une protection solaire et un maillot de bain.</p>

<h2>Pour Qui Ce Voyage Convient</h2>
<p>Ideal pour les residents du Caire et les expatries qui ont besoin d'un reset. Convient egalement aux premiers visiteurs en Egypte avec quelques jours libres. Moins adapte aux voyageurs en quete d'expeditions sahariennes extremes.</p>

<h2>Le Reset Plus Proche que Vous ne le Pensez</h2>
<p>Le Fayoum prouve que parfois la meilleure solution est la proximite bien faite : assez proche pour etre faisable, assez different pour vraiment decompresser, et assez interessant pour ne pas se sentir comme un prix de consolation.</p>

<p><a href="/fr/journeys/2-days-fayoum-oasis-program"><strong>Voir le programme complet du Fayoum en 2 jours →</strong></a></p>`,

  de: `<p>Es gibt eine bestimmte Art von Mudigkeit, die nur der Verkehr in Kairo erzeugen kann. Keine korperliche Erschopfung — sondern ein langsames mentales Rauschen, das sich nach Wochen von Hupen, Baularm und dem besonderen Chaos einer Stadt mit zwanzig Millionen Einwohnern aufbaut. Der ubliche Rat ist, einen Flug zu buchen und "zu entfliehen". Wenige erkennen, dass die Losung weniger als zwei Stunden entfernt sein konnte.</p>

<p>Uber Fayoum wird nicht so gesprochen wie uber die Pyramiden oder die Kuste des Roten Meeres, und das ist etwas seltsam, denn es hat Wasserfalle, einen riesigen Wustensee, einen versteinerten Wald und eine der wichtigsten Fossilienstätten der Welt.</p>

<h2>Warum Fayoum als Kurztrip Funktioniert</h2>
<p>Die meisten grossen Reiseziele Agyptens erfordern ein echtes Zeitinvestment. Fayoum ist anders — nah genug an Kairo, um am selben Tag am Wasserfall zu stehen.</p>

<h2>Was Fayoum Tatsachlich Bietet</h2>
<p><strong>Wadi El Rayan</strong> ist die Hauptattraktion. <strong>Der Qarun-See</strong> ist einer der altesten naturlichen Seen der Welt. <strong>Wadi Al-Hitan (Tal der Wale)</strong> ist eine UNESCO-Welterbestatte mit Fossilien primitiver Wale. <strong>Der versteinerte Wald</strong> vervollstandigt das geologische Profil.</p>

<h2>Wie die Zwei Tage Ablaufen</h2>
<p>Tag eins dreht sich um Wadi El Rayan — Ankunft am fruhen Nachmittag, Wasserfalle, Sonnenuntergang am See. Tag zwei fuhrt zum Qarun-See und Wadi Al-Hitan, mit der Fossilstatte in den kuhleren Morgenstunden.</p>

<h2>Beste Reisezeit und was Einzupacken ist</h2>
<p>Fayoum funktioniert fast ganzjahrig, aber Oktober bis April sind am angenehmsten. Feste Schuhe, Sonnenschutz und Badesachen mitnehmen.</p>

<h2>Fur Wen Diese Reise Passt</h2>
<p>Ideal fur Kairo-Bewohner und Expats, die einen Reset brauchen. Auch gut fur Erstbesucher mit ein paar freien Tagen. Weniger geeignet fur Hardcore-Wustenexpeditionen.</p>

<h2>Der Reset, der Naher Ist als Sie Denken</h2>
<p>Fayoum zeigt, dass manchmal die bessere Losung richtig gemachte Nahe ist: nah genug, um machbar zu sein, anders genug, um den Kopf frei zu bekommen.</p>

<p><a href="/de/journeys/2-days-fayoum-oasis-program"><strong>Sehen Sie das vollstandige 2-Tage Fayoum-Programm →</strong></a></p>`,

  es: `<p>Hay un tipo especifico de cansancio que solo el trafico de El Cairo puede producir. No es agotamiento fisico — es un ruido mental lento que se acumula despues de semanas de bocinas, ruido de construccion y el caos particular de una ciudad de veinte millones de personas. El consejo habitual es reservar un vuelo y "escapar". Pocos se dan cuenta de que la solucion podria estar a menos de dos horas por carretera.</p>

<p>No se habla de Fayum como de las piramides o la costa del Mar Rojo, y eso es un poco extrano, porque tiene cascadas, un enorme lago desertico, un bosque petrificado y uno de los sitios fosiles mas importantes del planeta — todo en un solo viaje corto desde la capital.</p>

<h2>Por Que Fayum Funciona como Viaje Corto</h2>
<p>La mayoria de los grandes destinos de Egipto requieren un compromiso de tiempo real. Fayum es diferente — lo suficientemente cerca de El Cairo para estar frente a una cascada a primera hora de la tarde del mismo dia que saliste.</p>

<h2>Que Hay Realmente en Fayum</h2>
<p><strong>Wadi El Rayan</strong> es la atraccion principal. <strong>El lago Qarun</strong> es uno de los lagos naturales mas antiguos del mundo. <strong>Wadi Al-Hitan (Valle de las Ballenas)</strong> es Patrimonio Mundial de la UNESCO con fosiles de ballenas primitivas. <strong>El bosque petrificado</strong> completa el perfil geologico unico de la zona.</p>

<h2>Como Fluyen los Dos Dias</h2>
<p>El primer dia se centra en Wadi El Rayan — llegada a primera hora de la tarde, cascadas, actividades acuaticas o dunas, atardecer. El segundo dia se dirige al lago Qarun y Wadi Al-Hitan, con el valle de fosiles reservado para las horas frescas de la manana.</p>

<h2>Mejor Epoca y Que Llevar</h2>
<p>Fayum funciona casi todo el ano, pero de octubre a abril es mas comodo. Lleva zapatos resistentes, proteccion solar y traje de bano.</p>

<h2>Para Quien Es Este Viaje</h2>
<p>Ideal para residentes de El Cairo y expatriados que necesitan un reinicio. Tambien funciona para visitantes primerizos con dias libres. Menos adecuado para expediciones deserticas extremas.</p>

<h2>El Reinicio Mas Cerca de lo que Crees</h2>
<p>Fayum demuestra que a veces la mejor solucion es la proximidad bien hecha: lo suficientemente cerca para ser factible, lo suficientemente diferente para reiniciarte.</p>

<p><a href="/es/journeys/2-days-fayoum-oasis-program"><strong>Ver el programa completo de Fayum en 2 dias →</strong></a></p>`,

  it: `<p>C'e un tipo specifico di stanchezza che solo il traffico del Cairo puo produrre. Non e esaurimento fisico — e un lento rumore mentale che si accumula dopo settimane di clacson, rumori di cantiere e il caos particolare di una citta di venti milioni di persone. Il consiglio solito e prenotare un volo e "scappare". Pochi si rendono conto che la soluzione potrebbe essere a meno di due ore di strada.</p>

<p>Di Fayoum non si parla come delle piramidi o della costa del Mar Rosso, e questo e un po' strano, perche ha cascate, un enorme lago desertico, una foresta pietrificata e uno dei siti fossili piu importanti del pianeta — il tutto in un unico breve viaggio dalla capitale.</p>

<h2>Perche Fayoum Funziona come Breve Viaggio</h2>
<p>La maggior parte delle grandi destinazioni egiziane richiede un vero impegno di tempo. Fayoum e diverso — abbastanza vicino al Cairo da trovarsi davanti a una cascata nel primo pomeriggio dello stesso giorno.</p>

<h2>Cosa C'e Davvero a Fayoum</h2>
<p><strong>Wadi El Rayan</strong> e l'attrazione principale. <strong>Il lago Qarun</strong> e uno dei laghi naturali piu antichi del mondo. <strong>Wadi Al-Hitan (Valle delle Balene)</strong> e Patrimonio UNESCO con fossili di balene primitive. <strong>La foresta pietrificata</strong> completa il profilo geologico unico.</p>

<h2>Come Scorrono i Due Giorni</h2>
<p>Il primo giorno si concentra su Wadi El Rayan — arrivo nel primo pomeriggio, cascate, tramonto dal lago. Il secondo giorno si sposta verso il lago Qarun e Wadi Al-Hitan, con la valle dei fossili riservata alle ore mattutine piu fresche.</p>

<h2>Periodo Migliore e Cosa Portare</h2>
<p>Fayoum funziona quasi tutto l'anno, ma da ottobre ad aprile e piu confortevole. Portate scarpe robuste, protezione solare e costume da bagno.</p>

<h2>Per Chi e Questo Viaggio</h2>
<p>Ideale per residenti del Cairo ed expatriati che hanno bisogno di un reset. Adatto anche ai primi visitatori con qualche giorno libero. Meno adatto per spedizioni desertiche estreme.</p>

<h2>Il Reset Piu Vicino di Quanto Pensi</h2>
<p>Fayoum dimostra che a volte la soluzione migliore e la prossimita fatta bene: abbastanza vicino da essere fattibile, abbastanza diverso da resettare davvero la mente.</p>

<p><a href="/it/journeys/2-days-fayoum-oasis-program"><strong>Vedi il programma completo di Fayoum in 2 giorni →</strong></a></p>`,

  nl: `<p>Er is een specifiek soort moeheid dat alleen het verkeer van Caïro kan veroorzaken. Geen lichamelijke uitputting — maar een traag mentaal geruis dat zich opbouwt na weken van claxons, bouwlawaai en de bijzondere chaos van een stad met twintig miljoen inwoners. Het gebruikelijke advies is een vlucht boeken en "ontsnappen". Weinigen beseffen dat de oplossing misschien minder dan twee uur verderop ligt.</p>

<p>Over Fayoum wordt niet gesproken zoals over de piramides of de Rode Zeekust, en dat is een beetje vreemd, want het heeft watervallen, een enorm woestijnmeer, een versteend woud en een van de belangrijkste fossielenvindplaatsen ter wereld.</p>

<h2>Waarom Fayoum Werkt als Kort Uitje</h2>
<p>De meeste grote Egyptische bestemmingen vereisen een serieuze tijdsinvestering. Fayoum is anders — dicht genoeg bij Caïro om dezelfde dag nog bij een waterval te staan.</p>

<h2>Wat Fayoum Werkelijk Biedt</h2>
<p><strong>Wadi El Rayan</strong> is de hoofdattractie. <strong>Het Qarun-meer</strong> is een van de oudste natuurlijke meren ter wereld. <strong>Wadi Al-Hitan (Vallei der Walvissen)</strong> is UNESCO-werelderfgoed met fossielen van primitieve walvissen. <strong>Het verstende woud</strong> maakt het geologische profiel compleet.</p>

<h2>Hoe de Twee Dagen Verlopen</h2>
<p>Dag een draait om Wadi El Rayan — aankomst vroeg in de middag, watervallen, zonsondergang aan het meer. Dag twee richt zich op het Qarun-meer en Wadi Al-Hitan, met de fossielenvallei in de koelere ochtenduren.</p>

<h2>Beste Tijd en Wat Mee te Nemen</h2>
<p>Fayoum werkt bijna het hele jaar, maar oktober tot april is het comfortabelst. Neem stevige schoenen, zonnebescherming en een zwembroek mee.</p>

<h2>Voor Wie Deze Reis Geschikt Is</h2>
<p>Ideaal voor inwoners van Caïro en expats die een reset nodig hebben. Ook goed voor eerste bezoekers met een paar vrije dagen. Minder geschikt voor hardcore woestijnexpedities.</p>

<h2>De Reset die Dichterbij Is dan u Denkt</h2>
<p>Fayoum bewijst dat soms de betere oplossing goed uitgevoerde nabijheid is: dichtbij genoeg om haalbaar te zijn, anders genoeg om echt te resetten.</p>

<p><a href="/nl/journeys/2-days-fayoum-oasis-program"><strong>Bekijk het volledige 2-daagse Fayoum-programma →</strong></a></p>`,

  pt: `<p>Ha um tipo especifico de cansaco que so o transito do Cairo pode produzir. Nao e exaustao fisica — e um ruido mental lento que se acumula apos semanas de buzinas, barulho de obras e o caos particular de uma cidade de vinte milhoes de pessoas. O conselho habitual e reservar um voo e "fugir". Poucos percebem que a solucao pode estar a menos de duas horas de estrada.</p>

<p>Nao se fala do Fayum como das piramides ou do litoral do Mar Vermelho, e isso e um pouco estranho, porque ele tem cachoeiras, um enorme lago desertico, uma floresta petrificada e um dos sitios fosseis mais importantes do planeta — tudo em uma unica viagem curta desde a capital.</p>

<h2>Por Que o Fayum Funciona como Viagem Curta</h2>
<p>A maioria dos grandes destinos do Egito exige um compromisso real de tempo. O Fayum e diferente — perto o suficiente do Cairo para estar diante de uma cachoeira no inicio da tarde do mesmo dia.</p>

<h2>O Que Ha Realmente no Fayum</h2>
<p><strong>Wadi El Rayan</strong> e a atracao principal. <strong>O lago Qarun</strong> e um dos lagos naturais mais antigos do mundo. <strong>Wadi Al-Hitan (Vale das Baleias)</strong> e Patrimonio Mundial da UNESCO com fosseis de baleias primitivas. <strong>A floresta petrificada</strong> completa o perfil geologico unico da regiao.</p>

<h2>Como Fluem os Dois Dias</h2>
<p>O primeiro dia e centrado em Wadi El Rayan — chegada no inicio da tarde, cachoeiras, por do sol no lago. O segundo dia segue para o lago Qarun e Wadi Al-Hitan, com o vale dos fosseis reservado para as horas mais frescas da manha.</p>

<h2>Melhor Epoca e O Que Levar</h2>
<p>O Fayum funciona quase o ano todo, mas de outubro a abril e mais confortavel. Leve sapatos resistentes, protecao solar e roupa de banho.</p>

<h2>Para Quem Esta Viagem E</h2>
<p>Ideal para moradores do Cairo e expatriados que precisam de um reset. Tambem funciona para visitantes de primeira vez com alguns dias livres. Menos adequado para expedicoes deserticas radicais.</p>

<h2>O Reset Mais Perto do que Voce Imagina</h2>
<p>O Fayum prova que as vezes a melhor solucao e a proximidade bem feita: perto o suficiente para ser viavel, diferente o suficiente para realmente resetar sua mente.</p>

<p><a href="/pt/journeys/2-days-fayoum-oasis-program"><strong>Veja o programa completo de 2 dias no Fayum →</strong></a></p>`,

  zh: `<p>有一种特别的疲惫只有开罗的交通才能产生。不是身体上的疲惫——而是经过数周汽车喇叭声、建筑噪音和两千万人城市特有的混乱后积累的缓慢精神噪音。通常的建议是订张机票"逃离"。很少有人意识到解决方案可能就在不到两小时的路程之外。</p>

<p>法尤姆不像金字塔或红海海岸那样被人谈论，这有点奇怪，因为它有瀑布、巨大的沙漠湖泊、石化森林和地球上最重要的化石遗址之一——一切都在距首都一次短途旅行的范围内。</p>

<h2>为什么法尤姆适合短途旅行</h2>
<p>埃及大多数主要目的地都需要真正的时间投入。法尤姆不同——距开罗足够近，出发当天下午就能站在瀑布前。</p>

<h2>法尤姆到底有什么</h2>
<p><strong>瓦迪拉扬</strong>是主要景点。<strong>卡伦湖</strong>是世界上最古老的天然湖泊之一。<strong>鲸鱼谷</strong>是联合国教科文组织世界遗产，拥有原始鲸鱼化石。<strong>石化森林</strong>完善了该地区独特的地质档案。</p>

<h2>两天如何安排</h2>
<p>第一天围绕瓦迪拉扬展开——下午早些时候到达，看瀑布，日落。第二天前往卡伦湖和鲸鱼谷，化石谷安排在凉爽的清晨。</p>

<h2>最佳时间和携带物品</h2>
<p>法尤姆几乎全年可去，但十月到四月最舒适。带上结实的鞋子、防晒和泳衣。</p>

<h2>这次旅行适合谁</h2>
<p>非常适合开罗居民和需要休息的外籍人士。也适合有几天空闲的首次访埃游客。不太适合追求极限沙漠探险的旅行者。</p>

<h2>比你想象的更近的重置</h2>
<p>法尤姆证明有时候更好的解决方案是做好的近距离：足够近以至于可行，足够不同以至于真正重置你的头脑。</p>

<p><a href="/zh/journeys/2-days-fayoum-oasis-program"><strong>查看完整的两日法尤姆绿洲行程 →</strong></a></p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "How far is Fayoum from Cairo?",
    questionAr: "ما المسافة بين الفيوم والقاهرة؟",
    questionI18n: {
      fr: "A quelle distance le Fayoum se trouve-t-il du Caire ?",
      de: "Wie weit ist Fayoum von Kairo entfernt?",
      es: "A que distancia esta Fayum de El Cairo?",
      it: "Quanto dista Fayoum dal Cairo?",
      nl: "Hoe ver is Fayoum van Caïro?",
      pt: "Qual a distancia entre Fayum e o Cairo?",
      zh: "法尤姆距开罗多远？",
    },
    answerEn:
      "Fayoum is roughly 90 minutes by car from central Cairo, making it one of the closest genuine nature escapes from the capital.",
    answerAr:
      "تبعد الفيوم نحو 90 دقيقة بالسيارة من وسط القاهرة، مما يجعلها واحدة من أقرب الوجهات الطبيعية الحقيقية للهروب من العاصمة.",
    answerI18n: {
      fr: "Le Fayoum est a environ 90 minutes en voiture du centre du Caire, ce qui en fait l'une des escapades nature les plus proches de la capitale.",
      de: "Fayoum ist etwa 90 Minuten mit dem Auto vom Zentrum Kairos entfernt und damit einer der nachsten echten Naturausfluge von der Hauptstadt.",
      es: "Fayum esta a aproximadamente 90 minutos en coche del centro de El Cairo, lo que lo convierte en una de las escapadas naturales mas cercanas a la capital.",
      it: "Fayoum dista circa 90 minuti in auto dal centro del Cairo, rendendolo una delle fughe naturali piu vicine alla capitale.",
      nl: "Fayoum ligt op ongeveer 90 minuten rijden van het centrum van Caïro, waardoor het een van de dichtstbijzijnde echte natuuruitjes vanuit de hoofdstad is.",
      pt: "Fayum fica a cerca de 90 minutos de carro do centro do Cairo, tornando-o uma das fugas naturais mais proximas da capital.",
      zh: "法尤姆距开罗市中心约90分钟车程，是距首都最近的真正自然逃离之一。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "Is Wadi Al-Hitan (Valley of the Whales) worth visiting?",
    questionAr: "هل وادي الحيتان يستحق الزيارة؟",
    questionI18n: {
      fr: "Wadi Al-Hitan (Vallee des Baleines) vaut-il la visite ?",
      de: "Lohnt sich ein Besuch im Wadi Al-Hitan (Tal der Wale)?",
      es: "Vale la pena visitar Wadi Al-Hitan (Valle de las Ballenas)?",
      it: "Vale la pena visitare Wadi Al-Hitan (Valle delle Balene)?",
      nl: "Is Wadi Al-Hitan (Vallei der Walvissen) een bezoek waard?",
      pt: "Vale a pena visitar Wadi Al-Hitan (Vale das Baleias)?",
      zh: "鲸鱼谷值得参观吗？",
    },
    answerEn:
      "Absolutely. It's a UNESCO World Heritage Site with some of the best-preserved early whale fossils on Earth. Walking among bus-sized fossilized skeletons in the middle of the desert is genuinely unforgettable.",
    answerAr:
      "بالتأكيد. إنه موقع تراث عالمي لليونسكو يضم بعضًا من أفضل حفريات الحيتان البدائية المحفوظة على وجه الأرض. المشي بين هياكل عظمية متحجرة بحجم الحافلات في قلب الصحراء تجربة لا تُنسى فعلًا.",
    answerI18n: {
      fr: "Absolument. C'est un site du patrimoine mondial de l'UNESCO avec certains des meilleurs fossiles de baleines primitives sur Terre. Marcher parmi des squelettes fossilises de la taille de bus en plein desert est inoubliable.",
      de: "Absolut. Es ist eine UNESCO-Welterbestatte mit einigen der am besten erhaltenen fruhen Walfossilien der Erde. Zwischen busgrossen versteinerten Skeletten mitten in der Wuste zu wandern, ist unvergesslich.",
      es: "Absolutamente. Es Patrimonio de la Humanidad de la UNESCO con algunos de los fosiles de ballenas primitivas mejor conservados del mundo. Caminar entre esqueletos fosilizados del tamano de autobuses en medio del desierto es genuinamente inolvidable.",
      it: "Assolutamente. E un sito patrimonio mondiale UNESCO con alcuni dei fossili di balene primitive meglio conservati al mondo. Camminare tra scheletri fossili grandi come autobus nel mezzo del deserto e davvero indimenticabile.",
      nl: "Absoluut. Het is een UNESCO-werelderfgoedsite met enkele van de best bewaarde vroege walvisfossielen op aarde. Wandelen tussen busgrote gefossiliseerde skeletten midden in de woestijn is echt onvergetelijk.",
      pt: "Com certeza. E um Patrimonio Mundial da UNESCO com alguns dos fosseis de baleias primitivas mais bem preservados da Terra. Caminhar entre esqueletos fossilizados do tamanho de onibus no meio do deserto e genuinamente inesquecivel.",
      zh: "绝对值得。它是联合国教科文组织世界遗产，拥有地球上保存最完好的早期鲸鱼化石。在沙漠中漫步于公交车大小的化石骨骼之间，真的令人难忘。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "Is this trip suitable for families with children?",
    questionAr: "هل هذه الرحلة مناسبة للعائلات مع أطفال؟",
    questionI18n: {
      fr: "Ce voyage convient-il aux familles avec enfants ?",
      de: "Ist diese Reise fur Familien mit Kindern geeignet?",
      es: "Es este viaje adecuado para familias con ninos?",
      it: "Questo viaggio e adatto alle famiglie con bambini?",
      nl: "Is deze reis geschikt voor gezinnen met kinderen?",
      pt: "Esta viagem e adequada para familias com criancas?",
      zh: "这次旅行适合有孩子的家庭吗？",
    },
    answerEn:
      "Yes. The pace is gentle and activities range from passive (sitting by the water) to active (sandboarding, kayaking). There's enough variety that kids stay engaged without anyone feeling exhausted.",
    answerAr:
      "نعم. الإيقاع هادئ والأنشطة تتراوح بين السلبية (الجلوس بجانب الماء) والنشطة (التزلج على الرمال، التجديف). هناك تنوع كافٍ بحيث يبقى الأطفال مستمتعين دون أن يشعر أحد بالإرهاق.",
    answerI18n: {
      fr: "Oui. Le rythme est doux et les activites vont du passif (s'asseoir au bord de l'eau) a l'actif (surf des sables, kayak). Il y a assez de variete pour que les enfants restent engages sans que personne ne soit epuise.",
      de: "Ja. Das Tempo ist sanft und die Aktivitaten reichen von passiv (am Wasser sitzen) bis aktiv (Sandboarden, Kajakfahren). Es gibt genug Abwechslung, damit Kinder engagiert bleiben.",
      es: "Si. El ritmo es suave y las actividades van desde pasivas (sentarse junto al agua) hasta activas (sandboard, kayak). Hay suficiente variedad para que los ninos se mantengan entretenidos.",
      it: "Si. Il ritmo e dolce e le attivita vanno dal passivo (sedersi vicino all'acqua) all'attivo (sandboarding, kayak). C'e abbastanza varieta perche i bambini restino coinvolti.",
      nl: "Ja. Het tempo is rustig en de activiteiten varieren van passief (aan het water zitten) tot actief (sandboarden, kajakken). Er is genoeg variatie zodat kinderen betrokken blijven.",
      pt: "Sim. O ritmo e suave e as atividades vao de passivas (sentar junto a agua) a ativas (sandboard, caiaque). Ha variedade suficiente para manter as criancas engajadas sem exaustar ninguem.",
      zh: "适合。节奏轻松，活动从被动（坐在水边）到主动（滑沙、皮划艇）都有。足够的多样性让孩子们保持兴趣而不会让任何人感到疲惫。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "fayoum-two-days-cairo-escape",
  titleEn,
  titleAr,
  titleI18n,
  excerptEn,
  excerptAr,
  excerptI18n,
  contentEn,
  contentAr,
  contentI18n,
  metaTitleEn,
  metaTitleAr,
  metaTitleI18n,
  metaDescriptionEn: metaDescEn,
  metaDescriptionAr: metaDescAr,
  metaDescriptionI18n: metaDescI18n,
  image: "/img/fayoum-two-days-cairo-escape.jpg",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "fayoum egypt",
    "fayoum day trip",
    "wadi el rayan",
    "valley of the whales",
    "lake qarun",
    "cairo weekend escape",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "fayoum two days",
    "fayoum trip from cairo",
  ]),
  secondaryKeywords: JSON.stringify([
    "wadi el rayan waterfalls",
    "wadi al hitan fossils",
    "cairo weekend trip",
    "fayoum oasis program",
  ]),
  readingTime: 7,
  isPublished: true,
  publishedAt: new Date("2026-10-05"),
};

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  const existing = await prisma.blog.findUnique({ where: { slug: blog.slug } });

  if (existing) {
    console.log(`Blog "${blog.slug}" exists (id=${existing.id}). Updating...`);
    await prisma.blog.update({
      where: { id: existing.id },
      data: {
        titleEn: blog.titleEn,
        titleAr: blog.titleAr,
        titleI18n: blog.titleI18n,
        excerptEn: blog.excerptEn,
        excerptAr: blog.excerptAr,
        excerptI18n: blog.excerptI18n,
        contentEn: blog.contentEn,
        contentAr: blog.contentAr,
        contentI18n: blog.contentI18n,
        metaTitleEn: blog.metaTitleEn,
        metaTitleAr: blog.metaTitleAr,
        metaTitleI18n: blog.metaTitleI18n,
        metaDescriptionEn: blog.metaDescriptionEn,
        metaDescriptionAr: blog.metaDescriptionAr,
        metaDescriptionI18n: blog.metaDescriptionI18n,
        image: blog.image,
        author: blog.author,
        category: blog.category,
        tags: blog.tags,
        primaryKeywords: blog.primaryKeywords,
        secondaryKeywords: blog.secondaryKeywords,
        readingTime: blog.readingTime,
        isPublished: blog.isPublished,
        publishedAt: blog.publishedAt,
      },
    });
    await prisma.blogFaq.deleteMany({ where: { blogId: existing.id } });
    for (const faq of faqs) {
      await prisma.blogFaq.create({ data: { blogId: existing.id, ...faq } });
    }
    console.log(`Updated blog id=${existing.id} with ${faqs.length} FAQs.`);
    return;
  }

  const created = await prisma.blog.create({
    data: {
      slug: blog.slug,
      titleEn: blog.titleEn,
      titleAr: blog.titleAr,
      titleI18n: blog.titleI18n,
      excerptEn: blog.excerptEn,
      excerptAr: blog.excerptAr,
      excerptI18n: blog.excerptI18n,
      contentEn: blog.contentEn,
      contentAr: blog.contentAr,
      contentI18n: blog.contentI18n,
      metaTitleEn: blog.metaTitleEn,
      metaTitleAr: blog.metaTitleAr,
      metaTitleI18n: blog.metaTitleI18n,
      metaDescriptionEn: blog.metaDescriptionEn,
      metaDescriptionAr: blog.metaDescriptionAr,
      metaDescriptionI18n: blog.metaDescriptionI18n,
      image: blog.image,
      author: blog.author,
      category: blog.category,
      tags: blog.tags,
      primaryKeywords: blog.primaryKeywords,
      secondaryKeywords: blog.secondaryKeywords,
      readingTime: blog.readingTime,
      isPublished: blog.isPublished,
      publishedAt: blog.publishedAt,
    },
  });

  for (const faq of faqs) {
    await prisma.blogFaq.create({ data: { blogId: created.id, ...faq } });
  }

  console.log(
    `Created blog "${blog.slug}" (id=${created.id}) with ${faqs.length} FAQs.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
