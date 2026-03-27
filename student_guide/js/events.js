(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function typeClass(type) {
    if (type === "Imtihon") return "type-imtihon";
    if (type === "Muhlik") return "type-muhlik";
    if (type === "Bayram") return "type-bayram";
    return "type-tadbir";
  }

  var ITEMS = [
    {
      id: 1,
      title: "Orientatsiya Haftasi",
      type: "Tadbir",
      date: "1-5 Sentyabr, 2026",
      time: "9:00 - 17:00",
      location: "Asosiy Kampus",
      description:
        "Yangi talabalar uchun kampus sayohati, ro'yxatdan o'tish va ijtimoiy tadbirlar",
      details:
        "Yangi talabalarni universitega xush kelibsiz aytish, kampusni tanishish, ro'yxatdan o'tish jarayonlari va ijtimoiy tadbirlar. Barcha yangi talabalar uchun majburiy.",
      image:
        "https://images.unsplash.com/photo-1591218214141-45545921d2d9?w=1080",
    },
    {
      id: 2,
      title: "Oraliq Imtihonlar",
      type: "Imtihon",
      date: "15-20 Aprel, 2026",
      time: "Imtihon jadvaliga ko'ra",
      location: "Turli Ma'ruza Xonalari",
      description: "Barcha kurslar bo'yicha yarim semestr imtihonlari",
      details:
        "Yarim semestr imtihonlari. Aniq jadvallarni talabalar portalida tekshiring. Imtihonlarga yaxshi tayyorlaning.",
      image:
        "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?w=1080",
    },
    {
      id: 3,
      title: "Xalqaro Talabalar Festivali",
      type: "Tadbir",
      date: "10 May, 2026",
      time: "14:00 - 20:00",
      location: "Talabalar Markazi Maydoni",
      description:
        "Madaniy ko'rsatuvlar, xalqaro taomlar va ko'rgazmalar bilan xilma-xillikni nishonlash",
      details:
        "Turli mamlakatlardan kelgan talabalar o'z madaniyatlarini ko'rsatadilar. Milliy taomlar, an'anaviy kiyimlar, musiqiy ko'rsatuvlar va raqs ijrolari.",
      image:
        "https://images.unsplash.com/photo-1591218214141-45545921d2d9?w=1080",
    },
    {
      id: 4,
      title: "Yakuniy Imtihonlar",
      type: "Imtihon",
      date: "1-15 Iyun, 2026",
      time: "Imtihon jadvaliga ko'ra",
      location: "Turli Ma'ruza Xonalari",
      description: "Semestr oxiridagi yakuniy imtihonlar",
      details:
        "Semestr yakuniy imtihonlari. Batafsil jadval uchun akademik kalendarga qarang. Imtihonlarga yaxshi tayyorlaning.",
      image:
        "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?w=1080",
    },
    {
      id: 5,
      title: "Karyera Yarmarkasi",
      type: "Tadbir",
      date: "15 Mart, 2026",
      time: "10:00 - 16:00",
      location: "Sport Majmuasi",
      description:
        "Potentsial ish beruvchilar bilan tanishish, ish imkoniyatlarini o'rganish",
      details:
        "Yirik kompaniyalar va ish beruvchilar bilan to'g'ridan-to'g'ri uchrashish. CV tayyorlash, suhbat ko'nikmalari bo'yicha seminarlar.",
      image:
        "https://images.unsplash.com/photo-1591218214141-45545921d2d9?w=1080",
    },
    {
      id: 6,
      title: "Bitiruv Marosimi",
      type: "Tadbir",
      date: "20 Iyul, 2026",
      time: "10:00 - 14:00",
      location: "Asosiy Auditoriya",
      description: "Bitiruvchi talabalarning yutuqlarini nishonlash tantanasi",
      details:
        "Rasmiy bitiruv marosimi. Diplomlar topshirish, rasmiy nutqlar va nishonlash. Oila a'zolarini taklif qilishingiz mumkin.",
      image:
        "https://images.unsplash.com/photo-1591218214141-45545921d2d9?w=1080",
    },
    {
      id: 7,
      title: "Ro'yxatdan O'tish Muddati",
      type: "Muhlik",
      date: "25 Avgust, 2026",
      time: "17:00",
      location: "Onlayn Portal",
      description: "Kuz semestri kurslari uchun ro'yxatdan o'tishning oxirgi kuni",
      details:
        "Kuz semestri kurslariga yozilishning oxirgi muddati. Kechikkan ro'yxatdan o'tish qo'shimcha to'lovlarni talab qiladi.",
      image:
        "https://images.unsplash.com/photo-1771758249853-415175dc29b9?w=1080",
    },
    {
      id: 8,
      title: "Qishki Ta'til",
      type: "Bayram",
      date: "20 Dekabr, 2026 - 5 Yanvar, 2027",
      time: "Kun bo'yi",
      location: "Kampus Yopiq",
      description: "Qishki bayramlar uchun universitet yopiladi",
      details:
        "Universitet qishki bayramlar uchun yopiq. Kampus ob'ektlari 6 Yanvar, 2027 dan qayta ochiladi.",
      image:
        "https://images.unsplash.com/photo-1547817752-c23df0357f18?w=1080",
    },
  ];

  function renderBody(e) {
    var tc = typeClass(e.type);
    return (
      '<div class="modal-hero"><img src="' +
      esc(e.image) +
      '" alt="" /><span class="badge ' +
      tc +
      '" style="position:absolute;top:1rem;right:1rem;padding:0.35rem 0.75rem;border-radius:9999px;color:#fff;">' +
      esc(e.type) +
      "</span></div>" +
      '<div class="modal-grid-2"><div class="modal-block"><p><strong>Sana</strong></p><p>' +
      esc(e.date) +
      '</p></div><div class="modal-block"><p><strong>Vaqt</strong></p><p>' +
      esc(e.time) +
      '</p></div><div class="modal-block" style="grid-column:1/-1;"><p><strong>Joylashuv</strong></p><p>' +
      esc(e.location) +
      "</p></div></div>" +
      '<div class="modal-block"><p><strong>Ta\'rif</strong></p><p>' +
      esc(e.description) +
      "</p><p style='margin-top:0.75rem;color:#9ca3af;'>" +
      esc(e.details) +
      "</p></div>"
    );
  }

  document.querySelectorAll("[data-event-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-event-id"), 10);
      var e = ITEMS.find(function (x) {
        return x.id === id;
      });
      if (!e || !window.GuideModal) return;
      window.GuideModal.open({ title: e.title, bodyHtml: renderBody(e) });
    });
  });
})();
