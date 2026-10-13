import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── Arabic content (7 sections — includes AR-only "ما يحمله المخيم كل مساء") ───
const contentAr = `<p>معظم الرحلات الصحراوية في مصر تستخدم الجمال كما تستخدم معظم الرحلات أي وسيلة نقل أخرى — ركوب قصير من أجل الصور، ربما ساعة عند الغروب، ثم العودة إلى سيارة الدفع الرباعي للمسافة الحقيقية. لا خطأ في ذلك، لكنها أيضًا تجربة مختلفة جذريًا عما كانت الجمال مُستخدمة له فعلًا، لآلاف السنين: ليست أداة تصوير، بل الطريقة الوحيدة التي عبر بها أي شخص هذه الصحراء على الإطلاق.</p>

<p><strong>رحلة ثمانية أيام على ظهر الجمل مبنية حول استرجاع تلك العلاقة الأقدم — لا محاكاتها لبعد ظهر واحد، بل العيش فعليًا داخلها حتى تبدأ بالشعور بأنها ببساطة طريقتك في السفر.</strong></p>

<h2>لماذا ثمانية أيام بالتحديد</h2>
<p>ركوب جمل لساعة واحدة لا يعلّمك تقريبًا شيئًا عن الجمال سوى أنها طويلة وأن السرج يحتاج بعض التعود. يوم كامل يعلّمك أن جسمك يحتاج تكيفًا حقيقيًا — ذلك الألم المحدد في عضلات لم تكن تعلم أنك تستخدمها للتوازن، والإيقاع الذي تستقر فيه في النهاية بعد أن تتوقف عن مصارعة حركة الحيوان وتترك له حملك بدلًا من التصلب ضده.</p>

<p>في اليوم الثالث أو الرابع تقريبًا يحدث التغيير الحقيقي. الألم الذي ميّز اليومين الأولين يبدأ بالتراجع مع تكيّف جسمك. تتوقف عن التفكير في آلية الحفاظ على التوازن وتبدأ بملاحظة المشهد الطبيعي يتغير حولك بدلًا من ذلك. بحلول اليوم الخامس أو السادس، يتولى إيقاع الرحلة نفسه السيطرة: الاستيقاظ مع أول الضوء، السير خلال ساعات الصباح الأبرد، الراحة خلال أسوأ حر الظهيرة، السير مجددًا مع ليونة الضوء نحو المساء، التخييم، والتكرار. هذا الإيقاع هو الهدف الحقيقي لرحلة ثمانية أيام — فهي طويلة بما يكفي لتتوقف عن كونها شيئًا جديدًا وتبدأ بكونها ببساطة طريقة سير أيامك.</p>

<h2>ماذا تبدو الأيام فعليًا</h2>
<p>تبدأ الصباحات مبكرًا، غالبًا قبل شروق الشمس الكامل، لأن الجمال وسائقيها يعملون بشكل أفضل في الساعات الأبرد، ولأن مشاهدة ألوان الصحراء تتغير عند الفجر من ظهر الجمل هي بشكل موثوق واحدة من أفضل لحظات الرحلة. الوتيرة غير متسرعة بتصميمها — سرعة سير الجمل الطبيعية تقارب أربعة إلى خمسة كيلومترات في الساعة، وهو ما يبدو بطيئًا إلى أن تدرك أنه بالضبط سريع بما يكفي لمشاهدة المشهد الطبيعي يتغير فعلًا بدلًا من أن يمر أمامك سريعًا.</p>

<p>وقت الظهيرة مخصص للراحة، غالبًا في أي ظل تقدمه التضاريس — نتوء صخري، مجموعة من أشجار السنط، أحيانًا لا شيء أكثر من شريط ظل تلقيه الحيوانات نفسها. هذا هو الوقت الذي تحدث فيه معظم المحادثات الحقيقية في الرحلة، بين المسافرين ومع المرشدين البدو الذين قضوا حياتهم يقرؤون هذه التضاريس بطرق لا يستطيع أي كتاب دليل أن يسجلها. تجلب فترات بعد الظهر مسيرة ثانية قبل أن يتحول الضوء إلى الذهبي، وتنتهي المساءات حول نار، مع وجبة تُطبخ عليها وسماء تُظهر أكثر من النجوم التي رآها معظم المسافرين دفعة واحدة.</p>

<h2>المعرفة البدوية التي تجعل هذا ممكنًا</h2>
<p>لا شيء من هذا ينجح بدون مرشدين نشأوا يقرؤون هذا المشهد الطبيعي — يعرفون أي الآبار لا تزال تحمل ماءً في هذا الوقت من السنة، كيف يقرؤون تغيرات الطقس قبل وصولها، أي المسارات استخدمتها قوافل الجمال لأجيال لأنها ببساطة الطرق التي تنجح. هذه المعرفة لا تأتي من كتيب تدريب؛ إنها تراكمت عبر أعمار كاملة، وتنتقل داخل عائلات عاشت بجانب هذه الصحراء، لا زارتها فقط.</p>

<p>قضاء ثمانية أيام مع مرشد من هذا النوع يعني الفرق بين رؤية حياة البدو من مسافة محترمة واحتضانها فعليًا لأسبوع كامل — تشارك وجبات بالطريقة التي تُؤكل بها فعلًا هنا، تعلّم كيف يُجهّز المخيم ويُفك بكفاءة، اكتساب مجموعة من المهارات العملية التي تفرق بين الصراع مع حيوان عنيد والعمل معه ببساطة. المسافرون المهتمون بهذا السياق الأوسع سيجدون معلومات مفيدة في مقالنا عن <a href="/ar/blogs/bedouin-culture-egypt-desert">الثقافة البدوية في الصحراء المصرية</a>.</p>

<h2>تحضير جسمك (وتوقعاتك)</h2>
<p>الصدق مهم هنا: اليومان الأولان غير مريحين فعلًا لمعظم الناس، بغض النظر عن مستوى لياقتهم. ركوب الجمل يستخدم عضلات — خصوصًا في الحوض والفخذين الداخليين وأسفل الظهر — لا يستخدمها حتى العدّاؤون أو راكبو الدراجات المنتظمون بالطريقة نفسها. توقع هذا الانزعاج بدلًا من أن يفاجئك يصنع فرقًا حقيقيًا؛ معظم الرحلات مُصممة بمسافات ركوب أقصر في اليومين الأولين تحديدًا لمنح الأجسام وقتًا للتكيف قبل المراحل الأطول في وقت لاحق من الأسبوع.</p>

<p>الملابس مهمة أكثر مما يتوقع الناس أيضًا — طبقات فضفاضة قابلة للتنفس تغطي الجلد من التعرض للشمس، مع انتباه خاص لأي شيء قد يحتك بالسرج على مدى ساعات متعددة. للمسافرين الراغبين في فهم أعمق لما تتضمنه السفر بالجمال فعلًا قبل الالتزام بأسبوع كامل، يغطي <a href="/ar/blogs/camel-safari-egypt-guide">دليلنا لرحلات السفاري بالجمال في مصر</a> الأساسيات العملية — الوتيرة، المعدات، والتوقعات الواقعية.</p>

<h2>لمن تناسب هذه الرحلة فعلًا</h2>
<p>رحلة ثمانية أيام على ظهر الجمل ليست الخيار المناسب لكل مسافر، ويستحق الأمر أن تكون صادقًا بشأن ذلك قبل الحجز. تناسب الأشخاص الراغبين فعلًا في الانفصال — لا محطات شحن، إشارة هاتف محدودة أو معدومة في معظم الطريق، ووتيرة تجعل التحقق من البريد الإلكتروني أو تمرير شاشة الهاتف مستحيلًا ببساطة لا غير مستحسن فقط. تناسب أيضًا المسافرين المرتاحين بشكل معقول مع الانزعاج الجسدي كجزء من التجربة بدلًا من شيء يجب إزالته تمامًا.</p>

<p>تميل إلى جذب المسافرين الذين جربوا فعلًا رحلة صحراوية أقصر — سفاري يوم واحد، ربما رحلة تخييم يومين أو ثلاثة — وخرجوا منها راغبين في مزيد من نفس هذا الشعور بالتحديد لا أقل منه. بالنسبة لتجربة صحراوية أولى، رحلة أقصر غالبًا هي نقطة الدخول الأفضل.</p>

<h2>ما يحمله المخيم كل مساء</h2>
<p>جانب يُفاجئ كثيرًا من المسافرين لأول مرة هو مدى اعتماد الرحلة بالكامل على ما تحمله الجمال نفسها. لا شاحنة دعم تتبع القافلة، لا إمكانية لطلب شيء نسيته في المدينة؛ كل خيمة، كل وعاء طبخ، كل بطانية، يُحمل على ظهر حيوان طوال اليوم ثم يُفرغ عند التوقف. هذا يجعل عملية تجهيز المخيم وفكه في حد ذاتها جزءًا من الرحلة، لا مهمة لوجستية منفصلة عنها — ومعظم المسافرين يجدون أنفسهم، بحلول اليوم الرابع أو الخامس، يشاركون فعليًا في هذه العملية بدلًا من مشاهدتها فقط.</p>

<p>هذا الاعتماد الكامل على ما تحمله القافلة هو أيضًا ما يفرض نوعًا من التواضع على كل من يخوض هذه الرحلة. لا رفاهية إضافية، لا بديل جاهز إذا تعطل شيء، فقط ما خططت له مسبقًا وما يستطيع مرشدوك البدو ابتكاره من الموارد المتاحة. بالنسبة لكثيرين، هذا بالتحديد هو الجزء الذي يتذكرونه أكثر من أي تكوين صخري أو منظر غروب.</p>

<h2>ماذا تخرج به فعلًا من هذه التجربة</h2>
<p>اسأل أي شخص خاض رحلة جمال متعددة الأيام عما يبقى معه، ونادرًا ما تكون معلمًا دراميًا واحدًا. إنه الإيقاع المتراكم — جودة الصمت المحددة التي لا توجد إلا على هذا البعد من أي طريق، السماء ليلًا بعد أن تتكيف عيناك تمامًا مع الظلام، الرابطة الخاصة التي تتشكل مع حيوان قضيت أسبوعًا تتعلم كيف تتحرك معه بدلًا من مجرد الجلوس عليه. إنها أبطأ من أي طريقة أخرى تقريبًا لرؤية الصحراء، وهذا البطء بالضبط هو الهدف: ثمانية أيام طويلة بما يكفي لتتوقف عن معاملة الرحلة كشيء تفعله وتبدأ بتجربتها كمكان أنت فيه ببساطة.</p>`;

