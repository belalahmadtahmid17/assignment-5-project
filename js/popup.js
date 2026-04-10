function openPopup(){
    const popUp = document.getElementById('popup');
    popUp.classList.remove("hidden");
    popUp.classList.add("flex");
}
function closePopup(){
    const popUp = document.getElementById('popup');
    popUp.classList.add("hidden");
    popUp.classList.remove("flex");
}