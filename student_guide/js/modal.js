/**
 * Oddiy modal: overlay + panel
 */
(function () {
  window.GuideModal = {
    open: function (opts) {
      var overlay = document.getElementById("guide-modal-overlay");
      if (!overlay) return;
      var titleEl = document.getElementById("guide-modal-title");
      var bodyEl = document.getElementById("guide-modal-body");
      if (titleEl) {
        titleEl.textContent = opts.title || "";
      }
      if (bodyEl) bodyEl.innerHTML = opts.bodyHtml || "";
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    },
    close: function () {
      var overlay = document.getElementById("guide-modal-overlay");
      if (!overlay) return;
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    },
  };

  document.addEventListener("click", function (e) {
    if (e.target.id === "guide-modal-overlay" || e.target.closest(".modal-close")) {
      window.GuideModal.close();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") window.GuideModal.close();
  });
})();
