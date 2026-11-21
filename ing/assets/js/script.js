function mudarcor() {
  // 1. Define a variável estiloRaiz antes de usá-la
  let estiloRaiz = getComputedStyle(document.documentElement);
  let corPrincipal = estiloRaiz.getPropertyValue('--corfundo').trim();
  let corTitulos = estiloRaiz.getPropertyValue('--cortitle').trim();
  let corTextos = estiloRaiz.getPropertyValue('--cortext').trim();
let botao = document.getElementById("botao");
  // 2. Compara e alterna a cor
  if (corPrincipal === '#0F172A') {
    corPrincipal = '#90adef';
    corTitulos = "#0F172A";
    corTextos = "#2a2f35";
botao.innerHTML = "Haz clic para el tema oscuro"
  } else {
    corTextos ="#94A3B8";
    corPrincipal = '#0F172A';
corTitulos = "#F8FAFC";
botao.innerHTML = "Haz clic para el tema claro";
  }

  // 3. Aplica o novo valor na raiz do CSS
  document.documentElement.style.setProperty('--corfundo', corPrincipal);
  document.documentElement.style.setProperty('--cortitle', corTitulos);
  document.documentElement.style.setProperty('--cortext', corTextos);
}
