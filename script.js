const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const toggleText = document.querySelector(".toggle-text");
const languageSelect = document.querySelector("#language-select");
const translatableElements = document.querySelectorAll("[data-i18n]");
const revealElements = document.querySelectorAll(".reveal");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");

const translations = {
  en: {
    pageTitle: "The Social Media Landscape",
    navPros: "Pros",
    navCons: "Cons",
    navConclusion: "Conclusion",
    languageLabel: "Language",
    heroKicker: "Digital connection in modern life",
    heroTitle: "The Social Media Landscape",
    heroCopy:
      "Social media is a digital platform that allows people to communicate, share information, create content, and connect with others around the world through the internet. Popular social media platforms include Facebook, Instagram, TikTok, X, and YouTube. People use social media for communication, entertainment, education, business, and news sharing.",
    heroButton: "Explore the impact",
    prosKicker: "The Advantages",
    prosTitle: "Positive Uses of Social Media",
    proOneTitle: "Stay connected",
    proOneCopy:
      "Social media helps people remain close to family, friends, classmates, and communities.",
    proTwoTitle: "Fast communication",
    proTwoCopy:
      "Messages, posts, and video calls allow information to travel quickly across distances.",
    proThreeTitle: "Educational opportunities",
    proThreeCopy:
      "Students and teachers can access tutorials, discussions, learning groups, and academic content.",
    proFourTitle: "Business promotion",
    proFourCopy:
      "Companies and small businesses can advertise products, build brands, and reach customers.",
    proFiveTitle: "Sharing creativity",
    proFiveCopy:
      "Creators can publish videos, designs, writing, music, and other original ideas with global audiences.",
    proSixTitle: "Quick access to global news",
    proSixCopy:
      "People can follow current events and learn about important stories from around the world.",
    consKicker: "The Disadvantages",
    consTitle: "Risks That Require Responsible Use",
    conOneTitle: "Addiction and wasted time",
    conOneCopy:
      "Excessive scrolling can distract users from studying, working, resting, and real responsibilities.",
    conTwoTitle: "False information/fake news",
    conTwoCopy:
      "Unverified posts can spread quickly and influence people before accurate facts are checked.",
    conThreeTitle: "Cyberbullying",
    conThreeCopy:
      "Harmful messages, public insults, and online harassment can damage confidence and safety.",
    conFourTitle: "Privacy risks",
    conFourCopy:
      "Personal photos, locations, and private details can be misused when shared without care.",
    conFiveTitle: "Mental health/sleep impacts",
    conFiveCopy:
      "Comparison, pressure, late-night use, and constant notifications can affect mood and sleep quality.",
    conSixTitle: "Reduced face-to-face interaction",
    conSixCopy:
      "Online communication can sometimes replace meaningful in-person conversations and relationships.",
    conclusionKicker: "Conclusion",
    conclusionTitle: "Use Social Media Wisely",
    conclusionCopy:
      "Social media has become an important part of modern life. It offers many benefits in communication, education, and entertainment, but it also has negative effects if not used responsibly. Therefore, people should use social media wisely and maintain a healthy balance between online and real-life activities.",
    backToTop: "Back to top",
    themeLight: "Light",
    themeDark: "Dark",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    chooseLanguage: "Choose language",
  },
  am: {
    pageTitle: "የማኅበራዊ ሚዲያ ገጽታ",
    navPros: "ጥቅሞች",
    navCons: "ጉዳቶች",
    navConclusion: "መደምደሚያ",
    languageLabel: "ቋንቋ",
    heroKicker: "በዘመናዊ ሕይወት ውስጥ ዲጂታል ግንኙነት",
    heroTitle: "የማኅበራዊ ሚዲያ ገጽታ",
    heroCopy:
      "ማኅበራዊ ሚዲያ ሰዎች በኢንተርኔት በኩል እንዲገናኙ፣ መረጃ እንዲጋሩ፣ ይዘት እንዲፈጥሩ እና ከዓለም ዙሪያ ካሉ ሰዎች ጋር እንዲተሳሰሩ የሚያስችል ዲጂታል መድረክ ነው። ታዋቂ የማኅበራዊ ሚዲያ መድረኮች Facebook፣ Instagram፣ TikTok፣ X እና YouTube ይጨምራሉ። ሰዎች ማኅበራዊ ሚዲያን ለግንኙነት፣ ለመዝናኛ፣ ለትምህርት፣ ለንግድ እና ለዜና መጋራት ይጠቀማሉ።",
    heroButton: "ተፅዕኖውን ይመልከቱ",
    prosKicker: "ጥቅሞች",
    prosTitle: "የማኅበራዊ ሚዲያ አዎንታዊ አጠቃቀሞች",
    proOneTitle: "ተገናኝቶ መቆየት",
    proOneCopy: "ማኅበራዊ ሚዲያ ሰዎች ከቤተሰብ፣ ከጓደኞች፣ ከክፍል ጓደኞች እና ከማኅበረሰቦች ጋር ቅርብ እንዲሆኑ ይረዳል።",
    proTwoTitle: "ፈጣን ግንኙነት",
    proTwoCopy: "መልዕክቶች፣ ልጥፎች እና የቪዲዮ ጥሪዎች መረጃ በርቀት በፍጥነት እንዲደርስ ያደርጋሉ።",
    proThreeTitle: "የትምህርት እድሎች",
    proThreeCopy: "ተማሪዎች እና መምህራን ትምህርታዊ ቪዲዮዎችን፣ ውይይቶችን፣ የመማሪያ ቡድኖችን እና አካዳሚያዊ ይዘትን ማግኘት ይችላሉ።",
    proFourTitle: "የንግድ ማስተዋወቂያ",
    proFourCopy: "ኩባንያዎች እና ትናንሽ ንግዶች ምርቶችን ማስተዋወቅ፣ ስም መገንባት እና ደንበኞችን መድረስ ይችላሉ።",
    proFiveTitle: "ፈጠራን መጋራት",
    proFiveCopy: "ፈጣሪዎች ቪዲዮዎችን፣ ዲዛይኖችን፣ ጽሑፎችን፣ ሙዚቃን እና ሌሎች ኦሪጅናል ሀሳቦችን ለዓለም ተመልካቾች ማቅረብ ይችላሉ።",
    proSixTitle: "ፈጣን የዓለም ዜና መዳረሻ",
    proSixCopy: "ሰዎች ወቅታዊ ክስተቶችን መከታተል እና ከዓለም ዙሪያ ስላሉ አስፈላጊ ታሪኮች መማር ይችላሉ።",
    consKicker: "ጉዳቶች",
    consTitle: "ኃላፊነት ያለው አጠቃቀም የሚፈልጉ አደጋዎች",
    conOneTitle: "ሱስ እና የጊዜ ብክነት",
    conOneCopy: "ከመጠን በላይ መመልከት ተጠቃሚዎችን ከትምህርት፣ ከሥራ፣ ከእረፍት እና ከእውነተኛ ኃላፊነቶች ሊያዘናጋ ይችላል።",
    conTwoTitle: "የተሳሳተ መረጃ/የሐሰት ዜና",
    conTwoCopy: "ያልተረጋገጡ ልጥፎች በፍጥነት ሊሰራጩ እና ትክክለኛ እውነታዎች ከመፈተሻቸው በፊት ሰዎችን ሊያሳስቱ ይችላሉ።",
    conThreeTitle: "የመስመር ላይ ጉልበተኝነት",
    conThreeCopy: "ጎጂ መልዕክቶች፣ የሕዝብ ፊት ስድቦች እና የመስመር ላይ ትንኮሳ በራስ መተማመንን እና ደህንነትን ሊጎዱ ይችላሉ።",
    conFourTitle: "የግላዊነት አደጋዎች",
    conFourCopy: "የግል ፎቶዎች፣ አካባቢዎች እና የግል ዝርዝሮች በጥንቃቄ ካልተጋሩ በስህተት ሊጠቀሙባቸው ይችላሉ።",
    conFiveTitle: "በአእምሮ ጤና/እንቅልፍ ላይ ተፅዕኖ",
    conFiveCopy: "ራስን ከሌሎች ጋር ማነጻጸር፣ ግፊት፣ የሌሊት አጠቃቀም እና ቀጣይ ማሳወቂያዎች ስሜትን እና የእንቅልፍ ጥራትን ሊጎዱ ይችላሉ።",
    conSixTitle: "የፊት ለፊት ግንኙነት መቀነስ",
    conSixCopy: "የመስመር ላይ ግንኙነት አንዳንድ ጊዜ ትርጉም ያለውን የፊት ለፊት ውይይትና ግንኙነት ሊተካ ይችላል።",
    conclusionKicker: "መደምደሚያ",
    conclusionTitle: "ማኅበራዊ ሚዲያን በጥበብ ይጠቀሙ",
    conclusionCopy:
      "ማኅበራዊ ሚዲያ የዘመናዊ ሕይወት አስፈላጊ ክፍል ሆኗል። በግንኙነት፣ በትምህርት እና በመዝናኛ ብዙ ጥቅሞችን ይሰጣል፣ ነገር ግን በኃላፊነት ካልተጠቀምንበት አሉታዊ ተፅዕኖዎችም አሉት። ስለዚህ ሰዎች ማኅበራዊ ሚዲያን በጥበብ መጠቀም እና በመስመር ላይ እና በእውነተኛ ሕይወት እንቅስቃሴዎች መካከል ጤናማ ሚዛን መጠበቅ አለባቸው።",
    backToTop: "ወደ ላይ ተመለስ",
    themeLight: "ብርሃን",
    themeDark: "ጨለማ",
    switchToLight: "ወደ ብርሃን ሁነታ ቀይር",
    switchToDark: "ወደ ጨለማ ሁነታ ቀይር",
    chooseLanguage: "ቋንቋ ይምረጡ",
  },
};

