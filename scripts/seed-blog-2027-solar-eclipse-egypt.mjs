import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── Arabic content ───
const contentAr = `<h3>مقدمة: ظل يمتد ست دقائق</h3>
<p>بعد ظهر يوم الاثنين الموافق 2 أغسطس 2027، سينزلق القمر مباشرة بين الأرض والشمس، ولشريط ضيق من الأراضي المصرية، سيتحول النهار فجأة إلى شفق قصير. أطلق علماء الفلك على هذا الحدث لقب "كسوف القرن" - ليس لأن الكسوف الكلي نادر الحدوث في حد ذاته، بل بسبب طول مدته غير المعتاد. سيمتد الكسوف الكلي لأكثر من ست دقائق في بعض المواقع، أي أكثر من ضعف متوسط مدة الكسوف الكلي النموذجي، وتقع مصر تقريبًا في النقطة التي يبقى فيها ظل القمر لأطول وقت على الإطلاق. بالنسبة لبلد تجذب صحاريه بالفعل محبي رصد النجوم من كل أنحاء العالم، يمثل كسوف 2027 فرصة لا تتكرر إلا مرة كل جيل لتخطيط رحلة حول السماء بدلاً من الأرض - والصحراء الغربية المصرية لها مقعد حقيقي ومؤكد على طاولة هذا الحدث.</p>

<h3>ما الذي يجعل كسوف أغسطس 2027 استثنائيًا إلى هذا الحد؟</h3>
<p>تمر معظم الكسوفات الكلية للشمس بسرعة، إذ غالبًا ما تستمر مرحلة الكسوف الكلي بين دقيقتين وأربع دقائق قبل أن يتابع ظل القمر مساره. أما كسوف 2027 فهو استثنائي لأن القمر سيكون قريبًا من أقرب نقطة له من الأرض، بينما تكون الأرض في الوقت نفسه قريبة من أبعد نقطة لها عن الشمس، ما يجعل القمر يبدو أكبر من المعتاد في السماء والشمس أصغر من المعتاد. وبالإضافة إلى أن المسار يمر قريبًا من خط الاستواء، حيث يتحرك الظل بشكل أبطأ فوق سطح الأرض، تصل مدة الكسوف الكلي إلى ذروتها عند نحو 6 دقائق و23 ثانية - وهي أطول مدة كسوف كلي للشمس بين عامي 1991 و2114. يبدأ المسار فوق المحيط الأطلسي، ويمر عبر إسبانيا والمغرب والجزائر وليبيا ومصر، ثم يواصل طريقه عبر السعودية واليمن والصومال قبل أن ينتهي فوق المحيط الهندي. تُعد مصر من أفضل الدول موقعًا على طول هذا المسار بأكمله، وتوفر صحاريها الواقعة غرب النيل بعضًا من أصفى الأجواء وأكثرها جفافًا في أي مكان على مسار الكسوف.</p>

<h3>قراءة المسار: أين يقع الكسوف الكلي فعليًا داخل مصر؟</h3>
<p>ليست كل أجزاء مصر ستشهد كسوفًا كليًا، وهذا التمييز أهم من أي تفصيل آخر عند التخطيط لرحلة المشاهدة. تقع القاهرة والجيزة خارج مسار الكسوف الكلي بقليل، إذ تُغطى الشمس عند الذروة بنسبة تتراوح بين 94% و95% فقط - وهو مشهد مثير، لكنه يظل نهارًا. أما أسوان وأبو سمبل فتفوتهما لحظة الكسوف الكلي تقريبًا بالكامل. يدخل المسار الحقيقي مصر من الشمال الغربي عند واحة سيوة، ثم يمتد قطريًا باتجاه الجنوب الشرقي عبر البلاد قبل أن يخرج فوق البحر الأحمر قرب مرسى علم وبرنيس.</p>
<table><thead><tr><th>الموقع</th><th>مدة الكسوف الكلي</th><th>التوقيت المحلي التقريبي</th></tr></thead><tbody><tr><td>واحة سيوة</td><td>≈ 5 دقائق 33 ثانية</td><td>12:42 ظهرًا</td></tr><tr><td>واحة البحرية</td><td>≈ 6 دقائق 19–21 ثانية</td><td>12:50 ظهرًا</td></tr><tr><td>أسيوط</td><td>≈ 6 دقائق 6 ثوانٍ</td><td>—</td></tr><tr><td>سوهاج</td><td>≈ 6 دقائق 20 ثانية</td><td>12:58 ظهرًا</td></tr><tr><td>الأقصر</td><td>≈ 6 دقائق 19–23 ثانية</td><td>13:02–13:05</td></tr><tr><td>برنيس</td><td>≈ 6 دقائق 20 ثانية</td><td>13:10</td></tr></tbody></table>
<p>على طول هذا الخط، تشهد واحة سيوة كسوفًا كليًا يمتد لنحو 5 دقائق و33 ثانية عند الساعة 12:42 ظهرًا تقريبًا بالتوقيت المحلي، والشمس في أعلى نقطة لها في السماء. وباتجاه الجنوب الشرقي، تقع واحة البحرية - بوابة الصحراء السوداء والبيضاء في مصر - تقريبًا على خط مركز المسار تمامًا، وتسجل كسوفًا كليًا يمتد نحو 6 دقائق و19 إلى 21 ثانية عند الساعة 12:50 ظهرًا تقريبًا، وهي مدة تقترب كثيرًا من تلك المسجلة في الأقصر نفسها. تسجل أسيوط نحو 6 دقائق و6 ثوانٍ، وسوهاج نحو 6 دقائق و20 ثانية، بينما تسجل الأقصر نحو 6 دقائق بين 19 و23 ثانية، مع وقوع أطول لحظة في الكسوف بأكمله - نحو 6 دقائق و23 ثانية - جنوب شرق الأقصر مباشرة، قرب حدود محافظة الوادي الجديد.</p>

<h3>لماذا تستحق الصحراء الغربية الاختيار بدلاً من وادي النيل؟</h3>
<p>ستجذب الأقصر بطبيعة الحال أكبر الحشود في 2027 - فمعابدها وفنادقها وبنيتها التحتية موجودة بالفعل، وست دقائق من الكسوف الكلي فوق وادي الملوك احتمال استثنائي حقًا على الورق. لكن بالنسبة لمن اكتشفوا بالفعل سبب قضائنا لياليَنا في <a href="/ar/blogs/stargazing-egypt-desert">مراقبة النجوم في صحراء مصر</a>، أو من قرأوا دليلنا عن <a href="/ar/blogs/astrotourism-white-desert-stargazing">سياحة الفلك في الصحراء البيضاء</a>، فإن جاذبية مشاهدة الكسوف الكلي من صحراء مفتوحة بدلاً من كورنيش نهري مزدحم لا تحتاج إلى شرح كبير. تمنحك الصحراء الغربية أفقًا مفتوحًا بزاوية 360 درجة دون انقطاع، وخلوًا من الازدحام المتوقع على امتداد النيل في أوائل أغسطس 2027، كما تتمتع - بحسب خبراء الأرصاد الجوية الذين يتابعون مسار الكسوف - بواحدة من أكثر ظروف الصفاء الجوي موثوقية على طول المسار بأكمله، حيث يُعد الغبار والضباب الجوي قلقًا أكبر من الغيوم. وتتميز واحة البحرية تحديدًا بسجل تاريخي لنسبة غيوم شبه معدومة في شهر أغسطس، بالإضافة إلى مدة كسوف كلي تقترب من مدة الأقصر نفسها بثوانٍ معدودة.</p>

<h3>واحة البحرية: وجهتنا الموصى بها للمشاهدة</h3>
<p>بالنسبة لرحلة كسوف قائمة على الصحراء الغربية، تُعد واحة البحرية الخيار الأوضح المتاح. فهي تقع تقريبًا على خط مركز مسار الكسوف تمامًا، وهي البوابة التي نستخدمها بالفعل في رحلاتنا إلى <a href="/ar/blogs/bahariya-oasis-egypt-guide">واحة البحرية</a> نحو الصحراء السوداء والبيضاء، كما توفر مزيجًا واقعيًا من عتمة السماء المفتوحة مع قدر كافٍ من البنية التحتية الأساسية - بيوت ضيافة ومياه ووقود - لدعم رحلة متعددة الأيام تُبنى حول حدث فريد لا يتكرر. نهجنا الموصى به هو أن تتخذ من البحرية أو ما حولها قاعدة لك في صباح يوم 2 أغسطس، وتشاهد الكسوف الكلي من نقطة مفتوحة خارج البلدة حيث لا تؤثر الأضواء الصناعية على المشهد، ثم تكمل الرحلة نفسها نحو تكوينات الصحراء البيضاء الطباشيرية في الأيام التالية. تمنحك البحرية مدة كسوف شبه مماثلة للأقصر دون ازدحام الأقصر، وتُهيئك تمامًا لتجربة التخييم في الصحراء السوداء والبيضاء التي تأتي عادة بعدها.</p>

<h3>التخطيط حول حرارة أغسطس - نصيحة مختلفة عن المعتاد</h3>
<p>إذا كنت قد قرأت دليلنا عن <a href="/ar/blogs/best-time-visit-egypt-desert">أفضل وقت لزيارة صحراء مصر</a>، فأنت تعلم أننا ننصح عادة بالفترة من أكتوبر إلى أبريل، حين تكون درجات الحرارة نهارًا أكثر اعتدالًا بكثير. يمثل شهر أغسطس استثناءً متعمدًا هنا: فدرجات الحرارة نهارًا في الصحراء الغربية تتجاوز عادة 40 درجة مئوية، ويستحق هذا الحدث أن تخطط حول هذه الحرارة بدلاً من تجنبها. احرص على أن تكون في موقعك قبل بدء الكسوف الكلي بوقت كافٍ، حوالي الساعة 12:50 ظهرًا، واحمل كمية مياه أكبر بكثير مما تتوقع، وتجنب أي نشاط غير ضروري في منتصف النهار خارج نافذة الكسوف نفسها. والخبر الجيد أن نفس الهواء الجاف الذي يُبقي السماء صافية من أجل الكسوف يجعل الساعة المحيطة بلحظة الكسوف الكلي - حين تنخفض الحرارة لحظيًا مع إظلام السماء - مريحة بالفعل. وإذا كانت فكرة قضاء ليلة كاملة تحت النجوم، سواء قبل الكسوف أو بعده، تستهويك، فإن دليلنا عن <a href="/ar/blogs/white-desert-camping-egypt">التخييم في الصحراء البيضاء</a> يشرح بالتفصيل ما تعنيه المبيتة الصحراوية فعليًا.</p>

<h3>ماذا تحزم ليوم الكسوف؟</h3>
<p>بالإضافة إلى أساسيات سفاري الصحراء المعتادة التي يغطيها <a href="/ar/blogs/what-to-pack-egypt-desert-safari">دليل التحزيم</a> الخاص بنا، يأتي يوم الكسوف بقائمة قصيرة من المستلزمات الإضافية غير القابلة للتفاوض. نظارات الكسوف المعتمدة وفق معايير ISO ضرورية خلال المراحل الجزئية قبل الكسوف الكلي وبعده - فالنظارات الشمسية العادية، مهما كانت داكنة، لا تحمي عينيك. وإذا كنت تخطط لتصوير الحدث، فإن فلتر الشمس الخاص بعدسة الكاميرا لا يقل أهمية عن حماية العين، ويُعد <a href="/ar/blogs/desert-photography-tips-egypt">دليل تصوير الصحراء</a> الخاص بنا نقطة انطلاق مفيدة للتعامل مع الضوء الفريد في الصحراء الغربية حتى خارج ظروف الكسوف. احزم قبعة واسعة الحواف، ومكملات الأملاح المعدنية، وطبقة خفيفة طويلة الأكمام - وهي، على عكس المتوقع، من أفضل وسائل الدفاع ضد حرارة الصحراء. ويستحق كرسي قابل للطي أو حصيرة بسيطة الوزن الإضافي خلال ساعة الانتظار قبل بدء الكسوف الكلي.</p>

<h3>احجز مبكرًا: هذه ليست رحلة تؤجَّل</h3>
<p>تنفد عادة أماكن الإقامة ووسائل النقل على طول مسار الكسوفات الكلية للشمس قبل سنوات من موعدها، والبنية التحتية الصحراوية في مصر محدودة فعليًا مقارنة بالطاقة الاستيعابية لفنادق وادي النيل. إذا كنت تخطط لرحلة كسوف في الصحراء الغربية، فاعتبر الأشهر المقبلة نافذتك للتخطيط، لا بداية عام 2027. يستعرض دليلنا عن <a href="/ar/blogs/how-to-plan-egypt-desert-safari">كيفية التخطيط لأول سفاري صحراء في مصر</a> المهل الزمنية والترتيبات اللوجستية التي يستحق تنظيمها مبكرًا، بينما تغطي ملاحظاتنا حول <a href="/ar/blogs/is-egypt-desert-safe-to-visit">سلامة الصحراء</a> و<a href="/ar/blogs/cairo-to-white-desert-transport-options">كيفية الوصول من القاهرة إلى الصحراء البيضاء</a> الجانب العملي للرحلة نفسها. ستكون أحجام المجموعات في رحلات الكسوف المخصصة محدودة قبل أغسطس 2027 بوقت طويل - الحجز المبكر هنا ليس مبالغة، بل واقعية بحتة.</p>

<h3>خاتمة</h3>
<p>لا تتكرر كسوفات شمسية كلية بهذا الطول لنفس جيل المسافرين - فالكسوف التالي الذي يتجاوز ست دقائق من الكسوف الكلي لن يحدث قبل عام 2150. تقع الصحراء الغربية المصرية تقريبًا في النقطة التي يبقى فيها ظل القمر لأطول وقت، ما يمنحها عتمة تقترب من عتمة الأقصر مع جزء يسير فقط من حشودها، وبعضًا من أصفى سماوات مسار الكسوف بأكمله. ستكون واحة البحرية هي قاعدتنا لاستضافة ضيوفنا يوم الكسوف في أغسطس 2027، ويسعدنا مساعدتك في التخطيط لها.</p>`;