// ─── English content (6 sections) ───
const contentEn = `<p>Most desert trips in Egypt use camels the way most trips use any other vehicle — a short ride for photos, maybe an hour at sunset, then back into the 4x4 for the real distance. There's nothing wrong with that. It's a reasonable way to get a taste of something without committing a week of your life to it. But it's also a fundamentally different experience from what camels were actually for, for thousands of years, across this landscape: not a photo prop, but the only way anyone crossed this desert at all.</p>

<p><strong>An eight-day camelback journey is built around recovering that older relationship — not simulating it for an afternoon, but actually living inside it long enough that it stops feeling like an activity and starts feeling like simply how you're traveling.</strong></p>

<h2>Why Eight Days Specifically</h2>
<p>A one-hour camel ride teaches you almost nothing about camels except that they're tall and the saddle takes some getting used to. A full day teaches you that your body needs real adjustment — the particular ache in muscles you didn't know you used for balance, the rhythm you eventually fall into once you stop fighting the animal's gait and let it carry you instead of bracing against it.</p>

<p>It's really around day three or four that something shifts. The soreness that defined the first two days starts to fade as your body adapts. You stop thinking about the mechanics of staying balanced and start noticing the landscape changing around you instead — the particular way a camel's elevated vantage point changes what you see and how far you see it. By day five or six, the rhythm of the trip itself takes over: wake with first light, walk through the cooler morning hours, rest through the worst of the midday heat, walk again as the light softens toward evening, camp, repeat. That rhythm is the actual point of an eight-day trip — it's long enough to stop being a novelty and start being simply how your days work, which a one- or two-day version never has time to become.</p>

<h2>What the Days Actually Look Like</h2>
<p>Mornings start early, often before full sunrise, because camels and their handlers both work better in the cooler hours and because watching the desert color shift at dawn from camelback is reliably one of the trip's best moments. The pace is unhurried by design — a camel's natural walking speed is around four to five kilometers an hour, which sounds slow until you realize it's exactly fast enough to actually watch the landscape change rather than blur past it.</p>

<p>Midday is for rest, usually in whatever shade the terrain offers — a rock outcrop, a stand of acacia, sometimes nothing more than a strip of shadow cast by the animals themselves. This is when most of the trip's real conversation happens, between travelers and with the Bedouin guides who've spent their lives reading this terrain in ways no guidebook captures. Afternoons bring a second walking stretch before the light turns gold, and evenings end around a fire, with a meal cooked over it and a sky that, this far from any city, shows more stars than most travelers have ever actually seen at once.</p>

<h2>The Bedouin Knowledge That Makes This Possible</h2>
<p>None of this works without guides who've grown up reading this landscape — knowing which wells still hold water this time of year, how to read weather shifts before they arrive, which routes a camel train has used for generations because they're simply the ones that work. This knowledge doesn't come from a training manual; it's accumulated across lifetimes and passed down inside families who've lived alongside this desert, not just visited it.</p>

<p>Spending eight days with that kind of guide means the difference between seeing Bedouin life from a respectful distance and actually being folded into it for a week — sharing meals the way they're actually eaten out here, learning how a camp gets set and struck efficiently, picking up the handful of practical skills that make the difference between struggling with a stubborn animal and simply working with one. Travelers curious about that broader context will find useful background in our piece on <a href="/en/blogs/bedouin-culture-egypt-desert">Bedouin culture in the Egyptian desert</a>.</p>

<h2>Preparing Your Body (and Your Expectations)</h2>
<p>Honesty matters here: the first two days are genuinely uncomfortable for almost everyone, regardless of fitness level. Camelback uses muscles — particularly through the hips, inner thighs, and lower back — that even regular runners or cyclists rarely engage the same way. Expecting that discomfort rather than being blindsided by it makes a real difference; most trips are structured with shorter riding stretches in the first two days specifically to let bodies adjust before the longer stages later in the week.</p>

<p>Clothing matters more than people expect too — loose, breathable layers that cover skin from sun exposure, with specific attention to anything that might chafe against the saddle over multiple hours. For travelers who want a fuller grounding in what camel travel actually involves before committing a full week to it, our <a href="/en/blogs/camel-safari-egypt-guide">camel safari guide to Egypt</a> covers the practical essentials — pacing, gear, and realistic expectations — that make the difference between an eight-day trip you remember fondly and one you spend mostly counting down.</p>

<h2>Who This Trip Actually Suits</h2>
<p>An eight-day camelback journey isn't the right fit for every traveler, and it's worth being honest about that before booking. It suits people who genuinely want to disconnect — no charging stations, limited or no phone signal for most of the route, and a pace that makes checking email or scrolling a feed simply impossible rather than merely inadvisable. It also suits travelers who are reasonably comfortable with physical discomfort as part of an experience rather than something to be engineered out of it entirely; this isn't a trip for anyone expecting hotel-level comfort at the end of each day.</p>

<p>It tends to appeal most to travelers who've already done a shorter desert trip — a day safari, maybe a two- or three-day camping trip — and come away wanting more of exactly that feeling rather than less. For a first-ever desert experience, a shorter trip is usually the better entry point; the eight-day version rewards people who already know they want this particular kind of slow, immersive travel and are ready to commit a full week to it.</p>

<h2>What You Actually Take Away From It</h2>
<p>Ask anyone who's done a multi-day camel trek what stays with them, and it's rarely a single dramatic landmark. It's the accumulated rhythm — the specific quality of silence that only exists this far from any road, the sky at night once your eyes fully adjust to the dark, the particular bond that forms with an animal you've spent a week learning to move with rather than just sit on. It's slower than almost any other way to see the desert, and that slowness is exactly the point: eight days is long enough to stop treating the journey as something you're doing and start experiencing it as simply where you are.</p>`;

