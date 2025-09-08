document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer style="
        max-width: 900px;  /* stejné jako hlavní obsah */
        margin: 20px auto; /* odsazení od okrajů stránky */
        padding: 20px 30px;
        background: linear-gradient(135deg, #00bfa5, #4da6ff);
        color: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        font-size: 1em;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 5px;
    ">
        <div>
            <a href="https://etesty2.mdcr.cz" target="_blank" style="color: white; font-weight: bold; text-decoration: underline;">Elektronické testy MDČR</a> &nbsp; | &nbsp;
            <a href="https://jan-muller.cz" target="_blank" style="color: white; font-weight: bold; text-decoration: underline;">Vytvořil Jan Müller</a>
        </div>
        <div>
            <span style="font-weight: bold;">IČO: <span style="color: #ffd700;">28266145</span></span> &nbsp; | &nbsp;
            <span style="font-weight: bold;">Datová schránka: <span style="color: #ffd700;">sf3v5i5</span></span>
        </div>
    </footer>
    `;
    document.getElementById("footer-container").innerHTML = footerHTML;
});