// ─── English content ───
const contentEn = `<h3>Introduction: A Shadow Six Minutes Wide</h3>
<p>On the afternoon of Monday, August 2, 2027, the Moon will slide directly between the Earth and the Sun, and for a narrow band of Egyptian territory, day will briefly turn to dusk. Astronomers have already nicknamed it the "eclipse of the century" — not because total eclipses themselves are rare, but because of how unusually long this one lasts. Totality will stretch past six minutes in places, more than double the duration of a typical total solar eclipse, and Egypt happens to sit almost exactly on the point where the Moon's shadow lingers longest. For a country whose deserts already draw stargazers from around the world, the 2027 eclipse is a once-in-a-generation reason to plan a trip around the sky rather than the ground beneath it — and Egypt's Western Desert has a real, confirmed seat at the table.</p>

<h3>What Makes the August 2027 Eclipse So Unusual</h3>
<p>Most total solar eclipses pass quickly, with totality often lasting two to four minutes before the Moon's shadow races onward. The 2027 eclipse is exceptional because the Moon will be near its closest approach to Earth while the Earth itself is near its farthest point from the Sun, making the Moon appear unusually large and the Sun unusually small in the sky. Combined with a path that crosses close to the equator, where the shadow moves more slowly across the ground, totality reaches a maximum of roughly 6 minutes 23 seconds — the longest of any total solar eclipse between 1991 and 2114. The path begins over the Atlantic, crosses Spain, Morocco, Algeria, Libya and Egypt, then continues over Saudi Arabia, Yemen and Somalia before ending over the Indian Ocean. Egypt is one of the best-positioned countries on the route, and the deserts west of the Nile offer some of the clearest, driest air found anywhere along it.</p>

<h3>Reading the Path: Where Totality Actually Falls in Egypt</h3>
<p>Not every part of Egypt will experience a total eclipse, and this distinction matters more than any other when planning a trip. Cairo and Giza fall just outside the path, with roughly 94–95% of the Sun covered at maximum — dramatic, but still daylight. Aswan and Abu Simbel miss totality almost entirely. The true path enters Egypt from the northwest at Siwa Oasis and runs diagonally southeast across the country before exiting over the Red Sea near Marsa Alam and Berenice.</p>
<table><thead><tr><th>Location</th><th>Totality Duration</th><th>Approx. Local Time</th></tr></thead><tbody><tr><td>Siwa Oasis</td><td>≈ 5 min 33 sec</td><td>12:42 pm</td></tr><tr><td>Bahariya Oasis</td><td>≈ 6 min 19–21 sec</td><td>12:50 pm</td></tr><tr><td>Asyut</td><td>≈ 6 min 6 sec</td><td>—</td></tr><tr><td>Sohag</td><td>≈ 6 min 20 sec</td><td>12:58 pm</td></tr><tr><td>Luxor</td><td>≈ 6 min 19–23 sec</td><td>1:02–1:05 pm</td></tr><tr><td>Berenice (Red Sea coast)</td><td>≈ 6 min 20 sec</td><td>1:10 pm</td></tr></tbody></table>
<p>Along that line, Siwa Oasis sees around 5 minutes 33 seconds of totality at roughly 12:42 pm local time, with the Sun high overhead. Continuing southeast, Bahariya Oasis — the gateway to Egypt's Black and White Deserts — sits almost exactly on the centerline, recording totality of about 6 minutes 19–21 seconds at roughly 12:50 pm, nearly matching the duration recorded at Luxor itself. Asyut records around 6 minutes 6 seconds, Sohag about 6 minutes 20 seconds, and Luxor roughly 6 minutes 19–23 seconds, with the single longest point of the entire eclipse — about 6 minutes 23 seconds — falling just southeast of Luxor, near the edge of New Valley Governorate.</p>

<h3>Why the Western Desert Is Worth Choosing Over the Nile Valley</h3>
<p>Luxor will understandably draw the largest crowds in 2027 — its temples, hotels and infrastructure already exist, and six minutes of totality over the Valley of the Kings is a genuinely extraordinary prospect on paper. But for travelers who already understand why we spend our nights <a href="/en/blogs/stargazing-egypt-desert">stargazing in Egypt's desert</a>, or who have read our guide to <a href="/en/blogs/astrotourism-white-desert-stargazing">astrotourism in the White Desert</a>, the appeal of watching totality from open desert rather than a crowded riverside promenade needs little explanation. The Western Desert offers an unbroken, 360-degree horizon, none of the congestion expected along the Nile in early August 2027, and — according to meteorologists tracking the eclipse — some of the most reliable clear-sky conditions on the entire path, where dust and haze are a bigger concern than cloud cover. Bahariya Oasis in particular has a recorded history of close to zero average cloud cover in August, with a duration of totality within seconds of Luxor's own.</p>

<h3>Bahariya Oasis: Our Recommended Viewing Ground</h3>
<p>For a Western Desert-based eclipse trip, Bahariya Oasis is the clearest choice available. It sits almost exactly on the eclipse's centerline, it is the gateway we already use for our <a href="/en/blogs/bahariya-oasis-egypt-guide">Bahariya Oasis</a> journeys into the Black and White Deserts, and it offers a realistic combination of open-sky darkness with enough basic infrastructure — guesthouses, water, fuel — to support a multi-day trip built around a single, unrepeatable event. Our recommended approach is to base yourself in or near Bahariya for the morning of August 2, watch totality from an open viewpoint beyond the town where artificial light has no influence on the view, then continue the same trip into the White Desert's chalk formations over the following days. This also means you are not depending on the deeper desert interior around Farafra and the White Desert's protected core, which sits further from the confirmed centerline. Bahariya offers nearly Luxor-level totality without Luxor-level crowds, and it sets you up perfectly for the Black and White Desert camping that typically follows.</p>

<h3>Planning Around August Heat — Not Our Usual Advice</h3>
<p>If you've read our guide to <a href="/en/blogs/best-time-visit-egypt-desert">the best time to visit Egypt's desert</a>, you'll know we generally recommend October through April, when daytime temperatures are far more forgiving. August is a deliberate exception here: daytime temperatures in the Western Desert routinely exceed 40°C (104°F), and this trip is worth planning around that heat rather than avoiding it. Plan to be in position well before totality begins at roughly 12:50 pm, carry considerably more water than you think you'll need, and avoid unnecessary midday activity outside the eclipse window itself. The good news is that the same dry air that keeps the sky clear for the eclipse also makes the hour around totality — when the temperature briefly drops as the sky darkens — genuinely comfortable. If a full night under the stars appeals to you either before or after the eclipse, our guide to <a href="/en/blogs/white-desert-camping-egypt">White Desert camping</a> covers what an overnight in the desert actually involves.</p>

<h3>What to Pack for Eclipse Day</h3>
<p>Beyond the usual desert safari essentials covered in our <a href="/en/blogs/what-to-pack-egypt-desert-safari">packing guide</a>, eclipse day comes with its own short list of non-negotiables. ISO-certified eclipse glasses are essential for the partial phases before and after totality — regular sunglasses, however dark, do not protect your eyes. If you plan to photograph the event, a solar filter for your camera lens matters just as much as one for your eyes, and our <a href="/en/blogs/desert-photography-tips-egypt">desert photography guide</a> is a useful starting point for working with the Western Desert's unusual light even outside eclipse conditions. Pack a wide-brimmed hat, electrolyte supplements, and a lightweight long-sleeved layer — counterintuitively one of the best defenses against desert heat. A simple folding chair or mat is worth the extra weight for the hour of waiting before totality begins.</p>

<h3>Booking Early: This Isn't a Trip to Leave Until Later</h3>
<p>Total solar eclipses reliably sell out accommodation and transport along their path years in advance, and Egypt's desert infrastructure is genuinely limited compared to the Nile Valley's hotel capacity. If you're planning a Western Desert eclipse trip, treat the months ahead as your planning window, not early 2027. Our guide on <a href="/en/blogs/how-to-plan-egypt-desert-safari">how to plan your first Egypt desert safari</a> covers lead times and logistics worth sorting out early, and our notes on <a href="/en/blogs/is-egypt-desert-safe-to-visit">desert safety</a> and <a href="/en/blogs/cairo-to-white-desert-transport-options">getting from Cairo to the White Desert</a> cover the journey itself. Group sizes for eclipse-specific departures will be limited well before August 2027 — booking far ahead here is simply realistic.</p>

<h3>Conclusion</h3>
<p>Total solar eclipses of this length do not repeat for the same generation of travelers — the next eclipse to exceed six minutes of totality will not occur until 2150. Egypt's Western Desert happens to sit almost exactly where the Moon's shadow lingers longest, offering nearly the same darkness as Luxor with a fraction of the crowds and some of the clearest skies anywhere along the eclipse's path. Bahariya Oasis is where we'll be basing our own eclipse-day guests in August 2027, and we would be glad to help you plan around it.</p>`;

