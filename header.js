document.addEventListener("DOMContentLoaded", () => {
    // HEADER
    const headerHTML = `
      <header class="site-header">
        <div class="logo-title">
          <img src="uvod.jpg" alt="Logo Autoškoly" class="logo">
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
    document.querySelector(".menu-toggle").addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("show");
    });
