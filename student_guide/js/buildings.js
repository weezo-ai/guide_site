(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var BUILDINGS = [
    {
      id: 1,
      name: "Asosiy Akademik Bino",
      location: "Kampus Markazi, A Bino",
      address: "Universitet ko'chasi, 123",
      floors: "5 qavat",
      details:
        "Bu bino universitetning asosiy akademik binosi bo'lib, barcha asosiy ma'ruza xonalari, seminar xonalari va ma'muriy ofislar joylashgan. Binoda zamonaviy texnologiyalar, multimedia qurilmalari va qulayliklar mavjud.",
      coordinates: "41.3111,69.2797",
      image:
        "https://images.unsplash.com/photo-1719342399567-4b31027198b6?w=1080",
    },
    {
      id: 2,
      name: "Fan Laboratoriyasi Binosi",
      location: "Shimoliy Kampus, C Bino",
      address: "Tadqiqot ko'chasi, 456",
      floors: "4 qavat",
      details:
        "Zamonaviy laboratoriya jihozlari bilan jihozlangan. Fizika, kimyo va biologiya fanlari uchun maxsus laboratoriyalar, tadqiqot xonalari va ilmiy tajriba o'tkazish uchun joy mavjud.",
      coordinates: "41.3125,69.2810",
      image:
        "https://images.unsplash.com/photo-1675583152779-9fe454abe3a4?w=1080",
    },
    {
      id: 3,
      name: "Universitet Kutubxonasi",
      location: "Sharqiy Kampus, L Bino",
      address: "Bilim ko'chasi, 789",
      floors: "6 qavat",
      details:
        "Keng kitoblar to'plami, raqamli resurslar, tinch o'qish xonalari va guruh ishlash uchun xonalar mavjud. 24/7 ishlaydi va barcha talabalar uchun bepul.",
      coordinates: "41.3100,69.2825",
      image:
        "https://images.unsplash.com/photo-1770721474021-70f69ddecb46?w=1080",
    },
    {
      id: 4,
      name: "Ma'ruza Zali Majmuasi",
      location: "Markaziy Kampus, D Bino",
      address: "Akademik yo'li, 321",
      floors: "3 qavat",
      details:
        "Yirik tadbirlar, seminarlar va konferentsiyalar uchun mo'ljallangan zamonaviy auditoriyalar. Yuqori sifatli audio-video texnologiyalari bilan jihozlangan.",
      coordinates: "41.3115,69.2800",
      image:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1080",
    },
    {
      id: 5,
      name: "Talabalar Turar Joyi",
      location: "G'arbiy Kampus, R Bino",
      address: "Yashash joyi ko'chasi, 555",
      floors: "8 qavat",
      details:
        "Zamonaviy xonalar, umumiy oshxona, o'qish xonalari, sport zali va dam olish joylari. Xavfsizlik 24/7 ta'minlangan.",
      coordinates: "41.3090,69.2780",
      image:
        "https://images.unsplash.com/photo-1774078618445-ca7f78a2d830?w=1080",
    },
    {
      id: 6,
      name: "Talabalar Markazi",
      location: "Kampus Markazi, S Bino",
      address: "Talabalar maydoni, 111",
      floors: "2 qavat",
      details:
        "Talabalar uchun dam olish, ovqatlanish, sport mashg'ulotlari va ijtimoiy tadbirlar o'tkazish uchun mo'ljallangan zamonaviy markaz.",
      coordinates: "41.3108,69.2795",
      image:
        "https://images.unsplash.com/photo-1670348060135-d4c6662b4138?w=1080",
    },
  ];

  function renderBody(b) {
    var mapSrc =
      "https://www.google.com/maps?q=" + encodeURIComponent(b.coordinates) + "&output=embed";
    return (
      '<div class="modal-hero"><img src="' +
      esc(b.image) +
      '" alt="" /></div>' +
      '<div class="modal-block"><p><strong>Joylashuv:</strong> ' +
      esc(b.location) +
      "</p><p>" +
      esc(b.address) +
      "</p><p>" +
      esc(b.floors) +
      "</p></div>" +
      '<div class="modal-block"><p>' +
      esc(b.details) +
      "</p></div>" +
      '<div class="modal-map"><iframe src="' +
      esc(mapSrc) +
      '" loading="lazy" title="Xarita"></iframe></div>'
    );
  }

  document.querySelectorAll("[data-building-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-building-id"), 10);
      var b = BUILDINGS.find(function (x) {
        return x.id === id;
      });
      if (!b || !window.GuideModal) return;
      window.GuideModal.open({
        title: b.name,
        bodyHtml: renderBody(b),
      });
    });
  });
})();