// ─── i18n content (fr, de, es, it, nl, pt, zh) ───
const contentI18n = JSON.stringify({
  fr: `<h3>Introduction : Une Ombre de Six Minutes</h3>
<p>L'après-midi du lundi 2 août 2027, la Lune se glissera directement entre la Terre et le Soleil, et pour une étroite bande du territoire égyptien, le jour se transformera brièvement en crépuscule. Les astronomes l'ont déjà surnommé "l'éclipse du siècle" — non pas parce que les éclipses totales sont rares, mais en raison de sa durée inhabituellement longue. La totalité s'étendra sur plus de six minutes par endroits, soit plus du double d'une éclipse totale typique, et l'Égypte se trouve presque exactement au point où l'ombre de la Lune s'attarde le plus longtemps.</p>
<h3>Ce qui rend l'éclipse d'août 2027 si exceptionnelle</h3>
<p>La plupart des éclipses totales passent rapidement, la totalité durant souvent deux à quatre minutes. L'éclipse de 2027 est exceptionnelle car la Lune sera proche de son approche la plus proche de la Terre tandis que la Terre sera près de son point le plus éloigné du Soleil. Combiné à un trajet proche de l'équateur, la totalité atteint un maximum d'environ 6 minutes 23 secondes — la plus longue entre 1991 et 2114. Le chemin commence sur l'Atlantique, traverse l'Espagne, le Maroc, l'Algérie, la Libye et l'Égypte.</p>
<h3>Lire le trajet : où tombe la totalité en Égypte</h3>
<p>Le Caire et Gizeh se trouvent juste en dehors du trajet, avec environ 94 à 95 % du Soleil couvert — spectaculaire, mais encore en plein jour. Le vrai trajet entre en Égypte par le nord-ouest à l'Oasis de Siwa et traverse le pays en diagonale vers le sud-est avant de sortir sur la mer Rouge. L'Oasis de Bahariya — la porte des Déserts Noir et Blanc — se trouve presque exactement sur la ligne centrale, avec environ 6 minutes 19–21 secondes de totalité vers 12h50.</p>
<h3>Pourquoi le Désert Occidental vaut mieux que la Vallée du Nil</h3>
<p>Louxor attirera naturellement les plus grandes foules en 2027. Mais le Désert Occidental offre un horizon de 360 degrés sans obstacle, aucune congestion attendue, et certaines des conditions de ciel dégagé les plus fiables sur tout le trajet. L'Oasis de Bahariya a un historique proche de zéro nuage en août, avec une totalité quasiment identique à Louxor.</p>
<h3>Oasis de Bahariya : notre site de visionnage recommandé</h3>
<p>Pour un voyage d'éclipse dans le Désert Occidental, l'Oasis de Bahariya est le choix le plus clair. Notre approche recommandée est de vous établir à Bahariya le matin du 2 août, d'observer la totalité depuis un point de vue ouvert hors de la ville, puis de continuer vers les formations du Désert Blanc.</p>
<h3>Planification autour de la chaleur d'août</h3>
<p>Nous recommandons généralement octobre à avril pour visiter le désert égyptien. Août est une exception délibérée ici : les températures dépassent régulièrement 40°C (104°F). Soyez en position bien avant 12h50, emportez bien plus d'eau que prévu, et évitez toute activité inutile en milieu de journée.</p>
<h3>Que mettre dans votre sac pour le jour de l'éclipse</h3>
<p>Des lunettes d'éclipse certifiées ISO sont indispensables pour les phases partielles — les lunettes de soleil ordinaires ne protègent pas vos yeux. Si vous prévoyez de photographier l'événement, un filtre solaire pour votre objectif est tout aussi important. Emportez un chapeau à large bord, des suppléments électrolytiques et une couche légère à manches longues.</p>
<h3>Réservez tôt : ce n'est pas un voyage à remettre à plus tard</h3>
<p>Les éclipses totales épuisent systématiquement les hébergements et les transports le long de leur trajet des années à l'avance. Si vous planifiez un voyage d'éclipse dans le Désert Occidental, considérez les mois à venir comme votre fenêtre de planification, pas le début 2027.</p>
<h3>Conclusion</h3>
<p>Les éclipses solaires totales de cette durée ne se répètent pas pour la même génération de voyageurs — la prochaine éclipse dépassant six minutes de totalité n'aura pas lieu avant 2150. Le Désert Occidental égyptien offre presque la même obscurité que Louxor avec une fraction de la foule et certains des ciels les plus clairs sur tout le trajet de l'éclipse.</p>`,

  de: `<h3>Einleitung: Ein Schatten von sechs Minuten</h3>
<p>Am Nachmittag des Montags, dem 2. August 2027, wird der Mond sich direkt zwischen Erde und Sonne schieben, und für ein schmales Band ägyptischen Territoriums wird der Tag kurz zur Dämmerung. Astronomen haben es bereits "Jahrhundertfinsternis" genannt — nicht weil totale Sonnenfinsternisse selten sind, sondern wegen ihrer ungewöhnlich langen Dauer. Die Totalität wird sich über sechs Minuten erstrecken, mehr als das Doppelte einer typischen totalen Sonnenfinsternis.</p>
<h3>Was die Sonnenfinsternis August 2027 so außergewöhnlich macht</h3>
<p>Die meisten totalen Sonnenfinsternisse verlaufen schnell. Die Finsternis 2027 ist außergewöhnlich, weil sich der Mond in der Nähe seiner größten Erdnähe befindet, während die Erde sich nahe ihrem fernsten Punkt von der Sonne befindet. Die Totalität erreicht ein Maximum von etwa 6 Minuten 23 Sekunden — die längste zwischen 1991 und 2114. Der Weg beginnt über dem Atlantik, durchquert Spanien, Marokko, Algerien, Libyen und Ägypten.</p>
<h3>Den Pfad lesen: Wo fällt die Totalität in Ägypten?</h3>
<p>Kairo und Gizeh liegen knapp außerhalb des Pfades. Der wahre Pfad tritt in Ägypten von Nordwesten bei der Siwa-Oase ein. Die Bahariya-Oase — Tor zur Schwarzen und Weißen Wüste — liegt fast genau auf der Mittellinie, mit etwa 6 Minuten 19–21 Sekunden Totalität um 12:50 Uhr.</p>
<h3>Warum die Westliche Wüste besser als das Niltal ist</h3>
<p>Luxor wird 2027 die größten Massen anziehen. Aber die Westliche Wüste bietet einen ungebrochenen 360-Grad-Horizont, keine Überfüllung und einige der zuverlässigsten Klarbedingungen auf dem gesamten Pfad. Die Bahariya-Oase hat eine aufgezeichnete Geschichte von nahezu null durchschnittlicher Wolkenbedeckung im August.</p>
<h3>Bahariya-Oase: Unser empfohlener Beobachtungsort</h3>
<p>Für eine Finsternis-Reise in der Westlichen Wüste ist die Bahariya-Oase die klarste Wahl. Wir empfehlen, sich am Morgen des 2. August in Bahariya einzurichten, die Totalität von einem offenen Aussichtspunkt außerhalb der Stadt zu beobachten, und dann die Reise in die Weißen Wüstenformationen fortzusetzen.</p>
<h3>Planung um die Augusthitze herum</h3>
<p>Wir empfehlen generell Oktober bis April für Wüstenbesuche in Ägypten. August ist hier eine bewusste Ausnahme: Temperaturen überschreiten regelmäßig 40°C. Seien Sie gut vor 12:50 Uhr in Position, tragen Sie erheblich mehr Wasser als nötig erscheint, und vermeiden Sie unnötige Mittagsaktivitäten außerhalb des Finsternisfensters.</p>
<h3>Was Sie für den Finsternistag einpacken sollten</h3>
<p>ISO-zertifizierte Finsternisbrillen sind für die partiellen Phasen unerlässlich — normale Sonnenbrillen schützen Ihre Augen nicht. Wenn Sie das Ereignis fotografieren möchten, ist ein Sonnenfilter für Ihr Kameraobjektiv genauso wichtig. Packen Sie einen breitkrempigen Hut, Elektrolytpräparate und eine leichte Schicht mit langen Ärmeln ein.</p>
<h3>Früh buchen: Das ist keine Reise, die man auf später verschieben sollte</h3>
<p>Totale Sonnenfinsternisse verkaufen verlässlich Unterkünfte und Transport entlang ihres Pfades Jahre im Voraus aus. Wenn Sie eine Finsternis-Reise in der Westlichen Wüste planen, behandeln Sie die kommenden Monate als Ihr Planungsfenster, nicht Anfang 2027.</p>
<h3>Fazit</h3>
<p>Totale Sonnenfinsternisse dieser Länge wiederholen sich nicht für dieselbe Reisegeneration — die nächste Finsternis, die sechs Minuten Totalität überschreitet, wird nicht vor 2150 auftreten. Die ägyptische Westliche Wüste bietet fast die gleiche Dunkelheit wie Luxor mit einem Bruchteil der Massen.</p>`,

  es: `<h3>Introducción: Una Sombra de Seis Minutos</h3>
<p>En la tarde del lunes 2 de agosto de 2027, la Luna se deslizará directamente entre la Tierra y el Sol, y para una estrecha franja del territorio egipcio, el día se convertirá brevemente en crepúsculo. Los astrónomos ya lo han apodado "el eclipse del siglo" — no porque los eclipses totales en sí mismos sean raros, sino por su duración inusualmente larga. La totalidad se extenderá más de seis minutos en algunos lugares, más del doble de un eclipse total típico.</p>
<h3>Qué hace tan excepcional al eclipse de agosto 2027</h3>
<p>La mayoría de los eclipses totales pasan rápidamente. El eclipse de 2027 es excepcional porque la Luna estará cerca de su mayor acercamiento a la Tierra mientras la Tierra está cerca de su punto más lejano del Sol. La totalidad alcanza un máximo de aproximadamente 6 minutos 23 segundos — el más largo entre 1991 y 2114. El camino comienza sobre el Atlántico, atraviesa España, Marruecos, Argelia, Libia y Egipto.</p>
<h3>Leyendo el camino: dónde cae realmente la totalidad en Egipto</h3>
<p>El Cairo y Gizeh quedan justo fuera del camino. El camino verdadero entra en Egipto desde el noroeste en el Oasis de Siwa. El Oasis de Bahariya — la puerta de los Desiertos Negro y Blanco — se sitúa casi exactamente en la línea central, con aproximadamente 6 minutos 19–21 segundos de totalidad alrededor de las 12:50.</p>
<h3>Por qué el Desierto Occidental vale más que el Valle del Nilo</h3>
<p>Luxor atraerá naturalmente a las mayores multitudes en 2027. Pero el Desierto Occidental ofrece un horizonte de 360 grados sin obstáculos, ninguna congestión esperada, y algunas de las condiciones de cielo despejado más fiables de todo el camino. El Oasis de Bahariya tiene un historial de casi cero cobertura de nubes en agosto.</p>
<h3>Oasis de Bahariya: nuestro lugar de observación recomendado</h3>
<p>Para un viaje de eclipse en el Desierto Occidental, el Oasis de Bahariya es la elección más clara. Recomendamos establecerse en Bahariya la mañana del 2 de agosto, observar la totalidad desde un punto de vista abierto fuera del pueblo, y luego continuar el mismo viaje hacia las formaciones del Desierto Blanco.</p>
<h3>Planificación alrededor del calor de agosto</h3>
<p>Generalmente recomendamos de octubre a abril para visitar el desierto egipcio. Agosto es una excepción deliberada aquí: las temperaturas superan regularmente los 40°C (104°F). Esté en posición bien antes de las 12:50, lleve considerablemente más agua de la que cree necesitar, y evite actividades innecesarias a mediodía fuera de la ventana del eclipse.</p>
<h3>Qué empacar para el día del eclipse</h3>
<p>Las gafas de eclipse con certificación ISO son esenciales para las fases parciales — las gafas de sol normales no protegen sus ojos. Si planea fotografiar el evento, un filtro solar para su objetivo de cámara es igualmente importante. Lleve un sombrero de ala ancha, suplementos electrolíticos y una capa ligera de manga larga.</p>
<h3>Reserve pronto: este no es un viaje para dejar para después</h3>
<p>Los eclipses solares totales agotan de manera confiable el alojamiento y el transporte a lo largo de su camino con años de anticipación. Si está planeando un viaje de eclipse en el Desierto Occidental, trate los meses venideros como su ventana de planificación, no el inicio de 2027.</p>
<h3>Conclusión</h3>
<p>Los eclipses solares totales de esta duración no se repiten para la misma generación de viajeros — el próximo eclipse que supere seis minutos de totalidad no ocurrirá hasta 2150. El Desierto Occidental egipcio ofrece casi la misma oscuridad que Luxor con una fracción de las multitudes y algunos de los cielos más despejados en todo el camino del eclipse.</p>`,

  it: `<h3>Introduzione: Un'Ombra di Sei Minuti</h3>
<p>Nel pomeriggio di lunedì 2 agosto 2027, la Luna si scivolerà direttamente tra la Terra e il Sole, e per una stretta striscia di territorio egiziano, il giorno si trasformerà brevemente in crepuscolo. Gli astronomi l'hanno già soprannominata "l'eclissi del secolo" — non perché le eclissi totali siano rare, ma per la sua durata insolitamente lunga. La totalità si estenderà per oltre sei minuti in alcuni luoghi, più del doppio di un'eclissi totale tipica.</p>
<h3>Cosa rende così eccezionale l'eclissi di agosto 2027</h3>
<p>La maggior parte delle eclissi totali passano rapidamente. L'eclissi del 2027 è eccezionale perché la Luna sarà vicina al suo avvicinamento più vicino alla Terra mentre la Terra è vicina al suo punto più lontano dal Sole. La totalità raggiunge un massimo di circa 6 minuti 23 secondi — la più lunga tra il 1991 e il 2114. Il percorso inizia sull'Atlantico, attraversa Spagna, Marocco, Algeria, Libia ed Egitto.</p>
<h3>Leggere il percorso: dove cade davvero la totalità in Egitto</h3>
<p>Il Cairo e Giza si trovano appena fuori dal percorso. Il vero percorso entra in Egitto da nord-ovest all'Oasi di Siwa. L'Oasi di Bahariya — la porta dei Deserti Nero e Bianco — si trova quasi esattamente sulla linea centrale, con circa 6 minuti 19–21 secondi di totalità intorno alle 12:50.</p>
<h3>Perché il Deserto Occidentale vale più della Valle del Nilo</h3>
<p>Luxor attirerà naturalmente le folle più grandi nel 2027. Ma il Deserto Occidentale offre un orizzonte di 360 gradi ininterrotto, nessuna congestione prevista, e alcune delle condizioni di cielo sereno più affidabili sull'intero percorso. L'Oasi di Bahariya ha un storico di quasi zero copertura nuvolosa in agosto.</p>
<h3>Oasi di Bahariya: il nostro luogo di osservazione consigliato</h3>
<p>Per un viaggio in eclissi nel Deserto Occidentale, l'Oasi di Bahariya è la scelta più chiara. Il nostro approccio consigliato è di stabilirsi a Bahariya la mattina del 2 agosto, osservare la totalità da un punto panoramico aperto fuori dalla città, poi continuare lo stesso viaggio verso le formazioni del Deserto Bianco.</p>
<h3>Pianificazione intorno al calore di agosto</h3>
<p>Generalmente raccomandiamo da ottobre ad aprile per visitare il deserto egiziano. Agosto è un'eccezione deliberata qui: le temperature superano regolarmente i 40°C (104°F). Siate in posizione ben prima delle 12:50, portate considerevolmente più acqua di quella che pensate di aver bisogno, ed evitate attività inutili a mezzogiorno al di fuori della finestra dell'eclissi.</p>
<h3>Cosa mettere nello zaino per il giorno dell'eclissi</h3>
<p>Gli occhiali per l'eclissi certificati ISO sono essenziali per le fasi parziali — gli occhiali da sole normali non proteggono i vostri occhi. Se prevedete di fotografare l'evento, un filtro solare per il vostro obiettivo è ugualmente importante. Portate un cappello a tesa larga, integratori elettrolitici e uno strato leggero a maniche lunghe.</p>
<h3>Prenotate presto: questo non è un viaggio da rimandare</h3>
<p>Le eclissi solari totali esauriscono in modo affidabile sistemazioni e trasporti lungo il loro percorso con anni di anticipo. Se state pianificando un viaggio in eclissi nel Deserto Occidentale, considerate i mesi a venire come la vostra finestra di pianificazione, non l'inizio del 2027.</p>
<h3>Conclusione</h3>
<p>Le eclissi solari totali di questa durata non si ripetono per la stessa generazione di viaggiatori — la prossima eclissi che supera sei minuti di totalità non si verificherà fino al 2150. Il Deserto Occidentale egiziano offre quasi la stessa oscurità di Luxor con una frazione delle folle e alcuni dei cieli più limpidi lungo tutto il percorso dell'eclissi.</p>`,

  nl: `<h3>Inleiding: Een Schaduw van Zes Minuten</h3>
<p>Op de middag van maandag 2 augustus 2027 zal de Maan zich direct tussen de Aarde en de Zon schuiven, en voor een smalle strook Egyptisch grondgebied zal de dag kort in de schemering veranderen. Astronomen hebben het al "de eclips van de eeuw" genoemd — niet omdat totale eclipsen zeldzaam zijn, maar vanwege de ongebruikelijk lange duur. De totaliteit zal meer dan zes minuten duren op sommige plaatsen, meer dan het dubbele van een typische totale zonsverduistering.</p>
<h3>Wat de zonsverduistering van augustus 2027 zo uitzonderlijk maakt</h3>
<p>De meeste totale zonsverduisteringen gaan snel voorbij. De zonsverduistering van 2027 is uitzonderlijk omdat de Maan dicht bij zijn dichtstbijzijnde benadering tot de Aarde zal zijn terwijl de Aarde dicht bij zijn verste punt van de Zon is. De totaliteit bereikt een maximum van ongeveer 6 minuten 23 seconden — de langste tussen 1991 en 2114.</p>
<h3>Het pad lezen: waar valt de totaliteit in Egypte?</h3>
<p>Caïro en Gizeh vallen net buiten het pad. Het echte pad komt Egypte binnen vanuit het noordwesten bij de Siwa-Oase. De Bahariya-Oase — de toegangspoort tot de Zwarte en Witte Woestijn — ligt bijna precies op de middellijn, met ongeveer 6 minuten 19–21 seconden totaliteit rond 12:50 uur.</p>
<h3>Waarom de Westelijke Woestijn beter is dan de Nijlvallei</h3>
<p>Luxor zal in 2027 de grootste menigten aantrekken. Maar de Westelijke Woestijn biedt een ongebroken 360-graden horizon, geen verwachte congestie, en enkele van de meest betrouwbare helder-hemelomstandigheden op het hele pad. De Bahariya-Oase heeft een historisch record van bijna nul gemiddelde wolkendekking in augustus.</p>
<h3>Bahariya-Oase: onze aanbevolen kijklocatie</h3>
<p>Voor een eclipsreis in de Westelijke Woestijn is de Bahariya-Oase de duidelijkste keuze. Onze aanbevolen aanpak is om u op de ochtend van 2 augustus in Bahariya te vestigen, de totaliteit te bekijken vanaf een open uitkijkpunt buiten de stad, en vervolgens de reis voort te zetten naar de Witte Woestijnformaties.</p>
<h3>Planning rond de augustushitte</h3>
<p>Wij raden over het algemeen oktober tot april aan voor een bezoek aan de Egyptische woestijn. Augustus is hier een bewuste uitzondering: temperaturen overschrijden regelmatig 40°C (104°F). Zorg dat u ruim voor 12:50 uur op positie bent, draag aanzienlijk meer water dan u denkt nodig te hebben, en vermijd onnodige middagactiviteiten buiten het eclipsvenster.</p>
<h3>Wat u moet inpakken voor eclipsdag</h3>
<p>ISO-gecertificeerde eclipsbrillen zijn essentieel voor de gedeeltelijke fasen — gewone zonnebrillen beschermen uw ogen niet. Als u het evenement wilt fotograferen, is een zonnefiler voor uw cameralens even belangrijk. Pak een brede hoed, elektrolietensupplementen en een lichtgewicht laag met lange mouwen in.</p>
<h3>Boek vroeg: dit is geen reis voor later</h3>
<p>Totale zonsverduisteringen verkopen betrouwbaar accommodatie en transport langs hun pad jaren van tevoren uit. Als u een eclipsreis in de Westelijke Woestijn plant, behandel de komende maanden dan als uw planningsvenster, niet het begin van 2027.</p>
<h3>Conclusie</h3>
<p>Totale zonsverduisteringen van deze lengte herhalen zich niet voor dezelfde generatie reizigers — de volgende zonsverduistering die zes minuten totaliteit overschrijdt, zal pas in 2150 plaatsvinden. De Egyptische Westelijke Woestijn biedt bijna dezelfde duisternis als Luxor met een fractie van de menigten.</p>`,

  pt: `<h3>Introdução: Uma Sombra de Seis Minutos</h3>
<p>Na tarde de segunda-feira, 2 de agosto de 2027, a Lua deslizará diretamente entre a Terra e o Sol, e para uma estreita faixa do território egípcio, o dia se transformará brevemente em crepúsculo. Os astrônomos já apelidaram de "o eclipse do século" — não porque os eclipses totais sejam raros, mas por causa de sua duração inusualmente longa. A totalidade se estenderá por mais de seis minutos em alguns lugares, mais do que o dobro de um eclipse total típico.</p>
<h3>O que torna o eclipse de agosto de 2027 tão excepcional</h3>
<p>A maioria dos eclipses totais passa rapidamente. O eclipse de 2027 é excepcional porque a Lua estará perto de sua aproximação mais próxima da Terra enquanto a Terra está perto de seu ponto mais distante do Sol. A totalidade atinge um máximo de aproximadamente 6 minutos 23 segundos — o mais longo entre 1991 e 2114. O caminho começa sobre o Atlântico, atravessa Espanha, Marrocos, Argélia, Líbia e Egito.</p>
<h3>Lendo o caminho: onde a totalidade realmente cai no Egito</h3>
<p>Cairo e Gizé ficam apenas fora do caminho. O verdadeiro caminho entra no Egito pelo noroeste no Oásis de Siwa. O Oásis de Bahariya — a porta dos Desertos Negro e Branco — fica quase exatamente na linha central, com aproximadamente 6 minutos 19–21 segundos de totalidade por volta das 12h50.</p>
<h3>Por que o Deserto Ocidental vale mais que o Vale do Nilo</h3>
<p>Luxor atrairá naturalmente as maiores multidões em 2027. Mas o Deserto Ocidental oferece um horizonte de 360 graus ininterrupto, nenhuma congestão esperada, e algumas das condições de céu claro mais confiáveis em todo o caminho. O Oásis de Bahariya tem um histórico de quase zero cobertura de nuvens em agosto.</p>
<h3>Oásis de Bahariya: nosso local de observação recomendado</h3>
<p>Para uma viagem de eclipse no Deserto Ocidental, o Oásis de Bahariya é a escolha mais clara. Nossa abordagem recomendada é se estabelecer em Bahariya na manhã de 2 de agosto, assistir à totalidade de um ponto de vista aberto fora da cidade e, em seguida, continuar a mesma viagem até as formações do Deserto Branco.</p>
<h3>Planejamento em torno do calor de agosto</h3>
<p>Geralmente recomendamos de outubro a abril para visitar o deserto egípcio. Agosto é uma exceção deliberada aqui: as temperaturas excedem regularmente 40°C (104°F). Esteja em posição bem antes das 12h50, leve consideravelmente mais água do que pensa precisar, e evite atividades desnecessárias ao meio-dia fora da janela do eclipse.</p>
<h3>O que levar para o dia do eclipse</h3>
<p>Óculos de eclipse certificados pela ISO são essenciais para as fases parciais — óculos de sol comuns não protegem seus olhos. Se planeja fotografar o evento, um filtro solar para sua objetiva é igualmente importante. Leve um chapéu de abas largas, suplementos eletrolíticos e uma camada leve de mangas compridas.</p>
<h3>Reserve cedo: esta não é uma viagem para deixar para depois</h3>
<p>Os eclipses solares totais esgotam de forma confiável acomodações e transportes ao longo de seu caminho com anos de antecedência. Se você está planejando uma viagem de eclipse no Deserto Ocidental, trate os próximos meses como sua janela de planejamento, não o início de 2027.</p>
<h3>Conclusão</h3>
<p>Os eclipses solares totais dessa duração não se repetem para a mesma geração de viajantes — o próximo eclipse que superar seis minutos de totalidade não ocorrerá até 2150. O Deserto Ocidental egípcio oferece quase a mesma escuridão que Luxor com uma fração das multidões e alguns dos céus mais claros em todo o caminho do eclipse.</p>`,

  zh: `<h3>引言：长达六分钟的阴影</h3>
<p>2027年8月2日（周一）下午，月球将直接滑行至地球与太阳之间，对于一条狭窄的埃及领土地带而言，白昼将短暂变为暮色。天文学家已将其冠以"世纪日食"之名——不是因为日全食本身罕见，而是因为它的持续时间异常之长。全食期间将在某些地点延续超过六分钟，是典型日全食时长的两倍有余，而埃及恰好几乎位于月球阴影逗留时间最长的那一点。</p>
<h3>是什么让2027年8月日食如此非同寻常</h3>
<p>大多数日全食转瞬即逝，全食持续时间通常只有两到四分钟。2027年日食之所以罕见，是因为届时月球将接近近地点，而地球也恰好接近远日点，使得月球看起来比平时更大，太阳看起来比平时更小。加之路径经过接近赤道的区域，阴影移动速度更慢，全食最长时间达到约6分23秒——这是1991年至2114年间持续时间最长的日全食。路径从大西洋开始，穿越西班牙、摩洛哥、阿尔及利亚、利比亚和埃及，继续经过沙特阿拉伯、也门和索马里后在印度洋结束。</p>
<h3>解读路径：全食实际落在埃及哪里</h3>
<p>并非埃及所有地方都会经历日全食。开罗和吉萨刚好在路径之外，太阳最多被遮挡94-95%。全食路径从西北方的锡瓦绿洲进入埃及，沿对角线向东南穿越全境后，从马尔萨马特鲁和贝勒尼斯附近的红海沿岸离开。巴哈利亚绿洲——埃及黑沙漠和白沙漠的门户——几乎恰好位于路径中心线上，全食持续约6分19-21秒，与卢克索几乎相当。</p>
<h3>为何西部沙漠胜过尼罗河谷</h3>
<p>卢克索无疑将在2027年吸引最多人群。但西部沙漠提供无遮挡的360度地平线、远离预期中的尼罗河沿岸拥挤，以及整条路径上最可靠的晴朗天空条件之一——气象学家指出，这里尘土和霾比云层更值得关注。巴哈利亚绿洲8月历史平均云量接近零，全食时长与卢克索相差不过几秒。</p>
<h3>巴哈利亚绿洲：我们推荐的观测地点</h3>
<p>对于西部沙漠日食之旅，巴哈利亚绿洲是最明确的选择。它几乎恰好位于日食路径中心线上，是我们前往黑沙漠和白沙漠旅途中惯用的出发地，同时提供开阔天空与基本设施（客栈、饮水、燃油）的现实组合。我们推荐的方式是在8月2日上午以巴哈利亚为基地，在镇外开阔视野处观赏全食，随后数日继续深入白沙漠的白垩地貌。</p>
<h3>围绕八月酷暑做计划</h3>
<p>我们通常建议10月至4月游览埃及沙漠，八月是此处的刻意例外：西部沙漠白天气温常超过40°C（104°F）。务必在全食开始前（约12:50）提前就位，携带远超预期用量的饮水，避免日食窗口之外的不必要户外活动。好消息是，使天空保持晴朗的同一股干燥空气，在天空变暗时也会让全食前后那一小时感觉真正舒适。</p>
<h3>日食当天的装备清单</h3>
<p>除我们打包指南中涵盖的常规沙漠游猎必备物品外，日食当天还有一份不可妥协的专属清单。全食前后的偏食阶段必须佩戴符合ISO标准的日食眼镜——普通太阳镜无论多深都无法保护眼睛。如需拍摄，相机镜头同样需要专用太阳滤镜。还应备好宽檐帽、电解质补充剂和轻薄长袖衣物，以及一把折叠椅或垫子，在全食开始前的等待时段中大有用处。</p>
<h3>提前预订：这不是可以拖延的行程</h3>
<p>日全食沿途的住宿和交通通常会提前数年售罄，而埃及沙漠的基础设施与尼罗河谷相比本就十分有限。如果您正在计划西部沙漠日食之旅，请将未来几个月视为您的规划窗口，而非2027年初。2027年8月之前很久，专属日食出发团的名额便将额满——提前预订在此绝非过分谨慎，而是现实必要之举。</p>
<h3>结语</h3>
<p>如此时长的日全食不会在同一代旅行者的生命中重演——下一次超过六分钟全食时长的日食要等到2150年。埃及西部沙漠几乎恰好位于月球阴影逗留时间最长之处，以卢克索一小部分的人群，提供几乎相当的黑暗时刻，以及整条日食路径上最清澈的天空之一。2027年8月日食当天，我们将以巴哈利亚绿洲为基地接待我们的宾客，期待与您共同规划这趟旅程。</p>`,
});

