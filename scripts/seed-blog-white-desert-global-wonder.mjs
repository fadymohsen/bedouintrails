/**
 * Blog: White Desert Egypt — Why Travelers Worldwide Call It One of Earth's Strangest Landscapes
 * Slug: white-desert-egypt-global-wonder
 * Run with: node scripts/seed-blog-white-desert-global-wonder.mjs
 */

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ─── ARABIC (primary) ─────────────────────────────────────────────────────────

const titleAr =
  "الصحراء البيضاء مصر: لماذا يصفها الرحالة حول العالم بأنها أغرب مشهد طبيعي على كوكب الأرض";

const metaTitleAr =
  "الصحراء البيضاء مصر: لماذا يصفها الرحالة حول العالم بأنها أغرب مشهد طبيعي على كوكب الأرض | Bedouin Trails (2026)";

const metaDescAr =
  "من قوائم أفضل الوجهات الصحراوية عالمياً إلى مقارنات \"المريخ على الأرض\"، تعرف على مكانة الصحراء البيضاء في مصر بين أغرب وأجمل المناظر الطبيعية في العالم.";

const excerptAr =
  "في كل عام، تظهر الصحراء البيضاء في مصر ضمن قوائم لا حصر لها بعناوين من نوع \"أغرب عشرة مناظر طبيعية على وجه الأرض\". اكتشف لماذا يعتبرها الرحالة والمصورون حول العالم ظاهرة طبيعية لا نظير لها.";

