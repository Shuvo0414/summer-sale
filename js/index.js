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
    total = parseInt(total) + parseInt(itemTotalPrice)+ '.00TK';
    
   
    // console.log(total);
    const totalPriceString = document.getElementById('total-price').innerText = total;
    
    const totalPrice = parseFloat(totalPriceString);
    
    // console.log(totalPrice);

    let makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (totalPrice > 0){
        makePurchaseBtn.removeAttribute('disabled');
    }
    
    // applyBtn
    const applyBtn = document.getElementById('apply-btn');
    if(totalPrice >= 200){
        applyBtn.removeAttribute('disabled');
    }else{
        applyBtn.setAttribute('disabled', true);
    }

return totalPrice;
}

function applyBtn (){
    
        let inputField = document.getElementById('coupon-field').value;
        if (inputField === 'SELL200'){
         const discountedAummont = parseInt(total) * 0.20;
         const fiexdDiscountAmount = discountedAummont.toFixed(2);
         const discountTotal = parseFloat(total) - fiexdDiscountAmount;
         console.log(fiexdDiscountAmount, discountTotal);

         const discountAmountArea = document.getElementById('discount-amount');
         discountAmountArea.innerText = fiexdDiscountAmount + 'TK';

         const discountTotalArea = document.getElementById('discount-total');
         discountTotalArea.innerText = discountTotal + '0 TK'

        }
        
}

document.getElementById('go-home-btn').addEventListener('click', function(){
    location.reload();
    
})