// ─── i18n content (7 other locales) ───
const contentI18n = JSON.stringify({
  fr: `<h2>Huit jours à dos de chameau en Égypte</h2>
<p>La plupart des circuits désertiques en Égypte utilisent les dromadaires comme n'importe quel autre véhicule — une courte balade pour les photos, peut-être une heure au coucher du soleil. Un voyage de huit jours à dos de chameau est une expérience fondamentalement différente : récupérer cette relation ancienne avec ces animaux qui, pendant des millénaires, furent le seul moyen de traverser ce désert.</p>
<h2>Pourquoi huit jours spécifiquement</h2>
<p>C'est vers le troisième ou quatrième jour que quelque chose change. Les courbatures des premiers jours commencent à s'estomper et le rythme s'installe : lever au premier jour, marche dans la fraîcheur matinale, repos à midi, marche en fin d'après-midi, campement. Ce rythme est le véritable objectif d'un voyage de huit jours — suffisamment long pour que la nouveauté cède la place à une simple façon de voyager.</p>
<h2>La connaissance bédouine</h2>
<p>Rien de tout cela ne fonctionne sans des guides qui ont grandi en lisant ce paysage — sachant quels puits contiennent encore de l'eau, comment lire les changements météo. Le contexte culturel plus large est développé dans notre article sur la <a href="/fr/blogs/bedouin-culture-egypt-desert">culture bédouine dans le désert égyptien</a>.</p>
<h2>Préparation physique et attentes</h2>
<p>Les deux premiers jours sont inconfortables pour presque tout le monde. L'équitation à dos de chameau sollicite des muscles — hanches, cuisses internes, bas du dos — rarement utilisés de la même façon. Consultez notre <a href="/fr/blogs/camel-safari-egypt-guide">guide du safari en chameau en Égypte</a> pour les conseils pratiques avant de vous engager une semaine entière.</p>
<h2>Pour qui ce voyage convient-il</h2>
<p>Ce voyage convient aux voyageurs qui veulent vraiment se déconnecter — pas de prises de recharge, signal téléphonique limité, un rythme qui rend la consultation des e-mails simplement impossible. Il attire surtout ceux qui ont déjà fait un circuit désertique plus court et en veulent davantage de cette même sensation.</p>`,

  de: `<h2>Acht Tage auf dem Kamelrücken in Ägypten</h2>
<p>Die meisten Wüstentouren in Ägypten nutzen Kamele wie jedes andere Fahrzeug — eine kurze Runde für Fotos, vielleicht eine Stunde bei Sonnenuntergang. Eine achttägige Kamelrücken-Reise ist etwas grundlegend anderes: die Wiederherstellung jener alten Beziehung zu diesen Tieren, die einst die einzige Möglichkeit waren, diese Wüste zu durchqueren.</p>
<h2>Warum genau acht Tage</h2>
<p>Erst um den dritten oder vierten Tag herum verändert sich etwas. Die Erschöpfung der ersten Tage lässt nach und der Rhythmus setzt ein: Aufwachen mit dem ersten Licht, Gehen in den kühlen Morgenstunden, Mittagsruhe, Nachmittagsmarsch, Lager. Dieser Rhythmus ist der eigentliche Sinn der achttägigen Reise.</p>
<h2>Das Beduinen-Wissen</h2>
<p>Nichts davon funktioniert ohne Guides, die in dieser Landschaft aufgewachsen sind. Den kulturellen Hintergrund erklärt unser Artikel über die <a href="/de/blogs/bedouin-culture-egypt-desert">Beduinenkultur in der ägyptischen Wüste</a>.</p>
<h2>Körperliche Vorbereitung</h2>
<p>Die ersten zwei Tage sind für fast jeden unbequem. Das Reiten auf Kamelen beansprucht Muskeln — Hüften, Innenschenkel, unterer Rücken — die selbst regelmäßige Sportler kaum auf dieselbe Weise nutzen. Unser <a href="/de/blogs/camel-safari-egypt-guide">Kamel-Safari-Reiseführer für Ägypten</a> deckt die praktischen Grundlagen ab, bevor Sie sich für eine ganze Woche verpflichten.</p>
<h2>Für wen diese Reise geeignet ist</h2>
<p>Diese Reise eignet sich für Menschen, die wirklich abschalten wollen — keine Ladestationen, kaum Handyempfang, ein Tempo, das E-Mails schlicht unmöglich macht. Sie spricht vor allem Reisende an, die bereits eine kürzere Wüstentour gemacht haben und mehr von diesem Gefühl wollen.</p>`,

  es: `<h2>Ocho días en camello por el desierto egipcio</h2>
<p>La mayoría de los viajes al desierto en Egipto usan camellos como cualquier otro vehículo — un paseo corto para las fotos, quizás una hora al atardecer. Un viaje de ocho días a lomo de camello es algo fundamentalmente diferente: recuperar esa relación antigua con estos animales que durante milenios fueron la única forma de cruzar este desierto.</p>
<h2>Por qué específicamente ocho días</h2>
<p>Es alrededor del tercer o cuarto día cuando algo cambia. Los dolores de los primeros días empiezan a desaparecer y el ritmo se instala: levantarse con la primera luz, caminar en las horas frescas, descansar al mediodía, caminar al atardecer, acampar. Este ritmo es el verdadero objetivo de un viaje de ocho días.</p>
<h2>El conocimiento beduino</h2>
<p>Nada de esto funciona sin guías que crecieron leyendo este paisaje. El contexto cultural más amplio lo encontrarás en nuestro artículo sobre la <a href="/es/blogs/bedouin-culture-egypt-desert">cultura beduina en el desierto egipcio</a>.</p>
<h2>Preparación física y expectativas</h2>
<p>Los primeros dos días son incómodos para casi todo el mundo. Montar en camello usa músculos — caderas, muslos internos, zona lumbar — que incluso los deportistas habituales no usan de la misma forma. Consulta nuestra <a href="/es/blogs/camel-safari-egypt-guide">guía de safari en camello por Egipto</a> para los consejos prácticos antes de comprometerte con una semana completa.</p>
<h2>Para quién es este viaje</h2>
<p>Este viaje es adecuado para viajeros que realmente quieren desconectarse — sin cargadores, señal de móvil limitada, un ritmo que hace imposible revisar el correo. Suele atraer a quienes ya han hecho un viaje al desierto más corto y quieren más de esa misma sensación.</p>`,

  it: `<h2>Otto giorni in groppa al cammello nel deserto egiziano</h2>
<p>La maggior parte dei viaggi nel deserto in Egitto usa i cammelli come qualsiasi altro mezzo — una breve passeggiata per le foto, forse un'ora al tramonto. Un viaggio di otto giorni a dorso di cammello è qualcosa di fondamentalmente diverso: recuperare quell'antico rapporto con questi animali che per millenni furono l'unico modo per attraversare questo deserto.</p>
<h2>Perché esattamente otto giorni</h2>
<p>È intorno al terzo o quarto giorno che qualcosa cambia. I dolori dei primi giorni iniziano ad attenuarsi e il ritmo si instaura: svegliarsi con la prima luce, camminare nelle ore fresche del mattino, riposare a mezzogiorno, camminare di nuovo al tramonto, accamparsi. Questo ritmo è il vero punto di un viaggio di otto giorni.</p>
<h2>La conoscenza beduina</h2>
<p>Niente di tutto ciò funziona senza guide cresciute a leggere questo paesaggio. Il contesto culturale più ampio è illustrato nel nostro articolo sulla <a href="/it/blogs/bedouin-culture-egypt-desert">cultura beduina nel deserto egiziano</a>.</p>
<h2>Preparazione fisica e aspettative</h2>
<p>I primi due giorni sono genuinamente scomodi per quasi tutti. L'equitazione su cammello usa muscoli — fianchi, cosce interne, zona lombare — che anche i praticanti regolari difficilmente usano allo stesso modo. La nostra <a href="/it/blogs/camel-safari-egypt-guide">guida ai safari in cammello in Egitto</a> copre i fondamentali pratici prima di impegnarsi per una settimana intera.</p>
<h2>A chi si addice questo viaggio</h2>
<p>Questo viaggio è adatto ai viaggiatori che vogliono davvero disconnettersi — nessuna presa di ricarica, segnale telefonico limitato, un ritmo che rende impossibile controllare le e-mail. Tende ad attrarre chi ha già fatto un viaggio nel deserto più breve e vuole ancora di più quella stessa sensazione.</p>`,

  nl: `<h2>Acht dagen op een kameel door de Egyptische woestijn</h2>
<p>De meeste woestijnreizen in Egypte gebruiken kamelen zoals elk ander voertuig — een korte rit voor de foto's, misschien een uur bij zonsondergang. Een reis van acht dagen op een kameelrug is fundamenteel anders: het herstellen van die oude relatie met deze dieren die jarenlang de enige manier waren om door deze woestijn te reizen.</p>
<h2>Waarom specifiek acht dagen</h2>
<p>Rond de derde of vierde dag verandert er iets. De spierpijn van de eerste dagen begint te verminderen en het ritme neemt het over: opstaan bij het eerste licht, lopen in de koelere ochtenduren, rusten bij de ergste middaghitte, weer lopen bij het gouden licht, kamperen. Dit ritme is het eigenlijke doel van een acht-daagse reis.</p>
<h2>De Bedoeïenenkennis</h2>
<p>Dit alles werkt niet zonder gidsen die zijn opgegroeid met het lezen van dit landschap. De bredere culturele context wordt behandeld in ons artikel over de <a href="/nl/blogs/bedouin-culture-egypt-desert">Bedoeïenencultuur in de Egyptische woestijn</a>.</p>
<h2>Lichamelijke voorbereiding en verwachtingen</h2>
<p>De eerste twee dagen zijn voor bijna iedereen ongemakkelijk. Rijden op een kameel gebruikt spieren — heupen, binnendijen, lage rug — die zelfs regelmatige sporters zelden op dezelfde manier gebruiken. Onze <a href="/nl/blogs/camel-safari-egypt-guide">kameel-safarigids voor Egypte</a> behandelt de praktische essenties voordat je je verbindt aan een volledige week.</p>
<h2>Voor wie is deze reis geschikt</h2>
<p>Een acht-daagse kameelreis is niet voor elke reiziger geschikt. Het is geschikt voor mensen die echt willen loskoppelen — geen oplaadpunten, beperkt telefoonsignaal, een tempo dat e-mails controleren onmogelijk maakt. Het trekt vooral reizigers aan die al een kortere woestijnreis hebben gedaan en meer van dat gevoel willen.</p>`,

  pt: `<h2>Oito dias nas costas de um camelo no deserto egípcio</h2>
<p>A maioria das viagens ao deserto no Egito usa camelos como qualquer outro veículo — um passeio curto para as fotos, talvez uma hora ao pôr do sol. Uma viagem de oito dias nas costas de um camelo é algo fundamentalmente diferente: recuperar aquela relação antiga com esses animais que durante milênios foram a única forma de atravessar este deserto.</p>
<h2>Por que especificamente oito dias</h2>
<p>É por volta do terceiro ou quarto dia que algo muda. As dores dos primeiros dias começam a desaparecer e o ritmo se instala: acordar com a primeira luz, caminhar nas horas mais frescas, descansar no calor do meio-dia, caminhar novamente ao entardecer, acampar. Esse ritmo é o verdadeiro objetivo de uma viagem de oito dias.</p>
<h2>O conhecimento beduíno</h2>
<p>Nada disso funciona sem guias que cresceram lendo esta paisagem. O contexto cultural mais amplo é explorado em nosso artigo sobre a <a href="/pt/blogs/bedouin-culture-egypt-desert">cultura beduína no deserto egípcio</a>.</p>
<h2>Preparação física e expectativas</h2>
<p>Os primeiros dois dias são genuinamente desconfortáveis para quase todos. Andar de camelo usa músculos — quadris, coxas internas, lombar — que mesmo esportistas regulares raramente usam da mesma forma. Nosso <a href="/pt/blogs/camel-safari-egypt-guide">guia de safari de camelo no Egito</a> cobre os fundamentos práticos antes de se comprometer com uma semana inteira.</p>
<h2>Para quem é esta viagem</h2>
<p>Uma viagem de oito dias nas costas de um camelo não é adequada para todos os viajantes. É adequada para pessoas que realmente querem se desconectar — sem tomadas de carregamento, sinal de celular limitado, e um ritmo que torna impossível verificar e-mails. Tende a atrair viajantes que já fizeram uma viagem ao deserto mais curta e saíram querendo mais daquela sensação.</p>`,

  zh: `<h2>八天骆驼之旅：在埃及沙漠深处旅行</h2>
<p>埃及大多数沙漠之旅使用骆驼的方式与使用其他交通工具无异——短暂骑行拍照，也许在日落时骑行一小时。八天骆驼背之旅是根本不同的体验：找回与这些动物数千年来的古老关系，它们曾是穿越沙漠的唯一方式。</p>
<h2>为何偏偏是八天</h2>
<p>大约在第三或第四天，一些变化会发生。最初几天的肌肉酸痛开始消退，节奏开始接管一切：随第一缕光线醒来，在清凉的早晨行走，在正午最热的时候休息，傍晚再次行走，扎营，如此往复。这种节奏是八天之旅的真正意义所在——足够长，让旅程从新奇感变成简单的日常方式。</p>
<h2>贝都因人的知识</h2>
<p>没有在这片土地上成长的向导，一切都无从实现——他们知道哪些水井这个季节仍有水，如何在天气变化前就读出预兆。更深的文化背景请阅读我们关于<a href="/zh/blogs/bedouin-culture-egypt-desert">埃及沙漠贝都因文化</a>的文章。</p>
<h2>身体准备与心理预期</h2>
<p>说实话：前两天对几乎所有人来说都是真正不舒服的，无论体能水平如何。骑骆驼使用的肌肉——尤其是髋部、大腿内侧和下背部——即使是经常运动的人也很少以同样的方式使用。我们的<a href="/zh/blogs/camel-safari-egypt-guide">埃及骆驼游猎指南</a>在您承诺整整一周之前涵盖了实用要点。</p>
<h2>这次旅行适合谁</h2>
<p>八天骆驼之旅并不适合每位旅行者。它适合真正想要断开连接的人——没有充电站，大部分路段手机信号有限或没有，节奏使查看邮件根本不可能。它往往最吸引那些已经做过较短沙漠之旅、出来后渴望更多同样感觉的旅行者。</p>`,
});