const contentAr = `<p>في كل عام، تظهر الصحراء البيضاء في مصر ضمن قوائم لا حصر لها بعناوين من نوع "أغرب عشرة مناظر طبيعية على وجه الأرض" أو "أماكن تبدو وكأنها من كوكب آخر يجب زيارتها قبل الموت". هذا ليس مبالغة تسويقية؛ فحين تقف للمرة الأولى وسط هذا البحر من التكوينات الطباشيرية البيضاء الشاهقة، المنحوتة بفعل الرياح على مدى ملايين السنين لتأخذ أشكالاً أقرب لمنحوتات فنية منها لصخور طبيعية، تفهم فوراً لماذا يعجز الكثيرون عن تصنيف ما يرونه ضمن أي فئة مألوفة. في هذا المقال، نأخذك في جولة حول ما يجعل الصحراء البيضاء المصرية ظاهرة استثنائية على المستوى العالمي، وليس فقط وجهة سياحية محلية جميلة.</p>

<h2>مقارنة لا مفر منها: "سطح القمر" أم "المريخ على الأرض"؟</h2>
<p>يصف الزوار الصحراء البيضاء غالباً بأنها أقرب تجربة أرضية يمكن أن تحصل عليها لزيارة كوكب آخر دون الحاجة لصاروخ فضائي. اللون الأبيض النقي شبه الموحد للتكوينات الصخرية، إلى جانب غياب أي نبات أو أثر حياة في معظم أجزاء المنطقة، يخلق مشهداً بصرياً غريباً يربكه العقل بين تصنيفين: هل هذا سطح قمري باهت أم سطح كوكب المريخ في نسخته البيضاء؟ وكالات الفضاء وبرامج المحاكاة العلمية استخدمت بالفعل مناظر مشابهة لتدريب مركبات استكشاف الكواكب، وهو ما يمنح المكان طبقة إضافية من السحر العلمي والخيالي. لكن على عكس أي كوكب آخر، يمكنك هنا أن تنام تحت هذه الأشكال الغريبة، وتتناول الشاي البدوي بجوارها، وهذا بالضبط ما يجعل الصحراء البيضاء استثنائية: مزيج نادر بين مشهد كوكبي غريب وتجربة إنسانية دافئة في آنٍ واحد.</p>

<h2>شهادات عالمية: كيف يراها الرحالة والمصورون الدوليون؟</h2>
<p>على مدى العقد الماضي، ظهرت الصحراء البيضاء في عشرات المقالات الصحفية العالمية، وحسابات التصوير الفوتوغرافي الكبرى، وبرامج السفر التلفزيونية، غالباً بجانب مقارنات مباشرة مع وادي كابادوكيا في تركيا أو الصحاري الملحية في بوليفيا، لكن مع إجماع شبه دائم على أن التكوينات الطباشيرية البيضاء العملاقة، مثل صخرة "الدجاجة والفطر" الشهيرة، لا نظير حقيقي لها في أي مكان آخر على وجه الأرض من حيث الحجم والكثافة والتنوع في نفس المنطقة الجغرافية. المصورون الدوليون تحديداً يعودون مراراً وتكراراً لأن الصحراء البيضاء تمنحهم ما يصفونه بـ"الضوء المستحيل"؛ انعكاس أشعة الشمس والقمر على الأسطح الطباشيرية يخلق تدرجات لونية ودرامية بصرية يصعب تكرارها في أي بيئة صحراوية أخرى.</p>

<h2>الأصل الجيولوجي وراء هذا التفرد</h2>
<p>يكمن سر تفرد الصحراء البيضاء في قصتها الجيولوجية النادرة؛ فهذه الأرض كانت في يوم من الأيام قاع محيط قديم قبل ملايين السنين، تراكمت فيه رواسب طباشيرية وجيرية كثيفة نتيجة بقايا كائنات بحرية مجهرية. مع انحسار المياه وتعرض هذه الرواسب الرخوة لعوامل التعرية الريحية على مدى دهور طويلة، نُحتت الصخور تدريجياً لتأخذ أشكالاً منحوتة تبدو أقرب لأعمال فنية سريالية من صنع الطبيعة. هذا المزيج النادر من التركيب الجيولوجي، والحجم الهائل للمنطقة الممتدة على مئات الكيلومترات المربعة، والعزلة الجغرافية البعيدة عن أي تلوث ضوئي أو صناعي، هو ما يجعل تكرار هذه التجربة في مكان آخر من العالم أمراً شبه مستحيل.</p>

<h2>الصحراء البيضاء كمحمية طبيعية محمية دولياً</h2>
<p>اعترافاً بأهميتها الاستثنائية، صُنّفت الصحراء البيضاء كمحمية طبيعية وطنية، وهو تصنيف يهدف لحماية هذا الإرث الجيولوجي النادر من التدهور بفعل السياحة غير المنظمة. هذا التصنيف يضع مصر على خريطة الوجهات الصحراوية العالمية المحمية بيئياً، إلى جانب محميات مشابهة في الأردن وناميبيا وتشيلي، لكن بخصوصية جيولوجية لا تتكرر. الزوار الدوليون الذين يبحثون تحديداً عن سياحة صحراوية مسؤولة يجدون في الصحراء البيضاء نموذجاً نادراً يجمع بين الجمال الاستثنائي والحماية البيئية الجادة.</p>

<h2>الوصول إليها: أقرب بكثير مما يتخيل الكثيرون</h2>
<p>رغم شهرتها العالمية، يفاجأ كثير من الزوار الدوليين بأن الصحراء البيضاء ليست معزولة كما تبدو في الصور؛ فهي تبعد عن القاهرة مسافة يمكن قطعها خلال ساعات معدودة بالسيارة عبر واحة البحرية، ما يجعلها وجهة يمكن إدراجها بسهولة ضمن أي برنامج سياحي في مصر، سواء كرحلة قصيرة لمدة يومين أو كجزء من مسار أطول يشمل واحات أخرى. هذه السهولة النسبية في الوصول، مقارنة بوجهات "المشهد الكوكبي الغريب" الأخرى حول العالم التي قد تتطلب رحلات طويلة ومكلفة، هي أحد أكبر أسباب تنامي شهرة الصحراء البيضاء بين المسافرين الباحثين عن تجربة استثنائية دون رحلة استكشافية معقدة.</p>

<h2>كيف تقارَن بأماكن "بيضاء" أخرى حول العالم؟</h2>
<p>حين يحاول الرحالة تصنيف الصحراء البيضاء، غالباً ما تُذكر إلى جانب أماكن مثل سهول الملح البيضاء في بوليفيا أو الكثبان الجصية البيضاء في نيومكسيكو الأمريكية. لكن الفارق الجوهري أن تلك الأماكن مسطحة بشكل شبه كامل، بينما تتميز الصحراء البيضاء المصرية بتكويناتها الصخرية الرأسية الضخمة التي تخلق "غابة" حقيقية من المنحوتات الطبيعية يمكنك التجول بينها والتخييم في وسطها، لا فوقها فقط. هذا الفارق في البنية ثلاثية الأبعاد هو ما يجعل تجربة المشي أو القيادة وسط الصحراء البيضاء أقرب لاستكشاف مدينة أشباح منحوتة من الطباشير، وليس مجرد عبور سطح أبيض مستوٍ، وهو ما يمنحها طابعاً بصرياً فريداً لا تشاركه فيه أي وجهة أخرى مصنفة ضمن "الأماكن البيضاء" حول العالم.</p>

<h2>مشهد يتغير كل ساعة: لعبة الضوء التي لا تنتهي</h2>
<p>من أكثر ما يذهل الزوار الدوليين في الصحراء البيضاء هو أنها لا تبدو أبداً بنفس الشكل مرتين. عند شروق الشمس، تأخذ التكوينات الطباشيرية درجات وردية وذهبية ناعمة تجعلها تبدو شبه شفافة. في منتصف النهار، تحت الشمس العمودية، يتحول اللون إلى أبيض ناصع صارخ يكاد يبهر العين. ومع اقتراب الغروب، تنفجر الصخور بألوان برتقالية ونارية دافئة قبل أن تغرق تدريجياً في زرقة الشفق. وحين يكتمل القمر، تتوهج الصخور بضوء فضي خافت يجعلها تبدو وكأنها مضاءة من الداخل. هذا التحول المستمر هو أحد الأسباب التي تجعل المصورين العائدين لا يشعرون أبداً بالتكرار، فكل زيارة، وكل ساعة من اليوم، تقدم نسخة مختلفة تماماً من نفس المكان.</p>

<h2>أفضل وقت لزيارة الصحراء البيضاء لرؤيتها في أبهى حالاتها</h2>
<p>للحصول على أفضل تجربة بصرية، ينصح الخبراء بتوقيت الزيارة بحيث تشمل فترتي الغروب والشروق داخل المنطقة نفسها، وهو ما لا يتحقق إلا بالمبيت ليلة كاملة في التخييم بدلاً من زيارة نهارية سريعة. فصلا الخريف والشتاء، من أكتوبر إلى فبراير، يقدمان أفضل توازن بين وضوح السماء وانخفاض احتمالية العواصف الرملية التي قد تحجب الرؤية في فصل الربيع. أما بالنسبة لمن يرغب في تصوير درب التبانة إلى جانب التكوينات البيضاء، فإن التخطيط للزيارة خلال ليالي القمر الجديد يضاعف من وضوح النجوم في السماء المظلمة تماماً فوق المحمية.</p>

<h2>كيف تعيش هذه التجربة بنفسك؟</h2>
<p>إذا كنت تريد أن ترى بعينيك المكان الذي يقارنه المصورون بسطح كوكب آخر، فلدينا رحلتان مصممتان لتمنحك هذا المشهد بأفضل صورة ممكنة. يمكنك البدء بتجربة مكثفة عبر <a href="/journeys/2-days-black-white-desert-camping">رحلة يومين لتخييم الصحراء السوداء والبيضاء</a>، المثالية لمن يريد لمحة غنية وسريعة عن هذا العالم الغريب. أما إذا كان وقتك يسمح بانغماس أعمق، فإن <a href="/journeys/3-days-black-and-white-desert-camp">رحلة التخييم الكاملة لمدة 3 أيام</a> تمنحك وقتاً إضافياً لاستكشاف زوايا أبعد من المنطقة، والانتظار لساعات الغروب والشروق المثالية للتصوير في أكثر من موقع.</p>

<p>الصحراء البيضاء ليست مجرد وجهة سياحية أخرى تضاف إلى قائمة رحلتك إلى مصر؛ إنها ظاهرة طبيعية نادرة يتحدث عنها العالم بلغات مختلفة ومقارنات متعددة، لكنها تبقى في النهاية تجربة لا يمكن وصفها بالكلمات وحدها، مهما حاولت المقالات والمقارنات العالمية الإحاطة بها. في Bedouin Trails، نتشرف بأن نكون الجسر بين هذا العجب الطبيعي العالمي وبين زوارنا الباحثين عن تجربة أصيلة وحقيقية. احجز رحلتك، وكن من القلائل الذين يشهدون هذا المشهد الكوكبي بأعينهم لا عبر الصور فقط.</p>`;

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

