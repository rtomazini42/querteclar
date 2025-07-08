// js/colunaDireita.js
document.addEventListener("DOMContentLoaded", function () {
  const colunaDireitaHTML = `
    <section class="coluna-direita">
      <div class="coluna">
        <h2>Links Legais</h2>
        <div class="colprofile">
          <div class="profile">
            <a href="https://rpubs.com/rtomazini/"><img src="assets/novosImagens/datascience.png" alt="Data Science"></a>
            <br>
            <a href="https://rpubs.com/rtomazini/">Se tá lendo funcionou</a>
          </div>
          <div class="profile">
            <a href="https://rtomazini.itch.io/"><img src="assets/novosImagens/games.png" alt="jogos"></a>
            <br>
            <a href="https://rtomazini.itch.io/">Jogos</a>
          </div>
          <div class="profile">
            <a href="https://github.com/rtomazini42"><img src="assets/novosImagens/github.png" alt="github"></a>
            <br>
            <a href="https://github.com/rtomazini42">Github</a>
          </div>
          <div class="profile">
            <a href="https://www.linkedin.com/in/renan-tomazini/"><img src="assets/novosImagens/lnkedin.png" alt="Linkedin"></a>
            <br>
            <a href="https://www.linkedin.com/in/renan-tomazini/">LinkedIn</a>
          </div>
          <div class="profile">
            <a href="https://drive.google.com/drive/folders/1YMoJl0Q_6i3bhkDgHwIGI_8AYQvv7_GW?usp=sharing"><img src="assets/novosImagens/certificado.png" alt="Certificados"></a>
            <br>
            <a href="https://drive.google.com/drive/folders/1YMoJl0Q_6i3bhkDgHwIGI_8AYQvv7_GW?usp=sharing">Certificados</a>
          </div>
          <div class="profile">
            <a href="https://devtomazini.blogspot.com/"><img src="assets/novosImagens/blog.png" alt="Atalho para blog"></a>
            <br>
            <a href="https://devtomazini.blogspot.com/">Blog de Dev</a>
          </div>
        </div>
        <div class="divisoria"></div>
      </div>

      <section class="coluna-direita coluna-bottom">
        <div class="coluna">
          <h2>Newsletters e blogs</h2>
          <div class="colprofile" id="colprofile"></div>
          <div class="divisoria"></div>
        </div>
      </section>
    </section>
  `;

  const placeholder = document.getElementById("coluna-direita-placeholder");
  if (placeholder) {
    placeholder.innerHTML = colunaDireitaHTML;
  }
});
