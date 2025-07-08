async function carregarUltimosPosts() {
  const pastaPosts = "./posts/";
  const container = document.querySelector('.coluna-esquerda');

  const arquivos = [
    "teste2.html",
    "teste.html",
    "olamundo.html",
    "vermais.html"
  ]; 

  const ul = document.createElement('ul');

  for (let arquivo of arquivos.slice(0, 5)) {
    try {
      const res = await fetch(pastaPosts + arquivo);
      const texto = await res.text();

      const doc = new DOMParser().parseFromString(texto, "text/html");
      const titulo = doc.querySelector('title')?.textContent || arquivo;

      const li = document.createElement('li');
      const link = document.createElement('a');

      // Aponta para leitura.html com src como parâmetro
      link.href = `leitura.html?src=${pastaPosts + arquivo}`;
      link.textContent = titulo;

      li.appendChild(link);
      ul.appendChild(li);
    } catch (e) {
      console.error("Erro ao carregar", arquivo, e);
    }
  }

  container.appendChild(ul);
}