// ─── i18n titles ───
const titleI18n = JSON.stringify({
  fr: "Éclipse Solaire Totale 2027 en Égypte : Où Regarder dans le Désert Occidental | Bedouin Trails (2027)",
  de: "Totale Sonnenfinsternis 2027 in Ägypten: Beobachtung in der Westlichen Wüste | Bedouin Trails (2027)",
  es: "Eclipse Solar Total 2027 en Egipto: Dónde Ver en el Desierto Occidental | Bedouin Trails (2027)",
  it: "Eclissi Solare Totale 2027 in Egitto: Dove Guardare nel Deserto Occidentale | Bedouin Trails (2027)",
  nl: "Totale Zonsverduistering 2027 in Egypte: Waar Te Kijken in de Westelijke Woestijn | Bedouin Trails (2027)",
  pt: "Eclipse Solar Total 2027 no Egito: Onde Ver no Deserto Ocidental | Bedouin Trails (2027)",
  zh: "2027年埃及日全食：在西部沙漠观看全食的最佳地点 | Bedouin Trails (2027)",
});

// ─── i18n excerpts ───
const excerptI18n = JSON.stringify({
  fr: "Le 2 août 2027, l'Égypte accueille l'un des éclipses solaires totales les plus longs du siècle. Voici exactement où se situe le Désert Occidental sur le chemin de la totalité.",
  de: "Am 2. August 2027 beherbergt Ägypten eine der längsten totalen Sonnenfinsternisse des Jahrhunderts. Hier ist genau, wo die Westliche Wüste auf dem Totalitätspfad liegt.",
  es: "El 2 de agosto de 2027, Egipto acoge uno de los eclipses solares totales más largos del siglo. Aquí está exactamente dónde se encuentra el Desierto Occidental en el camino de la totalidad.",
  it: "Il 2 agosto 2027, l'Egitto ospita una delle eclissi solari totali più lunghe del secolo. Ecco esattamente dove si trova il Deserto Occidentale sul percorso della totalità.",
  nl: "Op 2 augustus 2027 is Egypte gastheer voor een van de langste totale zonsverduisteringen van de eeuw. Hier is precies waar de Westelijke Woestijn op het totaliteitspad ligt.",
  pt: "Em 2 de agosto de 2027, o Egito sedia um dos eclipses solares totais mais longos do século. Aqui está exatamente onde o Deserto Ocidental se encontra no caminho da totalidade.",
  zh: "2027年8月2日，埃及将迎来本世纪持续时间最长的日全食之一。以下是西部沙漠在全食路径上的确切位置。",
});

