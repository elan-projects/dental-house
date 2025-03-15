document.addEventListener('DOMContentLoaded', function() {
    const elementsToSwitch = document.querySelectorAll('[data-key]');



    const translations = {
        "ar": {
            "home": "الرئيسية",
            "about": "من نحن",
            "service": "الخدمات",
            "contact_us": "اتصل بنا",
            "hero_text_1": "ابتسامتك المشرقة",
            "hero_text_2": "تستحق رعاية الأخصائيين",
            "hero_text_3": "لنضيء مستقبلك",
            "hero_extra_text": "استمتع بتجربة فريدة من رعاية الأسنان الراقية التي تعزز صحة وجمال ابتسامتك. دعنا نبني معاً غدًا أكثر إشراقاً وحيوية.",
            "rate_emergency_service": "خدمة الطوارئ",
            "rate_recover_patient": "مريض تماثل للشفاء",
            "rate_market_experience": "سنوات من الخبرة في السوق",
            "book_now": "احجز الآن",
            "enquires": "الاستفسارات",
            "need_dental_service": "هل تحتاج إلى خدمة أسنان؟",
            "opening_hours": "ساعات العمل",
            "book_appointment": "احجز موعدًا",
            "about_us": "من نحن",
            "about_main_header": "التزامنا بالتميز في طب الأسنان",
            "about_main_content": "تعود بدايات عيادات Dental House إلى تضافر جهود نخبة من أرقى أطباء الأسنان في المملكة العربية السعودية، مقروناً بخبرة من أرقى الجامعات في أمريكا الشمالية في جميع مجالات طب الأسنان. نسعى في عيادات Dental House إلى تقديم أعلى معايير التميز في طب الأسنان والجمال لتلبية احتياجات سكان المنطقة الشرقية بالمملكة. ولضمان تجربة فريدة لجميع ضيوفنا، تم تجهيز مركزنا الحديث بأحدث التقنيات والمعدات المتطورة. ومن أجل تحقيق بيئة عمل متميزة، قمنا بتعيين فريق من الأطباء المرموقين والمساعدين والإداريين الذين يشتركون جميعاً في هدف تقديم الأفضل في عالم طب الأسنان ضمن أجواء ترحيبية ودافئة. هذه هي طموحاتنا ووعدنا لجميع ضيوف عيادات Dental House.",
        
            "our_services": "خدماتنا",
            "service_main_header": "رعاية أسنان شاملة مصممة خصيصًا لكل ابتسامة",
            "more_services": "المزيد من الخدمات",
            "see_transformation": "شاهد التحول",
            "transformation_main_header": "نتائج مذهلة تُبرز التأثير الذي يغير الحياة",
            "contact_us": "اتصل بنا",
            "about_main_header_sec": "تعرف على أطبائنا ذوي الخبرة والعناية",
            "our_doctors": "أطباؤنا",
            "doctors_main_header": "تعرف على أطبائنا ذوي الخبرة والعناية",
            "book_your_appointment": "احجز موعدك",
           "contact_main_header": "احجز موعدك اليوم مع Dental House",
"contact_extra_text": "هل تحلم بابتسامة مشرقة؟ تواصل معنا الآن لحجز موعدك ودع فريقنا المتخصص يعتني بك، ليضمن لك تجربة علاجية استثنائية تُعيد الثقة والجمال إلى ابتسامتك.",
            "working_hours": "ساعات العمل",
            "working_hours_text": "نحن نهتم دائمًا بابتسامتك",
            "surname_label": "اللقب",
            "surname_placeholder": "أدخل لقبك",
            "family_name_label": "اسم العائلة",
            "family_name_placeholder": "أدخل اسم عائلتك",
            "email_label": "البريد الإلكتروني",
            "email_placeholder": "أدخل بريدك الإلكتروني",
            "phone_number_label": "رقم الهاتف",
            "phone_number_placeholder": "أدخل رقم هاتفك",
            "appointment_date_label": "التاريخ",
            "message_label": "الرسالة",
            "message_placeholder": "اكتب رسالتك هنا...",
            "send_button": "إرسال",
            "write_to_us": "عبر الايمايل",
            "contact_us_social_media" : "تواصل معنا"
        },
        "en": {
            "home": "Home",
            "about": "About",
            "service": "Service",
            "contact_us": "Contact Us",
            "hero_text_1": "Your smile",
            "hero_text_2": "matters, expert dental care",
            "hero_text_3": "a bright tomorrow",
            "hero_extra_text": "Experience top-quality dental care focused on your smile’s health and beauty. Trust us to create a brighter, healthier tomorrow.",
            "rate_emergency_service": "Emergency Service",
            "rate_recover_patient": "Recover Patient",
            "rate_market_experience": "Market Experience",
            "book_now": "Book Now",
            "enquires": "Enquires",
            "need_dental_service": "Need Dental Service?",
            "opening_hours": "Opening Hours",
            "book_appointment": "Book An Appointment",
            "about_us": "ABOUT US",
            "about_main_header": "Commitment to your smile's health and beauty",
            "about_main_content": "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.",
            "our_services": "OUR SERVICES",
            "service_main_header": "Comprehensive dental care tailored service for every smile",
            "more_services": "More Services",
            "see_transformation": "SEE THE TRANSFORMATION",
            "transformation_main_header": "Stunning results that showcase the life-changing impact",
            "contact_us": "Contact Us",
            "about_main_header_sec": "Meet our experienced and caring dental professionals",
            "our_doctors": "OUR DOCTORS",
            "doctors_main_header": "Meet our experienced and caring dental professionals",
            "book_your_appointment": "BOOK YOUR APPOINTMENT",
            "contact_main_header": "Book Your dental visit online with Primecare",
            "contact_extra_text": "Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your dental appointment. Simply select a convenient date and time, provide some basic information, and we’ll handle the rest.",
            "working_hours": "Working Hours",
            "working_hours_text": "We always take care of your smile",
            "surname_label": "Surname",
            "surname_placeholder": "Enter your surname",
            "family_name_label": "Family Name",
            "family_name_placeholder": "Enter your family name",
            "email_label": "Email",
            "email_placeholder": "Enter your email",
            "phone_number_label": "Phone Number",
            "phone_number_placeholder": "Enter your phone number",
            "appointment_date_label": "Date",
            "message_label": "Message",
            "message_placeholder": "Write your message here...",
            "send_button": "Send",
            "write_to_us": "Email Us",
            "contact_us_social_media" : "Social Media"

        }
    };
    
    
    
    



    function setLanguagePreference(language) {
        try {
            sessionStorage.setItem('selectedLanguage', language);
        } catch (error) {
            console.error('Failed to save language preference:', error);
        }
    }

    function getLanguagePreference() {
        try {
            const language = sessionStorage.getItem('selectedLanguage');
            return language || 'ar';
        } catch (error) {
            console.error('Failed to retrieve language preference:', error);
            return 'en';
        }
    }

    function switchLanguage(language) {
        elementsToSwitch.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[language]?.[key] || translations['en'][key] || `[${key}]`;

            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        changeDirectionAndFont(language);

        setLanguagePreference(language);
    }

    function changeDirectionAndFont(language) {
        const containers = [
            'hero_section',
            'contact_hero_container',
            'about_content',
            'service_content',
            'service_header',
            'transformation_container_header',
            'about_us_section',
            'contact_header_main',
            'contact_main',
            'about_content_wrapper',
            'service_card',
            'service_card_header'
            
            


        ];

        containers.forEach(className => {
            const container = document.querySelectorAll(`.${className}`);
            container.forEach(item => {
                if (language === 'ar') {
                    item.style.direction = "rtl";
                } else {
                    item.style.direction = "ltr";
                }
            });
        });

        if (language === 'ar') {
            document.body.style.fontFamily = '"Noto Kufi Arabic", serif';

            document.querySelectorAll("button, .nav__links_sec li, h1, form input, form textarea , .email_input input").forEach(element => {
                element.style.fontFamily = '"Noto Kufi Arabic", serif';
            });

            document.querySelectorAll(".main_content h1").forEach(item => {
                item.style.fontSize = "2.5rem"; // Ensure correct Arabic font size
                console.log("done");
            });

            document.querySelectorAll(".service_card_header svg").forEach(item => {
                item.style.position = "relative";
            });
            
        } else {
            document.body.style.fontFamily = '"Plus Jakarta Sans", sans-serif';

            document.querySelectorAll("button, .nav__links_sec li, h1, form input, form textarea , .email_input input").forEach(element => {
                element.style.fontFamily = '"Plus Jakarta Sans", sans-serif';
            });
        }


        document.querySelectorAll(".rate_num").forEach(rate => {
            rate.style.direction = language === 'ar' ? 'rtl' : 'ltr';
        });
    }

    const savedLanguage = getLanguagePreference();
    switchLanguage(savedLanguage);

    function languageSelects() {
        const languageSelect = document.getElementById('language-select');
        if (!languageSelect) {
            return;
        }
        languageSelect.addEventListener('change', function() {
            const selectedOption = languageSelect.options[languageSelect.selectedIndex];
            const selectedLang = selectedOption.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    }
    languageSelects()
}, 100);