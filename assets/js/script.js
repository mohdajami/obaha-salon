// ========== العناصر الرئيسية ==========
const toggleButton = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".drop-down-menu");
const servicesContainer = document.getElementById("services-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const backToTopButton = document.querySelector(".back-to-top");
const whatsappButton = document.querySelector(".whatsapp-btn");

// ========== القائمة المنسدلة ==========
toggleButton.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
});



// ========== تصفية البطاقات ==========
function setupFilterButtons() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // تأثير الضغط
      button.style.transform = "scale(0.95)";
      setTimeout(() => (button.style.transform = "scale(1)"), 200);

      // تحديد الزر النشط
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      const cards = document.querySelectorAll(".service-card");

      // إخفاء البطاقات أولاً
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "none";
      });

      // إظهار البطاقات المطابقة
      setTimeout(() => {
        cards.forEach((card, index) => {
          const match = filter === "all" || card.dataset.category === filter;
          card.style.display = match ? "block" : "none";

          if (match) {
            setTimeout(() => {
              card.style.transition = "all 0.5s ease-out";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 50);
          }
        });
      }, 50);
    });
  });
}

// ========== زر العودة للأعلى وواتساب ==========
function setupScrollButtons() {
  window.addEventListener("scroll", () => {
    const show = window.pageYOffset > 1500;
    backToTopButton.classList.toggle("active", show);
    whatsappButton.classList.toggle("active", show);
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  whatsappButton.addEventListener("click", () => {
    window.open("https://wa.me/971551192113", "_blank");
  });
}

// ========== تنفيذ كل الوظائف ==========
function init() {
  setupFilterButtons();
  setupScrollButtons();
}

init();
