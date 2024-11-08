(() => {
  // Variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // Data
  const infoBoxes = [
    {
      title: "Bring Me the Horizon Logo with Touch Controls",
      text: "Exclusive Bring Me the Horizon logo functions as a touch-sensitive control. Tap to play/pause music, answer calls, or hold to activate your voice assistant.",
      image: "images/bmth-hotspot.png",
      
    },
    {
      title: "Noise Cancellation",
      text: "Specially designed vents for effective noise cancellation, enhancing your listening experience.",
      image: "images/volume-off-solid.svg"
    }, 
    {
      title: "Silicone Earbuds",
      text: "Soft silicone tips available in multiple sizes for a snug fit and optimal noise isolation.",
      image: "images/thumbs-up-regular.svg"
    }, 
    {
      title: "Fast Charging",
      text: "Metal contacts for secure charging and fast charging when placed in the case.",
      image: "images/battery-full-solid.svg"
    }, 
    {
      title: "10-hour battery life",
      text: "Enjoy up to 10 hours of playback on a single charge—perfect for all-day use.",
      image: "images/clock-regular.svg"
    }, 

  ];


  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      // Correct template literal usage
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      if (selected) {
        
        let hotspotTitle = document.createElement("h2");
        hotspotTitle.textContent = infoBox.title;

        let description = document.createElement("p");
        description.textContent = infoBox.text;

        let image = document.createElement("img");
        image.src = infoBox.image; 
        image.style.width = "50px";  
        image.style.height = "50px";

        selected.appendChild(hotspotTitle);
        selected.appendChild(description);
        selected.appendChild(image);
      }
    });
  }


  function showInfo() {
    let selected = document.querySelector(`#${this.id} .HotspotAnnotation`);
    if (selected) {
      gsap.to(selected, { duration: 1, autoAlpha: 1 });
    }
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.id} .HotspotAnnotation`);
    if (selected) {
      gsap.to(selected, { duration: 1, autoAlpha: 0 });
    }
  }

  // Event listeners
  model.addEventListener("load", loadInfo); // Calls loadInfo when model is loaded

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
