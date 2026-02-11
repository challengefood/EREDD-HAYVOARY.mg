/*************************************************
 * CONFIG
 *************************************************/
let lang = "fr";

const images = [
  "ACT.jpg","ACT2.jpg","ACT3.jpg","FAMI 22.jpg","FAMI 23.jpg",
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
  "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
  "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg"
];

const likertLabels = {
  fr: [
    "Pas du tout d’accord",
    "Plutôt pas d’accord",
    "Neutre",
    "Plutôt d’accord",
    "Tout à fait d’accord"
  ],
  mg: [
    "Tsy manaiky mihitsy",
    "Tsy dia manaiky",
    "Tsy miandany",
    "Manaiky",
    "Manaiky tanteraka"
  ]
};

/*************************************************
 * CHAPITRES + 60 QUESTIONS (15 x 4)
 *************************************************/
const chapters = [
  {
    id: 1,
    title_fr: "Chapitre 1 – Hygiène et santé quotidienne",
    title_mg: "Toko 1 – Fahadiovana sy fahasalamana andavanandro",
    lesson_fr: `La propreté protège la santé :
- Se laver les mains avant/après manger.
- Se laver les mains après les toilettes et après le jeu.
- Garder les espaces de vie propres.
- Encourager les autres à organiser des nettoyages communautaires.

Objectif : comprendre que de petits gestes quotidiens évitent de nombreuses maladies.`,
    lesson_mg: `Miaro fahasalamana ny fahadiovana :
- Manasa tanana alohan'ny sy aorian'ny sakafo.
- Manasa tanana aorian'ny WC sy aorian'ny filalaovana.
- Mitazona madio ny toerana iainana.
- Mampirisika ny hafa hanao fanadiovana iombonana.

Tanjona : hahatakatra fa fihetsika tsotra isan’andro no misoroka aretina maro.`,
    questions_fr: [
      "Je me lave les mains avant de manger.",
      "Je me lave les mains après être allé aux toilettes.",
      "Je me lave les mains après avoir joué dehors.",
      "Je garde mes ongles propres et coupés.",
      "J’utilise de l’eau propre pour me laver.",
      "Je couvre ma bouche quand je tousse/éternue.",
      "Je nettoie mon espace d’étude régulièrement.",
      "Je participe aux journées de nettoyage de l’école.",
      "Je rappelle à mes camarades de se laver les mains.",
      "Je jette les déchets dans une poubelle.",
      "Je comprends le lien entre propreté et santé.",
      "Je brosse mes dents chaque jour.",
      "Je garde mes vêtements propres autant que possible.",
      "Je lave mes mains avec savon quand c’est possible.",
      "Je peux expliquer les bons gestes d’hygiène à un ami."
    ],
    questions_mg: [
      "Manasa tanana alohan’ny hisakafo aho.",
      "Manasa tanana rehefa avy any amin’ny WC aho.",
      "Manasa tanana rehefa avy nilalao tany ivelany aho.",
      "Mitazona ho madio sy voatapaka ny hohoko aho.",
      "Mampiasa rano madio aho rehefa misasa.",
      "Manarona vava rehefa mikohaka na mievina aho.",
      "Manadio tsy tapaka ny toerana ianarako aho.",
      "Mandray anjara amin’ny fanadiovana sekoly aho.",
      "Mampahatsiahy namana hanasa tanana aho.",
      "Manary fako ao anaty daba aho.",
      "Fantatro ny rohy eo amin’ny fahadiovana sy fahasalamana.",
      "Miborosy nify isan’andro aho.",
      "Mitazona fitafiana madio araka izay azo atao aho.",
      "Mampiasa savony rehefa manasa tanana aho raha misy.",
      "Afaka manazava fahadiovana amin’ny namana aho."
    ]
  },
  {
    id: 2,
    title_fr: "Chapitre 2 – Eau et environnement",
    title_mg: "Toko 2 – Rano sy tontolo iainana",
    lesson_fr: `L’eau est vitale :
- Le cycle de l’eau (évaporation, nuages, pluie, infiltration) permet la vie.
- Protéger les sources d’eau évite les maladies.
- La forêt aide à conserver l’eau dans les sols.

Objectif : adopter des comportements qui préservent la qualité et la disponibilité de l’eau.`,
    lesson_mg: `Zava-dehibe ny rano :
- Ny tsingerin’ny rano (etona, rahona, orana, fidirana anaty tany) no manohana ny fiainana.
- Fiarovana loharano rano no misoroka aretina.
- Manampy mitahiry rano anaty tany ny ala.

Tanjona : mampihatra fihetsika miaro ny kalitao sy fisian’ny rano.`,
    questions_fr: [
      "Je sais que l’eau suit un cycle naturel.",
      "Je peux citer les étapes du cycle de l’eau.",
      "Je protège les points d’eau près de chez moi.",
      "J’évite de jeter des déchets dans les rivières.",
      "J’économise l’eau à la maison et à l’école.",
      "Je comprends que la forêt aide à garder l’eau.",
      "Je signale les pratiques qui polluent l’eau.",
      "Je participe à la protection des bassins versants.",
      "Je bois de l’eau sûre quand c’est possible.",
      "Je comprends que l’eau sale peut rendre malade.",
      "Je peux expliquer à un ami comment économiser l’eau.",
      "Je ferme le robinet quand l’eau n’est pas utilisée.",
      "Je participe aux actions de sensibilisation sur l’eau.",
      "Je valorise l’eau comme ressource commune.",
      "Je relie protection de l’eau et avenir de la communauté."
    ],
    questions_mg: [
      "Fantatro fa manana tsingerina voajanahary ny rano.",
      "Afaka milaza dingana amin’ny tsingerin’ny rano aho.",
      "Miaro loharano rano akaiky ahy aho.",
      "Tsy manary fako anaty renirano aho.",
      "Mitsitsy rano ao an-trano sy sekoly aho.",
      "Fantatro fa manampy mitahiry rano ny ala.",
      "Mitatitra fihetsika mandoto rano aho.",
      "Mandray anjara amin’ny fiarovana ny faritra loharano aho.",
      "Misotro rano azo antoka aho raha azo atao.",
      "Fantatro fa mety hampahazo aretina ny rano maloto.",
      "Afaka manazava fomba fitsitsiana rano amin’ny namana aho.",
      "Akimpiko ny paompy raha tsy ampiasaina.",
      "Mandray anjara amin’ny fanentanana momba ny rano aho.",
      "Manome lanja ny rano ho harena iombonana aho.",
      "Ampifandraisiko ny fiarovana rano sy hoavin’ny fiarahamonina."
    ]
  },
  {
    id: 3,
    title_fr: "Chapitre 3 – Forêt, biodiversité et climat",
    title_mg: "Toko 3 – Ala, zavamananaina ary toetrandro",
    lesson_fr: `Les arbres et la biodiversité soutiennent la vie :
- Les arbres protègent les sols et limitent l’érosion.
- Les écosystèmes abritent des espèces uniques.
- Les actions locales (planter, protéger, restaurer) ont un effet réel.

Objectif : comprendre que protéger la nature protège aussi les familles.`,
    lesson_mg: `Manohana fiainana ny hazo sy ny zavamananaina :
- Miaro tany sy mampihena fihotsahan-tany ny hazo.
- Mampiantrano karazana tokana ny tontolo iainana.
- Manan-kery ny asa eny ifotony (mamboly, miaro, manarenana).

Tanjona : hahatakatra fa ny fiarovana ny natiora dia fiarovana ny fianakaviana koa.`,
    questions_fr: [
      "Je comprends l’importance des arbres pour les sols.",
      "Je sais que la déforestation a des impacts graves.",
      "Je peux participer à une activité de plantation.",
      "Je protège les jeunes plants autour de moi.",
      "Je respecte les espaces naturels et les animaux.",
      "Je comprends le lien entre forêt et climat local.",
      "Je soutiens les actions de restauration des écosystèmes.",
      "Je peux expliquer la biodiversité avec des exemples simples.",
      "Je ne détruis pas les plantes inutilement.",
      "Je partage des messages positifs sur la protection de la forêt.",
      "Je comprends que la forêt soutient l’agriculture.",
      "Je participe à l’entretien des arbres plantés.",
      "Je valorise les espèces locales de Madagascar.",
      "Je reconnais les risques d’érosion sans couverture végétale.",
      "Je m’engage à protéger un espace vert près de moi."
    ],
    questions_mg: [
      "Fantatro ny lanjan’ny hazo amin’ny fiarovana ny tany.",
      "Fantatro fa misy fiantraikany lehibe ny fandripahana ala.",
      "Afaka mandray anjara amin’ny fambolena hazo aho.",
      "Miaro ireo zana-kazo manodidina ahy aho.",
      "Manaja ny faritra voajanahary sy biby aho.",
      "Fantatro ny rohy eo amin’ny ala sy toetrandro eo an-toerana.",
      "Manohana asa fanarenana tontolo iainana aho.",
      "Afaka manazava biodiversité amin’ny ohatra tsotra aho.",
      "Tsy manimba zavamaniry tsy amin’antony aho.",
      "Mizara hafatra miabo momba ny fiarovana ala aho.",
      "Fantatro fa manohana fambolena ny ala.",
      "Mandray anjara amin’ny fikarakarana hazo nambolena aho.",
      "Manome lanja ireo karazana eto Madagasikara aho.",
      "Fantatro ny loza ateraky ny fihotsahan-tany raha tsy misy zava-maniry.",
      "Manolo-tena hiaro faritra maitso akaiky ahy aho."
    ]
  },
  {
    id: 4,
    title_fr: "Chapitre 4 – Action communautaire et leadership enfant",
    title_mg: "Toko 4 – Asa iombonana sy fitarihan’ny ankizy",
    lesson_fr: `Le changement durable est collectif :
- Les enfants peuvent être des leaders positifs.
- Informer les parents et voisins renforce l’impact.
- One Health : santé humaine, animale et environnementale sont liées.

Objectif : passer de la connaissance à l’action locale.`,
    lesson_mg: `Iombonana ny fiovana maharitra :
- Afaka mpitarika tsara ny ankizy.
- Ny fanentanana ray aman-dreny sy mpiara-monina dia mampitombo vokatra.
- One Health : mifamatotra ny fahasalaman’olona, biby ary tontolo iainana.

Tanjona : manova fahalalana ho asa eny ifotony.`,
    questions_fr: [
      "Je peux être un exemple positif pour mes camarades.",
      "Je parle d’hygiène et d’environnement à ma famille.",
      "Je participe aux activités de nettoyage communautaire.",
      "Je respecte les règles de l’école pour la santé.",
      "Je propose des idées pour améliorer mon école.",
      "Je travaille en équipe avec mes camarades.",
      "Je comprends le principe One Health.",
      "Je sais relier santé humaine et environnement.",
      "Je sais relier santé animale et santé humaine.",
      "Je peux expliquer pourquoi agir ensemble est important.",
      "Je suis prêt(e) à participer régulièrement aux actions locales.",
      "Je soutiens les initiatives de mon école.",
      "Je communique avec respect pendant les activités.",
      "Je garde la motivation même quand c’est difficile.",
      "Je me vois comme un(e) ‘Ankizy Vanona’ au service de ma communauté."
    ],
    questions_mg: [
      "Afaka modely tsara ho an’ny namana aho.",
      "Miresaka fahadiovana sy tontolo iainana amin’ny fianakaviana aho.",
      "Mandray anjara amin’ny fanadiovana iombonana aho.",
      "Manaja fitsipika ara-pahasalamana ao an-tsekoly aho.",
      "Manolotra hevitra hanatsarana sekoly aho.",
      "Miara-miasa amin’ny namana aho.",
      "Fantatro ny foto-kevitra One Health.",
      "Afaka mampifandray fahasalaman’olona sy tontolo iainana aho.",
      "Afaka mampifandray fahasalaman’ny biby sy olombelona aho.",
      "Afaka manazava ny maha-zava-dehibe ny fiaraha-mientana aho.",
      "Vonona handray anjara tsy tapaka amin’ny asa eny ifotony aho.",
      "Manohana ny hetsika ataon’ny sekoly aho.",
      "Mifandray am-panajana mandritra ny hetsika aho.",
      "Mitazona fahavitrihana na dia sarotra aza.",
      "Mahita tena ho ‘Ankizy Vanona’ manompo fiarahamonina aho."
    ]
  }
];

