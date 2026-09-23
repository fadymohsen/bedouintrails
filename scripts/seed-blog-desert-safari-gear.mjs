/**
 * Blog 8: Packing for Extreme Conditions — The Ultimate Egyptian Desert Safari Gear Guide
 * Slug: desert-safari-gear-packing-guide
 * Run with: node scripts/seed-blog-desert-safari-gear.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr =
  "التحزيم للظروف القاسية: الدليل الشامل لمعدات سفاري الصحراء المصرية";

const metaTitleAr =
  "التحزيم للظروف القاسية: الدليل الشامل لمعدات سفاري الصحراء المصرية | Bedouin Trails (2026)";

const metaDescAr =
  "دليلك النهائي لتحزيم معدات سفاري الصحراء المصرية: ملابس الطبقات، الأحذية المناسبة، أدوات النجاة، وكل ما تحتاجه لرحلة مريحة وآمنة في الصحراء الغربية مع Bedouin Trails.";

const excerptAr =
  "هل تخطط لرحلة سفاري في الصحراء المصرية؟ اكتشف الدليل الشامل والنهائي لمعدات التحزيم — من نظام الطبقات والأحذية إلى أدوات النجاة والراحة الشخصية. كل ما تحتاج معرفته قبل مغامرتك مع Bedouin Trails.";

const contentAr = `<p>إذا كانت هذه هي رحلتك الأولى إلى الصحراء، فقد تجد نفسك في حيرة من أمرك أمام حقيبة السفر. مناخ الصحراء مخادع بشكل ملحوظ؛ فهو يتأرجح بقسوة بين الحرارة الحارقة تحت أشعة الشمس المباشرة في منتصف النهار، وبين البرودة القارسة التي تتسلل إلى العظام بمجرد غياب الشمس وراء الأفق. التحزيم الصحيح والذكي يمكن أن يصنع الفارق بين تجربة سفاري مريحة وممتعة، وبين ليلة تقضيها مرتجفاً أو نهاراً تعاني فيه من ضربة شمس. بصفتنا مرشدين بدويين محليين يجوبون الصحراء الغربية على مدار العام وفي كافة الفصول، قمنا بتجميع هذا الدليل الشامل والنهائي لمعدات السفاري، لنضمن أن تحضر معك كل ما تحتاجه، وتترك ما لن يفيدك.</p>

<h2>فن نظام الطبقات (Layering): سر البقاء مرتاحاً</h2>
<p>القاعدة الذهبية والأولى للملابس الصحراوية هي 'الطبقات'. لا تعتمد أبداً على سترة واحدة ثقيلة أو قميص واحد خفيف. خلال النهار، تعتبر الملابس المصنوعة من الأقمشة الطبيعية القابلة للتنفس (مثل القطن الفاتح والكتان) ضرورية لعكس أشعة الشمس والحفاظ على برودة جسمك وتبخر العرق. ومع ذلك، بمجرد أن تغيب الشمس، تنخفض درجات الحرارة بسرعة درامية. هنا يأتي دور الطبقات: ابدأ بطبقة أساسية حرارية (Thermal base layer) تحتفظ بحرارة الجسم، ثم أضف سترة من الصوف (Fleece) للعزل، واختم بسترة خارجية واقية من الرياح (Windbreaker)، فالرياح الصحراوية ليلاً هي السبب الرئيسي للشعور بالبرد القارس.</p>

<h2>حماية الأطراف: الأحذية المريحة وأغطية الرأس الضرورية</h2>
<p>اترك أحذية التنزه الجبلية الثقيلة (Heavy hiking boots) في المنزل، إلا إذا كنت تخطط لرحلات تسلق صخور قاسية. للصحراء الغربية، الأحذية الرياضية المريحة والمغلقة من الأمام ذات النعل الجيد هي الأفضل للمشي على الرمال الناعمة والتضاريس الحصوية في الصحراء السوداء، كما أنها تمنع دخول الرمال المزعجة بين أصابعك. بالنسبة للرأس، قبعة واسعة الحواف تحمي الوجه والرقبة هي خيار جيد، ولكن الخيار الاحترافي الذي نوصي به هو الشال البدوي التقليدي (الكوفية). يمكنك شراؤه من الواحة، وهو ممتاز لأنه يحمي رأسك ورقبتك من حروق الشمس، ويمكن لفه حول الفم والأنف في حالة هبوب رياح محملة بالغبار.</p>
<p>إذا كنتم تخططون لرحلة تريكنج أو مشي طويلة تستدعي هذه المعدات، تحقق من <a href="/journeys">رحلاتنا المتعددة للتريكنج والتخييم</a>.</p>

<h2>أدوات النجاة والراحة الشخصية في العراء</h2>
<p>بما أنك ستكون بعيداً عن مقابس الكهرباء والمتاجر لعدة أيام، فإن التحضير اللوجستي الشخصي مهم. يعد 'بنك الطاقة' (Power Bank) عالي السعة (20,000 مللي أمبير مثلاً) أمراً بالغ الأهمية للحفاظ على كاميرتك وهاتفك (للتصوير) مشحونين. واقي الشمس بدرجة حماية قوية (SPF 50+) والنظارات الشمسية المستقطبة ضروريان لمكافحة وهج الشمس والرمال البيضاء الذي قد يؤذي العين. الهواء الصحراوي جاف جداً، لذا فإن مرطب الشفاه وكريم ترطيب البشرة الكثيف سيحمي وجهك ويديك من التشقق. وأخيراً، المناديل المبللة المخصصة للأطفال أو المخصصة للتخييم، ومعقم اليدين، لا تقدر بثمن للحفاظ على النظافة الشخصية في ظل محدودية المياه الجارية.</p>

<h2>عمق الثقافة البدوية وكرم الضيافة</h2>
<p>لا تكتمل رحلة الصحراء دون الانغماس في الثقافة المحلية. البدو هم السكان الأصليون لهذه المناطق الممتدة، وهم يمتلكون معرفة فطرية توارثوها عبر الأجيال عن كل صخرة وكل نجمة وكل نبتة في الصحراء. رحلتك مع مرشدينا ليست مجرد استعراض للمناظر الطبيعية، بل هي فرصة للتعلم من خبراء حقيقيين في فنون البقاء والتعايش مع أقسى ظروف الطبيعة. ستتعلم كيف يهتدون بالنجوم، وكيف يقرؤون آثار أقدام الحيوانات على الرمال الناعمة، وكيف يستخدمون النباتات الصحراوية في الطب التقليدي.</p>
<p>في المساء، حول نار المخيم، تتجلى أسمى معاني الضيافة البدوية. سيتم تقديم الشاي البدوي الشهير المطهو على الجمر ببطء، وسيشاركك المرشدون حكاياتهم وأساطيرهم المتوارثة. هذه اللحظات من التواصل الإنساني الأصيل هي ما يجعل ضيوفنا يعودون مراراً وتكراراً؛ حيث لا يشعرون بأنهم مجرد سياح، بل كضيوف مكرمين في منزل واسع لا سقف له سوى السماء.</p>

<h2>لماذا تعتبر الجولات الخاصة الخيار الأمثل لاستكشاف الصحراء؟</h2>
<p>عند التخطيط لرحلة سفاري في الصحراء الغربية، يواجه المسافرون خياراً رئيسياً: الانضمام إلى جولة جماعية مشتركة أو حجز جولة خاصة. في Bedouin Trails، تخصصنا حصرياً في الجولات الخاصة، وذلك لعدة أسباب جوهرية تؤثر بشكل مباشر على جودة تجربتك:</p>
<h3>أولاً: الخصوصية التامة والهدوء</h3>
<p>الصحراء هي مكان للصمت والتأمل. في الجولات الجماعية، يتم دمجك في سيارة ومخيم مع مسافرين آخرين لا تعرفهم. الجولة الخاصة تعني أن المخيم بأكمله مخصص لك ولمجموعتك فقط. يمكنك اختيار الاستماع إلى الصمت المطلق للصحراء، أو الاستمتاع بمحادثات هادئة مع عائلتك وأصدقائك دون أي إزعاج خارجي.</p>
<h3>ثانياً: مرونة الإيقاع والجدول الزمني</h3>
<p>الجولات الجماعية تعمل وفق جدول زمني صارم. في الجولة الخاصة، أنت من يتحكم في الإيقاع. المرشد البدوي الخاص بك موجود لتلبية رغباتك؛ يمكنك قضاء وقت أطول في جبل الكريستال، أو تخطي موقع لا يثير اهتمامك، أو طلب التوقف في منتصف الطريق لمجرد الاستمتاع بمشهد الكثبان الرملية.</p>
<h3>ثالثاً: الاهتمام الشخصي وجودة الخدمة</h3>
<p>عندما يتعامل الفريق مع سيارة واحدة ومجموعة واحدة، فإن مستوى الخدمة يرتفع بشكل هائل. سيقوم مرشدك بمشاركة قصص مخصصة تتناسب مع اهتماماتك. وجبات الطعام تُعد بعناية أكبر، ويتم تلبية أي متطلبات غذائية خاصة بدقة تامة. هذه التجربة المخصصة تحول الرحلة من مجرد جولة سياحية إلى رحلة استكشافية حصرية ومريحة للغاية.</p>

<h2>الطقس وأفضل أوقات الزيارة للصحراء الغربية</h2>
<p>تتميز الصحراء الغربية في مصر بمناخ قاري شديد الجفاف، مما يعني أن هناك تبايناً كبيراً في درجات الحرارة بين النهار والليل، وكذلك بين فصول السنة المختلفة. فهم هذا المناخ هو مفتاح التخطيط لرحلة سفاري ناجحة ومريحة.</p>
<ul>
  <li><strong>فصل الخريف (أكتوبر – نوفمبر):</strong> يُعتبر من أفضل الأوقات لزيارة الصحراء البيضاء والسوداء. درجات الحرارة في النهار معتدلة (25–30°م)، والليالي مائلة للبرودة (10–15°م)، مما يوفر جواً مثالياً للجلوس حول نار المخيم.</li>
  <li><strong>فصل الشتاء (ديسمبر – فبراير):</strong> نهار مشمس ولطيف (18–22°م)، لكن الليالي شديدة البرودة وقد تقترب من الصفر المئوي. مثالي لمن لا يتحملون الحرارة، ويتطلب ملابس شتوية ثقيلة وأكياس نوم مخصصة (نوفرها في Bedouin Trails).</li>
  <li><strong>فصل الربيع (مارس – مايو):</strong> يشبه الخريف في اعتداله النهاري، لكنه قد يشهد رياح الخماسين المحملة بالرمال. الأيام الصافية ساحرة وتتفتح فيها بعض النباتات الصحراوية النادرة.</li>
  <li><strong>فصل الصيف (يونيو – سبتمبر):</strong> حرارة تتجاوز 40°م نهاراً. التحرك يكون في الصباح الباكر وقبل الغروب فقط. ليالي الصيف معتدلة ومثالية لمراقبة النجوم.</li>
</ul>

<h2>الدليل الشامل للتحزيم: ماذا تحضر معك في رحلة السفاري؟</h2>
<p>الاستعداد لرحلة الصحراء يختلف تماماً عن الاستعداد لعطلة شاطئية أو رحلة مدينة. الصحراء بيئة متطرفة تتطلب معدات وملابس ذكية تعتمد على نظام "الطبقات".</p>
<h3>الملابس المناسبة</h3>
<ul>
  <li><strong>النهار:</strong> أقمشة طبيعية قابلة للتنفس (القطن والكتان). قمصان بأكمام طويلة وألوان فاتحة لتعكس أشعة الشمس. السراويل الواسعة والخفيفة أفضل بكثير من الجينز.</li>
  <li><strong>المساء والليل:</strong> طبقة أساسية حرارية، سترة صوف (Fleece)، سترة خارجية مقاومة للرياح. في الشتاء: قبعة شتوية، قفازات، وجوارب صوفية سميكة.</li>
</ul>
<h3>الأحذية وحماية الرأس</h3>
<ul>
  <li>حذاء مشي رياضي مريح أو حذاء تنزه خفيف مغلق من الأمام.</li>
  <li>قبعة واسعة الحواف أو الكوفية البدوية التقليدية من الواحات البحرية.</li>
  <li>نظارات شمسية مستقطبة (Polarized) عالية الجودة.</li>
</ul>
<h3>المعدات الأساسية والراحة الشخصية</h3>
<ul>
  <li>بنك طاقة (Power Bank) بسعة لا تقل عن 10,000 مللي أمبير.</li>
  <li>واقي شمس (SPF 50+)، مرطب شفاه، ومرطب للبشرة.</li>
  <li>مناديل مبللة قابلة للتحلل ومعقم لليدين.</li>
  <li>مصباح رأس (Headlamp) للتحرك بحرية في المخيم ليلاً.</li>
</ul>
<h3>ما نوفره لك في Bedouin Trails</h3>
<p>لتقليل حجم أمتعتك، نحن نوفر كافة معدات التخييم الثقيلة: خيام بدوية متينة، مراتب نوم سميكة ومريحة، أكياس نوم عالية الجودة ومناسبة لدرجات الحرارة المنخفضة، وبطانيات إضافية نظيفة. كما نوفر كافة الأطعمة، ومعدات الطبخ، والمياه المعدنية النقية طوال الرحلة.</p>

<h2>التزامنا بالسياحة المستدامة ومبادئ "لا تترك أثراً"</h2>
<p>الصحراء الغربية، وخاصة محمية الصحراء البيضاء الوطنية، هي بيئة هشة للغاية. التكوينات الطباشيرية التي استغرقت ملايين السنين لتتشكل يمكن تدميرها في ثوانٍ بسبب السلوك غير المسؤول. في Bedouin Trails، نحن ندرك أننا حراس لهذه الأرض، ولذلك نطبق مبادئ صارمة للسياحة البيئية المستدامة.</p>
<ul>
  <li><strong>سياسة عدم ترك الأثر (Leave No Trace):</strong> نحن نضمن أن كل ما نجلبه إلى الصحراء يعود معنا. يتم جمع كافة النفايات في أكياس مخصصة ونقلها إلى أماكن التخلص الآمن.</li>
  <li><strong>احترام الحياة البرية:</strong> الصحراء موطن لكائنات نادرة مثل ثعلب الفنك. نحن نمنع إطعام الحيوانات البرية ونعلم ضيوفنا كيفية مراقبتها من مسافة آمنة.</li>
  <li><strong>القيادة المسؤولة:</strong> التزام مسارات القيادة المحددة لحماية الغطاء النباتي الصحراوي النادر ومنع تآكل التربة. باختيارك لنا، أنت تساهم في حماية هذا الإرث الطبيعي للأجيال القادمة.</li>
</ul>

<p>في Bedouin Trails، نحن نلتزم بتقديم تجربة سفاري استثنائية وآمنة وتليق بتطلعاتك. الصحراء الغربية بمثابة عالم سحري ينتظر من يكتشفه بأسلوب أصيل ويحترمه ككنز طبيعي. <a href="/journeys">احجز جولتك الخاصة اليوم</a>، ودعنا نأخذك في رحلة ستغير نظرتك للطبيعة وتمنحك ذكريات تدوم مدى الحياة.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "Packing for Extreme Conditions: The Ultimate Egyptian Desert Safari Gear Guide";

const metaTitleEn =
  "Desert Safari Packing Guide: Ultimate Egypt Gear Checklist | Bedouin Trails (2026)";

const metaDescEn =
  "The definitive packing guide for an Egyptian desert safari: layering system, proper footwear, survival tools, and everything you need for a comfortable Western Desert trip with Bedouin Trails.";

const excerptEn =
  "Planning a desert safari in Egypt? Discover the ultimate packing and gear guide — from the layering system and footwear to survival tools and personal comfort essentials. Everything you need to know before your adventure with Bedouin Trails.";

const contentEn = `<p>If this is your first trip to the desert, you might find yourself puzzled when facing your suitcase. The desert climate is remarkably deceptive — it swings brutally between scorching heat under the direct midday sun and bone-chilling cold the moment the sun dips below the horizon. Smart, well-planned packing can make the difference between a comfortable and enjoyable safari experience and a night spent shivering or a day suffering from sunstroke. As local Bedouin guides who traverse the Western Desert year-round and across all seasons, we've compiled this comprehensive and definitive safari gear guide to ensure you bring everything you need — and leave behind what you don't.</p>

<h2>The Art of Layering: The Secret to Staying Comfortable</h2>
<p>The golden rule of desert clothing is 'layers'. Never rely on a single heavy jacket or a single lightweight shirt. During the day, garments made from natural breathable fabrics — such as light-coloured cotton and linen — are essential for reflecting sunlight, keeping your body cool, and allowing sweat to evaporate. However, once the sun sets, temperatures drop dramatically. This is where layering comes in: start with a thermal base layer that retains body heat, add a fleece jacket for insulation, and finish with a windbreaker outer shell — the desert wind at night is the primary cause of that bone-chilling cold.</p>

<h2>Protecting Your Extremities: Comfortable Footwear and Essential Headgear</h2>
<p>Leave the heavy mountain hiking boots at home — unless you're planning serious rock-climbing expeditions. For the Western Desert, comfortable closed-toe athletic shoes with good grip are the best choice for walking on soft sand and the gravelly terrain of the Black Desert, and they prevent annoying sand from getting between your toes. For your head, a wide-brimmed hat that protects your face and neck is a good option, but the professional choice we recommend is the traditional Bedouin shawl (keffiyeh). You can buy one at the oasis — it's excellent because it protects your head and neck from sunburn, and can be wrapped around your mouth and nose during dusty wind storms.</p>
<p>If you're planning a longer trekking or hiking trip that calls for this gear, check out <a href="/journeys">our multi-day trekking and camping journeys</a>.</p>

<h2>Survival Tools and Personal Comfort in the Open</h2>
<p>Since you'll be far from electrical outlets and shops for several days, personal logistical preparation is important. A high-capacity power bank (20,000 mAh, for example) is critical for keeping your camera and phone (for photography) charged. Sunscreen with strong protection (SPF 50+) and polarised sunglasses are essential to combat the glare from the sun and the white sand, which can damage your eyes. The desert air is extremely dry, so lip balm and a thick moisturising cream will protect your face and hands from cracking. Finally, baby wipes or camping wipes and hand sanitiser are invaluable for maintaining personal hygiene when running water is limited.</p>

<h2>The Depth of Bedouin Culture and Hospitality</h2>
<p>No desert journey is complete without immersing yourself in the local culture. The Bedouin are the indigenous people of these vast territories, possessing an innate generational knowledge of every rock, every star, and every plant in the desert. Your trip with our guides is not merely a showcase of natural scenery — it is an opportunity to learn from true experts in the arts of survival and coexistence with nature's harshest conditions. You'll learn how they navigate by the stars, how they read animal tracks on the soft sand, and how they use desert plants in traditional medicine.</p>
<p>In the evening, gathered around the campfire, the finest expressions of Bedouin hospitality come to life. The famous Bedouin tea slowly brewed over glowing embers is served as your guides share their inherited stories and legends. These moments of genuine human connection are what bring our guests back time and again — they don't feel like mere tourists, but like honoured guests in a vast home whose only ceiling is the sky.</p>

<h2>Why Private Tours Are the Best Choice for Exploring the Desert</h2>
<p>When planning a Western Desert safari, travellers face a key choice: joining a shared group tour or booking a private one. At Bedouin Trails, we specialise exclusively in private tours for several fundamental reasons that directly affect the quality of your experience:</p>
<h3>First: Complete Privacy and Tranquillity</h3>
<p>The desert is a place of silence and reflection. On group tours, you're placed in a vehicle and camp with strangers. A private tour means the entire camp is dedicated solely to you and your group. You can choose to listen to the desert's absolute silence, or enjoy quiet conversations with your family and friends without any outside disturbance.</p>
<h3>Second: Flexibility of Pace and Schedule</h3>
<p>Group tours run on a rigid timetable. On a private tour, you control the pace. Your personal Bedouin guide is there to fulfil your wishes — you can spend more time at Crystal Mountain, skip a site that doesn't interest you, or request a spontaneous stop mid-route simply to enjoy a view of the dunes.</p>
<h3>Third: Personal Attention and Quality of Service</h3>
<p>When the team focuses on a single vehicle and a single group, the level of service rises dramatically. Your guide shares stories tailored to your interests. Meals are prepared with greater care, and any special dietary requirements are met with precision. This bespoke experience transforms the journey from a standard tour into an exclusive, supremely comfortable exploration.</p>

<h2>Weather and Best Times to Visit the Western Desert</h2>
<p>Egypt's Western Desert has an extremely arid continental climate, meaning there is a large temperature variation between day and night, as well as between the different seasons. Understanding this climate is the key to planning a successful, comfortable safari.</p>
<ul>
  <li><strong>Autumn (October–November):</strong> One of the best times to visit the White and Black Deserts. Daytime temperatures are moderate (25–30°C) and nights are pleasantly cool (10–15°C), perfect for sitting around the campfire.</li>
  <li><strong>Winter (December–February):</strong> Sunny pleasant days (18–22°C) but very cold nights that can approach 0°C. Ideal for those who can't tolerate heat, but requires heavy winter clothing and cold-weather sleeping bags (which we provide at Bedouin Trails).</li>
  <li><strong>Spring (March–May):</strong> Similar to autumn in daytime mildness, but may see the hot, sand-laden Khamsin winds. Clear spring days are magical, with rare desert plants blooming.</li>
  <li><strong>Summer (June–September):</strong> Daytime temperatures exceed 40°C. Activities are limited to early morning and pre-sunset. Summer nights are moderate and ideal for stargazing without heavy clothing.</li>
</ul>

<h2>The Complete Packing Guide: What to Bring on Your Safari</h2>
<p>Preparing for a desert trip is completely different from packing for a beach holiday or a city break. The desert is an extreme environment that requires smart gear and clothing based on the layering system.</p>
<h3>Appropriate Clothing</h3>
<ul>
  <li><strong>Daytime:</strong> Natural breathable fabrics (cotton and linen). Long-sleeved shirts in light colours to reflect sunlight. Loose, lightweight trousers are far better than jeans.</li>
  <li><strong>Evenings and night:</strong> Thermal base layer, fleece jacket, windbreaker outer shell. In winter: beanie, gloves, and thick wool socks.</li>
</ul>
<h3>Footwear and Head Protection</h3>
<ul>
  <li>Comfortable closed-toe athletic shoes or light hiking boots.</li>
  <li>Wide-brimmed hat or the traditional Bedouin keffiyeh from the Bahariya Oasis.</li>
  <li>High-quality polarised sunglasses.</li>
</ul>
<h3>Essential Gear and Personal Comfort</h3>
<ul>
  <li>Power bank with at least 10,000 mAh capacity.</li>
  <li>Sunscreen (SPF 50+), lip balm, and moisturiser.</li>
  <li>Biodegradable wet wipes and hand sanitiser.</li>
  <li>Headlamp for moving freely around camp at night.</li>
</ul>
<h3>What Bedouin Trails Provides</h3>
<p>To keep your luggage light, we supply all heavy camping equipment: sturdy Bedouin tents, thick comfortable sleeping mattresses, high-quality sleeping bags rated for low temperatures, and extra clean blankets. We also provide all food, cooking equipment, and purified mineral water throughout the trip.</p>

<h2>Our Commitment to Sustainable Tourism and Leave No Trace</h2>
<p>The Western Desert — especially the White Desert National Park — is an extremely fragile environment. The chalk formations that took millions of years to form can be destroyed in seconds by irresponsible behaviour. At Bedouin Trails, we recognise that we are guardians of this land, and we apply strict sustainable ecotourism principles.</p>
<ul>
  <li><strong>Leave No Trace:</strong> We ensure everything we bring into the desert comes back with us. All waste is collected in designated bags and transported to safe disposal sites.</li>
  <li><strong>Respect for Wildlife:</strong> The desert is home to rare creatures such as the fennec fox. We prohibit feeding wild animals and teach our guests to observe them safely from a distance.</li>
  <li><strong>Responsible Driving:</strong> Sticking to designated driving routes to protect rare desert vegetation and prevent soil erosion. By choosing us, you contribute to preserving this natural heritage for future generations.</li>
</ul>

<p>At Bedouin Trails, we are committed to delivering an exceptional, safe safari experience worthy of your aspirations. The Western Desert is a magical world waiting to be discovered authentically and respected as a natural treasure. <a href="/journeys">Book your private tour today</a>, and let us take you on a journey that will change the way you see nature and give you memories that last a lifetime.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Préparer ses Bagages pour les Conditions Extrêmes : Le Guide Ultime de l'Équipement Safari dans le Désert Égyptien",
  de: "Packen für Extrembedingungen: Der Ultimative Ausrüstungsguide für eine Wüstensafari in Ägypten",
  es: "Equipaje para Condiciones Extremas: La Guía Definitiva del Equipo para Safari en el Desierto Egipcio",
  it: "Preparare i Bagagli per Condizioni Estreme: La Guida Definitiva all'Equipaggiamento Safari nel Deserto Egiziano",
  nl: "Inpakken voor Extreme Omstandigheden: De Ultieme Uitrustingsgids voor een Woestijnsafari in Egypte",
  pt: "Fazendo as Malas para Condições Extremas: O Guia Definitivo de Equipamento para Safari no Deserto Egípcio",
  zh: "极端条件下的行装准备：埃及沙漠探险终极装备指南",
};

const metaTitleI18n = {
  fr: "Guide de Bagages Safari : Checklist Équipement Désert Égyptien | Bedouin Trails (2026)",
  de: "Wüstensafari Packliste: Ultimative Ägypten-Ausrüstung | Bedouin Trails (2026)",
  es: "Guía de Equipaje Safari: Lista Definitiva para el Desierto Egipcio | Bedouin Trails (2026)",
  it: "Guida Bagagli Safari: Checklist Equipaggiamento Deserto Egiziano | Bedouin Trails (2026)",
  nl: "Woestijnsafari Paklijst: Ultieme Egypte Uitrustingsgids | Bedouin Trails (2026)",
  pt: "Guia de Bagagem Safari: Lista Definitiva para o Deserto Egípcio | Bedouin Trails (2026)",
  zh: "沙漠探险行装指南：埃及终极装备清单 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Le guide de bagages définitif pour un safari dans le désert égyptien : système de couches, chaussures adaptées, outils de survie et tout le nécessaire pour un voyage confortable dans le désert occidental avec Bedouin Trails.",
  de: "Der ultimative Packleitfaden für eine ägyptische Wüstensafari: Schichtsystem, geeignetes Schuhwerk, Überlebenswerkzeuge und alles, was Sie für eine komfortable Reise in die Westliche Wüste mit Bedouin Trails brauchen.",
  es: "La guía definitiva de equipaje para un safari en el desierto egipcio: sistema de capas, calzado adecuado, herramientas de supervivencia y todo lo necesario para un viaje cómodo al Desierto Occidental con Bedouin Trails.",
  it: "La guida definitiva ai bagagli per un safari nel deserto egiziano: sistema a strati, calzature adeguate, strumenti di sopravvivenza e tutto il necessario per un viaggio confortevole nel Deserto Occidentale con Bedouin Trails.",
  nl: "De ultieme paklijst voor een Egyptische woestijnsafari: laagjes-systeem, geschikt schoeisel, overlevingstools en alles wat je nodig hebt voor een comfortabele reis naar de Westelijke Woestijn met Bedouin Trails.",
  pt: "O guia definitivo de bagagem para um safari no deserto egípcio: sistema de camadas, calçado adequado, ferramentas de sobrevivência e tudo o que precisa para uma viagem confortável ao Deserto Ocidental com Bedouin Trails.",
  zh: "埃及沙漠探险终极行装指南：分层穿衣系统、合适鞋履、生存工具，以及与Bedouin Trails舒适穿越西部沙漠所需的一切。",
};

const excerptI18n = {
  fr: "Vous préparez un safari dans le désert égyptien ? Découvrez le guide ultime de bagages et d'équipement — du système de couches aux chaussures, en passant par les outils de survie et le confort personnel. Tout ce qu'il faut savoir avant votre aventure avec Bedouin Trails.",
  de: "Planen Sie eine Wüstensafari in Ägypten? Entdecken Sie den ultimativen Pack- und Ausrüstungsguide — vom Schichtsystem und Schuhwerk bis zu Überlebenswerkzeugen und persönlichem Komfort. Alles, was Sie vor Ihrem Abenteuer mit Bedouin Trails wissen müssen.",
  es: "¿Planeas un safari en el desierto egipcio? Descubre la guía definitiva de equipaje y equipo — desde el sistema de capas y calzado hasta herramientas de supervivencia y confort personal. Todo lo que necesitas saber antes de tu aventura con Bedouin Trails.",
  it: "Stai pianificando un safari nel deserto egiziano? Scopri la guida definitiva ai bagagli e all'equipaggiamento — dal sistema a strati e calzature agli strumenti di sopravvivenza e comfort personale. Tutto ciò che devi sapere prima della tua avventura con Bedouin Trails.",
  nl: "Plan je een woestijnsafari in Egypte? Ontdek de ultieme pak- en uitrustingsgids — van het laagjes-systeem en schoeisel tot overlevingstools en persoonlijk comfort. Alles wat je moet weten vóór je avontuur met Bedouin Trails.",
  pt: "Planejando um safari no deserto egípcio? Descubra o guia definitivo de bagagem e equipamento — do sistema de camadas e calçado às ferramentas de sobrevivência e conforto pessoal. Tudo o que precisa saber antes da sua aventura com a Bedouin Trails.",
  zh: "计划一次埃及沙漠探险？探索终极行装和装备指南——从分层穿衣系统和鞋履到生存工具和个人舒适用品。在与Bedouin Trails冒险之前您需要了解的一切。",
};

const contentI18n = {
  fr: `<p>Si c'est votre premier voyage dans le désert, vous pourriez vous retrouver perplexe face à votre valise. Le climat désertique est remarquablement trompeur — il oscille brutalement entre la chaleur brûlante sous le soleil direct de midi et le froid glacial qui s'installe dès que le soleil disparaît derrière l'horizon. Un emballage intelligent et bien planifié peut faire la différence entre une expérience safari confortable et une nuit passée à frissonner. En tant que guides bédouins locaux qui parcourent le désert occidental toute l'année, nous avons compilé ce guide définitif de l'équipement safari.</p>

<h2>L'Art des Couches : Le Secret du Confort</h2>
<p>La règle d'or du vêtement désertique est les « couches ». Pendant la journée, les vêtements en tissus naturels respirants (coton clair et lin) sont essentiels. Mais dès que le soleil se couche, les températures chutent dramatiquement. Commencez par une couche de base thermique, ajoutez une polaire pour l'isolation, et terminez par un coupe-vent — le vent du désert la nuit est la principale cause du froid glacial.</p>

<h2>Protection des Extrémités : Chaussures et Couvre-chefs</h2>
<p>Laissez les lourdes chaussures de montagne à la maison. Pour le désert occidental, des chaussures de sport confortables et fermées avec une bonne adhérence sont le meilleur choix. Pour la tête, nous recommandons le châle bédouin traditionnel (keffieh) que vous pouvez acheter à l'oasis — il protège du soleil et peut être enroulé autour du visage lors des tempêtes de sable.</p>
<p>Si vous planifiez un trek plus long, découvrez <a href="/journeys">nos randonnées et expéditions de camping</a>.</p>

<h2>Outils de Survie et Confort Personnel</h2>
<p>Un power bank haute capacité (20 000 mAh) est crucial. Un écran solaire SPF 50+, des lunettes de soleil polarisées, un baume à lèvres et une crème hydratante épaisse protégeront votre peau. Les lingettes humides et le désinfectant pour les mains sont inestimables pour l'hygiène en l'absence d'eau courante.</p>

<h2>La Profondeur de la Culture Bédouine et l'Hospitalité</h2>
<p>Aucun voyage dans le désert n'est complet sans s'immerger dans la culture locale. Les Bédouins possèdent un savoir inné transmis de génération en génération. Vous apprendrez comment ils s'orientent par les étoiles, lisent les traces d'animaux et utilisent les plantes désertiques en médecine traditionnelle.</p>
<p>Le soir, autour du feu de camp, le fameux thé bédouin lentement infusé sur les braises est servi tandis que vos guides partagent leurs histoires et légendes héritées. Ces moments de connexion humaine authentique font revenir nos hôtes encore et encore.</p>

<h2>Pourquoi les Tours Privés Sont le Meilleur Choix</h2>
<h3>Intimité Totale et Tranquillité</h3>
<p>Un tour privé signifie que l'ensemble du camp vous est dédié. Profitez du silence absolu du désert ou de conversations tranquilles sans perturbation.</p>
<h3>Flexibilité du Rythme</h3>
<p>Vous contrôlez le tempo. Passez plus de temps à la Montagne de Cristal, sautez un site, ou arrêtez-vous spontanément pour admirer les dunes.</p>
<h3>Attention Personnelle et Service de Qualité</h3>
<p>Votre guide partage des histoires adaptées à vos intérêts. Les repas sont préparés avec plus de soin et toutes les exigences alimentaires sont satisfaites avec précision.</p>

<h2>Météo et Meilleurs Moments pour Visiter</h2>
<ul>
  <li><strong>Automne (octobre–novembre) :</strong> L'un des meilleurs moments. Températures diurnes modérées (25–30°C) et nuits fraîches (10–15°C).</li>
  <li><strong>Hiver (décembre–février) :</strong> Journées agréables (18–22°C) mais nuits très froides pouvant approcher 0°C. Nous fournissons des sacs de couchage adaptés.</li>
  <li><strong>Printemps (mars–mai) :</strong> Douceur similaire à l'automne, avec possibles vents de Khamsin chargés de sable. Les jours clairs sont magiques.</li>
  <li><strong>Été (juin–septembre) :</strong> Températures dépassant 40°C le jour. Activités limitées au matin et au coucher du soleil. Nuits idéales pour l'observation des étoiles.</li>
</ul>

<h2>Guide Complet de Bagages : Quoi Emporter</h2>
<h3>Vêtements Appropriés</h3>
<ul>
  <li><strong>Journée :</strong> Tissus naturels respirants, chemises à manches longues en couleurs claires, pantalons amples et légers.</li>
  <li><strong>Soir et nuit :</strong> Sous-vêtement thermique, polaire, coupe-vent. En hiver : bonnet, gants et chaussettes en laine épaisse.</li>
</ul>
<h3>Chaussures et Protection de la Tête</h3>
<ul>
  <li>Chaussures de marche fermées et confortables.</li>
  <li>Chapeau à larges bords ou keffieh bédouin traditionnel.</li>
  <li>Lunettes de soleil polarisées de haute qualité.</li>
</ul>
<h3>Équipement Essentiel</h3>
<ul>
  <li>Power bank d'au moins 10 000 mAh.</li>
  <li>Écran solaire SPF 50+, baume à lèvres et crème hydratante.</li>
  <li>Lingettes biodégradables et désinfectant pour les mains.</li>
  <li>Lampe frontale pour se déplacer au camp la nuit.</li>
</ul>
<h3>Ce que Bedouin Trails Fournit</h3>
<p>Nous fournissons tout l'équipement de camping : tentes bédouines solides, matelas épais, sacs de couchage de haute qualité, couvertures supplémentaires, tous les repas et l'eau minérale purifiée.</p>

<h2>Notre Engagement envers le Tourisme Durable</h2>
<ul>
  <li><strong>Politique zéro déchet :</strong> Tout ce que nous apportons repart avec nous.</li>
  <li><strong>Respect de la faune :</strong> Nous n'alimentons jamais les animaux sauvages et enseignons l'observation à distance.</li>
  <li><strong>Conduite responsable :</strong> Nous respectons les pistes désignées pour protéger la végétation rare.</li>
</ul>

<p>Chez Bedouin Trails, nous nous engageons à offrir une expérience safari exceptionnelle et sûre. <a href="/journeys">Réservez votre tour privé aujourd'hui</a> et laissez-nous vous emmener dans un voyage qui changera votre vision de la nature.</p>`,

  de: `<p>Wenn dies Ihre erste Reise in die Wüste ist, könnten Sie angesichts Ihres Koffers ratlos sein. Das Wüstenklima ist bemerkenswert trügerisch — es schwankt brutal zwischen sengender Hitze unter der direkten Mittagssonne und knochenkalter Kälte, sobald die Sonne hinter dem Horizont verschwindet. Intelligentes Packen kann den Unterschied zwischen einem komfortablen Safari-Erlebnis und einer zitternden Nacht ausmachen. Als lokale Beduinenführer, die die Westliche Wüste das ganze Jahr über durchstreifen, haben wir diesen umfassenden Ausrüstungsguide zusammengestellt.</p>

<h2>Die Kunst des Schichtens: Das Geheimnis des Komforts</h2>
<p>Die goldene Regel der Wüstenkleidung sind „Schichten". Tagsüber sind natürliche, atmungsaktive Stoffe (helle Baumwolle und Leinen) unerlässlich. Aber sobald die Sonne untergeht, fallen die Temperaturen dramatisch. Beginnen Sie mit einer thermischen Basisschicht, fügen Sie ein Fleece hinzu und schließen Sie mit einer Windjacke ab.</p>

<h2>Schutz der Extremitäten: Schuhe und Kopfbedeckung</h2>
<p>Lassen Sie die schweren Bergstiefel zu Hause. Bequeme, geschlossene Sportschuhe mit gutem Profil sind die beste Wahl. Für den Kopf empfehlen wir das traditionelle Beduinen-Tuch (Keffiyeh) — es schützt vor Sonne und kann bei Sandstürmen ums Gesicht gewickelt werden.</p>
<p>Wenn Sie eine längere Trekkingtour planen, entdecken Sie <a href="/journeys">unsere mehrtägigen Trek- und Campingreisen</a>.</p>

<h2>Überlebenswerkzeuge und Persönlicher Komfort</h2>
<p>Eine Powerbank mit hoher Kapazität (20.000 mAh) ist entscheidend. Sonnencreme SPF 50+, polarisierte Sonnenbrille, Lippenbalsam und eine reichhaltige Feuchtigkeitscreme schützen Ihre Haut. Feuchttücher und Handdesinfektionsmittel sind bei eingeschränkter Wasserversorgung unschätzbar wertvoll.</p>

<h2>Die Tiefe der Beduinenkultur und Gastfreundschaft</h2>
<p>Keine Wüstenreise ist vollständig ohne Eintauchen in die lokale Kultur. Die Beduinen besitzen ein angeborenes, generationsübergreifendes Wissen. Sie lernen, wie sie sich an den Sternen orientieren, Tierspuren im Sand lesen und Wüstenpflanzen in der traditionellen Medizin verwenden.</p>
<p>Abends, ums Lagerfeuer versammelt, wird der berühmte Beduinentee langsam über glühenden Kohlen gebrüht, während die Guides ihre überlieferten Geschichten und Legenden teilen.</p>

<h2>Warum Private Touren die Beste Wahl Sind</h2>
<h3>Vollständige Privatsphäre und Ruhe</h3>
<p>Eine private Tour bedeutet, dass das gesamte Lager ausschließlich Ihnen gewidmet ist.</p>
<h3>Flexibilität des Tempos</h3>
<p>Sie bestimmen das Tempo. Verbringen Sie mehr Zeit am Kristallberg, überspringen Sie einen Ort oder halten Sie spontan an, um die Dünen zu genießen.</p>
<h3>Persönliche Aufmerksamkeit und Servicequalität</h3>
<p>Ihr Guide teilt Geschichten, die auf Ihre Interessen zugeschnitten sind. Mahlzeiten werden sorgfältiger zubereitet und alle Ernährungsbedürfnisse präzise berücksichtigt.</p>

<h2>Wetter und Beste Reisezeiten</h2>
<ul>
  <li><strong>Herbst (Oktober–November):</strong> Einer der besten Zeiträume. Moderate Tagestemperaturen (25–30°C) und angenehm kühle Nächte (10–15°C).</li>
  <li><strong>Winter (Dezember–Februar):</strong> Angenehme Tage (18–22°C) aber sehr kalte Nächte nahe 0°C. Wir stellen passende Schlafsäcke bereit.</li>
  <li><strong>Frühling (März–Mai):</strong> Ähnlich wie Herbst, aber mit möglichen heißen Khamsin-Winden. Klare Frühlingstage sind zauberhaft.</li>
  <li><strong>Sommer (Juni–September):</strong> Tagestemperaturen über 40°C. Aktivitäten nur morgens und vor Sonnenuntergang. Sommernächte ideal zur Sternenbeobachtung.</li>
</ul>

<h2>Vollständiger Packleitfaden: Was Sie Mitbringen Sollten</h2>
<h3>Geeignete Kleidung</h3>
<ul>
  <li><strong>Tagsüber:</strong> Natürliche, atmungsaktive Stoffe, langärmelige Hemden in hellen Farben, lockere leichte Hosen.</li>
  <li><strong>Abends und nachts:</strong> Thermische Basisschicht, Fleecejacke, Windjacke. Im Winter: Mütze, Handschuhe, dicke Wollsocken.</li>
</ul>
<h3>Schuhe und Kopfschutz</h3>
<ul>
  <li>Bequeme, geschlossene Wanderschuhe oder leichte Trekkingstiefel.</li>
  <li>Breitkrempiger Hut oder traditionelles Beduinen-Keffiyeh.</li>
  <li>Hochwertige polarisierte Sonnenbrille.</li>
</ul>
<h3>Wichtige Ausrüstung</h3>
<ul>
  <li>Powerbank mit mindestens 10.000 mAh.</li>
  <li>Sonnencreme SPF 50+, Lippenbalsam und Feuchtigkeitscreme.</li>
  <li>Biologisch abbaubare Feuchttücher und Handdesinfektionsmittel.</li>
  <li>Stirnlampe für freie Bewegung im Lager bei Nacht.</li>
</ul>
<h3>Was Bedouin Trails Bereitstellt</h3>
<p>Wir stellen die gesamte schwere Campingausrüstung: robuste Beduinenzelte, dicke Matratzen, hochwertige Schlafsäcke, zusätzliche Decken, alle Mahlzeiten und Mineralwasser.</p>

<h2>Unser Engagement für Nachhaltigen Tourismus</h2>
<ul>
  <li><strong>Leave-No-Trace-Politik:</strong> Alles kommt wieder zurück.</li>
  <li><strong>Respekt vor Wildtieren:</strong> Wir füttern niemals wilde Tiere und lehren Beobachtung aus sicherer Distanz.</li>
  <li><strong>Verantwortungsvolles Fahren:</strong> Wir halten uns an ausgewiesene Routen zum Schutz der seltenen Vegetation.</li>
</ul>

<p>Bei Bedouin Trails sind wir bestrebt, ein außergewöhnliches, sicheres Safari-Erlebnis zu bieten. <a href="/journeys">Buchen Sie Ihre private Tour noch heute</a> und lassen Sie sich auf eine Reise mitnehmen, die Ihre Sicht auf die Natur verändern wird.</p>`,

  es: `<p>Si este es tu primer viaje al desierto, probablemente te encuentres desconcertado frente a tu maleta. El clima del desierto es notablemente engañoso — oscila brutalmente entre el calor abrasador bajo el sol directo del mediodía y el frío penetrante que se instala en cuanto el sol desaparece tras el horizonte. Un equipaje inteligente y bien planificado puede marcar la diferencia entre una experiencia de safari cómoda y una noche tiritando. Como guías beduinos locales que recorren el Desierto Occidental durante todo el año, hemos compilado esta guía definitiva de equipamiento safari.</p>

<h2>El Arte de las Capas: El Secreto de la Comodidad</h2>
<p>La regla de oro de la ropa del desierto son las «capas». Durante el día, las prendas de tejidos naturales transpirables (algodón claro y lino) son esenciales. Pero en cuanto se pone el sol, las temperaturas descienden dramáticamente. Comienza con una capa base térmica, añade un forro polar y termina con un cortavientos.</p>

<h2>Protección de las Extremidades: Calzado y Protección para la Cabeza</h2>
<p>Deja las pesadas botas de montaña en casa. Zapatillas deportivas cómodas y cerradas con buen agarre son la mejor opción. Para la cabeza, recomendamos el pañuelo beduino tradicional (kefiyeh) — protege del sol y puede envolver el rostro durante tormentas de arena.</p>
<p>Si planeas un trekking más largo, descubre <a href="/journeys">nuestras expediciones de trekking y campamento</a>.</p>

<h2>Herramientas de Supervivencia y Confort Personal</h2>
<p>Una batería externa de alta capacidad (20.000 mAh) es crucial. Protector solar SPF 50+, gafas de sol polarizadas, bálsamo labial y una crema hidratante espesa protegerán tu piel. Las toallitas húmedas y el desinfectante de manos son invaluables cuando el agua corriente es limitada.</p>

<h2>La Profundidad de la Cultura Beduina y la Hospitalidad</h2>
<p>Ningún viaje al desierto está completo sin sumergirse en la cultura local. Los beduinos poseen un conocimiento innato transmitido de generación en generación. Aprenderás cómo se orientan por las estrellas, leen rastros de animales y usan plantas del desierto en la medicina tradicional.</p>
<p>Por la noche, alrededor de la hoguera, el famoso té beduino se prepara lentamente sobre las brasas mientras los guías comparten sus historias y leyendas heredadas.</p>

<h2>¿Por Qué los Tours Privados Son la Mejor Opción?</h2>
<h3>Privacidad Total y Tranquilidad</h3>
<p>Un tour privado significa que todo el campamento está dedicado exclusivamente a ti y tu grupo.</p>
<h3>Flexibilidad de Ritmo</h3>
<p>Tú controlas el ritmo. Pasa más tiempo en la Montaña de Cristal, salta un sitio o detente espontáneamente para disfrutar de las dunas.</p>
<h3>Atención Personal y Calidad del Servicio</h3>
<p>Tu guía comparte historias adaptadas a tus intereses. Las comidas se preparan con más esmero y cualquier requisito dietético se cumple con precisión.</p>

<h2>Clima y Mejores Épocas para Visitar</h2>
<ul>
  <li><strong>Otoño (octubre–noviembre):</strong> Uno de los mejores momentos. Temperaturas diurnas moderadas (25–30°C) y noches frescas (10–15°C).</li>
  <li><strong>Invierno (diciembre–febrero):</strong> Días agradables (18–22°C) pero noches muy frías cercanas a 0°C. Proporcionamos sacos de dormir adecuados.</li>
  <li><strong>Primavera (marzo–mayo):</strong> Similar al otoño, con posibles vientos Khamsin cargados de arena. Los días despejados son mágicos.</li>
  <li><strong>Verano (junio–septiembre):</strong> Temperaturas diurnas superiores a 40°C. Actividades solo por la mañana y al atardecer. Noches ideales para observar estrellas.</li>
</ul>

<h2>Guía Completa de Equipaje: Qué Llevar</h2>
<h3>Ropa Adecuada</h3>
<ul>
  <li><strong>Día:</strong> Tejidos naturales transpirables, camisas de manga larga en colores claros, pantalones holgados y ligeros.</li>
  <li><strong>Noche:</strong> Capa base térmica, forro polar, cortavientos. En invierno: gorro, guantes y calcetines gruesos de lana.</li>
</ul>
<h3>Calzado y Protección de la Cabeza</h3>
<ul>
  <li>Zapatillas de senderismo cómodas y cerradas.</li>
  <li>Sombrero de ala ancha o kefiyeh beduino tradicional.</li>
  <li>Gafas de sol polarizadas de alta calidad.</li>
</ul>
<h3>Equipamiento Esencial</h3>
<ul>
  <li>Batería externa de al menos 10.000 mAh.</li>
  <li>Protector solar SPF 50+, bálsamo labial y crema hidratante.</li>
  <li>Toallitas biodegradables y desinfectante de manos.</li>
  <li>Linterna frontal para moverse libremente en el campamento por la noche.</li>
</ul>
<h3>Lo que Bedouin Trails Proporciona</h3>
<p>Proporcionamos todo el equipo de camping pesado: tiendas beduinas resistentes, colchones gruesos, sacos de dormir de alta calidad, mantas extra, todas las comidas y agua mineral purificada.</p>

<h2>Nuestro Compromiso con el Turismo Sostenible</h2>
<ul>
  <li><strong>Política de no dejar rastro:</strong> Todo lo que traemos vuelve con nosotros.</li>
  <li><strong>Respeto por la vida silvestre:</strong> Nunca alimentamos animales salvajes y enseñamos la observación a distancia segura.</li>
  <li><strong>Conducción responsable:</strong> Seguimos rutas designadas para proteger la vegetación rara del desierto.</li>
</ul>

<p>En Bedouin Trails, nos comprometemos a ofrecer una experiencia safari excepcional y segura. <a href="/journeys">Reserva tu tour privado hoy</a> y déjanos llevarte en un viaje que cambiará tu visión de la naturaleza.</p>`,

  it: `<p>Se questo è il vostro primo viaggio nel deserto, potreste trovarvi perplessi davanti alla valigia. Il clima del deserto è notevolmente ingannevole — oscilla brutalmente tra il caldo torrido sotto il sole diretto di mezzogiorno e il freddo gelido che si insinua nelle ossa appena il sole cala dietro l'orizzonte. Un bagaglio intelligente e ben pianificato può fare la differenza tra un'esperienza safari confortevole e una notte trascorsa a tremare. Come guide beduine locali che attraversano il Deserto Occidentale tutto l'anno, abbiamo compilato questa guida definitiva all'equipaggiamento safari.</p>

<h2>L'Arte degli Strati: Il Segreto del Comfort</h2>
<p>La regola d'oro dell'abbigliamento nel deserto sono gli «strati». Durante il giorno, indumenti in tessuti naturali traspiranti (cotone chiaro e lino) sono essenziali. Ma appena il sole tramonta, le temperature precipitano. Iniziate con uno strato base termico, aggiungete un pile per l'isolamento e terminate con un giacca antivento.</p>

<h2>Protezione delle Estremità: Calzature e Copricapo</h2>
<p>Lasciate a casa gli scarponi pesanti da montagna. Scarpe sportive comode e chiuse con buona aderenza sono la scelta migliore. Per la testa, raccomandiamo lo scialle beduino tradizionale (kefiah) — protegge dal sole e può essere avvolto intorno al viso durante le tempeste di sabbia.</p>
<p>Se state pianificando un trekking più lungo, scoprite <a href="/journeys">le nostre spedizioni di trekking e campeggio</a>.</p>

<h2>Strumenti di Sopravvivenza e Comfort Personale</h2>
<p>Un power bank ad alta capacità (20.000 mAh) è fondamentale. Crema solare SPF 50+, occhiali da sole polarizzati, balsamo per le labbra e una crema idratante densa proteggeranno la vostra pelle. Le salviette umide e il disinfettante per le mani sono inestimabili quando l'acqua corrente è limitata.</p>

<h2>La Profondità della Cultura Beduina e dell'Ospitalità</h2>
<p>Nessun viaggio nel deserto è completo senza immergersi nella cultura locale. I beduini possiedono una conoscenza innata tramandata di generazione in generazione. Imparerete come si orientano con le stelle, leggono le tracce degli animali e usano le piante del deserto nella medicina tradizionale.</p>
<p>La sera, intorno al fuoco da campo, il famoso tè beduino viene lentamente preparato sulle braci mentre le guide condividono le loro storie e leggende ereditate.</p>

<h2>Perché i Tour Privati Sono la Scelta Migliore</h2>
<h3>Privacy Totale e Tranquillità</h3>
<p>Un tour privato significa che l'intero campo è dedicato esclusivamente a voi e al vostro gruppo.</p>
<h3>Flessibilità di Ritmo</h3>
<p>Voi controllate il ritmo. Trascorrete più tempo alla Montagna di Cristallo, saltate un sito o fermatevi spontaneamente per ammirare le dune.</p>
<h3>Attenzione Personale e Qualità del Servizio</h3>
<p>La vostra guida condivide storie su misura per i vostri interessi. I pasti sono preparati con più cura e ogni esigenza alimentare viene soddisfatta con precisione.</p>

<h2>Clima e Migliori Periodi per Visitare</h2>
<ul>
  <li><strong>Autunno (ottobre–novembre):</strong> Uno dei periodi migliori. Temperature diurne moderate (25–30°C) e notti fresche (10–15°C).</li>
  <li><strong>Inverno (dicembre–febbraio):</strong> Giornate piacevoli (18–22°C) ma notti molto fredde vicine a 0°C. Forniamo sacchi a pelo adatti.</li>
  <li><strong>Primavera (marzo–maggio):</strong> Simile all'autunno, con possibili venti caldi Khamsin carichi di sabbia. I giorni limpidi sono magici.</li>
  <li><strong>Estate (giugno–settembre):</strong> Temperature diurne oltre i 40°C. Attività solo al mattino presto e al tramonto. Notti ideali per l'osservazione delle stelle.</li>
</ul>

<h2>Guida Completa ai Bagagli: Cosa Portare</h2>
<h3>Abbigliamento Appropriato</h3>
<ul>
  <li><strong>Giorno:</strong> Tessuti naturali traspiranti, camicie a maniche lunghe in colori chiari, pantaloni larghi e leggeri.</li>
  <li><strong>Sera e notte:</strong> Strato base termico, pile, giacca antivento. In inverno: berretto, guanti e calzini di lana spessi.</li>
</ul>
<h3>Calzature e Protezione della Testa</h3>
<ul>
  <li>Scarpe da trekking comode e chiuse.</li>
  <li>Cappello a tesa larga o kefiah beduina tradizionale.</li>
  <li>Occhiali da sole polarizzati di alta qualità.</li>
</ul>
<h3>Equipaggiamento Essenziale</h3>
<ul>
  <li>Power bank da almeno 10.000 mAh.</li>
  <li>Crema solare SPF 50+, balsamo labbra e crema idratante.</li>
  <li>Salviette biodegradabili e disinfettante per le mani.</li>
  <li>Lampada frontale per muoversi liberamente nel campo di notte.</li>
</ul>
<h3>Cosa Fornisce Bedouin Trails</h3>
<p>Forniamo tutta l'attrezzatura pesante da campeggio: tende beduine robuste, materassi spessi, sacchi a pelo di alta qualità, coperte extra, tutti i pasti e acqua minerale purificata.</p>

<h2>Il Nostro Impegno per il Turismo Sostenibile</h2>
<ul>
  <li><strong>Politica Leave No Trace:</strong> Tutto ciò che portiamo torna con noi.</li>
  <li><strong>Rispetto per la fauna:</strong> Non alimentiamo mai animali selvatici e insegniamo l'osservazione a distanza sicura.</li>
  <li><strong>Guida responsabile:</strong> Seguiamo percorsi designati per proteggere la vegetazione rara del deserto.</li>
</ul>

<p>Da Bedouin Trails, ci impegniamo a offrire un'esperienza safari eccezionale e sicura. <a href="/journeys">Prenotate il vostro tour privato oggi</a> e lasciateci portarvi in un viaggio che cambierà la vostra visione della natura.</p>`,

  nl: `<p>Als dit je eerste reis naar de woestijn is, sta je misschien verbaasd voor je koffer. Het woestijnklimaat is opmerkelijk bedrieglijk — het schommelt meedogenloos tussen verzengende hitte onder de directe middagzon en een knagende kou zodra de zon achter de horizon verdwijnt. Slim en goed gepland inpakken kan het verschil maken tussen een comfortabele safari-ervaring en een nacht rillend doorgebracht. Als lokale Bedoeïenengidsen die het hele jaar door de Westelijke Woestijn doorkruisen, hebben we deze uitgebreide uitrustingsgids samengesteld.</p>

<h2>De Kunst van Laagjes: Het Geheim van Comfort</h2>
<p>De gouden regel van woestijnkleding is 'laagjes'. Overdag zijn kleding van natuurlijke, ademende stoffen (licht katoen en linnen) essentieel. Maar zodra de zon ondergaat, dalen de temperaturen dramatisch. Begin met een thermische basislaag, voeg een fleece toe en sluit af met een windbreaker.</p>

<h2>Bescherming van de Extremiteiten: Schoeisel en Hoofdbedekking</h2>
<p>Laat de zware bergschoenen thuis. Comfortabele, gesloten sportschoenen met goede grip zijn de beste keuze. Voor het hoofd raden we de traditionele Bedoeïenensluier (keffiyeh) aan — hij beschermt tegen de zon en kan om het gezicht worden gewikkeld bij zandstormen.</p>
<p>Als je een langere trekking plant, bekijk dan <a href="/journeys">onze meerdaagse trek- en kampeertochten</a>.</p>

<h2>Overlevingstools en Persoonlijk Comfort</h2>
<p>Een powerbank met hoge capaciteit (20.000 mAh) is cruciaal. Zonnebrandcrème SPF 50+, gepolariseerde zonnebril, lippenbalsem en een rijke vochtinbrengende crème beschermen je huid. Vochtige doekjes en handdesinfecterend middel zijn van onschatbare waarde bij beperkt stromend water.</p>

<h2>De Diepte van de Bedoeïenencultuur en Gastvrijheid</h2>
<p>Geen woestijnreis is compleet zonder onderdompeling in de lokale cultuur. De Bedoeïenen bezitten een aangeboren kennis, doorgegeven van generatie op generatie. Je leert hoe ze navigeren op de sterren, dierensporen in het zand lezen en woestijnplanten gebruiken in traditionele geneeskunde.</p>
<p>'s Avonds, rond het kampvuur, wordt de beroemde Bedoeïenenthee langzaam gezet op gloeiende kooltjes terwijl de gidsen hun overgeleverde verhalen en legendes delen.</p>

<h2>Waarom Privétours de Beste Keuze Zijn</h2>
<h3>Volledige Privacy en Rust</h3>
<p>Een privétour betekent dat het hele kamp uitsluitend voor jou en je groep is.</p>
<h3>Flexibiliteit van Tempo</h3>
<p>Jij bepaalt het tempo. Breng meer tijd door bij de Kristalberg, sla een locatie over of stop spontaan om van de duinen te genieten.</p>
<h3>Persoonlijke Aandacht en Kwaliteit van Service</h3>
<p>Je gids deelt verhalen afgestemd op jouw interesses. Maaltijden worden met meer zorg bereid en alle dieetwensen worden nauwkeurig opgevold.</p>

<h2>Weer en Beste Tijden om te Bezoeken</h2>
<ul>
  <li><strong>Herfst (oktober–november):</strong> Een van de beste periodes. Gematigde dagtemperaturen (25–30°C) en aangenaam koele nachten (10–15°C).</li>
  <li><strong>Winter (december–februari):</strong> Aangename dagen (18–22°C) maar zeer koude nachten nabij 0°C. Wij leveren geschikte slaapzakken.</li>
  <li><strong>Lente (maart–mei):</strong> Vergelijkbaar met herfst, maar met mogelijke hete Khamsin-winden met zand. Heldere lentedagen zijn betoverend.</li>
  <li><strong>Zomer (juni–september):</strong> Dagtemperaturen boven 40°C. Activiteiten alleen 's ochtends vroeg en voor zonsondergang. Zomernachten ideaal voor sterrenkijken.</li>
</ul>

<h2>Complete Paklijst: Wat Mee te Nemen</h2>
<h3>Geschikte Kleding</h3>
<ul>
  <li><strong>Overdag:</strong> Natuurlijke ademende stoffen, shirts met lange mouwen in lichte kleuren, losse lichte broeken.</li>
  <li><strong>Avond en nacht:</strong> Thermische basislaag, fleecevest, windbreaker. In de winter: muts, handschoenen en dikke wollen sokken.</li>
</ul>
<h3>Schoeisel en Hoofdbescherming</h3>
<ul>
  <li>Comfortabele gesloten wandelschoenen of lichte trekkingschoenen.</li>
  <li>Breedgerande hoed of traditionele Bedoeïenen-keffiyeh.</li>
  <li>Hoogwaardige gepolariseerde zonnebril.</li>
</ul>
<h3>Essentiële Uitrusting</h3>
<ul>
  <li>Powerbank van minimaal 10.000 mAh.</li>
  <li>Zonnebrandcrème SPF 50+, lippenbalsem en vochtinbrengende crème.</li>
  <li>Biologisch afbreekbare vochtige doekjes en handdesinfecterend middel.</li>
  <li>Hoofdlamp om 's nachts vrij door het kamp te bewegen.</li>
</ul>
<h3>Wat Bedouin Trails Levert</h3>
<p>Wij leveren alle zware kampeeruitrusting: stevige Bedoeïenententen, dikke matrassen, hoogwaardige slaapzakken, extra dekens, alle maaltijden en gezuiverd mineraalwater.</p>

<h2>Onze Toewijding aan Duurzaam Toerisme</h2>
<ul>
  <li><strong>Leave No Trace-beleid:</strong> Alles wat we meenemen komt weer terug.</li>
  <li><strong>Respect voor wilde dieren:</strong> We voeren nooit wilde dieren en leren observatie op veilige afstand.</li>
  <li><strong>Verantwoord rijden:</strong> We volgen aangewezen routes ter bescherming van de zeldzame vegetatie.</li>
</ul>

<p>Bij Bedouin Trails streven we naar een uitzonderlijke, veilige safari-ervaring. <a href="/journeys">Boek vandaag nog je privétour</a> en laat ons je meenemen op een reis die je kijk op de natuur zal veranderen.</p>`,

  pt: `<p>Se esta é a sua primeira viagem ao deserto, provavelmente ficará confuso diante da mala. O clima do deserto é notavelmente enganador — oscila brutalmente entre o calor escaldante sob o sol direto do meio-dia e o frio cortante que se instala assim que o sol desaparece no horizonte. Uma mala inteligente e bem planeada pode fazer a diferença entre uma experiência de safari confortável e uma noite a tremer. Como guias beduínos locais que percorrem o Deserto Ocidental durante todo o ano, compilámos este guia definitivo de equipamento safari.</p>

<h2>A Arte das Camadas: O Segredo do Conforto</h2>
<p>A regra de ouro da roupa do deserto são as «camadas». Durante o dia, roupas de tecidos naturais respiráveis (algodão claro e linho) são essenciais. Mas assim que o sol se põe, as temperaturas caem dramaticamente. Comece com uma camada base térmica, adicione um polar e termine com um corta-vento.</p>

<h2>Proteção das Extremidades: Calçado e Proteção para a Cabeça</h2>
<p>Deixe as botas pesadas de montanha em casa. Ténis confortáveis e fechados com boa aderência são a melhor escolha. Para a cabeça, recomendamos o lenço beduíno tradicional (kefiyeh) — protege do sol e pode ser enrolado à volta do rosto durante tempestades de areia.</p>
<p>Se planeia um trekking mais longo, descubra <a href="/journeys">as nossas expedições de trekking e campismo</a>.</p>

<h2>Ferramentas de Sobrevivência e Conforto Pessoal</h2>
<p>Uma bateria externa de alta capacidade (20.000 mAh) é crucial. Protetor solar SPF 50+, óculos de sol polarizados, bálsamo labial e um creme hidratante espesso protegerão a sua pele. Toalhetes húmidos e desinfetante para as mãos são inestimáveis quando a água corrente é limitada.</p>

<h2>A Profundidade da Cultura Beduína e a Hospitalidade</h2>
<p>Nenhuma viagem ao deserto está completa sem a imersão na cultura local. Os beduínos possuem um conhecimento inato transmitido de geração em geração. Aprenderá como se orientam pelas estrelas, leem pegadas de animais e usam plantas do deserto na medicina tradicional.</p>
<p>À noite, em torno da fogueira, o famoso chá beduíno é lentamente preparado sobre brasas enquanto os guias partilham as suas histórias e lendas herdadas.</p>

<h2>Por Que os Passeios Privados São a Melhor Escolha</h2>
<h3>Privacidade Total e Tranquilidade</h3>
<p>Um passeio privado significa que todo o acampamento é dedicado exclusivamente a si e ao seu grupo.</p>
<h3>Flexibilidade de Ritmo</h3>
<p>Você controla o ritmo. Passe mais tempo na Montanha de Cristal, salte um local ou pare espontaneamente para apreciar as dunas.</p>
<h3>Atenção Pessoal e Qualidade do Serviço</h3>
<p>O seu guia partilha histórias adaptadas aos seus interesses. As refeições são preparadas com mais cuidado e quaisquer requisitos dietéticos são satisfeitos com precisão.</p>

<h2>Clima e Melhores Épocas para Visitar</h2>
<ul>
  <li><strong>Outono (outubro–novembro):</strong> Um dos melhores períodos. Temperaturas diurnas moderadas (25–30°C) e noites agradavelmente frescas (10–15°C).</li>
  <li><strong>Inverno (dezembro–fevereiro):</strong> Dias agradáveis (18–22°C) mas noites muito frias próximas de 0°C. Fornecemos sacos-cama adequados.</li>
  <li><strong>Primavera (março–maio):</strong> Similar ao outono, com possíveis ventos quentes Khamsin carregados de areia. Dias claros de primavera são mágicos.</li>
  <li><strong>Verão (junho–setembro):</strong> Temperaturas diurnas acima de 40°C. Atividades apenas de manhã cedo e ao pôr do sol. Noites de verão ideais para observação de estrelas.</li>
</ul>

<h2>Guia Completo de Bagagem: O Que Trazer</h2>
<h3>Roupa Adequada</h3>
<ul>
  <li><strong>Dia:</strong> Tecidos naturais respiráveis, camisas de manga comprida em cores claras, calças largas e leves.</li>
  <li><strong>Noite:</strong> Camada base térmica, polar, corta-vento. No inverno: gorro, luvas e meias de lã grossas.</li>
</ul>
<h3>Calçado e Proteção da Cabeça</h3>
<ul>
  <li>Ténis de caminhada confortáveis e fechados.</li>
  <li>Chapéu de aba larga ou kefiyeh beduíno tradicional.</li>
  <li>Óculos de sol polarizados de alta qualidade.</li>
</ul>
<h3>Equipamento Essencial</h3>
<ul>
  <li>Bateria externa de pelo menos 10.000 mAh.</li>
  <li>Protetor solar SPF 50+, bálsamo labial e creme hidratante.</li>
  <li>Toalhetes biodegradáveis e desinfetante para as mãos.</li>
  <li>Lanterna de cabeça para se mover livremente no acampamento à noite.</li>
</ul>
<h3>O Que a Bedouin Trails Fornece</h3>
<p>Fornecemos todo o equipamento pesado de campismo: tendas beduínas resistentes, colchões grossos, sacos-cama de alta qualidade, cobertores extra, todas as refeições e água mineral purificada.</p>

<h2>O Nosso Compromisso com o Turismo Sustentável</h2>
<ul>
  <li><strong>Política Leave No Trace:</strong> Tudo o que trazemos volta connosco.</li>
  <li><strong>Respeito pela fauna:</strong> Nunca alimentamos animais selvagens e ensinamos a observação a distância segura.</li>
  <li><strong>Condução responsável:</strong> Seguimos rotas designadas para proteger a vegetação rara do deserto.</li>
</ul>

<p>Na Bedouin Trails, comprometemo-nos a oferecer uma experiência safari excecional e segura. <a href="/journeys">Reserve o seu passeio privado hoje</a> e deixe-nos levá-lo numa viagem que mudará a sua visão da natureza.</p>`,

  zh: `<p>如果这是您第一次去沙漠旅行，面对行李箱时可能会感到困惑。沙漠气候极具欺骗性——在正午烈日下的灼人酷热和太阳落山后的刺骨寒冷之间剧烈摇摆。聪明、精心的行装准备可以让舒适的探险体验与一整夜的瑟瑟发抖之间产生天壤之别。作为常年穿越西部沙漠的本地贝都因向导，我们编写了这份终极探险装备指南，确保您带上所需的一切，同时省去不必要的物品。</p>

<h2>分层穿衣的艺术：保持舒适的秘诀</h2>
<p>沙漠穿衣的黄金法则是"分层"。白天，天然透气面料（如浅色棉布和亚麻）制成的衣物至关重要。但太阳一落山，气温就会急剧下降。从保暖的贴身热力层开始，加上摇粒绒保暖层，最后穿上防风外套——沙漠夜风是刺骨寒冷的主要原因。</p>

<h2>末端保护：舒适的鞋履和必备头部装备</h2>
<p>把笨重的登山靴留在家里。舒适的包头运动鞋配上良好的抓地力是最佳选择。我们推荐传统的贝都因头巾（凯菲耶）——它既能防晒，在沙尘暴时还能包裹口鼻。</p>
<p>如果您计划更长的徒步旅行，请查看<a href="/journeys">我们的多日徒步和露营行程</a>。</p>

<h2>生存工具和个人舒适用品</h2>
<p>大容量充电宝（20,000毫安时）至关重要。SPF 50+防晒霜、偏光太阳镜、润唇膏和厚重的保湿霜将保护您的皮肤。在缺少自来水的情况下，湿巾和免洗洗手液弥足珍贵。</p>

<h2>贝都因文化的深度与待客之道</h2>
<p>没有对当地文化的沉浸，沙漠之旅就不算完整。贝都因人拥有世代相传的天生知识。您将学习他们如何用星星导航、如何阅读沙地上的动物足迹，以及如何将沙漠植物用于传统医学。</p>
<p>傍晚，围坐在篝火旁，著名的贝都因茶在炭火上慢慢熬制，向导们分享着代代相传的故事与传说。这些真挚的人文交流时刻让客人们一次又一次地回来。</p>

<h2>为什么私人旅游是最佳选择</h2>
<h3>完全私密与宁静</h3>
<p>私人旅游意味着整个营地完全专属于您和您的团队。</p>
<h3>节奏灵活</h3>
<p>您掌控节奏。在水晶山多停留一会儿，跳过某个景点，或者随时停下来欣赏沙丘。</p>
<h3>贴心服务与品质</h3>
<p>您的向导会分享根据您兴趣定制的故事。餐食更加精心准备，所有特殊饮食要求都能精确满足。</p>

<h2>气候与最佳旅游时间</h2>
<ul>
  <li><strong>秋季（10月至11月）：</strong>最佳时期之一。白天气温适中（25–30°C），夜晚凉爽宜人（10–15°C）。</li>
  <li><strong>冬季（12月至2月）：</strong>白天舒适（18–22°C），但夜间极寒接近0°C。我们提供适合的睡袋。</li>
  <li><strong>春季（3月至5月）：</strong>类似秋季，但可能有携带沙尘的热风。晴朗的春日令人着迷。</li>
  <li><strong>夏季（6月至9月）：</strong>白天气温超过40°C。活动仅限于清晨和日落前。夏夜适合观星。</li>
</ul>

<h2>完整行装指南：带什么</h2>
<h3>合适的衣物</h3>
<ul>
  <li><strong>白天：</strong>天然透气面料，浅色长袖衬衫，宽松轻便长裤。</li>
  <li><strong>夜间：</strong>保暖内衣层、摇粒绒、防风外套。冬季：毛线帽、手套和厚羊毛袜。</li>
</ul>
<h3>鞋履和头部保护</h3>
<ul>
  <li>舒适的包头运动鞋或轻便登山鞋。</li>
  <li>宽沿帽或传统贝都因凯菲耶头巾。</li>
  <li>高品质偏光太阳镜。</li>
</ul>
<h3>必备装备</h3>
<ul>
  <li>至少10,000毫安时的充电宝。</li>
  <li>SPF 50+防晒霜、润唇膏和保湿霜。</li>
  <li>可生物降解湿巾和免洗洗手液。</li>
  <li>头灯，方便夜间在营地自由活动。</li>
</ul>
<h3>Bedouin Trails提供的物品</h3>
<p>我们提供所有重型露营装备：坚固的贝都因帐篷、厚实的睡垫、高品质睡袋、额外毛毯、全部餐食和纯净矿泉水。</p>

<h2>我们对可持续旅游的承诺</h2>
<ul>
  <li><strong>无痕旅游政策：</strong>我们带入沙漠的一切都会带回。</li>
  <li><strong>尊重野生动物：</strong>绝不喂食野生动物，教导客人从安全距离观察。</li>
  <li><strong>负责任驾驶：</strong>严格遵守指定路线，保护珍稀沙漠植被。</li>
</ul>

<p>在Bedouin Trails，我们致力于提供卓越、安全的探险体验。<a href="/journeys">立即预订您的私人旅程</a>，让我们带您踏上改变自然观的旅程，收获终生难忘的回忆。</p>`,
};

// ─── FAQS ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn:
      "Do I need to bring my own tent or sleeping bag?",
    questionAr:
      "هل أحتاج لإحضار خيمتي أو كيس النوم الخاص بي؟",
    questionI18n: {
      fr: "Dois-je apporter ma propre tente ou mon sac de couchage ?",
      de: "Muss ich mein eigenes Zelt oder meinen Schlafsack mitbringen?",
      es: "¿Necesito traer mi propia tienda o saco de dormir?",
      it: "Devo portare la mia tenda o il mio sacco a pelo?",
      nl: "Moet ik mijn eigen tent of slaapzak meenemen?",
      pt: "Preciso trazer a minha tenda ou saco-cama?",
      zh: "我需要自带帐篷或睡袋吗？",
    },
    answerEn:
      "Not at all. At Bedouin Trails, we take care of all heavy camping equipment. We provide sturdy tents, very thick and comfortable sleeping mattresses, high-quality cleaned sleeping bags, and extra blankets. Your luggage should only contain your clothes and personal items.",
    answerAr:
      "لا، إطلاقاً. في Bedouin Trails نحن نتكفل بكل معدات التخييم الثقيلة. نوفر خياماً متينة، مراتب نوم سميكة جداً ومريحة، أكياس نوم عالية الجودة ومغسولة بعناية، وبطانيات إضافية. مساحة حقيبتك يجب أن تقتصر على ملابسك وأدواتك الشخصية فقط.",
    answerI18n: {
      fr: "Pas du tout. Chez Bedouin Trails, nous fournissons tout l'équipement de camping : tentes solides, matelas très épais, sacs de couchage de haute qualité et couvertures supplémentaires. Votre valise ne doit contenir que vos vêtements et effets personnels.",
      de: "Überhaupt nicht. Bei Bedouin Trails stellen wir die gesamte Campingausrüstung bereit: robuste Zelte, sehr dicke Matratzen, hochwertige Schlafsäcke und zusätzliche Decken. Ihr Gepäck sollte nur Ihre Kleidung und persönlichen Gegenstände enthalten.",
      es: "En absoluto. En Bedouin Trails nos encargamos de todo el equipo de camping: tiendas resistentes, colchones muy gruesos, sacos de dormir de alta calidad y mantas extra. Tu equipaje solo debe contener tu ropa y objetos personales.",
      it: "Assolutamente no. Da Bedouin Trails forniamo tutta l'attrezzatura da campeggio: tende robuste, materassi molto spessi, sacchi a pelo di alta qualità e coperte extra. Il vostro bagaglio deve contenere solo vestiti e oggetti personali.",
      nl: "Helemaal niet. Bij Bedouin Trails zorgen we voor alle kampeeruitrusting: stevige tenten, zeer dikke matrassen, hoogwaardige slaapzakken en extra dekens. Je bagage hoeft alleen je kleding en persoonlijke spullen te bevatten.",
      pt: "De forma alguma. Na Bedouin Trails cuidamos de todo o equipamento de campismo: tendas resistentes, colchões muito grossos, sacos-cama de alta qualidade e cobertores extra. A sua bagagem deve conter apenas as suas roupas e objetos pessoais.",
      zh: "完全不需要。Bedouin Trails提供所有重型露营装备：坚固帐篷、超厚睡垫、高品质睡袋和额外毛毯。您的行李只需带上衣物和个人用品即可。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "Are wheeled trolley bags suitable for a desert trip?",
    questionAr: "هل الحقائب ذات العجلات (Trolley bags) مناسبة؟",
    questionI18n: {
      fr: "Les valises à roulettes sont-elles adaptées au désert ?",
      de: "Sind Rollkoffer für eine Wüstenreise geeignet?",
      es: "¿Son adecuadas las maletas con ruedas para un viaje al desierto?",
      it: "Le valigie con rotelle sono adatte per un viaggio nel deserto?",
      nl: "Zijn koffers met wieltjes geschikt voor een woestijnreis?",
      pt: "As malas com rodas são adequadas para uma viagem ao deserto?",
      zh: "拉杆箱适合沙漠旅行吗？",
    },
    answerEn:
      "Backpacks or flexible duffel bags are far better. Hard-shell wheeled suitcases are difficult to drag through sand and take up rigid space in the 4x4's boot. We recommend bringing a small daypack for things you need inside the vehicle during drives.",
    answerAr:
      "حقائب الظهر (Backpacks) أو حقائب السفر القماشية المرنة (Duffel bags) هي الأفضل بكثير. الحقائب الصلبة ذات العجلات يصعب جرها في الرمال وتأخذ مساحة صلبة في صندوق سيارات الدفع الرباعي. يفضل إحضار حقيبة ظهر صغيرة (Daypack) للأشياء التي تحتاجها داخل السيارة أثناء القيادة.",
    answerI18n: {
      fr: "Les sacs à dos ou les sacs de sport souples sont bien meilleurs. Les valises rigides à roulettes sont difficiles à traîner dans le sable et prennent un espace rigide dans le coffre du 4x4. Nous recommandons un petit sac à dos de jour pour les objets nécessaires en voiture.",
      de: "Rucksäcke oder flexible Reisetaschen (Duffel Bags) sind weitaus besser. Hartschalen-Rollkoffer lassen sich im Sand schwer ziehen und nehmen starren Platz im Kofferraum des 4x4 ein. Wir empfehlen einen kleinen Tagesrucksack für Dinge, die Sie im Fahrzeug brauchen.",
      es: "Las mochilas o bolsas de viaje flexibles (duffel bags) son mucho mejores. Las maletas rígidas con ruedas son difíciles de arrastrar por la arena y ocupan un espacio rígido en el maletero del 4x4. Recomendamos llevar una pequeña mochila de día para las cosas que necesites en el vehículo.",
      it: "Zaini o borsoni flessibili (duffel bag) sono di gran lunga migliori. Le valigie rigide con ruote sono difficili da trascinare nella sabbia e occupano spazio rigido nel bagagliaio del 4x4. Consigliamo un piccolo zaino da giorno per le cose necessarie in auto.",
      nl: "Rugzakken of flexibele reistassen (duffel bags) zijn veel beter. Harde koffers met wieltjes zijn lastig door het zand te slepen en nemen starre ruimte in de kofferbak van de 4x4 in. We raden een kleine dagtas aan voor spullen die je in de auto nodig hebt.",
      pt: "Mochilas ou sacos de viagem flexíveis (duffel bags) são muito melhores. Malas rígidas com rodas são difíceis de arrastar na areia e ocupam espaço rígido na mala do 4x4. Recomendamos levar uma pequena mochila de dia para as coisas que precisa dentro do veículo.",
      zh: "背包或软质旅行袋（行李袋）要好得多。硬壳拉杆箱在沙地上难以拖行，且在四驱车后备箱中占据固定空间。建议带一个小日用背包，放置车内所需物品。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "Do I need to bring drinking water or snacks?",
    questionAr: "هل يجب إحضار مياه شرب أو وجبات خفيفة؟",
    questionI18n: {
      fr: "Dois-je apporter de l'eau potable ou des collations ?",
      de: "Muss ich Trinkwasser oder Snacks mitbringen?",
      es: "¿Necesito traer agua potable o aperitivos?",
      it: "Devo portare acqua potabile o snack?",
      nl: "Moet ik drinkwater of snacks meenemen?",
      pt: "Preciso trazer água potável ou lanches?",
      zh: "我需要自带饮用水或零食吗？",
    },
    answerEn:
      "We provide generous amounts of bottled mineral water throughout the trip, plus all main meals, tea, coffee, and fruit. If you have a favourite snack (a particular chocolate or type of nuts, for example), feel free to bring it — but you will never go hungry with us.",
    answerAr:
      "نحن نوفر كميات وفيرة جداً من المياه المعدنية المعبأة طوال الرحلة، بالإضافة إلى كافة الوجبات الرئيسية والشاي والقهوة والفواكه. إذا كان لديك وجبة خفيفة مفضلة (مثل نوع معين من الشوكولاتة أو المكسرات)، يمكنك إحضارها، لكنك لن تجوع أبداً معنا.",
    answerI18n: {
      fr: "Nous fournissons de l'eau minérale en bouteille en abondance tout au long du voyage, ainsi que tous les repas principaux, thé, café et fruits. Si vous avez un en-cas favori, n'hésitez pas à l'apporter — mais vous n'aurez jamais faim avec nous.",
      de: "Wir stellen reichlich Mineralwasser in Flaschen während der gesamten Reise bereit, plus alle Hauptmahlzeiten, Tee, Kaffee und Obst. Wenn Sie einen Lieblingssnack haben, bringen Sie ihn gerne mit — aber hungrig werden Sie bei uns nie sein.",
      es: "Proporcionamos abundante agua mineral embotellada durante todo el viaje, además de todas las comidas principales, té, café y fruta. Si tienes un aperitivo favorito, puedes traerlo, pero nunca pasarás hambre con nosotros.",
      it: "Forniamo abbondante acqua minerale in bottiglia durante tutto il viaggio, oltre a tutti i pasti principali, tè, caffè e frutta. Se avete uno snack preferito, portatelo pure — ma non avrete mai fame con noi.",
      nl: "We bieden ruim voldoende fleswater gedurende de hele reis, plus alle hoofdmaaltijden, thee, koffie en fruit. Als je een favoriete snack hebt, neem die gerust mee — maar honger zul je bij ons nooit lijden.",
      pt: "Fornecemos abundante água mineral engarrafada durante toda a viagem, além de todas as refeições principais, chá, café e frutas. Se tem um lanche favorito, traga-o — mas nunca passará fome connosco.",
      zh: "我们在整个行程中提供充足的瓶装矿泉水，以及所有主要餐食、茶、咖啡和水果。如果您有喜欢的零食（如特定的巧克力或坚果），欢迎自带——但跟我们在一起，您绝不会挨饿。",
    },
    sortOrder: 2,
  },
  {
    questionEn:
      "What colours should I avoid wearing in the desert?",
    questionAr: "ما هي الألوان التي يجب أن أتجنب ارتداءها؟",
    questionI18n: {
      fr: "Quelles couleurs dois-je éviter de porter dans le désert ?",
      de: "Welche Farben sollte ich in der Wüste vermeiden?",
      es: "¿Qué colores debo evitar usar en el desierto?",
      it: "Quali colori dovrei evitare nel deserto?",
      nl: "Welke kleuren moet ik vermijden in de woestijn?",
      pt: "Que cores devo evitar usar no deserto?",
      zh: "沙漠中应避免穿什么颜色的衣服？",
    },
    answerEn:
      "Avoid black or very dark colours during the day — they absorb the sun's heat and make you sweat heavily. Light colours like beige, white, and pale blue are the best choices. At night, you can wear whatever you prefer.",
    answerAr:
      "تجنب اللون الأسود أو الألوان الداكنة جداً خلال النهار لأنها تمتص حرارة الشمس وتجعلك تتعرق بشدة. الألوان الفاتحة كالبيج، والأبيض، والأزرق الفاتح هي الأفضل. وفي الليل، يمكنك ارتداء ما تشاء.",
    answerI18n: {
      fr: "Évitez le noir ou les couleurs très foncées pendant la journée — elles absorbent la chaleur du soleil et vous font transpirer abondamment. Les couleurs claires comme le beige, le blanc et le bleu pâle sont les meilleurs choix. La nuit, portez ce que vous voulez.",
      de: "Vermeiden Sie Schwarz oder sehr dunkle Farben tagsüber — sie absorbieren die Sonnenhitze und lassen Sie stark schwitzen. Helle Farben wie Beige, Weiß und Hellblau sind die beste Wahl. Nachts können Sie tragen, was Sie möchten.",
      es: "Evita el negro o los colores muy oscuros durante el día — absorben el calor del sol y te hacen sudar mucho. Los colores claros como beige, blanco y azul claro son la mejor opción. Por la noche, puedes usar lo que prefieras.",
      it: "Evitate il nero o i colori molto scuri durante il giorno — assorbono il calore del sole e vi fanno sudare molto. I colori chiari come beige, bianco e azzurro chiaro sono le scelte migliori. Di notte, indossate ciò che preferite.",
      nl: "Vermijd zwart of zeer donkere kleuren overdag — ze absorberen de zonwarmte en laten je flink zweten. Lichte kleuren als beige, wit en lichtblauw zijn de beste keuze. 's Nachts kun je dragen wat je wilt.",
      pt: "Evite preto ou cores muito escuras durante o dia — absorvem o calor do sol e fazem-no suar muito. Cores claras como bege, branco e azul claro são as melhores escolhas. À noite, pode usar o que preferir.",
      zh: "白天避免穿黑色或深色衣服——它们吸收太阳热量，让人大量出汗。米色、白色和浅蓝色是最佳选择。夜间可以随意穿着。",
    },
    sortOrder: 3,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "desert-safari-gear-packing-guide",
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
  image: "/img/desert-safari-gear-packing.jpg",
  author: "Bedouin Trails Team",
  category: "Travel Tips & Gear",
  tags: JSON.stringify([
    "desert safari packing guide",
    "what to pack egypt desert",
    "safari gear checklist",
    "desert clothing layers",
    "western desert camping gear",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "what to pack for egypt desert",
    "desert safari gear guide",
    "desert clothing layering",
  ]),
  secondaryKeywords: JSON.stringify([
    "camping gear western desert",
    "desert preparation checklist",
    "egypt safari essentials",
    "desert footwear guide",
  ]),
  readingTime: 12,
  isPublished: true,
  publishedAt: new Date("2026-09-23"),
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
