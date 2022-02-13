// gett all img from "procets" add function to make modal img box (zoom on screen)
function addModalImgReaction() {
     let all_cards_imgs = document.getElementsByClassName("cards_imgs");
    
     close_button.addEventListener("click", function () {
          myModal.style.display = "none";
     });
     for (let i = 0; i < all_cards_imgs.length; i++) {
          all_cards_imgs[i].addEventListener("click", function () {
               myModal.style.display = "block";
               img_in_modal.src = this.src;
               caption.innerHTML = this.alt;
          });
     }
}