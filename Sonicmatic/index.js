function showSection (sectionId) {
  var sections = document.getElementsByTagName ('section');
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id === sectionId) {
      sections[i].classList.remove ('hidden');
    } else {
      sections[i].classList.add ('hidden');
    }
  }
}
