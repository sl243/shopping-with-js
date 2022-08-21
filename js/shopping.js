const cartArray = [];

function displayCard(cartProducts) {
    // console.log(cartProducts)
    let totalPrice = 0;
    const productItems = document.getElementById('product-items');
    productItems.innerText = '';
    for (let i = 0; i < cartArray.length; i++) {
        const name = cartProducts[i].elementName;
        const price = cartProducts[i].elementPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        productItems.appendChild(tr);
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `;

    productItems.appendChild(tr);
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const elementName = element.parentNode.parentNode.children[0].innerText;
    const elementPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const elementObj = {
        elementName: elementName,
        elementPrice: parseInt(elementPrice)
    }

    cartArray.push(elementObj);
    // console.log(cartArray.length)

    document.getElementById('total-product-added').innerText = cartArray.length;

    displayCard(cartArray);
}