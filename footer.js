// ===== FOOTER =====
    const footerHTML = `
      <footer class="site-footer">
        <div class="footer-links">
          <a href="https://etesty2.mdcr.cz" target="_blank">Elektronické testy MDČR</a>
          <a href="https://jan-muller.cz" target="_blank">Vytvořil Jan Müller</a>
        </div>
        <div class="footer-info">
          <p><strong>IČO:</strong> <span>28266145</span></p>
          <p><strong>Datová schránka:</strong> <span>sf3v5i5</span></p>
        </div>
      </footer>
    `;
    document.getElementById("footer-container").innerHTML = footerHTML;

});
CSS – hlavní body pro mobil a desktop:

css
Zkopírovat kód
/* HEADER */
.site-header {
  max-width: 1200px;
  margin: 10px auto;
  padding: 10px 20px;
  background: linear-gradient(135deg, #4da6ff 0%, #004080 50%, #4da6ff 100%);
  color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  max-height: 50px;
}

.site-header h1 {
  font-size: 1.2em;
  margin: 0;
}

/* NAVIGACE */
nav ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
  list-style: none;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav a.active {
  text-decoration: underline;
}

/* MENU TOGGLE */
.menu-toggle {
  font-size: 2em;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
}

/* FOOTER */
.site-footer {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px 30px;
  background: linear-gradient(135deg, #00bfa5, #4da6ff);
  color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-size: 0.95em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.footer-links a {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}

.footer-info p {
  margin: 0;
  font-weight: bold;
}

.footer-info span {
  color: #ffd700;
}

/* MOBILNÍ VERZE */
@media (max-width: 768px) {
  .logo-title {
    flex-direction: column;
    text-align: center;
  }

  .site-header h1 {
    font-size: 1.5em;
  }

  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 10px 0;
    background-color: #0066cc;
    border-radius: 8px;
  }

  nav ul.show {
    display: flex;
  }

  nav li a {
    display: block;
    padding: 10px;
    text-align: center;
  }
}
💡 Výhody této verze:

Logo a název školy se neztrácí na mobilu.

Hamburger menu funguje.

Footer je kompaktní, bez | a datová schránka na jednom řádku.

Jednoduché přizpůsobení stylu i pro menší zařízení.

Pokud chceš, můžu ti ještě udělat verzi s jemnějším gradientem a menšími logy pro telefony, aby header nepůsobil přeplněně. Chceš, abych to udělal?








Zeptat se služby ChatGPT





