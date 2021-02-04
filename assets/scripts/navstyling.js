window.onscroll = () => console.log(pageYOffset);

navColourChanger();

function navColourChanger() {
  
  const screenColliderJobs = document.getElementById("jobs-sticky");
  const screenColliderAbout = document.getElementById("about-sticky");
  const screenColliderStack = document.getElementById("stack-sticky");
  
    
      //find jobs collider
      let colliderCoordinatesJobs = screenColliderJobs.getBoundingClientRect();
      let colliderOffsetTopJobs = colliderCoordinatesJobs.top + window.pageYOffset;

      //find about collider
      let colliderCoordinatesAbout = screenColliderAbout.getBoundingClientRect();
      let colliderOffsetTopAbout = colliderCoordinatesAbout.top + window.pageYOffset;

      //find education collider
      let colliderCoordinatesStack = screenColliderStack.getBoundingClientRect();
      let colliderOffsetTopStack = colliderCoordinatesStack.top + window.pageYOffset;

  window.onscroll = function () {


    if (window.pageYOffset >= colliderOffsetTopJobs && window.pageYOffset <= colliderOffsetTopAbout) {

      document.getElementById("open-button").style.color = "#4f9fb3";
      document.getElementById("nav-top").style.color = "#4f9fb3";
      document.getElementById("nav-jobs").style.color = "#4f9fb3";
      document.getElementById("nav-stack").style.color = "#4f9fb3";
      document.getElementById("nav-about").style.color = "#4f9fb3";
      document.getElementById("nav-exit").style.color = "#4f9fb3";
    } else if (window.pageYOffset >= colliderOffsetTopAbout && window.pageYOffset <= colliderOffsetTopStack) {
      document.getElementById("open-button").style.color = "#6764a3";
      document.getElementById("nav-top").style.color = "#6764a3";
      document.getElementById("nav-jobs").style.color = "#6764a3";
      document.getElementById("nav-stack").style.color = "#6764a3";
      document.getElementById("nav-about").style.color = "#6764a3";
      document.getElementById("nav-exit").style.color = "#6764a3";
    } else if (window.pageYOffset >= colliderOffsetTopStack) {
      document.getElementById("open-button").style.color = "#3FA34D";
      document.getElementById("nav-top").style.color = "#3FA34D";
      document.getElementById("nav-jobs").style.color = "#3FA34D";
      document.getElementById("nav-stack").style.color = "#3FA34D";
      document.getElementById("nav-about").style.color = "#3FA34D";
      document.getElementById("nav-exit").style.color = "#3FA34D";
    } else{
      document.getElementById("open-button").style.color = "#f4f5f6";
      document.getElementById("nav-top").style.color = "#f4f5f6";
      document.getElementById("nav-jobs").style.color = "#f4f5f6";
      document.getElementById("nav-stack").style.color = "#f4f5f6";
      document.getElementById("nav-about").style.color = "#f4f5f6";
      document.getElementById("nav-exit").style.color = "#f4f5f6";
    }

  };
}

