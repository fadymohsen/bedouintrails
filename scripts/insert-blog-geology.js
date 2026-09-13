/**
 * Insert Blog 3: Geology of Egypt's Black and White Desert
 * Run with: DATABASE_URL="..." node scripts/insert-blog-geology.js
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ─── CONTENT DEFINITIONS ──────────────────────────────────────────────────────

const titleAr =
  "ما وراء الرمال: العجائب الجيولوجية للصحراء السوداء والبيضاء في مصر";
const titleEn =
  "Beyond the Sands: The Geological Wonders of Egypt's Black and White Desert (2026)";

const metaTitleAr =
  "ما وراء الرمال: العجائب الجيولوجية للصحراء السوداء والبيضاء في مصر | Bedouin Trails (2026)";
const metaTitleEn =
  "Beyond the Sands: Geology of Egypt's Black & White Desert | Bedouin Trails (2026)";

const metaDescAr =
  "اكتشف أسرار جيولوجيا الصحراء البيضاء والسوداء في مصر: من العصر الطباشيري إلى جبل الكريستال. دليل شامل يتضمن أفضل أوقات الزيارة وقائمة التحزيم مع Bedouin Trails.";
const metaDescEn =
  "Discover the geological secrets of Egypt's White and Black Desert: from the Cretaceous Period to Crystal Mountain. A comprehensive guide including the best times to visit and packing list with Bedouin Trails.";

const excerptAr =
  "الصحراء البيضاء والسوداء في مصر ليستا مجرد مناظر خلابة — بل هما متحفان مفتوحان يسردان تاريخ الأرض عبر ملايين السنين. اكتشف أسرار الجيولوجيا مع Bedouin Trails.";
const excerptEn =
  "Egypt's White and Black Deserts are not just breathtaking landscapes — they are open-air museums narrating Earth's history across millions of years. Discover the secrets of geology with Bedouin Trails.";

// ─── HTML CONTENT ─────────────────────────────────────────────────────────────

const contentAr = `<p>يرى معظم الزوار في الصحراء الغربية بمصر مجرد أشكال صخرية جميلة ومناظر خلابة تصلح للتصوير، لكن الحقيقة أعمق من ذلك بكثير. الصحراء البيضاء والسوداء هما في الواقع متاحف مفتوحة ومكشوفة تسرد تاريخ الأرض الدرامي عبر ملايين السنين. من المحيطات العميقة في عصور ما قبل التاريخ التي تركت وراءها رواسب طباشيرية ضخمة، إلى الانفجارات البركانية العنيفة التي غطت الأرض بالحمم السوداء، تحتفظ الصحراء الغربية بأسرار جيولوجية مذهلة. في رحلات Bedouin Trails، نحن لا نأخذك فقط لمشاهدة المعالم؛ بل نأخذك في رحلة عبر الزمن لفهم كيف تشكلت هذه العجائب الطبيعية السريالية.</p>

<h2>العصر الطباشيري: عندما كانت الصحراء الغربية محيطاً عميقاً</h2>
<p>قد يبدو من المستحيل تصديق ذلك وأنت تقف تحت شمس الصحراء الحارقة، لكن قبل ملايين السنين، وتحديداً في العصر الطباشيري (Cretaceous Period)، كانت هذه المناظر الطبيعية القاحلة مغمورة بالكامل تحت مياه "بحر تيثيس" (Tethys Sea) العظيم. الصخور البيضاء المبهرة التي تميز الصحراء البيضاء اليوم هي في الواقع البقايا المتكلسة والمضغوطة للحياة البحرية المجهرية والأصداف التي تراكمت في قاع هذا المحيط القديم. على مدى آلاف السنين، ومع التغيرات المناخية وتراجع مياه البحر، تركت هذه الكائنات وراءها طبقات طباشيرية وجيرية ضخمة. ومنذ ذلك الحين، تولت الرياح المحملة بالرمال — كأداة صنفرة طبيعية — نحت هذه الصخور الرخوة لتشكل الأشكال الأيقونية التي نراها اليوم، مثل صخرة "الدجاجة والفطر" وصخرة "الجمل".</p>

<h2>الأصول البركانية العنيفة للصحراء السوداء</h2>
<p>في تناقض جيولوجي وبصري صارخ مع بياض الصحراء البيضاء، تقع الصحراء السوداء. تتميز هذه المنطقة بتلال مخروطية الشكل تشبه البراكين الصغيرة، ومغطاة بطبقة كثيفة من صخور الدوليريت (Dolerite) والبازلت (Basalt) السوداء. هذه الصخور الداكنة هي بقايا النشاط البركاني العنيف الذي ضرب المنطقة في العصر الجوراسي (Jurassic Period). الصهارة التي اندفعت من باطن الأرض بردت وتكسرت بمرور الزمن، وتناثرت لتغطي قمم وسفوح التلال الرملية، مما أعطاها هذا اللون الأسود المميز. يوفر هذا المشهد الداكن، الكئيب والمهيب في نفس الوقت، تبايناً بصرياً مذهلاً، ويجعلك تشعر وكأنك تمشي على كوكب آخر، على بعد ساعة واحدة أو أقل فقط بالسيارة من التكوينات الطباشيرية البيضاء.</p>

<h2>جبل الكريستال: الشذوذ الجيولوجي الساحر</h2>
<p>يقع "جبل الكريستال" الساحر في نقطة المنتصف تقريباً بين الصحراء السوداء والبيضاء. على الرغم من تسميته، إلا أنه ليس جبلاً بالمعنى التقليدي، بل هو سلسلة صغيرة من التلال المكشوفة المصنوعة بالكامل تقريباً من بلورات الكوارتز (Quartz) والباريت (Barite) اللامعة. يعتقد علماء الجيولوجيا أن هذا التكوين كان في الأصل كهفاً كبيراً تحت الأرض، مليئاً بالصواعد والهوابط الكريستالية التي تشكلت بواسطة المياه الجوفية الساخنة (Hydrothermal activity). وبفعل التحولات التكتونية وقوى التآكل الشديدة بمرور الزمن، تآكل سقف الكهف ودُفع إلى السطح ليصبح مكشوفاً بالكامل، ليلمع اليوم تحت أشعة شمس الصحراء كجوهرة نادرة في قلب الرمال.</p>

<h2>عمق الثقافة البدوية وكرم الضيافة</h2>
<p>لا تكتمل رحلة الصحراء دون الانغماس في الثقافة المحلية. البدو هم السكان الأصليون لهذه المناطق الممتدة، وهم يمتلكون معرفة فطرية توارثوها عبر الأجيال عن كل صخرة وكل نجمة وكل نبتة في الصحراء. رحلتك مع مرشدينا ليست مجرد استعراض للمناظر الطبيعية، بل هي فرصة للتعلم من خبراء حقيقيين في فنون البقاء والتعايش مع أقسى ظروف الطبيعة. ستتعلم كيف يهتدون بالنجوم، وكيف يقرؤون آثار أقدام الحيوانات على الرمال الناعمة، وكيف يستخدمون النباتات الصحراوية في الطب التقليدي.</p>
<p>في المساء، حول نار المخيم، تتجلى أسمى معاني الضيافة البدوية. سيتم تقديم الشاي البدوي الشهير المطهو على الجمر ببطء، وسيشاركك المرشدون حكاياتهم وأساطيرهم المتوارثة. هذه اللحظات من التواصل الإنساني الأصيل هي ما يجعل ضيوفنا يعودون مراراً وتكراراً؛ حيث لا يشعرون بأنهم مجرد سياح، بل كضيوف مكرمين في منزل واسع لا سقف له سوى السماء.</p>

<h2>لماذا تعتبر الجولات الخاصة الخيار الأمثل؟</h2>
<p>عند التخطيط لرحلة سفاري في الصحراء الغربية، يواجه المسافرون خياراً رئيسياً: الانضمام إلى جولة جماعية مشتركة أو حجز جولة خاصة. في Bedouin Trails، تخصصنا حصرياً في الجولات الخاصة، وذلك لعدة أسباب جوهرية تؤثر بشكل مباشر على جودة تجربتك:</p>
<h3>أولاً: الخصوصية التامة والهدوء</h3>
<p>الصحراء هي مكان للصمت والتأمل. في الجولات الجماعية، يتم دمجك في سيارة ومخيم مع مسافرين آخرين لا تعرفهم. قد تختلف جداول نومهم، واهتماماتهم، ومستوى الضوضاء الذي يفضلونه عنك. الجولة الخاصة تعني أن المخيم بأكمله مخصص لك ولمجموعتك فقط. يمكنك اختيار الاستماع إلى الصمت المطلق للصحراء، أو الاستمتاع بمحادثات هادئة مع عائلتك وأصدقائك دون أي إزعاج خارجي.</p>
<h3>ثانياً: مرونة الإيقاع والجدول الزمني</h3>
<p>الجولات الجماعية تعمل وفق جدول زمني صارم؛ 15 دقيقة هنا، 20 دقيقة هناك. إذا وجدت منظراً يخطف الأنفاس وأردت البقاء لتصويره لمدة ساعة، فلن تتمكن من ذلك لأن المجموعة يجب أن تتحرك. في الجولة الخاصة، أنت من يتحكم في الإيقاع. المرشد البدوي الخاص بك موجود لتلبية رغباتك؛ يمكنك قضاء وقت أطول في جبل الكريستال، أو تخطي موقع لا يثير اهتمامك، أو طلب التوقف في منتصف الطريق لمجرد الاستمتاع بمشهد الكثبان الرملية.</p>
<h3>ثالثاً: الاهتمام الشخصي وجودة الخدمة</h3>
<p>عندما يتعامل الفريق مع سيارة واحدة ومجموعة واحدة، فإن مستوى الخدمة يرتفع بشكل هائل. سيقوم مرشدك بمشاركة قصص مخصصة تتناسب مع اهتماماتك (سواء كانت جيولوجية، أو ثقافية، أو تصويرية). وجبات الطعام تُعد بعناية أكبر، ويتم تلبية أي متطلبات غذائية خاصة بدقة تامة. هذه التجربة المخصصة تحول الرحلة من مجرد جولة سياحية إلى رحلة استكشافية حصرية ومريحة للغاية.</p>

<h2>الطقس وأفضل أوقات الزيارة</h2>
<p>تتميز الصحراء الغربية في مصر بمناخ قاري شديد الجفاف، مما يعني أن هناك تبايناً كبيراً في درجات الحرارة بين النهار والليل، وكذلك بين فصول السنة المختلفة. فهم هذا المناخ هو مفتاح التخطيط لرحلة سفاري ناجحة ومريحة.</p>
<ul>
<li><strong>فصل الخريف (أكتوبر – نوفمبر):</strong> يُعتبر هذا الوقت من أفضل الأوقات لزيارة الصحراء البيضاء والسوداء. درجات الحرارة في النهار تكون معتدلة وتتراوح بين 25 إلى 30 درجة مئوية، مما يجعل استكشاف التكوينات الصخرية والمشي لمسافات طويلة أمراً ممتعاً للغاية. في الليل، تنخفض درجات الحرارة لتصبح مائلة للبرودة (حوالي 10 إلى 15 درجة مئوية)، مما يوفر جواً مثالياً للجلوس حول نار المخيم والاستمتاع بالشاي البدوي الدافئ.</li>
<li><strong>فصل الشتاء (ديسمبر – فبراير):</strong> الشتاء يجلب نهاراً مشمساً ولطيفاً جداً (حوالي 18 إلى 22 درجة مئوية)، لكن الليالي تكون شديدة البرودة، حيث يمكن أن تقترب درجات الحرارة من الصفر المئوي. هذا الفصل مثالي لمن لا يتحملون الحرارة، ولكن يتطلب استعداداً جيداً بملابس شتوية ثقيلة وأكياس نوم مخصصة للطقس البارد (وهو ما نوفره في Bedouin Trails).</li>
<li><strong>فصل الربيع (مارس – مايو):</strong> يشبه الخريف في اعتداله النهاري، لكنه قد يشهد هبوب "رياح الخماسين"، وهي رياح دافئة ومحملة بالرمال قد تؤثر على الرؤية وتجعل التخييم المفتوح تحدياً في بعض الأيام. ومع ذلك، الأيام الصافية في الربيع تكون ساحرة وتتفتح فيها بعض النباتات الصحراوية النادرة.</li>
<li><strong>فصل الصيف (يونيو – سبتمبر):</strong> ترتفع درجات الحرارة بشكل كبير لتتجاوز 40 درجة مئوية في الظل خلال النهار. ليالي الصيف تكون معتدلة وممتعة ومثالية لمراقبة النجوم دون الحاجة لملابس ثقيلة.</li>
</ul>

<h2>الدليل الشامل للتحزيم: ماذا تحضر معك في رحلة السفاري؟</h2>
<p>الاستعداد لرحلة الصحراء يختلف تماماً عن الاستعداد لعطلة شاطئية أو رحلة مدينة. الصحراء بيئة متطرفة تتطلب معدات وملابس ذكية تعتمد على نظام "الطبقات".</p>
<h3>1. الملابس المناسبة</h3>
<p>القاعدة الذهبية هي الأقمشة الطبيعية القابلة للتنفس (القطن والكتان). اختر قمصاناً بأكمام طويلة وألوان فاتحة لتعكس أشعة الشمس وتحمي ذراعيك من الحروق. السراويل الواسعة والخفيفة أفضل بكثير من الجينز. في المساء، ستحتاج إلى طبقة أساسية حرارية، وسترة من الصوف، وسترة خارجية مقاومة للرياح.</p>
<h3>2. الأحذية وحماية الرأس</h3>
<p>حذاء مشي مريح أو حذاء تنزه خفيف مغلق من الأمام لحماية قدميك من الرمال الساخنة والصخور الحادة. قبعة واسعة الحواف أو الشال البدوي التقليدي (الكوفية) من الواحات البحرية، ونظارات شمسية مستقطبة عالية الجودة لحماية عينيك من وهج الرمال البيضاء.</p>
<h3>3. المعدات الأساسية والراحة الشخصية</h3>
<p>بنك طاقة بسعة لا تقل عن 10,000 مللي أمبير، وواقي شمس بدرجة حماية عالية (SPF 50+)، ومرطب للبشرة والشفاه، ومناديل مبللة قابلة للتحلل البيولوجي، ومصباح رأس للتحرك بحرية في المخيم ليلاً. في Bedouin Trails، نوفر كافة معدات التخييم الثقيلة: خيام، مراتب، أكياس نوم عالية الجودة، وكل الأطعمة والمياه المعدنية طوال الرحلة.</p>

<h2>التزامنا بالسياحة المستدامة ومبادئ "لا تترك أثراً"</h2>
<p>الصحراء الغربية، وخاصة محمية الصحراء البيضاء الوطنية، هي بيئة هشة للغاية. التكوينات الطباشيرية التي استغرقت ملايين السنين لتتشكل يمكن تدميرها في ثوانٍ بسبب السلوك غير المسؤول. في Bedouin Trails، نحن ندرك أننا حراس لهذه الأرض، ولذلك نطبق مبادئ صارمة للسياحة البيئية المستدامة:</p>
<ul>
<li><strong>سياسة عدم ترك الأثر:</strong> نضمن أن كل ما نجلبه إلى الصحراء يعود معنا. يتم جمع كافة النفايات في أكياس مخصصة ونقلها إلى أماكن التخلص الآمن منها.</li>
<li><strong>احترام الحياة البرية:</strong> نمنع إطعام الحيوانات البرية أو ترك بقايا الطعام لها، لأن ذلك يغير من سلوكها الطبيعي ويهدد بقاءها.</li>
<li><strong>القيادة المسؤولة:</strong> التزام مسارات القيادة المحددة لحماية الغطاء النباتي الصحراوي النادر ومنع تآكل التربة.</li>
</ul>`;

const contentEn = `<p>Most visitors to Egypt's Western Desert see only beautiful rock formations and stunning landscapes perfect for photography — but the reality runs far deeper. The White and Black Deserts are in fact open-air museums narrating Earth's dramatic history across millions of years. From the ancient prehistoric oceans that left behind massive chalk deposits, to the violent volcanic eruptions that blanketed the earth in black lava, the Western Desert holds breathtaking geological secrets. At Bedouin Trails, we do not simply take you to see the sights — we take you on a journey through time to understand how these surreal natural wonders were formed.</p>

<h2>The Cretaceous Period: When the Western Desert Was a Deep Ocean</h2>
<p>It may seem impossible to believe as you stand beneath the scorching desert sun, but millions of years ago — specifically during the Cretaceous Period — these barren landscapes were entirely submerged beneath the waters of the great Tethys Sea. The brilliant white rock formations that define the White Desert today are in fact the calcified, compressed remains of microscopic marine life and shells that accumulated on the floor of this ancient ocean. Over thousands of years, as the climate shifted and the sea receded, these organisms left behind massive layers of chalk and limestone. Since then, sand-laden winds — nature's own sandpaper — have carved these soft rocks into the iconic shapes we see today, such as the famous "Chicken and Mushroom" and "Camel" formations.</p>

<h2>The Violent Volcanic Origins of the Black Desert</h2>
<p>In stark geological and visual contrast to the white of the White Desert lies the Black Desert. This region is characterized by cone-shaped hills resembling small volcanoes, blanketed in a thick layer of dark dolerite and basalt rock. These dark stones are the remnants of violent volcanic activity that struck the area during the Jurassic Period. The magma that erupted from deep within the earth cooled and fractured over time, scattering to cover the peaks and slopes of sandy hills and giving them their distinctive black color. This dark, simultaneously somber and majestic landscape provides a stunning visual contrast, making you feel as though you are walking on another planet — just one hour or less by car from the brilliant white chalk formations.</p>

<h2>Crystal Mountain: The Enchanting Geological Anomaly</h2>
<p>The enchanting "Crystal Mountain" sits roughly halfway between the Black and White Deserts. Despite its name, it is not a mountain in the traditional sense — rather, it is a small ridge of exposed hills composed almost entirely of glittering quartz and barite crystals. Geologists believe this formation was originally a large underground cave, filled with stalactites and stalagmites formed by hot hydrothermal groundwater. Through tectonic shifts and powerful erosive forces over time, the cave's ceiling eroded and was pushed to the surface, becoming fully exposed — now glittering under the desert sun like a rare jewel at the heart of the sands.</p>

<h2>The Depth of Bedouin Culture and the Art of Hospitality</h2>
<p>No desert journey is complete without immersing yourself in the local culture. The Bedouin are the indigenous people of these vast territories, possessing an innate, generational knowledge of every rock, every star, and every plant in the desert. Your journey with our guides is not merely a showcase of natural scenery — it is an opportunity to learn from true experts in the arts of desert survival and coexistence with nature's harshest conditions. You will learn how they navigate by the stars, how they read animal tracks in the fine sand, and how they use desert plants in traditional medicine.</p>
<p>In the evening, gathered around the campfire, the finest expressions of Bedouin hospitality come to life. The famous Bedouin tea, slowly brewed over glowing embers, will be served as your guides share their inherited stories and legends. These moments of authentic human connection are what bring our guests back again and again — they feel not like tourists, but like honored guests in a vast home whose only ceiling is the sky itself.</p>

<h2>Why Private Tours Are the Best Option?</h2>
<p>When planning a Western Desert safari, travelers face a key choice: joining a shared group tour or booking a private tour. At Bedouin Trails, we specialize exclusively in private tours, for several fundamental reasons that directly impact the quality of your experience:</p>
<h3>First: Complete Privacy and Tranquility</h3>
<p>The desert is a place of silence and reflection. On group tours, you are placed in a vehicle and campsite with strangers whose sleep schedules, interests, and preferred noise levels may differ significantly from yours. A private tour means the entire camp is dedicated solely to you and your group. You can choose to listen to the desert's absolute silence, or enjoy quiet conversations with your family and friends without any external disturbance.</p>
<h3>Second: Flexibility of Pace and Schedule</h3>
<p>Group tours operate on a rigid schedule — 15 minutes here, 20 minutes there. If you discover a breathtaking view and want to stay for an hour of photography, you cannot, because the group must move on. On a private tour, you control the pace. Your personal Bedouin guide is there to fulfill your wishes — you can spend extra time at Crystal Mountain, skip a site that does not interest you, or request to stop midway simply to enjoy the view of the sand dunes.</p>
<h3>Third: Personal Attention and Quality of Service</h3>
<p>When the team focuses on a single vehicle and a single group, the level of service rises dramatically. Your guide will share customized stories tailored to your interests — whether geological, cultural, or photographic. Meals are prepared with greater care, and any special dietary requirements are accommodated with precision. This bespoke experience transforms the trip from a simple sightseeing tour into an exclusive and deeply comfortable exploration.</p>

<h2>Weather and the Best Times to Visit the Western Desert</h2>
<p>Egypt's Western Desert has an extremely arid continental climate, meaning there are significant temperature differences between day and night, as well as between different seasons of the year. Understanding this climate is the key to planning a successful and comfortable safari.</p>
<ul>
<li><strong>Autumn (October – November):</strong> This is considered one of the best times to visit the White and Black Deserts. Daytime temperatures are moderate, ranging from 25 to 30°C, making the exploration of rock formations and long walks thoroughly enjoyable. At night, temperatures drop to a refreshing cool (around 10 to 15°C), creating a perfect atmosphere for sitting around the campfire with warm Bedouin tea.</li>
<li><strong>Winter (December – February):</strong> Winter brings very pleasant, sunny days (around 18 to 22°C), but nights can be bitterly cold, with temperatures potentially approaching zero, especially deep in the open White Desert. This season is ideal for those who cannot tolerate heat, but requires thorough preparation with heavy winter clothing and cold-weather sleeping bags (which we provide at Bedouin Trails).</li>
<li><strong>Spring (March – May):</strong> Similar to autumn in its daytime mildness, but may see the "Khamsin" winds — warm, sand-laden winds that can reduce visibility and make open camping challenging on some days. Clear spring days, however, are magical and some rare desert plants bloom during this season.</li>
<li><strong>Summer (June – September):</strong> Daytime temperatures rise dramatically, exceeding 40°C in the shade. Summer nights are moderate and perfect for stargazing without heavy clothing.</li>
</ul>

<h2>The Complete Packing Guide: What to Bring on Your Safari?</h2>
<p>Preparing for a desert trip is entirely different from preparing for a beach holiday or a city break. The desert is an extreme environment requiring smart equipment and clothing based on a layering system.</p>
<h3>1. Appropriate Clothing</h3>
<p>The golden rule is natural, breathable fabrics (cotton and linen). Choose long-sleeved shirts in light colors to reflect sunlight and protect your arms from burning. Loose, lightweight trousers are far better than jeans. In the evening, you will need a thermal base layer, a fleece jacket, and a windbreaker outer layer.</p>
<h3>2. Footwear and Head Protection</h3>
<p>Comfortable walking shoes or lightweight, closed-toe hiking boots to protect your feet from hot sand and sharp rocks in the Black Desert and at Crystal Mountain. A wide-brimmed hat or a traditional Bedouin keffiyeh (available in the Bahariya Oasis) for sun and sand protection, plus high-quality polarized sunglasses to protect your eyes from the intense glare of the white sands.</p>
<h3>3. Essential Equipment and Personal Comfort</h3>
<p>A power bank with at least 10,000 mAh capacity (there are no electrical charging points in the depths of the desert), SPF 50+ sunscreen, lip balm and moisturizer, biodegradable wet wipes, and a headlamp for moving freely around the camp at night. At Bedouin Trails, we provide all heavy camping equipment: tents, thick mattresses, high-quality sleeping bags, extra blankets, all meals, cooking equipment, and purified mineral water throughout the trip.</p>

<h2>Our Commitment to Sustainable Tourism and "Leave No Trace" Principles</h2>
<p>The Western Desert — especially White Desert National Park — is an extremely fragile environment. Chalk formations that took millions of years to form can be destroyed in seconds by irresponsible behavior. At Bedouin Trails, we recognize that we are stewards of this land, and therefore we apply strict principles of sustainable eco-tourism:</p>
<ul>
<li><strong>Leave No Trace Policy:</strong> We ensure that everything we bring into the desert returns with us. All waste — organic and non-organic — is collected in dedicated bags and transported to proper disposal sites.</li>
<li><strong>Respect for Wildlife:</strong> We strictly prohibit feeding wild animals or leaving food scraps for them, as this alters their natural behavior and threatens their survival. We teach our guests how to observe these beautiful creatures from a safe distance without disturbance.</li>
<li><strong>Responsible Driving:</strong> Adhering to designated driving tracks is vital for protecting rare desert vegetation and preventing soil erosion. Our expert Bedouin drivers know the safe routes that avoid damaging plant root systems or fragile rock formations. By choosing us, you contribute to protecting this natural heritage for future generations.</li>
</ul>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Au-delà des Sables : Les Merveilles Géologiques des Déserts Noir et Blanc d'Égypte (2026)",
  de: "Jenseits der Sandmeere: Die geologischen Wunder der Schwarzen und Weißen Wüste Ägyptens (2026)",
  es: "Más Allá de las Arenas: Las Maravillas Geológicas del Desierto Negro y Blanco de Egipto (2026)",
  it: "Oltre le Sabbie: Le Meraviglie Geologiche del Deserto Nero e Bianco d'Egitto (2026)",
  nl: "Voorbij de Zanden: De Geologische Wonderen van de Zwarte en Witte Woestijn van Egypte (2026)",
  pt: "Além das Areias: As Maravilhas Geológicas do Deserto Negro e Branco do Egito (2026)",
  zh: "沙海之外：埃及黑白沙漠的地质奇观 (2026)",
};

const metaTitleI18n = {
  fr: "Au-delà des Sables : Géologie des Déserts Noir et Blanc d'Égypte | Bedouin Trails (2026)",
  de: "Geologie der Schwarzen und Weißen Wüste Ägyptens | Bedouin Trails (2026)",
  es: "Geología del Desierto Negro y Blanco de Egipto | Bedouin Trails (2026)",
  it: "Geologia del Deserto Nero e Bianco d'Egitto | Bedouin Trails (2026)",
  nl: "Geologie van de Zwarte en Witte Woestijn van Egypte | Bedouin Trails (2026)",
  pt: "Geologia do Deserto Negro e Branco do Egito | Bedouin Trails (2026)",
  zh: "埃及黑白沙漠地质奇观 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Découvrez les secrets géologiques du désert blanc et noir d'Égypte : de la période crétacée à la Montagne de Cristal. Un guide complet incluant les meilleurs moments pour visiter et la liste d'emballage avec Bedouin Trails.",
  de: "Entdecken Sie die geologischen Geheimnisse der Weißen und Schwarzen Wüste Ägyptens: von der Kreidezeit bis zum Kristallberg. Ein umfassender Leitfaden mit den besten Reisezeiten und Packliste von Bedouin Trails.",
  es: "Descubra los secretos geológicos del Desierto Blanco y Negro de Egipto: desde el Período Cretácico hasta la Montaña de Cristal. Una guía completa que incluye los mejores momentos para visitar y lista de equipaje con Bedouin Trails.",
  it: "Scopri i segreti geologici del Deserto Bianco e Nero d'Egitto: dal Periodo Cretaceo alla Montagna di Cristallo. Una guida completa con i migliori periodi di visita e lista dei bagagli con Bedouin Trails.",
  nl: "Ontdek de geologische geheimen van de Witte en Zwarte Woestijn van Egypte: van het Krijttijdperk tot de Kristalberg. Een uitgebreide gids met de beste reistijden en paklijst van Bedouin Trails.",
  pt: "Descubra os segredos geológicos do Deserto Branco e Negro do Egito: do Período Cretáceo à Montanha de Cristal. Um guia abrangente com os melhores horários de visita e lista de embalagem com Bedouin Trails.",
  zh: "探索埃及白沙漠和黑沙漠的地质秘密：从白垩纪到水晶山。包含最佳游览时间和行李清单的完整指南，与 Bedouin Trails 同行。",
};

const excerptI18n = {
  fr: "Les déserts blanc et noir d'Égypte ne sont pas de simples paysages époustouflants — ce sont des musées à ciel ouvert qui racontent l'histoire de la Terre sur des millions d'années. Découvrez les secrets de la géologie avec Bedouin Trails.",
  de: "Ägyptens Weiße und Schwarze Wüste sind nicht nur atemberaubende Landschaften — sie sind Freilichtmuseen, die die Geschichte der Erde über Millionen von Jahren erzählen. Entdecken Sie die Geheimnisse der Geologie mit Bedouin Trails.",
  es: "Los desiertos blanco y negro de Egipto no son solo paisajes impresionantes: son museos al aire libre que narran la historia de la Tierra durante millones de años. Descubre los secretos de la geología con Bedouin Trails.",
  it: "Il Deserto Bianco e Nero d'Egitto non sono solo paesaggi mozzafiato: sono musei all'aperto che narrano la storia della Terra attraverso milioni di anni. Scopri i segreti della geologia con Bedouin Trails.",
  nl: "De Witte en Zwarte Woestijn van Egypte zijn niet alleen adembenemende landschappen — het zijn openluchtmusea die de geschiedenis van de Aarde vertellen over miljoenen jaren. Ontdek de geheimen van de geologie met Bedouin Trails.",
  pt: "Os desertos branco e negro do Egito não são apenas paisagens deslumbrantes — são museus ao ar livre que narram a história da Terra ao longo de milhões de anos. Descubra os segredos da geologia com a Bedouin Trails.",
  zh: "埃及的白色沙漠和黑色沙漠不仅仅是令人叹为观止的风景——它们是讲述数百万年地球历史的露天博物馆。与 Bedouin Trails 一起探索地质的奥秘。",
};

// ─── TRANSLATED CONTENT ───────────────────────────────────────────────────────

const contentFr = `<p>La plupart des visiteurs de la désert occidental d'Égypte ne voient que de belles formations rocheuses et des paysages époustouflants parfaits pour la photographie — mais la réalité est bien plus profonde. Les déserts blanc et noir sont en réalité des musées à ciel ouvert qui narrent l'histoire dramatique de la Terre sur des millions d'années. Des océans préhistoriques qui ont laissé derrière eux d'immenses dépôts de craie, aux violentes éruptions volcaniques qui ont recouvert la terre de lave noire, le désert occidental recèle des secrets géologiques époustouflants. Chez Bedouin Trails, nous ne vous emmenons pas simplement voir les sites — nous vous emmenons dans un voyage dans le temps pour comprendre comment ces merveilles naturelles surréalistes ont été formées.</p>

<h2>La Période Crétacée : Quand le Désert Occidental Était un Océan Profond</h2>
<p>Il peut sembler impossible de le croire en se tenant sous le soleil brûlant du désert, mais il y a des millions d'années — spécifiquement durant la Période Crétacée — ces paysages arides étaient entièrement submergés sous les eaux de la grande Mer de Téthys. Les brillantes formations rocheuses blanches qui définissent aujourd'hui le Désert Blanc sont en réalité les restes calcifiés et compressés de la vie marine microscopique et des coquillages qui se sont accumulés au fond de cet ancien océan. Au fil des millénaires, à mesure que le climat changeait et que la mer reculait, ces organismes ont laissé derrière eux d'immenses couches de craie et de calcaire. Depuis lors, les vents chargés de sable — la ponceuse naturelle de la nature — ont sculpté ces roches tendres pour former les formes emblématiques que l'on voit aujourd'hui, comme la célèbre formation "Poulet et Champignon".</p>

<h2>Les Origines Volcaniques Violentes du Désert Noir</h2>
<p>En contraste géologique et visuel saisissant avec la blancheur du Désert Blanc se trouve le Désert Noir. Cette région est caractérisée par des collines en forme de cône ressemblant à de petits volcans, recouvertes d'une épaisse couche de dolérite sombre et de roche basaltique. Ces pierres sombres sont les vestiges d'une activité volcanique violente qui a frappé la région durant la Période Jurassique. Le magma qui a jailli des profondeurs de la terre a refroidi et s'est fracturé au fil du temps, se dispersant pour couvrir les sommets et les pentes des collines sableuses. Ce paysage sombre, à la fois morne et majestueux, offre un contraste visuel saisissant — à seulement une heure de voiture des formations blanches de craie.</p>

<h2>La Montagne de Cristal : L'Anomalie Géologique Enchanteresse</h2>
<p>L'enchanteresse "Montagne de Cristal" est située à mi-chemin environ entre les déserts noir et blanc. Malgré son nom, ce n'est pas une montagne au sens traditionnel — c'est plutôt une petite crête de collines exposées composées presque entièrement de quartz étincelant et de cristaux de baryte. Les géologues pensent que cette formation était à l'origine une grande grotte souterraine, remplie de stalactites et stalagmites formées par des eaux souterraines chaudes hydrothermales. À travers des déplacements tectoniques et de puissantes forces érosives au fil du temps, le plafond de la grotte a été érodé et poussé vers la surface, brillant maintenant sous le soleil du désert comme un joyau rare.</p>

<h2>La Profondeur de la Culture Bédouine et l'Art de l'Hospitalité</h2>
<p>Aucun voyage dans le désert n'est complet sans vous immerger dans la culture locale. Les Bédouins sont le peuple autochtone de ces vastes territoires, possédant une connaissance innée et générationnelle de chaque rocher, chaque étoile et chaque plante du désert. Votre voyage avec nos guides n'est pas simplement une vitrine de paysages naturels — c'est une opportunité d'apprendre de véritables experts dans les arts de la survie dans le désert. Le soir, autour du feu de camp, les plus belles expressions de l'hospitalité bédouine prennent vie.</p>

<h2>Pourquoi les Tours Privés Sont-ils la Meilleure Option ?</h2>
<p>Lors de la planification d'un safari dans le désert occidental, les voyageurs font face à un choix clé : rejoindre une visite de groupe partagée ou réserver une visite privée. Chez Bedouin Trails, nous nous spécialisons exclusivement dans les visites privées pour plusieurs raisons fondamentales :</p>
<h3>Premièrement : Intimité Totale et Tranquillité</h3>
<p>Le désert est un lieu de silence et de réflexion. Une visite privée signifie que l'ensemble du camp vous est dédié, à vous et à votre groupe. Vous pouvez choisir d'écouter le silence absolu du désert ou de profiter de conversations tranquilles avec votre famille et vos amis.</p>
<h3>Deuxièmement : Flexibilité du Rythme et de l'Horaire</h3>
<p>Sur une visite privée, vous contrôlez le rythme. Votre guide bédouin personnel est là pour réaliser vos souhaits — vous pouvez passer plus de temps à la Montagne de Cristal, passer un site qui ne vous intéresse pas, ou demander à vous arrêter à mi-chemin pour profiter de la vue sur les dunes.</p>
<h3>Troisièmement : Attention Personnelle et Qualité de Service</h3>
<p>Votre guide partagera des histoires personnalisées adaptées à vos intérêts. Les repas sont préparés avec plus de soin, et toutes les exigences alimentaires spéciales sont satisfaites avec précision.</p>

<h2>Météo et Meilleurs Moments pour Visiter</h2>
<p>Le désert occidental d'Égypte a un climat continental extrêmement aride, avec des différences de température significatives entre le jour et la nuit.</p>
<ul>
<li><strong>Automne (octobre – novembre) :</strong> Considéré comme l'un des meilleurs moments pour visiter. Températures modérées de 25 à 30°C le jour.</li>
<li><strong>Hiver (décembre – février) :</strong> Journées ensoleillées et agréables (18-22°C), mais nuits très froides pouvant approcher zéro degré.</li>
<li><strong>Printemps (mars – mai) :</strong> Similaire à l'automne, mais peut connaître des vents de sable chauds "Khamsin".</li>
<li><strong>Été (juin – septembre) :</strong> Températures diurnes dépassant 40°C. Les nuits d'été sont idéales pour l'observation des étoiles.</li>
</ul>

<h2>Guide de Bagages Complet : Que Apporter ?</h2>
<p>La règle d'or est les tissus naturels respirants (coton et lin). Choisissez des chemises à manches longues. Le soir, vous aurez besoin de couches thermiques. Chez Bedouin Trails, nous fournissons tout l'équipement de camping lourd, tous les repas et l'eau minérale tout au long du voyage.</p>

<h2>Notre Engagement envers le Tourisme Durable</h2>
<p>Nous appliquons des principes stricts de tourisme écologique durable : politique de ne laisser aucune trace, respect de la faune sauvage, et conduite responsable sur des pistes désignées pour protéger la végétation rare du désert.</p>`;

const contentDe = `<p>Die meisten Besucher der westlichen Wüste Ägyptens sehen nur schöne Felsformationen und atemberaubende Landschaften — doch die Realität reicht viel tiefer. Die Weiße und die Schwarze Wüste sind in Wirklichkeit Freilichtmuseen, die die dramatische Geschichte der Erde über Millionen von Jahren erzählen. Von den prähistorischen Ozeanen, die riesige Kreideschichten hinterließen, bis zu den gewaltsamen Vulkanausbrüchen, die die Erde mit schwarzer Lava bedeckten — die westliche Wüste birgt atemberaubende geologische Geheimnisse. Bei Bedouin Trails nehmen wir Sie nicht nur mit, um Sehenswürdigkeiten zu besichtigen; wir nehmen Sie mit auf eine Reise durch die Zeit, um zu verstehen, wie diese surrealen Naturwunder entstanden sind.</p>

<h2>Die Kreidezeit: Als die Westliche Wüste ein tiefer Ozean war</h2>
<p>Es mag unmöglich erscheinen zu glauben, während man unter der sengenden Wüstensonne steht, aber vor Millionen von Jahren — während der Kreidezeit — waren diese kargen Landschaften vollständig unter den Wassern des großen Tethys-Meeres versunken. Die brillanten weißen Felsformationen, die die Weiße Wüste heute prägen, sind tatsächlich die kalzifizierten, komprimierten Überreste mikroskopischen Meereslebens und Muscheln, die sich auf dem Boden dieses uralten Ozeans angehäuft haben. Seitdem haben sandbeladene Winde — das natürliche Schleifpapier der Natur — diese weichen Felsen gemeißelt und so die ikonischen Formen geschaffen, die wir heute sehen.</p>

<h2>Die gewaltsamen vulkanischen Ursprünge der Schwarzen Wüste</h2>
<p>Im krassen geologischen und visuellen Kontrast zur Weiße der Weißen Wüste liegt die Schwarze Wüste. Diese Region zeichnet sich durch kegelförmige Hügel aus, die kleinen Vulkanen ähneln und mit einer dicken Schicht aus dunklem Dolerit und Basaltgestein bedeckt sind. Diese dunklen Steine sind die Überreste der gewaltsamen Vulkantätigkeit, die die Region während der Jurazeit erschütterte. Das aus dem Innern der Erde ausgebrochene Magma kühlte ab und brach im Laufe der Zeit auf, um die Gipfel und Hänge der Sandhügel zu bedecken. Diese dunkle, gleichzeitig düstere und majestätische Landschaft bietet einen atemberaubenden visuellen Kontrast — nur eine Stunde Fahrt von den weißen Kreideformationen entfernt.</p>

<h2>Der Kristallberg: Die bezaubernde geologische Anomalie</h2>
<p>Der bezaubernde "Kristallberg" liegt ungefähr auf halbem Weg zwischen der Schwarzen und der Weißen Wüste. Trotz seines Namens ist er kein Berg im traditionellen Sinne — es ist ein kleiner Kamm freiliegender Hügel, der fast vollständig aus funkelndem Quarz und Barytkristallen besteht. Geologen glauben, dass diese Formation ursprünglich eine große unterirdische Höhle war, gefüllt mit Stalaktiten und Stalagmiten, die durch heißes hydrothermales Grundwasser entstanden. Durch tektonische Verschiebungen und starke Erosionskräfte wurde die Höhlendecke erodiert und an die Oberfläche gedrückt, wo sie nun unter der Wüstensonne wie ein seltener Edelstein glänzt.</p>

<h2>Die Tiefe der Beduinenkultur und die Gastfreundschaft</h2>
<p>Keine Wüstenreise ist vollständig ohne Eintauchen in die lokale Kultur. Die Beduinen sind das Ureinwohnervolk dieser weitläufigen Gebiete mit generationalem Wissen über jeden Felsen, jeden Stern und jede Pflanze in der Wüste. Am Abend, ums Lagerfeuer versammelt, leben die schönsten Ausdrücke beduinischer Gastfreundschaft auf.</p>

<h2>Warum Private Touren die Beste Option sind?</h2>
<p>Bei Bedouin Trails spezialisieren wir uns ausschließlich auf private Touren aus mehreren grundlegenden Gründen:</p>
<h3>Erstens: Vollständige Privatsphäre und Ruhe</h3>
<p>Die Wüste ist ein Ort der Stille und Reflexion. Eine private Tour bedeutet, dass das gesamte Camp Ihnen und Ihrer Gruppe gewidmet ist.</p>
<h3>Zweitens: Flexibilität des Tempos und Zeitplans</h3>
<p>Sie kontrollieren das Tempo. Ihr persönlicher beduinischer Reiseführer ist da, um Ihre Wünsche zu erfüllen.</p>
<h3>Drittens: Persönliche Aufmerksamkeit und Servicequalität</h3>
<p>Ihr Reiseführer teilt maßgeschneiderte Geschichten, die auf Ihre Interessen zugeschnitten sind. Mahlzeiten werden mit größerer Sorgfalt zubereitet.</p>

<h2>Wetter und Beste Reisezeiten</h2>
<ul>
<li><strong>Herbst (Oktober – November):</strong> Gilt als eine der besten Reisezeiten. Tagsüber moderate Temperaturen von 25 bis 30°C.</li>
<li><strong>Winter (Dezember – Februar):</strong> Angenehme, sonnige Tage (18-22°C), aber sehr kalte Nächte nahe dem Gefrierpunkt.</li>
<li><strong>Frühling (März – Mai):</strong> Ähnlich wie der Herbst, kann aber Khamsin-Sandwinde erleben.</li>
<li><strong>Sommer (Juni – September):</strong> Tagestemperaturen über 40°C. Sommernächte sind ideal für Sternenbeobachtung.</li>
</ul>

<h2>Vollständiger Reisegepäck-Leitfaden</h2>
<p>Die goldene Regel sind natürliche, atmungsaktive Stoffe. Bei Bedouin Trails stellen wir alle schweren Campingausrüstungen, alle Mahlzeiten und Mineralwasser während der gesamten Reise zur Verfügung.</p>

<h2>Unser Engagement für Nachhaltigen Tourismus</h2>
<p>Wir wenden strenge Grundsätze des ökologischen Tourismus an: Leave-No-Trace-Politik, Respekt für Wildtiere und verantwortungsvolles Fahren auf ausgewiesenen Strecken.</p>`;

const contentEs = `<p>La mayoría de los visitantes del desierto occidental de Egipto ven solo hermosas formaciones rocosas y paisajes impresionantes — pero la realidad va mucho más profunda. Los desiertos Blanco y Negro son en realidad museos al aire libre que narran la dramática historia de la Tierra durante millones de años. Desde los océanos prehistóricos que dejaron enormes depósitos de tiza, hasta las violentas erupciones volcánicas que cubrieron la tierra de lava negra, el desierto occidental guarda secretos geológicos asombrosos. En Bedouin Trails, no solo te llevamos a ver los sitios — te llevamos en un viaje a través del tiempo para entender cómo se formaron estas maravillas naturales surrealistas.</p>

<h2>El Período Cretácico: Cuando el Desierto Occidental Era un Océano Profundo</h2>
<p>Puede parecer imposible de creer mientras te encuentras bajo el sol abrasador del desierto, pero hace millones de años — específicamente durante el Período Cretácico — estos áridos paisajes estaban completamente sumergidos bajo las aguas del gran Mar de Tetis. Las brillantes formaciones rocosas blancas que definen hoy el Desierto Blanco son en realidad los restos calcificados y comprimidos de vida marina microscópica y conchas que se acumularon en el fondo de este antiguo océano. Desde entonces, los vientos cargados de arena han tallado estas rocas blandas para formar las icónicas formas que vemos hoy, como la famosa formación "Pollo y Champiñón".</p>

<h2>Los Violentos Orígenes Volcánicos del Desierto Negro</h2>
<p>En marcado contraste geológico y visual con la blancura del Desierto Blanco se encuentra el Desierto Negro. Esta región se caracteriza por colinas en forma de cono que se asemejan a pequeños volcanes, cubiertas con una gruesa capa de roca oscura de dolerita y basalto. Estas piedras oscuras son los restos de la violenta actividad volcánica que sacudió la región durante el Período Jurásico. Este paisaje oscuro proporciona un impresionante contraste visual — a solo una hora en auto de las formaciones blancas de tiza.</p>

<h2>La Montaña de Cristal: La Encantadora Anomalía Geológica</h2>
<p>La encantadora "Montaña de Cristal" se encuentra aproximadamente a mitad de camino entre los desiertos Negro y Blanco. A pesar de su nombre, no es una montaña en el sentido tradicional — es una pequeña cresta de colinas expuestas compuesta casi en su totalidad de cuarzo brillante y cristales de barita. Los geólogos creen que esta formación fue originalmente una gran cueva subterránea, llena de estalactitas y estalagmitas formadas por agua subterránea hidrotermal caliente.</p>

<h2>La Profundidad de la Cultura Beduina y la Hospitalidad</h2>
<p>Ningún viaje al desierto está completo sin sumergirse en la cultura local. Los beduinos son el pueblo indígena de estos vastos territorios. Por la tarde, reunidos alrededor de la hoguera, cobran vida las más bellas expresiones de la hospitalidad beduina.</p>

<h2>¿Por Qué los Tours Privados Son la Mejor Opción?</h2>
<p>En Bedouin Trails nos especializamos exclusivamente en tours privados por varias razones fundamentales:</p>
<h3>Primero: Privacidad Total y Tranquilidad</h3>
<p>El desierto es un lugar de silencio y reflexión. Un tour privado significa que todo el campamento está dedicado a ti y a tu grupo.</p>
<h3>Segundo: Flexibilidad de Ritmo y Horario</h3>
<p>Tú controlas el ritmo. Tu guía beduino personal está ahí para cumplir tus deseos.</p>
<h3>Tercero: Atención Personal y Calidad del Servicio</h3>
<p>Tu guía compartirá historias personalizadas adaptadas a tus intereses. Las comidas se preparan con mayor cuidado.</p>

<h2>Clima y Mejores Momentos para Visitar</h2>
<ul>
<li><strong>Otoño (octubre – noviembre):</strong> Considerado uno de los mejores momentos para visitar. Temperaturas moderadas de 25 a 30°C durante el día.</li>
<li><strong>Invierno (diciembre – febrero):</strong> Días soleados y agradables (18-22°C), pero noches muy frías que pueden acercarse a cero grados.</li>
<li><strong>Primavera (marzo – mayo):</strong> Similar al otoño, pero puede experimentar vientos de arena cálidos "Khamsin".</li>
<li><strong>Verano (junio – septiembre):</strong> Temperaturas diurnas superiores a 40°C. Las noches de verano son ideales para la observación de estrellas.</li>
</ul>

<h2>Guía Completa de Equipaje: ¿Qué Llevar?</h2>
<p>La regla de oro son las telas naturales transpirables. En Bedouin Trails proporcionamos todo el equipo de camping pesado, todas las comidas y agua mineral durante todo el viaje.</p>

<h2>Nuestro Compromiso con el Turismo Sostenible</h2>
<p>Aplicamos principios estrictos de ecoturismo sostenible: política de dejar ningún rastro, respeto por la vida silvestre y conducción responsable en senderos designados.</p>`;

const contentIt = `<p>La maggior parte dei visitatori del deserto occidentale d'Egitto vede solo belle formazioni rocciose e paesaggi mozzafiato — ma la realtà va molto più in profondità. I deserti Bianco e Nero sono in realtà musei all'aperto che narrano la storia drammatica della Terra attraverso milioni di anni. Dagli oceani preistorici che hanno lasciato enormi depositi di gesso alle violente eruzioni vulcaniche che hanno ricoperto la terra di lava nera, il deserto occidentale custodisce segreti geologici straordinari. Da Bedouin Trails, non vi portiamo solo a vedere i siti — vi portiamo in un viaggio nel tempo per capire come si sono formate queste meraviglie naturali surrealiste.</p>

<h2>Il Periodo Cretaceo: Quando il Deserto Occidentale Era un Oceano Profondo</h2>
<p>Può sembrare impossibile da credere mentre si è sotto il sole cocente del deserto, ma milioni di anni fa — specificamente durante il Periodo Cretaceo — questi paesaggi aridi erano completamente sommersi sotto le acque del grande Mare di Teti. Le brillanti formazioni rocciose bianche che definiscono oggi il Deserto Bianco sono in realtà i resti calcificati e compressi di vita marina microscopica e conchiglie accumulate sul fondo di questo antico oceano. Da allora, i venti carichi di sabbia hanno scolpito queste rocce morbide per formare le forme iconiche che vediamo oggi.</p>

<h2>Le Origini Vulcaniche Violente del Deserto Nero</h2>
<p>In netto contrasto geologico e visivo con la bianchezza del Deserto Bianco si trova il Deserto Nero. Questa regione è caratterizzata da colline a forma di cono che assomigliano a piccoli vulcani, coperte da un denso strato di roccia scura di dolerite e basalto. Questo paesaggio scuro offre un impressionante contrasto visivo — a solo un'ora di auto dalle formazioni bianche di gesso.</p>

<h2>La Montagna di Cristallo: L'Affascinante Anomalia Geologica</h2>
<p>L'affascinante "Montagna di Cristallo" si trova circa a metà strada tra i deserti Nero e Bianco. Nonostante il suo nome, non è una montagna nel senso tradizionale — è una piccola cresta di colline esposte composte quasi interamente da quarzo scintillante e cristalli di barite.</p>

<h2>La Profondità della Cultura Beduina e l'Ospitalità</h2>
<p>Nessun viaggio nel deserto è completo senza immergersi nella cultura locale. I Beduini sono il popolo indigeno di questi vasti territori. La sera, riuniti attorno al falò, prendono vita le più belle espressioni dell'ospitalità beduina.</p>

<h2>Perché i Tour Privati Sono la Scelta Migliore?</h2>
<h3>Primo: Privacy Totale e Tranquillità</h3>
<p>Il deserto è un luogo di silenzio e riflessione. Un tour privato significa che l'intero campo è dedicato a voi e al vostro gruppo.</p>
<h3>Secondo: Flessibilità di Ritmo e Programma</h3>
<p>Voi controllate il ritmo. La vostra guida beduina personale è lì per esaudire i vostri desideri.</p>
<h3>Terzo: Attenzione Personale e Qualità del Servizio</h3>
<p>La vostra guida condividerà storie personalizzate adattate ai vostri interessi.</p>

<h2>Clima e Migliori Periodi di Visita</h2>
<ul>
<li><strong>Autunno (ottobre – novembre):</strong> Temperature moderate di 25-30°C di giorno.</li>
<li><strong>Inverno (dicembre – febbraio):</strong> Giornate soleggiate (18-22°C) ma notti molto fredde.</li>
<li><strong>Primavera (marzo – maggio):</strong> Simile all'autunno, ma possibili venti sabbiosi "Khamsin".</li>
<li><strong>Estate (giugno – settembre):</strong> Temperature diurne oltre i 40°C. Le notti estive sono ideali per l'osservazione delle stelle.</li>
</ul>

<h2>Guida Completa ai Bagagli</h2>
<p>La regola d'oro sono i tessuti naturali traspiranti. Da Bedouin Trails forniamo tutta l'attrezzatura da campeggio pesante, tutti i pasti e l'acqua minerale durante il viaggio.</p>

<h2>Il Nostro Impegno per il Turismo Sostenibile</h2>
<p>Applichiamo rigorosi principi di ecoturismo sostenibile: politica "Leave No Trace", rispetto per la fauna selvatica e guida responsabile su percorsi designati.</p>`;

const contentNl = `<p>De meeste bezoekers van de westelijke woestijn van Egypte zien alleen mooie rotsformaties en adembenemende landschappen — maar de werkelijkheid gaat veel dieper. De Witte en Zwarte Woestijn zijn eigenlijk openluchtmusea die de dramatische geschiedenis van de Aarde vertellen over miljoenen jaren. Van de prehistorische oceanen die enorme krijtlagen achterlieten tot de hevige vulkaanuitbarstingen die de aarde bedekten met zwarte lava — de westelijke woestijn bewaart verbazingwekkende geologische geheimen. Bij Bedouin Trails nemen we u niet alleen mee om bezienswaardigheden te zien; we nemen u mee op een reis door de tijd.</p>

<h2>Het Krijttijdperk: Toen de Westelijke Woestijn een Diepe Oceaan Was</h2>
<p>Het lijkt onmogelijk te geloven terwijl je onder de brandende woestijnzon staat, maar miljoenen jaren geleden waren deze kale landschappen volledig ondergedompeld onder de wateren van de grote Tethyszee. De schitterende witte rotsformaties die de Witte Woestijn vandaag definiëren, zijn in werkelijkheid de verkalkte, gecomprimeerde resten van microscopisch marien leven en schelpen. Sindsdien hebben zandbeladen winden deze zachte rotsen gebeeldhouwd in de iconische vormen die we vandaag zien.</p>

<h2>De Gewelddadige Vulkanische Oorsprong van de Zwarte Woestijn</h2>
<p>In sterk geologisch en visueel contrast met de witheid van de Witte Woestijn ligt de Zwarte Woestijn. Dit landschap biedt een verbluffend visueel contrast — op slechts een uur rijden van de witte krijtformaties.</p>

<h2>Kristalberg: De Betoverende Geologische Anomalie</h2>
<p>De betoverende "Kristalberg" ligt ruwweg halverwege tussen de Zwarte en Witte Woestijn, samengesteld uit fonkelend kwarts en barietkristallen.</p>

<h2>De Diepte van de Bedoïenencultuur en Gastvrijheid</h2>
<p>Geen woestijnreis is compleet zonder onderdompeling in de lokale cultuur. 's Avonds, rond het kampvuur, komen de mooiste uitdrukkingen van Bedoïenenhospitaliteit tot leven.</p>

<h2>Waarom Privétours de Beste Optie zijn?</h2>
<h3>Ten eerste: Volledige Privacy en Rust</h3>
<p>De woestijn is een plek van stilte en bezinning. Een privétour betekent dat het hele kamp exclusief voor u en uw groep is.</p>
<h3>Ten tweede: Flexibiliteit van Tempo en Schema</h3>
<p>U bepaalt het tempo. Uw persoonlijke Bedoïenengids is er om uw wensen in te vullen.</p>
<h3>Ten derde: Persoonlijke Aandacht en Servicekwaliteit</h3>
<p>Uw gids deelt op maat gemaakte verhalen afgestemd op uw interesses.</p>

<h2>Weer en Beste Reistijden</h2>
<ul>
<li><strong>Herfst (oktober – november):</strong> Gematigde temperaturen van 25-30°C overdag.</li>
<li><strong>Winter (december – februari):</strong> Zonnige dagen (18-22°C) maar erg koude nachten.</li>
<li><strong>Lente (maart – mei):</strong> Vergelijkbaar met de herfst, maar mogelijk Khamsin-zandwinden.</li>
<li><strong>Zomer (juni – september):</strong> Dagtemperaturen boven 40°C. Zomernachten zijn ideaal voor sterrenkijken.</li>
</ul>

<h2>Complete Paklijst Gids</h2>
<p>De gulden regel zijn natuurlijke, ademende stoffen. Bij Bedouin Trails leveren wij alle zware kampeeruitrusting, alle maaltijden en mineraalwater gedurende de hele reis.</p>

<h2>Onze Toewijding aan Duurzaam Toerisme</h2>
<p>We passen strenge principes van duurzaam ecotoerisme toe: Leave No Trace beleid, respect voor wilde dieren en verantwoord rijden op aangewezen routes.</p>`;

const contentPt = `<p>A maioria dos visitantes do deserto ocidental do Egito vê apenas belas formações rochosas e paisagens deslumbrantes — mas a realidade vai muito mais fundo. Os desertos Branco e Negro são na verdade museus ao ar livre que narram a dramática história da Terra ao longo de milhões de anos. Dos oceanos pré-históricos que deixaram enormes depósitos de giz às violentas erupções vulcânicas que cobriram a terra de lava negra, o deserto ocidental guarda segredos geológicos surpreendentes. Na Bedouin Trails, não apenas levamos você a ver os pontos turísticos — levamos você em uma viagem no tempo.</p>

<h2>O Período Cretáceo: Quando o Deserto Ocidental Era um Oceano Profundo</h2>
<p>Pode parecer impossível de acreditar enquanto você está sob o sol escaldante do deserto, mas milhões de anos atrás — especificamente durante o Período Cretáceo — essas paisagens áridas estavam completamente submersas sob as águas do grande Mar de Tétis. As brilhantes formações rochosas brancas que definem hoje o Deserto Branco são na verdade os restos calcificados e comprimidos de vida marinha microscópica e conchas acumuladas no fundo deste antigo oceano. Desde então, os ventos carregados de areia esculpiram essas rochas moles para formar as formas icônicas que vemos hoje.</p>

<h2>As Violentas Origens Vulcânicas do Deserto Negro</h2>
<p>Em forte contraste geológico e visual com a brancura do Deserto Branco está o Deserto Negro. Essa paisagem escura oferece um impressionante contraste visual — a apenas uma hora de carro das formações brancas de giz.</p>

<h2>A Montanha de Cristal: A Fascinante Anomalia Geológica</h2>
<p>A fascinante "Montanha de Cristal" fica aproximadamente a meio caminho entre os desertos Negro e Branco, composta quase inteiramente de quartzo brilhante e cristais de barita.</p>

<h2>A Profundidade da Cultura Beduína e a Hospitalidade</h2>
<p>Nenhuma viagem ao deserto está completa sem se imergir na cultura local. À noite, reunidos ao redor da fogueira, ganham vida as mais belas expressões da hospitalidade beduína.</p>

<h2>Por Que os Tours Privados São a Melhor Opção?</h2>
<h3>Primeiro: Privacidade Total e Tranquilidade</h3>
<p>O deserto é um lugar de silêncio e reflexão. Um tour privado significa que o acampamento inteiro é dedicado a você e ao seu grupo.</p>
<h3>Segundo: Flexibilidade de Ritmo e Programação</h3>
<p>Você controla o ritmo. Seu guia beduíno pessoal está lá para realizar seus desejos.</p>
<h3>Terceiro: Atenção Pessoal e Qualidade do Serviço</h3>
<p>Seu guia compartilhará histórias personalizadas adaptadas aos seus interesses.</p>

<h2>Clima e Melhores Épocas para Visitar</h2>
<ul>
<li><strong>Outono (outubro – novembro):</strong> Temperaturas moderadas de 25-30°C durante o dia.</li>
<li><strong>Inverno (dezembro – fevereiro):</strong> Dias ensolarados e agradáveis (18-22°C), mas noites muito frias.</li>
<li><strong>Primavera (março – maio):</strong> Similar ao outono, mas pode ter ventos de areia quentes "Khamsin".</li>
<li><strong>Verão (junho – setembro):</strong> Temperaturas diurnas acima de 40°C. As noites de verão são ideais para observação de estrelas.</li>
</ul>

<h2>Guia Completo de Embalagem</h2>
<p>A regra de ouro são tecidos naturais respiráveis. Na Bedouin Trails, fornecemos todos os equipamentos pesados de camping, todas as refeições e água mineral durante toda a viagem.</p>

<h2>Nosso Compromisso com o Turismo Sustentável</h2>
<p>Aplicamos princípios rígidos de ecoturismo sustentável: política de não deixar rastros, respeito pela vida selvagem e condução responsável em trilhas designadas.</p>`;

const contentZh = `<p>大多数造访埃及西部沙漠的游客只看到美丽的岩石构造和令人叹为观止的风景——但现实远不止于此。白色沙漠和黑色沙漠实际上是露天博物馆，讲述着地球数百万年的戏剧性历史。从史前海洋留下的巨大白垩层，到猛烈的火山喷发将大地覆盖在黑色熔岩之下，西部沙漠蕴藏着令人叹为观止的地质秘密。在 Bedouin Trails，我们不仅带您参观景点——我们带您穿越时间，了解这些超现实自然奇观是如何形成的。</p>

<h2>白垩纪：西部沙漠曾是深邃的海洋</h2>
<p>站在灼热的沙漠烈日下，这似乎令人难以置信，但数百万年前——特别是在白垩纪——这些干旱的景观完全沉浸在伟大的特提斯海的水域之下。今天定义白色沙漠的brilliant白色岩石构造，实际上是积累在这片古老海洋底部的微观海洋生物和贝壳的钙化压缩残骸。自那以后，满载沙粒的风——大自然的砂纸——将这些软岩雕刻成我们今天看到的标志性形态。</p>

<h2>黑色沙漠的猛烈火山起源</h2>
<p>与白色沙漠的洁白形成鲜明地质和视觉对比的是黑色沙漠。这片景观提供了令人惊叹的视觉对比——距白色白垩构造仅一小时车程。</p>

<h2>水晶山：迷人的地质异常</h2>
<p>迷人的"水晶山"位于黑色沙漠和白色沙漠之间大约中途，几乎完全由闪闪发光的石英和重晶石晶体组成。</p>

<h2>贝都因文化的深度与热情好客</h2>
<p>没有沉浸在当地文化中，沙漠之旅就不完整。傍晚，围坐在篝火旁，贝都因款待的最美表达得以展现。</p>

<h2>为什么私人旅游是最佳选择？</h2>
<h3>第一：完全隐私与宁静</h3>
<p>沙漠是沉默与反思的地方。私人旅游意味着整个营地专为您和您的团队服务。</p>
<h3>第二：节奏与时间表的灵活性</h3>
<p>您掌控节奏。您的私人贝都因导游随时准备满足您的愿望。</p>
<h3>第三：个人关注与服务质量</h3>
<p>您的导游将分享根据您的兴趣定制的故事。</p>

<h2>天气与最佳游览时间</h2>
<ul>
<li><strong>秋季（10月-11月）：</strong>白天温度适中，25-30°C。</li>
<li><strong>冬季（12月-2月）：</strong>阳光明媚的白天（18-22°C），但夜晚极冷。</li>
<li><strong>春季（3月-5月）：</strong>类似秋季，但可能出现"哈马丹"热沙风。</li>
<li><strong>夏季（6月-9月）：</strong>白天气温超过40°C。夏夜非常适合观星。</li>
</ul>

<h2>完整行李指南</h2>
<p>黄金法则是天然透气面料。在 Bedouin Trails，我们提供所有重型露营设备、所有餐食和矿泉水。</p>

<h2>我们对可持续旅游的承诺</h2>
<p>我们执行严格的生态旅游可持续原则：不留痕迹政策、尊重野生动物以及在指定路线上负责任驾驶。</p>`;

const contentI18n = {
  fr: contentFr,
  de: contentDe,
  es: contentEs,
  it: contentIt,
  nl: contentNl,
  pt: contentPt,
  zh: contentZh,
};

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "Is it allowed to collect crystal or chalk rocks as souvenirs?",
    questionAr: "هل يسمح بجمع الصخور الكريستالية أو الطباشيرية كأخذ تذكار؟",
    questionI18n: {
      fr: "Est-il permis de collecter des roches cristallines ou de craie comme souvenirs ?",
      de: "Ist es erlaubt, Kristall- oder Kreidegesteine als Souvenirs zu sammeln?",
      es: "¿Está permitido recolectar rocas cristalinas o de tiza como recuerdos?",
      it: "È consentito raccogliere rocce cristalline o di gesso come souvenir?",
      nl: "Is het toegestaan om kristallijne of krijtrotsen als souvenirs te verzamelen?",
      pt: "É permitido coletar rochas cristalinas ou de giz como souvenirs?",
      zh: "允许收集水晶或白垩岩石作为纪念品吗？",
    },
    answerEn:
      "It is strictly forbidden to take any rocks — whether crystal, basalt, or chalk pieces — from the desert. These are nature reserves, and if every visitor took a piece, these wonders would disappear forever. We enforce a policy of 'Take only photographs, leave only footprints.'",
    answerAr:
      "يُمنع منعاً باتاً أخذ أي صخور، سواء كانت كريستال، أو بازلت، أو قطع طباشيرية من الصحراء. هذه محميات طبيعية، وإذا أخذ كل زائر قطعة، فستختفي هذه العجائب إلى الأبد. نطبق سياسة 'اكتفِ بالتقاط الصور، ولا تترك سوى آثار أقدامك.'",
    answerI18n: {
      fr: "Il est strictement interdit d'emporter des roches du désert. Ce sont des réserves naturelles. Nous appliquons une politique 'Photographiez seulement, laissez seulement des empreintes.'",
      de: "Es ist streng verboten, Steine aus der Wüste mitzunehmen. Das sind Naturschutzgebiete. Wir setzen die Richtlinie 'Nur fotografieren, nur Fußspuren hinterlassen' durch.",
      es: "Está estrictamente prohibido llevarse rocas del desierto. Son reservas naturales. Aplicamos la política de 'Solo fotografías, solo huellas.'",
      it: "È severamente vietato portare rocce dal deserto. Sono riserve naturali. Applichiamo la politica 'Solo fotografie, solo impronte.'",
      nl: "Het is streng verboden om stenen mee te nemen uit de woestijn. Het zijn natuurreservaten. We handhaven het beleid 'Alleen foto's, alleen voetstappen.'",
      pt: "É estritamente proibido levar rochas do deserto. São reservas naturais. Aplicamos a política 'Apenas fotografias, apenas pegadas.'",
      zh: "严禁从沙漠带走任何岩石。这些是自然保护区。我们执行'只拍照，只留脚印'的政策。",
    },
    sortOrder: 0,
  },
  {
    questionEn:
      "Do I need a geological background to enjoy the trip?",
    questionAr: "هل أحتاج إلى خلفية جيولوجية للاستمتاع بالرحلة؟",
    questionI18n: {
      fr: "Ai-je besoin d'une formation en géologie pour profiter du voyage ?",
      de: "Brauche ich einen geologischen Hintergrund, um die Reise zu genießen?",
      es: "¿Necesito conocimientos geológicos para disfrutar del viaje?",
      it: "Ho bisogno di una formazione geologica per godermi il viaggio?",
      nl: "Heb ik een geologische achtergrond nodig om de reis te genieten?",
      pt: "Preciso de formação geológica para aproveitar a viagem?",
      zh: "我需要地质学背景才能享受这次旅行吗？",
    },
    answerEn:
      "Not at all! Our Bedouin guides are trained to explain these complex phenomena in a simplified and engaging style that combines scientific facts with local stories, making it an enjoyable educational experience for all ages, including children.",
    answerAr:
      "إطلاقاً! مرشدونا البدو مدربون على شرح هذه الظواهر المعقدة بأسلوب مبسط وممتع يجمع بين الحقائق العلمية والقصص المحلية، مما يجعلها تجربة تعليمية ممتعة لجميع الأعمار، بما في ذلك الأطفال.",
    answerI18n: {
      fr: "Pas du tout ! Nos guides bédouins sont formés pour expliquer ces phénomènes complexes de manière simplifiée et engageante, pour tous les âges, y compris les enfants.",
      de: "Überhaupt nicht! Unsere Beduinenführer sind darin geschult, diese komplexen Phänomene auf vereinfachte und ansprechende Weise zu erklären, für alle Altersgruppen, einschließlich Kinder.",
      es: "¡Para nada! Nuestros guías beduinos están entrenados para explicar estos fenómenos complejos de manera simplificada y atractiva, para todas las edades, incluidos los niños.",
      it: "Per niente! Le nostre guide beduine sono addestrate a spiegare questi fenomeni complessi in modo semplificato e coinvolgente, per tutte le età, inclusi i bambini.",
      nl: "Helemaal niet! Onze Bedoïenengidsen zijn getraind om deze complexe verschijnselen op een vereenvoudigde en boeiende manier uit te leggen, voor alle leeftijden, inclusief kinderen.",
      pt: "De jeito nenhum! Nossos guias beduínos são treinados para explicar esses fenômenos complexos de maneira simplificada e envolvente, para todas as idades, incluindo crianças.",
      zh: "完全不需要！我们的贝都因导游经过培训，能以简化而引人入胜的方式解释这些复杂现象，适合所有年龄段，包括儿童。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "Are the white rock formations solid or fragile?",
    questionAr: "هل التكوينات الصخرية البيضاء صلبة أم هشة؟",
    questionI18n: {
      fr: "Les formations rocheuses blanches sont-elles solides ou fragiles ?",
      de: "Sind die weißen Felsformationen fest oder zerbrechlich?",
      es: "¿Las formaciones rocosas blancas son sólidas o frágiles?",
      it: "Le formazioni rocciose bianche sono solide o fragili?",
      nl: "Zijn de witte rotsformaties solide of fragiel?",
      pt: "As formações rochosas brancas são sólidas ou frágeis?",
      zh: "白色岩石构造是坚固的还是脆弱的？",
    },
    answerEn:
      "Chalk rocks are extremely fragile compared to other rocks. Continuous wind erosion means their shapes change gradually over time. For this reason, we ask our visitors not to climb on sensitive formations to avoid damaging them or risking injury.",
    answerAr:
      "الصخور الطباشيرية هشة للغاية مقارنة بالصخور الأخرى. التآكل المستمر بفعل الرياح يعني أن أشكالها تتغير تدريجياً عبر الزمن. لهذا السبب نطلب من زوارنا عدم التسلق على التكوينات الحساسة لتجنب إتلافها أو التعرض للإصابة.",
    answerI18n: {
      fr: "Les roches crayeuses sont extrêmement fragiles. L'érosion éolienne continue signifie que leurs formes changent progressivement. C'est pourquoi nous demandons aux visiteurs de ne pas grimper sur les formations sensibles.",
      de: "Kreidegesteine sind im Vergleich zu anderen Gesteinen extrem zerbrechlich. Wir bitten unsere Besucher, nicht auf empfindliche Formationen zu klettern.",
      es: "Las rocas de tiza son extremadamente frágiles. Pedimos a nuestros visitantes que no escalen formaciones sensibles para evitar dañarlas.",
      it: "Le rocce di gesso sono estremamente fragili. Chiediamo ai visitatori di non arrampicarsi sulle formazioni sensibili per evitare di danneggiarle.",
      nl: "Krijtrotsen zijn extreem fragiel. We vragen bezoekers niet op gevoelige formaties te klimmen om schade te voorkomen.",
      pt: "Rochas de giz são extremamente frágeis. Pedimos aos visitantes que não escalem formações sensíveis para evitar danos.",
      zh: "白垩岩石与其他岩石相比极为脆弱。我们要求游客不要攀爬敏感构造，以免损坏或受伤。",
    },
    sortOrder: 2,
  },
  {
    questionEn:
      "How were the strange shapes like mushroom rocks formed?",
    questionAr: "كيف تشكلت الأشكال الغريبة مثل صخرة الفطر؟",
    questionI18n: {
      fr: "Comment se sont formées les formes étranges comme les roches en champignon ?",
      de: "Wie haben sich die seltsamen Formen wie Pilzfelsen gebildet?",
      es: "¿Cómo se formaron las formas extrañas como las rocas de seta?",
      it: "Come si sono formate le forme strane come le rocce a fungo?",
      nl: "Hoe zijn de vreemde vormen zoals paddenstoelrotsen gevormd?",
      pt: "Como se formaram as formas estranhas como as rochas de cogumelo?",
      zh: "像蘑菇岩这样奇特的形态是如何形成的？",
    },
    answerEn:
      "These shapes (mushroom rocks) form because sand-laden winds are stronger and denser closer to the ground. Therefore, the base of the rock erodes much faster than the top, leading over time to the familiar mushroom or toadstool shape.",
    answerAr:
      "تتشكل هذه الأشكال (Mushroom rocks) لأن الرياح المحملة بالرمال تكون أقوى وأكثر كثافة بالقرب من الأرض. لذلك، تتآكل قاعدة الصخرة بشكل أسرع بكثير من قمتها، مما يؤدي بمرور الزمن إلى هذا الشكل المألوف للفطر أو المشروم.",
    answerI18n: {
      fr: "Ces formes se forment parce que les vents chargés de sable sont plus forts près du sol. La base de la roche s'érode donc beaucoup plus vite que le sommet, créant avec le temps la forme familière de champignon.",
      de: "Diese Formen entstehen, weil sandbeladene Winde in Bodennähe stärker sind. Die Basis des Felsens erodiert daher viel schneller als die Spitze, was im Laufe der Zeit zur vertrauten Pilzform führt.",
      es: "Estas formas se forman porque los vientos cargados de arena son más fuertes cerca del suelo. La base de la roca erosiona mucho más rápido que la cima, creando con el tiempo la familiar forma de seta.",
      it: "Queste forme si formano perché i venti carichi di sabbia sono più forti vicino al suolo. La base della roccia si erode molto più velocemente della cima, portando nel tempo alla familiare forma di fungo.",
      nl: "Deze vormen ontstaan omdat zandbeladen winden sterker zijn dicht bij de grond. De basis van de rots erodeert daardoor veel sneller dan de top, wat in de loop van de tijd de vertrouwde paddenstoelvorm oplevert.",
      pt: "Essas formas se formam porque os ventos carregados de areia são mais fortes perto do solo. A base da rocha erode muito mais rápido do que o topo, levando ao longo do tempo à familiar forma de cogumelo.",
      zh: "这些形态（蘑菇岩）的形成是因为靠近地面的含沙风更强更密。因此，岩石底部的侵蚀速度远快于顶部，随着时间推移形成了熟悉的蘑菇形状。",
    },
    sortOrder: 3,
  },
];

// ─── RELATED TRAP IDs ─────────────────────────────────────────────────────────
// 2-day Black & White Desert Camping: ID 32
// 3-day Black and White Desert Camp: ID 46
// 3-day Black and White Desert & Jara Cave: ID 45
// 5-day Black Desert, White Desert, Jara Cave and Bahariya: ID 38

const relatedTrapIds = [32, 46, 45, 38];

// ─── INSERT ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("Creating blog: geology-black-white-desert-formations...");

  const blog = await prisma.blog.create({
    data: {
      slug: "geology-black-white-desert-formations",
      titleEn,
      titleAr,
      titleI18n,
      contentEn,
      contentAr,
      contentI18n,
      excerptEn,
      excerptAr,
      excerptI18n,
      metaTitleEn,
      metaTitleAr,
      metaTitleI18n,
      metaDescriptionEn: metaDescEn,
      metaDescriptionAr: metaDescAr,
      metaDescriptionI18n: metaDescI18n,
      author: "Bedouin Trails Team",
      category: "Desert Guide",
      primaryKeywords: [
        "white desert geology egypt",
        "black desert egypt geological formations",
        "crystal mountain egypt",
        "cretaceous period egypt",
        "جيولوجيا الصحراء البيضاء",
        "جبل الكريستال",
      ],
      secondaryKeywords: [
        "western desert egypt",
        "white desert national park",
        "basalt black desert",
        "chalk formations egypt",
        "bedouin safari egypt",
        "صخور الصحراء السوداء البركانية",
        "العصر الطباشيري مصر",
      ],
      readingTime: 15,
      isPublished: true,
      publishedAt: new Date(),
    },
  });

  console.log("Blog created with ID:", blog.id);

  // Insert FAQs
  console.log("Adding FAQs...");
  for (const faq of faqs) {
    await prisma.blogFaq.create({
      data: {
        blogId: blog.id,
        questionEn: faq.questionEn,
        questionAr: faq.questionAr,
        questionI18n: faq.questionI18n,
        answerEn: faq.answerEn,
        answerAr: faq.answerAr,
        answerI18n: faq.answerI18n,
        sortOrder: faq.sortOrder,
      },
    });
  }
  console.log("FAQs added:", faqs.length);

  // Link related traps
  console.log("Linking related trips...");
  for (let i = 0; i < relatedTrapIds.length; i++) {
    await prisma.blogRelatedTrap.create({
      data: {
        blogId: blog.id,
        trapId: relatedTrapIds[i],
        sortOrder: i,
      },
    });
  }
  console.log("Related trips linked:", relatedTrapIds.length);

  console.log("\n✓ Blog successfully inserted!");
  console.log("  Slug:", blog.slug);
  console.log("  ID:", blog.id);
  console.log("  Published:", blog.isPublished);
}

main()
  .catch((e) => {
    console.error("Error:", e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
