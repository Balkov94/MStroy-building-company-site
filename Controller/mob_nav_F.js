// mobile nav function GLOBAL VARIABLES
let mobile_nav_icon = document.getElementById("mobile_nav_icon")
mobile_nav_icon.addEventListener("click", function () {
     document.getElementById("myNav").style.width = "100%";
     let mobile_links_container = document.getElementsByClassName("overlay-content")[0];
     let mobile_links = mobile_links_container.children;
     for (let i = 0; i < mobile_links.length; i++) {
          //     mobile nav  inner links
          mobile_links[i].addEventListener("click", function () {
               document.getElementById("myNav").style.width = "0%";
          });
     }
});

// close button
let mobile_close_button = document.getElementById("mob_nav_close");
mobile_close_button.addEventListener("click", function () {
     document.getElementById("myNav").style.width = "0%";
});


