function changeTab(tabIndex) {
  // Cacher tous les contenus d'onglet
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = "none";
  });

  // Afficher le contenu de l'onglet sélectionné
  var selectedTab = document.getElementById("tab" + (tabIndex + 1));
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}