/*************************************************
 * I18N UI
 *************************************************/
const t = {
  fr: {
    nav_home:"Accueil",
    nav_chapters:"Chapitres",
    nav_quiz:"Quiz principal",
    nav_result:"Résultats",
    nav_gallery:"Galerie",
    register_title:"Inscription de l’élève",
    register_sub:"Avant d’entrer dans la plateforme, remplis les informations ci-dessous.",
    form_name:"Nom complet",
    form_age:"Âge",
    form_class:"Classe",
    form_school:"École",
    register_start:"Commencer l’apprentissage",
    home_title:"Bienvenue sur la plateforme éducative FAMI",
    home_text:"Ici, le quiz est l’élément principal. Tu avances chapitre par chapitre : Leçon ➜ Questions Likert ➜ Validation ➜ Chapitre suivant.",
    btn_start_path:"Démarrer le parcours",
    btn_go_quiz:"Aller au quiz principal",
    chapters_title:"Parcours des 4 chapitres",
    chapters_sub:"Lis la leçon de chaque chapitre avant de répondre aux questions.",
    quiz_main_title:"Quiz principal (60 questions Likert)",
    btn_after_lesson:"J’ai lu la leçon, commencer le quiz",
    likert_note:"Échelle Likert : choisis ton degré d’accord.",
    btn_prev:"Précédent",
    btn_next:"Suivant",
    btn_next_chapter:"Continuer vers le chapitre suivant",
    result_title:"Résultats finaux",
    result_mastery:"Maîtrise",
    badge_text:"Félicitations ! Tu as terminé le parcours éducatif FAMI.",
    btn_badge:"Télécharger le badge (image)",
    btn_restart_all:"Recommencer tout le parcours",
    btn_back_quiz:"Retour au quiz",
    gallery_title:"Galerie visuelle"
  },
  mg: {
    nav_home:"Fandraisana",
    nav_chapters:"Toko",
    nav_quiz:"Quiz fototra",
    nav_result:"Vokatra",
    nav_gallery:"Galeria",
    register_title:"Fisoratana anaran’ny mpianatra",
    register_sub:"Alohan’ny hiditra amin’ny sehatra dia fenoy ireto mombamomba ireto.",
    form_name:"Anarana feno",
    form_age:"Taona",
    form_class:"Kilasy",
    form_school:"Sekoly",
    register_start:"Hanomboka fianarana",
    home_title:"Tongasoa eto amin’ny sehatra fanabeazana FAMI",
    home_text:"Eto, ny quiz no ivon’ny sehatra. Mandeha tsikelikely ianao : Lesona ➜ Fanontaniana Likert ➜ Fanamarinana ➜ Toko manaraka.",
    btn_start_path:"Hanomboka ny làlana",
    btn_go_quiz:"Mankany amin’ny quiz",
    chapters_title:"Làlana misy toko 4",
    chapters_sub:"Vakio aloha ny lesona isaky ny toko vao mamaly fanontaniana.",
    quiz_main_title:"Quiz fototra (fanontaniana Likert 60)",
    btn_after_lesson:"Efa novakiako ny lesona, hanomboka quiz",
    likert_note:"Likert: fidio ny haavon’ny fanekenao.",
    btn_prev:"Hiverina",
    btn_next:"Manaraka",
    btn_next_chapter:"Tohizo amin’ny toko manaraka",
    result_title:"Vokatra farany",
    result_mastery:"Fahaiza-mifehy",
    badge_text:"Arahabaina! Vitanao ny làlana fanabeazana FAMI.",
    btn_badge:"Hisintona badge (sary)",
    btn_restart_all:"Averina ny làlana rehetra",
    btn_back_quiz:"Hiverina amin’ny quiz",
    gallery_title:"Galeria sary"
  }
};

