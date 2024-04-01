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

function showFeatures(){
  console.log('show features called');

  fetch("./assets/videos.json").then(response => response.json())
  .then(data =>{
    for (var i = 0; i < data.length; i++) {
      var container = document.getElementById('video-card-container');
      if (container.innerHTML != null)
        container.innerHTML += videoCard (i, data[i]);
    }
  })
  .catch(error =>{
    console.error("Fetch error:", error)
  })
}

function videoCard(index, video_id){
  console.log("videoCard called")
  return `
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Feature ${index +1}</h5>
        <p class="card-text">Description for Feature 1</p>
        <div class="embed-responsive embed-responsive-16by9 card-video">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/${video_id}"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>;
  `
}

showFeatures()