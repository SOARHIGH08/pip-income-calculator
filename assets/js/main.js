let layoutDirect = document.getElementById('layoutDirect');
let layoutIndirect = document.getElementById('layoutIndirect');

let SS = document.getElementById('SS');
let SB = document.getElementById('SB');
let ES = document.getElementById('ES');
let EB = document.getElementById('EB');

let LS = document.getElementById('LS');
let CS = document.getElementById('CS');

let priceTable = document.getElementById("priceTable");
let firstRow = document.getElementById("firstRow");
let secondRow = document.getElementById("secondRow");

let layoutQuotedCurrency = document.getElementById("layoutQuotedCurrency");
let layoutRadioAction = document.getElementById("layoutRadioAction");

let buyingPrice = 0;
let sellingPrice = 0;
let endingPrice = 0;

let dTotal = document.getElementById('dTotal');
let iTotal = document.getElementById('iTotal');


function handleQuotedCurrencyRadioChange(radio) {
    var selectedQuotedCurrency = radio.value;

    if (selectedQuotedCurrency === 'd') {
        console.log('Direct option selected');

        layoutDirect.classList.add("show");
        layoutIndirect.classList.remove("show");

    } else if (selectedQuotedCurrency === 'i') {
        console.log('Indirect option selected');

        layoutIndirect.classList.add("show");
        layoutDirect.classList.remove("show");

    }
    layoutRadioAction.classList.remove("hide");
    updateTotal();
}

function handleActionRadioChange(radio) {
    var selectedAction = radio.value;

    if (selectedAction === 'b') {
        console.log('Buying option selected');


        buyingPrice = SB.value;
        sellingPrice = ES.value;
        endingPrice = sellingPrice;
        

        firstRow.innerHTML = `
            <td>Buying Price</td>
            <td>${buyingPrice}</td>
            <td>( start )</td>
        `;
        secondRow.innerHTML = `
            <td>Selling Price</td>
            <td>${sellingPrice}</td>
            <td>( end )</td>
        `;

        
    } else if (selectedAction === 's') {
        console.log('Selling option selected');

        
        buyingPrice = EB.value;
        sellingPrice = SS.value;
        endingPrice = buyingPrice;


        secondRow.innerHTML = `
            <td>Buying Price</td>
            <td>${buyingPrice}</td>
            <td>( end )</td>
        `;
        firstRow.innerHTML = `
            <td>Selling Price</td>
            <td>${sellingPrice}</td>
            <td>( start )</td>
        `;
    }
    
    layoutQuotedCurrency.classList.add("show");
    layoutDirect.classList.remove("hide");
    layoutIndirect.classList.remove("hide");
    priceTable.classList.add('show');
    updateTotal();

}

function updateTotal() {
    dTotal.innerText = ((parseFloat(sellingPrice - buyingPrice)) * LS.value* CS.value).toFixed(2);

    iTotal.innerText = ((parseFloat((sellingPrice - buyingPrice) / endingPrice)) * LS.value* CS.value).toFixed(2);
}