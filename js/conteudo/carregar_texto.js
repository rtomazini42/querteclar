async function carregarTextoNaColunaMeio(url) {
  try {
    const resposta = await fetch(url);
    const textoHtml = await resposta.text();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = textoHtml;

    const colunaMeio = document.querySelector(".coluna-meio");
    if (colunaMeio) {
      colunaMeio.innerHTML = tempDiv.innerHTML;

      // Executa scripts injetados
      const scripts = colunaMeio.querySelectorAll("script");
      scripts.forEach(script => {
        const novoScript = document.createElement("script");
        if (script.src) {
          novoScript.src = script.src;
        } else {
          novoScript.textContent = script.textContent;
        }
        document.body.appendChild(novoScript); 
      });
    }
  } catch (erro) {
    console.error("Erro ao carregar conteúdo:", erro);
  }
}