// ─── i18n meta titles ───
const metaTitleI18n = JSON.stringify({
  fr: "Éclipse Solaire 2027 Égypte : Observer depuis le Désert Occidental | Bedouin Trails",
  de: "Sonnenfinsternis 2027 Ägypten: Westliche Wüste Beobachtungsort | Bedouin Trails",
  es: "Eclipse Solar 2027 Egipto: Ver desde el Desierto Occidental | Bedouin Trails",
  it: "Eclissi Solare 2027 Egitto: Osservare dal Deserto Occidentale | Bedouin Trails",
  nl: "Zonsverduistering 2027 Egypte: Vanuit de Westelijke Woestijn | Bedouin Trails",
  pt: "Eclipse Solar 2027 Egito: Ver do Deserto Ocidental | Bedouin Trails",
  zh: "2027年埃及日食：西部沙漠观测指南 | Bedouin Trails",
});

// ─── i18n meta descriptions ───
const metaDescriptionI18n = JSON.stringify({
  fr: "Le 2 août 2027, l'Égypte accueille l'une des éclipses solaires totales les plus longues du siècle. Découvrez pourquoi le Désert Occidental, notamment l'Oasis de Bahariya, est le meilleur endroit pour observer la totalité.",
  de: "Am 2. August 2027 beherbergt Ägypten eine der längsten totalen Sonnenfinsternisse des Jahrhunderts. Erfahren Sie, warum die Westliche Wüste, insbesondere die Bahariya-Oase, der beste Ort ist, um die Totalität zu beobachten.",
  es: "El 2 de agosto de 2027, Egipto acoge uno de los eclipses solares totales más largos del siglo. Descubra por qué el Desierto Occidental, especialmente el Oasis de Bahariya, es el mejor lugar para observar la totalidad.",
  it: "Il 2 agosto 2027, l'Egitto ospita una delle eclissi solari totali più lunghe del secolo. Scoprite perché il Deserto Occidentale, in particolare l'Oasi di Bahariya, è il posto migliore per osservare la totalità.",
  nl: "Op 2 augustus 2027 is Egypte gastheer voor een van de langste totale zonsverduisteringen van de eeuw. Ontdek waarom de Westelijke Woestijn, met name de Bahariya-Oase, de beste plek is om de totaliteit te observeren.",
  pt: "Em 2 de agosto de 2027, o Egito sedia um dos eclipses solares totais mais longos do século. Descubra por que o Deserto Ocidental, especialmente o Oásis de Bahariya, é o melhor lugar para observar a totalidade.",
  zh: "2027年8月2日，埃及将迎来本世纪持续时间最长的日全食之一。了解为何西部沙漠，尤其是巴哈利亚绿洲，是观测全食的最佳地点。",
});

