(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  var TEACHERS = [
    {
      id: 1,
      name: "Dr. Sardor Rahimov",
      subject: "Matematika",
      department: "Fan Fakulteti",
      office: "A Bino, 301-xona",
      email: "s.rahimov@universitet.uz",
      phone: "+998 90 123 45 67",
      officeHours: "Dush, Chor 14:00-16:00",
      bio: "15 yillik tajribaga ega matematika professori. Oliy matematika va matematik tahlil bo'yicha mutaxassis. Xalqaro konferentsiyalarda ko'plab maqolalar nashr etgan.",
      image:
        "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=1080",
    },
    {
      id: 2,
      name: "Prof. Li Chen",
      subject: "Fizika",
      department: "Fan Fakulteti",
      office: "Laboratoriya Binosi, 205-xona",
      email: "l.chen@universitet.uz",
      phone: "+998 90 234 56 78",
      officeHours: "Sesh, Pay 15:00-17:00",
      bio: "Nazariy va amaliy fizika bo'yicha professor. Kvant mexanikasi va zarralar fizikasi mutaxassisi. 20 yildan ortiq tajriba.",
      image:
        "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=1080",
    },
    {
      id: 3,
      name: "Dr. Malika Azimova",
      subject: "Ingliz tili adabiyoti",
      department: "Gumanitar Fakulteti",
      office: "B Bino, 102-xona",
      email: "m.azimova@universitet.uz",
      phone: "+998 90 345 67 89",
      officeHours: "Dush, Pay 13:00-15:00",
      bio: "Ingliz tili va adabiyoti bo'yicha doktor. Zamonaviy va klassik adabiyot mutaxassisi. Talabalar orasida eng mashhur o'qituvchilardan biri.",
      image:
        "https://images.unsplash.com/photo-1758270704587-43339a801396?w=1080",
    },
    {
      id: 4,
      name: "Prof. Bobur Karimov",
      subject: "Kompyuter fanlari",
      department: "Texnologiya Fakulteti",
      office: "Texnologiya Binosi, 401-xona",
      email: "b.karimov@universitet.uz",
      phone: "+998 90 456 78 90",
      officeHours: "Chor, Jum 10:00-12:00",
      bio: "Dasturlash va sun'iy intellekt bo'yicha professor. Zamonaviy texnologiyalar va AI sohasida etakchi mutaxassis.",
      image:
        "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=1080",
    },
    {
      id: 5,
      name: "Dr. Dilnoza Yusupova",
      subject: "Kimyo",
      department: "Fan Fakulteti",
      office: "Laboratoriya Binosi, 310-xona",
      email: "d.yusupova@universitet.uz",
      phone: "+998 90 567 89 01",
      officeHours: "Sesh, Pay 14:00-16:00",
      bio: "Organik va noorganik kimyo bo'yicha doktor. Laboratoriya tajribalarida ko'p yillik tajribaga ega.",
      image:
        "https://images.unsplash.com/photo-1758270704925-fa59d93119c1?w=1080",
    },
    {
      id: 6,
      name: "Prof. Anvar Toshmatov",
      subject: "Tarix",
      department: "Gumanitar Fakulteti",
      office: "B Bino, 205-xona",
      email: "a.toshmatov@universitet.uz",
      phone: "+998 90 678 90 12",
      officeHours: "Dush, Chor 11:00-13:00",
      bio: "O'zbekiston va jahon tarixi bo'yicha professor. Qadimiy sivilizatsiyalar va zamonaviy tarix mutaxassisi.",
      image:
        "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=1080",
    },
  ];

  function renderBody(t) {
    return (
      '<div class="modal-hero"><img src="' +
      esc(t.image) +
      '" alt="" /></div>' +
      '<div class="modal-block"><p><strong>Kafedra</strong></p><p>' +
      esc(t.department) +
      "</p></div>" +
      '<div class="modal-grid-2">' +
      '<div class="modal-block"><p><strong>Xona</strong></p><p>' +
      esc(t.office) +
      '</p></div><div class="modal-block"><p><strong>Email</strong></p><p>' +
      esc(t.email) +
      '</p></div><div class="modal-block"><p><strong>Telefon</strong></p><p>' +
      esc(t.phone) +
      '</p></div><div class="modal-block"><p><strong>Qabul vaqti</strong></p><p>' +
      esc(t.officeHours) +
      "</p></div></div>" +
      '<div class="modal-block"><p><strong>Fan</strong>: ' +
      esc(t.subject) +
      "</p><p><strong>Biografiya</strong></p><p>" +
      esc(t.bio) +
      "</p></div>"
    );
  }

  document.querySelectorAll("[data-teacher-id]").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = parseInt(card.getAttribute("data-teacher-id"), 10);
      var t = TEACHERS.find(function (x) {
        return x.id === id;
      });
      if (!t || !window.GuideModal) return;
      window.GuideModal.open({ title: t.name, bodyHtml: renderBody(t) });
    });
  });
})();
