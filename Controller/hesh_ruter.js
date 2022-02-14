let homePage = document.getElementById("homePage");
let gallert = document.getElementById("gallery");
let projects = document.getElementById("projects");
let activities = document.getElementById("activities");
let contacts = document.getElementById("contacts");
// Error page is not included
let errorPage = document.getElementById("errorPage");

contacts.style.display="none";

window.addEventListener("load", function () {
     this.location.hash="";
     homePage.style.display = "flex";
     gallert.style.display = "none";
     projects.style.display = "none";
     activities.style.display = "none";
     contacts.style.display = "none";
     errorPage.style.display = "none";

});

window.addEventListener("hashchange", switchPage);
function switchPage() {
     let hash = location.hash.slice(1);
     switch (hash) {
          case "homePage":
               homePage.style.display = "flex"
               gallert.style.display = "none";
               projects.style.display = "none";
               activities.style.display = "none";
               contacts.style.display = "none";
               errorPage.style.display = "none";
               break;
          case "gallery":
               homePage.style.display = "none"
               gallert.style.display = "flex";
               projects.style.display = "none";
               activities.style.display = "none";
               contacts.style.display = "none";
               errorPage.style.display = "none";
               break;
          case "projects":
               homePage.style.display = "none"
               gallert.style.display = "none";
               projects.style.display = "flex";
               activities.style.display = "none";
               contacts.style.display = "none";
               errorPage.style.display = "none";
               addModalImgReaction();
               break;
          case "activities":
               homePage.style.display = "none"
               gallert.style.display = "none";
               projects.style.display = "none";
               activities.style.display = "flex";
               contacts.style.display = "none";
               errorPage.style.display = "none";
               break;
          case "contacts":
               homePage.style.display = "none"
               gallert.style.display = "none";
               projects.style.display = "none";
               activities.style.display = "none";
               contacts.style.display = "flex";
               errorPage.style.display = "none";
               break;
          case "":
               homePage.style.display = "flex"
               gallert.style.display = "none";
               projects.style.display = "none";
               activities.style.display = "none";
               contacts.style.display = "none";
               errorPage.style.display = "none";
               break;
     }
}

// nav sticky effect bottom border
window.addEventListener("scroll", function () {
     // !!! windos,pageYOffset -> y scrolling position of the window!
     yOffset = window.pageYOffset;

     if (yOffset > 0) {
         nav.style.boxShadow="0 1px 0px grey"               
     }

     if(yOffset===0){
          nav.style.boxShadow="none"      
     } 

})
