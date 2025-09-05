// header.js
document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
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
    document.getElementById("header-container").innerHTML = headerHTML;

    // zvýraznění aktivní stránky
    const current = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
        if(link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });

    // toggle menu na mobilu
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});
