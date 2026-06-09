const sharePanel = document.querySelector(".share-panel");
const contactDetails = document.querySelector(".contact-details");
const shareIcon = document.querySelector(".share-icon");
const productDetails = document.querySelector(".product-details");
const sharePanelIcon = document.querySelector(".share-panel-icon");

function isDesktop() {
  return window.innerWidth >= 628;
}

shareIcon.addEventListener("click", () => {
    
  if (isDesktop()) {
    
    sharePanel.classList.toggle("hidden");
    shareIcon.classList.toggle("active");
    
  } else {
    sharePanel.classList.toggle("hidden");
    contactDetails.classList.toggle("hidden");
    productDetails.classList.toggle("share-active");
  }
});

sharePanelIcon.addEventListener("click", () => {
  sharePanel.classList.toggle("hidden");
  contactDetails.classList.remove("hidden");
  productDetails.classList.toggle("share-active");
  shareIcon.classList.remove("active"); 
});
