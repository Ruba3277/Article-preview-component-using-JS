const share=document.querySelector(".share");
const sharePanel=document.querySelector(".share-panel");
const contactDetails=document.querySelector(".contact-details");
const sharePanelIcon=document.querySelector(".share-panel-icon");
const productDetails=document.querySelector(".product-details");
function isDesktop() {
    return window.innerWidth >= 628; 
}
share.addEventListener("click",()=>{
    if(isDesktop()){
        sharePanel.classList.toggle("hidden");
        contactDetails.classList.remove("hidden");
        productDetails.classList.remove("share-active");

    }
    else{
        sharePanel.classList.toggle("hidden");
        contactDetails.classList.toggle("hidden");
        productDetails.classList.toggle("share-active");
    }
       
});
sharePanelIcon.addEventListener("click",()=>{
    
    sharePanel.classList.toggle("hidden");
    contactDetails.classList.remove("hidden");
    productDetails.classList.toggle("share-active");
   
    
});