const titleEn =
  "White Desert Egypt: Why Travelers Worldwide Call It One of Earth's Strangest Landscapes";

const metaTitleEn =
  "White Desert Egypt: Why Travelers Worldwide Call It One of Earth's Strangest Landscapes | Bedouin Trails (2026)";

const metaDescEn =
  "From \"best desert destinations on Earth\" lists to constant \"Mars on Earth\" comparisons, discover why the White Desert in Egypt ranks among the strangest and most beautiful landscapes on the planet.";

const excerptEn =
  "Every year, Egypt's White Desert lands on countless lists of the strangest landscapes on Earth. Discover why travelers and photographers worldwide consider it a natural phenomenon with no equal anywhere on the planet.";

const contentEn = `<p>Every year, Egypt's White Desert lands on countless lists with titles like "Ten Strangest Landscapes on Earth" or "Otherworldly Places You Must See Before You Die." This isn't marketing exaggeration. The moment you first stand among this sea of towering white chalk formations, sculpted by wind over millions of years into shapes closer to art installations than natural rock, you understand immediately why so many struggle to categorize what they're looking at. In this piece, we explore what makes Egypt's White Desert a genuinely global phenomenon, not just a beautiful local attraction.</p>

<h2>An Inevitable Comparison: "Surface of the Moon" or "Mars on Earth"?</h2>
<p>Visitors most often describe the White Desert as the closest thing to visiting another planet without needing a rocket. The near-uniform, pure-white color of the rock formations, combined with the near-total absence of vegetation or life across most of the area, creates a visual scene so strange the mind struggles to settle between two categories: is this a pale lunar surface, or the white version of Mars? Space agencies and scientific simulation programs have in fact used similar landscapes to train planetary rovers, lending the place an extra layer of scientific and cinematic wonder. But unlike any actual planet, here you can sleep beneath these strange formations and sip Bedouin tea right beside them — and that's exactly what makes the White Desert exceptional: a rare blend of an alien-looking landscape and a genuinely warm human experience, all at once.</p>

<h2>Global Testimonials: How Do International Travelers and Photographers See It?</h2>
<p>Over the past decade, the White Desert has appeared in dozens of major international travel features, top photography accounts, and television travel shows, often alongside direct comparisons to Turkey's Cappadocia valleys or Bolivia's salt flats — yet with near-universal agreement that its towering, dense white chalk formations, like the famous "Chicken and Mushroom" rock, have no real equivalent anywhere else on Earth in terms of scale, density, and variety within a single region. International photographers in particular return again and again because the White Desert gives them what they call "impossible light"; sunlight and moonlight reflecting off the chalk surfaces create color gradients and visual drama that are extremely difficult to replicate in any other desert environment.</p>

<h2>The Geological Origin Behind This Uniqueness</h2>
<p>The secret to the White Desert's uniqueness lies in its rare geological story. This land was once the floor of an ancient ocean, millions of years ago, accumulating dense chalk and limestone deposits from the remains of microscopic marine life. As the waters receded and these soft deposits were exposed to relentless wind erosion over vast stretches of time, the rock was gradually carved into forms that feel closer to surreal natural sculpture than raw geology. This rare combination — the specific geological composition, the sheer scale of a region spanning hundreds of square kilometers, and the geographic isolation far from any light or industrial pollution — is what makes replicating this experience almost impossible anywhere else in the world.</p>

<h2>The White Desert as an Internationally Recognized Protected Reserve</h2>
<p>In recognition of its exceptional importance, the White Desert has been designated a National Protected Area, a classification aimed at preserving this rare geological heritage from degradation caused by unregulated tourism. This puts Egypt on the map of globally protected desert destinations, alongside comparable reserves in Jordan, Namibia, and Chile — but with a geological character that isn't replicated anywhere else. International visitors specifically seeking responsible desert tourism find in the White Desert a rare model that combines exceptional beauty with genuinely serious environmental protection.</p>

<h2>How the "White" Landscape Compares to Others Worldwide</h2>
<p>When travelers try to categorize the White Desert, it's often mentioned alongside places like Bolivia's white salt flats or the white gypsum dunes of New Mexico. But the crucial difference is that those landscapes are almost entirely flat, while Egypt's White Desert features towering vertical rock formations that create an actual "forest" of natural sculpture you can walk through and camp inside, not just cross over. This three-dimensional structure is what makes walking or driving through the White Desert feel closer to exploring a sculpted, chalk-white ghost city than simply crossing a flat white surface — and it's exactly what gives it a visual identity shared by no other destination classified among the world's "white places."</p>

<h2>A Scene That Changes Every Hour: An Endless Game of Light</h2>
<p>One of the most astonishing things international visitors notice about the White Desert is that it never looks the same twice. At sunrise, the chalk formations take on soft pink and golden tones that make them look almost translucent. By midday, under a directly overhead sun, the color shifts to a blinding, stark white. As sunset approaches, the rocks erupt in warm orange and fiery hues before gradually sinking into twilight blue. And under a full moon, the rocks glow with a faint silver light, as though lit from within. This constant transformation is one of the reasons returning photographers never feel they're repeating themselves — every visit, every hour of the day, offers an entirely different version of the same place.</p>

<h2>Best Time to Visit the White Desert to See It at Its Finest</h2>
<p>For the best visual experience, experts recommend timing your visit so it spans both sunset and sunrise within the area itself — something that only happens if you camp overnight rather than making a quick day trip. Autumn and winter, from October through February, offer the best balance of clear skies and lower odds of sandstorms, which can obscure visibility in spring. For those wanting to photograph the Milky Way alongside the white formations, planning a visit around the new moon phase dramatically sharpens the stars against the darkened sky above the reserve.</p>

<h2>How to Experience It Yourself</h2>
<p>If you want to see with your own eyes the place photographers compare to another planet, we have two trips designed to show it to you at its best. You can start with an intensive <a href="/journeys/2-days-black-white-desert-camping">2-day Black & White Desert camping trip</a>, ideal for a rich, quick taste of this strange world. Or, if your schedule allows for a deeper immersion, the <a href="/journeys/3-days-black-and-white-desert-camp">full 3-day camping trip</a> gives you extra time to explore farther corners of the area and wait for the perfect golden hours in more than one location.</p>

<p>The White Desert isn't just another destination to add to your Egypt itinerary; it's a rare natural phenomenon discussed by the world in different languages and endless comparisons, yet one that ultimately remains an experience words alone can't fully capture, no matter how many international articles and comparisons try. At Bedouin Trails, we're honored to be the bridge between this global natural wonder and our guests seeking an authentic, genuine experience. Book your trip, and become one of the few who witness this planetary scene with their own eyes, not just through photographs.</p>`;

