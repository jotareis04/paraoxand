document.addEventListener("DOMContentLoaded", function () {
  /**
   
   * @param {string} param The name of the parameter to get.
   * @returns {string|null} The value of the parameter or null if not found.
   */
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  
  function sendLove() {
    
    const name = getQueryParam("name") || "Beatriz";
    const message = document.getElementById("message");
    if (message) {
      message.innerHTML = `Para, ${name}! ❤️`;
      message.style.opacity = 1; 
    }


    for (let i = 0; i < 50; i++) {
      setTimeout(createHeart, i * 150);
    }
  }
 
  sendLove();

 
  const memoriesSection = document.getElementById("memories");
  setTimeout(() => {
    if (memoriesSection) {
      memoriesSection.classList.remove("hidden");
    }
  }, 25000); // 25 segs
});