// ─── FAQs (3 questions, all 9 locales) ───
const faqs = [
  {
    questionEn: "Will Cairo or Giza see the total eclipse on August 2, 2027?",
    answerEn:
      "No — both fall just outside the path of totality, with around 94–95% of the Sun covered at maximum, which still leaves visible daylight. To experience full totality, you need to be within the narrow centerline corridor, which runs through Siwa Oasis, Bahariya Oasis, Asyut, Sohag, Luxor, and Berenice.",
    questionAr: "هل ستشهد القاهرة أو الجيزة الكسوف الكلي في 2 أغسطس 2027؟",
    answerAr:
      "لا، فكلتاهما تقعان خارج مسار الكسوف الكلي بقليل، إذ تُغطى الشمس عند الذروة بنسبة تتراوح بين 94% و95%، وهو ما يترك نهارًا واضحًا رغم كل شيء. لتجربة الكسوف الكلي التام، يجب أن تكون داخل الممر الضيق لخط المركز، الذي يمر عبر واحة سيوة وواحة البحرية وأسيوط وسوهاج والأقصر وبرنيس.",
    questionI18n: JSON.stringify({
      fr: "Le Caire ou Gizeh verront-ils l'éclipse totale le 2 août 2027 ?",
      de: "Werden Kairo oder Gizeh am 2. August 2027 die totale Sonnenfinsternis sehen?",
      es: "¿El Cairo o Gizeh verán el eclipse total el 2 de agosto de 2027?",
      it: "Il Cairo o Giza vedranno l'eclissi totale il 2 agosto 2027?",
      nl: "Zullen Caïro of Gizeh de totale zonsverduistering op 2 augustus 2027 zien?",
      pt: "Cairo ou Gizé verão o eclipse total em 2 de agosto de 2027?",
      zh: "2027年8月2日，开罗或吉萨能看到日全食吗？",
    }),
    answerI18n: JSON.stringify({
      fr: "Non — les deux se trouvent juste en dehors du chemin de la totalité, avec environ 94 à 95 % du Soleil couvert au maximum. Pour vivre la totalité complète, vous devez être dans le couloir de la ligne centrale, qui passe par les Oasis de Siwa et Bahariya, Asyut, Sohag, Louxor et Bérénice.",
      de: "Nein — beide liegen knapp außerhalb des Totalitätspfades, mit etwa 94–95% der Sonne bei Maximum bedeckt. Um vollständige Totalität zu erleben, müssen Sie sich im schmalen Mittellinienkorridor befinden, der durch die Siwa- und Bahariya-Oase, Asyut, Sohag, Luxor und Berenice verläuft.",
      es: "No — ambos se encuentran justo fuera del camino de la totalidad, con alrededor del 94–95% del Sol cubierto como máximo. Para experimentar la totalidad completa, debe estar dentro del estrecho corredor de la línea central, que pasa por los Oasis de Siwa y Bahariya, Asyut, Sohag, Luxor y Berenice.",
      it: "No — entrambe si trovano appena fuori dal percorso della totalità, con circa il 94–95% del Sole coperto al massimo. Per sperimentare la totalità completa, è necessario essere all'interno dello stretto corridoio della linea centrale, che passa per le Oasi di Siwa e Bahariya, Asyut, Sohag, Luxor e Berenice.",
      nl: "Nee — beide vallen net buiten het pad van de totaliteit, met ongeveer 94–95% van de Zon bedekt bij maximum. Om volledige totaliteit te ervaren, moet u zich in de smalle middellijngang bevinden, die loopt via de Siwa- en Bahariya-Oase, Asyut, Sohag, Luxor en Berenice.",
      pt: "Não — ambas ficam logo fora do caminho da totalidade, com cerca de 94–95% do Sol coberto no máximo. Para experimentar a totalidade completa, você precisa estar dentro do estreito corredor da linha central, que passa pelos Oásis de Siwa e Bahariya, Asyut, Sohag, Luxor e Berenice.",
      zh: "不能——两城均恰好在全食路径之外，太阳最多被遮挡约94-95%，白昼依然可见。要体验完整的全食，必须身处经过锡瓦绿洲、巴哈利亚绿洲、阿斯尤特、索哈格、卢克索和贝勒尼斯的狭窄中心线走廊内。",
    }),
  },
  {
    questionEn: "Is Bahariya Oasis actually inside the 2027 eclipse path of totality?",
    answerEn:
      "Yes — tracked eclipse-path data places Bahariya Oasis almost exactly on the centerline, with totality lasting roughly 6 minutes 19–21 seconds, nearly matching Luxor. This makes it one of the best Western Desert locations for the eclipse: it is within seconds of the maximum duration available anywhere in Egypt, while offering far less congestion than the Nile Valley towns along the same corridor.",
    questionAr: "هل واحة البحرية فعليًا داخل مسار الكسوف الكلي لعام 2027؟",
    answerAr:
      "نعم، تضع بيانات مسار الكسوف المتتبَّعة واحة البحرية تقريبًا على خط المركز تمامًا، بمدة كسوف كلي تبلغ نحو 6 دقائق بين 19 و21 ثانية، وهي مدة تقترب كثيرًا من مدة الأقصر. هذا يجعلها أحد أفضل مواقع الصحراء الغربية للكسوف: فهي تقع على بُعد ثوانٍ من الحد الأقصى للمدة المتاحة في أي مكان بمصر، مع ازدحام أقل بكثير من مدن وادي النيل على نفس الممر.",
    questionI18n: JSON.stringify({
      fr: "L'Oasis de Bahariya est-elle vraiment dans le chemin de la totalité de l'éclipse de 2027 ?",
      de: "Liegt die Bahariya-Oase wirklich innerhalb des Totalitätspfades der Sonnenfinsternis 2027?",
      es: "¿El Oasis de Bahariya está realmente dentro del camino de totalidad del eclipse de 2027?",
      it: "L'Oasi di Bahariya è davvero all'interno del percorso di totalità dell'eclissi del 2027?",
      nl: "Ligt de Bahariya-Oase werkelijk binnen het totaliteitspad van de zonsverduistering van 2027?",
      pt: "O Oásis de Bahariya está realmente dentro do caminho de totalidade do eclipse de 2027?",
      zh: "巴哈利亚绿洲真的在2027年日食的全食路径内吗？",
    }),
    answerI18n: JSON.stringify({
      fr: "Oui — les données du trajet de l'éclipse placent l'Oasis de Bahariya presque exactement sur la ligne centrale, avec une totalité d'environ 6 minutes 19–21 secondes, presque égale à Louxor. Cela en fait l'un des meilleurs endroits du Désert Occidental, à quelques secondes de la durée maximale disponible n'importe où en Égypte.",
      de: "Ja — die Eclipse-Pfaddaten platzieren die Bahariya-Oase fast genau auf der Mittellinie, mit einer Totalität von etwa 6 Minuten 19–21 Sekunden, fast gleichwertig mit Luxor. Dies macht sie zu einem der besten Standorte in der Westlichen Wüste, nur Sekunden von der maximalen Dauer entfernt, die irgendwo in Ägypten verfügbar ist.",
      es: "Sí — los datos del camino del eclipse sitúan el Oasis de Bahariya casi exactamente en la línea central, con una totalidad de aproximadamente 6 minutos 19–21 segundos, casi igual que Luxor. Esto lo convierte en uno de los mejores lugares del Desierto Occidental, a solo segundos de la duración máxima disponible en cualquier lugar de Egipto.",
      it: "Sì — i dati del percorso dell'eclissi posizionano l'Oasi di Bahariya quasi esattamente sulla linea centrale, con una totalità di circa 6 minuti 19–21 secondi, quasi pari a Luxor. Questo la rende una delle migliori posizioni del Deserto Occidentale, a pochi secondi dalla durata massima disponibile ovunque in Egitto.",
      nl: "Ja — de eclipspadgegevens plaatsen de Bahariya-Oase bijna precies op de middellijn, met een totaliteit van ongeveer 6 minuten 19–21 seconden, bijna gelijk aan Luxor. Dit maakt het een van de beste locaties in de Westelijke Woestijn, op slechts seconden van de maximale duur die ergens in Egypte beschikbaar is.",
      pt: "Sim — os dados do caminho do eclipse colocam o Oásis de Bahariya quase exatamente na linha central, com uma totalidade de aproximadamente 6 minutos 19–21 segundos, quase igual ao de Luxor. Isso o torna um dos melhores locais do Deserto Ocidental, a apenas segundos da duração máxima disponível em qualquer lugar do Egito.",
      zh: "是的——日食路径追踪数据显示巴哈利亚绿洲几乎恰好位于中心线上，全食持续约6分19-21秒，与卢克索几乎相当。这使其成为西部沙漠最佳日食观测地之一：距离埃及任何地点可获得的最长全食时间仅差几秒，同时人群拥挤程度远低于同一走廊上的尼罗河谷城镇。",
    }),
  },
  {
    questionEn: "Do I need special equipment to watch the 2027 eclipse safely?",
    answerEn:
      "Yes. ISO-certified eclipse glasses (rated ISO 12312-2) are required for every phase of the eclipse except the brief seconds of full totality itself, when the Sun is completely covered and direct viewing is safe. During all partial phases — before and after totality — looking at the Sun without proper glasses causes permanent eye damage. Regular sunglasses, regardless of how dark they appear, do not offer adequate protection. If you plan to photograph the eclipse, a solar filter rated for cameras is equally necessary for your lens.",
    questionAr: "هل أحتاج معدات خاصة لمشاهدة كسوف 2027 بأمان؟",
    answerAr:
      "نعم. نظارات الكسوف المعتمدة وفق معايير ISO (المصنفة ISO 12312-2) مطلوبة في كل مرحلة من مراحل الكسوف باستثناء الثواني القليلة للكسوف الكلي التام، حين تُحجب الشمس بالكامل ويكون النظر المباشر آمنًا. خلال جميع المراحل الجزئية - قبل الكسوف الكلي وبعده - فإن النظر إلى الشمس بدون نظارات مناسبة يسبب تلفًا دائمًا في العين. النظارات الشمسية العادية، بغض النظر عن درجة قتامتها، لا توفر حماية كافية. إذا كنت تخطط لتصوير الكسوف، فإن فلتر الشمس المصنف للكاميرات ضروري بالقدر ذاته لعدستك.",
    questionI18n: JSON.stringify({
      fr: "Ai-je besoin d'équipement spécial pour regarder l'éclipse de 2027 en toute sécurité ?",
      de: "Brauche ich spezielle Ausrüstung, um die Sonnenfinsternis 2027 sicher zu beobachten?",
      es: "¿Necesito equipo especial para ver el eclipse de 2027 de forma segura?",
      it: "Ho bisogno di attrezzatura speciale per guardare l'eclissi del 2027 in sicurezza?",
      nl: "Heb ik speciale uitrusting nodig om de zonsverduistering van 2027 veilig te bekijken?",
      pt: "Preciso de equipamento especial para assistir ao eclipse de 2027 com segurança?",
      zh: "观看2027年日食需要特殊设备吗？",
    }),
    answerI18n: JSON.stringify({
      fr: "Oui. Des lunettes d'éclipse certifiées ISO (classées ISO 12312-2) sont requises pour chaque phase de l'éclipse, sauf pendant les brèves secondes de la totalité complète elle-même. Pendant toutes les phases partielles, regarder le Soleil sans lunettes appropriées cause des dommages oculaires permanents. Les lunettes de soleil ordinaires n'offrent pas une protection adéquate.",
      de: "Ja. ISO-zertifizierte Finsternisbrillen (ISO 12312-2) sind für jede Phase der Finsternis erforderlich, außer während der kurzen Sekunden der vollständigen Totalität selbst. Während aller partiellen Phasen verursacht das Betrachten der Sonne ohne geeignete Brillen dauerhafte Augenschäden. Normale Sonnenbrillen bieten keinen ausreichenden Schutz.",
      es: "Sí. Las gafas de eclipse certificadas por ISO (clasificadas ISO 12312-2) son necesarias para cada fase del eclipse, excepto durante los breves segundos de la totalidad completa en sí. Durante todas las fases parciales, mirar el Sol sin gafas adecuadas causa daño ocular permanente. Las gafas de sol ordinarias no ofrecen protección adecuada.",
      it: "Sì. Gli occhiali per l'eclissi certificati ISO (classificati ISO 12312-2) sono necessari per ogni fase dell'eclissi, eccetto durante i brevi secondi della totalità completa stessa. Durante tutte le fasi parziali, guardare il Sole senza occhiali appropriati causa danni oculari permanenti. Gli occhiali da sole ordinari non offrono protezione adeguata.",
      nl: "Ja. ISO-gecertificeerde eclipsbrillen (ISO 12312-2 geclassificeerd) zijn vereist voor elke fase van de eclips, behalve tijdens de korte seconden van de volledige totaliteit zelf. Tijdens alle gedeeltelijke fasen veroorzaakt het kijken naar de Zon zonder geschikte brillen permanente oogschade. Gewone zonnebrillen bieden geen adequate bescherming.",
      pt: "Sim. Óculos de eclipse com certificação ISO (classificados ISO 12312-2) são necessários para cada fase do eclipse, exceto durante os breves segundos da totalidade completa em si. Durante todas as fases parciais, olhar para o Sol sem óculos adequados causa danos oculares permanentes. Os óculos de sol comuns não oferecem proteção adequada.",
      zh: "是的。除全食本身短暂的几秒钟（太阳被完全遮挡，可安全直视）外，全程每个阶段都需要佩戴符合ISO 12312-2标准的日食眼镜。在所有偏食阶段，裸眼直视太阳会造成永久性眼部损伤。普通太阳镜无论颜色深浅都无法提供足够的保护。如计划拍摄日食，相机镜头同样需要配备专用太阳滤镜。",
    }),
  },
];