// ─── i18n title / excerpt / meta ───
const titleI18n = JSON.stringify({
  fr: "Huit jours à dos de chameau : ce que vivre comme les voyageurs originels du désert implique vraiment",
  de: "Acht Tage auf dem Kamelrücken: Was es wirklich bedeutet, wie die ursprünglichen Wüstenreisenden zu leben",
  es: "Ocho días en camello: lo que realmente implica vivir como los viajeros originales del desierto",
  it: "Otto giorni in groppa al cammello: cosa significa davvero vivere come i viaggiatori originali del deserto",
  nl: "Acht dagen op een kameel: wat het echt inhoudt om te leven als de oorspronkelijke woestijnreizigers",
  pt: "Oito dias nas costas de um camelo: o que realmente significa viver como os viajantes originais do deserto",
  zh: "骑骆驼旅行八天：真正体验沙漠原始旅行者的生活",
});

const excerptI18n = JSON.stringify({
  fr: "Un voyage de huit jours à dos de chameau dans le désert égyptien n'est pas une excursion touristique — c'est suffisamment long pour que le rythme de la caravane s'installe vraiment et que l'expérience cesse d'être une activité pour devenir simplement la façon dont vous voyagez.",
  de: "Eine achttägige Kamelrücken-Reise in der ägyptischen Wüste ist keine Tagestour — sie ist lang genug, damit der Rhythmus der Karawane wirklich einsetzt und die Erfahrung aufhört, eine Aktivität zu sein, und einfach zur Art wird, wie man reist.",
  es: "Un viaje de ocho días a lomo de camello en el desierto egipcio no es una excursión turística — es suficientemente largo para que el ritmo de la caravana se instale de verdad y la experiencia deje de ser una actividad para convertirse simplemente en la forma en que viajas.",
  it: "Un viaggio di otto giorni a dorso di cammello nel deserto egiziano non è una gita turistica — è abbastanza lungo perché il ritmo della carovana si installi davvero e l'esperienza smetta di essere un'attività per diventare semplicemente il modo in cui si viaggia.",
  nl: "Een reis van acht dagen op een kameelrug in de Egyptische woestijn is geen daguitstap — het is lang genoeg voor het ritme van de karavaan om echt in te zetten en de ervaring te laten ophouden een activiteit te zijn en simpelweg de manier te worden waarop je reist.",
  pt: "Uma viagem de oito dias nas costas de um camelo no deserto egípcio não é um passeio turístico — é longa o suficiente para que o ritmo da caravana realmente se instale e a experiência deixe de ser uma atividade para se tornar simplesmente a forma como você viaja.",
  zh: "在埃及沙漠进行八天骆驼背之旅不是观光活动——它足够长，让商队的节奏真正建立起来，让这段体验不再是一项活动，而变成你旅行的方式本身。",
});

