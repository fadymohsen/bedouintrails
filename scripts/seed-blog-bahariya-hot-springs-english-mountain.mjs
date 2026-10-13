/**
 * Blog: Bahariya's Hot Springs and the Mountain the British Left Behind
 * Slug: bahariya-hot-springs-english-mountain
 * Run with: node scripts/seed-blog-bahariya-hot-springs-english-mountain.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr = "ينابيع البحرية الساخنة والجبل الذي تركه الإنجليز خلفهم";

const metaTitleAr =
  "ينابيع البحرية الساخنة وجبل الإنجليز | دليل كامل | Bedouin Trails (2026)";

const metaDescAr =
  "دليلك إلى ينابيع واحة البحرية الساخنة وجبل الإنجليز — تاريخ، توقيت الزيارة، ونصائح عملية لتجربة مختلفة في قلب الصحراء الغربية المصرية.";

const excerptAr =
  "البحرية ليست مجرد محطة عبور إلى الصحراء البيضاء. ينابيعها الساخنة التي يستخدمها السكان منذ قرون، وجبل الإنجليز الذي أقامه الجيش البريطاني خلال الحرب العالمية الثانية — أمران تحتفظ بهما الواحة لنفسها بهدوء بينما تذهب الأضواء لمكان آخر.";

const contentAr = `<p>هناك نوع خاص من الصمت في واحة البحرية عند الغسق، حين يكون أغلب زوار اليوم الواحد قد توجهوا نحو الصحراء البيضاء، ولا يتبقى من صوت سوى خرير مياه تتصاعد من مكان عميق تحت الأرض. السكان المحليون يستحمون في هذه المياه منذ قرون. تصل إلى السطح وهي ساخنة بالفعل — أحيانًا قريبة من حرارة جسم الإنسان، وأحيانًا ساخنة بما يكفي لتجعلك تنزل إليها بحذر — حاملة معادن من خزان جوفي لا علاقة له بنهر النيل، وكل علاقته بمصر أخرى أقدم: تلك الموجودة تحت الرمال بدلًا من على ضفاف النهر.</p>

<p>هذه هي البحرية التي لا يخطط لها معظم الزوار أبدًا. يأتون من أجل تكوينات الطباشير في الصحراء البيضاء، وهذا سبب كافٍ بمفرده. لكن واحة البحرية نفسها، التي يعبرونها في الطريق، تحمل أمرين نادرًا ما يدخلان في خطة الزائر لأول مرة: مجموعة من الينابيع الساخنة الطبيعية التي ما زال السكان المحليون يعاملونها كدواء بقدر ما يعاملونها كمتعة، وتلة عارية جرفتها الرياح حوّلها الجيش البريطاني إلى نقطة مراقبة، تُعرف اليوم ببساطة باسم جبل الإنجليز.</p>

<p><strong>هذا الجمع بين ينابيع حرارية وتاريخ حربي هادئ هو ما يجعل البحرية أكثر من مجرد محطة عبور إلى الصحراء البيضاء.</strong></p>

<h2>مياه تصل ساخنة من الأساس</h2>
<p>تقع واحة البحرية فوق جزء من نظام الحجر الرملي النوبي الجوفي، أحد أكبر احتياطيات المياه العذبة تحت الأرض على وجه الكوكب، يمتد تحت مصر وليبيا والسودان وتشاد. في معظم واحات الصحراء الغربية، تُستخدم هذه المياه فقط لري بساتين النخيل. في البحرية، في عدد قليل من المواقع، تصل إلى السطح ساخنة بالفعل، حاملة معادن ذائبة يعتقد السكان المحليون منذ زمن طويل أنها تخفف آلام المفاصل ومشاكل الجلد.</p>

<p><strong>بئر الماطر</strong> هو النبع الذي ينتهي إليه معظم الزوار، أساسًا لأنه يخدم غرضًا عمليًا أيضًا: قناة ري فعّالة تصادف أنها ساخنة بما يكفي للاستحمام فيها، محاطة بنخيل يمنح ظلًا طويلًا بحلول العصر. إنه ليس مكانًا مُجهزًا أو عليه لوحات إرشادية مثل منتجع صحي — لا رسوم دخول، لا غرف تبديل ملابس، لا شيء مُصمم تجاريًا. تجد فقط المكان الذي يذهب إليه السكان بعد العمل، وتنزل إليه.</p>

<p><strong>بئر الغابة</strong> يقع في عمق الصحراء أكثر، أبرد وأقل تركيزًا بالمعادن، ويُقرن غالبًا في برامج الرحلات بوقفة لمشاهدة غروب الشمس فوق الرمال المفتوحة. <strong>بئر الرملة</strong> يتميز بحرارة أعلى بشكل ملحوظ، قريب من كونه حمامًا حراريًا حقيقيًا، ويُحجز غالبًا لوقت لاحق من اليوم حين يكون الهواء قد برد بما يكفي لتبدو فكرة النزول في مياه ساخنة أخرى جذابة فعلًا لا تُحتمل.</p>

<p>لا شيء من هذه الينابيع بنية تحتية سياحية مصقولة، وهذا بالضبط ما يجعلها مميزة. إنها ينابيع محلية فعّالة تصادف أيضًا أنها أماكن استثنائية ليجلس فيها المسافر ساكنًا لعشرين دقيقة. إذا كنت تخطط لمعرفة أي نبع يناسب جدولك واهتماماتك قبل الوصول، فإن <a href="/ar/blogs/bahariya-oasis-egypt-guide">دليلنا الشامل لواحة البحرية</a> يشرح توقيت ولوجستيات كل نبع بتفصيل أكبر.</p>

<h2>تلة تركتها حرب الصحراء خلفها</h2>
<p>ترتفع من أرض الواحة المسطحة على مسافة قصيرة بالسيارة من باويطي، ولا يبدو جبل الإنجليز من بعيد شيئًا مميزًا — فقط تلة أخرى داكنة متآكلة بين عشرات متناثرة في حوض البحرية. ما يجعله مختلفًا يقع على قمته: بقايا نقطة مراقبة بريطانية صغيرة، بُنيت خلال الحرب العالمية الثانية لمراقبة ممر صحراوي كان من الممكن، نظريًا، أن تستخدمه قوات المحور لتطويق مواقع الحلفاء شمالًا.</p>

<p>البريطانيون لم يخوضوا معركة هنا. ما بنوه كان أكثر هدوءًا من ذلك — نقطة مراقبة، بعض التحصينات الأساسية، مكان لمراقبة أفق خالٍ من أي حركة لم تأتِ أبدًا، على الأقل بحسب معظم الروايات. ما تبقى اليوم متواضع: جدران حجرية منخفضة، آثار مبنى صغير، حطام متناثر ظل دون أن يُمس إلى حد كبير لثمانية عقود، لأنه لم يكن هناك سبب كبير يدفع أحدًا للتعرض له.</p>

<p>ما يجعل التسلق مستحقًا ليس الأثر نفسه حقيقةً، بل السبب الذي دفع البريطانيين لاختيار هذه التلة من الأساس. من القمة، تحصل على رؤية غير منقطعة عبر أرض الواحة كاملة: أسطح باويطي، البقع الأغمق من بساتين النخيل، الصحراء المفتوحة الباهتة خلفها، وفي مساء صافٍ، رؤية واضحة بما يكفي لتفهم بالضبط ما كانت نقطة مراقبة في زمن الحرب تبحث عنه. إنها واحدة من أفضل نقاط مشاهدة الغروب في البحرية، تحديدًا لأن أحدًا تقريبًا لا يعاملها كذلك.</p>

<p>التسلق نفسه قصير وبسيط لا تقني — صخور متفرقة، لا مسار محدد، لا شيء يتطلب معدات، لكنه يستحق حذاءً مناسبًا وكشاف إضاءة إذا كنت تخطط له وقت الغروب وتنوي النزول بعد حلول الظلام.</p>

<h2>يوم مختلف في الواحة</h2>
<p>يتعامل معظم الناس مع البحرية كنقطة عبور — مكان تنام فيه قبل الصحراء البيضاء أو بعدها، تتوقف فيه للغداء، وتستمر. أن تقضي يومًا كاملًا داخل الواحة نفسها، بدلًا من مجرد العبور منها، يتحول إلى نوع مختلف تمامًا من الرحلة. صباح في أحد الينابيع الساخنة، مشية أبطأ عبر حي باويطي القديم ومنازله المبنية من البازلت المحلي بالأسود والأبيض، ثم تسلّق جبل الإنجليز في الساعة التي تسبق الغروب — يوم مبني على إيقاع الواحة الخاص بها بدلًا من إيقاع الكثبان الأبعد.</p>

<p>هذا الجمع بين الينابيع الحرارية وتاريخ الصحراء هو أيضًا ما يفاجئ الزوار لأول مرة أكثر من أي شيء آخر. البحرية ليست فقط محطة انتظار قبل الوصول إلى الكثبان، بل لها قصتها الخاصة ذات الطبقات المتعددة، تبدأ بصخور بازلتية بركانية، وتمر عبر آبار ومقابر من العصر الروماني، وتنتهي، بشكل أحدث، بتلة احتلها البريطانيون بهدوء ثم تركوها. المسافرون الراغبون في معرفة كيف يتناسب كل ذلك مع برنامج أشمل للصحراء البيضاء، غالبًا ما يجدون أسهل طريقة هي دمج يوم الواحة مباشرة في <a href="/ar/blogs/bahariya-oasis-white-desert-2-day-itinerary">برنامج يومين بين البحرية والصحراء البيضاء</a>، الذي يعطي الينابيع والجبل وقتًا كافيًا بدلًا من حشرهما في وقفة غداء.</p>

<h2>اختيار التوقيت الصحيح</h2>
<p>الينابيع الساخنة وتلة بلا ظل على الإطلاق، لكل منهما رأي قوي بشأن أفضل وقت لزيارتهما، وهذان الرأيان يشيران إلى اتجاهين مختلفين قليلًا. الينابيع تكون فعلًا في أفضل حالاتها من أواخر الخريف حتى أوائل الربيع، حين يبدو الاستحمام في مياه معدنية دافئة بعد مساء صحراوي بارد أمرًا منعشًا لا تكرارًا غير ضروري — في عز الصيف، حين تتجاوز درجات الحرارة النهارية في البحرية الأربعين درجة بانتظام، تنخفض جاذبية النزول في مياه ساخنة أخرى بشكل حاد، وإن كانت حرارة بئر الغابة المعتدلة لا تزال تصلح كوقفة مسائية لطيفة حتى في ذلك الوقت.</p>

<p>جبل الإنجليز، على النقيض، يستحق التسلق في أي وقت تقريبًا من السنة، طالما تجنبت شمس الظهيرة — غياب الظل على طول الصعود يجعل تسلق فترة ما بعد الظهر الصيفية تجربة غير مريحة فعلًا، بينما يعمل تسلق الصباح الباكر أو ما قبل الغروب بشكل مريح في أي فصل. إذا كنت تخطط ليوم كامل حول الاثنين، فالترتيب الطبيعي هو الينابيع في الصباح أو الظهيرة حين يكون الجو أبرد، ثم الجبل في الساعتين السابقتين للغروب حين يكون الضوء والمنظر في أفضل حالاتهما.</p>

<h2>أشياء عملية يجدر معرفتها قبل الذهاب</h2>
<p>لأن هذه الأماكن ليست مُجهزة سياحيًا بالمعنى المعتاد، بعض التحضير البسيط يفرق كثيرًا. عند الينابيع، يُفضَّل ارتداء ملابس سباحة محتشمة تحت ثوب أو قميص خفيف، فالمكان لا يزال مساحة محلية يستخدمها السكان أيضًا، ولا توجد غرف خاصة لتبديل الملابس في أغلب المواقع. منشفة وزوج ملابس جافة إضافي في السيارة أمر يستحق التفكير فيه، وكذلك زجاجة مياه، لأن الجلوس في ماء ساخن في مناخ صحراوي يُنهك الجسم من السوائل أسرع مما يتوقع كثير من الزوار.</p>

<p>بالنسبة لجبل الإنجليز، فالأهم هو التوقيت والحذاء. لا يوجد مسار واضح أو درابزين، والصخور السائبة تجعل النزول بعد الغروب مباشرة أكثر صعوبة من الصعود نفسه، فحذاء برباط جيد وكشاف يدوي أو على الهاتف يكفيان لتفادي أي مفاجآت. ولأن الموقع يفتقر لأي لوحات أو حراسة، لا بأس من ترك أثر التلة كما وجدته — فهذه بقايا تاريخية هادئة، لا معرضًا مفتوحًا يُسمح بأخذ شيء منه.</p>

<h2>لماذا ينجح هذا الجمع</h2>
<p>ما يربط بين الينابيع الساخنة وجبل الإنجليز ليس موضوعًا واضحًا — أحدهما يتعلق بمياه تتصاعد من عمق الأرض، والآخر بحرب لم تقع هنا فعلًا في معظمها. لكن كلاهما أمران احتفظت البحرية بهما لنفسها بهدوء بينما ذهب بريق الأضواء إلى تكوينات الطباشير المذهلة في الصحراء البيضاء على مسافة قريبة من الطريق. الاستحمام في مياه وثق فيها السكان المحليون لأجيال، ثم الوقوف على تلة كان الجنود يرصدون منها صحراء خالية بحثًا عن تهديد لم يتحقق أبدًا — معًا، يجعلان الواحة نفسها وجهة ليوم كامل، بدلًا من كونها فقط المكان الذي تتوقف فيه للتزود بالوقود قبل "الرحلة الحقيقية".</p>

<p>إنه تذكير بأنه في منطقة غنية بهذا القدر من الطبقات التاريخية مثل الصحراء الغربية المصرية، أكثر المحطات التي تبقى في الذاكرة ليست دائمًا تلك التي تحمل الاسم الأكثر شهرة. أحيانًا تكون نبعًا ساخنًا بلا لوحة، وتلة لم يكلف أحد آخر نفسه عناء تسلقها.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "Bahariya's Hot Springs and the Mountain the British Left Behind";

const metaTitleEn =
  "Bahariya Hot Springs & Gebel el-Ingleez: Complete Guide | Bedouin Trails (2026)";

const metaDescEn =
  "Your guide to Bahariya Oasis's natural hot springs and Gebel el-Ingleez (the English Mountain) — history, practical tips, and how to time your visit to Egypt's Western Desert.";

const excerptEn =
  "Bahariya isn't just a transit stop before the White Desert. Its natural hot springs — used by locals for centuries as medicine as much as leisure — and the WWII British hilltop lookout known as Gebel el-Ingleez are two things the oasis has quietly kept to itself while the spotlight went elsewhere.";

const contentEn = `<p>There's a particular kind of silence in Bahariya Oasis at dusk, when the day-trippers have mostly moved on toward the White Desert and the only sound left is water bubbling up from somewhere deep underground. Locals have been soaking in that water for centuries. It arrives at the surface already warm — sometimes close to body temperature, sometimes hot enough to make you ease in slowly — carrying minerals up from an aquifer that has nothing to do with the Nile and everything to do with a different, older Egypt: the one that exists below the sand rather than along the river.</p>

<p>That's the Bahariya most visitors never plan for. They come for the White Desert's chalk formations, and fair enough — those are reason enough on their own. But Bahariya itself, the oasis they pass through on the way, holds two things that rarely make it onto a first-timer's itinerary: a scatter of natural hot springs that locals still treat as medicine as much as leisure, and a stripped, wind-scoured hill the British army once turned into a lookout post, now known simply as Gebel el-Ingleez — the English Mountain.</p>

<h2>Water That Comes Up Already Warm</h2>
<p>Bahariya sits over a section of the Nubian Sandstone Aquifer System, one of the largest underground freshwater reserves on the planet, stretching beneath Egypt, Libya, Sudan, and Chad. In most of the Western Desert's oases, that water simply irrigates palm groves. In Bahariya, in a handful of spots, it surfaces already hot, carrying dissolved minerals that locals have long credited with easing joint pain and skin complaints.</p>
<p><strong>Bir El Mattar</strong> is the spring most visitors end up at, mainly because it doubles as something practical: a working irrigation channel that happens to be warm enough to bathe in, framed by palms that cast long shade by late afternoon. It's not built up or signposted like a spa — there's no entrance fee, no changing rooms, nothing branded. You just find the spot where locals go after work, and you get in.</p>
<p><strong>Bir El Ghaba</strong> sits deeper into the desert, cooler and less mineral-heavy, often paired on itineraries with a stop to watch the sun go down over open sand. <strong>Bir El Ramla</strong> runs notably hotter, close to a genuine thermal soak, and is usually reserved for later in the day when the air has cooled enough that climbing into hot water actually sounds appealing rather than unbearable.</p>
<p>None of these are polished tourist infrastructure, and that's precisely the point. They're functioning local springs that happen to also be extraordinary places for a traveler to sit still for twenty minutes. If you're mapping out which spring fits your schedule and interests before arriving, our <a href="/en/blogs/bahariya-oasis-egypt-guide">complete Bahariya Oasis guide</a> breaks down timing and logistics for each one in more depth.</p>

<h2>A Hill the Desert War Left Behind</h2>
<p>Rising out of the flat oasis floor a short drive from Bawiti, Gebel el-Ingleez doesn't look like much from a distance — just another dark, eroded hill among dozens scattered across Bahariya's basin. What makes it different sits on top: the remains of a small British observation post, built during the Second World War to keep watch over a desert corridor that Axis forces could, in theory, have used to outflank Allied positions further north.</p>
<p>The British never fought a battle here. What they built was quieter than that — a lookout, some basic fortifications, a place to watch an empty horizon for movement that, as far as most accounts suggest, never came. What's left today is modest: low stone walls, the footprint of a small structure, scattered debris that has sat largely undisturbed for eight decades because there's been little reason for anyone to touch it.</p>
<p>What makes the climb worth doing isn't really the ruin itself — it's the reason the British chose this hill in the first place. From the top, you get an uninterrupted view across the entire oasis floor: Bawiti's rooftops, the darker patches of palm groves, the pale open desert beyond, and on a clear evening, enough visibility to understand exactly what a wartime lookout would have been watching for. It's one of the better sunset points in Bahariya precisely because almost nobody treats it as one — most travelers are already at a hot spring or settling into camp by the time the light starts to turn.</p>
<p>The climb itself is short and unglamorous rather than technical — loose rock, no marked trail, nothing that requires gear, but worth decent shoes and a headlamp if you're timing it for sunset and walking back down after dark.</p>

<h2>A Different Kind of Oasis Day</h2>
<p>Most people treat Bahariya as a transit point — somewhere you sleep before or after the White Desert, maybe stop for lunch, keep moving. Spending an actual day inside the oasis itself, rather than just passing through it, turns out to be its own distinct kind of trip. Morning at one of the hot springs, a slower walk through Bawiti's old quarter and its black-and-white mudbrick houses built from local basalt, then the climb up Gebel el-Ingleez timed for the hour before sunset — it's a day built around the oasis's own rhythm rather than the White Desert's.</p>
<p>That pairing of thermal springs and desert history is also what tends to surprise first-time visitors most. Bahariya isn't just a staging ground for the dunes further out; it has its own layered story, starting with volcanic basalt outcrops, moving through Roman-era wells and tombs, and ending, more recently, with a hilltop the British quietly occupied and then left. Travelers who want to see how all of that ties into a fuller White Desert itinerary often find it easiest to build the oasis day directly into a <a href="/en/blogs/bahariya-oasis-white-desert-2-day-itinerary">two-day Bahariya and White Desert itinerary</a>, which gives the springs and the mountain proper time rather than squeezing them into a lunch stop.</p>

<h2>Getting the Timing Right</h2>
<p>Hot springs and a hilltop with zero shade both have strong opinions about when you should visit them, and those opinions point in slightly different directions. The springs are genuinely most enjoyable from late autumn through early spring, when soaking in warm mineral water after a cool desert evening feels restorative rather than redundant — in peak summer, when daytime temperatures in Bahariya regularly push past 40°C, the appeal of climbing into more hot water drops sharply, though Bir El Ghaba's milder temperature still works as a pleasant evening stop even then.</p>
<p>Gebel el-Ingleez, by contrast, is worth climbing almost any time of year, as long as you avoid the midday sun — the lack of shade on the ascent makes a summer afternoon climb genuinely unpleasant, while an early morning or pre-sunset climb works comfortably in any season. If you're building a full day around both, the natural order is springs in the morning or midday when it's cooler out, then the mountain in the two hours before sunset when the light and the view are both at their best.</p>

<h2>Why This Pairing Works</h2>
<p>What ties the hot springs and the English Mountain together isn't an obvious theme — one is about water rising from deep underground, the other about a war that mostly didn't happen here. But both are things Bahariya has quietly kept to itself while the spotlight went to the White Desert's dramatic chalk formations a bit further down the road. Soaking in water that locals have trusted for generations, then standing on a hill where soldiers once watched an empty desert for a threat that never materialized — together, they make the oasis itself the destination for a day, rather than just the place you stop to refuel before the "real" trip begins.</p>
<p>It's a reminder that in a region as layered as Egypt's Western Desert, the most memorable stop isn't always the one with the most famous name attached to it. Sometimes it's a warm spring with no sign, and a hill nobody else bothered to climb.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Les Sources Chaudes de Bahariya et la Montagne que les Britanniques ont Laissee",
  de: "Bahariya's Heisse Quellen und der Berg, den die Briten Zurueckliessen",
  es: "Los Manantiales Termales de Bahariya y la Montana que los Britanicos Dejaron Atras",
  it: "Le Sorgenti Termali di Bahariya e la Montagna che i Britannici Lasciarono",
  nl: "De Hete Bronnen van Bahariya en de Berg die de Britten Achterlieten",
  pt: "As Fontes Termais de Bahariya e a Montanha que os Britanicos Deixaram Para Tras",
  zh: "巴哈利亚的温泉与英国人留下的山丘",
};

const metaTitleI18n = {
  fr: "Sources Chaudes de Bahariya et Gebel el-Ingleez | Bedouin Trails (2026)",
  de: "Bahariya Heisse Quellen & Gebel el-Ingleez | Bedouin Trails (2026)",
  es: "Manantiales de Bahariya y Gebel el-Ingleez | Bedouin Trails (2026)",
  it: "Sorgenti Termali di Bahariya e Gebel el-Ingleez | Bedouin Trails (2026)",
  nl: "Bahariya Hete Bronnen & Gebel el-Ingleez | Bedouin Trails (2026)",
  pt: "Fontes Termais de Bahariya e Gebel el-Ingleez | Bedouin Trails (2026)",
  zh: "巴哈利亚温泉与英国山 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Votre guide des sources chaudes naturelles de Bahariya et de Gebel el-Ingleez — histoire, conseils pratiques et comment planifier votre visite dans le Desert Occidental egyptien.",
  de: "Ihr Leitfaden zu den naturlichen heissen Quellen von Bahariya und dem Gebel el-Ingleez — Geschichte, praktische Tipps und die beste Reisezeit fur die agyptische Westliche Wuste.",
  es: "Tu guia a los manantiales termales naturales de Bahariya y el Gebel el-Ingleez — historia, consejos practicos y como planificar tu visita al Desierto Occidental de Egipto.",
  it: "La tua guida alle sorgenti termali naturali di Bahariya e al Gebel el-Ingleez — storia, consigli pratici e come pianificare la visita nel Deserto Occidentale egiziano.",
  nl: "Uw gids voor de natuurlijke hete bronnen van Bahariya en de Gebel el-Ingleez — geschiedenis, praktische tips en hoe u uw bezoek aan de Egyptische Westelijke Woestijn plant.",
  pt: "Seu guia para as fontes termais naturais de Bahariya e o Gebel el-Ingleez — historia, dicas praticas e como planejar sua visita ao Deserto Ocidental egipcio.",
  zh: "巴哈利亚天然温泉和英国山（Gebel el-Ingleez）完整指南——历史、实用建议以及如何规划埃及西部沙漠之行。",
};

const excerptI18n = {
  fr: "Bahariya n'est pas qu'une simple etape avant le Desert Blanc. Ses sources chaudes naturelles et le poste d'observation britannique de la Seconde Guerre mondiale connu sous le nom de Gebel el-Ingleez sont deux choses que l'oasis garde discretement pour elle.",
  de: "Bahariya ist nicht nur eine Durchgangsstation vor der Weissen Wuste. Seine naturlichen heissen Quellen und der britische WWII-Aussichtspunkt Gebel el-Ingleez sind zwei Dinge, die die Oase still fur sich behalten hat.",
  es: "Bahariya no es solo una parada antes del Desierto Blanco. Sus manantiales termales naturales y el puesto de observacion britanico de la Segunda Guerra Mundial conocido como Gebel el-Ingleez son dos cosas que el oasis guarda discretamente para si mismo.",
  it: "Bahariya non e solo una tappa prima del Deserto Bianco. Le sue sorgenti termali naturali e il posto di osservazione britannico della Seconda Guerra Mondiale noto come Gebel el-Ingleez sono due cose che l'oasi tiene discretamente per se.",
  nl: "Bahariya is niet alleen een tussenstop voor de Witte Woestijn. De natuurlijke hete bronnen en de Britse WWII-uitkijkpost Gebel el-Ingleez zijn twee dingen die de oase stil voor zichzelf heeft gehouden.",
  pt: "Bahariya nao e apenas uma parada antes do Deserto Branco. Suas fontes termais naturais e o posto de observacao britanico da Segunda Guerra Mundial conhecido como Gebel el-Ingleez sao duas coisas que o oasis guarda discretamente para si.",
  zh: "巴哈利亚不仅仅是前往白色沙漠前的中转站。其天然温泉和二战时期英国瞭望站「英国山」（Gebel el-Ingleez）是这片绿洲悄然为自己保留的两件珍宝。",
};

const contentI18n = {
  fr: `<p>Il y a un silence particulier a Bahariya au crepuscule, quand les touristes a la journee sont partis vers le Desert Blanc et que le seul son restant est celui de l'eau qui remonte des profondeurs. Les habitants se baignent dans cette eau depuis des siecles. Elle arrive a la surface deja chaude, chargee de mineraux d'une nappe phreatique qui n'a rien a voir avec le Nil.</p>
<p>C'est le Bahariya que la plupart des visiteurs ne planifient jamais. Ils viennent pour les formations de craie du Desert Blanc, mais l'oasis elle-meme cache deux tresors: des sources chaudes naturelles et une colline que l'armee britannique a transformee en poste d'observation pendant la Seconde Guerre mondiale, connue aujourd'hui sous le nom de Gebel el-Ingleez.</p>
<h2>Une eau qui remonte deja chaude</h2>
<p>Bahariya se trouve au-dessus du systeme aquifere nubien, l'une des plus grandes reserves d'eau douce souterraine de la planete. <strong>Bir El Mattar</strong> est la source la plus visitee — un canal d'irrigation entour de palmiers, sans infrastructure touristique. <strong>Bir El Ghaba</strong> est plus frais et plus profond dans le desert. <strong>Bir El Ramla</strong> est le plus chaud, ideal en soiree.</p>
<h2>Une colline laissee par la guerre du desert</h2>
<p>Le Gebel el-Ingleez abrite les vestiges d'un petit poste d'observation britannique de la Seconde Guerre mondiale. Le sommet offre une vue panoramique sur toute l'oasis — l'un des meilleurs points de coucher de soleil de Bahariya que presque personne ne connait.</p>
<h2>Une journee differente dans l'oasis</h2>
<p>Sources chaudes le matin, vieille ville de Bawiti, puis montee au Gebel el-Ingleez avant le coucher du soleil. Pour integrer tout cela dans un itineraire Desert Blanc complet, consultez notre <a href="/fr/blogs/bahariya-oasis-white-desert-2-day-itinerary">programme de 2 jours Bahariya et Desert Blanc</a>.</p>
<h2>Quand visiter</h2>
<p>Les sources sont meilleures d'octobre a avril. Le Gebel el-Ingleez peut etre grimpe toute l'annee, evitez le soleil de midi. L'ordre ideal: sources le matin, montagne au coucher du soleil.</p>
<h2>Pourquoi cette combinaison fonctionne</h2>
<p>Ce qui lie les sources et la montagne n'est pas un theme evident, mais les deux sont des tresors que Bahariya garde pour elle pendant que les projecteurs eclairent le Desert Blanc. Ensemble, ils font de l'oasis une destination a part entiere.</p>`,

  de: `<p>Es gibt eine besondere Stille in der Bahariya-Oase in der Dammerung, wenn die Tagesurlauber in Richtung Weisse Wuste aufgebrochen sind und das einzige Gerausch das Blubbern von Wasser aus der Tiefe ist. Die Einheimischen haben seit Jahrhunderten in diesem Wasser gebadet. Es kommt bereits warm an der Oberflache an, angereichert mit Mineralien.</p>
<p>Das ist das Bahariya, das die meisten Besucher nie einplanen. Sie kommen fur die Kreideformationen der Weissen Wuste, aber die Oase selbst birgt zwei Schatze: naturliche heisse Quellen und einen Hugel, den das britische Militar im Zweiten Weltkrieg als Beobachtungsposten nutzte — bekannt als Gebel el-Ingleez.</p>
<h2>Wasser, das bereits warm aufsteigt</h2>
<p>Bahariya liegt uber dem nubischen Sandsteinaquifer. <strong>Bir El Mattar</strong> ist die beliebteste Quelle, umgeben von Palmen, ohne touristische Infrastruktur. <strong>Bir El Ghaba</strong> ist kuhl und tiefer in der Wuste. <strong>Bir El Ramla</strong> ist am heissesten.</p>
<h2>Ein Hugel, den der Wustenkrieg hinterliess</h2>
<p>Der Gebel el-Ingleez bietet einen ungehinderten Blick uber die gesamte Oase — einer der besten Sonnenuntergangspunkte in Bahariya, den kaum jemand kennt.</p>
<h2>Ein anderer Oasentag</h2>
<p>Heisse Quellen am Morgen, die Altstadt von Bawiti, dann der Aufstieg vor dem Sonnenuntergang. Fur ein vollstandiges Weisse-Wuste-Itinerar: <a href="/de/blogs/bahariya-oasis-white-desert-2-day-itinerary">2-Tage-Programm Bahariya und Weisse Wuste</a>.</p>
<h2>Wann besuchen</h2>
<p>Quellen: Oktober bis April. Gebel el-Ingleez: das ganze Jahr, Mittagssonne vermeiden. Ideal: Quellen am Morgen, Berg beim Sonnenuntergang.</p>
<h2>Warum diese Kombination funktioniert</h2>
<p>Beide sind Dinge, die Bahariya still fur sich behalten hat, wahrend die Weisse Wuste die Aufmerksamkeit auf sich zieht. Zusammen machen sie die Oase selbst zum Ziel fur einen ganzen Tag.</p>`,

  es: `<p>Hay un silencio particular en el oasis de Bahariya al atardecer, cuando los turistas de dia se han ido hacia el Desierto Blanco y el unico sonido es el del agua que burbujea desde las profundidades. Los locales llevan siglos banandose en esa agua. Llega a la superficie ya caliente, cargada de minerales.</p>
<p>Ese es el Bahariya que la mayoria de los visitantes nunca planifican. Vienen por las formaciones de tiza del Desierto Blanco, pero el oasis mismo guarda dos tesoros: manantiales termales naturales y una colina que el ejercito britanico convirtio en puesto de observacion durante la Segunda Guerra Mundial, conocida como Gebel el-Ingleez.</p>
<h2>Agua que sube ya caliente</h2>
<p>Bahariya se asienta sobre el sistema acuifero de arenisca nubia. <strong>Bir El Mattar</strong> es el manantial mas visitado — un canal de riego rodeado de palmeras, sin infraestructura turistica. <strong>Bir El Ghaba</strong> es mas fresco. <strong>Bir El Ramla</strong> es el mas caliente.</p>
<h2>Una colina que dejo la guerra del desierto</h2>
<p>El Gebel el-Ingleez ofrece una vista ininterrumpida de todo el oasis — uno de los mejores puntos para ver el atardecer en Bahariya que casi nadie conoce.</p>
<h2>Un dia diferente en el oasis</h2>
<p>Manantiales por la manana, casco antiguo de Bawiti, luego subida al Gebel el-Ingleez antes del atardecer. Para un itinerario completo: <a href="/es/blogs/bahariya-oasis-white-desert-2-day-itinerary">programa de 2 dias Bahariya y Desierto Blanco</a>.</p>
<h2>Cuando visitar</h2>
<p>Manantiales: octubre a abril. Gebel el-Ingleez: cualquier epoca, evita el mediodia. Orden ideal: manantiales por la manana, montana al atardecer.</p>
<h2>Por que funciona esta combinacion</h2>
<p>Juntos hacen del oasis el destino de un dia entero, en lugar de solo el lugar donde repostar antes del "viaje real".</p>`,

  it: `<p>C'e un silenzio particolare nell'oasi di Bahariya al crepuscolo, quando i turisti giornalieri si sono diretti verso il Deserto Bianco e l'unico suono e quello dell'acqua che gorgoglia dalle profondita. Gli abitanti si bagnano in quest'acqua da secoli. Arriva in superficie gia calda, ricca di minerali.</p>
<p>Questo e il Bahariya che la maggior parte dei visitatori non pianifica mai. Vengono per le formazioni di gesso del Deserto Bianco, ma l'oasi stessa custodisce due tesori: sorgenti termali naturali e una collina che l'esercito britannico trasformo in posto di osservazione durante la Seconda Guerra Mondiale, nota come Gebel el-Ingleez.</p>
<h2>Acqua che sale gia calda</h2>
<p>Bahariya si trova sopra il sistema acquifero nubiano. <strong>Bir El Mattar</strong> e la sorgente piu visitata. <strong>Bir El Ghaba</strong> e piu fresca. <strong>Bir El Ramla</strong> e la piu calda.</p>
<h2>Una collina lasciata dalla guerra del deserto</h2>
<p>Il Gebel el-Ingleez offre una vista ininterrotta su tutta l'oasi — uno dei migliori punti per il tramonto a Bahariya che quasi nessuno conosce.</p>
<h2>Un giorno diverso nell'oasi</h2>
<p>Sorgenti di mattina, quartiere vecchio di Bawiti, poi salita al Gebel el-Ingleez prima del tramonto. Per un itinerario completo: <a href="/it/blogs/bahariya-oasis-white-desert-2-day-itinerary">programma di 2 giorni Bahariya e Deserto Bianco</a>.</p>
<h2>Quando visitare</h2>
<p>Sorgenti: ottobre-aprile. Gebel el-Ingleez: tutto l'anno, evitare il mezzogiorno. Ordine ideale: sorgenti al mattino, montagna al tramonto.</p>
<h2>Perche questa combinazione funziona</h2>
<p>Insieme rendono l'oasi stessa la destinazione per un'intera giornata, invece di essere solo il posto dove fare rifornimento prima del "vero" viaggio.</p>`,

  nl: `<p>Er is een bijzondere stilte in de Bahariya Oase bij schemering, wanneer de dagtoeristen zijn vertrokken naar de Witte Woestijn en het enige geluid dat van water is dat opborrelt vanuit de diepte. De lokale bevolking baadt al eeuwen in dat water. Het komt al warm aan het oppervlak, geladen met mineralen.</p>
<p>Dat is het Bahariya dat de meeste bezoekers nooit plannen. Ze komen voor de krijtformaties van de Witte Woestijn, maar de oase zelf herbergt twee schatten: natuurlijke hete bronnen en een heuvel die het Britse leger in de Tweede Wereldoorlog gebruikte als uitkijkpost, bekend als Gebel el-Ingleez.</p>
<h2>Water dat al warm omhoogkomt</h2>
<p>Bahariya ligt boven het Nubische zandsteen-aquifersysteem. <strong>Bir El Mattar</strong> is de meest bezochte bron. <strong>Bir El Ghaba</strong> is koeler. <strong>Bir El Ramla</strong> is het warmst.</p>
<h2>Een heuvel die de woestijnoorlog achterliet</h2>
<p>De Gebel el-Ingleez biedt een ononderbroken uitzicht over de hele oase — een van de beste zonsondergangspunten in Bahariya die bijna niemand kent.</p>
<h2>Een andere oasedag</h2>
<p>Hete bronnen 's ochtends, oude wijk van Bawiti, dan de beklimming voor zonsondergang. Voor een volledig itinerair: <a href="/nl/blogs/bahariya-oasis-white-desert-2-day-itinerary">2-daags programma Bahariya en Witte Woestijn</a>.</p>
<h2>Wanneer bezoeken</h2>
<p>Bronnen: oktober tot april. Gebel el-Ingleez: het hele jaar, vermijd de middagzon. Ideale volgorde: bronnen 's ochtends, berg bij zonsondergang.</p>
<h2>Waarom deze combinatie werkt</h2>
<p>Samen maken ze de oase zelf de bestemming voor een hele dag, in plaats van alleen de plek waar je tankt voor de "echte" trip.</p>`,

  pt: `<p>Ha um silencio particular no oasis de Bahariya ao crepusculo, quando os turistas de dia seguiram para o Deserto Branco e o unico som e o da agua borbulhando das profundezas. Os moradores locais se banham nessa agua ha seculos. Ela chega a superficie ja quente, carregada de minerais.</p>
<p>Esse e o Bahariya que a maioria dos visitantes nunca planeja. Eles vem pelas formacoes de giz do Deserto Branco, mas o proprio oasis guarda dois tesouros: fontes termais naturais e uma colina que o exercito britanico transformou em posto de observacao durante a Segunda Guerra Mundial, conhecida como Gebel el-Ingleez.</p>
<h2>Agua que sobe ja quente</h2>
<p>Bahariya fica sobre o sistema aquifero de arenito nubiano. <strong>Bir El Mattar</strong> e a fonte mais visitada. <strong>Bir El Ghaba</strong> e mais fresca. <strong>Bir El Ramla</strong> e a mais quente.</p>
<h2>Uma colina deixada pela guerra do deserto</h2>
<p>O Gebel el-Ingleez oferece uma vista ininterrupta de todo o oasis — um dos melhores pontos para o por do sol em Bahariya que quase ninguem conhece.</p>
<h2>Um dia diferente no oasis</h2>
<p>Fontes de manha, bairro antigo de Bawiti, depois subida ao Gebel el-Ingleez antes do por do sol. Para um itinerario completo: <a href="/pt/blogs/bahariya-oasis-white-desert-2-day-itinerary">programa de 2 dias Bahariya e Deserto Branco</a>.</p>
<h2>Quando visitar</h2>
<p>Fontes: outubro a abril. Gebel el-Ingleez: qualquer epoca, evite o sol do meio-dia. Ordem ideal: fontes de manha, montanha ao por do sol.</p>
<h2>Por que essa combinacao funciona</h2>
<p>Juntos, tornam o proprio oasis o destino de um dia inteiro, em vez de apenas o lugar onde se abastece antes da viagem 'de verdade'.</p>`,

  zh: `<p>黄昏时分，巴哈利亚绿洲有一种特别的寂静——一日游客大多已前往白色沙漠，只剩下地底深处涌出的水声。当地人已在这片水中沐浴了几个世纪。水涌出地面时已是温热的，携带着与尼罗河毫无关系的古老含水层的矿物质。</p>
<p>这就是大多数游客从未计划过的巴哈利亚。他们来是为了白色沙漠的白垩岩层，但绿洲本身藏着两件珍宝：当地人世代使用的天然温泉，以及英国军队在二战期间建造的瞭望站，如今被称为「英国山」（Gebel el-Ingleez）。</p>
<h2>从地底涌出的温水</h2>
<p>巴哈利亚坐落在努比亚砂岩含水层系统之上，这是地球上最大的地下淡水储量之一。<strong>比尔·马塔尔</strong>是最常见的温泉，没有旅游基础设施，就是当地人下班后泡澡的地方。<strong>比尔·加巴</strong>更凉爽。<strong>比尔·兰姆拉</strong>水温最高。</p>
<h2>沙漠战争留下的山丘</h2>
<p>英国山顶部是二战英军瞭望站遗址，从山顶可以俯瞰整个绿洲——几乎无人知晓的最佳日落观赏地之一。</p>
<h2>不一样的绿洲一日</h2>
<p>早上泡温泉，慢逛巴维提老城，然后在日落前攀登英国山。如需完整白色沙漠行程，请参阅<a href="/zh/blogs/bahariya-oasis-white-desert-2-day-itinerary">巴哈利亚与白色沙漠两日行程</a>。</p>
<h2>最佳造访时间</h2>
<p>温泉：十月至四月。英国山：全年皆可，避开正午阳光。理想安排：早上泡泉，傍晚登山。</p>
<h2>为什么这个组合奏效</h2>
<p>两者共同将绿洲本身变成一整天的目的地，而不仅仅是前往"真正旅程"前的加油站。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "What are Bahariya's hot springs and are they safe to swim in?",
    questionAr: "ما هي ينابيع البحرية الساخنة وهل السباحة فيها آمنة؟",
    questionI18n: {
      fr: "Quelles sont les sources chaudes de Bahariya et sont-elles sures pour nager ?",
      de: "Was sind die heissen Quellen von Bahariya und ist das Schwimmen darin sicher?",
      es: "Cuales son los manantiales termales de Bahariya y es seguro nadar en ellos?",
      it: "Quali sono le sorgenti termali di Bahariya ed e sicuro nuotarci?",
      nl: "Wat zijn de hete bronnen van Bahariya en is het veilig om er in te zwemmen?",
      pt: "Quais sao as fontes termais de Bahariya e e seguro nadar nelas?",
      zh: "巴哈利亚的温泉是什么？在里面游泳安全吗？",
    },
    answerEn:
      "Bahariya has several natural hot springs fed by the Nubian Sandstone Aquifer — the most visited are Bir El Mattar, Bir El Ghaba, and Bir El Ramla. They are safe to soak in and locals have used them for generations. None have formal facilities — bring a towel, modest swimwear, and a change of clothes.",
    answerAr:
      "تمتلك البحرية عدة ينابيع ساخنة طبيعية مغذاة من الحجر الرملي النوبي الجوفي — أكثرها زيارةً هي بئر الماطر وبئر الغابة وبئر الرملة. الاستحمام فيها آمن ويستخدمها السكان منذ أجيال. لا تتوفر مرافق رسمية في أيٍّ منها — أحضر معك منشفة وملابس سباحة محتشمة وملابس جافة إضافية.",
    answerI18n: {
      fr: "Bahariya dispose de plusieurs sources chaudes naturelles alimentees par l'aquifere de gres nubien. Les plus visitees sont Bir El Mattar, Bir El Ghaba et Bir El Ramla. Elles sont sans danger pour se baigner. Apportez une serviette, un maillot decent et des vetements de rechange.",
      de: "Bahariya hat mehrere naturliche heisse Quellen, gespeist vom nubischen Sandsteinaquifer. Die beliebtesten sind Bir El Mattar, Bir El Ghaba und Bir El Ramla. Sie sind sicher zum Baden. Bringen Sie ein Handtuch, einen angemessenen Badeanzug und Wechselkleidung mit.",
      es: "Bahariya tiene varios manantiales termales naturales alimentados por el acuifero de arenisca nubia. Los mas visitados son Bir El Mattar, Bir El Ghaba y Bir El Ramla. Son seguros para banarse. Lleva una toalla, bano modesto y ropa de cambio.",
      it: "Bahariya ha diverse sorgenti termali naturali alimentate dall'acquifero di arenaria nubiana. Le piu visitate sono Bir El Mattar, Bir El Ghaba e Bir El Ramla. Sono sicure per fare il bagno. Porta un asciugamano, costume modesto e vestiti di ricambio.",
      nl: "Bahariya heeft verschillende natuurlijke hete bronnen gevoed door het Nubische zandsteen-aquifer. De meest bezochte zijn Bir El Mattar, Bir El Ghaba en Bir El Ramla. Ze zijn veilig om in te zwemmen. Neem een handdoek, bescheiden zwemkleding en wisselkleding mee.",
      pt: "Bahariya tem varias fontes termais naturais alimentadas pelo aquifero de arenito nubiano. As mais visitadas sao Bir El Mattar, Bir El Ghaba e Bir El Ramla. Sao seguras para banhar. Leve uma toalha, roupa de banho modesta e roupa para trocar.",
      zh: "巴哈利亚有多处由努比亚砂岩含水层供给的天然温泉，最常被游览的是比尔·马塔尔、比尔·加巴和比尔·兰姆拉。在里面浸泡是安全的，当地人世代使用。这些地方没有正式设施——请自带毛巾、保守泳装和备用衣物。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "What is Gebel el-Ingleez (the English Mountain) in Bahariya?",
    questionAr: "ما هو جبل الإنجليز في البحرية؟",
    questionI18n: {
      fr: "Qu'est-ce que le Gebel el-Ingleez (la Montagne des Anglais) a Bahariya ?",
      de: "Was ist der Gebel el-Ingleez (der Englische Berg) in Bahariya?",
      es: "Que es el Gebel el-Ingleez (la Montana Inglesa) en Bahariya?",
      it: "Cos'e il Gebel el-Ingleez (la Montagna degli Inglesi) a Bahariya?",
      nl: "Wat is de Gebel el-Ingleez (de Engelse Berg) in Bahariya?",
      pt: "O que e o Gebel el-Ingleez (a Montanha Inglesa) em Bahariya?",
      zh: "巴哈利亚的英国山（Gebel el-Ingleez）是什么？",
    },
    answerEn:
      "Gebel el-Ingleez — Arabic for 'the English Mountain' — is a hill near Bawiti in Bahariya Oasis where the British army built a small observation post during the Second World War. The remains include low stone walls and scattered debris. The summit offers one of the best panoramic views across the oasis, making it an excellent sunset spot.",
    answerAr:
      "جبل الإنجليز هو تلة قرب باويطي في واحة البحرية أقام عليها الجيش البريطاني نقطة مراقبة صغيرة خلال الحرب العالمية الثانية. تشمل الآثار المتبقية جدران حجرية منخفضة وحطامًا متناثرًا. تتيح القمة واحدة من أفضل المناظر البانورامية على الواحة، مما يجعلها نقطة رائعة لمشاهدة الغروب.",
    answerI18n: {
      fr: "Gebel el-Ingleez — en arabe 'la Montagne des Anglais' — est une colline pres de Bawiti ou l'armee britannique a construit un petit poste d'observation pendant la Seconde Guerre mondiale. Le sommet offre l'une des meilleures vues panoramiques sur l'oasis.",
      de: "Gebel el-Ingleez — Arabisch fur 'der Englische Berg' — ist ein Hugel bei Bawiti, wo das britische Militar im Zweiten Weltkrieg einen kleinen Beobachtungsposten errichtete. Der Gipfel bietet einen der besten Panoramablicke uber die Oase.",
      es: "Gebel el-Ingleez — en arabe 'la Montana Inglesa' — es una colina cerca de Bawiti donde el ejercito britanico construyo un pequeno puesto de observacion durante la Segunda Guerra Mundial. La cumbre ofrece una de las mejores vistas panoramicas del oasis.",
      it: "Gebel el-Ingleez — in arabo 'la Montagna degli Inglesi' — e una collina vicino a Bawiti dove l'esercito britannico costrui un piccolo posto di osservazione durante la Seconda Guerra Mondiale. La cima offre una delle migliori viste panoramiche sull'oasi.",
      nl: "Gebel el-Ingleez — Arabisch voor 'de Engelse Berg' — is een heuvel bij Bawiti waar het Britse leger een kleine uitkijkpost bouwde tijdens de Tweede Wereldoorlog. De top biedt een van de beste panoramische uitzichten over de oase.",
      pt: "Gebel el-Ingleez — em arabe 'a Montanha Inglesa' — e uma colina perto de Bawiti onde o exercito britanico construiu um pequeno posto de observacao durante a Segunda Guerra Mundial. O cume oferece uma das melhores vistas panoramicas do oasis.",
      zh: "英国山（Gebel el-Ingleez，阿拉伯语意为「英国人的山」）是巴维提附近的一座山丘，英国军队在二战期间在此建造了一个小型瞭望站。遗迹包括低矮的石墙和散落的碎片。山顶提供了俯瞰整个绿洲的最佳全景视角，是绝佳的日落观赏地。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "What is the best time of year to visit Bahariya Oasis?",
    questionAr: "ما أفضل وقت لزيارة واحة البحرية؟",
    questionI18n: {
      fr: "Quelle est la meilleure periode pour visiter l'oasis de Bahariya ?",
      de: "Was ist die beste Jahreszeit fur einen Besuch der Bahariya-Oase?",
      es: "Cual es la mejor epoca del ano para visitar el oasis de Bahariya?",
      it: "Qual e il periodo migliore per visitare l'oasi di Bahariya?",
      nl: "Wat is de beste tijd van het jaar om de Bahariya Oase te bezoeken?",
      pt: "Qual e a melhor epoca do ano para visitar o oasis de Bahariya?",
      zh: "一年中什么时候最适合游览巴哈利亚绿洲？",
    },
    answerEn:
      "October through April is the most comfortable window. The hot springs are most enjoyable in cooler months (November–March) when soaking feels genuinely restorative. Gebel el-Ingleez can be climbed year-round but avoid the midday sun. Summer temperatures regularly exceed 40°C — still doable but demanding.",
    answerAr:
      "من أكتوبر إلى أبريل هو الوقت الأكثر ملاءمة. الينابيع الساخنة في أفضل حالاتها في الأشهر الباردة (نوفمبر-مارس) حين يبدو الاستحمام منعشًا فعلًا. جبل الإنجليز يمكن تسلقه طوال العام مع تجنب شمس الظهيرة. درجات حرارة الصيف تتجاوز 40 درجة مئوية بانتظام — ممكنة لكن مجهدة.",
    answerI18n: {
      fr: "D'octobre a avril est la meilleure periode. Les sources sont meilleures en hiver (novembre-mars). Le Gebel el-Ingleez peut etre grimpe toute l'annee en evitant le soleil de midi. Les temperatures estivales depassent regulierement 40°C.",
      de: "Oktober bis April ist die angenehmste Zeit. Die heissen Quellen sind im Winter (November-Marz) am besten. Der Gebel el-Ingleez kann das ganze Jahr erklommen werden, Mittagssonne vermeiden. Sommertemperaturen uberschreiten regelmaßig 40°C.",
      es: "De octubre a abril es la epoca mas comoda. Los manantiales son mejores en invierno (noviembre-marzo). El Gebel el-Ingleez puede escalarse todo el ano evitando el sol del mediodia. Las temperaturas veraniegas superan regularmente los 40°C.",
      it: "Da ottobre ad aprile e il periodo piu confortevole. Le sorgenti sono migliori in inverno (novembre-marzo). Il Gebel el-Ingleez puo essere scalato tutto l'anno evitando il sole di mezzogiorno. Le temperature estive superano regolarmente i 40°C.",
      nl: "Oktober tot april is de aangenaamste periode. De bronnen zijn het beste in de winter (november-maart). De Gebel el-Ingleez kan het hele jaar worden beklommen, vermijd de middagzon. Zomertemperaturen overschrijden regelmatig 40°C.",
      pt: "De outubro a abril e o periodo mais confortavel. As fontes sao melhores no inverno (novembro-marco). O Gebel el-Ingleez pode ser escalado o ano todo, evitando o sol do meio-dia. As temperaturas de verao ultrapassam regularmente 40°C.",
      zh: "十月至四月是最舒适的时段。温泉在冬季（11月至3月）享用最佳，凉爽的沙漠夜晚后浸泡温泉格外惬意。英国山全年均可攀登，但应避开正午阳光。夏季气温常超过40°C——仍可前往但较为艰辛。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "bahariya-hot-springs-english-mountain",
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
  image: "/img/bahariya-hot-springs-english-mountain.webp",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "bahariya oasis",
    "hot springs egypt",
    "gebel el-ingleez",
    "english mountain bahariya",
    "western desert egypt",
    "white desert egypt",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "bahariya hot springs",
    "bahariya oasis egypt",
  ]),
  secondaryKeywords: JSON.stringify([
    "gebel el-ingleez",
    "english mountain bahariya",
    "bir el mattar",
    "bahariya white desert",
    "western desert oasis egypt",
  ]),
  readingTime: 6,
  isPublished: true,
  publishedAt: new Date("2026-10-13"),
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
