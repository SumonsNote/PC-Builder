function updatePrice(itemId, price) {
    const ProductPrice = document.getElementById(itemId);
    ProductPrice.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price)
    })
}

onClick('sixteenGB', "memory-cost", 200);
onClick('eightGB', "memory-cost", 0);
onClick('ssd1', "storage-cost", 0);
onClick('ssd2', "storage-cost", 200);
onClick('ssd3', "storage-cost", 500);
onClick('free-delivery', "delivery-cost", 0);
onClick('paid-delivery', "delivery-cost", 20);

const promoCode = 'P-Hero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const code = document.getElementById('promo-input').value;
    if (code == promoCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
    }
})