const metaTitleI18n = JSON.stringify({
  fr: "Safari en chameau de 8 jours en Égypte : guide complet | Bedouin Trails",
  de: "8-tägige Kamelsafari in Ägypten: vollständiger Leitfaden | Bedouin Trails",
  es: "Safari en camello de 8 días en Egipto: guía completa | Bedouin Trails",
  it: "Safari in cammello di 8 giorni in Egitto: guida completa | Bedouin Trails",
  nl: "8-daagse kameel safari in Egypte: complete gids | Bedouin Trails",
  pt: "Safari de camelo de 8 dias no Egito: guia completo | Bedouin Trails",
  zh: "埃及8天骆驼游猎：完整指南 | Bedouin Trails",
});

const metaDescriptionI18n = JSON.stringify({
  fr: "Guide complet pour un voyage de huit jours à dos de chameau dans le désert égyptien — le rythme quotidien, la préparation physique, le savoir bédouin et pour qui ce voyage immersif convient vraiment.",
  de: "Vollständiger Leitfaden für eine achttägige Kamelrücken-Reise in der ägyptischen Wüste — der Tagesrhythmus, körperliche Vorbereitung, Beduinenwissen und für wen diese intensive Reise wirklich geeignet ist.",
  es: "Guía completa para un viaje de ocho días a lomo de camello en el desierto egipcio — el ritmo diario, la preparación física, el conocimiento beduino y para quién este viaje inmersivo es realmente adecuado.",
  it: "Guida completa per un viaggio di otto giorni a dorso di cammello nel deserto egiziano — il ritmo quotidiano, la preparazione fisica, la conoscenza beduina e per chi questo viaggio immersivo è davvero adatto.",
  nl: "Complete gids voor een acht-daagse kameelreis in de Egyptische woestijn — het dagelijkse ritme, lichamelijke voorbereiding, Bedoeïenenkennis en voor wie deze meeslepende reis echt geschikt is.",
  pt: "Guia completo para uma viagem de oito dias nas costas de um camelo no deserto egípcio — o ritmo diário, preparação física, conhecimento beduíno e para quem esta jornada imersiva é realmente adequada.",
  zh: "埃及沙漠八天骆驼旅行完整指南——日常节奏、身体准备、贝都因人的知识，以及这段沉浸式旅程真正适合哪类旅行者。",
});