function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.dataset.i18n;
    el.textContent = t[lang][k] || el.textContent;
  });
  document.getElementById("langBtn").textContent = lang === "fr" ? "MG" : "FR";
}

/*************************************************
 * ETAT APPLICATION
 *************************************************/
const state = {
  registered: false,
  student: null,
  currentChapterIndex: 0, // 0..3
  currentQuestionIndex: 0, // 0..14
  answers: chapters.map(()=>Array(15).fill(null)), // valeur 1..5
  chapterCompleted: [false,false,false,false]
};

/*************************************************
 * HELPERS PAGE
 *************************************************/
const pages = ["registerPage","homePage","chaptersPage","quizPage","resultPage","galleryPage"];
function showPage(id){
  pages.forEach(pid=>{
    const el = document.getElementById(pid);
    if(!el) return;
    el.classList.toggle("visible", pid === id);
  });
  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.page === id);
  });
}

/*************************************************
 * INSCRIPTION
 *************************************************/
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const name = document.getElementById("childName").value.trim();
  const age = parseInt(document.getElementById("childAge").value,10);
  const childClass = document.getElementById("childClass").value.trim();
  const school = document.getElementById("childSchool").value.trim();
  if(!name || !age || !childClass || !school) return;

  state.registered = true;
  state.student = {name, age, childClass, school};

  document.getElementById("welcomeText").textContent =
    `${name} • ${childClass} • ${school}`;

  document.getElementById("mainNav").style.display = "flex";
  showPage("homePage");
});

