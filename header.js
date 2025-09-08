document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header style="
        max-width: 1200px;      
        margin: 20px auto;     
        padding: 20px 30px;    
        background: linear-gradient(135deg, #4da6ff 0%, #004080 50%, #4da6ff 100%);
        color: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    ">
      <div class="logo-title" style="display: flex; align-items: center; justify-content: center; gap: 15px;">
        <img src="uvod.jpg" alt="Logo Autoškoly" style="max-height: 80px;">
        <h1 style="font-size: 2em; margin: 0;">Autoškola Radek Brtník</h1>
      </div>
      <button class="menu-toggle" aria-label="Otevřít menu" style="font-size: 2em; background: none; border: none; color: white; cursor: pointer;">☰</button>
    </header>
    <nav>
      <ul style="
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        margin-top: 10px;
      ">
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
