/**
 * Blog: On Foot and By Camel — The Complete Guide to White Desert Trekking in Egypt
 * Slug: white-desert-trekking-camel-riding
 * Run with: node scripts/seed-blog-white-desert-trekking.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr =
  "على وقع الخطى: دليلك الشامل للتريكنج وركوب الجمال في الصحراء البيضاء";

const metaTitleAr =
  "على وقع الخطى: دليلك الشامل للتريكنج وركوب الجمال في الصحراء البيضاء | Bedouin Trails (2026)";

const metaDescAr =
  "اكتشف الصحراء البيضاء بطريقة مختلفة تماماً عن سيارات الدفع الرباعي. دليل شامل عن التريكنج وركوب الجمال في الصحراء الغربية المصرية، من اختيار الرحلة إلى ما يجب توقعه في كل خطوة.";

const excerptAr =
  "هناك فرق جوهري بين أن ترى الصحراء البيضاء من خلف زجاج سيارة وبين أن تشعر بها تحت قدميك. اكتشف دليلك الشامل للتريكنج وركوب الجمال في الصحراء الغربية المصرية مع Bedouin Trails.";

const contentAr = `<p>هناك فرق جوهري بين أن ترى الصحراء البيضاء من خلف زجاج سيارة دفع رباعي مسرعة، وبين أن تشعر بها تحت قدميك. صوت الرمال وهي تصدر صريراً خفيفاً مع كل خطوة، حرارة الشمس على كتفيك، إيقاع أنفاسك وهو يتزامن مع خطى الجمل الهادئة أمامك؛ هذه تفاصيل لا يمكن لمحرك سيارة أن ينقلها لك مهما كانت الرحلة مثيرة. التريكنج وركوب الجمال في الصحراء الغربية المصرية ليسا مجرد بديل "بطيء" لسفاري السيارات، بل هما تجربة مختلفة تماماً في جوهرها؛ رحلة تعيد ضبط علاقتك بالزمن والمسافة والمكان. في هذا الدليل، نأخذك إلى قلب هذا النوع النادر من السياحة الصحراوية في مصر، ونشرح لك كل ما تحتاج معرفته قبل أن تحزم حقيبتك وتبدأ.</p>

<h2>لماذا يختار المسافرون التريكنج بدلاً من السفاري بالسيارة؟</h2>
<p>يفترض كثيرون أن السفاري بالسيارة هو الطريقة "الصحيحة" الوحيدة لاستكشاف الصحراء الغربية، لكن هذا يتجاهل حقيقة أن البدو أنفسهم عاشوا وتنقلوا في هذه الأرض لآلاف السنين سيراً على الأقدام وعلى ظهور الجمال، قبل أن تصل السيارات إليها أصلاً. حين تسير بنفس الإيقاع الذي عاش به أجدادهم، تفتح أمامك تفاصيل يستحيل ملاحظتها من نافذة متحركة: نبتة صحراوية نادرة تختبئ بين الصخور، أثر قدم حيوان ليلي على الرمال الناعمة، أو تغير طفيف في لون التكوين الطباشيري مع تغير زاوية الشمس. التريكنج في الصحراء البيضاء يمنحك أيضاً إحساساً بالإنجاز الشخصي؛ فكل كيلومتر تقطعه بجهدك الخاص يترك أثراً مختلفاً في الذاكرة عن كيلومتر قطعته سيارة نيابة عنك. وللمسافرين الباحثين عن لياقة بدنية حقيقية إلى جانب المغامرة، فإن السير لساعات بين الكثبان والتكوينات الصخرية يقدم تحدياً ممتعاً لا تقدمه أي رحلة سياحية تقليدية.</p>

<h2>ركوب الجمال: عودة إلى وسيلة النقل الأصلية للصحراء</h2>
<p>الجمل ليس مجرد "وسيلة نقل تقليدية" يُستخدم للصور التذكارية؛ فهو رفيق رحلة حقيقي تكيف على مدى آلاف السنين مع أقسى الظروف الصحراوية. حين تنضم إلى رحلة ركوب الجمال في الصحراء الغربية، ستتعلم أولاً من مرشدينا البدو كيفية التعامل مع الجمل، وكيفية الصعود والنزول بأمان، وكيف تقرأ لغة جسده البسيطة. الإيقاع البطيء والمتمايل لركوب الجمل يخلق حالة تأمل شبه تلقائية؛ فبعد نصف ساعة من الحركة المنتظمة، يبدأ عقلك في الاسترخاء بطريقة تشبه التأمل. كما أن الارتفاع الإضافي الذي يمنحك إياه ظهر الجمل يتيح لك رؤية بانورامية للتضاريس المحيطة، مما يجعل تجربة التصوير مختلفة تماماً عن أي رحلة أخرى. رحلات ركوب الجمال الأطول، الممتدة لعدة أيام، تعيد أيضاً إحياء تجربة القوافل التجارية القديمة التي كانت تربط الواحات المصرية ببعضها البعض عبر هذا الطريق نفسه.</p>

<h2>ماذا تتوقع من رحلة تريكنج متعددة الأيام؟</h2>
<p>رحلات التريكنج الطويلة في الصحراء البيضاء تُبنى حول إيقاع يومي واضح: تبدأ في ساعات الصباح الباكر حين تكون درجات الحرارة معتدلة والإضاءة ناعمة ومثالية للمشي والتصوير، ثم تتوقف القافلة عند الظهيرة للراحة وتناول وجبة خفيفة في ظل أقرب تكوين صخري، قبل أن تُستأنف الرحلة في فترة ما بعد الظهر مع اقتراب الساعة الذهبية. في المساء، يُنصب المخيم في موقع مختلف كل ليلة، ما يعني أنك تستيقظ كل صباح على منظر جديد كلياً. من يخوضون تجربة الصحراء الغربية للمرة الأولى يمكنهم البدء برحلة تريكنج قصيرة نسبياً لمدة خمسة أيام تجمع بين المشي وركوب الجمال والتخييم، وهي تجربة متوازنة بين المغامرة الجسدية والراحة. من يبحث عن تحدٍ أطول وأعمق، هناك أيضاً برامج مشي ممتدة لثمانية أيام كاملة، تأخذك عبر مسافات أطول وتضاريس أكثر تنوعاً.</p>

<h2>التحضير الجسدي والذهني: هل التريكنج الصحراوي مناسب لك؟</h2>
<p>على عكس الانطباع الشائع، لا يتطلب التريكنج في الصحراء البيضاء لياقة بدنية استثنائية أو خبرة تسلق جبال. المشي يكون في الغالب على أرض رملية مستوية نسبياً أو تضاريس متموجة بلطف، والوتيرة تُحدد وفقاً لقدرة المجموعة، خاصة في الجولات الخاصة. الأهم من اللياقة البدنية البحتة هو التحضير الذهني: القدرة على الاستمتاع بالبساطة، وقبول الابتعاد التام عن شبكة الإنترنت والضوضاء اليومية، والانفتاح على إيقاع أبطأ من المعتاد. ننصح من يخطط لأول تجربة تريكنج له بالمشي لمسافات متوسطة في الأسابيع التي تسبق الرحلة لبناء بعض التحمل، وارتداء حذاء مريح تم تجربته مسبقاً بدلاً من حذاء جديد تماماً، فالأحذية الجديدة قد تسبب احتكاكاً مؤلماً على الرمال.</p>

<h2>أفضل الفصول لخوض تجربة التريكنج وركوب الجمال</h2>
<p>يعتمد اختيار التوقيت المثالي بشكل كبير على درجة تحمل الحرارة لدى كل مسافر. فصل الخريف، من أكتوبر إلى نوفمبر، يقدم توازناً مثالياً بين نهار دافئ ومريح لممارسة المشي لمسافات طويلة، وليال معتدلة البرودة مثالية للتخييم. فصل الشتاء، من ديسمبر إلى فبراير، يناسب تماماً من لا يتحمل الحرارة أثناء المجهود البدني، لكنه يتطلب تجهيزات أدفأ لليل القارس البرودة. أما فصل الصيف فهو الأقل ملاءمة لرحلات التريكنج الطويلة نهاراً، وتُعدّل فيه الجداول لتبدأ الرحلات في ساعات الفجر الباكرة وتتوقف قبل ذروة الحرارة.</p>

<h2>حقيبة التريكنج: ماذا تحمل على ظهرك وماذا تترك للجمل؟</h2>
<p>من أجمل ما يميز رحلات التريكنج المنظمة في الصحراء البيضاء أنك لست مضطراً لحمل كل أغراضك بنفسك؛ فالجمال تحمل الخيام والمعدات الثقيلة والمؤن، بينما تقتصر حقيبة ظهرك الشخصية على ما تحتاجه فعلياً خلال ساعات المشي. زجاجة مياه معدنية قابلة لإعادة الملء، طبقة خفيفة إضافية للتقلبات المفاجئة في الطقس، قبعة واسعة الحواف أو الكوفية البدوية التقليدية، ونظارة شمسية مستقطبة لحماية عينيك من وهج الرمال البيضاء الشديد؛ هذه هي أساسيات كل يوم مشي. أما الحذاء فهو العنصر الأهم على الإطلاق: اختر حذاء مشي متوسط الارتفاع مُجرَّباً مسبقاً وليس جديداً، مع جوارب سميكة تمتص الاحتكاك، فهي خط دفاعك الأول ضد التقرحات. كثير من المتمرسين ينصحون أيضاً بإحضار عصا مشي واحدة على الأقل، فهي تخفف الضغط عن الركبتين بشكل ملحوظ عند عبور الكثبان الرملية المرتفعة قليلاً.</p>

<h2>لحظة من الطريق: حين يصمت كل شيء إلا صوت خطاك</h2>
<p>يروي أحد ضيوفنا القدامى تجربته في اليوم الثالث من رحلة تريكنج استمرت خمسة أيام: "توقفت فجأة في منتصف الطريق، ليس لأنني تعبت، بل لأنني أدركت أنني لا أسمع شيئاً على الإطلاق سوى صوت الرمال تحت حذائي وأنفاسي. لا محرك سيارة، لا إشعار هاتف، لا شيء. وقفت هناك لدقيقة كاملة فقط لأستمع إلى هذا الصمت النادر." هذه اللحظات، التي يصعب التخطيط لها أو وصفها مسبقاً، هي ما يجعل التريكنج تجربة مختلفة جوهرياً عن أي شكل آخر من أشكال السياحة الصحراوية؛ فهي لا تُقدَّم لك جاهزة، بل تُكتشف بالصبر والخطى البطيئة.</p>

<h2>كيف تبدأ رحلتك؟</h2>
<p>إذا كنت مستعداً لتجربة الصحراء البيضاء بهذا الأسلوب الأصيل والبطيء، فلدينا خياران مصممان خصيصاً لهذا النوع من المغامرة. يمكنك الانطلاق في <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">رحلة تريكنج الجمال والتخييم لمدة 5 أيام</a>، وهي التجربة المثالية لمن يريد الجمع بين المشي وركوب الجمال والتخييم في مغامرة متكاملة ومتوازنة. أما إذا كنت تبحث عن تحدٍ أطول وانغماساً أعمق بعيداً عن كل أثر للحياة الحديثة، فإن <a href="/journeys/8-days-hiking-program">برنامج المشي لمدة 8 أيام</a> يأخذك في رحلة أعمق عبر قلب الصحراء الغربية. كلا الخيارين يُقادان بمعرفة مرشدين بدو محليين يعرفون كل تفصيلة في هذه الأرض.</p>

<p>التريكنج وركوب الجمال في الصحراء البيضاء ليسا مجرد نشاط سياحي إضافي تضيفه إلى برنامج رحلتك؛ بل هما دعوة لإعادة اكتشاف الصحراء بالطريقة التي عرفها أهلها الأصليون لآلاف السنين. في Bedouin Trails، نؤمن بأن أعمق التجارب هي تلك التي تتطلب منك الحضور الكامل، خطوة بخطوة، بعيداً عن أي وسيط. احجز رحلتك اليوم، ودع الصحراء البيضاء تكشف لك أسرارها على مهل.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "On Foot and By Camel: The Complete Guide to White Desert Trekking in Egypt";

const metaTitleEn =
  "On Foot and By Camel: The Complete Guide to White Desert Trekking in Egypt | Bedouin Trails (2026)";

const metaDescEn =
  "Discover the White Desert in a way no 4x4 ever could. A complete guide to trekking and camel riding in Egypt's Western Desert, from choosing a trip to what to expect on every step.";

const excerptEn =
  "There's a fundamental difference between seeing the White Desert through a car window and feeling it underfoot. Discover the complete guide to trekking and camel riding in Egypt's Western Desert with Bedouin Trails.";

const contentEn = `<p>There's a fundamental difference between seeing the White Desert through the window of a speeding 4x4 and actually feeling it underfoot. The faint crunch of sand with every step, the sun's warmth on your shoulders, the rhythm of your breath syncing with a camel's unhurried gait — these are details no engine can ever translate for you. Trekking and camel riding in Egypt's Western Desert aren't simply a "slower" alternative to a car safari; they're a fundamentally different experience, one that resets your relationship with time, distance, and place. In this guide, we take you into the heart of this rare style of desert travel in Egypt, and explain everything you need to know before you pack your bag and set out.</p>

<h2>Why Travelers Choose Trekking Over a Car Safari</h2>
<p>Many assume a car safari is the only "correct" way to explore the Western Desert, but that overlooks the fact that the Bedouin themselves moved through this land for thousands of years on foot and camelback, long before any vehicle ever reached it. When you move at the same pace their ancestors did, details open up that are simply impossible to notice from a moving window: a rare desert plant tucked between rocks, a nocturnal animal's tracks in soft sand, or a subtle shift in a chalk formation's color as the sun's angle changes. White Desert trekking also gives you a genuine sense of personal accomplishment; every kilometer covered by your own effort leaves a different imprint on memory than one covered by a vehicle on your behalf. For travelers seeking real physical engagement alongside adventure, hours of walking among dunes and rock formations offer a rewarding challenge no conventional tour can match.</p>

<h2>Camel Riding: Returning to the Desert's Original Mode of Travel</h2>
<p>A camel is not merely a "traditional means of transport" trotted out for photo ops; it's a genuine travel companion, shaped over thousands of years to endure the harshest desert conditions imaginable. When you join a camel trekking trip in the Western Desert, our Bedouin guides first teach you how to interact with the animal, how to mount and dismount safely, and how to read its simple body language. The slow, swaying rhythm of camel riding creates an almost automatic meditative state; after half an hour of steady motion, your mind starts to unwind in a way that resembles active meditation. The extra height a camel's back gives you also opens up a panoramic view of the surrounding terrain, making for a completely different kind of photography. Longer, multi-day camel treks also revive the experience of the ancient trade caravans that once linked Egypt's oases along this very same route.</p>

<h2>What to Expect on a Multi-Day Trek</h2>
<p>Long treks through the White Desert are built around a clear daily rhythm: mornings begin early, when temperatures are mild and the light is soft and ideal for walking and photography; the caravan pauses at midday to rest and eat something light in the shade of the nearest rock formation, then resumes in the afternoon as the golden hour approaches. Camp is pitched in a different spot each evening, meaning you wake up every morning to an entirely new view. First-timers to the Western Desert can start with a relatively short five-day trek combining walking, camel riding, and camping — a balanced experience between physical adventure and comfort. Those looking for a longer, deeper challenge can take on an eight-day hiking program covering greater distances and more varied terrain, suited to travelers with a higher fitness level and a desire for full immersion, far from any trace of modern life.</p>

<h2>Physical and Mental Preparation: Is Desert Trekking Right for You?</h2>
<p>Contrary to popular belief, White Desert trekking doesn't require exceptional fitness or mountaineering experience. Walking is mostly over relatively flat sandy ground or gently rolling terrain, and the pace is set according to the group's ability, especially on private tours. More important than raw fitness is mental preparation: the ability to enjoy simplicity, accept total disconnection from the internet and daily noise, and stay open to a rhythm slower than you're used to. We recommend that first-time trekkers walk moderate distances in the weeks leading up to the trip to build some stamina, and wear broken-in, comfortable boots rather than brand-new ones — new footwear can cause painful friction on sand.</p>

<h2>The Best Seasons for Trekking and Camel Riding</h2>
<p>Choosing the ideal timing depends heavily on each traveler's heat tolerance. Autumn, from October to November, offers a perfect balance of warm, comfortable days for long walks and mildly cool nights ideal for camping. Winter, from December to February, suits those who don't handle heat well during physical exertion, though it demands warmer gear for the bitterly cold nights. Summer is the least suitable season for long daytime treks, and schedules are adjusted accordingly, starting at dawn and pausing before peak heat.</p>

<h2>Your Trekking Pack: What Goes on Your Back, What the Camel Carries</h2>
<p>One of the best things about organized trekking trips in the White Desert is that you're not required to carry everything yourself; camels carry the tents, heavy gear, and provisions, while your personal daypack is limited to what you actually need during walking hours. A refillable water bottle, a light extra layer for sudden weather shifts, a wide-brimmed hat or the traditional Bedouin keffiyeh, and polarized sunglasses to protect your eyes from the White Desert's fierce glare — these are the essentials for every walking day. Footwear is by far the most important item: choose broken-in, mid-height walking shoes rather than new ones, paired with thick socks that absorb friction, your first line of defense against blisters. Many seasoned trekkers also recommend at least one walking pole, which noticeably eases pressure on the knees when crossing gently raised dunes.</p>

<h2>A Moment From the Trail: When Everything Falls Silent but Your Footsteps</h2>
<p>One of our longtime guests described a moment on day three of a five-day trek: "I stopped suddenly in the middle of the trail — not because I was tired, but because I realized I couldn't hear anything at all except the sand under my boots and my own breathing. No engine, no phone notifications, nothing. I just stood there for a full minute, listening to that rare silence." These moments, impossible to plan or fully describe beforehand, are what make trekking fundamentally different from any other form of desert tourism; it isn't handed to you ready-made — it's discovered through patience and slow footsteps.</p>

<h2>How to Start Your Journey</h2>
<p>If you're ready to experience the White Desert this authentic, unhurried way, we have two trips designed exactly for this kind of adventure. You can set out on the <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">5-day camel trekking and camping expedition</a>, the ideal experience for combining walking, camel riding, and camping into one balanced adventure. Or, if you're after a longer challenge and a deeper immersion far from any trace of modern life, the <a href="/journeys/8-days-hiking-program">8-day hiking program</a> takes you deeper into the heart of the Western Desert. Both are led by local Bedouin guides who know every detail of this land, from seasonal water sources to the best wind-sheltered camping spots.</p>

<p>Trekking and camel riding in the White Desert aren't just an extra activity to tack onto your itinerary; they're an invitation to rediscover the desert the way its original people have known it for thousands of years. At Bedouin Trails, we believe the deepest experiences are the ones that demand your full presence, one step at a time, with nothing standing between you and the land. Book your trip today, and let the White Desert reveal its secrets to you at its own unhurried pace.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "A Pied et en Chameau : Le Guide Complet du Trekking dans le Desert Blanc en Egypte",
  de: "Zu Fuss und per Kamel: Der Komplette Leitfaden zum Trekking in der Weissen Wuste Agyptens",
  es: "A Pie y en Camello: La Guia Completa del Trekking en el Desierto Blanco de Egipto",
  it: "A Piedi e in Cammello: La Guida Completa al Trekking nel Deserto Bianco d'Egitto",
  nl: "Te Voet en per Kameel: De Complete Gids voor Trekking in de Witte Woestijn van Egypte",
  pt: "A Pe e de Camelo: O Guia Completo do Trekking no Deserto Branco do Egito",
  zh: "徒步与骆驼：埃及白沙漠徒步完全指南",
};

const metaTitleI18n = {
  fr: "Trekking et Randonnee a Chameau dans le Desert Blanc d'Egypte | Bedouin Trails (2026)",
  de: "Trekking und Kamelreiten in der Weissen Wuste Agyptens | Bedouin Trails (2026)",
  es: "Trekking y Paseo en Camello en el Desierto Blanco de Egipto | Bedouin Trails (2026)",
  it: "Trekking e Cammellata nel Deserto Bianco d'Egitto | Bedouin Trails (2026)",
  nl: "Trekking en Kameelrijden in de Witte Woestijn van Egypte | Bedouin Trails (2026)",
  pt: "Trekking e Passeio de Camelo no Deserto Branco do Egito | Bedouin Trails (2026)",
  zh: "埃及白沙漠徒步与骆驼骑行 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Decouvrez le Desert Blanc d'une maniere qu'aucun 4x4 ne pourrait offrir. Guide complet du trekking et de la randonnee a chameau dans le desert occidental egyptien avec Bedouin Trails.",
  de: "Entdecken Sie die Weisse Wuste auf eine Weise, die kein Gelundewagen bieten kann. Kompletter Leitfaden zum Trekking und Kamelreiten in der agyptischen Westwuste mit Bedouin Trails.",
  es: "Descubre el Desierto Blanco de una forma que ningun 4x4 podria ofrecer. Guia completa del trekking y paseo en camello en el desierto occidental de Egipto con Bedouin Trails.",
  it: "Scopri il Deserto Bianco in un modo che nessun 4x4 potrebbe mai offrire. Guida completa al trekking e alla cammellata nel deserto occidentale egiziano con Bedouin Trails.",
  nl: "Ontdek de Witte Woestijn op een manier die geen 4x4 ooit kan bieden. Complete gids voor trekking en kameelrijden in de westelijke woestijn van Egypte met Bedouin Trails.",
  pt: "Descubra o Deserto Branco de uma forma que nenhum 4x4 jamais poderia oferecer. Guia completo do trekking e passeio de camelo no deserto ocidental do Egito com Bedouin Trails.",
  zh: "以四驱车无法体验的方式探索白沙漠。Bedouin Trails带您了解埃及西部沙漠徒步和骆驼骑行的完整指南。",
};

const excerptI18n = {
  fr: "Il y a une difference fondamentale entre voir le Desert Blanc a travers une vitre de voiture et le sentir sous vos pieds. Decouvrez le guide complet du trekking et de la randonnee a chameau dans le desert occidental egyptien.",
  de: "Es gibt einen grundlegenden Unterschied zwischen dem Betrachten der Weissen Wuste durch ein Autofenster und dem Spuren des Sandes unter den Fussen. Entdecken Sie den kompletten Leitfaden zum Trekking und Kamelreiten.",
  es: "Hay una diferencia fundamental entre ver el Desierto Blanco a traves de una ventanilla y sentirlo bajo tus pies. Descubre la guia completa del trekking y paseo en camello.",
  it: "C'e una differenza fondamentale tra vedere il Deserto Bianco dal finestrino e sentirlo sotto i piedi. Scopri la guida completa al trekking e alla cammellata.",
  nl: "Er is een fundamenteel verschil tussen de Witte Woestijn bekijken door een autoruit en het zand onder je voeten voelen. Ontdek de complete gids voor trekking en kameelrijden.",
  pt: "Ha uma diferenca fundamental entre ver o Deserto Branco pela janela do carro e senti-lo sob seus pes. Descubra o guia completo do trekking e passeio de camelo.",
  zh: "透过车窗看白沙漠和亲自踏足其间有着本质的区别。探索徒步和骆驼骑行的完整指南。",
};

const contentI18n = {
  fr: `<p>Il y a une difference fondamentale entre voir le Desert Blanc a travers la vitre d'un 4x4 et le sentir reellement sous vos pieds. Le crissement du sable a chaque pas, la chaleur du soleil sur vos epaules, le rythme de votre respiration synchronise avec la demarche tranquille d'un chameau — ce sont des details qu'aucun moteur ne peut traduire. Le trekking et la randonnee a chameau dans le desert occidental egyptien ne sont pas simplement une alternative « plus lente » au safari en voiture ; c'est une experience fondamentalement differente.</p>
<h2>Pourquoi les Voyageurs Choisissent le Trekking</h2>
<p>Quand vous vous deplacez au meme rythme que les ancetres bedouins, des details s'ouvrent qui sont impossibles a remarquer depuis une fenetre en mouvement : une plante rare entre les rochers, des traces d'animaux nocturnes sur le sable doux. Le trekking vous donne aussi un veritable sentiment d'accomplissement personnel.</p>
<h2>Randonnee a Chameau : Retour au Mode de Voyage Originel</h2>
<p>Un chameau n'est pas un simple moyen de transport traditionnel ; c'est un veritable compagnon de voyage. Le rythme lent et oscillant cree un etat meditatif quasi automatique. Les treks de plusieurs jours a chameau font revivre l'experience des anciennes caravanes commerciales.</p>
<h2>Comment Commencer Votre Voyage</h2>
<p>Nous avons deux voyages concus pour cette aventure. L'<a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">expedition de 5 jours</a> combine marche, chameau et camping. Le <a href="/journeys/8-days-hiking-program">programme de randonnee de 8 jours</a> vous emmene plus profondement dans le coeur du desert.</p>`,
  de: `<p>Es gibt einen grundlegenden Unterschied zwischen dem Betrachten der Weissen Wuste durch das Fenster eines 4x4 und dem tatsachlichen Spuren unter Ihren Fussen. Das Knirschen des Sandes bei jedem Schritt, die Warme der Sonne auf Ihren Schultern — Details, die kein Motor ubersetzen kann.</p>
<h2>Warum Reisende das Trekking Wahlen</h2>
<p>Wenn Sie sich im gleichen Tempo wie die Beduinen-Vorfahren bewegen, offnen sich Details, die vom fahrenden Auto aus unsichtbar sind. Das Trekking gibt Ihnen auch ein echtes Gefuhl personlicher Leistung.</p>
<h2>Kamelreiten: Ruckkehr zur Ursprunglichen Reiseart</h2>
<p>Ein Kamel ist ein echter Reisebegleiter. Der langsame, schaukelnde Rhythmus des Kamelreitens schafft einen fast automatischen meditativen Zustand.</p>
<h2>Wie Sie Ihre Reise Beginnen</h2>
<p>Die <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">5-tagige Kamel-Trekking-Expedition</a> kombiniert Wandern, Kamelreiten und Camping. Das <a href="/journeys/8-days-hiking-program">8-tagige Wanderprogramm</a> fuhrt Sie tiefer ins Herz der Wuste.</p>`,
  es: `<p>Hay una diferencia fundamental entre ver el Desierto Blanco a traves de la ventanilla de un 4x4 y sentirlo bajo tus pies. El crujido de la arena con cada paso, el calor del sol en tus hombros — detalles que ningun motor puede traducir.</p>
<h2>Por Que los Viajeros Eligen el Trekking</h2>
<p>Cuando te mueves al mismo ritmo que los ancestros beduinos, se abren detalles imposibles de notar desde una ventanilla en movimiento. El trekking te da una genuina sensacion de logro personal.</p>
<h2>Paseo en Camello: Regreso al Modo de Viaje Original</h2>
<p>Un camello es un verdadero companero de viaje. El ritmo lento y oscilante crea un estado meditativo casi automatico.</p>
<h2>Como Comenzar tu Viaje</h2>
<p>La <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">expedicion de 5 dias</a> combina caminata, camello y camping. El <a href="/journeys/8-days-hiking-program">programa de senderismo de 8 dias</a> te lleva mas profundo al corazon del desierto.</p>`,
  it: `<p>C'e una differenza fondamentale tra vedere il Deserto Bianco dal finestrino di un 4x4 e sentirlo sotto i piedi. Lo scricchiolio della sabbia ad ogni passo, il calore del sole sulle spalle — dettagli che nessun motore puo tradurre.</p>
<h2>Perche i Viaggiatori Scelgono il Trekking</h2>
<p>Muovendosi allo stesso ritmo degli antenati beduini, si aprono dettagli impossibili da notare da un finestrino in movimento. Il trekking offre un genuino senso di realizzazione personale.</p>
<h2>Cammellata: Ritorno al Mezzo di Viaggio Originale</h2>
<p>Un cammello e un vero compagno di viaggio. Il ritmo lento e oscillante crea uno stato meditativo quasi automatico.</p>
<h2>Come Iniziare il Viaggio</h2>
<p>La <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">spedizione di 5 giorni</a> combina camminata, cammello e campeggio. Il <a href="/journeys/8-days-hiking-program">programma di trekking di 8 giorni</a> vi porta nel cuore del deserto.</p>`,
  nl: `<p>Er is een fundamenteel verschil tussen de Witte Woestijn bekijken door het raam van een 4x4 en het daadwerkelijk voelen onder je voeten. Het zachte kraken van zand bij elke stap, de warmte van de zon op je schouders — details die geen motor kan vertalen.</p>
<h2>Waarom Reizigers Kiezen voor Trekking</h2>
<p>Wanneer je je beweegt in hetzelfde tempo als de Bedoeienen-voorouders, openen zich details die onmogelijk zijn waar te nemen vanuit een rijdend voertuig.</p>
<h2>Kameelrijden: Terug naar het Oorspronkelijke Vervoer</h2>
<p>Een kameel is een echte reisgenoot. Het langzame, wiegende ritme creert een bijna automatische meditatieve staat.</p>
<h2>Hoe Je Reis te Beginnen</h2>
<p>De <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">5-daagse kameel-trekking expeditie</a> combineert wandelen, kameelrijden en kamperen. Het <a href="/journeys/8-days-hiking-program">8-daags wandelprogramma</a> brengt je dieper in het hart van de woestijn.</p>`,
  pt: `<p>Ha uma diferenca fundamental entre ver o Deserto Branco pela janela de um 4x4 e senti-lo sob seus pes. O leve estalar da areia a cada passo, o calor do sol nos ombros — detalhes que nenhum motor pode traduzir.</p>
<h2>Por Que os Viajantes Escolhem o Trekking</h2>
<p>Quando voce se move no mesmo ritmo dos ancestrais beduinos, detalhes se abrem que sao impossiveis de notar de uma janela em movimento. O trekking da uma genuina sensacao de realizacao pessoal.</p>
<h2>Passeio de Camelo: Retorno ao Modo de Viagem Original</h2>
<p>Um camelo e um verdadeiro companheiro de viagem. O ritmo lento e oscilante cria um estado meditativo quase automatico.</p>
<h2>Como Comecar Sua Viagem</h2>
<p>A <a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">expedicao de 5 dias</a> combina caminhada, camelo e camping. O <a href="/journeys/8-days-hiking-program">programa de caminhada de 8 dias</a> leva voce mais fundo no coracao do deserto.</p>`,
  zh: `<p>透过疾驰的四驱车窗户看白沙漠和亲自踏足其间有着本质的区别。每一步踩在沙上的细微声响，阳光照在肩上的温暖，你的呼吸节奏与骆驼悠闲步伐的同步——这些细节是任何引擎都无法传达的。</p>
<h2>为什么旅行者选择徒步</h2>
<p>当你以贝都因祖先同样的节奏行进时，那些从移动车窗中不可能注意到的细节便会展现：岩石间藏着的稀有沙漠植物，细沙上夜行动物的足迹。徒步还给你真正的个人成就感。</p>
<h2>骆驼骑行：回归沙漠原始旅行方式</h2>
<p>骆驼是真正的旅行伙伴。缓慢摇摆的骑行节奏创造了近乎自动的冥想状态。</p>
<h2>如何开始你的旅程</h2>
<p><a href="/journeys/5-day-white-desert-camel-trekking-camping-expedition">5天骆驼徒步露营探险</a>将步行、骆驼骑行和露营结合为一体。<a href="/journeys/8-days-hiking-program">8天徒步计划</a>带你深入西部沙漠的心脏。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "Do I need prior trekking experience?",
    questionAr: "هل أحتاج إلى خبرة سابقة في التريكنج؟",
    questionI18n: {
      fr: "Ai-je besoin d'une experience prealable en trekking ?",
      de: "Brauche ich vorherige Trekking-Erfahrung?",
      es: "Necesito experiencia previa en trekking?",
      it: "Ho bisogno di esperienza precedente nel trekking?",
      nl: "Heb ik eerdere trekking-ervaring nodig?",
      pt: "Preciso de experiencia previa em trekking?",
      zh: "我需要之前的徒步经验吗？",
    },
    answerEn:
      "No — the routes are designed for average travelers, and your Bedouin guide sets the pace according to the group's level.",
    answerAr:
      "لا، فالمسارات مصممة لتناسب المسافرين العاديين، والمرشد البدوي يضبط وتيرة المشي وفقاً لمستوى المجموعة.",
    answerI18n: {
      fr: "Non — les itineraires sont concus pour les voyageurs ordinaires, et votre guide bedouin ajuste le rythme selon le niveau du groupe.",
      de: "Nein — die Routen sind fur durchschnittliche Reisende konzipiert, und Ihr Beduinenfuhrer bestimmt das Tempo nach dem Gruppenniveau.",
      es: "No — las rutas estan disenadas para viajeros promedio, y tu guia beduino establece el ritmo segun el nivel del grupo.",
      it: "No — i percorsi sono progettati per viaggiatori medi, e la tua guida beduina imposta il ritmo in base al livello del gruppo.",
      nl: "Nee — de routes zijn ontworpen voor gemiddelde reizigers, en je Bedoeienengids past het tempo aan op het groepsniveau.",
      pt: "Nao — as rotas sao projetadas para viajantes comuns, e seu guia beduino define o ritmo de acordo com o nivel do grupo.",
      zh: "不需要——路线是为普通旅行者设计的，贝都因向导会根据团队水平调整节奏。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "How far do we walk each day?",
    questionAr: "كم مسافة نمشي في اليوم عادة؟",
    questionI18n: {
      fr: "Quelle distance marchons-nous chaque jour ?",
      de: "Wie weit laufen wir jeden Tag?",
      es: "Cuanta distancia caminamos cada dia?",
      it: "Quanta distanza percorriamo ogni giorno?",
      nl: "Hoeveel lopen we elke dag?",
      pt: "Quanta distancia caminhamos por dia?",
      zh: "我们每天步行多远？",
    },
    answerEn:
      "Daily distances typically range between 8 and 15 kilometers, split across the morning and afternoon, with regular rest stops.",
    answerAr:
      "تتراوح المسافة اليومية عادة بين 8 و15 كيلومتراً، موزعة على فترتي الصباح وما بعد الظهر، مع فترات راحة منتظمة.",
    answerI18n: {
      fr: "Les distances quotidiennes varient generalement entre 8 et 15 kilometres, reparties entre le matin et l'apres-midi, avec des pauses regulieres.",
      de: "Die taglichen Entfernungen liegen typischerweise zwischen 8 und 15 Kilometern, aufgeteilt auf Vormittag und Nachmittag, mit regelmasigen Ruhepausen.",
      es: "Las distancias diarias suelen variar entre 8 y 15 kilometros, divididas entre la manana y la tarde, con paradas regulares de descanso.",
      it: "Le distanze giornaliere variano tipicamente tra 8 e 15 chilometri, suddivise tra mattina e pomeriggio, con soste regolari.",
      nl: "De dagelijkse afstanden liggen doorgaans tussen 8 en 15 kilometer, verdeeld over ochtend en middag, met regelmatige rustpauzes.",
      pt: "As distancias diarias variam tipicamente entre 8 e 15 quilometros, divididas entre manha e tarde, com paradas regulares para descanso.",
      zh: "每天步行距离通常在8到15公里之间，分为上午和下午两段，中间有规律的休息。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "Is camel riding uncomfortable or painful?",
    questionAr: "هل ركوب الجمال مؤلم أو غير مريح؟",
    questionI18n: {
      fr: "La randonnee a chameau est-elle inconfortable ou douloureuse ?",
      de: "Ist Kamelreiten unbequem oder schmerzhaft?",
      es: "Es incomodo o doloroso montar en camello?",
      it: "Andare in cammello e scomodo o doloroso?",
      nl: "Is kameelrijden oncomfortabel of pijnlijk?",
      pt: "Andar de camelo e desconfortavel ou doloroso?",
      zh: "骑骆驼不舒服或疼吗？",
    },
    answerEn:
      "With the traditional padded saddles we use, and regular breaks to stretch your legs, most travelers find it comfortable even on longer trips.",
    answerAr:
      "مع السرج التقليدي المبطن الذي نستخدمه، ومع فترات راحة منتظمة لتمديد الساقين، تكون التجربة مريحة لمعظم المسافرين حتى في الرحلات الأطول.",
    answerI18n: {
      fr: "Avec les selles traditionnelles rembourrées que nous utilisons et des pauses regulieres pour etirer les jambes, la plupart des voyageurs trouvent cela confortable meme sur les longs trajets.",
      de: "Mit den gepolsterten traditionellen Satteln und regelmasigen Pausen zum Beinestrecken finden die meisten Reisenden es selbst auf langeren Touren bequem.",
      es: "Con las monturas tradicionales acolchadas que usamos y descansos regulares para estirar las piernas, la mayoria de los viajeros lo encuentran comodo incluso en viajes mas largos.",
      it: "Con le selle tradizionali imbottite che utilizziamo e pause regolari per sgranchire le gambe, la maggior parte dei viaggiatori lo trova confortevole anche nei viaggi piu lunghi.",
      nl: "Met de traditionele gewatteerde zadels die we gebruiken en regelmatige pauzes om je benen te strekken, vinden de meeste reizigers het comfortabel, zelfs op langere tochten.",
      pt: "Com as selas tradicionais acolchoadas que usamos e pausas regulares para alongar as pernas, a maioria dos viajantes acha confortavel mesmo em viagens mais longas.",
      zh: "我们使用传统的软垫鞍座，并定期休息伸展双腿，大多数旅行者即使在较长的行程中也觉得很舒适。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "white-desert-trekking-camel-riding",
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
  image: "/img/white-desert-trekking-camel-riding.jpg",
  author: "Bedouin Trails Team",
  category: "Trekking & Adventure",
  tags: JSON.stringify([
    "white desert trekking",
    "white desert hiking",
    "camel trekking egypt",
    "white desert egypt",
    "desert trekking guide",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "white desert trekking",
    "camel trekking egypt",
    "white desert hiking",
  ]),
  secondaryKeywords: JSON.stringify([
    "white desert egypt",
    "desert trekking guide",
    "camel riding western desert",
    "egypt desert adventure",
  ]),
  readingTime: 10,
  isPublished: true,
  publishedAt: new Date("2026-09-28"),
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
