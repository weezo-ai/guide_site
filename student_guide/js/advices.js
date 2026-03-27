(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var ITEMS = [
    {
      id: 1,
      title: "Talaba Hujjatlarini Olish",
      category: "Ro'yxatdan o'tish",
      timeline: "1-2 hafta",
      steps: [
        "Onlayn ariza formasini to'ldiring",
        "Kerakli hujjatlarni yuklang (pasport, foto, sertifikatlar)",
        "Universitet bankida ro'yxatga olish to'lovini to'lang",
        "To'lov kvitansiyasi bilan Xorijiy Talabalar Bo'limiga tashrif buyuring",
        "Talaba ID va hujjatlarni oling",
      ],
      details:
        "Hujjatlarni rasmiylashtirish jarayoni oddiy va tez. Barcha hujjatlar tayyor bo'lganda, 1-2 hafta ichida talaba ID olishingiz mumkin. Savollar bo'lsa, Xorijiy Talabalar Bo'limiga murojaat qiling.",
      image:
        "https://images.unsplash.com/photo-1771758249853-415175dc29b9?w=1080",
    },
    {
      id: 2,
      title: "Viza Uzaytirish Jarayoni",
      category: "Immigratsiya",
      timeline: "2-4 hafta",
      steps: [
        "Viza muddatini tekshiring (30 kun oldin ariza bering)",
        "Kerakli hujjatlarni tayyorlang (pasport, ro'yxatdan o'tish xati, moliyaviy isboti)",
        "Xorijiy Talabalar Bo'limida ariza topshiring",
        "Viza uzaytirish to'lovini to'lang",
        "Kerak bo'lsa, immigratsiya suhbatida qatnashing",
        "Uzaytirilgan vizani oling",
      ],
      details:
        "Viza uzaytirish jarayoni 2-4 hafta davom etadi. Vaqtida ariza berishni unutmang. Barcha hujjatlar to'g'ri tayyorlangan bo'lsa, muammo bo'lmaydi.",
      image:
        "https://images.unsplash.com/photo-1771758249853-415175dc29b9?w=1080",
    },
    {
      id: 3,
      title: "Turar Joy Topish",
      category: "Uy-joy",
      timeline: "Darhol",
      steps: [
        "Universitet yotoqxonasiga onlayn ariza bering",
        "Yoki xususiy turar joy qidiring (universitet e'lonlar taxtasi)",
        "Uylarni ko'ring va imkoniyatlarni tekshiring",
        "Ijara shartnomasini imzolang va depozit to'lang",
        "Manzilni mahalliy politsiyada ro'yxatdan o'tkazing (xorijiy talabalar uchun)",
      ],
      details:
        "Yotoqxona zamonaviy va qulay. Xususiy turar joy topish ham oson - universitet yaqinida ko'plab variantlar bor.",
      image:
        "https://images.unsplash.com/photo-1774078618445-ca7f78a2d830?w=1080",
    },
    {
      id: 4,
      title: "Bank Hisobi Ochish",
      category: "Moliya",
      timeline: "O'sha kun",
      steps: [
        "Talaba ID bilan universitet bankiga tashrif buyuring",
        "Pasport va yashash manzili tasdig'ini olib keling",
        "Hisob ochish formasini to'ldiring",
        "Dastlabki depozit qo'ying (minimal $10)",
        "Bank kartasi va hisob ma'lumotlarini oling",
      ],
      details:
        "Bank hisobi ochish juda oson va tez. O'sha kuni kartangizni olasiz. Bank xizmatlari talabalar uchun qulay.",
      image:
        "https://images.unsplash.com/photo-1770359718280-817b01057e02?w=1080",
    },
    {
      id: 5,
      title: "Kursga Ro'yxatdan O'tish",
      category: "Akademik",
      timeline: "Semestrning birinchi haftasi",
      steps: [
        "Orientatsiya sessiyasida qatnashing",
        "Akademik maslahatchi bilan uchrashuv",
        "Kurslar katalogi va talablarini ko'rib chiqing",
        "Talabalar portalida onlayn kursga yoziling",
        "Jadvalingizni tasdiqlang va o'quv to'lovini to'lang",
      ],
      details:
        "Kursga yozilish onlayn tizim orqali oson amalga oshiriladi. Maslahatchi sizga to'g'ri kurslarni tanlashda yordam beradi.",
      image:
        "https://images.unsplash.com/photo-1547817752-c23df0357f18?w=1080",
    },
    {
      id: 6,
      title: "Tibbiy Sug'urta Olish",
      category: "Sog'liqni saqlash",
      timeline: "Birinchi oy",
      steps: [
        "Universitet tibbiy rejasi yoki xususiy sug'urta o'rtasida tanlang",
        "Tibbiy sug'urta arizasini topshiring",
        "Universitet klinikasida tibbiy ko'rikdan o'ting",
        "Sug'urta to'lovini to'lang",
        "Sug'urta kartasi va polis hujjatlarini oling",
      ],
      details:
        "Tibbiy sug'urta talabalar uchun majburiy. Universitet rejasi qulay va arzon. Barcha tibbiy xizmatlarni qamrab oladi.",
      image:
        "https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?w=1080",
    },
  ];

  function renderBody(a) {
    var stepsHtml = "<ol class='steps-list' style='counter-reset:none;padding-left:0;'>";
    a.steps.forEach(function (step, i) {
      stepsHtml +=
        '<li><span class="num">' +
        (i + 1) +
        "</span><span>" +
        esc(step) +
        "</span></li>";
    });
    stepsHtml += "</ol>";

    return (
      '<div class="modal-hero"><img src="' +
      esc(a.image) +
      '" alt="" /><span class="badge" style="position:absolute;top:1rem;right:1rem;background:#ca8a04;">' +
      esc(a.category) +
      "</span></div>" +
      '<div class="modal-block"><p><strong>Muddat</strong>: ' +
      esc(a.timeline) +
      "</p></div>" +
      '<div class="modal-block"><p>' +
      esc(a.details) +
      "</p></div>" +
      '<div class="modal-block"><p><strong>Qadamlar</strong></p>' +
      stepsHtml +
      "</div>"
    );
  }

  document.querySelectorAll("[data-advice-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-advice-id"), 10);
      var a = ITEMS.find(function (x) {
        return x.id === id;
      });
      if (!a || !window.GuideModal) return;
      window.GuideModal.open({ title: a.title, bodyHtml: renderBody(a) });
    });
  });
})();
