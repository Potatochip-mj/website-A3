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

function showFilters(){
    items = document.querySelector('.items-container');
    search = document.querySelector('.filter-bar-search');
    sort = document.querySelector('.filter-bar-sort');
    filterButton = document.querySelector('.filter-bar-filter');
    backButton = document.querySelector('.back-button-container');
    filters = document.querySelector('.filters-container');

    items.style.display = 'none';
    search.style.display = 'none';
    sort.style.display = 'none';
    filterButton.style.display = 'none';
    backButton.style.display = 'flex';
    filters.style.display = 'flex';
};

function showItems(){
    items = document.querySelector('.items-container');
    search = document.querySelector('.filter-bar-search');
    sort = document.querySelector('.filter-bar-sort');
    filterButton = document.querySelector('.filter-bar-filter');
    backButton = document.querySelector('.back-button-container');
    filters = document.querySelector('.filters-container');

    items.style.display = 'grid';
    search.style.display = 'flex';
    sort.style.display = 'flex';
    filterButton.style.display = 'flex';
    backButton.style.display = 'none';
    filters.style.display = 'none';
};

let priceMin = document.getElementById("price-min");
let priceMax = document.getElementById("price-max");

let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");

let dotLeft = document.getElementById("slider-dot-left");
let dotRight = document.getElementById("slider-dot-right");

let sliderRange = document.getElementById("sider-range-id");

function setLeftValue(){
    let value = this.value;
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    value = Math.min(parseInt(value), parseInt(inputRight.value) - 1);

    let percent = ((value - min) / (max - min)) * 100;

    sliderRange.style.left = percent + '%';
    dotLeft.style.left = percent + '%';
    titleMin.innerText = value;
}

function setRightValue(){
    let value = this.value;
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    value = Math.max(parseInt(value), parseInt(inputLeft.value) + 1);

    let percent = ((value - min) / (max - min)) * 100;

    sliderRange.style.right = (100 - percent) + '%';
    dotLeft.style.right = (100 - percent) + '%';
    titleMax.innerText = value;
}

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);