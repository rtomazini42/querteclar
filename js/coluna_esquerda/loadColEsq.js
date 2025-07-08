  async function carregarUltimosPosts() {
    const pastaPosts = "/posts/";
    const container = document.querySelector('.coluna-esquerda');

    // Lista manual ou via JSON no futuro (por enquanto, hardcode para exemplo)
    const arquivos = [

      "teste2.html",
      "teste.html",
      "olamundo.html",
      "vermais.html"
    ]; // Ordem decrescente (últimos primeiro)

    const ul = document.createElement('ul');

    for (let arquivo of arquivos.slice(0, 5)) {
      try {
        const res = await fetch(pastaPosts + arquivo);
        const texto = await res.text();

        // Extrair o <title> usando DOMParser
        const doc = new DOMParser().parseFromString(texto, "text/html");
        const titulo = doc.querySelector('title')?.textContent || arquivo;

        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = pastaPosts + arquivo;
        link.textContent = titulo;
        li.appendChild(link);
        ul.appendChild(li);
      } catch (e) {
        console.error("Erro ao carregar", arquivo, e);
      }
    }

    container.appendChild(ul);
  }
