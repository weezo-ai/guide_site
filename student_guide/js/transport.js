(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var ITEMS = [
    {
      id: 1,
      name: "24-avtobus yo'nalishi",
      type: "Jamoat avtobusi",
      price: "$1.50",
      frequency: "Har 15 daqiqada",
      route: "Markaziy Vokzal → Kampus → Shahar Markazi",
      hours: "5:30 - 23:00",
      details:
        "Eng mashxur avtobus yo'nalishi. Kampusga eng tez va qulay yo'l. Talabalar uchun chegirmalar mavjud.",
      coordinates: "41.3111,69.2797",
      image:
        "https://images.unsplash.com/photo-1543698376-9c76b08cd35d?w=1080",
    },
    {
      id: 2,
      name: "42-avtobus yo'nalishi",
      type: "Jamoat avtobusi",
      price: "$1.50",
      frequency: "Har 20 daqiqada",
      route: "Aeroport → Kampus → Savdo Markazi",
      hours: "6:00 - 22:00",
      details:
        "Aeroportdan kampusgacha to'g'ridan-to'g'ri yo'l. Katta yuklar uchun qulay.",
      coordinates: "41.3105,69.2790",
      image:
        "https://images.unsplash.com/photo-1543698376-9c76b08cd35d?w=1080",
    },
    {
      id: 3,
      name: "Metro 2-liniya",
      type: "Metro",
      price: "$2.00",
      frequency: "Har 10 daqiqada",
      route: "Shimoliy Terminal → Universitet Bekati → Janubiy Terminal",
      hours: "5:00 - 24:00",
      details:
        "Eng tez transport turi. Universitet bekati kampusdan 5 daqiqa piyoda masofada.",
      coordinates: "41.3100,69.2800",
      image:
        "https://images.unsplash.com/photo-1681950167930-793b3a179bf0?w=1080",
    },
    {
      id: 4,
      name: "Kampus Shuttli",
      type: "Universitet avtobusi",
      price: "Talabalar uchun bepul",
      frequency: "Har 30 daqiqada",
      route: "Yotoqxona hududi → Asosiy Kampus → Kutubxona → Sport Majmuasi",
      hours: "7:00 - 21:00",
      details:
        "Talabalar uchun bepul ichki kampus transporti. Talaba IDsi talab qilinadi.",
      coordinates: "41.3108,69.2795",
      image:
        "https://images.unsplash.com/photo-1543698376-9c76b08cd35d?w=1080",
    },
    {
      id: 5,
      name: "Taksi Xizmati",
      type: "Taksi",
      price: "$3.00 boshlang'ich + $0.80/km",
      frequency: "Buyurtma bo'yicha",
      route: "Shahar bo'ylab",
      hours: "24/7",
      details:
        "Qulaylik va tezkorlik. Mobil ilovalar orqali buyurtma qilish mumkin. Kechqurun xavfsiz sayohat.",
      coordinates: "41.3111,69.2797",
      image:
        "https://images.unsplash.com/photo-1652270625079-83dd767498db?w=1080",
    },
    {
      id: 6,
      name: "Velosiped Ijarasi",
      type: "Velosiped",
      price: "$0.50/30 daqiqa",
      frequency: "Bekatlar orqali",
      route: "Kampus va shahar bo'ylab 20 bekat",
      hours: "24/7",
      details:
        "Ekologik toza va sog'lom transport. Mobil ilova orqali ochish. Birinchi 15 daqiqa bepul.",
      coordinates: "41.3110,69.2795",
      image:
        "https://images.unsplash.com/photo-1543698376-9c76b08cd35d?w=1080",
    },
  ];

  function renderBody(t) {
    var mapSrc =
      "https://www.google.com/maps?q=" + encodeURIComponent(t.coordinates) + "&output=embed";
    return (
      '<div class="modal-hero"><img src="' +
      esc(t.image) +
      '" alt="" /><span class="badge" style="position:absolute;top:1rem;right:1rem;background:#4f46e5;">' +
      esc(t.type) +
      "</span></div>" +
      '<div class="modal-grid-2"><div class="modal-block"><p><strong>Narx</strong></p><p>' +
      esc(t.price) +
      '</p></div><div class="modal-block"><p><strong>Chastota</strong></p><p>' +
      esc(t.frequency) +
      '</p></div><div class="modal-block" style="grid-column:1/-1;"><p><strong>Yo\'nalish</strong></p><p>' +
      esc(t.route) +
      '</p></div><div class="modal-block" style="grid-column:1/-1;"><p><strong>Ish vaqti</strong></p><p>' +
      esc(t.hours) +
      "</p></div></div>" +
      '<div class="modal-block"><p>' +
      esc(t.details) +
      "</p></div>" +
      '<div class="modal-map"><iframe src="' +
      esc(mapSrc) +
      '" loading="lazy" title="Xarita"></iframe></div>'
    );
  }

  document.querySelectorAll("[data-transport-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-transport-id"), 10);
      var t = ITEMS.find(function (x) {
        return x.id === id;
      });
      if (!t || !window.GuideModal) return;
      window.GuideModal.open({ title: t.name, bodyHtml: renderBody(t) });
    });
  });
})();
