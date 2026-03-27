(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var SUBJECTS = [
    {
      id: 1,
      name: "Oliy Matematika",
      code: "MATH301",
      credits: 4,
      semester: "1-semestr",
      description:
        "Integral va differensial hisob, chiziqli algebra va matematik tahlil asoslari",
      syllabus: [
        "Limitlar va uzluksizlik",
        "Hosilalar va differensiallar",
        "Integrallar va ularning qo'llanilishi",
        "Chiziqli algebra elementlari",
        "Differensial tenglamalar",
      ],
      prerequisites: "Asosiy matematika",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1080",
    },
    {
      id: 2,
      name: "Fizika",
      code: "PHYS201",
      credits: 4,
      semester: "1-semestr",
      description: "Klassik mexanika, termodinamika va elektromagnetizm asoslari",
      syllabus: [
        "Nyuton qonunlari va mexanika",
        "Issiqlik va termodinamika",
        "Elektr va magnetizm",
        "To'lqinlar va optika",
        "Zamonaviy fizika kiritma",
      ],
      prerequisites: "Asosiy fizika",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1080",
    },
    {
      id: 3,
      name: "Dasturlash Asoslari",
      code: "CS101",
      credits: 3,
      semester: "1-semestr",
      description: "Python dasturlash tili orqali dasturlash asoslari",
      syllabus: [
        "Dasturlash asoslari va sintaksis",
        "Ma'lumotlar turlari va operatorlar",
        "Funksiyalar va modullar",
        "Obyektga yo'naltirilgan dasturlash",
        "Algoritmlar va ma'lumotlar tuzilmalari",
      ],
      prerequisites: "Yo'q",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1080",
    },
    {
      id: 4,
      name: "Ingliz Tili",
      code: "ENG102",
      credits: 3,
      semester: "1-2 semestr",
      description: "Akademik ingliz tili va kommunikatsiya ko'nikmalari",
      syllabus: [
        "Grammatika va lug'at",
        "O'qish va tushunish",
        "Yozish ko'nikmalari",
        "Gapirish va tinglab tushunish",
        "Akademik prezentatsiyalar",
      ],
      prerequisites: "Asosiy ingliz tili",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1080",
    },
    {
      id: 5,
      name: "Kimyo",
      code: "CHEM201",
      credits: 4,
      semester: "2-semestr",
      description: "Umumiy, organik va noorganik kimyo asoslari",
      syllabus: [
        "Atom tuzilishi va davriy sistema",
        "Kimyoviy bog'lanishlar",
        "Organik birikmalar",
        "Kimyoviy reaksiyalar kinetikasi",
        "Laboratoriya tajribalari",
      ],
      prerequisites: "Asosiy kimyo",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1080",
    },
    {
      id: 6,
      name: "Tarix",
      code: "HIST101",
      credits: 3,
      semester: "1-semestr",
      description: "O'zbekiston va jahon tarixi, madaniyat va sivilizatsiyalar",
      syllabus: [
        "Qadimgi sivilizatsiyalar",
        "O'rta asrlar tarixi",
        "Yangi davr va renessans",
        "XX asr voqealari",
        "Mustaqillik davri",
      ],
      prerequisites: "Yo'q",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1080",
    },
    {
      id: 7,
      name: "Ma'lumotlar Bazasi",
      code: "CS301",
      credits: 3,
      semester: "3-semestr",
      description: "Relatsion ma'lumotlar bazalari va SQL dasturlash",
      syllabus: [
        "Ma'lumotlar bazasi kontseptsiyalari",
        "Relatsion model va SQL",
        "Ma'lumotlar bazasi dizayni",
        "Indekslash va optimizatsiya",
        "Amaliy loyihalar",
      ],
      prerequisites: "Dasturlash asoslari",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1080",
    },
    {
      id: 8,
      name: "Sun'iy Intellekt",
      code: "CS401",
      credits: 4,
      semester: "4-semestr",
      description: "Mashina o'rganish va sun'iy intellekt asoslari",
      syllabus: [
        "AI ga kirish",
        "Mashina o'rganish algoritmlari",
        "Neyron tarmoqlar",
        "Chuqur o'rganish",
        "AI amaliy qo'llanmalari",
      ],
      prerequisites: "Python dasturlash, Matematika",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080",
    },
  ];

  function renderBody(s) {
    var syllabusHtml = "<ul class='steps-list' style='padding:0;list-style:none;'>";
    s.syllabus.forEach(function (line, i) {
      syllabusHtml +=
        '<li><span class="syllabus-num">' +
        (i + 1) +
        "</span><span>" +
        esc(line) +
        "</span></li>";
    });
    syllabusHtml += "</ul>";

    return (
      '<div class="modal-hero"><img src="' +
      esc(s.image) +
      '" alt="" /><span class="badge" style="position:absolute;top:1rem;right:1rem;background:#16a34a;">' +
      esc(s.code) +
      "</span></div>" +
      '<div class="modal-grid-2"><div class="modal-block"><p><strong>Kreditlar</strong></p><p>' +
      esc(String(s.credits)) +
      '</p></div><div class="modal-block"><p><strong>Semestr</strong></p><p>' +
      esc(s.semester) +
      '</p></div><div class="modal-block" style="grid-column:1/-1;"><p><strong>Talablar</strong></p><p>' +
      esc(s.prerequisites) +
      "</p></div></div>" +
      '<div class="modal-block"><p><strong>Ta\'rif</strong></p><p>' +
      esc(s.description) +
      "</p></div>" +
      '<div class="modal-block"><p><strong>O\'quv dasturi</strong></p>' +
      syllabusHtml +
      "</div>"
    );
  }

  document.querySelectorAll("[data-subject-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-subject-id"), 10);
      var s = SUBJECTS.find(function (x) {
        return x.id === id;
      });
      if (!s || !window.GuideModal) return;
      window.GuideModal.open({ title: s.name, bodyHtml: renderBody(s) });
    });
  });
})();
