/**
 * Blog: Siwa Oasis: Egypt's Hidden Secret Between Salt Lakes and the Throne of Amun
 * Slug: siwa-oasis-hidden-secret
 * Run with: node scripts/seed-blog-siwa-oasis-hidden-secret.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr = "واحة سيوة: سر مصر الخفي بين الملوحة وعرش آمون";

const metaTitleAr =
  "واحة سيوة: سر مصر الخفي بين الملوحة وعرش آمون | Bedouin Trails (2026)";

const metaDescAr =
  "دليلك الكامل لزيارة واحة سيوة — معبد وحي آمون، البحيرات المالحة، بحر الرمال العظيم، وثقافة أمازيغية فريدة في أقصى غرب مصر.";

const excerptAr =
  "سيوة هي المكان الوحيد في مصر الذي مشى إليه الإسكندر الأكبر عبر 800 كيلومتر من الصحراء لمجرد أن يسأل سؤالًا. واحة بلغتها الخاصة وعمارتها ومطبخها — سر مصر الخفي في أقصى الغرب.";

const contentAr = `<p>اسأل عشرة أشخاص أن يذكروا معلمًا مصريًا، وستسمع "الأهرامات" من تسعة منهم. اسألهم عن سيوة وستجد أغلبهم ينظر إليك بحيرة. وهذا غريب في الحقيقة، لأن سيوة هي المكان الوحيد في مصر الذي مشى إليه غازٍ عبر 800 كيلومتر من الصحراء المفتوحة لمجرد أن يسأل سؤالًا واحدًا.</p>

<p>ذلك الغازي كان الإسكندر الأكبر. والسؤال — بحسب المؤرخين القدامى — كان عمّا إذا كان حقًا ابن إله. حصل على إجابته من معبد وحي آمون، الذي ما زال قائمًا، نصف متهدم، فوق صخرة في قلب هذه الواحة. شعور غريب أن تقف أمام مبنى كانت له يومًا سلطة كافية ليمنح شرعية لطموحات رجل أكمل بعدها غزو معظم العالم المعروف، ويزوره اليوم في الغالب مسافرون وقعوا عليه صدفة أثناء بحثهم عن "أماكن يُنصح بزيارتها قرب سيوة"، لا أناس يطاردون نبوءة عمرها 2300 عام.</p>

<p>هذا التناقض — ثقل تاريخي هائل، وشهرة معاصرة شبه معدومة — هو تقريبًا كل شخصية سيوة.</p>

<h2>نوع مختلف من مصر</h2>
<p>معظم ما يتخيله الناس حين يفكرون في "مصر" يأتي من وادي النيل: معابد فرعونية، كتابات هيروغليفية، لغة بصرية محددة جدًا. سيوة لا تشبه ذلك تقريبًا على الإطلاق. تقع قريبًا من الحدود الليبية، معزولة بالصحراء بما يكفي لتطور ثقافتها الخاصة بشكل مستقل تقريبًا طوال معظم تاريخها. سكانها أمازيغ، لا عرب-مصريين كبقية أنحاء البلاد، ويتحدثون اللغة السيوية، وهي أقرب إلى اللغات المحكية في المغرب والجزائر منها إلى العربية. عمارة طينية مميزة، نسيج خاص، حُلي خاصة، تقليد طهي كامل مبني على التمر والزيتون بدلًا من الأطباق التي يربطها المسافرون بالقاهرة أو الأقصر — سيوة ليست نسخة إقليمية من مصر. إنها أقرب إلى عالم صغير مستقل يصادف أنه يقع داخل حدود مصر.</p>
<p>هذا العزل نفسه هو ما حافظ عليها سليمة. لم تكن سيوة سهلة الوصول بالطرق البرية حتى وقت قريب نسبيًا من تاريخها الطويل، مما يعني أن تقاليدها لم تتسطح تحت وطأة قرون من طرق التجارة والغزوات كما حدث في وادي النيل. زيارتها الآن تبدو أقل كجولة في موقع تاريخي، وأكثر كأنك سُمح لك بالدخول إلى مكان قضى معظم وجوده غير مهتم بهدوء بما يجري في بقية العالم.</p>

<h2>ما الذي تراه فعلًا هناك</h2>
<p><strong>معبد الوحي (أغورمي)</strong> يقع أعلى تلة صخرية في الواحة، وحتى في حالته شبه المتهدمة، يمكنك أن تشعر بأنه بُني ليكون مهيبًا من مسافة بعيدة — مرئيًا لأي شخص يقترب عبر أميال من الصحراء المفتوحة. المنظر من القمة، عبر بساتين النخيل والبحيرات المالحة الممتدة نحو الأفق، يستحق الصعود وحده، نبوءة أو بلا نبوءة.</p>
<p><strong>عين كليوباترا</strong> نبع طبيعي استُخدم باستمرار منذ آلاف السنين — بركة باردة صافية تتغذى من المياه الجوفية، محاطة بأشجار النخيل، حيث تقول الأساطير المحلية إن الملكة نفسها استحمّت فيها يومًا. سواء كان ذلك قابلًا للتحقق تاريخيًا أم لا، فهذا تقريبًا ليس المهم؛ فهي مكان سباحة ممتاز فعلًا في قلب واحة صحراوية، وهذا سبب كافٍ لزيارتها.</p>
<p><strong>البحيرات المالحة</strong> هي ما يجعل سيوة تبدو غريبة بأفضل معنى ممكن. مياه غنية بالمعادن تتجمع في بحيرات ضحلة ترتفع فيها نسبة الملوحة بما يكفي لتطفو عليها دون أي مجهود، تمامًا مثل البحر الميت، محاطًا بلا شيء سوى الصحراء ونخيل التمر. بعض البحيرات مشبعة بالملح لدرجة أنه يتبلور على طول الشاطئ في تشكيلات تبدو شبه اصطناعية.</p>
<p><strong>بحر الرمال العظيم</strong> هو الهوية الأخرى لسيوة — أحد أكبر بحار الرمال على وجه الأرض، بكثبان ترتفع وتتموج لمئات الكيلومترات نحو الحدود الليبية. إنه نوع المناظر الطبيعية الذي يجعل كلمة "شاسع" تبدو وصفًا متواضعًا بدلًا من كلمة مستهلكة.</p>
<p><strong>قلعة شالي</strong>، مركز المدينة القديم المبني من الطوب اللبن، هُجرت إلى حد كبير بعد عاصفة مطرية نادرة استمرت عدة أيام عام 1926 أذابت جزءًا من جدرانها — فالطوب اللبن والمطر الغزير لا يتوافقان جيدًا. ما تبقى منها اليوم هو أطلال تتآكل ببطء، شبه نحتية، ترتفع من قلب المدينة الحديثة، ومبهرة خصوصًا عند الغروب حين تتحول الجدران المتبقية إلى لون بني مائل للبرتقالي الداكن.</p>

<h2>لماذا تكافئك سيوة على التمهّل</h2>
<p>سيوة ليست مكانًا تستعجل فيه. لا يوجد فيها ما يعادل "زُر أهم خمسة مواقع قبل الغداء". الواحة تسير على إيقاعها الخاص — المحلات تغلق لفترات طويلة بعد الظهر، وأفضل طريقة لرؤية بساتين النخيل هي سيرًا على الأقدام أو بعربة يجرها حمار، لا جدول دفع رباعي مزدحم. والنقطة البارزة الحقيقية في معظم الزيارات ليست معلمًا واحدًا، بل التجربة المتراكمة لوجودك في مكان بهذا الانفصال عن الإيقاع الذي يعيشه معظم المسافرين.</p>
<p>لهذا السبب أيضًا تكافئك سيوة على البقاء أكثر من ليلة واحدة. رحلة يوم واحد متعجلة تمنحك معبد الوحي وربما عين كليوباترا. أما بضعة أيام فتمنحك وقتًا في بحر الرمال العظيم عند الغروب، وسباحة حقيقية في البحيرات المالحة دون مراقبة الساعة، ووجبة لا تُحسب توقيتها حسب موعد مغادرة، ومساحة كافية في الجدول لتجلس فقط في مكان ما وتراقب الضوء يتغير فوق النخيل. <a href="/ar/journeys/3-days-siwa-oasis-program">برنامج واحة سيوة في 3 أيام</a> مبني بالضبط حول هذا الإيقاع — وقت كافٍ لتتوقف عن التعامل مع الواحة كقائمة مراجعة.</p>

<h2>الطعام وحده سبب كافٍ للزيارة</h2>
<p>محصولا سيوة المميزان — التمر والزيتون — ليسا مجرد حاشية زراعية، بل هويتها الثقافية تقريبًا. تنتج الواحة بعضًا من أثمن أنواع التمر في مصر، تُزرع في بساتين نخيل زُرعت منذ أجيال، وزيت الزيتون المحلي يُعصر من أشجار بعضها قديم بما يكفي ليكون قد أظلّ مسافرين منذ قرن كامل. الوجبات هنا تعتمد بشدة على الاثنين: تمر يدخل في كل شيء من الإفطار إلى الحلوى، وزيت زيتون يُسكب بسخاء فوق الخبز واليخنات، وأطباق مبنية على حبوب وخضروات محلية بدلًا من أطباق وادي النيل الأساسية التي يربطها معظم زوار مصر بطعام البلاد. المطبخ السيوي سبب كافٍ بحد ذاته للمسافرين المهتمين بالطعام ليخوضوا هذه الرحلة — فهو لا يشبه "الطعام المصري" بالصورة التي يتخيلها معظم الناس، لأنه ببساطة مختلف فعلًا، تمامًا كما تسير بقية ثقافة المكان على مسارها الخاص.</p>

<h2>أفضل وقت للزيارة</h2>
<p>سيوة واحة صحراوية، ما يعني أن درجات حرارة الصيف ترتفع بما يكفي لجعل التجول النهاري غير مريح فعلًا. النافذة الأكثر تسامحًا تمتد تقريبًا بين أكتوبر وأبريل، حين تكون حرارة النهار محتملة والبحيرات المالحة والينابيع منعشة لا مجرد قابلة للتحمل فقط. ليالي الشتاء قد تكون باردة بشكل مفاجئ نظرًا لمدى بُعد الواحة وانكشافها، لذا جهّز طبقات من الملابس حتى لو بدت توقعات النهار معتدلة. الربيع، وخصوصًا مارس وأبريل، يميل إلى تقديم توازن جيد بشكل خاص — دافئ بما يكفي للسباحة المريحة، وبارد بما يكفي ليوم كامل في بحر الرمال العظيم دون أن تتحول الرحلة إلى اختبار تحمّل.</p>

<h2>الوصول إليها جزء من التجربة</h2>
<p>سيوة معزولة بتصميمها — نحو ثماني ساعات بالطريق البري من القاهرة عبر صحراء خالية فعلًا، أو طريق أقصر من ساحل البحر المتوسط قرب مرسى مطروح. هذه المسافة بالذات هي ما منعها من التحول إلى مجرد محطة أخرى في مسار جولات جماعية نمطية. كما تعني أن سيوة تعمل بشكل أفضل كرحلة مستقلة بذاتها بدلًا من إضافة متعجلة مضغوطة بين وجهات أخرى؛ فالطريق نفسه، مراقبة المشهد يتحول من شجيرات ساحلية إلى صحراء عميقة ثم إلى أولى بساتين النخيل في الأفق، جزء مما يجعل الوصول يشعرك بأنه مُستحق فعلًا. المسافرون الراغبون في وقت إضافي يميلون إلى اختيار <a href="/ar/journeys/4-days-siwa-oasis-desert-culture-tour">رحلة واحة سيوة الثقافية والصحراوية في 4 أيام</a>، التي تضيف يومًا كاملًا في بحر الرمال العظيم خارج المعالم الرئيسية.</p>

<h2>واحة تستحق أن تعرفها</h2>
<p>لن تظهر سيوة في أي قائمة "أهم ما يجب رؤيته في مصر" كما تظهر الأهرامات، وهذا بالضبط ما يمنحها جاذبيتها. إنها مكان له لغته الخاصة، وعمارته الخاصة، وطعامه الخاص، وادعاؤه التاريخي الخاص بالشهرة منذ 2300 عام — يقبع بهدوء في أقصى غرب البلاد، لم تمسه إلى حد كبير نسخة مصر التي يعرفها معظم الزوار بالفعل.</p>
<p>في النهاية، سيوة ليست محطة تُضاف إلى قائمة سياحية، بل تجربة تُذكّرك أن مصر أكبر وأكثر تنوعًا بكثير من الصورة الواحدة التي تظهر عادة في كتيبات السفر.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "Siwa Oasis: Egypt's Hidden Secret Between Salt Lakes and the Throne of Amun";

const metaTitleEn =
  "Siwa Oasis: Egypt's Hidden Secret Between Salt Lakes and the Throne of Amun | Bedouin Trails (2026)";

const metaDescEn =
  "Your complete guide to visiting Siwa Oasis — the Oracle Temple of Amun, salt lakes, the Great Sand Sea, and a unique Amazigh culture in Egypt's far west.";

const excerptEn =
  "Siwa is the one place in Egypt where a conqueror once walked 800 kilometers across open desert just to ask it a question. An oasis with its own language, architecture, and cuisine — Egypt's hidden secret in the far west.";

const contentEn = `<p>Ask ten people to name an Egyptian landmark and you'll get the pyramids nine times out of ten. Ask them about Siwa and most will give you a blank look. Which is strange, honestly, because Siwa is the one place in Egypt where a conqueror once walked 800 kilometers across open desert just to ask it a question.</p>

<p>That conqueror was Alexander the Great. The question — according to ancient historians — was whether he was truly the son of a god. He got his answer from the Oracle of Amun, inside a temple that still stands, half-ruined, on a rock outcrop in the middle of this oasis. It's a strange thing to stand in front of: a building that once held enough authority to validate the ambitions of a man who went on to conquer most of the known world, now visited mostly by travelers who stumbled onto it while researching "things to do near Siwa" rather than people chasing a 2,300-year-old prophecy.</p>

<p>That contradiction — immense historical weight, almost no modern fame — is basically the whole personality of Siwa.</p>

<h2>A Different Kind of Egypt</h2>
<p>Most of what people picture when they think "Egypt" comes from the Nile Valley: pharaonic temples, hieroglyphs, a very particular visual language. Siwa barely looks like that at all. It sits close to the Libyan border, isolated enough by desert that it developed its own culture almost independently for most of its history. The people here are Amazigh (Berber), not Arab-Egyptian in the way most of the country is, and they speak Siwi, a language more closely related to tongues spoken in Morocco and Algeria than to Arabic. Mud-brick architecture, distinct textiles, distinct jewelry, a whole culinary tradition built around dates and olives rather than the dishes travelers associate with Cairo or Luxor — Siwa isn't a regional variation on Egypt. It's close to being its own small world that happens to sit inside Egypt's borders.</p>
<p>That isolation is also exactly what kept it intact. Siwa wasn't easily reachable by road until relatively recently in its long history, which means its traditions weren't flattened by centuries of trade routes and conquest the way the Nile Valley's were. Visiting now feels less like touring a historical site and more like being let into a place that spent most of its existence quietly uninterested in the rest of the world.</p>

<h2>What You're Actually Looking At</h2>
<p><strong>The Temple of the Oracle (Aghurmi)</strong> sits at the top of a rocky hill in the oasis, and even in its partially ruined state, you can tell it was built to be imposing from a distance — visible to anyone approaching across miles of open desert. The view from the top, across the palm groves and salt lakes stretching toward the horizon, is arguably worth the climb on its own, prophecy or no prophecy.</p>
<p><strong>Cleopatra's Bath</strong> is a natural spring pool that's been in continuous use for thousands of years — a cool, clear pool fed from underground, ringed by palm trees, where local legend says the queen herself once bathed. Whether or not that's historically verifiable is almost beside the point; it's a genuinely good swimming spot in the middle of a desert oasis, which is reason enough to visit.</p>
<p><strong>The salt lakes</strong> are what make Siwa feel genuinely strange in the best way. Mineral-rich water pools into shallow lakes where the salinity is high enough that you float without effort, Dead Sea-style, surrounded by nothing but desert and date palms. Some lakes are so saturated that salt crystallizes along the shoreline in formations that look almost artificial.</p>
<p><strong>The Great Sand Sea</strong> is Siwa's other identity — one of the largest sand seas on Earth, with dunes that rise and roll for hundreds of kilometers toward the Libyan border. It's the kind of landscape that makes "vast" feel like an understatement rather than a cliche.</p>
<p><strong>Shali Fortress</strong>, the old mud-brick town center, was largely abandoned after a rare multi-day rainstorm in 1926 partially dissolved its walls — mud-brick and heavy rain don't mix well. What's left is a slowly eroding, almost sculptural ruin rising out of the modern town, striking especially at sunset when the remaining walls turn a deep orange-brown.</p>

<h2>Why Siwa Rewards Slowness</h2>
<p>Siwa isn't a place you rush. There's no equivalent of "hit the top five sites before lunch." The oasis runs on its own pace — shops close for long stretches in the afternoon, the best way to see the palm groves is on foot or by donkey cart rather than a packed 4x4 schedule, and the real highlight of most visits isn't a single landmark but the accumulated experience of being somewhere this disconnected from the rhythm most travelers live by.</p>
<p>That's also why it rewards staying more than a single night. A rushed day trip gets you the Oracle Temple and maybe Cleopatra's Bath. A few days gets you time in the Great Sand Sea at sunset, a proper swim in the salt lakes without watching the clock, a meal that isn't timed around a departure, and enough slack in the schedule to just sit somewhere and watch the light change over the palms — which, for a lot of travelers who make the trip, ends up being the thing they remember most clearly afterward. The <a href="/en/journeys/3-days-siwa-oasis-program">3-Day Siwa Oasis Program</a> is built around exactly that pace — enough time to stop treating the oasis like a checklist.</p>

<h2>The Food Is Its Own Reason to Visit</h2>
<p>Siwa's two defining crops — dates and olives — aren't just agricultural footnotes, they're practically a cultural identity. The oasis produces some of the most prized dates in Egypt, grown in palm groves that have been cultivated for generations, and the local olive oil is pressed from trees that, in some cases, are genuinely old enough to have shaded travelers a century ago. Meals here lean heavily on both: dates worked into everything from breakfast to dessert, olive oil drizzled generously over bread and stews, dishes built around local grains and vegetables rather than the Nile Valley staples most visitors to Egypt associate with the country's food. Siwan cuisine is reason enough on its own for food-curious travelers to make the trip — it doesn't taste like "Egyptian food" in the way most people picture it, because it genuinely isn't, in the same way the rest of the culture here runs on its own track.</p>

<h2>When to Visit</h2>
<p>Siwa is a desert oasis, which means summer temperatures climb high enough to make daytime sightseeing genuinely uncomfortable. The more forgiving window runs roughly October through April, when daytime heat is manageable and the salt lakes and springs feel refreshing rather than merely tolerable. Winter nights can get surprisingly cold given how far inland and exposed the oasis is, so pack layers even if the daytime forecast looks mild. Spring, particularly March and April, tends to offer an especially good balance — warm enough for comfortable swimming, cool enough for a full day out in the Great Sand Sea without the trip turning into an endurance test.</p>

<h2>Getting There Is Part of the Point</h2>
<p>Siwa is remote by design — roughly eight hours by road from Cairo through genuinely empty desert, or a shorter route from the Mediterranean coast near Marsa Matruh. That distance is exactly what's kept it from turning into another stop on a standard group-tour circuit. It also means Siwa works best as a dedicated trip rather than a rushed add-on squeezed between other destinations; the drive itself, watching the landscape shift from coastal scrub to deep desert to the first palm groves on the horizon, is part of what makes the arrival feel earned. Travelers who want extra time for that distance to pay off tend to go with the <a href="/en/journeys/4-days-siwa-oasis-desert-culture-tour">4-Day Siwa Oasis Desert & Culture Tour</a>, which adds a full day in the Great Sand Sea beyond the main landmarks.</p>

<h2>An Oasis Worth Knowing About</h2>
<p>Siwa won't show up on a highlight reel of "must-see Egypt" the way the pyramids will, and that's precisely its appeal. It's a place with its own language, its own architecture, its own food, its own 2,300-year-old claim to historical fame — sitting quietly in the far west of the country, mostly untouched by the version of Egypt most visitors already know.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "L'Oasis de Siwa : Le Secret Cache de l'Egypte entre Lacs Sales et le Trone d'Amon",
  de: "Die Oase Siwa: Agyptens Verborgenes Geheimnis zwischen Salzseen und dem Thron des Amun",
  es: "El Oasis de Siwa: El Secreto Oculto de Egipto entre Lagos Salados y el Trono de Amon",
  it: "L'Oasi di Siwa: Il Segreto Nascosto dell'Egitto tra Laghi Salati e il Trono di Amon",
  nl: "Siwa Oase: Het Verborgen Geheim van Egypte tussen Zoutmeren en de Troon van Amon",
  pt: "Oasis de Siwa: O Segredo Escondido do Egito entre Lagos Salgados e o Trono de Amon",
  zh: "锡瓦绿洲：埃及隐藏的秘密——盐湖与阿蒙神殿之间",
};

const metaTitleI18n = {
  fr: "L'Oasis de Siwa : Secret Cache de l'Egypte | Bedouin Trails (2026)",
  de: "Die Oase Siwa: Agyptens Verborgenes Geheimnis | Bedouin Trails (2026)",
  es: "El Oasis de Siwa: Secreto Oculto de Egipto | Bedouin Trails (2026)",
  it: "L'Oasi di Siwa: Segreto Nascosto dell'Egitto | Bedouin Trails (2026)",
  nl: "Siwa Oase: Verborgen Geheim van Egypte | Bedouin Trails (2026)",
  pt: "Oasis de Siwa: Segredo Escondido do Egito | Bedouin Trails (2026)",
  zh: "锡瓦绿洲：埃及隐藏的秘密 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Votre guide complet pour visiter l'oasis de Siwa — le temple de l'Oracle d'Amon, les lacs sales, la Grande Mer de Sable et une culture amazighe unique dans l'extreme ouest de l'Egypte.",
  de: "Ihr vollstandiger Leitfaden fur einen Besuch der Oase Siwa — der Orakeltempel des Amun, Salzseen, das Grosse Sandmeer und eine einzigartige Amazigh-Kultur im fernen Westen Agyptens.",
  es: "Tu guia completa para visitar el oasis de Siwa — el Templo del Oraculo de Amon, lagos salados, el Gran Mar de Arena y una cultura amazigh unica en el extremo oeste de Egipto.",
  it: "La tua guida completa per visitare l'oasi di Siwa — il Tempio dell'Oracolo di Amon, laghi salati, il Grande Mare di Sabbia e una cultura amazigh unica nell'estremo ovest dell'Egitto.",
  nl: "Uw complete gids voor een bezoek aan de Siwa Oase — de Orakeltempel van Amon, zoutmeren, de Grote Zandzee en een unieke Amazigh-cultuur in het uiterste westen van Egypte.",
  pt: "Seu guia completo para visitar o oasis de Siwa — o Templo do Oraculo de Amon, lagos salgados, o Grande Mar de Areia e uma cultura amazigh unica no extremo oeste do Egito.",
  zh: "锡瓦绿洲完整游览指南——阿蒙神谕神殿、盐湖、大沙海和埃及最西部独特的阿马齐格文化。",
};

const excerptI18n = {
  fr: "Siwa est le seul endroit en Egypte ou un conquerant a un jour marche 800 km a travers le desert pour poser une question. Une oasis avec sa propre langue, architecture et cuisine — le secret cache de l'Egypte.",
  de: "Siwa ist der einzige Ort in Agypten, zu dem ein Eroberer 800 km durch die Wuste lief, nur um eine Frage zu stellen. Eine Oase mit eigener Sprache, Architektur und Kuche — Agyptens verborgenes Geheimnis.",
  es: "Siwa es el unico lugar de Egipto al que un conquistador camino 800 km por el desierto solo para hacer una pregunta. Un oasis con su propio idioma, arquitectura y cocina — el secreto oculto de Egipto.",
  it: "Siwa e l'unico luogo in Egitto dove un conquistatore percorse 800 km nel deserto solo per fare una domanda. Un'oasi con lingua, architettura e cucina proprie — il segreto nascosto dell'Egitto.",
  nl: "Siwa is de enige plek in Egypte waar een veroveraar ooit 800 km door de woestijn liep om een vraag te stellen. Een oase met een eigen taal, architectuur en keuken — het verborgen geheim van Egypte.",
  pt: "Siwa e o unico lugar no Egito onde um conquistador caminhou 800 km pelo deserto so para fazer uma pergunta. Um oasis com sua propria lingua, arquitetura e culinaria — o segredo escondido do Egito.",
  zh: "锡瓦是埃及唯一一个征服者曾穿越800公里沙漠只为问一个问题的地方。一个拥有自己语言、建筑和美食的绿洲——埃及隐藏的秘密。",
};

const contentI18n = {
  fr: `<p>Demandez a dix personnes de nommer un monument egyptien et vous obtiendrez les pyramides neuf fois sur dix. Demandez-leur Siwa et la plupart vous regarderont sans comprendre. Ce qui est etrange, car Siwa est le seul endroit en Egypte ou un conquerant a marche 800 kilometres a travers le desert ouvert juste pour poser une question.</p>
<p>Ce conquerant etait Alexandre le Grand. La question etait s'il etait vraiment le fils d'un dieu. Il a obtenu sa reponse de l'Oracle d'Amon, dans un temple qui se dresse encore, a moitie en ruine, sur un promontoire rocheux au milieu de cette oasis.</p>
<h2>Un Autre Genre d'Egypte</h2>
<p>Siwa est proche de la frontiere libyenne, suffisamment isolee pour avoir developpe sa propre culture. Ses habitants sont Amazighes, parlent le siwi, et ont une architecture en brique de terre, des textiles distincts et une cuisine basee sur les dattes et les olives.</p>
<h2>Ce que Vous Voyez Reellement</h2>
<p><strong>Le Temple de l'Oracle</strong> au sommet d'une colline, <strong>le Bain de Cleopatre</strong> source naturelle millenaire, <strong>les lacs sales</strong> ou l'on flotte comme en Mer Morte, <strong>la Grande Mer de Sable</strong> avec ses dunes infinies, et <strong>la forteresse de Shali</strong> en ruines de brique de terre.</p>
<h2>Pourquoi Siwa Recompense la Lenteur</h2>
<p>L'oasis fonctionne a son propre rythme. Le <a href="/fr/journeys/3-days-siwa-oasis-program">programme de 3 jours a Siwa</a> est construit autour de ce tempo.</p>
<h2>La Cuisine Est une Raison de Visite a Elle Seule</h2>
<p>Dattes et olives ne sont pas de simples cultures — elles sont l'identite culturelle de Siwa.</p>
<h2>Quand Visiter</h2>
<p>D'octobre a avril. Le printemps (mars-avril) offre le meilleur equilibre.</p>
<h2>Y Arriver Fait Partie de l'Experience</h2>
<p>Environ 8 heures de route depuis le Caire. Le <a href="/fr/journeys/4-days-siwa-oasis-desert-culture-tour">tour de 4 jours Siwa Desert & Culture</a> ajoute une journee complete dans la Grande Mer de Sable.</p>
<h2>Une Oasis qui Merite d'Etre Connue</h2>
<p>Siwa a sa propre langue, architecture, cuisine et une histoire de 2300 ans — assise tranquillement a l'extreme ouest du pays.</p>`,

  de: `<p>Fragen Sie zehn Leute nach einem agyptischen Wahrzeichen und Sie horen neun Mal die Pyramiden. Fragen Sie nach Siwa und die meisten schauen ratlos. Dabei ist Siwa der einzige Ort in Agypten, zu dem ein Eroberer 800 Kilometer durch offene Wuste lief, nur um eine Frage zu stellen.</p>
<p>Dieser Eroberer war Alexander der Grosse. Die Frage war, ob er wirklich der Sohn eines Gottes sei. Er erhielt seine Antwort vom Orakel des Amun.</p>
<h2>Eine Andere Art von Agypten</h2>
<p>Siwa liegt nahe der libyschen Grenze mit einer eigenstandigen Amazigh-Kultur, eigener Sprache (Siwi), Lehmziegelarchitektur und einer Kuche aus Datteln und Oliven.</p>
<h2>Was Sie Tatsachlich Sehen</h2>
<p><strong>Der Orakeltempel</strong>, <strong>Kleopatras Bad</strong>, <strong>die Salzseen</strong>, <strong>das Grosse Sandmeer</strong> und <strong>die Shali-Festung</strong>.</p>
<h2>Warum Siwa Langsamkeit Belohnt</h2>
<p>Das <a href="/de/journeys/3-days-siwa-oasis-program">3-Tage Siwa-Programm</a> ist auf dieses Tempo ausgelegt.</p>
<h2>Das Essen Allein Ist ein Grund fur den Besuch</h2>
<p>Datteln und Oliven sind Siwas kulturelle Identitat.</p>
<h2>Wann Besuchen</h2>
<p>Oktober bis April. Fruhling (Marz-April) bietet die beste Balance.</p>
<h2>Die Anreise ist Teil des Erlebnisses</h2>
<p>Etwa 8 Stunden von Kairo. Der <a href="/de/journeys/4-days-siwa-oasis-desert-culture-tour">4-Tage Siwa Wusten- & Kultur-Tour</a> fugt einen Tag im Grossen Sandmeer hinzu.</p>
<h2>Eine Oase, die es Wert Ist, Bekannt zu Werden</h2>
<p>Eigene Sprache, Architektur, Kuche und 2300 Jahre Geschichte im fernen Westen Agyptens.</p>`,

  es: `<p>Pregunta a diez personas que nombren un monumento egipcio y obtendras las piramides nueve de cada diez veces. Pregunta por Siwa y la mayoria te mirara con cara de desconcierto. Lo cual es extrano, porque Siwa es el unico lugar de Egipto al que un conquistador camino 800 kilometros por el desierto solo para hacer una pregunta.</p>
<p>Ese conquistador fue Alejandro Magno. La pregunta era si era verdaderamente hijo de un dios. Obtuvo su respuesta del Oraculo de Amon.</p>
<h2>Un Tipo Diferente de Egipto</h2>
<p>Siwa esta cerca de la frontera libia, con cultura amazigh propia, idioma siwi, arquitectura de adobe y cocina basada en datiles y aceitunas.</p>
<h2>Lo que Realmente Ves</h2>
<p><strong>El Templo del Oraculo</strong>, <strong>el Bano de Cleopatra</strong>, <strong>los lagos salados</strong>, <strong>el Gran Mar de Arena</strong> y <strong>la Fortaleza de Shali</strong>.</p>
<h2>Por Que Siwa Premia la Lentitud</h2>
<p>El <a href="/es/journeys/3-days-siwa-oasis-program">programa de 3 dias en Siwa</a> esta disenado para ese ritmo.</p>
<h2>La Comida Es Razon Suficiente para Visitar</h2>
<p>Datiles y aceitunas son la identidad cultural de Siwa.</p>
<h2>Cuando Visitar</h2>
<p>De octubre a abril. La primavera (marzo-abril) ofrece el mejor equilibrio.</p>
<h2>Llegar Es Parte de la Experiencia</h2>
<p>Unas 8 horas desde El Cairo. El <a href="/es/journeys/4-days-siwa-oasis-desert-culture-tour">tour de 4 dias Siwa Desierto y Cultura</a> anade un dia en el Gran Mar de Arena.</p>
<h2>Un Oasis que Vale la Pena Conocer</h2>
<p>Idioma, arquitectura, cocina y 2300 anos de historia propios, en el extremo oeste de Egipto.</p>`,

  it: `<p>Chiedete a dieci persone di nominare un monumento egiziano e otterrete le piramidi nove volte su dieci. Chiedete di Siwa e la maggior parte vi guardera con aria confusa. Il che e strano, perche Siwa e l'unico luogo in Egitto dove un conquistatore percorse 800 chilometri nel deserto solo per fare una domanda.</p>
<p>Quel conquistatore era Alessandro Magno. La domanda era se fosse veramente figlio di un dio. Ottenne la risposta dall'Oracolo di Amon.</p>
<h2>Un Tipo Diverso di Egitto</h2>
<p>Siwa e vicina al confine libico, con cultura amazigh propria, lingua siwi, architettura in mattoni crudi e cucina basata su datteri e olive.</p>
<h2>Cosa Vedete Realmente</h2>
<p><strong>Il Tempio dell'Oracolo</strong>, <strong>il Bagno di Cleopatra</strong>, <strong>i laghi salati</strong>, <strong>il Grande Mare di Sabbia</strong> e <strong>la Fortezza di Shali</strong>.</p>
<h2>Perche Siwa Premia la Lentezza</h2>
<p>Il <a href="/it/journeys/3-days-siwa-oasis-program">programma di 3 giorni a Siwa</a> e costruito attorno a questo ritmo.</p>
<h2>Il Cibo e una Ragione a Se per Visitare</h2>
<p>Datteri e olive sono l'identita culturale di Siwa.</p>
<h2>Quando Visitare</h2>
<p>Da ottobre ad aprile. La primavera (marzo-aprile) offre il miglior equilibrio.</p>
<h2>Arrivarci Fa Parte dell'Esperienza</h2>
<p>Circa 8 ore dal Cairo. Il <a href="/it/journeys/4-days-siwa-oasis-desert-culture-tour">tour di 4 giorni Siwa Deserto & Cultura</a> aggiunge un giorno nel Grande Mare di Sabbia.</p>
<h2>Un'Oasi che Vale la Pena Conoscere</h2>
<p>Lingua, architettura, cucina e 2300 anni di storia propri, nell'estremo ovest dell'Egitto.</p>`,

  nl: `<p>Vraag tien mensen een Egyptisch monument te noemen en u krijgt negen keer de piramides. Vraag naar Siwa en de meesten kijken u blanco aan. Wat vreemd is, want Siwa is de enige plek in Egypte waar een veroveraar 800 kilometer door open woestijn liep om een vraag te stellen.</p>
<p>Die veroveraar was Alexander de Grote. De vraag was of hij werkelijk de zoon van een god was. Hij kreeg zijn antwoord van het Orakel van Amon.</p>
<h2>Een Ander Soort Egypte</h2>
<p>Siwa ligt dicht bij de Libische grens, met een eigen Amazigh-cultuur, Siwi-taal, leemsteenarchitectuur en een keuken gebaseerd op dadels en olijven.</p>
<h2>Wat u Werkelijk Ziet</h2>
<p><strong>De Orakeltempel</strong>, <strong>het Bad van Cleopatra</strong>, <strong>de zoutmeren</strong>, <strong>de Grote Zandzee</strong> en <strong>het Shali Fort</strong>.</p>
<h2>Waarom Siwa Traagheid Beloont</h2>
<p>Het <a href="/nl/journeys/3-days-siwa-oasis-program">3-daagse Siwa-programma</a> is op dit tempo gebouwd.</p>
<h2>Het Eten Alleen Is al Reden Genoeg</h2>
<p>Dadels en olijven zijn de culturele identiteit van Siwa.</p>
<h2>Wanneer Bezoeken</h2>
<p>Oktober tot april. Lente (maart-april) biedt de beste balans.</p>
<h2>Er Komen Is Deel van de Ervaring</h2>
<p>Ongeveer 8 uur vanaf Caïro. De <a href="/nl/journeys/4-days-siwa-oasis-desert-culture-tour">4-daagse Siwa Woestijn & Cultuur Tour</a> voegt een dag in de Grote Zandzee toe.</p>
<h2>Een Oase die het Waard Is om te Kennen</h2>
<p>Eigen taal, architectuur, keuken en 2300 jaar geschiedenis in het uiterste westen van Egypte.</p>`,

  pt: `<p>Pergunte a dez pessoas para nomear um marco egipcio e voce ouvira as piramides nove em cada dez vezes. Pergunte sobre Siwa e a maioria olhara sem entender. O que e estranho, porque Siwa e o unico lugar no Egito onde um conquistador caminhou 800 quilometros pelo deserto so para fazer uma pergunta.</p>
<p>Esse conquistador era Alexandre, o Grande. A pergunta era se ele era verdadeiramente filho de um deus. Ele obteve sua resposta do Oraculo de Amon.</p>
<h2>Um Tipo Diferente de Egito</h2>
<p>Siwa fica perto da fronteira libia, com cultura amazigh propria, lingua siwi, arquitetura de tijolos de barro e culinaria baseada em tamaras e azeitonas.</p>
<h2>O Que Voce Realmente Ve</h2>
<p><strong>O Templo do Oraculo</strong>, <strong>o Banho de Cleopatra</strong>, <strong>os lagos salgados</strong>, <strong>o Grande Mar de Areia</strong> e <strong>a Fortaleza de Shali</strong>.</p>
<h2>Por Que Siwa Recompensa a Lentidao</h2>
<p>O <a href="/pt/journeys/3-days-siwa-oasis-program">programa de 3 dias em Siwa</a> e construido em torno desse ritmo.</p>
<h2>A Comida E Razao Suficiente para Visitar</h2>
<p>Tamaras e azeitonas sao a identidade cultural de Siwa.</p>
<h2>Quando Visitar</h2>
<p>De outubro a abril. A primavera (marco-abril) oferece o melhor equilibrio.</p>
<h2>Chegar La Faz Parte da Experiencia</h2>
<p>Cerca de 8 horas do Cairo. O <a href="/pt/journeys/4-days-siwa-oasis-desert-culture-tour">tour de 4 dias Siwa Deserto & Cultura</a> adiciona um dia no Grande Mar de Areia.</p>
<h2>Um Oasis que Vale a Pena Conhecer</h2>
<p>Lingua, arquitetura, culinaria e 2300 anos de historia proprios, no extremo oeste do Egito.</p>`,

  zh: `<p>问十个人说出一个埃及地标，十有八九会说金字塔。问锡瓦，大多数人会茫然。这很奇怪，因为锡瓦是埃及唯一一个征服者曾穿越800公里沙漠只为问一个问题的地方。</p>
<p>那个征服者是亚历山大大帝。问题是他是否真的是神之子。他从阿蒙神谕那里得到了答案。</p>
<h2>一种不同的埃及</h2>
<p>锡瓦靠近利比亚边境，拥有独立的阿马齐格文化、锡维语、泥砖建筑和以椰枣橄榄为基础的美食。</p>
<h2>你实际看到的</h2>
<p><strong>神谕神殿</strong>、<strong>克利奥帕特拉之泉</strong>、<strong>盐湖</strong>、<strong>大沙海</strong>和<strong>沙利堡垒</strong>。</p>
<h2>为什么锡瓦奖赏慢节奏</h2>
<p><a href="/zh/journeys/3-days-siwa-oasis-program">3天锡瓦绿洲行程</a>就是围绕这种节奏设计的。</p>
<h2>美食本身就是造访的理由</h2>
<p>椰枣和橄榄是锡瓦的文化身份。</p>
<h2>何时造访</h2>
<p>十月到四月。春季（三四月）提供最佳平衡。</p>
<h2>到达那里本身就是体验的一部分</h2>
<p>从开罗约8小时车程。<a href="/zh/journeys/4-days-siwa-oasis-desert-culture-tour">4天锡瓦绿洲沙漠与文化之旅</a>增加了大沙海的完整一天。</p>
<h2>一个值得了解的绿洲</h2>
<p>自己的语言、建筑、美食和2300年历史——安静地坐落在埃及最西部。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "How do you get to Siwa Oasis?",
    questionAr: "كيف تصل إلى واحة سيوة؟",
    questionI18n: {
      fr: "Comment se rendre a l'oasis de Siwa ?",
      de: "Wie kommt man zur Oase Siwa?",
      es: "Como se llega al oasis de Siwa?",
      it: "Come si arriva all'oasi di Siwa?",
      nl: "Hoe kom je bij de Siwa Oase?",
      pt: "Como chegar ao oasis de Siwa?",
      zh: "如何到达锡瓦绿洲？",
    },
    answerEn:
      "Siwa is roughly 8 hours by road from Cairo through the Western Desert, or a shorter route from Marsa Matruh on the Mediterranean coast. The journey itself is part of the experience.",
    answerAr:
      "تبعد سيوة نحو 8 ساعات بالطريق البري من القاهرة عبر الصحراء الغربية، أو طريق أقصر من مرسى مطروح على ساحل البحر المتوسط. الرحلة نفسها جزء من التجربة.",
    answerI18n: {
      fr: "Siwa est a environ 8 heures de route du Caire a travers le desert occidental, ou par un trajet plus court depuis Marsa Matrouh. Le trajet lui-meme fait partie de l'experience.",
      de: "Siwa ist etwa 8 Stunden Fahrt von Kairo durch die Westliche Wuste entfernt, oder eine kurzere Route von Marsa Matrouh. Die Fahrt selbst ist Teil des Erlebnisses.",
      es: "Siwa esta a unas 8 horas por carretera desde El Cairo por el desierto occidental, o una ruta mas corta desde Marsa Matruh. El viaje en si es parte de la experiencia.",
      it: "Siwa dista circa 8 ore di strada dal Cairo attraverso il deserto occidentale, o un percorso piu breve da Marsa Matrouh. Il viaggio stesso fa parte dell'esperienza.",
      nl: "Siwa ligt op ongeveer 8 uur rijden van Caïro door de Westelijke Woestijn, of een kortere route vanuit Marsa Matrouh. De reis zelf is deel van de ervaring.",
      pt: "Siwa fica a cerca de 8 horas de estrada do Cairo pelo deserto ocidental, ou uma rota mais curta de Marsa Matruh. A viagem em si faz parte da experiencia.",
      zh: "锡瓦距开罗约8小时车程，穿越西部沙漠，或从地中海沿岸的马特鲁港走较短路线。旅途本身就是体验的一部分。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "Can you swim in Siwa's salt lakes?",
    questionAr: "هل يمكنك السباحة في البحيرات المالحة في سيوة؟",
    questionI18n: {
      fr: "Peut-on nager dans les lacs sales de Siwa ?",
      de: "Kann man in den Salzseen von Siwa schwimmen?",
      es: "Se puede nadar en los lagos salados de Siwa?",
      it: "Si puo nuotare nei laghi salati di Siwa?",
      nl: "Kun je zwemmen in de zoutmeren van Siwa?",
      pt: "Pode-se nadar nos lagos salgados de Siwa?",
      zh: "可以在锡瓦的盐湖中游泳吗？",
    },
    answerEn:
      "Yes — and you'll float effortlessly, Dead Sea-style. The salinity is high enough that you bob on the surface without trying. It's one of the most memorable experiences in the oasis.",
    answerAr:
      "نعم — وستطفو دون أي مجهود، تمامًا مثل البحر الميت. نسبة الملوحة عالية بما يكفي لتبقى على السطح دون محاولة. إنها واحدة من أكثر التجارب التي لا تُنسى في الواحة.",
    answerI18n: {
      fr: "Oui — et vous flotterez sans effort, comme en Mer Morte. La salinite est suffisamment elevee pour que vous restiez a la surface sans essayer. C'est l'une des experiences les plus memorables de l'oasis.",
      de: "Ja — und Sie schweben muhelos, wie im Toten Meer. Der Salzgehalt ist hoch genug, dass Sie ohne Anstrengung an der Oberflache bleiben. Es ist eines der unvergesslichsten Erlebnisse der Oase.",
      es: "Si — y flotaras sin esfuerzo, al estilo del Mar Muerto. La salinidad es lo suficientemente alta como para que te mantengas en la superficie sin intentarlo. Es una de las experiencias mas memorables del oasis.",
      it: "Si — e galleggerete senza sforzo, in stile Mar Morto. La salinita e abbastanza alta da restare in superficie senza provare. E una delle esperienze piu memorabili dell'oasi.",
      nl: "Ja — en u drijft moeiteloos, in Dode Zee-stijl. Het zoutgehalte is hoog genoeg om zonder moeite aan het oppervlak te blijven. Het is een van de meest onvergetelijke ervaringen van de oase.",
      pt: "Sim — e voce flutuara sem esforco, no estilo Mar Morto. A salinidade e alta o suficiente para mante-lo na superficie sem tentar. E uma das experiencias mais memoraveis do oasis.",
      zh: "可以——而且你会像在死海一样毫不费力地漂浮。盐度足够高，无需任何努力就能浮在水面上。这是绿洲中最难忘的体验之一。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "What is the best time to visit Siwa?",
    questionAr: "ما أفضل وقت لزيارة سيوة؟",
    questionI18n: {
      fr: "Quel est le meilleur moment pour visiter Siwa ?",
      de: "Wann ist die beste Zeit, Siwa zu besuchen?",
      es: "Cual es el mejor momento para visitar Siwa?",
      it: "Qual e il momento migliore per visitare Siwa?",
      nl: "Wat is de beste tijd om Siwa te bezoeken?",
      pt: "Qual e a melhor epoca para visitar Siwa?",
      zh: "什么时候是造访锡瓦的最佳时间？",
    },
    answerEn:
      "October through April, with spring (March-April) offering the best balance — warm enough for swimming, cool enough for a full day in the Great Sand Sea.",
    answerAr:
      "من أكتوبر إلى أبريل، مع الربيع (مارس-أبريل) الذي يقدم أفضل توازن — دافئ بما يكفي للسباحة، وبارد بما يكفي ليوم كامل في بحر الرمال العظيم.",
    answerI18n: {
      fr: "D'octobre a avril, avec le printemps (mars-avril) offrant le meilleur equilibre — assez chaud pour nager, assez frais pour une journee dans la Grande Mer de Sable.",
      de: "Oktober bis April, wobei der Fruhling (Marz-April) die beste Balance bietet — warm genug zum Schwimmen, kuhl genug fur einen ganzen Tag im Grossen Sandmeer.",
      es: "De octubre a abril, con la primavera (marzo-abril) ofreciendo el mejor equilibrio — suficientemente calido para nadar, suficientemente fresco para un dia completo en el Gran Mar de Arena.",
      it: "Da ottobre ad aprile, con la primavera (marzo-aprile) che offre il miglior equilibrio — abbastanza caldo per nuotare, abbastanza fresco per un giorno nel Grande Mare di Sabbia.",
      nl: "Oktober tot april, met de lente (maart-april) als beste balans — warm genoeg om te zwemmen, koel genoeg voor een dag in de Grote Zandzee.",
      pt: "De outubro a abril, com a primavera (marco-abril) oferecendo o melhor equilibrio — quente o suficiente para nadar, fresco o suficiente para um dia no Grande Mar de Areia.",
      zh: "十月到四月，春季（三四月）提供最佳平衡——温暖到可以游泳，凉爽到可以在大沙海度过一整天。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "siwa-oasis-hidden-secret",
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
  image: "/img/siwa-oasis-hidden-secret.webp",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "siwa oasis",
    "siwa egypt",
    "oracle of amun",
    "salt lakes siwa",
    "great sand sea",
    "amazigh culture egypt",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "siwa oasis egypt",
    "siwa oasis travel guide",
  ]),
  secondaryKeywords: JSON.stringify([
    "oracle temple siwa",
    "cleopatra bath siwa",
    "siwa salt lakes",
    "great sand sea siwa",
    "shali fortress",
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
