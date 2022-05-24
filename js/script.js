let arr_img = ['cappello', 'orologio', 'scarpa', 'zaino'];
let portafoglio = generate_budget();

let shop = document.getElementById('shop');
let budget = document.getElementById('budget');
budget.innerHTML = '<h1>' + portafoglio + '</h1>';

arr_img.forEach(ele => {
    let price = generate_price();
    shop.innerHTML += '<div>' + 
                        '<h3>' + ele + '</h3>' +
                        '<img src="img/' + ele + '.jpg">' + 
                        '<h3>' + price + '€ </h3>' + 
                        '<button onclick="add_to_cart('+ price +')">Add to cart</button>' +
                     '</div>'
})

function add_to_cart(importo){
    if(portafoglio < importo){
        alert('Hai finito il budget');
        return portafoglio;
    }
    portafoglio -= importo;
    budget.innerHTML = portafoglio;
}

function generate_price(){
    let price = Math.random() * 100;
    return price.toFixed(2);
}

function generate_budget(){
    let budget = Math.random() * 1000;
    return budget.toFixed(2);
}