let currentLanguage = localStorage.getItem("social-media-language") || "en";

/**
 * Updates every element that has a data-i18n key.
 * This keeps the HTML semantic while allowing a clean language switch.
 */
function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  body.dataset.language = language;
  languageSelect.value = language;
  languageSelect.setAttribute("aria-label", dictionary.chooseLanguage);

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  localStorage.setItem("social-media-language", language);
  updateThemeText();
}

/**
 * Applies the selected visual theme and keeps the button accessible.
 * The selected value is saved so the site remembers the user's preference.
 */
function setTheme(theme) {
  const isDark = theme === "dark";

  body.classList.toggle("dark-theme", isDark);
  updateThemeText();
  localStorage.setItem("social-media-theme", theme);
}

function updateThemeText() {
  const dictionary = translations[currentLanguage] || translations.en;
  const isDark = body.classList.contains("dark-theme");

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? dictionary.switchToLight : dictionary.switchToDark
  );
  toggleText.textContent = isDark ? dictionary.themeDark : dictionary.themeLight;
}

const savedTheme = localStorage.getItem("social-media-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
setLanguage(currentLanguage);

themeToggle.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark-theme") ? "light" : "dark";
  setTheme(nextTheme);
});

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

/**
 * Reveals content sections only when they enter the viewport.
 * This keeps the page lively without relying on external animation libraries.
 */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealElements.forEach((element) => observer.observe(element));

/**
 * Turns the disadvantages section into an accessible accordion.
 * Multiple panels can remain open so users can compare concerns.
 */
accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const isOpen = item.classList.toggle("is-open");

    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});
