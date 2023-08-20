let total = 0;
function handleClick(target) {
    //  console.log();
    let selectedItemContainer = document.getElementById('selected-item');
    let count = selectedItemContainer.childElementCount;
    let itemName = target.childNodes[3].childNodes[3].innerText;
    let p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);
    
    let itemTotalPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(itemTotalPrice) + '.00TK';

    // console.log(total);
    const totalPrice = document.getElementById('total-price').innerText = total;
   
}