// ─── I18N TRANSLATIONS ────────────────────────────────────────────────────────

const titleI18n = {
  fr: "Desert Blanc Egypte : Pourquoi les Voyageurs du Monde Entier le Qualifient de Paysage le Plus Etrange de la Terre",
  de: "Weisse Wuste Agypten: Warum Reisende Weltweit Sie als eine der Seltsamsten Landschaften der Erde Bezeichnen",
  es: "Desierto Blanco Egipto: Por Que los Viajeros de Todo el Mundo lo Llaman Uno de los Paisajes Mas Extranos de la Tierra",
  it: "Deserto Bianco Egitto: Perche i Viaggiatori di Tutto il Mondo lo Definiscono uno dei Paesaggi Piu Strani della Terra",
  nl: "Witte Woestijn Egypte: Waarom Reizigers Wereldwijd het een van de Vreemdste Landschappen op Aarde Noemen",
  pt: "Deserto Branco Egito: Por Que Viajantes do Mundo Inteiro o Chamam de uma das Paisagens Mais Estranhas da Terra",
  zh: "埃及白沙漠：为什么全球旅行者称它为地球上最奇异的景观之一",
};

const metaTitleI18n = {
  fr: "Desert Blanc Egypte : le Paysage le Plus Etrange de la Planete | Bedouin Trails (2026)",
  de: "Weisse Wuste Agypten: eine der Seltsamsten Landschaften der Erde | Bedouin Trails (2026)",
  es: "Desierto Blanco Egipto: uno de los Paisajes Mas Extranos de la Tierra | Bedouin Trails (2026)",
  it: "Deserto Bianco Egitto: uno dei Paesaggi Piu Strani della Terra | Bedouin Trails (2026)",
  nl: "Witte Woestijn Egypte: een van de Vreemdste Landschappen op Aarde | Bedouin Trails (2026)",
  pt: "Deserto Branco Egito: uma das Paisagens Mais Estranhas da Terra | Bedouin Trails (2026)",
  zh: "埃及白沙漠：地球上最奇异的景观之一 | Bedouin Trails (2026)",
};