// ─── Blog object ───
const blog = {
  slug: "2027-solar-eclipse-egypt-western-desert",
  titleEn: "2027 Solar Eclipse in Egypt: Where to Watch the Total Eclipse in the Western Desert | Bedouin Trails (2027)",
  titleAr: "كسوف الشمس الكلي 2027 في مصر: أين تشاهده في الصحراء الغربية | Bedouin Trails (2027)",
  titleI18n,
  excerptEn:
    "On August 2, 2027, Egypt hosts one of the longest total solar eclipses of the century. Here's exactly where the Western Desert fits into the path of totality — and why Bahariya Oasis is where we'll be.",
  excerptAr:
    "في 2 أغسطس 2027، تستضيف مصر أحد أطول كسوفات الشمس الكلية في هذا القرن. إليك بالتحديد أين تقع الصحراء الغربية على مسار الكسوف الكلي - ولماذا ستكون واحة البحرية وجهتنا.",
  excerptI18n,
  contentEn,
  contentAr,
  contentI18n,
  metaTitleEn:
    "2027 Solar Eclipse Egypt: Where to Watch in the Western Desert | Bedouin Trails",
  metaTitleAr:
    "كسوف الشمس الكلي 2027 في مصر: أين تشاهده في الصحراء الغربية | Bedouin Trails",
  metaTitleI18n,
  metaDescriptionEn:
    "On August 2, 2027, Egypt hosts one of the longest total solar eclipses of the century. Here's exactly where the Western Desert fits into the path of totality — and why Bahariya Oasis, with nearly 6 minutes 20 seconds of totality, is our recommended viewing ground.",
  metaDescriptionAr:
    "في 2 أغسطس 2027، تستضيف مصر أحد أطول كسوفات الشمس الكلية في هذا القرن. إليك بالتحديد أين تقع الصحراء الغربية على مسار الكسوف الكلي، ولماذا تُعد واحة البحرية بمدة كسوف تقترب من 6 دقائق و20 ثانية وجهتنا الموصى بها.",
  metaDescriptionI18n,
  image: "/img/2027-solar-eclipse-egypt-western-desert.webp",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "2027 solar eclipse egypt",
    "total solar eclipse western desert",
    "bahariya oasis eclipse 2027",
    "eclipse of the century egypt",
    "egypt eclipse august 2027",
  ]),
  primaryKeywords: JSON.stringify([
    "2027 solar eclipse egypt",
    "total solar eclipse western desert",
    "bahariya oasis eclipse",
    "egypt eclipse 2027",
  ]),
  secondaryKeywords: JSON.stringify([
    "eclipse of the century egypt",
    "path of totality egypt 2027",
    "where to watch eclipse egypt",
    "western desert eclipse viewing",
    "solar eclipse bahariya oasis",
  ]),
  readingTime: 7,
  isPublished: true,
  publishedAt: new Date("2026-10-18"),
};

// ─── Main ───
async function main() {
  const existing = await prisma.blog.findUnique({ where: { slug: blog.slug } });

  if (existing) {
    await prisma.blog.update({
      where: { slug: blog.slug },
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
      await prisma.blogFaq.create({
        data: {
          blogId: existing.id,
          questionEn: faq.questionEn,
          answerEn: faq.answerEn,
          questionAr: faq.questionAr,
          answerAr: faq.answerAr,
          questionI18n: faq.questionI18n,
          answerI18n: faq.answerI18n,
          sortOrder: faqs.indexOf(faq),
        },
      });
    }
    console.log(`Updated blog "${blog.slug}" (id=${existing.id}) with ${faqs.length} FAQs.`);
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
    await prisma.blogFaq.create({
      data: {
        blogId: created.id,
        questionEn: faq.questionEn,
        answerEn: faq.answerEn,
        questionAr: faq.questionAr,
        answerAr: faq.answerAr,
        questionI18n: faq.questionI18n,
        answerI18n: faq.answerI18n,
        sortOrder: faqs.indexOf(faq),
      },
    });
  }

  console.log(`Created blog "${blog.slug}" (id=${created.id}) with ${faqs.length} FAQs.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
