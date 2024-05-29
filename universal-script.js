//This is code for the shopping cart quantity button
//assigning variables for CSS selectors to interact with the button
const quantityButton = document.getElementsByClassName("quantity-btn"); //idk if const will work since there are technically multiple elements called "quantity-btn"
const quantityMinus = document.getElementsByClassName("qty-count--minus");
const quantityAdd = document.getElementsByClassName("qty-count--add");
const productQuantity = document.getElementsByClassName("product-qty")

//onclick for quantityAdd - add one to the input field value
function addOne(){
    let currentQuantity = parseInt(productQuantity.innerHTML);
    console.log(currentQuantity);

    let newQuantity = currentQuantity + 1;
    currentQuantity = newQuantity;
    console.log(currentQuantity);
}

//honestly idk what I'm doing, will attempt to fix this later

const products = [

    {
        shortName: "Sansai Bluetooth Speaker",
        longName: "SANSAI 20W TWS BLUETOOTH SPEAKER WITH LED LIGHTS",
        price: 84.70
        
    },
    {
        shortName: "Denon Bluetooth Speaker",
        longName: "DENON HOME 150 WIRELESS HEOS BLUETOOTH SPEAKER",
        price: 280.00
    },
    {
        shortName: "Mcdodo Cable",
        longName: "MCDODO 100W 5A USB-C TO USB-C HIGH SPEED LEAD - 1.2M",
        price: 24.00
    },
    {
        shortName: "Mcdodo Charger",
        longName: "MCDODO 3A RIGHT ANGLE USB TO RIGHT ANGLE LIGHTNING LEAD - 3M",
        price: 24.00
    },
    {
        shortName: "Tp-Link Port",
        longName: "TP-LINK 5 PORT NETWORK SWITCH HUB",
        price: 22.00
    },
    {
        shortName: "Sansai Remote",
        longName: "SANSAI 8 IN 1 UNIVERSAL REMOTE CONTROL WITH LEARNING FUNCTION",
        price: 26.95
    },
    {
        shortName: "Sonken Microphone",
        longName: "SONKEN 2CH WIRELESS MICROPHONE RECEIVER WITH 2 MICS INCLUDED",
        price: 400.00
    },
    {
        shortName: "Koss Headphones",
        longName: "KOSS BUDGET ON EAR STEREO HEADPHONES - BLACK",
        price: 70.00
    },
    {
        shortName: "Westec Headset",
        longName: "WESTEC KIDS 85DB RECHARGEABLE BLUETOOTH HEADPHONES - PURPLE",
        price: 59.00
    },
    {
        shortName: "Mcdodo Power Bank",
        longName: "MCDODO 10,000MAH POWER BANK - 2x QC3.0 USB + 1x PD TYPE-C OUTPUTS",
        price: 39.00
    }
];

function hideProductsPageElements(){
    items = document.querySelector('.items-container');
    search = document.querySelector('.filter-bar-search');
    sort = document.querySelector('.filter-bar-sort');

    items.style.visibility = 'hidden';
    search.style.visibility = 'hidden';
    sort.style.visibility = 'hidden';
};