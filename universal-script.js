//This is the page for all the JS script for the Westec website!


//A key value pair array used to hold all the items of the site
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
        shortName: "Koss Headset",
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


//Button for the products list page to show all the filters
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

    const rangeInput = document.querySelectorAll('.slider-range-input input');
    let priceMin = document.getElementById('price-min');
    let priceMax = document.getElementById('price-max');
    progress = document.querySelector(".slider-body .slider-range");

    let priceGap = 20;

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);

            if(maxVal - minVal < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal-priceGap;
                }else{
                    rangeInput[1].value = minVal+priceGap;
                }
            }else{
                priceMin.innerHTML = minVal.toString();
                priceMax.innerHTML = maxVal.toString();
                progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";
            }
        });
    });
};


//Back button to close out of the filters and reshow the items
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



//product details page - image carousel
let slideIndex = 1;
showSlides(slideIndex);

//next/previous image controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("item-container__img");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++){
        slides[i].style.display = "none";
    }
    
    for (i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active-img", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-img";
}

//product details page - description accordion --- idk what's wrong with this rn, will fix soon
var accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//Shopping cart script - quantity button
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