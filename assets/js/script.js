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
// ==================== المراجعات =================
function setupReviews() {
  const reviews = [
  {
    name: "Liam O'Mahony",
    rating: "5",
    text: "I got a skin fade and trim on top, and had an incredible experience and cut from Mohammed. What an absolute gentleman, and a fantastic barber. Anyone in the area should definitely support this business he absolutely deserves it. If I could give more than 5 starts I would.",
  },
  {
    name: "Mohammed Salem",
    rating: "5",
    text: "I recently visited Obaha and was thoroughly impressed with the experience. The Atmosphere was warm and welcoming, with a modern yet comfortable setup. Mohammad was professional, friendly and truly attentive to detail.I’d highly recommend Obaha to anyone looking for top-notch grooming services with a touch of luxury. I’ll definitely be returning!",
  },
  {
    name: "Ahmed Salah",
    rating: "5",
    text: "I’ve been to many gents salons in Dubai, but Obaha truly stands out. From the moment you walk in, you’re greeted with genuine warmth and hospitality that makes you feel right at home. The atmosphere is clean, professional, and welcoming A special shoutout to Mohamed, the manager—he’s not only incredibly talented but also runs the place with impressive professionalism. He truly listens to what you want, offers great suggestions, and ensures you leave looking your best every single time. On top of that, the pricing is very reasonable for the top-notch service you get.If you’re looking for a place that combines skill, style, and exceptional customer care, Obaha is the place to go. Highly recommended!",
  },
  {
    name: "Mohamed Karkar",
    rating: "5",
    text: "Very professional barber and super clean place! I usually struggle with Barbers to get my haircut right from the first time but here it was perfect from the first time. Highly recommended and the prices are very convenient",
  },
];

const reviewsConatainer = document.getElementById("reviews-container");
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fa-solid fa-star"></i> ';
    } else {
      stars += '<i class="fa-regular fa-star"></i> ';
    }
  }
  return stars;
}
reviews.forEach((review, index) => {
  const card = document.createElement("div");
  card.className = "review-card";
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-delay", `${index * 100}`);

  const maxLength = 150;
  const fullText = review.text;
  const shortText =
    fullText.length > maxLength
      ? fullText.substring(0, maxLength) + "..."
      : fullText;

  const hasMore = fullText.length > maxLength;

  card.innerHTML = `
      <div class="stars">${generateStars(review.rating)}</div>
      <div class="reviewer-name">${review.name}</div>
      <p class="review-text">
        <span class="short-text">${shortText}</span>
        <span class="full-text" style="display:none;">${fullText}</span>
      </p>
      ${hasMore ? `<button class="read-more-btn">Read more</button>` : ""}
    `;

  reviewsConatainer.appendChild(card);
});

}
// التعامل مع زر "Read more"
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("read-more-btn")) {
    const card = e.target.closest(".review-card");
    const shortText = card.querySelector(".short-text");
    const fullText = card.querySelector(".full-text");

    shortText.style.display = "none";
    fullText.style.display = "inline";
    e.target.style.display = "none"; // إخفاء الزر بعد الضغط
  }
});
// ========== تنفيذ كل الوظائف ==========
function init() {
  setupFilterButtons();
  setupScrollButtons();
  setupReviews();
}

init();


// <i class="fa-solid fa-star"></i>
// <i class="fa-regular fa-star"></i>