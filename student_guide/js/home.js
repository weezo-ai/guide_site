/**
 * Qidiruv: Home.tsx dagi categories + searchableContent logikasi
 */
(function () {
  const categories = [
    {
      title: "Binolar va Joylashuvi",
      description: "Barcha akademik binolar va ularning kampusdagi joylashuvi",
      link: "buildings.html",
    },
    {
      title: "Boshqa Binolar",
      description: "Kafeler, do'konlar, banklar, shifoxonalar va boshqalar",
      link: "other-buildings.html",
    },
    {
      title: "O'qituvchilar",
      description: "O'qituvchilar bilan tanishing",
      link: "teachers.html",
    },
    {
      title: "Fanlar",
      description: "O'qitiladigan fanlarni o'rganing",
      link: "subjects.html",
    },
    {
      title: "Foydali Yo'nalishlar",
      description: "Barcha transport turlari va ularning narxlari",
      link: "transport.html",
    },
    {
      title: "Yangi Talabalar Uchun Maslahatlar",
      description: "Muhim qo'llanmalar va ko'rsatmalar",
      link: "advices.html",
    },
    {
      title: "Tadbirlar va Imtihonlar",
      description: "Muhim sanalar va akademik tadbirlar",
      link: "events.html",
    },
  ];

  const searchableContent = [
    { key: "kutubxona", value: "Kutubxona - Asosiy Bino, 3-qavat" },
    { key: "oshxona", value: "Talabalar Oshxonasi - A Bino, Birinchi qavat" },
    { key: "hujjatlar", value: "Hujjatlarni rasmiylashtirish - Ma'muriy ofis" },
    { key: "viza", value: "Viza uzaytirish - Xorijiy talabalar bo'limi" },
    { key: "avtobus", value: "24-avtobus yo'nalishi - $1.50 kampusgacha" },
    { key: "metro", value: "Metro 2-liniya - $2.00, eng yaqin bekat Markaziy" },
    { key: "matematika", value: "Matematika - Prof. Johnson, 301-xona" },
    { key: "fizika", value: "Fizika - Dr. Chen, Laboratoriya binosi" },
  ];

  const input = document.getElementById("searchInput");
  const box = document.getElementById("searchResults");
  const list = document.getElementById("searchList");

  if (!input || !box || !list) return;

  function runSearch() {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      box.classList.remove("visible");
      return;
    }

    const results = [];

    categories.forEach(function (c) {
      if (
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
      ) {
        results.push({ type: "link", text: c.title + " — " + c.description, href: c.link });
      }
    });

    searchableContent.forEach(function (item) {
      if (item.key.toLowerCase().includes(query)) {
        results.push({ type: "text", text: item.value });
      }
    });

    list.innerHTML = "";
    if (results.length === 0) {
      const li = document.createElement("li");
      li.textContent = 'Natija topilmadi. Boshqa so\'z bilan urinib ko\'ring.';
      list.appendChild(li);
    } else {
      results.forEach(function (r) {
        const li = document.createElement("li");
        if (r.type === "link") {
          const a = document.createElement("a");
          a.href = r.href;
          a.textContent = r.text;
          a.style.color = "#93c5fd";
          li.appendChild(a);
        } else {
          li.textContent = r.text;
        }
        list.appendChild(li);
      });
    }
    box.classList.add("visible");
  }

  input.addEventListener("input", runSearch);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") runSearch();
  });
})();
