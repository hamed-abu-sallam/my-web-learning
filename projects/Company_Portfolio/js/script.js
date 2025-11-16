document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const html = document.documentElement;
    
    // 🎯 الإضافة: استرجاع اللغة المخزنة وتطبيقها 🎯
    const initialLang = localStorage.getItem('siteLang') || 'en';
    html.setAttribute('lang', initialLang);

    // ===================================
    // 1. وظيفة التبديل اللغوي (Language Switcher)
    // ===================================

    function switchLanguage(targetLang) {
        
        // حفظ اللغة في المتصفح (Local Storage)
        localStorage.setItem('siteLang', targetLang); 

        // هنا يتم التبديل بناء على اللغة الحالية
        html.setAttribute('lang', targetLang);
        html.setAttribute('dir', targetLang === 'ar' ? 'rtl' : 'ltr');
        
        // تبديل النصوص الثنائية باستخدام data-* attributes
        document.querySelectorAll('[data-ar], [data-en]').forEach(element => {
            const translation = element.getAttribute(`data-${targetLang}`);
            // التحقق لتجنب تبديل النصوص الفارغة (مثل الأيقونات)
            if (translation && element.tagName !== 'I') { 
                element.textContent = translation;
            }
        });

        // تحديد نص وزر التبديل القادم
        const newToggleLang = targetLang === 'ar' ? 'en' : 'ar';
        const newToggleText = targetLang === 'ar' ? 'English' : 'العربية';
        langToggleBtn.setAttribute('data-lang', newToggleLang);
        langToggleBtn.textContent = newToggleText;
        
        // تبديل placeholder
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
            const newPlaceholder = input.getAttribute(`data-${targetLang}-ph`);
            if (newPlaceholder) {
                input.setAttribute('placeholder', newPlaceholder);
            }
        });
        
        // تبديل رؤية نصوص الفقرات بما في ذلك قسم التواصل المباشر والخريطة والـ Modal
        document.querySelectorAll('.ar-text').forEach(el => {
            el.style.display = (targetLang === 'ar' ? 'block' : 'none');
        });
        document.querySelectorAll('.en-text').forEach(el => {
            el.style.display = (targetLang === 'en' ? 'block' : 'none');
        });
    }

    langToggleBtn.addEventListener('click', () => {
        const nextLang = langToggleBtn.getAttribute('data-lang');
        switchLanguage(nextLang);
    });
    
    // تشغيل الدالة للتأكد من الحالة الأولية الصحيحة
    switchLanguage(initialLang);


    // ===================================
    // 2. تفعيل قائمة الهاتف (Mobile Menu Toggle)
    // ===================================

    menuToggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
            }
        });
    });


    // ===================================
    // 3. حركات عند التمرير (Scroll Animations)
    // ===================================

    const sections = document.querySelectorAll('.scroll-animate');
    
    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    
    // ===================================
    // 4. النافذة المنبثقة (Modal Logic)
    // ===================================

    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // وظيفة فتح النافذة المنبثقة
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); 
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                // تحديث المحتوى ليتطابق مع اللغة الحالية
                const currentLang = html.getAttribute('lang');
                modal.querySelectorAll('.ar-text').forEach(el => {
                    el.style.display = (currentLang === 'ar' ? 'block' : 'none');
                });
                modal.querySelectorAll('.en-text').forEach(el => {
                    el.style.display = (currentLang === 'en' ? 'block' : 'none');
                });
            }
        });
    });

    // وظيفة إغلاق النافذة المنبثقة باستخدام زر الإغلاق (x)
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // وظيفة إغلاق النافذة المنبثقة بالضغط خارجها
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
            // إغلاق قائمة الهاتف إذا كانت مفتوحة عند الضغط خارجها
            if (event.target === document.body && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

});