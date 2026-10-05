/**
 * Blog: The Trip of a Lifetime: 13 Days Between the Grand Desert and the Temples of Luxor
 * Slug: 13-days-desert-temples-luxor
 * Run with: node scripts/seed-blog-13-days-desert-luxor.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr =
  "رحلة العمر: 13 يومًا بين الصحراء الكبرى ومعابد الأقصر";

const metaTitleAr =
  "رحلة العمر: 13 يومًا بين الصحراء الكبرى ومعابد الأقصر | Bedouin Trails (2026)";

const metaDescAr =
  "برنامج 13 يومًا يجمع بين الصحراء الغربية المصرية ومعابد الأقصر في رحلة واحدة متكاملة — دليلك الكامل للتخطيط.";

const excerptAr =
  "هناك نوع معيّن من المسافرين يزور مصر مرة واحدة، ثم يقضي بقية حياته يحاول أن يشرح ما الذي رآه بالضبط. هذه الرحلة تجمع بين الصحراء الغربية ومعابد الأقصر في 13 يومًا — النسخة الكاملة من مصر.";

const contentAr = `<p>هناك نوع معيّن من المسافرين يزور مصر مرة واحدة، ثم يقضي بقية حياته يحاول أن يشرح لمن لم يذهبوا معه ما الذي رآه بالضبط. يتحدث عن الأهرامات، بالطبع. يتحدث عن النيل. لكن الذين يعجزون فعلًا عن إيجاد الكلمات المناسبة هم من قضوا ليلة في الصحراء الغربية أيضًا — من شاهدوا الصحراء البيضاء وهي تتحول من الذهبي إلى الوردي ثم إلى بياض بارد متوهج تحت قمر مكتمل، ثم وقفوا بعد أيام قليلة في صالة الأعمدة الكبرى بمعبد الكرنك يحاولون استيعاب حجم ما بناه الإنسان قبل ثلاثة آلاف عام من ولادتهم.</p>

<p>معظم الزوار يضطرون للاختيار. يذهبون إما إلى الصحراء أو إلى وادي النيل، لأن أسبوعين في مصر يبدوان طموحين، ولا أحد يريد أن يبني برنامجه الخاص من الصفر. هذا في الحقيقة هو السبب الوحيد الذي يجعل التجربتين منفصلتين عادة — ليس لأنهما لا تنتميان لبعضهما، بل لأن قلة قليلة من الناس تضعهما على نفس الخريطة.</p>

<p><strong>لكنهما تنتميان لبعضهما البعض. بل إن كل واحدة منهما تجعل الأخرى أعمق أثرًا.</strong></p>

<h2>لماذا تصلح الصحراء والنيل كرحلة واحدة</h2>
<p>قصة مصر كانت دائمًا قصة تباين. وادي النيل هو المكان الذي بَنَت فيه الحضارة المصرية نفسها صعودًا — معابد ومقابر وأسرات حاكمة، وسجل تاريخي موثّق يمتد إلى الوراء أكثر من أي مكان آخر تقريبًا على وجه الأرض. أما الصحراء الغربية فهي المكان الذي توقفت عنده تلك الحضارة نفسها. إنها حافة الخريطة، المكان الذي ربط به المصريون القدماء الفوضى والعالم الآخر والمجهول. زيارة الاثنين معًا ليست مجرد "رؤية المزيد من مصر". إنها رؤية الصورة الكاملة لكيفية فهم المصريين القدماء لعالمهم — نظام على ضفاف النهر، وغموض خلفه.</p>
<p>هناك أيضًا سبب عملي للجمع بينهما. رحلة مبنية بالكامل حول المعابد، مهما كانت مبهرة، تبدأ في النهاية بالتشابه — صالة أعمدة بعد أخرى، مقبرة بعد أخرى. ورحلة مبنية بالكامل حول التخييم الصحراوي لا تُنسى لأسباب مختلفة تمامًا، لكنها تتخطى ثلاثة آلاف عام من التاريخ المدوَّن الذي يريد معظم الناس رؤيته مرة واحدة على الأقل في حياتهم. الجمع بين الاثنين يكسر الإيقاع بطريقة تجعل كل نصف من الرحلة يترك أثرًا أقوى. تصل إلى الأقصر والرمل ما زال عالقًا في حذائك، وهو ما يجعل المعابد — بشكل غريب — تبدو أقل كأنها معرض متحف، وأكثر كأنك دخلت فعلًا إلى داخل التاريخ.</p>

<h2>كيف تبدو 13 يومًا فعليًا</h2>
<p>رحلة كهذه ليست جولة قائمة مراجعة يُساق فيها السائحون من موقع إلى موقع خلف مرشد يرفع علمًا. إنها مبنية على حركتين واضحتين، لكل منهما إيقاعها الخاص.</p>
<p><strong>حركة الصحراء</strong> تفتتح الرحلة عادة. تنطلق من القاهرة إلى الصحراء الغربية، عبر مناظر طبيعية لم يسمع عنها معظم المسافرين قبل أن يبدأوا بالبحث الجاد عن مصر: تشكيلات الطباشير في الصحراء البيضاء التي تبدو وكأن عملاقًا نحتها في وقت فراغه، التلال البركانية السوداء في الصحراء السوداء، بلدات الواحات حيث لم تتسارع الحياة كثيرًا منذ قرن مضى. تنام في العراء — أو قريبًا منه — تحت سماء شبه خالية من التلوث الضوئي. تأكل طعامًا طُهي على النار أعدّه أشخاص عاشت عائلاتهم في هذه الأرض لأجيال، لا مرشدين يقرؤون من نص محفوظ. هذا الجزء من الرحلة يسير على إيقاع أبطأ. لا أحد يستعجلك بين المحطات لأنه غالبًا لا توجد "محطة تالية" مجدولة خلال الساعة القادمة. هناك فقط الصحراء، ووقت كافٍ لتكون فيها حقًا.</p>
<p><strong>حركة النيل والأقصر</strong> هي النصف الآخر، وتسير بإيقاع مختلف تمامًا — متعدد الطبقات، غني بالتفاصيل التاريخية. معبد الكرنك وحده يستحق نصف يوم، لا ساعة متعجلة بين استراحة حمام ومتجر هدايا. وادي الملوك، تمثالا ممنون، معابد الأقصر والكرنك عند الغروب حين يتحول الحجر إلى لون العسل — هنا يتوقف تاريخ مصر المكتوب عن كونه فكرة مجردة في كتاب مدرسي، ويصبح شيئًا تقف أنت بداخله.</p>
<p>ثلاثة عشر يومًا تمنحك مساحة لفعل الاثنين دون أن تشعر بالتسرع في أيٍّ منهما. وقت كافٍ في الصحراء لتستقر فيها فعلًا — ليلتان أو ثلاث، لا ليلة واحدة محمومة — ووقت كافٍ حول الأقصر لرؤية المواقع الرئيسية بشكل لائق بدلًا من عبورها بخطى سريعة.</p>

<h2>لمن تصلح هذه الرحلة فعلًا</h2>
<p>هذه ليست رحلة لمن يريد كرسي شاطئ وكوكتيلًا بمظلة صغيرة. إنها لمن يشعرون بالضيق الحقيقي من الجولات السياحية النمطية، ومن يفضّلون قضاء بعد ظهيرة كاملة في تعلّم كيف يقرأ المرشد البدوي الصحراء بدلًا من الاسترخاء بجانب مسبح الفندق. تناسب المسافرين الذين يخططون لما قد تكون رحلتهم الوحيدة إلى مصر، ولا يريدون العودة بعد خمس سنوات نادمين على أنهم لم يروا "النصف الآخر". كما تناسب المسافرين الأكثر خبرة الذين سبق أن جربوا رحلة نيلية قصيرة أو ليلة صحراوية سريعة، وأصبحوا جاهزين للنسخة الأكمل — تلك التي تربط فعليًا بين تاريخ مصر القديم وثقافتها الصحراوية الحية.</p>
<p>من الناحية البدنية، هي رحلة معتدلة. لا تحتاج خبرة تسلق جبال. تحتاج فقط قدرة معقولة على تحمّل الاستيقاظ المبكر، وبعض المشي على الرمال، واستعدادًا للنوم بضع ليالٍ بلا إنترنت. وفي المقابل، تحصل على نسخة من مصر لا يراها معظم الزوار — حتى المتكررون منهم — في رحلة واحدة.</p>

<h2>أمور صادقة يجب معرفتها قبل الحجز</h2>
<p>ثلاثة عشر يومًا التزام حقيقي، ويستحق أن تدخل فيه بتوقعات واضحة. درجات الحرارة تتأرجح بشدة بين النهار والليل في الصحراء، خصوصًا خارج أشهر الصيف، لذا فإن تعدد الطبقات في الملابس أهم مما يتخيله معظم الناس عند التحضير لرحلة إلى "مصر" بشكل عام. بعض مسارات القيادة في الصحراء طويلة — هذا بلد كبير، والمسافات بين الواحات ليست قصيرة. ولأن الرحلة تتنقل بين بيئتين مختلفتين تمامًا، فإن المرونة أهم مما قد تكون عليه في برنامج أحادي المنطقة؛ فالطقس وحالة الطرق والعوامل الموسمية قد تغيّر خطة يوم كامل، وأفضل الرحلات هي تلك التي يأتي فيها المسافرون مستعدين للتكيّف بدلًا من المطالبة ببرنامج دقيق بالدقيقة.</p>
<p>لا شيء من هذا عيب حقيقي. إنه فقط الملمس الصادق لرحلة بهذا الطموح — ومعظم من يحجزها يقولون لاحقًا إن الأجزاء التي بدت غير متوقعة في حينها كانت هي الأجزاء التي يتذكرونها أكثر.</p>

<h2>أفضل وقت للذهاب</h2>
<p>التوقيت أهم في رحلة كهذه منه في برنامج أحادي المنطقة، لأنك تطلب من بيئتين مختلفتين تمامًا أن تكونا في أفضل حالاتهما خلال نفس النافذة الزمنية. النقطة المثالية تقع تقريبًا بين أكتوبر وأبريل. درجات حرارة الصحراء نهارًا تكون مريحة لا قاسية، والليالي باردة لكن يمكن التعامل معها بتعدد طبقات الملابس المناسب، ومعابد الأقصر — التي قد تكون قاسية تحت الشمس المفتوحة في منتصف الصيف — أكثر متعة بكثير للتجول فيها لساعات طويلة. ديسمبر ويناير يجلبان أبرد ليالي الصحراء في الرحلة، لذا جهّز نفسك وفقًا لذلك إن كنت تسافر في تلك الفترة. الأشهر الانتقالية مثل أكتوبر وأبريل تميل إلى تقديم أفضل توازن بين النهارات الدافئة والليالي المحتملة وازدحام أقل في مواقع الأقصر الرئيسية.</p>

<h2>نسخة مصر التي لا يراها معظم الناس</h2>
<p>كل من يزور مصر يرى الأهرامات. ومعظم من يزورها يجرّب رحلة نيلية. أقل منهم يرون الصحراء أصلًا، وتقريبًا لا أحد يرى النصفين في رحلة واحدة، مبنية كمسار متكامل لا كحجزين منفصلين جُمعا لاحقًا بشكل عشوائي.</p>
<p>هذا هو جوهر الجاذبية هنا. ليست المسألة "مزيدًا من مصر" من أجل الكمّ. إنها النسخة من البلد التي تصبح منطقية فعلًا بعد أن تراها — نظام المعابد، والمساحة الشاسعة اللامبالية خلفها، الشيئان اللذان أمضى المصريون القدماء ثلاثة آلاف عام يفكرون في علاقتهما ببعضهما البعض.</p>

<p>بمعنى آخر، هذه ليست رحلة تُحسب بعدد المعالم التي عبرتها، بل بعدد المرات التي توقفت فيها فعلًا لتستوعب ما أمامك — سواء كان ذلك صمت الصحراء عند منتصف الليل، أو حجم عمود واحد في صالة الكرنك يفوق ارتفاعك عدة أضعاف.</p>

<p><strong>شاهد برنامج رحلة مصر الكبرى الكاملة: الصحراء والواحات في 13 يومًا</strong> — <a href="/ar/journeys/13-days-grand-egypt-desert-oases-journey">احجز رحلة الـ 13 يومًا الآن</a></p>

<p>وإذا كانت 13 يومًا أكثر مما تسمح به ظروفك حاليًا، فإن <a href="/ar/journeys/8-days-egypt-adventure-journey">رحلة مغامرة مصر في 8 أيام</a> تغطي نفس التباين الأساسي — الصحراء والأقصر — في نافذة زمنية أضيق، وتشكل خطوة أولى جيدة نحو الرحلة الأطول لاحقًا.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "The Trip of a Lifetime: 13 Days Between the Grand Desert and the Temples of Luxor";

const metaTitleEn =
  "The Trip of a Lifetime: 13 Days Between the Grand Desert and the Temples of Luxor | Bedouin Trails (2026)";

const metaDescEn =
  "A 13-day itinerary combining Egypt's Western Desert and the temples of Luxor in one seamless journey — your complete planning guide.";

const excerptEn =
  "There is a particular kind of traveler who comes to Egypt once and spends the rest of their life trying to describe it. This trip combines the Western Desert and the temples of Luxor across 13 days — the full version of Egypt most people never see.";

const contentEn = `<p>There is a particular kind of traveler who comes to Egypt once and spends the rest of their life trying to describe it to people who weren't there. They talk about the pyramids, obviously. They talk about the Nile. But the ones who really struggle to put it into words are the ones who also spent a night in the Western Desert — who watched the White Desert go from gold to pink to a cold, glowing white under a full moon, and then, a few days later, stood in the Hypostyle Hall at Karnak trying to process the sheer scale of what humans built three thousand years before they were born.</p>

<p>Most visitors have to choose. They pick the desert trip or the Nile Valley trip, because two weeks in Egypt sounds ambitious and nobody wants to build their own itinerary from scratch. That's really the only reason the two experiences usually stay separate — not because they don't belong together, but because almost nobody puts them on the same map.</p>

<p>They belong together. If anything, each one makes the other hit harder.</p>

<h2>Why the Desert and the Nile Make Sense as One Trip</h2>
<p>Egypt's story has always been a story of contrast. The Nile Valley is where Egyptian civilization built itself upward — temples, tombs, dynasties, a documented record stretching back further than almost anywhere on Earth. The Western Desert is where that same civilization stopped. It's the edge of the map, the place ancient Egyptians associated with chaos, the afterlife, and the unknown. Visiting both isn't just seeing "more of Egypt." It's seeing the full shape of how Egyptians understood their own world — order along the river, mystery beyond it.</p>
<p>There's also a practical case for combining them. A trip built entirely around temples, however spectacular, eventually starts to blur — one hypostyle hall after another, one tomb after another. A trip built entirely around desert camping is unforgettable for different reasons, but it skips three thousand years of recorded history that most people genuinely want to see at least once. Putting the two together breaks up the rhythm in a way that makes both halves land harder. You arrive in Luxor with sand still in your boots, which somehow makes the temples feel less like a museum exhibit and more like something you walked into.</p>

<h2>What 13 Days Actually Looks Like</h2>
<p>A journey like this isn't a checklist tour where you're herded from site to site with a flag-waving guide. It's built in two clear movements, each with its own pace.</p>
<p><strong>The desert movement</strong> usually opens the trip. You head out from Cairo into the Western Desert, through landscapes most travelers have never even heard of before researching Egypt seriously: the chalk formations of the White Desert that look like something sculpted by a giant with too much time on their hands, the volcanic black hills of the Black Desert, oasis towns where life has barely sped up in a century. You sleep in the open — or close to it — under skies with almost no light pollution. You eat food cooked over a fire by people whose families have navigated this terrain for generations, not guides reading from a script. This part of the trip runs on a slower clock. Nobody is rushing you between stops because there often isn't a "next stop" scheduled within the hour. There's just the desert, and time to actually be in it.</p>
<p><strong>The Nile and Luxor movement</strong> is the other half, and it runs at a completely different rhythm — layered, historical, detail-heavy. Karnak Temple alone deserves a half-day, not a rushed hour between a bathroom break and a gift shop. The Valley of the Kings, the Colossi of Memnon, the temples of Luxor and Karnak at sunset when the stone turns the color of honey — this is where Egypt's written history stops being an abstraction in a textbook and becomes something you're standing inside.</p>
<p>Thirteen days gives you room to do both without feeling rushed through either. It's enough time in the desert to actually settle into it — two or three nights, not a single frantic overnight — and enough time around Luxor to see the major sites properly instead of ticking them off a list at a half-jog.</p>

<h2>Who This Trip Is Actually For</h2>
<p>This isn't a trip for someone who wants a beach chair and a cocktail with an umbrella in it. It's for people who get genuinely restless on standard package tours, who'd rather spend an afternoon learning how a Bedouin guide reads the desert than lounging by a hotel pool. It suits travelers planning what might be their only trip to Egypt and who don't want to come back in five years wishing they'd seen "the other half." It also suits more experienced travelers who've already done a shorter Nile cruise or a quick desert overnight and are ready for the fuller version — the one that actually connects the dots between Egypt's ancient history and its living desert culture.</p>
<p>Physically, it's moderate. You don't need mountaineering experience. You need a reasonable tolerance for early starts, some walking on sand, and a willingness to sleep somewhere without wifi for a few nights. In exchange, you get a version of Egypt that most visitors — even repeat visitors — never actually see in one trip.</p>

<h2>A Few Honest Things to Know Before You Book</h2>
<p>Thirteen days is a real commitment, and it's worth going in with clear expectations. Temperatures swing hard between day and night in the desert, especially outside the summer months, so layering matters more than most people assume packing for "Egypt" in general. Some stretches of desert driving are long — this is a big country, and distances between oases aren't small. And because the trip moves between two very different environments, flexibility matters more than it would on a single-region itinerary; weather, road conditions, and seasonal factors can shift a day's plan, and the trips that work best are the ones where travelers come in ready to adapt rather than demanding a minute-by-minute script.</p>
<p>None of that is a downside, exactly. It's just the honest texture of a trip this ambitious — and most people who book it say afterward that the parts that felt unpredictable in the moment were the parts they remember best.</p>

<h2>When to Go</h2>
<p>Timing matters more on a trip like this than on a single-region itinerary, because you're asking two different environments to both be at their best within the same window. The sweet spot is roughly October through April. Daytime desert temperatures are comfortable rather than punishing, nights are cold but manageable with proper layering, and Luxor's temples — which can be brutal under the open sun in midsummer — are far more pleasant to walk around for hours at a time. December and January bring the coldest desert nights of the trip, so pack accordingly if you're traveling then. Shoulder months like October and April tend to offer the best balance: warm enough days, bearable nights, and slightly thinner crowds at the major Luxor sites compared to the peak of winter. Summer isn't off the table entirely, but the combination of extreme Nile Valley heat and genuinely cold desert nights makes it the least forgiving option for a trip this long.</p>

<h2>The Version of Egypt Most People Never See</h2>
<p>Everyone who goes to Egypt sees the pyramids. Most people who go to Egypt see a Nile cruise. Fewer people see the desert at all, and almost nobody sees both halves on the same trip, built as one coherent journey rather than two separate bookings stitched together after the fact.</p>
<p>That's really the appeal here. It's not "more Egypt" for the sake of volume. It's the version of the country that actually makes sense once you've seen it — the order of the temples and the vast, indifferent space beyond them, the two things ancient Egyptians spent three thousand years thinking about in relation to each other.</p>

<p><strong>See the full 13-day Grand Egypt Desert & Oases itinerary</strong> — <a href="/en/journeys/13-days-grand-egypt-desert-oases-journey">Book the 13-day journey now</a></p>

<p>If 13 days feels like more than you have room for right now, the shorter <a href="/en/journeys/8-days-egypt-adventure-journey">8-Day Egypt Adventure Journey</a> covers the same essential contrast — desert and Luxor — in a tighter window, and makes a solid first step toward the longer trip down the line.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Le Voyage d'une Vie : 13 Jours entre le Grand Desert et les Temples de Louxor",
  de: "Die Reise eines Lebens: 13 Tage zwischen der Grossen Wuste und den Tempeln von Luxor",
  es: "El Viaje de tu Vida: 13 Dias entre el Gran Desierto y los Templos de Luxor",
  it: "Il Viaggio di una Vita: 13 Giorni tra il Grande Deserto e i Templi di Luxor",
  nl: "De Reis van je Leven: 13 Dagen tussen de Grote Woestijn en de Tempels van Luxor",
  pt: "A Viagem de uma Vida: 13 Dias entre o Grande Deserto e os Templos de Luxor",
  zh: "一生一次的旅行：13天穿越大沙漠与卢克索神殿",
};

const metaTitleI18n = {
  fr: "Le Voyage d'une Vie : 13 Jours entre le Desert et Louxor | Bedouin Trails (2026)",
  de: "Die Reise eines Lebens: 13 Tage zwischen Wuste und Luxor | Bedouin Trails (2026)",
  es: "El Viaje de tu Vida: 13 Dias entre el Desierto y Luxor | Bedouin Trails (2026)",
  it: "Il Viaggio di una Vita: 13 Giorni tra Deserto e Luxor | Bedouin Trails (2026)",
  nl: "De Reis van je Leven: 13 Dagen tussen Woestijn en Luxor | Bedouin Trails (2026)",
  pt: "A Viagem de uma Vida: 13 Dias entre o Deserto e Luxor | Bedouin Trails (2026)",
  zh: "一生一次的旅行：13天沙漠与卢克索之旅 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Un itineraire de 13 jours combinant le Desert Occidental d'Egypte et les temples de Louxor en un seul voyage — votre guide complet de planification.",
  de: "Eine 13-tagige Reiseroute, die Agyptens Westliche Wuste und die Tempel von Luxor in einer nahtlosen Reise vereint — Ihr vollstandiger Planungsleitfaden.",
  es: "Un itinerario de 13 dias que combina el Desierto Occidental de Egipto y los templos de Luxor en un solo viaje — tu guia completa de planificacion.",
  it: "Un itinerario di 13 giorni che combina il Deserto Occidentale d'Egitto e i templi di Luxor in un unico viaggio — la tua guida completa alla pianificazione.",
  nl: "Een 13-daagse route die de Westelijke Woestijn van Egypte en de tempels van Luxor combineert in een naadloze reis — uw complete planningsgids.",
  pt: "Um roteiro de 13 dias combinando o Deserto Ocidental do Egito e os templos de Luxor em uma unica viagem — seu guia completo de planejamento.",
  zh: "13天行程，将埃及西部沙漠和卢克索神殿融合为一次无缝旅程——您的完整规划指南。",
};

const excerptI18n = {
  fr: "Il existe un type particulier de voyageur qui vient en Egypte une fois et passe le reste de sa vie a essayer de le decrire. Ce voyage combine le Desert Occidental et les temples de Louxor en 13 jours — la version complete de l'Egypte.",
  de: "Es gibt eine besondere Art von Reisenden, die einmal nach Agypten kommen und den Rest ihres Lebens damit verbringen, es zu beschreiben. Diese Reise verbindet die Westliche Wuste und die Tempel von Luxor uber 13 Tage — die vollstandige Version Agyptens.",
  es: "Hay un tipo particular de viajero que viene a Egipto una vez y pasa el resto de su vida tratando de describirlo. Este viaje combina el Desierto Occidental y los templos de Luxor en 13 dias — la version completa de Egipto.",
  it: "C'e un tipo particolare di viaggiatore che viene in Egitto una volta e passa il resto della vita cercando di descriverlo. Questo viaggio combina il Deserto Occidentale e i templi di Luxor in 13 giorni — la versione completa dell'Egitto.",
  nl: "Er is een bijzonder type reiziger dat een keer naar Egypte komt en de rest van hun leven besteedt aan het proberen het te beschrijven. Deze reis combineert de Westelijke Woestijn en de tempels van Luxor over 13 dagen — de volledige versie van Egypte.",
  pt: "Ha um tipo particular de viajante que vem ao Egito uma vez e passa o resto da vida tentando descreve-lo. Esta viagem combina o Deserto Ocidental e os templos de Luxor em 13 dias — a versao completa do Egito.",
  zh: "有一种特别的旅行者，来埃及一次，余生都在试图描述它。这次旅行将西部沙漠和卢克索神殿融合在13天之中——大多数人从未见过的完整版埃及。",
};

const contentI18n = {
  fr: `<p>Il existe un type particulier de voyageur qui vient en Egypte une fois et passe le reste de sa vie a essayer de le decrire a ceux qui n'y etaient pas. Ils parlent des pyramides, evidemment. Ils parlent du Nil. Mais ceux qui peinent vraiment a trouver les mots sont ceux qui ont aussi passe une nuit dans le Desert Occidental — qui ont vu le Desert Blanc passer de l'or au rose puis a un blanc froid et lumineux sous la pleine lune, et qui, quelques jours plus tard, se sont tenus dans la Salle Hypostyle de Karnak essayant de saisir l'ampleur de ce que les humains avaient construit trois mille ans avant leur naissance.</p>

<h2>Pourquoi le Desert et le Nil Ont du Sens en un Seul Voyage</h2>
<p>L'histoire de l'Egypte a toujours ete une histoire de contrastes. La Vallee du Nil est l'endroit ou la civilisation egyptienne s'est construite vers le haut — temples, tombes, dynasties. Le Desert Occidental est l'endroit ou cette meme civilisation s'est arretee. Visiter les deux n'est pas simplement voir "plus d'Egypte". C'est voir la forme complete de la facon dont les Egyptiens comprenaient leur propre monde — l'ordre le long du fleuve, le mystere au-dela.</p>
<p>Il y a aussi un argument pratique pour les combiner. Un voyage entierement construit autour des temples, aussi spectaculaire soit-il, finit par se brouiller. Un voyage entierement construit autour du camping dans le desert est inoubliable pour d'autres raisons, mais il passe a cote de trois mille ans d'histoire documentee. Combiner les deux brise le rythme d'une maniere qui renforce les deux moities.</p>

<h2>A Quoi Ressemblent 13 Jours Concretement</h2>
<p><strong>Le mouvement desert</strong> ouvre generalement le voyage. Vous partez du Caire vers le Desert Occidental, a travers des paysages dont la plupart des voyageurs n'ont jamais entendu parler. Vous dormez en plein air sous des ciels presque sans pollution lumineuse. Vous mangez de la nourriture cuite au feu par des gens dont les familles naviguent dans ce terrain depuis des generations.</p>
<p><strong>Le mouvement Nil et Louxor</strong> est l'autre moitie. Le temple de Karnak a lui seul merite une demi-journee. La Vallee des Rois, les Colosses de Memnon, les temples de Louxor et Karnak au coucher du soleil quand la pierre prend la couleur du miel — c'est la que l'histoire ecrite de l'Egypte cesse d'etre une abstraction et devient quelque chose dans lequel vous vous tenez.</p>
<p>Treize jours vous laissent le temps de faire les deux sans vous sentir presse.</p>

<h2>Pour Qui Ce Voyage Est-il Vraiment Fait</h2>
<p>Ce n'est pas un voyage pour quelqu'un qui veut une chaise longue et un cocktail avec un parasol. C'est pour les gens qui s'agitent vraiment lors des circuits touristiques standard. Physiquement, c'est modere. Vous avez besoin d'une tolerance raisonnable pour les departs matinaux et la marche sur le sable.</p>

<h2>Quelques Verites a Connaitre Avant de Reserver</h2>
<p>Treize jours est un veritable engagement. Les temperatures oscillent fortement entre le jour et la nuit dans le desert. La flexibilite compte plus que sur un itineraire mono-region.</p>

<h2>Quand Partir</h2>
<p>Le moment ideal se situe approximativement d'octobre a avril. Les temperatures du desert en journee sont confortables, les nuits froides mais gérables, et les temples de Louxor sont bien plus agreables a parcourir pendant des heures.</p>

<h2>La Version de l'Egypte que la Plupart des Gens ne Voient Jamais</h2>
<p>Tout le monde voit les pyramides. La plupart font une croisiere sur le Nil. Presque personne ne voit les deux moities en un seul voyage, construit comme un parcours coherent plutot que deux reservations separees assemblees apres coup.</p>

<p><strong>Voir l'itineraire complet de 13 jours</strong> — <a href="/fr/journeys/13-days-grand-egypt-desert-oases-journey">Reservez le voyage de 13 jours maintenant</a></p>

<p>Si 13 jours vous semble trop pour l'instant, le <a href="/fr/journeys/8-days-egypt-adventure-journey">Voyage Aventure Egypte de 8 jours</a> couvre le meme contraste essentiel — desert et Louxor — dans un delai plus serre.</p>`,

  de: `<p>Es gibt eine besondere Art von Reisenden, die einmal nach Agypten kommen und den Rest ihres Lebens damit verbringen, es denen zu beschreiben, die nicht dabei waren. Sie sprechen uber die Pyramiden, naturlich. Sie sprechen uber den Nil. Aber diejenigen, die wirklich keine Worte finden, sind jene, die auch eine Nacht in der Westlichen Wuste verbracht haben — die zusahen, wie die Weisse Wuste von Gold zu Rosa zu einem kalten, leuchtenden Weiss unter dem Vollmond wurde, und dann, wenige Tage spater, in der Hypostylhalle von Karnak standen.</p>

<h2>Warum die Wuste und der Nil als eine Reise Sinn Ergeben</h2>
<p>Agyptens Geschichte war immer eine Geschichte der Kontraste. Das Niltal ist der Ort, an dem die agyptische Zivilisation sich nach oben baute — Tempel, Graber, Dynastien. Die Westliche Wuste ist der Ort, wo dieselbe Zivilisation aufhorte. Beide zusammen zu besuchen bedeutet nicht nur, "mehr von Agypten" zu sehen. Es bedeutet, das vollstandige Bild zu sehen, wie die Agypter ihre eigene Welt verstanden.</p>

<h2>Wie 13 Tage Tatsachlich Aussehen</h2>
<p><strong>Die Wustenbewegung</strong> eroffnet normalerweise die Reise. Sie fahren von Kairo in die Westliche Wuste, durch Landschaften, von denen die meisten Reisenden noch nie gehort haben. Sie schlafen im Freien unter einem Himmel fast ohne Lichtverschmutzung.</p>
<p><strong>Die Nil- und Luxor-Bewegung</strong> ist die andere Halfte. Der Tempel von Karnak allein verdient einen halben Tag. Das Tal der Konige, die Kolosse von Memnon, die Tempel von Luxor bei Sonnenuntergang, wenn der Stein die Farbe von Honig annimmt.</p>
<p>Dreizehn Tage geben Ihnen Raum, beides zu tun, ohne sich durch eines davon gehetzt zu fuhlen.</p>

<h2>Fur Wen Diese Reise Wirklich Gedacht Ist</h2>
<p>Dies ist keine Reise fur jemanden, der einen Strandkorb und einen Cocktail mit Schirmchen mochte. Sie eignet sich fur Reisende, die moglicherweise ihre einzige Reise nach Agypten planen. Korperlich ist sie moderat.</p>

<h2>Einige Ehrliche Dinge, die Man Vor der Buchung Wissen Sollte</h2>
<p>Dreizehn Tage sind ein echtes Engagement. Die Temperaturen schwanken stark zwischen Tag und Nacht in der Wuste. Flexibilitat ist wichtiger als bei einem Einregionen-Reiseplan.</p>

<h2>Wann Man Reisen Sollte</h2>
<p>Der ideale Zeitraum liegt ungefahr zwischen Oktober und April. Die Tagestemperaturen in der Wuste sind angenehm, die Nachte kalt aber beherrschbar, und Luxors Tempel sind viel angenehmer, um stundenlang zu erkunden.</p>

<h2>Die Version von Agypten, die die Meisten Menschen Nie Sehen</h2>
<p>Jeder sieht die Pyramiden. Die meisten machen eine Nilkreuzfahrt. Fast niemand sieht beide Halften auf einer Reise, als zusammenhangende Reise statt als zwei separate Buchungen.</p>

<p><strong>Sehen Sie die vollstandige 13-Tage-Route</strong> — <a href="/de/journeys/13-days-grand-egypt-desert-oases-journey">Buchen Sie die 13-Tage-Reise jetzt</a></p>

<p>Wenn 13 Tage mehr sind, als Sie gerade einplanen konnen, deckt die kurzere <a href="/de/journeys/8-days-egypt-adventure-journey">8-Tage Agypten-Abenteuerreise</a> denselben wesentlichen Kontrast ab — Wuste und Luxor — in einem engeren Zeitfenster.</p>`,

  es: `<p>Hay un tipo particular de viajero que viene a Egipto una vez y pasa el resto de su vida tratando de describirlo a quienes no estuvieron alli. Hablan de las piramides, obviamente. Hablan del Nilo. Pero los que realmente luchan por encontrar las palabras son los que tambien pasaron una noche en el Desierto Occidental — los que vieron el Desierto Blanco pasar del dorado al rosa y luego a un blanco frio y brillante bajo la luna llena, y luego, unos dias despues, se pararon en la Sala Hipostila de Karnak tratando de procesar la magnitud de lo que los humanos construyeron tres mil anos antes de que nacieran.</p>

<h2>Por Que el Desierto y el Nilo Tienen Sentido como un Solo Viaje</h2>
<p>La historia de Egipto siempre ha sido una historia de contrastes. El Valle del Nilo es donde la civilizacion egipcia se construyo hacia arriba — templos, tumbas, dinastias. El Desierto Occidental es donde esa misma civilizacion se detuvo. Visitar ambos no es simplemente ver "mas de Egipto". Es ver la forma completa de como los egipcios entendian su propio mundo.</p>

<h2>Como se Ven Realmente 13 Dias</h2>
<p><strong>El movimiento del desierto</strong> suele abrir el viaje. Sales de El Cairo hacia el Desierto Occidental, a traves de paisajes que la mayoria de los viajeros nunca han escuchado. Duermes al aire libre bajo cielos con casi cero contaminacion luminica.</p>
<p><strong>El movimiento del Nilo y Luxor</strong> es la otra mitad. El Templo de Karnak solo merece medio dia. El Valle de los Reyes, los Colosos de Memnon, los templos de Luxor al atardecer cuando la piedra toma el color de la miel.</p>
<p>Trece dias te dan espacio para hacer ambas cosas sin sentirte apurado en ninguna.</p>

<h2>Para Quien Es Realmente Este Viaje</h2>
<p>Este no es un viaje para alguien que quiere una silla de playa y un coctel con sombrilla. Es para personas que se inquietan genuinamente en los tours turisticos estandar. Fisicamente, es moderado.</p>

<h2>Algunas Cosas Honestas que Saber Antes de Reservar</h2>
<p>Trece dias es un compromiso real. Las temperaturas oscilan fuertemente entre el dia y la noche en el desierto. La flexibilidad importa mas que en un itinerario de una sola region.</p>

<h2>Cuando Ir</h2>
<p>El momento ideal es aproximadamente de octubre a abril. Las temperaturas diurnas del desierto son comodas, las noches frias pero manejables, y los templos de Luxor son mucho mas agradables para recorrer durante horas.</p>

<h2>La Version de Egipto que la Mayoria de la Gente Nunca Ve</h2>
<p>Todos ven las piramides. La mayoria hace un crucero por el Nilo. Casi nadie ve ambas mitades en un solo viaje, construido como un recorrido coherente en lugar de dos reservas separadas cosidas despues.</p>

<p><strong>Ver el itinerario completo de 13 dias</strong> — <a href="/es/journeys/13-days-grand-egypt-desert-oases-journey">Reserva el viaje de 13 dias ahora</a></p>

<p>Si 13 dias te parece demasiado por ahora, el <a href="/es/journeys/8-days-egypt-adventure-journey">Viaje de Aventura por Egipto de 8 dias</a> cubre el mismo contraste esencial — desierto y Luxor — en una ventana mas corta.</p>`,

  it: `<p>C'e un tipo particolare di viaggiatore che viene in Egitto una volta e passa il resto della vita cercando di descriverlo a chi non c'era. Parlano delle piramidi, ovviamente. Parlano del Nilo. Ma quelli che davvero faticano a trovare le parole sono quelli che hanno anche trascorso una notte nel Deserto Occidentale — che hanno visto il Deserto Bianco passare dall'oro al rosa a un bianco freddo e luminoso sotto la luna piena, e poi, pochi giorni dopo, si sono trovati nella Sala Ipostila di Karnak cercando di elaborare l'immensita di cio che gli umani avevano costruito tremila anni prima della loro nascita.</p>

<h2>Perche il Deserto e il Nilo Hanno Senso come un Unico Viaggio</h2>
<p>La storia dell'Egitto e sempre stata una storia di contrasti. La Valle del Nilo e dove la civilta egizia si e costruita verso l'alto — templi, tombe, dinastie. Il Deserto Occidentale e dove quella stessa civilta si e fermata. Visitare entrambi non significa semplicemente vedere "piu Egitto". Significa vedere la forma completa di come gli egizi comprendevano il proprio mondo.</p>

<h2>Come Sono Davvero 13 Giorni</h2>
<p><strong>Il movimento del deserto</strong> apre solitamente il viaggio. Si parte dal Cairo verso il Deserto Occidentale, attraverso paesaggi di cui la maggior parte dei viaggiatori non ha mai sentito parlare. Si dorme all'aperto sotto cieli quasi privi di inquinamento luminoso.</p>
<p><strong>Il movimento del Nilo e Luxor</strong> e l'altra meta. Il Tempio di Karnak da solo merita mezza giornata. La Valle dei Re, i Colossi di Memnone, i templi di Luxor al tramonto quando la pietra assume il colore del miele.</p>
<p>Tredici giorni vi danno lo spazio per fare entrambe le cose senza sentirvi affrettati.</p>

<h2>Per Chi e Davvero Questo Viaggio</h2>
<p>Questo non e un viaggio per chi vuole una sdraio e un cocktail con l'ombrellino. E per persone che si agitano genuinamente nei tour standard. Fisicamente, e moderato.</p>

<h2>Alcune Cose Oneste da Sapere Prima di Prenotare</h2>
<p>Tredici giorni sono un impegno reale. Le temperature oscillano fortemente tra giorno e notte nel deserto. La flessibilita conta piu che in un itinerario mono-regione.</p>

<h2>Quando Andare</h2>
<p>Il periodo ideale e approssimativamente da ottobre ad aprile. Le temperature diurne del deserto sono confortevoli, le notti fredde ma gestibili, e i templi di Luxor sono molto piu piacevoli da esplorare per ore.</p>

<h2>La Versione dell'Egitto che la Maggior Parte delle Persone Non Vede Mai</h2>
<p>Tutti vedono le piramidi. La maggior parte fa una crociera sul Nilo. Quasi nessuno vede entrambe le meta in un solo viaggio, costruito come un percorso coerente piuttosto che due prenotazioni separate cucite insieme.</p>

<p><strong>Vedi l'itinerario completo di 13 giorni</strong> — <a href="/it/journeys/13-days-grand-egypt-desert-oases-journey">Prenota il viaggio di 13 giorni ora</a></p>

<p>Se 13 giorni ti sembra troppo per ora, il <a href="/it/journeys/8-days-egypt-adventure-journey">Viaggio Avventura Egitto di 8 giorni</a> copre lo stesso contrasto essenziale — deserto e Luxor — in una finestra piu stretta.</p>`,

  nl: `<p>Er is een bijzonder type reiziger dat een keer naar Egypte komt en de rest van hun leven besteedt aan het proberen het te beschrijven aan mensen die er niet bij waren. Ze praten over de piramides, natuurlijk. Ze praten over de Nijl. Maar degenen die echt moeite hebben het onder woorden te brengen zijn degenen die ook een nacht in de Westelijke Woestijn hebben doorgebracht — die de Witte Woestijn zagen veranderen van goud naar roze naar een koud, gloeiend wit onder de volle maan, en dan, een paar dagen later, in de Hypostylezaal van Karnak stonden.</p>

<h2>Waarom de Woestijn en de Nijl Logisch Zijn als Een Reis</h2>
<p>Het verhaal van Egypte is altijd een verhaal van contrast geweest. De Nijlvallei is waar de Egyptische beschaving zichzelf opwaarts bouwde — tempels, graven, dynastieen. De Westelijke Woestijn is waar diezelfde beschaving stopte. Beide bezoeken is niet simpelweg "meer van Egypte" zien. Het is het volledige beeld zien van hoe de Egyptenaren hun eigen wereld begrepen.</p>

<h2>Hoe 13 Dagen er Werkelijk Uitzien</h2>
<p><strong>De woestijnbeweging</strong> opent meestal de reis. U vertrekt vanuit Cairo naar de Westelijke Woestijn, door landschappen waarvan de meeste reizigers nog nooit hebben gehoord. U slaapt in de open lucht onder hemels met bijna geen lichtvervuiling.</p>
<p><strong>De Nijl- en Luxorbeweging</strong> is de andere helft. De tempel van Karnak alleen al verdient een halve dag. Het Dal der Koningen, de Kolossen van Memnon, de tempels van Luxor bij zonsondergang wanneer het steen de kleur van honing aanneemt.</p>
<p>Dertien dagen geven u ruimte om beide te doen zonder u door een van beide gehaast te voelen.</p>

<h2>Voor Wie Deze Reis Werkelijk Bedoeld Is</h2>
<p>Dit is geen reis voor iemand die een strandstoel en een cocktail met een parasolletje wil. Het is voor mensen die echt onrustig worden bij standaard pakketreizen. Lichamelijk is het gematigd.</p>

<h2>Enkele Eerlijke Dingen om te Weten voor u Boekt</h2>
<p>Dertien dagen is een serieuze toezegging. De temperaturen schommelen sterk tussen dag en nacht in de woestijn. Flexibiliteit is belangrijker dan bij een eenregio-reisschema.</p>

<h2>Wanneer te Gaan</h2>
<p>Het ideale moment is ruwweg oktober tot april. De dagtemperaturen in de woestijn zijn comfortabel, de nachten koud maar beheersbaar, en de tempels van Luxor zijn veel aangenamer om urenlang te verkennen.</p>

<h2>De Versie van Egypte die de Meeste Mensen Nooit Zien</h2>
<p>Iedereen ziet de piramides. De meesten maken een Nijlcruise. Bijna niemand ziet beide helften op een reis, gebouwd als een samenhangend traject in plaats van twee afzonderlijke boekingen achteraf aan elkaar genaaid.</p>

<p><strong>Bekijk de volledige 13-daagse route</strong> — <a href="/nl/journeys/13-days-grand-egypt-desert-oases-journey">Boek de 13-daagse reis nu</a></p>

<p>Als 13 dagen nu te veel voelt, dekt de kortere <a href="/nl/journeys/8-days-egypt-adventure-journey">8-daagse Egypte Avonturenreis</a> hetzelfde essentiele contrast — woestijn en Luxor — in een korter tijdsvenster.</p>`,

  pt: `<p>Ha um tipo particular de viajante que vem ao Egito uma vez e passa o resto da vida tentando descreve-lo para quem nao esteve la. Falam das piramides, obviamente. Falam do Nilo. Mas os que realmente lutam para colocar em palavras sao os que tambem passaram uma noite no Deserto Ocidental — que viram o Deserto Branco passar do dourado ao rosa e depois a um branco frio e brilhante sob a lua cheia, e entao, poucos dias depois, ficaram de pe no Salao Hipostilo de Karnak tentando processar a escala do que os humanos construiram tres mil anos antes de terem nascido.</p>

<h2>Por Que o Deserto e o Nilo Fazem Sentido como Uma So Viagem</h2>
<p>A historia do Egito sempre foi uma historia de contraste. O Vale do Nilo e onde a civilizacao egipcia se construiu para cima — templos, tumbas, dinastias. O Deserto Ocidental e onde essa mesma civilizacao parou. Visitar ambos nao e simplesmente ver "mais do Egito". E ver a forma completa de como os egipcios entendiam seu proprio mundo.</p>

<h2>Como Sao Realmente 13 Dias</h2>
<p><strong>O movimento do deserto</strong> geralmente abre a viagem. Voce sai do Cairo para o Deserto Ocidental, atraves de paisagens das quais a maioria dos viajantes nunca ouviu falar. Voce dorme ao ar livre sob ceus com quase zero poluicao luminosa.</p>
<p><strong>O movimento do Nilo e Luxor</strong> e a outra metade. O Templo de Karnak sozinho merece meio dia. O Vale dos Reis, os Colossos de Memnon, os templos de Luxor ao por do sol quando a pedra assume a cor do mel.</p>
<p>Treze dias dao espaco para fazer ambos sem se sentir apressado em nenhum deles.</p>

<h2>Para Quem Esta Viagem Realmente E</h2>
<p>Esta nao e uma viagem para quem quer uma cadeira de praia e um coquetel com guarda-chuva. E para pessoas que ficam genuinamente inquietas em tours padrao. Fisicamente, e moderada.</p>

<h2>Algumas Coisas Honestas para Saber Antes de Reservar</h2>
<p>Treze dias e um compromisso real. As temperaturas oscilam fortemente entre dia e noite no deserto. A flexibilidade importa mais do que em um roteiro de uma unica regiao.</p>

<h2>Quando Ir</h2>
<p>O momento ideal e aproximadamente de outubro a abril. As temperaturas diurnas do deserto sao confortaveis, as noites frias mas gerenciaveis, e os templos de Luxor sao muito mais agradaveis para explorar por horas.</p>

<h2>A Versao do Egito que a Maioria das Pessoas Nunca Ve</h2>
<p>Todos veem as piramides. A maioria faz um cruzeiro pelo Nilo. Quase ninguem ve ambas as metades em uma unica viagem, construida como um percurso coerente em vez de duas reservas separadas costuradas depois.</p>

<p><strong>Veja o roteiro completo de 13 dias</strong> — <a href="/pt/journeys/13-days-grand-egypt-desert-oases-journey">Reserve a viagem de 13 dias agora</a></p>

<p>Se 13 dias parece demais por agora, a mais curta <a href="/pt/journeys/8-days-egypt-adventure-journey">Viagem de Aventura pelo Egito de 8 dias</a> cobre o mesmo contraste essencial — deserto e Luxor — em uma janela mais curta.</p>`,

  zh: `<p>有一种特别的旅行者，来埃及一次，余生都在试图向那些没有去过的人描述它。他们谈论金字塔，当然。他们谈论尼罗河。但真正难以用语言表达的，是那些也在西部沙漠度过一夜的人——他们看着白沙漠从金色变成粉色，再变成满月下冰冷、发光的白色，然后几天后站在卡纳克的多柱大厅里，试图理解人类在他们出生前三千年所建造的宏伟规模。</p>

<h2>为什么沙漠和尼罗河适合作为一次旅行</h2>
<p>埃及的故事一直是一个关于对比的故事。尼罗河谷是埃及文明向上建造的地方——神殿、陵墓、王朝。西部沙漠是同一文明停止的地方。同时参观两者不仅仅是看到"更多的埃及"。而是看到埃及人如何理解自己世界的完整图景——河流沿岸的秩序，以及超越它的神秘。</p>

<h2>13天实际上是什么样的</h2>
<p><strong>沙漠部分</strong>通常开启旅程。你从开罗出发前往西部沙漠，穿越大多数旅行者从未听说过的景观。你在几乎没有光污染的天空下露天睡觉。</p>
<p><strong>尼罗河和卢克索部分</strong>是另一半。卡纳克神殿本身就值得花半天时间。帝王谷、门农巨像、日落时分当石头变成蜂蜜色的卢克索和卡纳克神殿。</p>
<p>十三天给你足够的空间去体验两者，而不会感到匆忙。</p>

<h2>这次旅行真正适合谁</h2>
<p>这不是一个想要沙滩椅和带小伞鸡尾酒的人的旅行。它适合那些在标准旅行团中真正感到不安的人。身体要求适中。</p>

<h2>预订前需要了解的一些诚实事项</h2>
<p>十三天是一个真正的承诺。沙漠中日夜温差剧烈。灵活性比单一地区行程更重要。</p>

<h2>何时出发</h2>
<p>最佳时间大约在十月到四月之间。沙漠白天温度舒适，夜晚寒冷但可控，卢克索的神殿也更适合长时间步行参观。</p>

<h2>大多数人从未见过的埃及版本</h2>
<p>每个人都会看到金字塔。大多数人会体验尼罗河游船。几乎没有人在同一次旅行中看到两半，作为一个连贯的旅程而不是事后拼凑的两个单独预订。</p>

<p><strong>查看完整的13天行程</strong> — <a href="/zh/journeys/13-days-grand-egypt-desert-oases-journey">立即预订13天旅程</a></p>

<p>如果13天目前超出你的时间范围，较短的<a href="/zh/journeys/8-days-egypt-adventure-journey">8天埃及冒险之旅</a>涵盖了相同的核心对比——沙漠和卢克索——在更紧凑的时间窗口内。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "Is 13 days too long for one trip to Egypt?",
    questionAr: "هل 13 يومًا فترة طويلة جدًا لرحلة واحدة إلى مصر؟",
    questionI18n: {
      fr: "13 jours, c'est trop long pour un seul voyage en Egypte ?",
      de: "Sind 13 Tage zu lang fur eine einzige Reise nach Agypten?",
      es: "Son 13 dias demasiado para un solo viaje a Egipto?",
      it: "13 giorni sono troppi per un solo viaggio in Egitto?",
      nl: "Is 13 dagen te lang voor een reis naar Egypte?",
      pt: "13 dias e tempo demais para uma unica viagem ao Egito?",
      zh: "13天对于一次埃及之旅来说太长了吗？",
    },
    answerEn:
      "Not at all. Thirteen days gives you enough time to experience both the Western Desert and Luxor without rushing through either. Most travelers say afterward that they wished they'd had even more time.",
    answerAr:
      "على الإطلاق. ثلاثة عشر يومًا تمنحك وقتًا كافيًا لتجربة الصحراء الغربية والأقصر دون تسرع في أي منهما. معظم المسافرين يقولون بعد العودة إنهم تمنوا لو كان لديهم وقت أكثر.",
    answerI18n: {
      fr: "Pas du tout. Treize jours vous donnent assez de temps pour decouvrir le Desert Occidental et Louxor sans vous presser. La plupart des voyageurs disent ensuite qu'ils auraient aime avoir encore plus de temps.",
      de: "Uberhaupt nicht. Dreizehn Tage geben Ihnen genug Zeit, sowohl die Westliche Wuste als auch Luxor zu erleben, ohne sich zu hetzen.",
      es: "En absoluto. Trece dias te dan tiempo suficiente para experimentar tanto el Desierto Occidental como Luxor sin prisas.",
      it: "Assolutamente no. Tredici giorni vi danno abbastanza tempo per vivere sia il Deserto Occidentale che Luxor senza fretta.",
      nl: "Helemaal niet. Dertien dagen geven u genoeg tijd om zowel de Westelijke Woestijn als Luxor te ervaren zonder haast.",
      pt: "De forma alguma. Treze dias dao tempo suficiente para vivenciar tanto o Deserto Ocidental quanto Luxor sem pressa.",
      zh: "完全不会。十三天给你足够的时间体验西部沙漠和卢克索，不需要匆忙赶路。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "Can I do a shorter version of this trip?",
    questionAr: "هل يمكنني القيام بنسخة أقصر من هذه الرحلة؟",
    questionI18n: {
      fr: "Puis-je faire une version plus courte de ce voyage ?",
      de: "Kann ich eine kurzere Version dieser Reise machen?",
      es: "Puedo hacer una version mas corta de este viaje?",
      it: "Posso fare una versione piu breve di questo viaggio?",
      nl: "Kan ik een kortere versie van deze reis doen?",
      pt: "Posso fazer uma versao mais curta desta viagem?",
      zh: "我可以选择更短的行程版本吗？",
    },
    answerEn:
      "Yes. The 8-Day Egypt Adventure Journey covers the same essential contrast — desert and Luxor — in a tighter window. It's a great first step if 13 days feels like more than you can commit to right now.",
    answerAr:
      "نعم. رحلة مغامرة مصر في 8 أيام تغطي نفس التباين الأساسي — الصحراء والأقصر — في نافذة زمنية أضيق. إنها خطوة أولى ممتازة إذا كانت 13 يومًا أكثر مما يمكنك الالتزام به حاليًا.",
    answerI18n: {
      fr: "Oui. Le Voyage Aventure Egypte de 8 jours couvre le meme contraste essentiel — desert et Louxor — dans un delai plus court.",
      de: "Ja. Die 8-Tage Agypten-Abenteuerreise deckt denselben wesentlichen Kontrast ab — Wuste und Luxor — in einem kurzeren Zeitrahmen.",
      es: "Si. El Viaje de Aventura por Egipto de 8 dias cubre el mismo contraste esencial — desierto y Luxor — en una ventana mas corta.",
      it: "Si. Il Viaggio Avventura Egitto di 8 giorni copre lo stesso contrasto essenziale — deserto e Luxor — in una finestra piu breve.",
      nl: "Ja. De 8-daagse Egypte Avonturenreis dekt hetzelfde essentiele contrast — woestijn en Luxor — in een korter tijdsvenster.",
      pt: "Sim. A Viagem de Aventura pelo Egito de 8 dias cobre o mesmo contraste essencial — deserto e Luxor — em uma janela mais curta.",
      zh: "可以。8天埃及冒险之旅涵盖相同的核心对比——沙漠和卢克索——在更紧凑的时间窗口内。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "What is the best time of year for this trip?",
    questionAr: "ما هو أفضل وقت في السنة لهذه الرحلة؟",
    questionI18n: {
      fr: "Quelle est la meilleure periode de l'annee pour ce voyage ?",
      de: "Was ist die beste Jahreszeit fur diese Reise?",
      es: "Cual es la mejor epoca del ano para este viaje?",
      it: "Qual e il periodo migliore dell'anno per questo viaggio?",
      nl: "Wat is de beste tijd van het jaar voor deze reis?",
      pt: "Qual e a melhor epoca do ano para esta viagem?",
      zh: "一年中什么时候最适合这次旅行？",
    },
    answerEn:
      "October through April is the sweet spot. Desert days are comfortable, nights are cold but manageable, and Luxor's temples are far more pleasant to explore without the extreme summer heat.",
    answerAr:
      "من أكتوبر إلى أبريل هي الفترة المثالية. أيام الصحراء مريحة، والليالي باردة لكن يمكن التعامل معها، ومعابد الأقصر أكثر متعة بكثير للاستكشاف دون حرارة الصيف الشديدة.",
    answerI18n: {
      fr: "D'octobre a avril est le moment ideal. Les journees au desert sont confortables, les nuits froides mais gerables, et les temples de Louxor sont bien plus agreables sans la chaleur extreme de l'ete.",
      de: "Oktober bis April ist der ideale Zeitraum. Die Wustentage sind angenehm, die Nachte kalt aber beherrschbar, und Luxors Tempel sind ohne extreme Sommerhitze viel angenehmer zu erkunden.",
      es: "De octubre a abril es el momento ideal. Los dias del desierto son comodos, las noches frias pero manejables, y los templos de Luxor son mucho mas agradables sin el calor extremo del verano.",
      it: "Da ottobre ad aprile e il periodo ideale. Le giornate nel deserto sono confortevoli, le notti fredde ma gestibili, e i templi di Luxor sono molto piu piacevoli da esplorare senza il caldo estivo estremo.",
      nl: "Oktober tot april is het ideale moment. De woestijndagen zijn comfortabel, de nachten koud maar beheersbaar, en Luxors tempels zijn veel aangenamer om te verkennen zonder de extreme zomerhitte.",
      pt: "De outubro a abril e o momento ideal. Os dias no deserto sao confortaveis, as noites frias mas gerenciaveis, e os templos de Luxor sao muito mais agradaveis sem o calor extremo do verao.",
      zh: "十月到四月是最佳时间。沙漠白天舒适，夜晚寒冷但可控，卢克索神殿在没有极端夏季高温的情况下更适合参观。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "13-days-desert-temples-luxor",
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
  image: "/img/13-days-desert-temples-luxor.jpg",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "egypt 13 day trip",
    "desert and luxor trip",
    "western desert egypt",
    "luxor temples",
    "egypt itinerary",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "13 days egypt desert luxor",
    "egypt desert and temples trip",
  ]),
  secondaryKeywords: JSON.stringify([
    "western desert luxor itinerary",
    "egypt two week trip",
    "desert camping and luxor temples",
    "grand egypt journey",
  ]),
  readingTime: 8,
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
