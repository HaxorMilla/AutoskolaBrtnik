document.addEventListener("DOMContentLoaded", function() {
    // HTML pro header + nav
    const headerHTML = `
    <header class="fade-in">
        <div class="logo-title">
            <img src="uvod.jpg" alt="Logo Autoškoly">
            <h1>Autoškola Radek Brtník</h1>
        </div>
        <button class="menu-toggle" aria-label="Otevřít menu">☰</button>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Co nabízíme</a></li>
            <li><a href="vycvikridicu.html">Výcvik řidičů</a></li>
            <li><a href="skoleniridicu.html">Školení řidičů</a></li>
            <li><a href="cenik.html">Ceník</a></li>
            <li><a href="vozidla.html">Vozidla</a></li>
            <li><a href="kontakty.html">Kontakty</a></li>
            <li><a href="kestazeni.html">Ke stažení</a></li>
            <li><a href="skupiny.html">Skupiny</a></li>
            <li><a href="podminky.html">Podmínky</a></li>
        </ul>
    </nav>
    `;

    // Vloží HTML do header-container
    document.getElementById("header-container").innerHTML = headerHTML;

    // ===== Zvýraznění aktivní stránky =====
    const currentPage = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
        if(link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // ===== Hamburger menu pro mobil =====
    const toggleBtn = document.querySelector(".menu-toggle");
    const navList = document.querySelector("nav ul");
    toggleBtn.addEventListener("click", () => {
        navList.classList.toggle("show"); // přidá třídu .show → menu se otevře
    });

    // ===== Fade-in animace =====
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        setTimeout(() => el.classList.add("show"), 100); // malé zpoždění
    });
});
