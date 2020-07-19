var addToCartButtons = document.getElementsByClassName('shop-items_button')
for (var i = 0; i<addToCartButtons.length;i++){
    var button=addToCartButtons[i]
    button.addEventListener('click',addToCartClicked)
}

function addToCartClicked (event){
    var button=event.target
    var shopItem=button.parentElement.parentElement
    var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText
    console.log(title)
}