// ─── FAQs (3 questions, all 9 locales) ───
const faqs = [
  {
    questionEn: "How physically demanding is an eight-day camel trek?",
    answerEn:
      "The first two days are the hardest — expect soreness in your hips, inner thighs, and lower back regardless of general fitness level. Most trips structure shorter riding stages in the opening days to let your body adjust before longer stretches later in the week. By day three or four, the acute discomfort fades and most travelers find their rhythm. Appropriate clothing that won't chafe against the saddle makes a significant difference.",
    questionAr: "ما مدى التحدي الجسدي لرحلة ثمانية أيام على الجمال؟",
    answerAr:
      "اليومان الأولان هما الأصعب — توقع ألمًا في الحوض والفخذين الداخليين وأسفل الظهر بغض النظر عن مستوى لياقتك. معظم الرحلات مُصممة بمراحل ركوب أقصر في الأيام الأولى لإتاحة الوقت لجسمك للتكيف قبل المسافات الأطول لاحقًا. بحلول اليوم الثالث أو الرابع، يتلاشى الانزعاج الحاد ويجد معظم المسافرين إيقاعهم. الملابس المناسبة التي لا تحتك بالسرج تصنع فرقًا كبيرًا.",
    questionI18n: JSON.stringify({
      fr: "Quelle est l'exigence physique d'un trek en chameau de huit jours ?",
      de: "Wie körperlich anspruchsvoll ist eine achttägige Kamelwanderung?",
      es: "¿Qué tan exigente físicamente es un trekking en camello de ocho días?",
      it: "Quanto è fisicamente impegnativo un trekking di otto giorni in cammello?",
      nl: "Hoe fysiek veeleisend is een acht-daagse kameeltrek?",
      pt: "Quão fisicamente exigente é um trekking de oito dias em camelo?",
      zh: "八天骆驼之旅对体能的要求有多高？",
    }),
    answerI18n: JSON.stringify({
      fr: "Les deux premiers jours sont les plus difficiles — attendez-vous à des douleurs dans les hanches, les cuisses internes et le bas du dos. La plupart des voyages prévoient des étapes plus courtes les premiers jours pour laisser le corps s'adapter. Vers le troisième ou quatrième jour, l'inconfort aigu s'estompe et la plupart des voyageurs trouvent leur rythme.",
      de: "Die ersten zwei Tage sind am schwierigsten — rechnen Sie mit Schmerzen in den Hüften, Innenschenkeln und im unteren Rücken. Die meisten Touren planen kürzere Reitabschnitte in den ersten Tagen ein. Um den dritten oder vierten Tag herum lässt der akute Schmerz nach.",
      es: "Los primeros dos días son los más difíciles — espera dolores en las caderas, muslos internos y parte baja de la espalda. La mayoría de los viajes planifican etapas más cortas los primeros días para que el cuerpo se adapte. Hacia el tercer o cuarto día, el malestar agudo desaparece.",
      it: "I primi due giorni sono i più difficili — aspettati dolori ai fianchi, alle cosce interne e alla zona lombare. La maggior parte dei viaggi prevede tappe più brevi nei primi giorni. Intorno al terzo o quarto giorno, il disagio acuto svanisce.",
      nl: "De eerste twee dagen zijn het moeilijkst — verwacht pijn in heupen, binnendijen en lage rug. De meeste reizen plannen kortere rijsecties in de eerste dagen. Rond de derde of vierde dag verdwijnt het acute ongemak.",
      pt: "Os primeiros dois dias são os mais difíceis — espere dores nos quadris, coxas internas e lombar. A maioria das viagens planeja etapas mais curtas nos primeiros dias. Por volta do terceiro ou quarto dia, o desconforto agudo desaparece.",
      zh: "前两天是最艰难的——无论体能水平如何，都要预期髋部、大腿内侧和下背部会有酸痛。大多数行程在最初几天安排较短的骑行距离，让身体适应。到第三或第四天，急性不适会消退，大多数旅行者会找到自己的节奏。",
    }),
  },
  {
    questionEn: "What does a typical day on an eight-day camel trek look like?",
    answerEn:
      "Days start before full sunrise to take advantage of cooler temperatures. The caravan walks at four to five kilometers per hour — slow enough to actually watch the landscape change. Midday is a rest stop in whatever shade is available, which is also when most genuine conversation with guides and fellow travelers happens. A second walking stretch in the afternoon ends at camp, where dinner is cooked over an open fire under a sky with more stars than most people have seen in their lifetime.",
    questionAr: "كيف يبدو يوم نموذجي في رحلة الثمانية أيام على الجمال؟",
    answerAr:
      "تبدأ الأيام قبل شروق الشمس الكامل للاستفادة من درجات الحرارة الأبرد. تسير القافلة بسرعة أربعة إلى خمسة كيلومترات في الساعة — بطيء بما يكفي لمشاهدة المشهد يتغير فعلًا. منتصف النهار توقف للراحة في أي ظل متاح، وهو أيضًا وقت معظم المحادثات الحقيقية مع المرشدين والمسافرين الآخرين. مسيرة بعد ظهر ثانية تنتهي في المخيم، حيث يُطبخ العشاء على نار مفتوحة تحت سماء تُظهر أكثر من النجوم التي رآها معظم الناس في حياتهم.",
    questionI18n: JSON.stringify({
      fr: "À quoi ressemble une journée typique lors d'un trek en chameau de huit jours ?",
      de: "Wie sieht ein typischer Tag bei einer achttägigen Kamelwanderung aus?",
      es: "¿Cómo es un día típico en un trekking en camello de ocho días?",
      it: "Come si presenta una giornata tipica in un trekking di otto giorni in cammello?",
      nl: "Hoe ziet een typische dag eruit bij een acht-daagse kameeltrek?",
      pt: "Como é um dia típico em um trekking de oito dias em camelo?",
      zh: "八天骆驼之旅的典型一天是什么样的？",
    }),
    answerI18n: JSON.stringify({
      fr: "Les journées commencent avant le lever du soleil pour profiter des températures plus fraîches. La caravane marche à quatre à cinq kilomètres par heure. Le midi est un arrêt repos à l'ombre disponible — c'est aussi quand la plupart des vraies conversations ont lieu. Une deuxième étape l'après-midi se termine au campement, où le dîner est cuisiné sur un feu ouvert sous un ciel étoilé.",
      de: "Tage beginnen vor dem vollen Sonnenaufgang, um kühlere Temperaturen zu nutzen. Die Karawane geht mit vier bis fünf Kilometern pro Stunde. Mittags gibt es eine Ruhepause im verfügbaren Schatten. Ein zweiter Marschteil am Nachmittag endet am Lager, wo das Abendessen über einem offenen Feuer unter einem Sternenhimmel gekocht wird.",
      es: "Los días comienzan antes del amanecer completo para aprovechar las temperaturas más frescas. La caravana camina a cuatro o cinco kilómetros por hora. El mediodía es un descanso a la sombra disponible. Una segunda caminata por la tarde termina en el campamento, donde la cena se cocina sobre fuego abierto bajo un cielo estrellado.",
      it: "Le giornate iniziano prima dell'alba per sfruttare le temperature più fresche. La carovana cammina a quattro o cinque chilometri all'ora. Mezzogiorno è una sosta all'ombra disponibile. Una seconda marcia pomeridiana si conclude al campo, dove la cena viene cucinata su un fuoco aperto sotto un cielo stellato.",
      nl: "Dagen beginnen voor de volledige zonsopgang om te profiteren van koelere temperaturen. De karavaan loopt vier tot vijf kilometer per uur. Middag is een rustpauze in beschikbare schaduw. Een tweede wandeling in de middag eindigt bij het kamp, waar het avondeten wordt gekookt op een open vuur onder een sterrenhemmel.",
      pt: "Os dias começam antes do amanhecer completo para aproveitar as temperaturas mais frescas. A caravana caminha a quatro ou cinco quilômetros por hora. O meio-dia é uma parada de descanso à sombra disponível. Uma segunda caminhada à tarde termina no acampamento, onde o jantar é cozinhado sobre fogo aberto sob um céu estrelado.",
      zh: "每天在完全日出前开始，以利用较凉爽的气温。商队以每小时四到五公里的速度行进——慢到足以真正观察景色的变化。中午在任何可用的阴凉处休息，这也是与向导和同行旅行者进行大多数真实对话的时候。下午的第二段步行在营地结束，在那里晚餐在篝火上烹制，头顶是满天繁星。",
    }),
  },
  {
    questionEn: "Is an eight-day camel trek suitable for first-time desert travelers?",
    answerEn:
      "Generally, the eight-day version is better suited to travelers who've already done a shorter desert experience — a day safari or a two- to three-day trip — and want more of that immersive feeling. For a genuine first desert experience, a shorter trip usually provides a better entry point. The eight-day version rewards travelers who already know they want slow, disconnected travel and are ready to commit fully, rather than those sampling it for the first time.",
    questionAr: "هل رحلة ثمانية أيام على الجمال مناسبة لمن يزور الصحراء لأول مرة؟",
    answerAr:
      "بشكل عام، نسخة الثمانية أيام تناسب المسافرين الذين جربوا فعلًا تجربة صحراوية أقصر — سفاري يوم أو رحلة يومين إلى ثلاثة — ويريدون مزيدًا من ذلك الشعور الغامر. لتجربة صحراوية أولى حقيقية، رحلة أقصر غالبًا توفر نقطة دخول أفضل. نسخة الثمانية أيام تكافئ المسافرين الذين يعرفون بالفعل أنهم يريدون السفر البطيء المنفصل ومستعدون للالتزام الكامل.",
    questionI18n: JSON.stringify({
      fr: "Un trek en chameau de huit jours convient-il aux premiers voyageurs dans le désert ?",
      de: "Ist eine achttägige Kamelwanderung für Erstbesucher der Wüste geeignet?",
      es: "¿Es un trekking en camello de ocho días adecuado para viajeros que visitan el desierto por primera vez?",
      it: "Un trekking di otto giorni in cammello è adatto ai primi viaggiatori nel deserto?",
      nl: "Is een acht-daagse kameeltrek geschikt voor eerste keer woestijnreizigers?",
      pt: "Um trekking de oito dias em camelo é adequado para viajantes que visitam o deserto pela primeira vez?",
      zh: "八天骆驼之旅适合第一次去沙漠的旅行者吗？",
    }),
    answerI18n: JSON.stringify({
      fr: "En général, la version de huit jours convient mieux aux voyageurs qui ont déjà fait une expérience désertique plus courte et veulent plus de cette sensation immersive. Pour une première expérience désertique, un voyage plus court est généralement un meilleur point d'entrée. La version de huit jours récompense ceux qui savent déjà qu'ils veulent ce type de voyage lent et immersif.",
      de: "Im Allgemeinen ist die Acht-Tage-Version besser für Reisende geeignet, die bereits eine kürzere Wüstenerfahrung gemacht haben und mehr von diesem intensiven Gefühl wollen. Für eine echte erste Wüstenerfahrung ist eine kürzere Reise in der Regel der bessere Einstieg.",
      es: "En general, la versión de ocho días es más adecuada para viajeros que ya han hecho una experiencia desértica más corta y quieren más de esa sensación inmersiva. Para una primera experiencia en el desierto, un viaje más corto suele ser el mejor punto de entrada.",
      it: "In generale, la versione di otto giorni è più adatta ai viaggiatori che hanno già fatto un'esperienza desertica più breve e vogliono più di quella sensazione immersiva. Per una prima vera esperienza nel deserto, un viaggio più breve di solito offre un punto di ingresso migliore.",
      nl: "Over het algemeen is de acht-daagse versie beter geschikt voor reizigers die al een kortere woestijnervaring hebben gedaan en meer van dat meeslepende gevoel willen. Voor een echte eerste woestijnervaring is een kortere reis meestal het betere startpunt.",
      pt: "Geralmente, a versão de oito dias é mais adequada para viajantes que já fizeram uma experiência desértica mais curta e querem mais dessa sensação imersiva. Para uma primeira experiência genuína no deserto, uma viagem mais curta geralmente oferece um melhor ponto de entrada.",
      zh: "一般来说，八天版本更适合已经有过较短沙漠体验的旅行者——比如一日游或两到三天的行程——他们想要更多那种沉浸式的感觉。对于真正的第一次沙漠体验，较短的行程通常是更好的入门选择。八天版本奖励那些已经知道自己想要这种缓慢、断开连接的旅行方式的人。",
    }),
  },
];

