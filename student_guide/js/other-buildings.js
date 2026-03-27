(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var ITEMS = [
    {
      id: 1,
      name: "Kampus Kafesi",
      category: "Oziq-ovqat",
      location: "Talabalar Markazi, Birinchi qavat",
      hours: "7:00 - 22:00",
      details:
        "Zamonaviy kafe talabalar uchun turli xil qahva, choy, shirinliklar va tez tayyorlanadigan taomlar taklif etadi. Wi-Fi va qulay o'tirish joylari mavjud.",
      coordinates: "41.3108,69.2795",
      image:
        "https://images.unsplash.com/photo-1604552584409-44de624c9f57?w=1080",
    },
    {
      id: 2,
      name: "Talabalar Oshxonasi",
      category: "Oziq-ovqat",
      location: "Asosiy Bino, 1-qavat",
      hours: "8:00 - 20:00",
      details:
        "Talabalar uchun arzon narxlarda to'yimli va mazali taomlar. O'zbek, rus, koreys va boshqa xalqaro taomlar taklif etiladi.",
      coordinates: "41.3111,69.2797",
      image:
        "https://images.unsplash.com/photo-1670348060135-d4c6662b4138?w=1080",
    },
    {
      id: 3,
      name: "Kampus Supermarketi",
      category: "Do'kon",
      location: "Asosiy darvozadan 500m",
      hours: "6:00 - 23:00",
      details:
        "Keng assortimentdagi oziq-ovqat mahsulotlari, kantselyariya buyumlari, gigiyena vositalari va kundalik hayot uchun zarur narsalar.",
      coordinates: "41.3105,69.2785",
      image:
        "https://images.unsplash.com/photo-1698466632388-77a7495b89b5?w=1080",
    },
    {
      id: 4,
      name: "Universitet Banki",
      category: "Moliyaviy xizmatlar",
      location: "Ma'muriy Bino, 1-qavat",
      hours: "9:00 - 17:00 (Dush-Jum)",
      details:
        "To'liq bank xizmatlari, hisob ochish, pul o'tkazmalari va moliyaviy maslahatlar. Bankomat 24 soat ishlaydi.",
      coordinates: "41.3112,69.2798",
      image:
        "https://images.unsplash.com/photo-1770359718280-817b01057e02?w=1080",
    },
    {
      id: 5,
      name: "Tibbiy Markaz",
      category: "Sog'liqni saqlash",
      location: "Salomatlik Binosi, Sport majmuasi yonida",
      hours: "24/7 Tez yordam xizmati",
      details:
        "Malakali shifokorlar, tez yordam xizmati, laboratoriya tekshiruvlari va talabalar uchun bepul tibbiy yordam.",
      coordinates: "41.3095,69.2805",
      image:
        "https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?w=1080",
    },
    {
      id: 6,
      name: "Xorijiy Talabalar Bo'limi",
      category: "Talabalar xizmati",
      location: "Ma'muriy Bino, 2-qavat",
      hours: "9:00 - 17:00 (Dush-Jum)",
      details:
        "Xorijiy talabalar uchun viza masalalari, turar joy topishda yordam, madaniy moslashish va har qanday muammolarda ko'mak.",
      coordinates: "41.3112,69.2798",
      image:
        "https://images.unsplash.com/photo-1771758249853-415175dc29b9?w=1080",
    },
  ];

  function renderBody(b) {
    var mapSrc =
      "https://www.google.com/maps?q=" + encodeURIComponent(b.coordinates) + "&output=embed";
    return (
      '<div class="modal-hero"><img src="' +
      esc(b.image) +
      '" alt="" /><span class="badge" style="position:absolute;top:1rem;right:1rem;background:#9333ea;color:#fff;padding:0.35rem 0.75rem;border-radius:9999px;">' +
      esc(b.category) +
      "</span></div>" +
      '<div class="modal-grid-2"><div class="modal-block"><p><strong>Manzil</strong></p><p>' +
      esc(b.location) +
      '</p></div><div class="modal-block"><p><strong>Ish vaqti</strong></p><p>' +
      esc(b.hours) +
      "</p></div></div>" +
      '<div class="modal-block"><p>' +
      esc(b.details) +
      "</p></div>" +
      '<div class="modal-map"><iframe src="' +
      esc(mapSrc) +
      '" loading="lazy" title="Xarita"></iframe></div>'
    );
  }

  document.querySelectorAll("[data-other-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-other-id"), 10);
      var b = ITEMS.find(function (x) {
        return x.id === id;
      });
      if (!b || !window.GuideModal) return;
      window.GuideModal.open({ title: b.name, bodyHtml: renderBody(b) });
    });
  });
})();
