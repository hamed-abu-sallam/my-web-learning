# Engineering Company Website 🌍⚙️

This project is a **modern, responsive, bilingual website** designed for an engineering & industrial company.  
It provides a professional digital presence that supports both Arabic (RTL) and English (LTR) interfaces —  
with instant language switching **without page reload**.

---

## 🎯 Project Goal
To deliver a dynamic and reliable company portfolio website that:
- Represents the brand professionally
- Provides a smooth browsing experience
- Supports both Arabic & English customers
- Works perfectly on all devices (Responsive Design)

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🌐 Bilingual Support | Switch between Arabic & English instantly using localStorage memory |
| 📱 Responsive Design | Fully optimized for mobile, tablet, and desktop |
| 🎬 Scroll Animations | Sections animate smoothly when entering the viewport |
| 📂 Modal Windows | Popups for showing project or catalog details |
| 🧿 Clean UI & UX | Modern layout with strong visual structure |
| 🔐 Lightweight & Secure | Static site = no backend, very fast and safe |

---

## 🧠 Code Structure & Logic
The JavaScript file is structured into 4 main parts:

1️⃣ **switchLanguage()**
- Updates the UI language instantly
- Saves preference using `localStorage`
- Adjusts `lang` + `dir` attributes dynamically
- Changes content using `data-ar` + `data-en`

2️⃣ **Mobile Menu**
- Toggle navigation on smartphones
- Auto-close when selecting a link

3️⃣ **Scroll Animations**
- Powered by `Intersection Observer API`
- Adds `.animate-in` class when elements appear on screen

4️⃣ **Modal Logic**
- Open & close project popups smoothly
- Updates modal content based on selected language

---

## 🗂️ Folder Structure


├── index.html
├── 404.html
├── css/
│ └── style.css
├── js/
│ └── script.js
├── images/
└── docs/ (Catalogs / PDFs)


---

## 🚀 Live Demo  
🔗 | Company Portfolio | Modern, responsive, bilingual website designed for an engineering & industrial company. Supports Arabic (RTL) and English (LTR) with instant language switching without page reload. | [Live](https://hamed-abu-sallam.github.io/my-web-learning/projects/Company_Portfolio/) | ![Company Portfolio](my-web-learning/assets/images/company-portfolio.jpeg) |


---

## 🔄 Future Plans
- Add more company services
- Add animated counters + client logos
- Portfolio gallery with filtering
- SEO improvements & sitemap

---

### ✍️ Developed by  
**Hamed Abu Sallam** — Web Developer  
Always learning & improving… 🚀

