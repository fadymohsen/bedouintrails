/**
 * Blog: The White Desert in One Day: A Real Itinerary for People Who Can't Spare a Weekend
 * Slug: white-desert-one-day-itinerary
 * Run with: node scripts/seed-blog-white-desert-one-day-itinerary.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr =
  "الصحراء البيضاء في يوم واحد: برنامج حقيقي لمن لا يملك عطلة نهاية أسبوع كاملة";

const metaTitleAr =
  "الصحراء البيضاء في يوم واحد من القاهرة | دليل عملي | Bedouin Trails (2026)";

const metaDescAr =
  "دليل عملي لزيارة الصحراء البيضاء في يوم واحد من القاهرة — نصائح الانطلاق المبكر، ماذا تحمل معك، وإجابة صادقة عن مدى كفاية يوم واحد.";

const excerptAr =
  "هل يوم واحد كافٍ للصحراء البيضاء؟ الإجابة الصادقة: نعم، بشرط واحد — الانطلاق قبل شروق الشمس، لا بعده. دليل عملي لمن يملك يومًا واحدًا حرًا فقط.";

const contentAr = `<p>معظم برامج الصحراء البيضاء تفترض أن لديك يومين أو ثلاثة لتخصصها لها. ليلة تحت النجوم، صباح هادئ تشاهد فيه تكوينات الطباشير تتغير ألوانها عند الشروق، بلا استعجال في أي شيء. هذه هي الطريقة الصحيحة لرؤيتها، وإذا كان بإمكانك تدبر الوقت، فعليك فعل ذلك. لكن كثيرًا من المسافرين لا يستطيعون فعلًا — رحلة عمل إلى القاهرة مع يوم سبت واحد حر، توقف بين رحلتي طيران، زائر يريد أن يرى صحراء مصر دون التنازل عن نصف عطلته من أجلها.</p>

<p><strong>الإجابة الصادقة هي نعم، يمكن فعل ذلك في يوم واحد، بشرط واحد: يجب أن تنطلق مبكرًا فعلًا — قبل شروق الشمس، لا بعده.</strong></p>

<h2>لماذا يغيّر الانطلاق المبكر كل شيء</h2>
<p>كثير من رحلات اليوم الواحد المعتادة تجعل الناس يغادرون القاهرة في وقت متأخر نسبيًا من الصباح، بعد أن يكون النهار قد بدأ فعلًا. على الورق، يبدو هذا منطقيًا. في الواقع، يضغط كل ما يليه: تفقد وقتًا حقيقيًا من ضوء النهار في الطرف الآخر من اليوم، وهذا في الصحراء البيضاء ليس مجرد إزعاج بسيط — إنه الفرق بين المغادرة بينما لا يزال هناك ضوء كافٍ للمرحلة الأخيرة من التكوينات، أو الاستعجال في كل الزيارة لأن الشمس بدأت بالفعل تنخفض.</p>

<p>ادفع المغادرة إلى وقت أبكر بكثير بدلًا من ذلك — قبل شروق الشمس — ويتمدد اليوم كله. تكون على الطريق قبل أن تزدحم المدينة، وهذا وحده قد يوفر لك وقتًا لا بأس به في طريق الذهاب. بحلول الوقت الذي تصل فيه إلى واحة البحرية — المدينة البوابة حيث ينتهي الطريق المعبد وتبدأ المسارات الصحراوية — لا تكون الحرارة قد أصبحت عاملًا مؤثرًا بعد، والضوء يصنع تأثيرات مثيرة عبر تكوينات الطباشير بدلًا من جعلها باهتة تحت حرارة منتصف النهار.</p>

<h2>ماذا يبدو اليوم فعليًا</h2>
<p>يبدأ اليوم بالخروج من القاهرة بينما لا تزال المدينة هادئة، والقهوة تُشرب في السيارة لا في مقهى قبل الانطلاق — هذا الانطلاق المبكر ليس أمرًا اختياريًا إذا كنت تريد لبقية اليوم أن تسير بسلاسة. أول محطة حقيقية هي واحة البحرية، حيث تتوقف الرحلة لفترة قصيرة من أجل أمور لوجستية: التبديل إلى سيارات الدفع الرباعي إن لم تكن قد فعلت ذلك، استراحة سريعة، وربما نظرة على النتوءات البازلتية التي تحدد طرف الواحة قبل أن تسيطر الصحراء المفتوحة.</p>

<p>من هناك، تنفتح النافذة الحقيقية — ساعات غير مستعجلة داخل الصحراء البيضاء، وقت كافٍ لرؤية التكوينات المهمة فعلًا بدلًا من التسرع بجانبها. المحطات الكلاسيكية — تكوين عش الغراب، تكوين الدجاجة وصخرة أبو الهول المشهورة، وادي الأعمدة المفتوح الذي يسميه السكان المحليون إنسلبرغ — كل ذلك يتسع بسهولة في هذه المساحة إذا كان مرشدك يوزع الوقت بذكاء. هذا أيضًا، بشكل ملحوظ، وقت كافٍ للنزول فعليًا والمشي بين التكوينات بدلًا من تصويرها من نافذة السيارة فقط، وهذا هو الفرق بين رؤية الصحراء البيضاء وزيارتها فعلًا.</p>

<p>الغداء يحدث أيضًا ضمن هذه النافذة نفسها — غالبًا وجبة صحراوية بسيطة تُجهّز في ظل أحد التكوينات الكبيرة، وهو أمر يبدو تفصيلًا ثانويًا إلى أن تجد نفسك فعلًا جالسًا تأكل الدجاج المشوي والأرز وبرج من الطباشير الأبيض يرتفع حولك بدلًا من جدران مطعم.</p>

<p>بعد أن تأخذ التكوينات وقتها، تبدأ رحلة العودة وما زال جزء كبير من بعد الظهر أمامك. هنا تؤتي الانطلاقة المبكرة ثمارها — تعود ومعك ضوء نهار متبقٍ بدلًا من مسابقة الظلام، وهذا مهم من ناحية الراحة ومن ناحية الواقع العملي للطرق الصحراوية بعد حلول الظلام. وبحلول وصولك إلى القاهرة، يكون قد مضى يوم طويل، بلا شك. لكنه يوم كامل.</p>

<h2>هل يوم واحد كافٍ فعلًا؟</h2>
<p>بصراحة — إنه كافٍ لفهم سبب وقوع الناس في غرام الصحراء البيضاء، لا كافٍ لرؤية كل شيء فيها. سترى التكوينات الرئيسية، تحصل على الصور، تفهم حجم المكان. ما لن تحصل عليه هو النسخة التي يطاردها المصورون: ضوء الشروق يضرب أعمدة الطباشير من مخيم نمت فيه الليلة السابقة، أو ذلك السكون الخاص الذي تشعر به الصحراء بعد أن يعود الجميع بسياراتهم إلى القاهرة. إذا كان هذا بالتحديد ما تبحث عنه، فلا يوجد برنامج ليوم واحد يعوّض رحلة مبيت.</p>

<p>لفهم أعمق لما تتنازل عنه فعلًا عند ضغط الرحلة في يوم واحد بدلًا من توزيعها على يومين أو ثلاثة، يشرح تحليلنا لـ<a href="/ar/blogs/how-many-days-white-desert-egypt">عدد الأيام التي تحتاجها الصحراء البيضاء فعلًا</a> بالتفصيل ما تضيفه كل يوم إضافي.</p>

<h2>سؤال وسيلة النقل</h2>
<p>رحلة يوم واحد كهذه تنجح أو تفشل بناءً على السيارة والسائق أكثر من أي متغير آخر تقريبًا. الطريق من القاهرة إلى البحرية طريق سريع مباشر، لكن المسافة من البحرية إلى داخل الصحراء البيضاء نفسها مسار صحراوي غير معبد، والراحة — إلى جانب مقدار النافذة التي تبلغ أربع إلى خمس ساعات والتي تُقضى فعلًا في الاستمتاع بالتكوينات بدلًا من التنقل المزعج داخل المركبة — تعتمد بشكل كبير على ضبط هذا الجزء بشكل صحيح.</p>

<p>معظم المسافرين يعتمدون تلقائيًا على أي سيارة تظهر أمامهم دون أسئلة، وهذا خطأ خصوصًا في رحلة يوم واحد، حيث لا يوجد وقت فائض في الجدول للتعافي من عطل أو سائق لا يعرف الطريق الصحراوي بما يكفي للتحرك بكفاءة بين المحطات. إذا كنت تريد أن تفهم ما يفرق فعلًا بين انتقال صحراوي سلس وآخر غير مريح، يستحق الأمر قراءة دليلنا عن <a href="/ar/blogs/cairo-to-white-desert-transport-options">الانتقال من القاهرة إلى الصحراء البيضاء</a> قبل حجز أي شيء.</p>

<h2>ماذا تحمل معك ليوم بهذه السرعة</h2>
<p>بما أن الجدول مضغوط ولا وقت فيه للعودة إلى السيارة أو البحث عن شيء نسيته، التحضير الصحيح يصنع فرقًا حقيقيًا. طبقات من الملابس أمر ضروري — الصباح الباكر بارد نسبيًا حتى في الصحراء، بينما يرتفع الحر بشكل ملحوظ بحلول الظهيرة داخل الصحراء البيضاء نفسها، فسترة خفيفة يمكن نزعها أفضل من الاعتماد على طقس واحد ثابت طوال اليوم. حذاء مناسب للمشي على الرمال والصخور الناعمة ضروري أيضًا، لأن أفضل لحظات اليوم تحدث وأنت تمشي بين التكوينات لا وأنت جالس في السيارة.</p>

<p>كمية كافية من المياه أهم من أي شيء آخر تحمله — رحلة يوم واحد تعني تعرضًا مكثفًا للشمس والجفاف في وقت قصير نسبيًا، وزجاجتان أو ثلاث للفرد أدنى حد معقول. نظارة شمسية وغطاء رأس يحميان من انعكاس الضوء القوي على الطباشير الأبيض، وهو انعكاس أقوى بكثير مما يتوقعه كثير من الزوار لأول مرة. وأخيرًا، شاحن هاتف محمول أو بطارية احتياطية — بين التصوير المستمر وساعات الطريق الطويلة، تستهلك البطارية أسرع مما تتخيل.</p>

<h2>لمن تناسب هذه الرحلة فعلًا</h2>
<p>هذه ليست الطريقة المثالية لرؤية الصحراء البيضاء — اسأل أي شخص خيّم فيها ليلًا وسيقول لك إن النجوم والشروق هما ما يجعلان المكان لا يُنسى بدلًا من كونه مثيرًا للإعجاب فقط. لكن المثالي ليس متاحًا دائمًا، ورحلة يوم واحد مُنظّمة جيدًا هي طريقة حقيقية ومُرضية لتجربة أحد أكثر المناظر الطبيعية تميزًا في مصر إذا لم تكن عطلة نهاية أسبوع كاملة متاحة فعلًا.</p>

<p>تناسب هذه الرحلة نوعًا محددًا من المسافرين: شخص موجود بالفعل في القاهرة لأسباب أخرى ولديه يوم واحد بالضبط، شخص يختار بين الصحراء البيضاء ولا شيء على الإطلاق بدلًا من الاختيار بين يوم واحد وثلاثة أيام، أو شخص يريد معاينة قبل الالتزام برحلة صحراوية أطول في زيارة مستقبلية. لكل هؤلاء المسافرين، الانطلاق المبكر ثمن صغير لقضاء بعد ظهر كامل تمشي فيه بين أبراج طباشيرية لا تشبه شيئًا آخر على الكوكب — والعودة إلى سريرك في القاهرة بحلول الوقت الذي تكون فيه معظم رحلات المبيت الصحراوية لا تزال تفك مخيمها لليلتها.</p>

<p>إذا سمح جدولك بيوم إضافي واحد، يستحق الأمر التفكير جديًا في تمديد الرحلة — لكن إذا لم يسمح فعلًا، فهذه هي النسخة التي تجعل الصحراء البيضاء تعمل مع ذلك، وهي استخدام أفضل بكثير ليوم حر واحد من معظم البدائل التي تقدمها القاهرة.</p>`;

// ─── ENGLISH ──────────────────────────────────────────────────────────────────

const titleEn =
  "The White Desert in One Day: A Real Itinerary for People Who Can't Spare a Weekend";

const metaTitleEn =
  "White Desert Day Trip from Cairo: One-Day Itinerary | Bedouin Trails (2026)";

const metaDescEn =
  "A practical guide to visiting Egypt's White Desert in a single day from Cairo — why starting before sunrise matters, what to pack, and an honest answer about whether one day is enough.";

const excerptEn =
  "Can you do the White Desert in one day? The honest answer is yes — with one condition: you have to leave before sunrise, not after it. A practical guide for travelers with exactly one free day.";

const contentEn = `<p>Most White Desert itineraries assume you have two or three days to give it. A night under the stars, a slow morning watching the chalk formations change color at sunrise, no rush anywhere. That's the right way to see it, and if you can swing it, you should. But a lot of travelers genuinely can't — a work trip to Cairo with one free Saturday, a stopover between flights, a visitor who wants to see Egypt's desert without giving up half their vacation to it. For that traveler, the question isn't whether to skip the White Desert — it's whether this can actually be done in a single day, and whether it's worth it if it can.</p>

<p>The honest answer is yes, with one condition: you have to leave early. Not early in the loose, hopeful sense people use when planning trips. Really early — moving before sunrise, not after it.</p>

<h2>Why Starting Early Changes Everything</h2>
<p>Many day trips like this start with people leaving Cairo a little later than they should, once the morning is already underway. That sounds reasonable on paper. In practice, it compresses everything that follows: you lose real daylight at the far end of the day, which in the White Desert isn't a minor inconvenience — it's the difference between leaving while there's still usable light for the last stretch of formations, or rushing the whole visit because the sun is already dropping.</p>
<p>Push the departure earlier instead — well before sunrise — and the entire day stretches out. You're on the road before the city traffic builds, which alone can save you a good chunk of time on the drive out. By the time you reach Bahariya Oasis — the gateway town where the paved road ends and the desert track begins — the heat hasn't become a factor yet, and the light is doing interesting things across the chalk formations rather than flattening them into midday glare.</p>

<h2>What the Day Actually Looks Like</h2>
<p>The day opens with the drive out of Cairo while the city is still quiet, coffee in the car rather than at a café beforehand — this early start isn't optional if you want the rest of the day to work. The first proper stop is Bahariya Oasis, where the trip pauses briefly for logistics: switching to 4x4 vehicles if you haven't already, a quick break, maybe a look at the basalt outcrops that mark the edge of the oasis before the open desert takes over.</p>
<p>From there, the real window opens — several unhurried hours inside Sahara el-Beyda, enough time to see the formations that actually matter rather than racing past them. The classic stops — the Mushroom, the Chicken and the famous Sphinx-like rock, the open valley of pinnacles locals call Inselberg — all fit comfortably into this stretch if your guide paces it well. It's also, notably, enough time to actually get out and walk among the formations rather than just photographing them through a car window, which is the difference between seeing the White Desert and visiting it.</p>
<p>Lunch happens inside this same window — usually a simple desert meal set up in the shade of one of the larger formations, which sounds like a minor detail until you're actually sitting there eating grilled chicken and rice with chalk-white towers rising around you instead of restaurant walls.</p>
<p>Once the formations have had their time, the return drive begins with plenty of the afternoon still ahead. This is where the early start pays off — you're heading back with daylight to spare rather than racing darkness, which matters both for comfort and for the practical reality of desert roads after dark. By the time you're back in Cairo, it's been a long day, no question. But a complete one.</p>

<h2>Is a Single Day Actually Enough?</h2>
<p>Honestly — it's enough to understand why people fall for the White Desert, not enough to exhaust it. You'll see the headline formations, get the photos, understand the scale of the place. What you won't get is the version photographers chase: sunrise light hitting the chalk pinnacles from a camp you slept at the night before, or the particular stillness of the desert after everyone else has driven back to Cairo. If that's specifically what you're after, no single-day plan replaces an overnight trip — and it's worth being honest with yourself about which traveler you are before committing to the long drive.</p>
<p>For a deeper sense of what you'd be trading off by compressing the trip into a day versus spreading it across two or three, our breakdown of <a href="/en/blogs/how-many-days-white-desert-egypt">how many days the White Desert actually needs</a> lays out exactly what each additional day adds — useful reading even if you've already decided a single day is what your schedule allows.</p>

<h2>The Transport Question</h2>
<p>A day trip like this lives or dies on the vehicle and driver, more than almost any other variable. The road from Cairo to Bahariya is straightforward highway driving, but the stretch from Bahariya into the White Desert itself is unpaved desert track, and comfort — along with how much of your four-to-five-hour window actually gets spent enjoying formations rather than being jostled around in a vehicle — depends heavily on getting that part right.</p>
<p>Most travelers default to whatever vehicle shows up without asking questions, which is a mistake specifically for a single-day trip, where there's no slack in the schedule to recover from a breakdown or a driver who doesn't know the terrain well enough to move efficiently between stops. If you want to understand what actually separates a smooth desert transfer from an uncomfortable one, it's worth reading through our guide on <a href="/en/blogs/cairo-to-white-desert-transport-options">getting from Cairo to the White Desert</a> before booking anything — the right setup is what makes that early start actually worth it rather than just a rough, tiring day.</p>

<h2>Who This Trip Is Actually For</h2>
<p>This isn't the ideal way to see the White Desert — ask anyone who's camped there overnight and they'll tell you the stars and the sunrise are what make the place unforgettable rather than merely impressive. But ideal isn't always available, and a well-run single-day trip is a real, satisfying way to experience one of Egypt's most distinctive landscapes if a full weekend simply isn't on the table.</p>
<p>It works best for a specific kind of traveler: someone already in Cairo for other reasons with exactly one day to spare, someone deciding between the White Desert and nothing at all rather than between one day and three, or someone who wants a preview before committing to a longer desert trip on a future visit. For all of those travelers, a very early start is a small price for an afternoon spent walking among chalk towers that look like nothing else on the planet — and being back in your own bed in Cairo by the time most overnight desert trips are still unpacking their camp for the night.</p>
<p>If your schedule allows even one extra day, it's worth seriously considering stretching the trip — but if it genuinely doesn't, this is the version that makes the White Desert work anyway, and it's a far better use of a single free day than most alternatives Cairo has to offer.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Le Desert Blanc en Une Journee : Un Vrai Itineraire pour Ceux qui ne Peuvent pas Sacrifier un Week-end",
  de: "Die Weisse Wuste an Einem Tag: Ein Echter Reiseplan fur Alle, die Kein Wochenende Entbehren Konnen",
  es: "El Desierto Blanco en Un Dia: Un Itinerario Real para Quienes no Pueden Dedicar un Fin de Semana",
  it: "Il Deserto Bianco in Un Giorno: Un Vero Itinerario per Chi Non Puo Dedicare un Weekend",
  nl: "De Witte Woestijn in Een Dag: Een Echt Reisplan voor Mensen die Geen Weekend Kunnen Missen",
  pt: "O Deserto Branco em Um Dia: Um Itinerario Real para Quem Nao Pode Dedicar um Fim de Semana",
  zh: "一天游白色沙漠：为没有整个周末时间的旅行者准备的真实行程",
};

const metaTitleI18n = {
  fr: "Excursion d'une Journee au Desert Blanc depuis le Caire | Bedouin Trails (2026)",
  de: "Tagesausflug Weisse Wuste ab Kairo: Ein-Tages-Itinerar | Bedouin Trails (2026)",
  es: "Excursion de Un Dia al Desierto Blanco desde El Cairo | Bedouin Trails (2026)",
  it: "Gita di Un Giorno nel Deserto Bianco da Il Cairo | Bedouin Trails (2026)",
  nl: "Dagtocht Witte Woestijn vanuit Caïro | Bedouin Trails (2026)",
  pt: "Excursao de Um Dia ao Deserto Branco a partir do Cairo | Bedouin Trails (2026)",
  zh: "从开罗出发一日游白色沙漠 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Guide pratique pour visiter le Desert Blanc en une journee depuis le Caire — pourquoi partir avant le lever du soleil, quoi emporter et une reponse honnete sur si une journee suffit.",
  de: "Praktischer Leitfaden fur einen Tagesausflug in die Weisse Wuste ab Kairo — warum ein fruher Start entscheidend ist, was Sie mitnehmen sollten und eine ehrliche Antwort, ob ein Tag reicht.",
  es: "Guia practica para visitar el Desierto Blanco en un dia desde El Cairo — por que salir antes del amanecer, que llevar y una respuesta honesta sobre si un dia es suficiente.",
  it: "Guida pratica per visitare il Deserto Bianco in un giorno dal Cairo — perche partire prima dell'alba conta, cosa portare e una risposta onesta se un giorno basta.",
  nl: "Praktische gids voor een dagtocht naar de Witte Woestijn vanuit Caïro — waarom vroeg vertrekken alles verandert, wat u meeneemt en een eerlijk antwoord of een dag genoeg is.",
  pt: "Guia pratico para visitar o Deserto Branco em um dia a partir do Cairo — por que partir antes do amanhecer importa, o que levar e uma resposta honesta sobre se um dia e suficiente.",
  zh: "从开罗一日游白色沙漠实用指南——为何日出前出发至关重要、该带什么，以及关于一天是否足够的诚实解答。",
};

const excerptI18n = {
  fr: "Peut-on visiter le Desert Blanc en une seule journee ? La reponse honnete est oui — a une condition : partir avant le lever du soleil. Un guide pratique pour les voyageurs n'ayant qu'une seule journee libre.",
  de: "Kann man die Weisse Wuste an einem Tag erkunden? Die ehrliche Antwort ist ja — mit einer Bedingung: Sie mussen vor Sonnenaufgang aufbrechen. Ein praktischer Leitfaden fur Reisende mit nur einem freien Tag.",
  es: "Puedes hacer el Desierto Blanco en un dia? La respuesta honesta es si — con una condicion: salir antes del amanecer. Una guia practica para viajeros con solo un dia libre.",
  it: "Si puo visitare il Deserto Bianco in un giorno solo? La risposta onesta e si — con una condizione: partire prima dell'alba. Una guida pratica per chi ha solo un giorno libero.",
  nl: "Kan je de Witte Woestijn op een dag doen? Het eerlijke antwoord is ja — met een voorwaarde: vertrekken voor zonsopgang. Een praktische gids voor reizigers met slechts een vrije dag.",
  pt: "Da para fazer o Deserto Branco em um dia? A resposta honesta e sim — com uma condicao: partir antes do amanhecer. Um guia pratico para viajantes com apenas um dia livre.",
  zh: "能在一天内游览白色沙漠吗？诚实的回答是：能——只有一个条件：在日出前出发。专为只有一天空闲时间的旅行者准备的实用指南。",
};

const contentI18n = {
  fr: `<p>La plupart des itineraires pour le Desert Blanc supposent que vous avez deux ou trois jours a y consacrer. Une nuit sous les etoiles, un matin calme a regarder les formations de craie changer de couleur au lever du soleil. C'est la bonne facon de le voir. Mais beaucoup de voyageurs ne peuvent vraiment pas — un voyage d'affaires au Caire avec un seul samedi libre, une escale entre vols. Pour ce voyageur, la question n'est pas d'eviter le Desert Blanc, mais si c'est faisable en une journee.</p>
<p><strong>La reponse honnete est oui, avec une condition : vous devez partir vraiment tot — avant le lever du soleil, pas apres.</strong></p>
<h2>Pourquoi partir tot change tout</h2>
<p>Partez bien avant le lever du soleil et toute la journee s'etire. Vous etes sur la route avant que la circulation de la ville ne se forme, et au moment ou vous atteignez l'oasis de Bahariya, la chaleur n'est pas encore un facteur.</p>
<h2>A quoi ressemble vraiment la journee</h2>
<p>La journee commence par la sortie du Caire dans le calme, cafe en voiture. Premiere etape a Bahariya pour les transferts en 4x4. Ensuite, plusieurs heures sans precipitation dans le Desert Blanc : le Champignon, le Poulet, la vallee des pinnacles. Dejeuner sous les formations. Retour avec encore de la lumiere du jour.</p>
<h2>Une journee est-elle vraiment suffisante ?</h2>
<p>Honnettement — suffisante pour comprendre pourquoi les gens tombent amoureux du Desert Blanc, pas pour l'epuiser. Notre analyse de <a href="/fr/blogs/how-many-days-white-desert-egypt">combien de jours le Desert Blanc necessite vraiment</a> explique ce qu'ajoute chaque jour supplementaire.</p>
<h2>La question du transport</h2>
<p>Une telle excursion reussit ou echoue selon le vehicule et le chauffeur. Consultez notre guide sur <a href="/fr/blogs/cairo-to-white-desert-transport-options">le trajet du Caire au Desert Blanc</a> avant de reserver.</p>
<h2>Ce qu'il faut emporter</h2>
<p>Des couches de vetements (matin frais, journee chaude), des chaussures de marche, au moins deux ou trois bouteilles d'eau par personne, lunettes de soleil, chapeau et une batterie de secours pour le telephone.</p>
<h2>Pour qui cette excursion est-elle faite ?</h2>
<p>Pour quelqu'un deja au Caire avec exactement un jour de libre, quelqu'un qui choisit entre le Desert Blanc et rien du tout, ou quelqu'un qui veut un apercu avant un sejour plus long. Un depart tres matinal est un petit prix pour une apres-midi parmi des tours de craie qui ne ressemblent a rien d'autre sur la planete.</p>`,

  de: `<p>Die meisten Weisse-Wuste-Reisepläne setzen voraus, dass Sie zwei oder drei Tage Zeit haben. Eine Nacht unter den Sternen, ein ruhiger Morgen beim Sonnenaufgang. Das ist die richtige Art, sie zu sehen. Aber viele Reisende konnen das wirklich nicht — eine Geschaftsreise nach Kairo mit nur einem freien Samstag. Die Frage ist nicht, ob man die Weisse Wuste uberspringen soll, sondern ob es an einem einzigen Tag moglich ist.</p>
<p><strong>Die ehrliche Antwort ist ja, mit einer Bedingung: Sie mussen wirklich fruh aufbrechen — vor dem Sonnenaufgang, nicht danach.</strong></p>
<h2>Warum ein fruher Start alles verandert</h2>
<p>Brechen Sie gut vor dem Sonnenaufgang auf und der ganze Tag dehnt sich aus. Sie sind auf der Strasse, bevor der Stadtverkehr entsteht, und bis Sie die Bahariya-Oase erreichen, ist die Hitze noch kein Faktor.</p>
<h2>Wie der Tag wirklich aussieht</h2>
<p>Der Tag beginnt mit der Ausfahrt aus dem ruhigen Kairo, Kaffee im Auto. Erster Halt in Bahariya fur den 4x4-Wechsel. Dann mehrere entspannte Stunden in der Weissen Wuste: der Pilz, das Huhn, das Tal der Pinnacles. Mittagessen unter den Formationen. Ruckfahrt noch bei Tageslicht.</p>
<h2>Reicht ein Tag wirklich aus?</h2>
<p>Ehrlich gesagt — genug, um zu verstehen, warum Menschen sich in die Weisse Wuste verlieben. Unsere Analyse von <a href="/de/blogs/how-many-days-white-desert-egypt">wie viele Tage die Weisse Wuste wirklich braucht</a> erklart, was jeder zusatzliche Tag bringt.</p>
<h2>Die Transportfrage</h2>
<p>Ein solcher Tagesausflug steht und fallt mit Fahrzeug und Fahrer. Lesen Sie unseren Leitfaden uber <a href="/de/blogs/cairo-to-white-desert-transport-options">die Fahrt von Kairo zur Weissen Wuste</a> vor der Buchung.</p>
<h2>Was Sie mitnehmen sollten</h2>
<p>Schichten (kuhl morgens, heiss mittags), Wanderschuhe, zwei bis drei Wasserflaschen pro Person, Sonnenbrille, Hut und eine Ersatzbatterie fur das Telefon.</p>
<h2>Fur wen ist diese Reise geeignet?</h2>
<p>Fur jemanden, der bereits aus anderen Grunden in Kairo ist, mit genau einem freien Tag; jemanden, der zwischen der Weissen Wuste und gar nichts wahlt; oder jemanden, der eine Vorschau mochte. Ein sehr fruher Start ist ein kleiner Preis fur einen Nachmittag unter Kreideurmen.</p>`,

  es: `<p>La mayoria de los itinerarios para el Desierto Blanco asumen que tienes dos o tres dias. Una noche bajo las estrellas, una manana tranquila viendo las formaciones de tiza cambiar de color al amanecer. Esa es la manera correcta de verlo. Pero muchos viajeros realmente no pueden — un viaje de negocios a El Cairo con solo un sabado libre. La pregunta no es si saltarse el Desierto Blanco, sino si es factible en un solo dia.</p>
<p><strong>La respuesta honesta es si, con una condicion: tienes que salir muy temprano — antes del amanecer, no despues.</strong></p>
<h2>Por que salir temprano lo cambia todo</h2>
<p>Sale bien antes del amanecer y todo el dia se expande. Estas en la carretera antes de que el trafico de la ciudad aumente, y para cuando llegas al oasis de Bahariya, el calor aun no es un factor.</p>
<h2>Como es el dia en realidad</h2>
<p>El dia empieza saliendo del Cairo tranquilo, cafe en el coche. Primera parada en Bahariya para cambiar a 4x4. Luego varias horas relajadas en el Desierto Blanco: el Champinon, el Pollo, el valle de los pinnaculos. Almuerzo bajo las formaciones. Regreso con luz del dia.</p>
<h2>Un dia es realmente suficiente?</h2>
<p>Honestamente — suficiente para entender por que la gente se enamora del Desierto Blanco. Nuestro analisis de <a href="/es/blogs/how-many-days-white-desert-egypt">cuantos dias necesita realmente el Desierto Blanco</a> explica lo que anade cada dia adicional.</p>
<h2>La cuestion del transporte</h2>
<p>Una excursion asi depende del vehiculo y el conductor. Lee nuestra guia sobre <a href="/es/blogs/cairo-to-white-desert-transport-options">como ir del Cairo al Desierto Blanco</a> antes de reservar.</p>
<h2>Que llevar</h2>
<p>Capas de ropa, calzado para caminar, dos o tres botellas de agua por persona, gafas de sol, gorra y bateria extra para el telefono.</p>
<h2>Para quien es este viaje?</h2>
<p>Para alguien en El Cairo con exactamente un dia libre, alguien eligiendo entre el Desierto Blanco y nada, o alguien que quiere una vista previa. Una salida muy temprana es un precio pequeno por una tarde entre torres de tiza unicas en el planeta.</p>`,

  it: `<p>La maggior parte degli itinerari per il Deserto Bianco presuppone due o tre giorni. Una notte sotto le stelle, una mattina tranquilla a guardare le formazioni di gesso cambiare colore all'alba. Questo e il modo giusto per vederlo. Ma molti viaggiatori non possono davvero — un viaggio di lavoro al Cairo con solo un sabato libero. La domanda non e se saltare il Deserto Bianco, ma se e fattibile in un giorno solo.</p>
<p><strong>La risposta onesta e si, con una condizione: devi partire davvero presto — prima dell'alba, non dopo.</strong></p>
<h2>Perche partire presto cambia tutto</h2>
<p>Parti ben prima dell'alba e l'intera giornata si espande. Sei in strada prima che il traffico cittadino aumenti, e quando arrivi all'oasi di Bahariya il caldo non e ancora un fattore.</p>
<h2>Come si presenta davvero la giornata</h2>
<p>La giornata inizia uscendo da un Cairo silenzioso, caffe in macchina. Prima tappa a Bahariya per il cambio ai 4x4. Poi diverse ore senza fretta nel Deserto Bianco: il Fungo, il Pollo, la valle dei pinnacoli. Pranzo all'ombra delle formazioni. Ritorno con ancora luce del giorno.</p>
<h2>Un giorno e davvero sufficiente?</h2>
<p>Onestamente — sufficiente per capire perche le persone si innamorano del Deserto Bianco. La nostra analisi di <a href="/it/blogs/how-many-days-white-desert-egypt">quanti giorni necessita davvero il Deserto Bianco</a> spiega cosa aggiunge ogni giorno in piu.</p>
<h2>La questione del trasporto</h2>
<p>Una gita del genere dipende dal veicolo e dall'autista. Leggi la nostra guida su <a href="/it/blogs/cairo-to-white-desert-transport-options">come andare dal Cairo al Deserto Bianco</a> prima di prenotare.</p>
<h2>Cosa portare</h2>
<p>Strati di abbigliamento, scarpe da trekking, due o tre bottiglie d'acqua a persona, occhiali da sole, cappello e caricatore extra per il telefono.</p>
<h2>Per chi e questo viaggio?</h2>
<p>Per chi e gia al Cairo con esattamente un giorno libero, chi sceglie tra il Deserto Bianco e niente, o chi vuole un'anteprima. Una partenza molto mattutina e un piccolo prezzo per un pomeriggio tra torri di gesso uniche al mondo.</p>`,

  nl: `<p>De meeste Witte Woestijn-itineraries gaan ervan uit dat u twee of drie dagen heeft. Een nacht onder de sterren, een rustige ochtend om de krijtformaties van kleur te zien veranderen bij zonsopgang. Dat is de juiste manier om het te zien. Maar veel reizigers kunnen dat echt niet — een zakenreis naar Caïro met slechts een vrije zaterdag. De vraag is niet of je de Witte Woestijn overslaat, maar of het op een dag haalbaar is.</p>
<p><strong>Het eerlijke antwoord is ja, met een voorwaarde: je moet echt vroeg vertrekken — voor zonsopgang, niet erna.</strong></p>
<h2>Waarom vroeg vertrekken alles verandert</h2>
<p>Vertrek ruim voor zonsopgang en de hele dag strekt zich uit. U bent onderweg voordat het stadsverkeer toeneemt, en tegen de tijd dat u de Bahariya Oase bereikt, is de hitte nog geen factor.</p>
<h2>Hoe de dag er echt uitziet</h2>
<p>De dag begint met het verlaten van het stille Caïro, koffie in de auto. Eerste stop in Bahariya voor de overstap naar 4x4. Vervolgens enkele ontspannen uren in de Witte Woestijn: de Paddenstoel, de Kip, het dal van de pinakels. Lunch in de schaduw van de formaties. Terugreis nog bij daglicht.</p>
<h2>Is een dag echt genoeg?</h2>
<p>Eerlijk gezegd — genoeg om te begrijpen waarom mensen verliefd worden op de Witte Woestijn. Onze analyse van <a href="/nl/blogs/how-many-days-white-desert-egypt">hoeveel dagen de Witte Woestijn echt nodig heeft</a> legt uit wat elke extra dag toevoegt.</p>
<h2>De transportvraag</h2>
<p>Zo'n dagtocht staat of valt met het voertuig en de chauffeur. Lees onze gids over <a href="/nl/blogs/cairo-to-white-desert-transport-options">de reis van Caïro naar de Witte Woestijn</a> voordat u iets boekt.</p>
<h2>Wat u moet meenemen</h2>
<p>Lagen kleding, wandelschoenen, twee tot drie waterflessen per persoon, zonnebril, hoed en een reservebatterij voor de telefoon.</p>
<h2>Voor wie is deze trip?</h2>
<p>Voor iemand al in Caïro met precies een vrije dag, iemand die kiest tussen de Witte Woestijn en niets, of iemand die een voorproefje wil. Een vroeg vertrek is een kleine prijs voor een middag tussen krijtrotsen die nergens anders ter wereld voorkomen.</p>`,

  pt: `<p>A maioria dos roteiros para o Deserto Branco pressupoe dois ou tres dias. Uma noite sob as estrelas, uma manha tranquila vendo as formacoes de giz mudar de cor ao amanhecer. Essa e a maneira certa de ve-lo. Mas muitos viajantes realmente nao podem — uma viagem de negocios ao Cairo com apenas um sabado livre. A questao nao e pular o Deserto Branco, mas se e factivel em um dia so.</p>
<p><strong>A resposta honesta e sim, com uma condicao: voce precisa sair bem cedo — antes do amanhecer, nao depois.</strong></p>
<h2>Por que sair cedo muda tudo</h2>
<p>Parta bem antes do amanhecer e o dia inteiro se expande. Voce esta na estrada antes que o transito da cidade aumente, e quando chega ao oasis de Bahariya o calor ainda nao e um fator.</p>
<h2>Como o dia realmente parece</h2>
<p>O dia comeca saindo de um Cairo silencioso, cafe no carro. Primeira parada em Bahariya para trocar para 4x4. Depois varias horas sem pressa no Deserto Branco: o Cogumelo, o Frango, o vale dos pinaculos. Almoco na sombra das formacoes. Retorno ainda com luz do dia.</p>
<h2>Um dia e realmente suficiente?</h2>
<p>Honestamente — suficiente para entender por que as pessoas se apaixonam pelo Deserto Branco. Nossa analise de <a href="/pt/blogs/how-many-days-white-desert-egypt">quantos dias o Deserto Branco realmente precisa</a> explica o que cada dia adicional acrescenta.</p>
<h2>A questao do transporte</h2>
<p>Uma excursao assim depende do veiculo e do motorista. Leia nosso guia sobre <a href="/pt/blogs/cairo-to-white-desert-transport-options">como ir do Cairo ao Deserto Branco</a> antes de reservar.</p>
<h2>O que levar</h2>
<p>Camadas de roupa, calcado para caminhada, duas ou tres garrafas de agua por pessoa, oculos de sol, chapeu e bateria extra para o telefone.</p>
<h2>Para quem e essa viagem?</h2>
<p>Para quem ja esta no Cairo com exatamente um dia livre, quem escolhe entre o Deserto Branco e nada, ou quem quer uma previa. Uma saida muito cedo e um preco pequeno por uma tarde entre torres de giz unicas no planeta.</p>`,

  zh: `<p>大多数白色沙漠行程都假设你有两三天时间：在星空下过夜，在日出时悠闲地欣赏白垩岩层变换颜色。这是游览的正确方式，如果你能安排到，就应该去。但很多旅行者真的做不到——到开罗出差只有一个周六空闲，或者想在不牺牲半个假期的情况下领略埃及的沙漠。对于这类旅行者，问题不是要不要去白色沙漠，而是一天能不能搞定，值不值得。</p>
<p><strong>诚实的回答是：能——但有一个条件：必须早出发，在日出之前，而不是之后。</strong></p>
<h2>为什么早出发能改变一切</h2>
<p>在日出前出发，整个白天都会变得宽裕。你在城市堵车之前上路，到达巴哈利亚绿洲时气温尚未升高，光线也会在白垩岩层上投下有趣的效果，而不是被正午的强光压平。</p>
<h2>这一天实际上是什么样的</h2>
<p>从安静的开罗出发，咖啡在车里喝。第一站是巴哈利亚绿洲，换乘四驱车。然后在白色沙漠里度过几个不慌不忙的小时：蘑菇岩、鸡形岩和著名的狮身人面岩、针状岩谷。在大型岩层的阴影下午餐。趁着下午还有阳光返程。</p>
<h2>一天真的够吗？</h2>
<p>说实话——够让你明白为什么人们会爱上白色沙漠，但不够让你看尽一切。我们关于<a href="/zh/blogs/how-many-days-white-desert-egypt">白色沙漠到底需要几天</a>的详解能帮你判断每多一天能带来什么。</p>
<h2>交通问题</h2>
<p>这样的一日游成败很大程度上取决于车辆和司机。在预订前，值得阅读我们关于<a href="/zh/blogs/cairo-to-white-desert-transport-options">从开罗前往白色沙漠</a>的指南。</p>
<h2>需要带什么</h2>
<p>分层穿搭（早晨凉、中午热）、适合沙地行走的鞋子、每人至少两三瓶水、太阳镜、遮阳帽，以及手机备用充电宝。</p>
<h2>这次旅行适合谁？</h2>
<p>适合已经在开罗、正好有一天空闲的人；在白色沙漠和什么都不去之间做选择的人；或者想提前体验、为将来的深度沙漠之旅做准备的人。极早出发换来的是在地球上独一无二的白垩塔群中漫步整个下午——当晚就能回到开罗自己的床上。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "Can you visit the White Desert as a day trip from Cairo?",
    questionAr: "هل يمكن زيارة الصحراء البيضاء كرحلة يوم واحد من القاهرة؟",
    questionI18n: {
      fr: "Peut-on visiter le Desert Blanc en excursion d'une journee depuis le Caire ?",
      de: "Kann man die Weisse Wuste als Tagesausflug von Kairo aus besuchen?",
      es: "Se puede visitar el Desierto Blanco como excursion de un dia desde El Cairo?",
      it: "Si puo visitare il Deserto Bianco come gita di un giorno dal Cairo?",
      nl: "Kun je de Witte Woestijn bezoeken als dagtocht vanuit Caïro?",
      pt: "Da para visitar o Deserto Branco como excursao de um dia a partir do Cairo?",
      zh: "可以从开罗出发将白色沙漠作为一日游吗？",
    },
    answerEn:
      "Yes, but only if you leave well before sunrise — ideally around 4–5am. The drive is roughly four hours each way. Leaving early gives you four to five unrushed hours in the desert itself before a comfortable return drive. Leaving after sunrise compresses the time severely and you'll spend the return leg racing darkness.",
    answerAr:
      "نعم، لكن فقط إذا غادرت قبل شروق الشمس بوقت كافٍ — من الناحية المثالية حوالي الساعة 4-5 صباحًا. المسافة تستغرق نحو أربع ساعات في كل اتجاه. الانطلاق المبكر يمنحك أربع إلى خمس ساعات غير مستعجلة في الصحراء نفسها قبل رحلة العودة المريحة. الانطلاق بعد الشروق يضغط الوقت بشدة وستجد نفسك في طريق العودة تسابق الظلام.",
    answerI18n: {
      fr: "Oui, mais seulement si vous partez bien avant le lever du soleil — idealement vers 4-5h du matin. Le trajet dure environ quatre heures dans chaque sens. Partir tot vous donne quatre a cinq heures sans pression dans le desert avant un retour confortable.",
      de: "Ja, aber nur, wenn Sie gut vor Sonnenaufgang aufbrechen — idealerweise gegen 4-5 Uhr morgens. Die Fahrt dauert jeweils etwa vier Stunden. Ein fruher Start gibt Ihnen vier bis funf entspannte Stunden in der Wuste vor der Ruckfahrt.",
      es: "Si, pero solo si sales bien antes del amanecer — idealmente alrededor de las 4-5 de la manana. El trayecto dura unas cuatro horas en cada sentido. Salir temprano te da cuatro o cinco horas relajadas en el desierto antes del regreso.",
      it: "Si, ma solo se si parte ben prima dell'alba — idealmente verso le 4-5 del mattino. Il tragitto dura circa quattro ore in ogni direzione. Partire presto ti da quattro o cinque ore senza fretta nel deserto prima del comodo ritorno.",
      nl: "Ja, maar alleen als u ruim voor zonsopgang vertrekt — idealiter rond 4-5 uur 's ochtends. De rit duurt ongeveer vier uur in elke richting. Vroeg vertrekken geeft u vier tot vijf ontspannen uren in de woestijn voor de comfortabele terugreis.",
      pt: "Sim, mas somente se voce sair bem antes do amanhecer — idealmente por volta das 4-5h da manha. A viagem leva cerca de quatro horas em cada sentido. Partir cedo da-lhe quatro a cinco horas sem pressa no deserto antes do retorno confortavel.",
      zh: "可以，但前提是在日出前出发——理想情况是凌晨4到5点。单程约四小时。早出发能让你在沙漠里度过四到五个不慌不忙的小时，然后从容返回。日出后出发会严重压缩时间，回程时你将与黑暗赛跑。",
    },
    sortOrder: 0,
  },
  {
    questionEn: "What is the White Desert and why do people visit it?",
    questionAr: "ما هي الصحراء البيضاء ولماذا يزورها الناس؟",
    questionI18n: {
      fr: "Qu'est-ce que le Desert Blanc et pourquoi les gens le visitent-ils ?",
      de: "Was ist die Weisse Wuste und warum besuchen Menschen sie?",
      es: "Que es el Desierto Blanco y por que la gente lo visita?",
      it: "Cos'e il Deserto Bianco e perche la gente lo visita?",
      nl: "Wat is de Witte Woestijn en waarom bezoeken mensen het?",
      pt: "O que e o Deserto Branco e por que as pessoas o visitam?",
      zh: "白色沙漠是什么？为什么人们要去游览？",
    },
    answerEn:
      "The White Desert (Sahara el-Beyda) is a national park in Egypt's Western Desert, roughly 500km southwest of Cairo. It's famous for its surreal white chalk formations — wind-eroded pinnacles, mushroom shapes, and abstract sculptures that look unlike any desert landscape on Earth. Most visitors come for overnight camping under the stars, but a day trip is also possible with an early start.",
    answerAr:
      "الصحراء البيضاء (صحراء البيضاء) هي محمية طبيعية في الصحراء الغربية المصرية، تبعد نحو 500 كيلومتر جنوب غرب القاهرة. تشتهر بتكوينات الطباشير الأبيض الخيالية — أعمدة منحوتة بالرياح وأشكال كأعشاش الغراب والمشروم وأبو الهول لا تشبه أي منظر صحراوي آخر على الأرض. يأتي معظم الزوار من أجل التخييم ليلًا تحت النجوم، لكن رحلة يوم واحد ممكنة أيضًا مع انطلاق مبكر.",
    answerI18n: {
      fr: "Le Desert Blanc (Sahara el-Beyda) est un parc national dans le Desert Occidental d'Egypte, a environ 500 km au sud-ouest du Caire. Il est celebre pour ses formations de craie blanche surreelles — des pinacles erodes par le vent avec des formes de champignons et de sphinx qui ne ressemblent a aucun autre paysage deserrique sur Terre.",
      de: "Die Weisse Wuste (Sahara el-Beyda) ist ein Nationalpark in Agyptens Westlicher Wuste, etwa 500 km sudwestlich von Kairo. Sie ist bekannt fur ihre surrealen weissen Kreideformationen — windgescbleuderte Pinnacles in Pilz- und Sphinx-Form, die keiner anderen Wustenlandschaft der Erde ahneln.",
      es: "El Desierto Blanco (Sahara el-Beyda) es un parque nacional en el Desierto Occidental de Egipto, a unos 500 km al suroeste de El Cairo. Es famoso por sus surrealistas formaciones de tiza blanca — pinnaculos erosionados por el viento con formas de champinon y esfinge que no se parecen a ningun otro paisaje desertico del mundo.",
      it: "Il Deserto Bianco (Sahara el-Beyda) e un parco nazionale nel Deserto Occidentale dell'Egitto, a circa 500 km a sudovest del Cairo. E famoso per le sue surreali formazioni di gesso bianco — pinnacoli erosi dal vento a forma di fungo e sfinge che non assomigliano a nessun altro paesaggio desertico sulla Terra.",
      nl: "De Witte Woestijn (Sahara el-Beyda) is een nationaal park in de Westelijke Woestijn van Egypte, ongeveer 500 km ten zuidwesten van Caïro. Het is beroemd om zijn surreale witte krijtformaties — door wind geërodeerde pinakels in paddenstoel- en sfinxvorm die op geen ander woestijnlandschap ter wereld lijken.",
      pt: "O Deserto Branco (Sahara el-Beyda) e um parque nacional no Deserto Ocidental do Egito, a cerca de 500 km a sudoeste do Cairo. E famoso por suas surrealistas formacoes de giz branco — pinaculos erodidos pelo vento em formas de cogumelo e esfinge que nao se parecem com nenhuma outra paisagem desertica na Terra.",
      zh: "白色沙漠（Sahara el-Beyda）是埃及西部沙漠中的一个国家公园，位于开罗西南约500公里处。以其超现实的白色白垩岩层闻名——被风侵蚀成蘑菇状、鸡形和狮身人面状的尖塔，与地球上任何其他沙漠景观都截然不同。大多数游客专程来此露营观星，但提前出发也可以完成一日游。",
    },
    sortOrder: 1,
  },
  {
    questionEn:
      "What should I pack for a one-day White Desert trip from Cairo?",
    questionAr: "ماذا أحمل معي لرحلة يوم واحد إلى الصحراء البيضاء من القاهرة؟",
    questionI18n: {
      fr: "Que dois-je emporter pour une excursion d'une journee au Desert Blanc depuis le Caire ?",
      de: "Was soll ich fur einen Tagesausflug in die Weisse Wuste von Kairo aus einpacken?",
      es: "Que debo llevar para una excursion de un dia al Desierto Blanco desde El Cairo?",
      it: "Cosa devo portare per una gita di un giorno nel Deserto Bianco dal Cairo?",
      nl: "Wat moet ik meenemen voor een dagtocht naar de Witte Woestijn vanuit Caïro?",
      pt: "O que devo levar para uma excursao de um dia ao Deserto Branco a partir do Cairo?",
      zh: "从开罗出发一日游白色沙漠应该带什么？",
    },
    answerEn:
      "Layers are essential — early mornings in the desert are surprisingly cool, afternoons get hot. Wear walking shoes suitable for sand and soft rock. Bring at least 2–3 litres of water per person, sunglasses, a hat (the reflected glare off white chalk is intense), and a portable phone charger. A camera with extra storage is worth it — the formations photograph well from every angle.",
    answerAr:
      "الطبقات ضرورية — الصباح الباكر في الصحراء بارد بشكل مفاجئ، وبعد الظهر يصبح حارًا. ارتدِ حذاءً للمشي مناسبًا للرمال والصخور الناعمة. أحضر على الأقل 2-3 لترات من الماء للفرد، نظارة شمسية، قبعة (الانعكاس على الطباشير الأبيض قوي)، وشاحن هاتف محمول. كاميرا باحتياطي من الذاكرة تستحق العناء — التكوينات تخرج في صور رائعة من كل زاوية.",
    answerI18n: {
      fr: "Des couches sont essentielles — les matins tot dans le desert sont etonnamment frais, les apres-midi deviennent chauds. Portez des chaussures de marche adaptees au sable. Apportez au moins 2-3 litres d'eau par personne, lunettes de soleil, chapeau et un chargeur portable.",
      de: "Schichten sind unerlasslich — fruhe Morgen in der Wuste sind uberraschend kuhl, Nachmittage werden heis. Tragen Sie Wanderschuhe fur Sand. Bringen Sie mindestens 2-3 Liter Wasser pro Person, Sonnenbrille, Hut und ein tragbares Ladegerat.",
      es: "Las capas son esenciales — las mananas temprano en el desierto son sorprendentemente frescas, las tardes se calientan. Lleva calzado de senderismo apto para arena. Trae al menos 2-3 litros de agua por persona, gafas de sol, sombrero y un cargador portatil.",
      it: "Gli strati sono essenziali — le prime mattine nel deserto sono sorprendentemente fresche, i pomeriggi diventano caldi. Indossa scarpe da trekking adatte alla sabbia. Porta almeno 2-3 litri d'acqua a persona, occhiali da sole, cappello e un caricatore portatile.",
      nl: "Lagen zijn essentieel — vroege ochtenden in de woestijn zijn verrassend koel, middagen worden warm. Draag wandelschoenen geschikt voor zand. Breng minstens 2-3 liter water per persoon, zonnebril, hoed en een draagbare oplader.",
      pt: "Camadas sao essenciais — as primeiras manha no deserto sao surpreendentemente frescas, as tardes ficam quentes. Use calcado de caminhada para areia. Leve pelo menos 2-3 litros de agua por pessoa, oculos de sol, chapeu e um carregador portatil.",
      zh: "分层穿搭必不可少——沙漠清晨出乎意料地凉爽，下午则会变热。穿适合沙地和软石的步行鞋。每人至少带2至3升水、太阳镜（白垩反光很强）、遮阳帽和便携充电宝。带上存储充足的相机也值得——岩层从每个角度都很上镜。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "white-desert-one-day-itinerary",
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
  image: "/img/white-desert-one-day-itinerary.webp",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "white desert egypt",
    "white desert day trip",
    "cairo day trip",
    "sahara el beyda",
    "bahariya oasis",
    "western desert egypt",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "white desert day trip from cairo",
    "white desert one day itinerary",
  ]),
  secondaryKeywords: JSON.stringify([
    "white desert egypt tour",
    "bahariya white desert",
    "cairo to white desert",
    "egypt desert day trip",
    "white desert chalk formations",
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