/*************************************************
 * NAVIGATION (pages cachées via boutons)
 *************************************************/
document.getElementById("mainNav").style.display = "none";

document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(!state.registered){
      showPage("registerPage");
      return;
    }
    showPage(btn.dataset.page);
    if(btn.dataset.page === "quizPage"){
      renderQuizStep();
    }
    if(btn.dataset.page === "chaptersPage"){
      renderChapterCards();
    }
    if(btn.dataset.page === "resultPage"){
      renderFinalResult();
    }
  });
});

document.querySelectorAll("[data-go]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const target = btn.dataset.go;
    showPage(target);
    if(target === "quizPage") renderQuizStep();
    if(target === "chaptersPage") renderChapterCards();
  });
});

/*************************************************
 * CHAPTER CARDS
 *************************************************/
function renderChapterCards(){
  const grid = document.getElementById("chapterGrid");
  grid.innerHTML = "";
  chapters.forEach((ch, idx)=>{
    const done = state.chapterCompleted[idx];
    const card = document.createElement("article");
    card.className = "chapter-card" + (done ? " done":"");

    const title = lang==="fr" ? ch.title_fr : ch.title_mg;
    const lesson = lang==="fr" ? ch.lesson_fr : ch.lesson_mg;

    card.innerHTML = `
      <h4>${title}</h4>
      <p>${lesson.split("\n")[0]}</p>
      <span class="tag">${done ? (lang==="fr"?"Terminé":"Vita") : (lang==="fr"?"À faire":"Mbola atao")}</span>
      <div style="margin-top:10px">
        <button class="btn"> ${lang==="fr"?"Ouvrir ce chapitre":"Hanokatra ity toko ity"} </button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", ()=>{
      state.currentChapterIndex = idx;
      state.currentQuestionIndex = 0;
      showPage("quizPage");
      renderQuizStep(true); // force lesson first
    });

    grid.appendChild(card);
  });
}

/*************************************************
 * QUIZ FLOW
 *************************************************/
const lessonStep = document.getElementById("lessonStep");
const questionStep = document.getElementById("questionStep");
const chapterDoneStep = document.getElementById("chapterDoneStep");

const lessonTitle = document.getElementById("lessonTitle");
const lessonContent = document.getElementById("lessonContent");

const questionText = document.getElementById("questionText");
const likertChoices = document.getElementById("likertChoices");
const quizProgressText = document.getElementById("quizProgressText");
const globalProgress = document.getElementById("globalProgress");

const startChapterQuizBtn = document.getElementById("startChapterQuizBtn");
const prevQuestionBtn = document.getElementById("prevQuestionBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const nextChapterBtn = document.getElementById("nextChapterBtn");

let lessonMustBeShown = true;

function setQuizProgress(){
  const chapterNum = state.currentChapterIndex + 1;
  const qNum = state.currentQuestionIndex + 1;
  quizProgressText.textContent = `Chapitre ${chapterNum} / 4 — Question ${qNum} / 15`;

  const totalQuestions = 60;
  const answeredCount = state.answers.flat().filter(v=>v!==null).length;
  const pct = Math.round((answeredCount / totalQuestions) * 100);
  globalProgress.style.width = `${pct}%`;
}

function renderQuizStep(forceLesson=false){
  if(forceLesson) lessonMustBeShown = true;

  const ch = chapters[state.currentChapterIndex];
  const chTitle = lang==="fr" ? ch.title_fr : ch.title_mg;
  const chLesson = lang==="fr" ? ch.lesson_fr : ch.lesson_mg;

  setQuizProgress();

  if(lessonMustBeShown){
    lessonStep.classList.remove("hidden");
    questionStep.classList.add("hidden");
    chapterDoneStep.classList.add("hidden");

    lessonTitle.textContent = chTitle;
    lessonContent.textContent = chLesson;
    return;
  }

  lessonStep.classList.add("hidden");
  questionStep.classList.remove("hidden");
  chapterDoneStep.classList.add("hidden");

  const qArr = lang==="fr" ? ch.questions_fr : ch.questions_mg;
  questionText.textContent = qArr[state.currentQuestionIndex];

  likertChoices.innerHTML = "";
  likertLabels[lang].forEach((lbl, idx)=>{
    const val = idx + 1;
    const b = document.createElement("button");
    b.className = "likert-btn";
    b.innerHTML = `<div>${val}</div><small>${lbl}</small>`;

    const selected = state.answers[state.currentChapterIndex][state.currentQuestionIndex] === val;
    if(selected) b.classList.add("active");

    b.addEventListener("click", ()=>{
      state.answers[state.currentChapterIndex][state.currentQuestionIndex] = val;
      renderQuizStep(); // refresh active
    });
    likertChoices.appendChild(b);
  });
}

startChapterQuizBtn.addEventListener("click", ()=>{
  lessonMustBeShown = false;
  renderQuizStep();
});

prevQuestionBtn.addEventListener("click", ()=>{
  if(state.currentQuestionIndex > 0){
    state.currentQuestionIndex--;
    renderQuizStep();
  } else {
    lessonMustBeShown = true;
    renderQuizStep();
  }
});

nextQuestionBtn.addEventListener("click", ()=>{
  const currentAnswer = state.answers[state.currentChapterIndex][state.currentQuestionIndex];
  if(currentAnswer === null){
    alert(lang==="fr"
      ? "Choisis une réponse Likert avant de continuer."
      : "Misafidiana valiny Likert aloha vao tohizana.");
    return;
  }

  if(state.currentQuestionIndex < 14){
    state.currentQuestionIndex++;
    renderQuizStep();
    return;
  }

  // fin chapitre
  state.chapterCompleted[state.currentChapterIndex] = true;
  showChapterDone();
});

function showChapterDone(){
  lessonStep.classList.add("hidden");
  questionStep.classList.add("hidden");
  chapterDoneStep.classList.remove("hidden");

  const chNum = state.currentChapterIndex + 1;
  const chapterAnswers = state.answers[state.currentChapterIndex];
  const chapterScore = chapterAnswers.reduce((a,b)=>a + (b || 0), 0);
  const chapterPct = Math.round((chapterScore / (15*5)) * 100);

  document.getElementById("chapterDoneTitle").textContent =
    lang==="fr"
      ? `Chapitre ${chNum} terminé 🎉`
      : `Vita ny toko ${chNum} 🎉`;

  document.getElementById("chapterDoneText").textContent =
    lang==="fr"
      ? `Ton score de chapitre : ${chapterScore}/75 (${chapterPct}%).`
      : `Naoty toko : ${chapterScore}/75 (${chapterPct}%).`;
}

nextChapterBtn.addEventListener("click", ()=>{
  if(state.currentChapterIndex < 3){
    state.currentChapterIndex++;
    state.currentQuestionIndex = 0;
    lessonMustBeShown = true;
    renderQuizStep(true);
  } else {
    showPage("resultPage");
    renderFinalResult();
  }
});

/*************************************************
 * RESULTAT FINAL + BADGE
 *************************************************/
function computeFinal(){
  const all = state.answers.flat();
  const answered = all.filter(v=>v!==null);
  const score = answered.reduce((a,b)=>a+b,0);
  const max = 60 * 5;
  const percent = Math.round((score / max) * 100);
  return {score,max,percent,answeredCount:answered.length};
}

function renderFinalResult(){
  const {score,max,percent,answeredCount} = computeFinal();
  const finalSummary = document.getElementById("finalSummary");
  const finalPercent = document.getElementById("finalPercent");
  const ringFg = document.getElementById("ringFg");
  const badgeBox = document.getElementById("badgeBox");

  finalSummary.textContent = lang==="fr"
    ? `${state.student?.name || "Élève"}, tu as répondu à ${answeredCount}/60 questions. Score total : ${score}/${max}.`
    : `${state.student?.name || "Mpianatra"}, namaly fanontaniana ${answeredCount}/60 ianao. Naoty manontolo : ${score}/${max}.`;

  finalPercent.textContent = `${percent}%`;

  const circumference = 2 * Math.PI * 52; // ~326.7
  const offset = circumference - (percent / 100) * circumference;
  ringFg.style.strokeDasharray = `${circumference}`;
  ringFg.style.strokeDashoffset = `${offset}`;

  // Badge si >= 60% ET 60/60 répondues
  const eligible = percent >= 60 && answeredCount === 60;
  badgeBox.classList.toggle("hidden", !eligible);
}

document.getElementById("downloadBadgeBtn").addEventListener("click", ()=>{
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  // Fond
  const grad = ctx.createLinearGradient(0,0,1200,700);
  grad.addColorStop(0,"#fff8d6");
  grad.addColorStop(1,"#e8ffd9");
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,1200,700);

  // Titre badge
  ctx.fillStyle = "#1f7a3e";
  ctx.font = "bold 76px 'Baloo 2', sans-serif";
  ctx.fillText("ANKIZY VANONA", 320, 170);

  ctx.fillStyle = "#245b34";
  ctx.font = "bold 40px 'Nunito', sans-serif";
  ctx.fillText("Certificate of Completion", 390, 240);

  // Nom
  ctx.fillStyle = "#1f2a2e";
  ctx.font = "bold 56px 'Nunito', sans-serif";
  ctx.fillText(state.student?.name || "Mpianatra", 330, 345);

  ctx.font = "32px 'Nunito', sans-serif";
  ctx.fillText("a terminé le parcours éducatif FAMI / HayVoary", 270, 410);

  const {percent} = computeFinal();
  ctx.font = "bold 34px 'Nunito', sans-serif";
  ctx.fillStyle = "#0f5a2c";
  ctx.fillText(`Score final : ${percent}%`, 490, 475);

  ctx.font = "28px 'Nunito', sans-serif";
  ctx.fillStyle = "#41515b";
  ctx.fillText(`Date : ${new Date().toLocaleDateString()}`, 495, 530);

  // Etoile simple
  ctx.fillStyle = "#ffcc00";
  ctx.beginPath();
  ctx.arc(170,170,90,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 44px 'Nunito', sans-serif";
  ctx.fillText("★", 152, 186);

  // Download
  const link = document.createElement("a");
  link.download = "badge_ankizy_vanona.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

document.getElementById("restartAllBtn").addEventListener("click", ()=>{
  state.currentChapterIndex = 0;
  state.currentQuestionIndex = 0;
  state.answers = chapters.map(()=>Array(15).fill(null));
  state.chapterCompleted = [false,false,false,false];
  lessonMustBeShown = true;
  showPage("quizPage");
  renderQuizStep(true);
  renderChapterCards();
});

/*************************************************
 * GALLERY
 *************************************************/
function renderGallery(){
  const g = document.getElementById("galleryGrid");
  g.innerHTML = "";
  images.forEach(src=>{
    const img = document.createElement("img");
    img.src = src;
    img.alt = src;
    g.appendChild(img);
  });
}

/*************************************************
 * LANGUAGE BUTTON
 *************************************************/
document.getElementById("langBtn").addEventListener("click", ()=>{
  lang = lang === "fr" ? "mg" : "fr";
  applyI18n();
  if(state.registered){
    renderChapterCards();
    renderQuizStep();
    renderFinalResult();
  }
});

/*************************************************
 * INIT
 *************************************************/
applyI18n();
showPage("registerPage");
renderGallery();
renderChapterCards();
