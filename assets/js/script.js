function mudarcor() {
  let estiloRaiz = getComputedStyle(document.documentElement);
  let corPrincipal = estiloRaiz.getPropertyValue('--corfundo').trim();
  let corTitulos = estiloRaiz.getPropertyValue('--cortitle').trim();
  let corTextos = estiloRaiz.getPropertyValue('--cortext').trim();
let botao = document.getElementById("botao");
  if (corPrincipal === '#0F172A') {
    corPrincipal = '#90adef';
    corTitulos = "#0F172A";
    corTextos = "#2a2f35";
botao.innerHTML = "Clique para tema Escuro"
  } else {
    corTextos ="#94A3B8";
    corPrincipal = '#0F172A';
corTitulos = "#F8FAFC";
botao.innerHTML = "Clique para tema Claro";
  }
  document.documentElement.style.setProperty('--corfundo', corPrincipal);
  document.documentElement.style.setProperty('--cortitle', corTitulos);
  document.documentElement.style.setProperty('--cortext', corTextos);
}