const metaDescI18n = {
  fr: "Des listes de \"meilleures destinations desertiques\" aux comparaisons constantes avec \"Mars sur Terre\", decouvrez pourquoi le Desert Blanc d'Egypte figure parmi les paysages les plus etranges et les plus beaux de la planete.",
  de: "Von Listen der \"besten Wustenziele der Erde\" bis zu standigen \"Mars auf Erden\"-Vergleichen — entdecken Sie, warum die Weisse Wuste in Agypten zu den seltsamsten und schonsten Landschaften des Planeten zahlt.",
  es: "Desde listas de \"mejores destinos deserticos de la Tierra\" hasta comparaciones constantes con \"Marte en la Tierra\", descubre por que el Desierto Blanco de Egipto se encuentra entre los paisajes mas extranos y hermosos del planeta.",
  it: "Dalle liste delle \"migliori destinazioni desertiche della Terra\" ai continui paragoni con \"Marte sulla Terra\", scopri perche il Deserto Bianco in Egitto e tra i paesaggi piu strani e belli del pianeta.",
  nl: "Van lijsten met \"beste woestijnbestemmingen\" tot constante vergelijkingen met \"Mars op Aarde\" — ontdek waarom de Witte Woestijn in Egypte tot de vreemdste en mooiste landschappen ter wereld behoort.",
  pt: "De listas de \"melhores destinos deserticos da Terra\" a comparacoes constantes com \"Marte na Terra\", descubra por que o Deserto Branco do Egito esta entre as paisagens mais estranhas e belas do planeta.",
  zh: "从\"地球最佳沙漠目的地\"榜单到\"地球上的火星\"的不断比较，探索为什么埃及白沙漠跻身地球上最奇异、最美丽的景观之列。",
};

const excerptI18n = {
  fr: "Chaque annee, le Desert Blanc d'Egypte figure dans d'innombrables listes des paysages les plus etranges de la Terre. Decouvrez pourquoi les voyageurs et photographes du monde entier le considerent comme un phenomene naturel sans egal.",
  de: "Jedes Jahr erscheint Agyptens Weisse Wuste auf zahlreichen Listen der seltsamsten Landschaften der Erde. Entdecken Sie, warum Reisende und Fotografen weltweit sie als ein Naturphanomen ohne Gleichen betrachten.",
  es: "Cada ano, el Desierto Blanco de Egipto aparece en innumerables listas de los paisajes mas extranos de la Tierra. Descubre por que viajeros y fotografos de todo el mundo lo consideran un fenomeno natural sin igual.",
  it: "Ogni anno, il Deserto Bianco dell'Egitto compare in innumerevoli liste dei paesaggi piu strani della Terra. Scopri perche viaggiatori e fotografi di tutto il mondo lo considerano un fenomeno naturale senza eguali.",
  nl: "Elk jaar verschijnt de Witte Woestijn van Egypte op talloze lijsten van de vreemdste landschappen ter wereld. Ontdek waarom reizigers en fotografen wereldwijd het als een ongeevenaarde natuurlijk fenomeen beschouwen.",
  pt: "Todo ano, o Deserto Branco do Egito aparece em inumeras listas das paisagens mais estranhas da Terra. Descubra por que viajantes e fotografos do mundo inteiro o consideram um fenomeno natural sem igual.",
  zh: "每年，埃及白沙漠都会出现在无数\"地球上最奇异景观\"的榜单中。探索为什么世界各地的旅行者和摄影师将其视为无与伦比的自然奇观。",
};

