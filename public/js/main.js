document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".image-comparison").forEach(container => {
        const slider = container.querySelector(".slider");
        const afterImage = container.querySelector(".after-image");
        let isDragging = false;

        function startDrag(e) {
            isDragging = true;
            document.body.style.userSelect = "none";
        }

        function moveDrag(e) {
            if (!isDragging) return;

            let rect = container.getBoundingClientRect();
            let clientX = e.clientX || e.touches[0].clientX; // Handle touch and mouse
            let offsetX = clientX - rect.left;
            let width = rect.width;

            let percent = Math.max(0, Math.min(100, (offsetX / width) * 100));
            afterImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            slider.style.left = `${percent}%`;
        }

        function stopDrag() {
            isDragging = false;
            document.body.style.userSelect = "";
        }

        // Event listeners for mouse
        slider.addEventListener("mousedown", startDrag);
        document.addEventListener("mousemove", moveDrag);
        document.addEventListener("mouseup", stopDrag);

        // Event listeners for touch (mobile)
        slider.addEventListener("touchstart", startDrag);
        document.addEventListener("touchmove", moveDrag);
        document.addEventListener("touchend", stopDrag);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".qa-header").forEach(header => {
        header.addEventListener("click", function () {
            let parent = this.parentElement;
            let icon = this.querySelector(".icon");

            parent.classList.toggle("active");

            icon.textContent = parent.classList.contains("active") ? "−" : "+";

            document.querySelectorAll(".qa-item").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                    item.querySelector(".icon").textContent = "+";
                }
            });
        });
    });
});




document.getElementById('menuLogo').addEventListener('click', function(event) {
    event.stopPropagation();
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
})
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById('navLinks');
    var menuLogo = document.getElementById('menuLogo');

    if (!navLinks.contains(event.target) && !menuLogo.contains(event.target)) {
        navLinks.classList.remove('active'); 
    }
});

const services = [
    { 
        name_en: "Orthodontics", 
        description_en: "We provide expert orthodontic care for a perfect smile.",
        name_ar: "تقويم الأسنان", 
        description_ar: "نقدم رعاية تقويم أسنان متخصصة لابتسامة مثالية.",
        image: "https://pvpd.com/wp-content/uploads/2023/02/Different-types-of-braces-are-used-in-orthodontics.jpg"
    },
    { 
        name_en: "Oral and Maxillofacial Surgery", 
        description_en: "Advanced surgical care for oral and facial conditions.",
        name_ar: "جراحة الفم والوجه والفكين", 
        description_ar: "رعاية جراحية متقدمة لحالات الفم والوجه.",
        image: "/public/imgs/33.webp"
    },
    { 
        name_en: "Pediatric and Special Needs Dentistry", 
        description_en: "Gentle and specialized dental care for children and individuals with special needs.",
        name_ar: "طب أسنان الأطفال وذوي الاحتياجات الخاصة", 
        description_ar: "رعاية أسنان متخصصة للأطفال وذوي الاحتياجات الخاصة.",
        image: "/public/imgs/44.webp"
    },
    { 
        name_en: "Dental Implants", 
        description_en: "Permanent solutions for missing teeth with high-quality implants.",
        name_ar: "زراعة الأسنان", 
        description_ar: "حلول دائمة للأسنان المفقودة بزراعة عالية الجودة.",
        image: "https://example.com/dental-implants.jpg"
    },
    { 
        name_en: "Prosthodontics", 
        description_en: "Custom dental prosthetics to restore function and aesthetics.",
        name_ar: "تعويضات الأسنان", 
        description_ar: "أطقم أسنان مخصصة لاستعادة الوظيفة والمظهر.",
        image: "https://example.com/prosthodontics.jpg"
    },
    { 
        name_en: "Endodontics", 
        description_en: "Expert root canal treatments to save natural teeth.",
        name_ar: "علاج جذور الأسنان", 
        description_ar: "علاجات قناة الجذر المتخصصة للحفاظ على الأسنان الطبيعية.",
        image: "https://example.com/endodontics.jpg"
    },
    { 
        name_en: "Restorative Dentistry", 
        description_en: "Comprehensive solutions to restore and strengthen teeth.",
        name_ar: "طب الأسنان الترميمي", 
        description_ar: "حلول شاملة لاستعادة وتقوية الأسنان.",
        image: "https://example.com/restorative-dentistry.jpg"
    },
    { 
        name_en: "Teeth Whitening", 
        description_en: "Professional whitening treatments for a brighter smile.",
        name_ar: "تبييض الأسنان", 
        description_ar: "علاجات تبييض احترافية لابتسامة أكثر إشراقًا.",
        image: "https://example.com/teeth-whitening.jpg"
    },
    { 
        name_en: "Periodontics", 
        description_en: "Specialized care for gum health and disease prevention.",
        name_ar: "أمراض اللثة", 
        description_ar: "رعاية متخصصة لصحة اللثة والوقاية من الأمراض.",
        image: "https://example.com/periodontics.jpg"
    },
    { 
        name_en: "Oral Health and Hygiene", 
        description_en: "Preventive care and education for a healthy mouth.",
        name_ar: "صحة الفم والنظافة", 
        description_ar: "رعاية وقائية وتثقيف لفم صحي.",
        image: "https://example.com/oral-health.jpg"
    }
];

function renderServices() {
    const container = document.querySelector(".service_container");
    container.innerHTML = ""; // Clear existing content

    const selectedLanguage = sessionStorage.getItem("selectedLanguage") || "en"; // Default to English

    services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service_card");

        const serviceName = selectedLanguage === "ar" ? service.name_ar : service.name_en;
        const serviceDescription = selectedLanguage === "ar" ? service.description_ar : service.description_en;

        card.innerHTML = `
            <div class="service_card_header">
                <div class="service_logo">
                    <img src="" alt="">
                </div>
                <span>${serviceName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                </svg>
            </div>
            <p>${serviceDescription}</p>
            <div class="service_img">
                <img src=${service.image} alt="">
            </div>
        `;

        container.appendChild(card);
    });
}

// Initial rendering
renderServices();

// Detect changes in sessionStorage for language change
window.addEventListener("storage", (event) => {
    if (event.key === "selectedLanguage") {
        renderServices(); // Refresh UI when language changes
    }
});

// Also detect changes when language is set within the same page
setInterval(() => {
    const currentLang = sessionStorage.getItem("selectedLanguage") || "en";
    if (currentLang !== (window.lastLang || "en")) {
        window.lastLang = currentLang;
        renderServices();
    }
}, 500);