// ─── Blog record ───
const blog = {
  slug: "eight-day-camel-trek-egypt",
  titleEn: "Eight Days on a Camel: What It Actually Takes to Live Like the Desert's Original Travelers",
  titleAr: "ثمانية أيام على ظهر جمل: ماذا يتطلب فعلًا أن تعيش كمسافري الصحراء الأصليين",
  titleI18n,
  excerptEn:
    "An eight-day camelback journey in Egypt is something fundamentally different from a short camel ride for photos — it's about recovering an ancient relationship with the desert, and the rhythm that only eight days gives you the time to actually find.",
  excerptAr:
    "رحلة ثمانية أيام على ظهر الجمل في الصحراء المصرية مختلفة جذريًا عن ركوبة قصيرة من أجل الصور — إنها استرجاع العلاقة القديمة بين المسافر والصحراء، والإيقاع الذي لا تمنحك سواها وقتًا كافيًا للعثور عليه.",
  excerptI18n,
  contentEn,
  contentAr,
  contentI18n,
  metaTitleEn: "Eight-Day Camel Trek in Egypt: What to Expect | Bedouin Trails",
  metaTitleAr: "رحلة ثمانية أيام على ظهر الجمل في مصر: ما تتوقعه | Bedouin Trails",
  metaTitleI18n,
  metaDescriptionEn:
    "A complete guide to eight-day camelback treks in the Egyptian desert — the daily rhythm, physical preparation, Bedouin knowledge, and who this slow, immersive journey truly suits.",
  metaDescriptionAr:
    "دليل شامل لرحلة ثمانية أيام على ظهر الجمل في الصحراء المصرية — إيقاع الأيام، التحضير الجسدي، المعرفة البدوية، ولمن تناسب هذه الرحلة الغامرة فعلًا.",
  metaDescriptionI18n,
  image: "/img/eight-day-camel-trek-egypt.webp",
  author: "Bedouin Trails Team",
  category: "Egypt Travel Guides",
  tags: JSON.stringify([
    "camel trek Egypt",
    "multi-day camel safari",
    "Bedouin desert guide",
    "Egypt desert adventure",
    "camelback journey",
  ]),
  primaryKeywords: JSON.stringify([
    "eight day camel trek Egypt",
    "camel safari Egypt",
    "multi-day camel trek Egypt",
  ]),
  secondaryKeywords: JSON.stringify([
    "Bedouin guide Egypt desert",
    "camelback journey Egypt",
    "desert camping Egypt",
    "Egypt desert travel",
    "camel caravan Egypt",
  ]),
  readingTime: 7,
  isPublished: true,
  publishedAt: new Date("2026-10-14"),
};

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