const contentI18n = {
  fr: `<p>Chaque annee, le Desert Blanc d'Egypte figure dans d'innombrables listes telles que « Dix paysages les plus etranges de la Terre ». Ce n'est pas une exageration marketing. Quand vous vous tenez pour la premiere fois au milieu de cette mer de formations de craie blanche, sculptees par le vent pendant des millions d'annees, vous comprenez immediatement pourquoi tant de gens luttent pour categoriser ce qu'ils voient.</p>
<h2>Une Comparaison Inevitable : « Surface de la Lune » ou « Mars sur Terre » ?</h2>
<p>Les visiteurs decrivent le Desert Blanc comme la chose la plus proche de la visite d'une autre planete sans fusee. La couleur blanche quasi uniforme, combinee a l'absence presque totale de vegetation, cree une scene si etrange que l'esprit hesite entre deux categories. Mais contrairement a toute planete reelle, ici vous pouvez dormir sous ces formations et sirotter du the bedouin — un melange rare entre paysage extraterrestre et experience humaine chaleureuse.</p>
<h2>L'Origine Geologique</h2>
<p>Cette terre etait autrefois le fond d'un ancien ocean. Des depots de craie denses se sont accumules a partir de restes de vie marine microscopique. L'erosion eolienne sur des millions d'annees a sculpte ces formations en formes surrealistes impossibles a reproduire ailleurs.</p>
<h2>Comment en Faire l'Experience</h2>
<p>Nous avons deux voyages concus pour vous montrer le Desert Blanc a son meilleur. Le <a href="/journeys/2-days-black-white-desert-camping">camping de 2 jours</a> pour un apercu intense, ou le <a href="/journeys/3-days-black-and-white-desert-camp">camping de 3 jours</a> pour une immersion plus profonde.</p>`,
  de: `<p>Jedes Jahr erscheint Agyptens Weisse Wuste auf unzahligen Listen wie „Zehn seltsamste Landschaften der Erde". Dies ist keine Marketing-Ubertreibung. Wenn Sie zum ersten Mal inmitten dieses Meeres aus weissen Kreideformationen stehen, verstehen Sie sofort, warum so viele Muhe haben, das zu kategorisieren, was sie sehen.</p>
<h2>Ein Unvermeidlicher Vergleich: „Mondoberflache" oder „Mars auf Erden"?</h2>
<p>Besucher beschreiben die Weisse Wuste als das Nachste, was einem Besuch eines anderen Planeten ohne Rakete entspricht. Aber hier konnen Sie unter diesen Formationen schlafen und Beduinentee trinken — eine seltene Mischung aus ausserirdischer Landschaft und warmherziger menschlicher Erfahrung.</p>
<h2>Der Geologische Ursprung</h2>
<p>Dieses Land war einst der Boden eines uralten Ozeans. Dichte Kreide- und Kalksteinablagerungen wurden uber Millionen Jahre durch Winderosion in surreale Formen geschliffen.</p>
<h2>Wie Sie es Selbst Erleben</h2>
<p>Der <a href="/journeys/2-days-black-white-desert-camping">2-tagige Camping-Trip</a> fur einen intensiven Vorgeschmack, oder der <a href="/journeys/3-days-black-and-white-desert-camp">3-tagige Camping-Trip</a> fur tieferes Eintauchen.</p>`,
  es: `<p>Cada ano, el Desierto Blanco de Egipto aparece en innumerables listas como « Los diez paisajes mas extranos de la Tierra ». Esto no es exageracion publicitaria. Cuando te encuentras por primera vez en medio de este mar de formaciones de tiza blanca, entiendes inmediatamente por que tantos luchan por categorizar lo que ven.</p>
<h2>Una Comparacion Inevitable: "Superficie de la Luna" o "Marte en la Tierra"?</h2>
<p>Los visitantes describen el Desierto Blanco como lo mas cercano a visitar otro planeta sin cohete. Pero a diferencia de cualquier planeta real, aqui puedes dormir bajo estas formaciones y tomar te beduino — una rara mezcla de paisaje extraterrestre y experiencia humana calida.</p>
<h2>El Origen Geologico</h2>
<p>Esta tierra fue una vez el fondo de un antiguo oceano. Depositos densos de tiza fueron esculpidos por la erosion eolica durante millones de anos en formas surrealistas imposibles de replicar.</p>
<h2>Como Experimentarlo</h2>
<p>El <a href="/journeys/2-days-black-white-desert-camping">camping de 2 dias</a> para una muestra intensa, o el <a href="/journeys/3-days-black-and-white-desert-camp">camping de 3 dias</a> para una inmersion mas profunda.</p>`,
  it: `<p>Ogni anno, il Deserto Bianco dell'Egitto compare in innumerevoli liste come « Dieci paesaggi piu strani della Terra ». Non e un'esagerazione di marketing. Quando ti trovi per la prima volta in mezzo a questo mare di formazioni di gesso bianco, capisci immediatamente perche tanti fanno fatica a categorizzare cio che vedono.</p>
<h2>Un Confronto Inevitabile: "Superficie della Luna" o "Marte sulla Terra"?</h2>
<p>I visitatori descrivono il Deserto Bianco come la cosa piu vicina a visitare un altro pianeta senza razzo. Ma a differenza di qualsiasi pianeta reale, qui puoi dormire sotto queste formazioni e sorseggiare te beduino — una rara miscela di paesaggio extraterrestre e calda esperienza umana.</p>
<h2>L'Origine Geologica</h2>
<p>Questa terra era un tempo il fondo di un antico oceano. Depositi densi di gesso sono stati scolpiti dall'erosione eolica per milioni di anni in forme surreali impossibili da replicare.</p>
<h2>Come Viverlo</h2>
<p>Il <a href="/journeys/2-days-black-white-desert-camping">camping di 2 giorni</a> per un assaggio intenso, oppure il <a href="/journeys/3-days-black-and-white-desert-camp">camping di 3 giorni</a> per un'immersione piu profonda.</p>`,
  nl: `<p>Elk jaar verschijnt de Witte Woestijn van Egypte op talloze lijsten zoals « Tien vreemdste landschappen op aarde ». Dit is geen marketing-overdrijving. Als je voor het eerst staat te midden van deze zee van witte krijtformaties, begrijp je meteen waarom zo velen moeite hebben om te categoriseren wat ze zien.</p>
<h2>Een Onvermijdelijke Vergelijking: "Maanoppervlak" of "Mars op Aarde"?</h2>
<p>Bezoekers beschrijven de Witte Woestijn als het dichtstbij dat je kunt komen bij het bezoeken van een andere planeet zonder raket. Maar in tegenstelling tot elke echte planeet kun je hier slapen onder deze formaties en Bedoeienthee drinken — een zeldzame mix van buitenaards landschap en warme menselijke ervaring.</p>
<h2>De Geologische Oorsprong</h2>
<p>Dit land was ooit de bodem van een oude oceaan. Dichte krijtafzettingen werden door winderosie over miljoenen jaren gevormd tot surrealistische vormen die nergens anders te vinden zijn.</p>
<h2>Hoe het Zelf te Ervaren</h2>
<p>De <a href="/journeys/2-days-black-white-desert-camping">2-daagse campingtrip</a> voor een intense kennismaking, of de <a href="/journeys/3-days-black-and-white-desert-camp">3-daagse campingtrip</a> voor een diepere onderdompeling.</p>`,
  pt: `<p>Todo ano, o Deserto Branco do Egito aparece em inumeras listas como « Dez paisagens mais estranhas da Terra ». Isso nao e exagero de marketing. Quando voce fica pela primeira vez no meio deste mar de formacoes de giz branco, entende imediatamente por que tantos lutam para categorizar o que veem.</p>
<h2>Uma Comparacao Inevitavel: "Superficie da Lua" ou "Marte na Terra"?</h2>
<p>Os visitantes descrevem o Deserto Branco como a coisa mais proxima de visitar outro planeta sem foguete. Mas ao contrario de qualquer planeta real, aqui voce pode dormir sob essas formacoes e tomar cha beduino — uma rara mistura de paisagem extraterrestre e experiencia humana calorosa.</p>
<h2>A Origem Geologica</h2>
<p>Esta terra era outrora o fundo de um antigo oceano. Depositos densos de giz foram esculpidos pela erosao eolica ao longo de milhoes de anos em formas surrealistas impossiveis de replicar.</p>
<h2>Como Experimenta-lo</h2>
<p>O <a href="/journeys/2-days-black-white-desert-camping">camping de 2 dias</a> para uma amostra intensa, ou o <a href="/journeys/3-days-black-and-white-desert-camp">camping de 3 dias</a> para uma imersao mais profunda.</p>`,
  zh: `<p>每年，埃及白沙漠都会出现在无数"地球上最奇异的十大景观"之类的榜单中。这不是营销夸张。当你第一次站在这片由风蚀数百万年雕刻而成的白色白垩岩林中，你立刻就能理解为什么这么多人难以归类他们所看到的景象。</p>
<h2>不可避免的比较："月球表面"还是"地球上的火星"？</h2>
<p>游客最常将白沙漠描述为不需要火箭就能体验的最接近另一颗星球的地方。但与任何真正的星球不同，你可以在这些奇异的岩层下露营，品尝贝都因茶——一种罕见的外星景观与温暖人文体验的结合。</p>
<h2>地质起源</h2>
<p>这片土地曾是远古海洋的海底。致密的白垩和石灰石沉积物在数百万年的风蚀作用下，被雕刻成超现实的形状，在世界任何其他地方都无法复制。</p>
<h2>如何亲身体验</h2>
<p><a href="/journeys/2-days-black-white-desert-camping">2天黑白沙漠露营之旅</a>提供密集的初体验，或<a href="/journeys/3-days-black-and-white-desert-camp">3天完整露营之旅</a>提供更深入的沉浸体验。</p>`,
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    questionEn: "Is the White Desert safe for foreign visitors?",
    questionAr: "هل الصحراء البيضاء آمنة للزوار الأجانب؟",
    questionI18n: {
      fr: "Le Desert Blanc est-il sur pour les visiteurs etrangers ?",
      de: "Ist die Weisse Wuste sicher fur auslandische Besucher?",
      es: "Es seguro el Desierto Blanco para visitantes extranjeros?",
      it: "Il Deserto Bianco e sicuro per i visitatori stranieri?",
      nl: "Is de Witte Woestijn veilig voor buitenlandse bezoekers?",
      pt: "O Deserto Branco e seguro para visitantes estrangeiros?",
      zh: "白沙漠对外国游客安全吗？",
    },
    answerEn:
      "Yes — it's a well-established tourist area run through organized trips with licensed guides, welcoming thousands of visitors from different nationalities every year without significant incidents.",
    answerAr:
      "نعم، فهي منطقة سياحية راسخة تُدار برحلات منظمة مع مرشدين مرخصين، وتستقبل آلاف الزوار من مختلف الجنسيات كل عام دون حوادث تذكر.",
    answerI18n: {
      fr: "Oui — c'est une zone touristique bien etablie geree par des voyages organises avec des guides licencies, accueillant des milliers de visiteurs de differentes nationalites chaque annee sans incidents significatifs.",
      de: "Ja — es ist ein gut etabliertes Touristengebiet mit organisierten Reisen und lizenzierten Fuhrern, das jedes Jahr Tausende von Besuchern verschiedener Nationalitaten ohne nennenswerte Zwischenfalle empfangt.",
      es: "Si — es una zona turistica bien establecida gestionada mediante viajes organizados con guias licenciados, que recibe miles de visitantes de diferentes nacionalidades cada ano sin incidentes significativos.",
      it: "Si — e un'area turistica ben consolidata gestita attraverso viaggi organizzati con guide autorizzate, che accoglie migliaia di visitatori di diverse nazionalita ogni anno senza incidenti significativi.",
      nl: "Ja — het is een gevestigd toeristengebied met georganiseerde reizen en gecertificeerde gidsen, dat jaarlijks duizenden bezoekers van verschillende nationaliteiten verwelkomt zonder noemenswaardige incidenten.",
      pt: "Sim — e uma area turistica bem estabelecida gerida por viagens organizadas com guias licenciados, recebendo milhares de visitantes de diferentes nacionalidades a cada ano sem incidentes significativos.",
      zh: "是的——这是一个成熟的旅游区，通过持证导游的组织旅行运营，每年接待来自不同国籍的数千名游客，没有重大事故。",
    },
    sortOrder: 0,
  },
  {
    questionEn:
      "Do you need a special visa or permit to access the White Desert?",
    questionAr: "هل تحتاج تأشيرة خاصة أو تصريح للوصول إليها؟",
    questionI18n: {
      fr: "Avez-vous besoin d'un visa special ou d'un permis pour acceder au Desert Blanc ?",
      de: "Benotigt man ein Sondervisum oder eine Genehmigung fur den Zugang zur Weissen Wuste?",
      es: "Se necesita una visa especial o permiso para acceder al Desierto Blanco?",
      it: "Serve un visto speciale o un permesso per accedere al Deserto Bianco?",
      nl: "Heb je een speciaal visum of vergunning nodig om de Witte Woestijn te bezoeken?",
      pt: "Precisa-se de um visto especial ou autorizacao para acessar o Deserto Branco?",
      zh: "访问白沙漠需要特别签证或许可证吗？",
    },
    answerEn:
      "No additional permit is required beyond a standard Egyptian entry visa; access is via official, organized routes from Cairo.",
    answerAr:
      "لا يوجد تصريح إضافي مطلوب بخلاف تأشيرة الدخول العادية إلى مصر؛ الوصول يتم عبر طرق رسمية ومنظمة من القاهرة.",
    answerI18n: {
      fr: "Aucun permis supplementaire n'est requis au-dela d'un visa standard d'entree en Egypte ; l'acces se fait par des routes officielles et organisees depuis Le Caire.",
      de: "Es ist keine zusatzliche Genehmigung uber ein Standard-Einreisevisum fur Agypten hinaus erforderlich; der Zugang erfolgt uber offizielle, organisierte Routen ab Kairo.",
      es: "No se requiere ningun permiso adicional mas alla de una visa estandar de entrada a Egipto; el acceso es por rutas oficiales y organizadas desde El Cairo.",
      it: "Non e necessario alcun permesso aggiuntivo oltre al visto d'ingresso standard per l'Egitto; l'accesso avviene tramite percorsi ufficiali e organizzati dal Cairo.",
      nl: "Er is geen aanvullende vergunning nodig naast een standaard Egyptisch inreisvisum; toegang is via officiele, georganiseerde routes vanuit Cairo.",
      pt: "Nao e necessaria nenhuma autorizacao adicional alem do visto padrao de entrada no Egito; o acesso e por rotas oficiais e organizadas a partir do Cairo.",
      zh: "除标准的埃及入境签证外，不需要额外许可证；通过从开罗出发的官方组织路线进入。",
    },
    sortOrder: 1,
  },
  {
    questionEn: "How long does the trip take from Cairo?",
    questionAr: "كم تستغرق الرحلة من القاهرة؟",
    questionI18n: {
      fr: "Combien de temps dure le trajet depuis Le Caire ?",
      de: "Wie lange dauert die Fahrt von Kairo?",
      es: "Cuanto tiempo tarda el viaje desde El Cairo?",
      it: "Quanto dura il viaggio dal Cairo?",
      nl: "Hoe lang duurt de reis vanuit Cairo?",
      pt: "Quanto tempo leva a viagem a partir do Cairo?",
      zh: "从开罗出发需要多长时间？",
    },
    answerEn:
      "Roughly five to six hours by car via Bahariya Oasis, making it an easy fit for a short two- or three-day trip.",
    answerAr:
      "حوالي خمس إلى ست ساعات بالسيارة عبر واحة البحرية، وهي مدة تجعلها مناسبة تماماً لرحلة قصيرة من يومين أو ثلاثة أيام.",
    answerI18n: {
      fr: "Environ cinq a six heures en voiture via l'Oasis de Bahariya, ce qui en fait un complement ideal pour un court voyage de deux ou trois jours.",
      de: "Etwa funf bis sechs Stunden mit dem Auto uber die Bahariya-Oase, was es zu einer idealen Erganzung fur einen kurzen zwei- oder dreitagigen Trip macht.",
      es: "Aproximadamente cinco a seis horas en coche via el Oasis de Bahariya, lo que lo convierte en un complemento perfecto para un viaje corto de dos o tres dias.",
      it: "Circa cinque o sei ore in auto via l'Oasi di Bahariya, rendendolo perfetto per un breve viaggio di due o tre giorni.",
      nl: "Ongeveer vijf tot zes uur met de auto via de Bahariya Oase, waardoor het perfect past in een kort trip van twee of drie dagen.",
      pt: "Aproximadamente cinco a seis horas de carro via Oasis de Bahariya, tornando-o perfeito para uma viagem curta de dois ou tres dias.",
      zh: "经巴哈里亚绿洲约五到六小时车程，非常适合两三天的短途旅行。",
    },
    sortOrder: 2,
  },
];

// ─── BLOG RECORD ──────────────────────────────────────────────────────────────

const blog = {
  slug: "white-desert-egypt-global-wonder",
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
  image: "/img/white-desert-egypt-global-wonder.jpg",
  author: "Bedouin Trails Team",
  category: "Destinations & Nature",
  tags: JSON.stringify([
    "white desert egypt",
    "white desert tour",
    "strangest landscapes earth",
    "egypt desert safari",
    "white desert camping",
    "bedouin trails",
  ]),
  primaryKeywords: JSON.stringify([
    "white desert egypt",
    "white desert tour",
  ]),
  secondaryKeywords: JSON.stringify([
    "strangest landscapes earth",
    "mars on earth egypt",
    "white desert camping",
    "egypt desert safari",
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
